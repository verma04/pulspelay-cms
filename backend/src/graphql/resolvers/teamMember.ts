import uploadLabeledImages from "../../util/uploadLabeledImages";
import { TeamMember } from "../../models/teamMember";
import { User } from "../../models/User";
import welComeEmail from "../../util/htmlTemplate/welComeEmail";
const { UserInputError } = require("apollo-server");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const slugify = require("slugify");
const { DeviceInfo } = require("../../models/deviceInfo");
const checkAuth = require("../../util/checkAuth");

const moment = require("moment");
function generateToken(user: any) {
  return jwt.sign(
    {
      id: user.id,
    },
    `"sddsdds"`,
    { expiresIn: "1555555555555555555555555555555555555555555555555555h" }
  );
}
const teamMemberResolvers = {
  Query: {
    async getMember(_: any, {}, context: any) {
      try {
        const { id } = checkAuth(context);

        const set = await TeamMember.findOne({ _id: id });

        return set;
      } catch (error) {
        console.warn(error);
      }
    },
    async getAllTeamMember(_: any, { name }: any, context: any) {
      try {
        return TeamMember.find({})
          .populate({
            path: "updatedBy",
            populate: {
              path: "member",
            },
          })
          .sort({ sort: 1 });
      } catch (error) {
        console.warn(error);
      }
    },

    async getAllActiveTeamMember(_: any, { name }: any, context: any) {
      try {
        return TeamMember.find({ status: true }).sort({ sort: 1 });
      } catch (error) {
        console.warn(error);
      }
    },

    async getOneTeamMember(_: any, { id }: any, context: any) {
      const user = checkAuth(context);
      return TeamMember.findOne({ _id: id });
      try {
      } catch (error) {
        console.warn(error);
      }
    },

    async getOneTeamMemberBySlug(_: any, { slug }: any, context: any) {
      return TeamMember.findOne({ slug: slug, status: true });
      try {
      } catch (error) {
        console.warn(error);
      }
    },
  },

  Mutation: {
    async memberLogin(_: any, { email, password }: any) {
      const user = await TeamMember.findOne({ email });

      // wrong username
      if (!user) {
        return new UserInputError("User not found");
      }

      // wrong password

      if (password !== user.password) {
        return new UserInputError("Wrong credentials");
      }

      // login is good, issue the user a token
      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },

    async addTeamMember(
      _: any,
      {
        shortDescription,
        dreams,
        memberName,
        memberAvatar,
        memberCover,
        memberPhone,
        memberPersonalEmail,
        memberDOB,
        email,
        password,
        memberDescription,
        memberDesignation,
        social,
        education,
        hobbies,
        interest,
        certificate,
        memberDateOfJoinnng,
        memberCategory,
        slug,
        status,
        enabled,
        memberLineManger,
        memberWorkType,
        instagram,
        linkedin,
        facebook,
        youtube,
        twitter,
        medium,
        snapchat,
        portfolio,
        dribble,
        motherName,
        fatherName,
        emergencyPhone,
        maritalstatus,
        addressline1,
        addressline2,
        city,
        pincode,
        state,
        active,
        gender,
        imagine,
        design,
        build,
        perform,
        pulseplayID,
        bloodGroup,
        whatsApp,
      }: any,
      context: any
    ) {
      const user = checkAuth(context);

      try {
        const cat = await TeamMember.find({ status: true });

        const categ = JSON.parse(memberCategory);

        const slug = slugify(memberName, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
          trim: true,
        });

        const createdAt = new Date().toISOString();

        const newTeamMember = new TeamMember({
          memberName,
          slug,
          sort: cat.length + 1,
          memberAvatar,
          bloodGroup,
          whatsApp,
          memberCover,
          memberPhone,
          pulseplayID,
          memberPersonalEmail,
          memberDOB,
          email,
          password,
          memberDescription,
          memberDesignation,
          memberDateOfJoinnng,
          memberCategory: categ,
          shortDescription,
          dreams: JSON.parse(dreams),
          memberLineManger: JSON.parse(memberLineManger),
          memberWorkType,
          createdAt,
          education,
          interest: JSON.parse(interest),
          certificate: JSON.parse(certificate),
          social: {
            instagram,
            linkedin,
            facebook,
            youtube,
            twitter,
            medium,
            snapchat,
            portfolio,
            dribble,
          },
          family: {
            motherName,
            emergencyPhone,
            fatherName,
          },
          gender,

          maritalstatus,
          status: active,
          rating: {
            imagine,
            design,
            build,
            perform,
          },
          address: {
            addressline1,
            addressline2,
            city,
            pincode,
            state,
          },
        });

        const data = await newTeamMember.save();

        const set3 = await User.create({
          member: data.id,
          role: "Blog",
          password: "123456",
          createdAt: new Date().toISOString(),
          assignRole: ["blog"],
        });

        let result = await uploadLabeledImages(
          [
            `https://pulseplaydigital.sgp1.digitaloceanspaces.com${data.memberAvatar}`,
            `https://pulseplaydigital.sgp1.digitaloceanspaces.com${data.memberCover}`,
          ],
          data.memberName,
          set3.id
        );
        welComeEmail({
          name: data.memberName,
          img: `https://pulseplaydigital.sgp1.digitaloceanspaces.com${data.memberCover}`,
          url: `https://pulseplaydigital.com/about-us/team/${data.slug}`,
          email: `${data.memberPersonalEmail} , ${data.email}`,
        });
        return data;
      } catch (error) {
        console.log(error);
      }
    },

    async editTeamMember(
      _: any,
      {
        id,
        shortDescription,
        dreams,
        bloodGroup,
        whatsApp,
        memberName,
        memberAvatar,
        memberCover,
        memberPhone,
        memberPersonalEmail,
        memberDOB,
        email,
        password,
        memberDescription,
        memberDesignation,
        education,
        hobbies,
        interest,
        certificate,
        memberDateOfJoinnng,
        memberCategory,
        memberLineManger,
        memberWorkType,
        instagram,
        linkedin,
        facebook,
        youtube,
        twitter,
        medium,
        snapchat,
        portfolio,
        dribble,
        motherName,
        fatherName,
        emergencyPhone,
        maritalstatus,
        addressline1,
        addressline2,
        city,
        pincode,
        state,
        active,
        gender,
        imagine,
        design,
        build,
        perform,
        pulseplayID,
      }: any,
      context: any
    ) {
      const user = checkAuth(context);
      try {
        const cat = await TeamMember.find({ memberName });

        const categ = JSON.parse(memberCategory);

        const slug = slugify(memberName, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
          trim: true,
        });

        const something = await TeamMember.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              memberName,
              bloodGroup,
              whatsApp,
              shortDescription,
              dreams: JSON.parse(dreams),
              slug,
              memberAvatar,
              memberCover,
              memberPhone,
              memberPersonalEmail,
              memberDOB,
              email,
              password,
              memberDescription,
              memberDesignation,
              memberDateOfJoinnng,
              memberCategory: categ,
              memberLineManger: JSON.parse(memberLineManger),
              memberWorkType,
              education,
              pulseplayID,
              interest: JSON.parse(interest),
              certificate: JSON.parse(certificate),
              updatedBy: user.id,
              rating: {
                imagine,
                design,
                build,
                perform,
              },
              social: {
                instagram,
                linkedin,
                facebook,
                youtube,
                twitter,
                medium,
                snapchat,
                portfolio,
                dribble,
              },
              family: {
                motherName,
                emergencyPhone,
                fatherName,
              },
              gender,

              maritalstatus,
              status: active,
              address: {
                addressline1,
                addressline2,
                city,
                pincode,
                state,
              },
            },
          },
          { new: true, upsert: true }
        )
          .populate({
            path: "updatedBy",
            populate: {
              path: "member",
            },
          })
          .exec();

        return something;
      } catch (error) {
        console.warn(error);
      }
    },

    async sortTeamMember(_: any, { sort }: any, context: any) {
      const user = checkAuth(context);

      try {
        await JSON.parse(sort).forEach(async (t: any) => {
          const something = await TeamMember.findOneAndUpdate(
            { _id: t.id },
            {
              $set: {
                sort: t.sort,
              },
            },
            { new: true, upsert: true }
          );
        });
        const set = await TeamMember.find({}).sort({
          memberDateOfJoinnng: 1,
        });

        return set;
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export { teamMemberResolvers };
