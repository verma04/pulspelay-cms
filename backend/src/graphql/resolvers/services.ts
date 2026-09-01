import { TeamMember } from "../../models/teamMember";
import { Services } from "../../models/service";
import { Work } from "../../models/work";

const { DeviceInfo } = require("../../models/deviceInfo");
const checkAuth = require("../../util/checkAuth");
const checkRole = require("../../util/checkRole");
const { Carrer } = require("../../models/carrer");
const slugify = require("slugify");
const moment = require("moment");

const servicesResolvers = {
  Query: {
    async getAllServices(_: any, { data }: any, context: any) {
      try {
        return Services.find({}).populate({
          path: "updatedBy",
          populate: {
            path: "member",
          },
        }).sort({ sort: 1 });
      } catch (error) {
        console.warn(error);
      }
    },

    async getAllActiveServices(_: any, { }: any, context: any) {
      try {
        return Services.find({ status: true }).sort({ sort: 1 });
      } catch (error) {
        console.warn(error);
      }
    },
    async getSingleServices(_: any, { id }: any, context: any) {
      try {
        const data2 = await Services.findOne({ _id: id });

        return data2;
      } catch (error) {
        console.warn(error);
      }
    },
    async getServicesBySlug(_: any, { slug }: any, context: any) {
      try {
        const data2 = await Services.findOne({ slug });

        return data2;
      } catch (error) {
        console.warn(error);
      }
    },

    async getServicesExpert(_: any, { id }: any, context: any) {
      try {

        const data2 = await Services.findOne({ _id: id });

        const find = await TeamMember.find({ status: true });

        const arr: any = [];

        if (data2.expert === null) {
          return arr;
        } else {
          await data2.expert.forEach((element: any) => {
            const set = find.find((t: any) => t.memberName === element.label);

            if (set) {
              arr.push(set);
            }
          });
        }

        return arr;
      } catch (error) {
        console.warn(error);
      }
    },

    async getServicesSeo(_: any, { id }: any, context: any) {
      try {
        const data = await Services.findOne({ _id: id });

        return data.seo;
      } catch (error) {
        console.warn(error);
      }
    },

    async getServicesWork(_: any, { id }: any, context: any) {
      try {
        const set = await Work.find({});

        const arr: any = [];

        await set.forEach((element: any) => {
          const value = element.services.some(function (el: any) {
            return el.value === id;
          });
          if (value) {
            arr.push(element);
          }
        });

        return arr;
        // const data = await Services.findOne({ _id: id });
        // return data.seo;
      } catch (error) {
        console.warn(error);
      }
    },
  },

  Mutation: {
    async addServices(
      _: any,
      {
        servicesName,
        servicesVideo,
        servicesHeading1,
        servicesHeading2,
        servicesPara1,
        servicesPara2,
        capabilities,
        servicesImg1,
        servicesImg2,
        servicesCover,
        expert,
        svg,
        servicesHeading,
        servicesAvatar,
      }: any,
      context: any
    ) {
      try {
        const { id } = checkAuth(context);

        const slug = slugify(servicesName, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
          trim: true,
        });

        const newServices = new Services({
          servicesName,
          svg,
          servicesCover,
          servicesVideo,
          servicesHeading1,
          servicesHeading2,
          servicesPara1,
          servicesPara2,
          servicesAvatar,
          slug,
          servicesHeading,
          capabilities: JSON.parse(capabilities),
          expert: JSON.parse(expert),
          servicesImg1,
          servicesImg2,
          createdAt: new Date().toISOString(),
          sort: 1,
        });

        const services = newServices.save();
        return services;
      } catch (error) {
        console.warn(error);
      }
    },

    async editServices(
      _: any,
      {
        servicesName,
        servicesVideo,
        servicesHeading1,
        servicesHeading2,
        servicesPara1,
        svg,
        servicesPara2,
        capabilities,

        servicesCover,
        servicesHeading,
        expert,
        id,
        status,
        servicesAvatar,
      }: any,

      context: any
    ) {
      try {

        const user = checkAuth(context);

        const slug = slugify(servicesName, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
          trim: true,
        });
        const something = await Services.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              servicesName,
              servicesHeading1,
              servicesHeading2,
              servicesVideo,
              servicesPara1,
              servicesPara2,
              updatedBy: user.id,
              status,
              servicesHeading,

              servicesCover,
              capabilities: JSON.parse(capabilities),
              expert: JSON.parse(expert),
              slug,
              servicesAvatar,
              svg,
            },
          },
          { new: true, upsert: true }
        ).populate({
          path: "updatedBy",
          populate: {
            path: "member",
          },
        }).exec();

        return something;
      } catch (error) {
        console.warn(error);
      }
    },

    async editServicesSeo(
      _: any,
      { metaDescription, metaTitle, keyword, id }: any,
      context: any
    ) {
      try {
        const seo = {
          metaDescription,
          metaTitle,
          keyword: JSON.parse(keyword),
        };
        const user = checkAuth(context);

        const something = await Services.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              seo,
              updatedBy: user.id,
            },
          },
          { new: true, upsert: true }
        ).exec();

        return something.seo;
      } catch (error) {
        console.warn(error);
      }
    },
    async sortServices(_: any, { sort }: any, context: any) {
      const user = checkAuth(context);

      try {
        await JSON.parse(sort).forEach(async (t: any) => {
          const something = await Services.findOneAndUpdate(
            { _id: t.id },
            {
              $set: {
                sort: t.sort,
              },
            },
            { new: true, upsert: true }
          );
        });
        const set = await Services.find({}).sort({
          sort: 1,
        });

        return set;
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export { servicesResolvers };
