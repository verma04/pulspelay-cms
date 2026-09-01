import { Services } from "../../models/service";

const { DeviceInfo } = require("../../models/deviceInfo");
const checkAuth = require("../../util/checkAuth");
// @ts-ignore
import CryptoJS from "crypto-js";
import { Contactus } from "../../models/contactUs";
import { NewsLetter } from "../../models/NewsLetter";
import { KnownUser } from "../../models/knownUser";
import sendEmail from "../../util/sendGridEmail";
import sendGridEmail from "../../util/sendGridEmail";
const slugify = require("slugify");
const moment = require("moment");

const contactusResolvers = {
  Query: {
    async getAllContactusForm(_: any, {}: any, context: any) {
      try {
        return Contactus.find({}).sort({ createdAt: -1 });
      } catch (error) {
        throw error;
      }
    },
  },

  Mutation: {
    async addContactusForm(
      _: any,
      {
        name,
        email,
        phone,
        message,
        organization,
        services,
        solutions,
        amxId,
      }: any,
      context: any
    ) {
      try {
        const newContactus = new Contactus({
          name,
          email,
          phone,
          message,
          organization,
          services,
          solutions,
          createdAt: new Date().toISOString(),
        });
        const form = await newContactus.save();
        var bytes = CryptoJS.AES.decrypt(amxId, "secret key 123");
        var originalAmxId = bytes.toString(CryptoJS.enc.Utf8);
        const set = await KnownUser.findOneAndUpdate(
          { amxId: originalAmxId },
          { $set: { name, email } },
          { new: true, upsert: true }
        ).exec();
        const newsLetter = new NewsLetter({
          email,
          createdAt: new Date().toISOString(),
        });
        await newsLetter.save();

        let mess: String = `
      <h2>New Contact us form received </h2>

    <li>Name: ${name} </li>
     <li>Email: ${email} </li>
     <li>Phone: ${phone} </li>
      <li>Organization: ${organization} </li>
      <li>Services: ${services} </li>
       <li>Solutions: ${solutions} </li>
        <li>Message: ${message} </li>
      
 
      `;
        sendGridEmail({
          content: mess,
          email:
            "info@pulseplaydigital.com , sujata@pulseplaydigital.com  , hr@pulseplaydigital.com , deepakrai9@gmail.com  , ranjeet@pulseplaydigital.com ,  anup@pulseplaydigital.com , anupdrai@gmail.com",
          subject: "New contact Us form received",
        });
        return form;
      } catch (error) {
        console.warn(error);
      }
    },

    async newsLetter(_: any, { email }: any, context: any) {
      try {
        const contact = await NewsLetter.create({
          email,
        });
        return contact;
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export { contactusResolvers };
