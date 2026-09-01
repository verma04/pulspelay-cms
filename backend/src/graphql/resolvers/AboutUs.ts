import { Outcomes } from "../../models/Outcomes";
import { BlogCategory } from "../../models/BlogCategory";
import { Brand } from "../../models/Brand";
import { BrandArch } from "../../models/brandAch";

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");

const { Blog, Comments } = require("../../models/blog");
const checkAuth = require("../../util/checkAuth");
const slugify = require("slugify");

const aboutusResolvers = {
  Query: {
    async getAllOutComes(_: any, { data }: any, context: any) {
      try {
        const blog = await Outcomes.find({})
          .sort({ createdAt: -1 })
          .populate("comments")
          .exec();


        return blog;
      } catch (error) {
        console.warn(error);
      }
    },
    async getAllBrands(_: any, { data }: any, context: any) {
      try {
        const brands = await Brand.find({})
          .sort({ createdAt: -1 })
          .populate("comments");

        return brands;
      } catch (error) {
        console.warn(error);
      }
    },
    async getAllBrandsArch(_: any, { data }: any, context: any) {
      try {
        const brands = await Brand.find({})
          .sort({ createdAt: -1 })
          .populate("comments");

        return brands;
      } catch (error) {
        console.warn(error);
      }
    },
  },

  Mutation: {
    async addOutcomes(_: any, { title, para }: any, context: any) {
      try {
        console.log(title, para);
        const user = checkAuth(context);

        const newOutcomes = new Outcomes({
          title,
          para,

          createdAt: new Date().toISOString(),
        });

        const services = newOutcomes.save();

        return services;
      } catch (error) {
        console.warn(error);
      }
    },

    async editOutcomes(_: any, { title, para, id }: any, context: any) {
      try {
        console.log(title, para);
        const user = checkAuth(context);

        const something = await Outcomes.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              title,
              para,
            },
          },
          { new: true, upsert: true }
        ).exec();
        return something;
      } catch (error) {
        console.warn(error);
      }
    },

    async deleteOutcomes(_: any, { id }: any, context: any) {
      try {
        const user = checkAuth(context);

        const something = await Outcomes.findOneAndRemove(
          { _id: id },

          { new: true, upsert: true }
        ).exec();
        return something;
      } catch (error) {
        console.warn(error);
      }
    },

    async addBrands(_: any, { avatar, title, para, url }: any, context: any) {
      try {
        console.log(title, para);
        const user = checkAuth(context);

        const newOutcomes = new Brand({
          avatar,
          title,
          para,
          url,
          createdAt: new Date().toISOString(),
        });

        const services = newOutcomes.save();

        return services;
      } catch (error) {
        console.warn(error);
      }
    },

    async editBrands(
      _: any,
      { avatar, title, para, url, id }: any,
      context: any
    ) {
      try {
        const user = checkAuth(context);

        const something = await Brand.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              avatar,
              title,
              para,
              url,
            },
          },
          { new: true, upsert: true }
        ).exec();
        return something;
      } catch (error) {
        console.warn(error);
      }
    },

    async deleteBrands(_: any, { id }: any, context: any) {
      try {
        const user = checkAuth(context);

        const something = await Brand.findOneAndRemove(
          { _id: id },

          { new: true, upsert: true }
        ).exec();
        return something;
      } catch (error) {
        console.warn(error);
      }
    },

    async addBrandsArch(_: any, { title, url }: any, context: any) {
      try {
        const user = checkAuth(context);

        const newOutcomes = new BrandArch({
          title,
          url,
          createdAt: new Date().toISOString(),
        });

        const services = newOutcomes.save();

        return services;
      } catch (error) {
        console.warn(error);
      }
    },

    async editBrandsArch(_: any, { title, url, id }: any, context: any) {
      try {
        const user = checkAuth(context);

        const something = await BrandArch.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              title,

              url,
            },
          },
          { new: true, upsert: true }
        ).exec();
        return something;
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export { aboutusResolvers };
