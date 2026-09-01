import { Work } from "../../models/work";
import { Services } from "../../models/service";

const { DeviceInfo } = require("../../models/deviceInfo");
const checkAuth = require("../../util/checkAuth");

const { Carrer } = require("../../models/carrer");
const slugify = require("slugify");
const moment = require("moment");
const { Solutions } = require("../../models/solutions");
const solutionsResolvers = {
  Query: {
    async getAllSolutions(_: any, { data }: any, context: any) {
      try {
        return Solutions.find({}).populate({
          path: "updatedBy",
          populate: {
            path: "member",
          },
        });
      } catch (error) {
        console.warn(error);
      }
    },

    async getAllActiveSolutions(_: any, {}: any, context: any) {
      try {
        return Solutions.find({ status: true }).sort({ sort: 1 });
      } catch (error) {
        console.warn(error);
      }
    },
    async getSingleSolutions(_: any, { id }: any, context: any) {
      try {
        const data2 = await Solutions.findOne({ _id: id }).populate({
          path: "updatedBy",
          populate: {
            path: "member",
          },
        });

        return data2;
      } catch (error) {
        console.warn(error);
      }
    },

    async getTestmonialsSolutions(_: any, { id }: any, context: any) {
      try {
        const arr: any = [];
        const set = await Work.find({});

        await set.forEach((t: any) => {
          t.projectIndustry.forEach((element: any) => {
            const data = {
              projectLogoTransparent: t.projectLogoTransparent,
              projectName: t.projectName,
              id: element.value,
            };
            arr.push(data);
          });
        });

        const fin = await arr.filter((t: any) => t.id === id);

        return fin;
      } catch (error) {
        console.warn(error);
      }
    },
    async getSolutionsSeo(_: any, { id }: any, context: any) {
      try {
        const data = await Solutions.findOne({ _id: id });

        return data.seo;
      } catch (error) {
        console.warn(error);
      }
    },
    async getSolutionsBySlug(_: any, { slug }: any, context: any) {
      try {
        const data = await Solutions.findOne({ slug });

        return data;
      } catch (error) {
        console.warn(error);
      }
    },
    async getSolutionsWork(_: any, { id }: any, context: any) {
      try {
        const set = await Work.find({ status: true });

        const arr: any = [];

        await set.forEach((element: any) => {
          const value = element.projectIndustry.some(function (el: any) {
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
    async addSolutions(
      _: any,
      {
        solutionsName,
        colorCode,
        solutionsHeading1,
        solutionsHeading,
        solutionsPara1,
        paraList,
        solutionsImg1,
        solutionsImg2,
        solutionsCover,
        list,
        solutionsAvatar,
        svg,
      }: any,
      context: any
    ) {
      try {
        const user = checkAuth(context);

        const slug = slugify(solutionsName, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
          trim: true,
        });

        const newSolutions = new Solutions({
          solutionsName,
          colorCode,
          solutionsHeading1,
          solutionsHeading,
          solutionsPara1,
          paraList: JSON.parse(paraList),
          solutionsImg1,
          solutionsImg2,
          solutionsCover,
          list: JSON.parse(list),
          solutionsAvatar,
          svg,
          slug,
          updatedBy: user.id,
          createdAt: new Date().toISOString(),
        });

        const solutions = newSolutions.save();
        return solutions;
      } catch (error) {
        console.warn(error);
      }
    },

    async editSolutions(
      _: any,
      {
        solutionsName,
        colorCode,
        solutionsHeading1,
        solutionsHeading,
        solutionsPara1,
        paraList,
        solutionsImg1,
        solutionsImg2,
        solutionsCover,
        list,
        solutionsAvatar,
        svg,
        id,
        status,
      }: any,
      context: any
    ) {
      try {
        const user = checkAuth(context);

        const slug = slugify(solutionsName, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
          trim: true,
        });
        const something = await Solutions.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              solutionsName,
              colorCode,
              solutionsHeading1,
              solutionsHeading,
              solutionsPara1,
              paraList: JSON.parse(paraList),
              solutionsImg1,
              solutionsImg2,
              solutionsCover,
              list: JSON.parse(list),
              solutionsAvatar,
              svg,
              slug,
              status,
              updatedBy: user.id,
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
    async editSolutionsSeo(
      _: any,
      { metaDescription, metaTitle, keyword, id }: any,
      context: any
    ) {
      const user = checkAuth(context);
      try {
        const seo = {
          metaDescription,
          metaTitle,

          keyword: JSON.parse(keyword),
        };
        const user = checkAuth(context);

        const something = await Solutions.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              seo,
            },
          },
          { new: true, upsert: true }
        ).exec();

        return something.seo;
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export { solutionsResolvers };
