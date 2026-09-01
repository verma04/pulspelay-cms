import { Services } from "../../models/service";

const { DeviceInfo } = require("../../models/deviceInfo");
const checkAuth = require("../../util/checkAuth");
// @ts-ignore
import CryptoJS from "crypto-js";
import { KnownUser } from "../../models/knownUser";
import { CareerForm } from "../../models/careerForm";
import { HireUsForm } from "../../models/HireUs";
import { NewsLetter } from "../../models/NewsLetter";
import { pushNotification } from "../../util/pushNotifications";
import sendEmail from "../../util/sendGridEmail";
import sendGridEmail from "../../util/sendGridEmail";

const slugify = require("slugify");
const moment = require("moment");
const AWS = require("aws-sdk");
const s3 = new AWS.S3({
  endpoint: process.env.DO_SPACES_ENDPOINT || "sgp1.digitaloceanspaces.com",
  accessKeyId: process.env.DO_SPACES_KEY || "",
  secretAccessKey: process.env.DO_SPACES_SECRET || "",
});
const careerFormResolvers = {
  Query: {
    async getAllCareer(_: any, {}: any, context: any) {
      try {
        return CareerForm.find({}).sort({ createdAt: -1 });
      } catch (error) {
        throw error;
      }
    },
    async getHireUs(_: any, {}: any, context: any) {
      try {
        const { id } = checkAuth(context);
        return HireUsForm.find({}).sort({ createdAt: -1 });
      } catch (error) {
        throw error;
      }
    },
  },

  Mutation: {
    async addCareerForm(
      _: any,
      {
        candidateName,
        candidateEmail,
        candidatePhone,
        candidateMessage,

        candidatePosition,
        candidateCv,

        referrerName,
        referrerEmail,
        referrerPhone,
        referrerLocation,
        amxId,
        state,
      }: any,
      context: any
    ) {
      try {
        var bytes = CryptoJS.AES.decrypt(amxId, "secret key 123");
        var originalAmxId = bytes.toString(CryptoJS.enc.Utf8);

        const set = await KnownUser.findOneAndUpdate(
          { amxId: originalAmxId },
          { $set: { name: candidateName, email: candidateEmail } },
          { new: true, upsert: true }
        ).exec();

        pushNotification(`${candidatePosition}`, `${candidateName}`);

        const { filename, mimetype, encoding, createReadStream } =
          await candidateCv;
        const Body = createReadStream();
        const stream = createReadStream();
        const date = moment().format("YYYYMMDD");
        const randomString = Math.random().toString(36).substring(2, 7);
        const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, "-");
        const newFilename = `${date}-${randomString}-${cleanFileName}`;
        const params = {
          Bucket: "pulseplaydigital",
          Key: newFilename,
          Body,
          ACL: "public-read",
          ContentType: mimetype,
        };
        await s3.upload(params).promise();

        const newCareerForm = new CareerForm({
          candidateName,
          candidateEmail,
          candidatePhone,
          candidateMessage,
          candidatePosition,
          state,
          candidateCv: `/${newFilename}`,
          referrer: {
            referrerName,
            referrerEmail,
            referrerPhone,
            referrerLocation,
          },
          createdAt: new Date().toISOString(),
        });
        const form = newCareerForm.save();

        let mess: String = `
      <h2>New Career form received </h2>

    <li>Name: ${candidateName} </li>
     <li>Email: ${candidateEmail} </li>
     <li>Phone: ${candidatePhone} </li>
      <li>Organization: ${candidatePosition} </li>
      
   <li>CV: <a   href={https://pulseplaydigital.sgp1.digitaloceanspaces.com/${newFilename}} >View CV  </a > </li>
            `;

     await   sendGridEmail({
          content: mess,
          email: "careers@pulseplaydigital.com, hr@pulseplaydigital.com, deepakrai9@gmail.com, ",
          subject: "New Career form received",
       attachments: `https://pulseplaydigital.sgp1.digitaloceanspaces.com/${newFilename}.pdf`,
          cc :"ranjeet@pulseplaydigital.com, anup@pulseplaydigital.com"
     });
        
           const newsLetter = new NewsLetter({
          email: candidateEmail,
          createdAt: new Date().toISOString(),
        });

        await newsLetter.save();
        return form;
      } catch (error) {
        console.warn(error);
      }
    },

    async hireUsForm(
      _: any,
      { name, email, phone, service, skill, message, amxId }: any,
      context: any
    ) {
      try {
        var bytes = CryptoJS.AES.decrypt(amxId, "secret key 123");
        var originalAmxId = bytes.toString(CryptoJS.enc.Utf8);

        const set = await KnownUser.findOneAndUpdate(
          { amxId: originalAmxId },
          { $set: { name, email } },
          { new: true, upsert: true }
        ).exec();

        const newCareerForm = new HireUsForm({
          name,
          email,
          phone,
          service,
          skill,
          message,
          createdAt: new Date().toISOString(),
        });

        const form = await newCareerForm.save();
        const newsLetter = new NewsLetter({
          email,
          createdAt: new Date().toISOString(),
        });
        await newsLetter.save();
        return form;
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export { careerFormResolvers };
