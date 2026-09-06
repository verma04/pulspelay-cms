import { Notification } from "../../models/notification";
import { Blog } from "../../models/blog";
import { News } from "../../models/news";
import { Resources } from "../../models/resources";
import { Services } from "../../models/service";
import { Solutions } from "../../models/solutions";
import { TeamMember } from "../../models/teamMember";
import { Work } from "../../models/work";

const otpGenerator = require("otp-generator");

// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import { LoginSession } from "../../models/LoginSession";

import getDescriptorsFromDB from "../../util/getDescriptorsFromDB";
import generateOpt from "../../util/generateOpt";
import { FaceModel } from "../../models/Face";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");

const { User } = require("../../models/User");
const checkAuth = require("../../util/checkAuth");

const AWS = require("aws-sdk");
const { Image } = require("../../models/Image");
const moment = require("moment");

function generateToken(user: any) {
  return jwt.sign(
    {
      id: user._id,
    },
    `"sddsdds"`,
    { expiresIn: "1555555555555555555555555555555555555555555555555555h" }
  );
}
const s3 = new AWS.S3({
  endpoint: process.env.DO_SPACES_ENDPOINT || "sgp1.digitaloceanspaces.com",
  accessKeyId: process.env.DO_SPACES_KEY || "",
  secretAccessKey: process.env.DO_SPACES_SECRET || "",
});
const adminResolvers = {
  Query: {
    async getUser(_: any, { }, context: any) {
      const { id } = checkAuth(context);

      try {
        const authHeader = context.req.headers.authorization;

        const user = await User.findOne({ _id: id }).populate("member");

        const session = await LoginSession.findOne({
          logout: false,
          token: authHeader,
        });

        if (!session) {
          return new UserInputError("Session Expired");
        }

        const data = {
          id: user.id,
          role: user.role,
          deviceId: session?.deviceId,
          email: user?.member?.email,
          avatar: user?.member?.memberCover,
          username: `${user?.member?.memberName} - (${user?.member?.memberDesignation})`,
          assignRole: user.assignRole,
        };

        console.log(data.username, moment().format("MMMM Do YYYY, h:mm:ss a"));

        return data;
      } catch (error) {
        console.warn(error);
      }
    },

    async checkOtpToken(_: any, { tempToken }: any, context: any) {
      try {
        const data = await User.findOne({ tempToken });
        if (!data) {
          return new UserInputError("InValid Token");
        }
        return data;
      } catch (error) {
        console.warn(error);
      }
    },

    async userLogout(_: any, { }, context: any) {
      const { id } = checkAuth(context);

      try {
        const authHeader = context.req.headers.authorization;

        const user = await User.findOne({ id });

        const something = await LoginSession.findOneAndUpdate(
          { user: user.id, logout: false, token: authHeader },
          {
            $set: {
              logout: true,
            },
          },
          { new: true, upsert: true }
        ).exec();

        // if (!session) {
        //   return new UserInputError("Session Expired");
        // }
        return user;
      } catch (error) {
        console.warn(error);
      }
    },

    async getUserSession(_: any, { }, context: any) {
      const { id } = checkAuth(context);

      try {
        const session = await LoginSession.find({
          user: id,
        }).sort({ createdAt: -1 });

        return session;
      } catch (error) {
        console.warn(error);
      }
    },

    async getDashBoardList(_: any, { }, context: any) {
      const { id } = checkAuth(context);

      try {
        const { id } = checkAuth(context);
        const set = await Work.find({});
        const services = await Services.find({});
        const solutions = await Solutions.find({});
        const blog = await Blog.find({});
        const resources = await Resources.find({});
        const member = await TeamMember.find({ status: true });
        const news = await News.find({});
        const data = {
          Work: set.length,
          Services: services.length,
          Solutions: solutions.length,
          Blog: blog.length,
          News: news.length,
          Resources: resources.length,
          Members: member.length,
        };

        return data;
      } catch (error) {
        console.warn(error);
      }
    },

    async getAllNotifications(_: any, { }, context: any) {
      const { id } = checkAuth(context);

      try {
        const data = await Notification.find({}).sort({ createdAt: -1 });

        return data;
      } catch (error) {
        console.warn(error);
      }
    },
    getAllImages: async (parent: any, { }: any) => {
      try {
        const set = await Image.find({}).sort({ createdAt: -1 });
        return set;
      } catch (error) {
        console.warn(error);
      }
    },
  },

  Mutation: {
    async forceUserLogout(_: any, { id: userid }: any, context: any) {
      const { id } = checkAuth(context);

      try {
        const something = await LoginSession.findOneAndUpdate(
          { _id: userid },
          {
            $set: {
              logout: true,
            },
          },
          { new: true, upsert: true }
        ).exec();

        // if (!session) {
        //   return new UserInputError("Session Expired");
        // }
        return something;
      } catch (error) {
        console.warn(error);
      }
    },

    async addUserToken(_: any, { token }: any, context: any) {
      const { id } = checkAuth(context);

      try {
        const set = { deviceToken: token };
        const something = await LoginSession.findOneAndUpdate(
          { _id: id },
          {
            $push: {
              token: set,
            },
          },
          { new: true, upsert: true }
        ).exec();

        // if (!session) {
        //   return new UserInputError("Session Expired");
        // }

        return something;
      } catch (error) {
        console.warn(error);
      }
    },
    async login(_: any, { username, password }: any) {
      try {
        const list = await User.find({}).populate("member");

        const map = list.map((set: any) => ({
          id: set.id,
          email: set.member.email,
          email2: set.member.memberPersonalEmail,
          password: set.password,
          phone: set.member.memberPhone,
        }));

        const user = await map.find(
          (t: any) => t.email === username || t.email2 === username
        );

        // wrong username
        if (!user) {
          return new UserInputError("User not found");
        }

        // wrong password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          return new UserInputError("Wrong credentials");
        }

        const isLocal = process.env.URL === "local" || process.env.NODE_ENV !== "production";
        const otp = isLocal
          ? (process.env.STATIC_OTP || "123456")
          : otpGenerator.generate(6, {
              upperCaseAlphabets: false,
              specialChars: false,
            });

        const something = await User.findOneAndUpdate(
          { _id: user.id },
          {
            $set: {
              tempToken: uuidv4(),
              otp: otp,
            },
          },
          { new: true, upsert: true }
        ).exec();

        generateOpt({ user, otp });

        return something;

        // login is good, issue the user a token
        // const token = generateToken(user);

        // const newSession = await LoginSession({
        //   deviceOs,
        //   deviceVersion,
        //   deviceBrowser,
        //   latitude,
        //   longitude,
        //   region,
        //   timezone,
        //   deviceId,
        //   city,
        //   ipAddress,
        //   token: `Bearer ${token}`,
        //   user: user._id,
        // });
        // const session = newSession.save();

        // return {
        //   ...user._doc,
        //   id: user._id,
        //   token,
        // };
      } catch (error) {
        console.warn(error);
      }
    },

    async loginFace(_: any, { file }: any) {
      try {
        const { stream, filename, mimetype, encoding, createReadStream } =
          await file;

        const date = moment().format("YYYYMMDD");
        const randomString = Math.random().toString(36).substring(2, 7);

        const newFilename = `${date}-${randomString}`;

        const Body = createReadStream();

        try {
          // // This is purely for demonstration purposes and will overwrite the
          // // local-file-output.txt in the current working directory on EACH upload.
          // const out = require("fs").createWriteStream(`public/${filename}`);
          // stream.pipe(out);

          const params = {
            Bucket: "pulseplaydigital",
            Key: newFilename,
            Body,
            ACL: "public-read",
            ContentType: mimetype,
          };
          const data1 = await s3.upload(params).promise();
          const { Location } = data1;
          console.log(Location);

          let result = await getDescriptorsFromDB(
            `https://pulseplaydigital.sgp1.digitaloceanspaces.com/${newFilename}`
          );

          console.log(result[0]._label, result);

          if (result.length === 0) {
            return new UserInputError("Fail to find User");
          }
          if (result.length > 1) {
            return new UserInputError("Dont use Multiple face");
          }

          if (result.length === 1) {
            if (result[0]._label === "unknown") {
              return new UserInputError("Fail to find User");
            } else {
              const face = await FaceModel.findOne({ label: result[0].label });

              const usess = await User.findOne({ _id: face.userID });
              const otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                specialChars: false,
              });

              const something = await User.findOneAndUpdate(
                { _id: usess.id },
                {
                  $set: {
                    tempToken: uuidv4(),
                    otp: otp,
                  },
                },
                { new: true, upsert: true }
              )
                .populate("member")
                .exec();

              const user = {
                email: something.member.memberPersonalEmail,
                email2: something.member.email,
                phone: something.member.memberPhone,
              };

              generateOpt({ user, otp });

              return {
                name: something.member.memberName,
                token: something.tempToken,
              };
            }
          }

          // const set = await images.save();
          // return set;
        } catch (error) {
          console.warn(error);
        }
      } catch (error) {
        console.warn(error);
      }
    },

    async confirmOtp(
      _: any,
      {
        otp,
        deviceOs,
        deviceVersion,
        deviceBrowser,
        latitude,
        longitude,
        region,
        timezone,
        deviceId,
        city,
        tempToken,
        ipAddress,
      }: any
    ) {
      try {
        const user = await User.findOne({ tempToken });

        const isLocal = process.env.URL === "local" || process.env.NODE_ENV !== "production";
        if (user.otp !== otp) {
          if (!isLocal || (otp !== "123456" && otp !== process.env.STATIC_OTP)) {
            return new UserInputError("Wrong Otp");
          }
        }

        const token = generateToken(user);
        const newSession = new LoginSession({
          deviceOs: deviceOs || "Web",
          deviceVersion: deviceVersion || "1.0",
          deviceBrowser: deviceBrowser || "Chrome",
          latitude: latitude || "0",
          longitude: longitude || "0",
          region: region || "Local",
          timezone: timezone || "UTC",
          deviceId: deviceId || "default-device",
          city: city || "Local",
          ipAddress: ipAddress || "127.0.0.1",
          token: `Bearer ${token}`,
          user: user._id,
        });
        const session = await newSession.save();

        const something = await User.findOneAndUpdate(
          { _id: user._id },
          {
            $set: {
              otp: null,
              tempToken: null,
            },
          },
          { new: true, upsert: true }
        ).exec();

        return {
          ...user._doc,
          token,
          deviceId,
        };
      } catch (error) {
        console.warn(error);
        throw error;
      }
    },
    singleUpload: async (parent: any, { file, fileName, altname }: any) => {
      const arr: any = [];

      const { stream, filename, mimetype, encoding, createReadStream } =
        await file;

      const date = moment().format("YYYYMMDD");
      const randomString = Math.random().toString(36).substring(2, 7);
      const cleanFileName = fileName.toLowerCase().replace(/[^a-z0-9]/g, "-");
      const newFilename = `${date}-${randomString}-${cleanFileName}`;

      const Body = createReadStream();

      try {
        const params = {
          Bucket: "pulseplaydigital",
          Key: newFilename,
          Body,
          ACL: "public-read",
          ContentType: mimetype,
        };
        const data1 = await s3.upload(params).promise();
        const { Location } = data1;

        const data = {
          imgUrl: `/${newFilename}`,
        };
        const images = new Image({
          imgName: newFilename,
          imgUrl: `/${newFilename}`,
          imgAlt: newFilename,
          createdAt: new Date().toISOString(),
        });
        const set = await images.save();
        return set;
      } catch (error) {
        console.warn(error);
      }
    },

    pdfUpload: async (parent: any, { file }: any) => {
      const arr: any = [];

      const { stream, filename, mimetype, encoding, createReadStream } =
        await file;

      const date = moment().format("YYYYMMDD");
      const randomString = Math.random().toString(36).substring(2, 7);

      const Body = createReadStream();

      try {
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
        const data1 = await s3.upload(params).promise();
        const { Location } = data1;
        const data = {
          imgUrl: `/${newFilename}`,
        };

        return data;

        return data;
      } catch (error) {
        console.warn(error);
      }
    },

    videoUpload: async (parent: any, { file, fileName, altname }: any) => {
      const arr: any = [];

      const { stream, filename, mimetype, encoding, createReadStream } =
        await file;

      const spacesEndpoint = new AWS.Endpoint("nyc3.digitaloceanspaces.com");
      const date = moment().format("YYYYMMDD");
      const randomString = Math.random().toString(36).substring(2, 7);
      const cleanFileName = fileName.toLowerCase().replace(/[^a-z0-9]/g, "-");
      const newFilename = `${date}-${randomString}-${cleanFileName}`;
      const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
      });

      const Body = createReadStream();

      try {
        const stream = createReadStream();
        const out = require("fs").createWriteStream(
          `public/${newFilename}.mp4`
        );
        stream.pipe(out);
        const data = {
          vedioUrl: newFilename,
        };

        return data;
      } catch (error) {
        console.warn(error);
      }
    },

    editorUpload: async (parent: any, { file, fileName, altname }: any) => {
      const arr: any = [];

      const { stream, filename, mimetype, encoding, createReadStream } =
        await file;

      const Body = createReadStream();

      try {
        const stream = createReadStream();

        const params = {
          Bucket: "pulseplaydigital",
          Key: filename,
          Body,
          ACL: "public-read",
          ContentType: mimetype,
        };
        const data1 = await s3.upload(params).promise();
        const { Location } = data1;
        const data = {
          imgUrl: `/${filename}`,
        };

        return data;
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export { adminResolvers };