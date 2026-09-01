import { Products } from "../../models/product.model";
import { Adviser } from "../../models/adviser";
import { UserInputError } from "apollo-server-express";

const checkAuth = require("../../util/checkAuth");
const slugify = require("slugify");

const productResolvers = {
  Query: {
    async getAllProduct(_: any, { data }: any, context: any) {
      try {
        // const data = await client.get("career");
        const blog = await Products.find({})
          .populate({
            path: "updatedBy",
            populate: {
              path: "member",
            },
          })
          .populate({
            path: "experts",
          })
          .sort({ createdAt: -1 })

          .exec();

        return blog;
      } catch (error) {
        console.warn(error);
      }
    },

    async getAllActiveProduct(_: any, { data }: any, context: any) {
      try {
        // const data = await client.get("career");
        const blog = await Products.find({ status: true })
          .populate({
            path: "experts",
          })

          .sort({ createdAt: -1 })

          .exec();

        return blog;
      } catch (error) {
        console.warn(error);
      }
    },
    async getProductById(_: any, { id: _id }: any, context: any) {
      try {
        const { id } = checkAuth(context);

        const data2 = await Products.findOne({ _id: _id })
          .populate({
            path: "updatedBy",
          })
          .populate({
            path: "experts",
          });

        return data2;
      } catch (error) {
        console.warn(error);
      }
    },

    async getProductBySlug(_: any, { slug }: any, context: any) {
      try {
        const data2 = await Products.findOne({ slug, status: true }).populate({
          path: "experts",
        });

        return data2;
      } catch (error) {
        console.warn(error);
      }
    },
  },

  Mutation: {
    async addProduct(_: any, { productName }: any, context: any) {
      try {
        const user = checkAuth(context);

        const exist = await Products.findOne({ productName: productName });
        if (exist) {
          return new UserInputError("Product allReady exist");
        }
        const slug = slugify(productName, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
          trim: true,
        });

        const newProduct = new Products({
          productName,
          slug,
          updatedBy: user.id,
        });

        const blo = await newProduct.save();

        const find = await Products.findOne({ _id: blo.id })
          .populate({
            path: "updatedBy",
          })
          .populate({
            path: "experts",
          });

        return find;
      } catch (error) {
        console.warn(error);
      }
    },

    async editProduct(
      _: any,
      {
        projectName,
        heroSection,
        keyFeatures,
        para,
        para2,
        image,
        experts,
        status,
        id,
      }: any,
      context: any
    ) {
      const user = checkAuth(context);

      try {
        const something = await Products.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              projectName,
              heroSection: JSON.parse(heroSection),
              keyFeatures: JSON.parse(keyFeatures),
              para,
              para2,
              image: JSON.parse(image),
              experts: JSON.parse(experts),
              status,
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
          .populate({
            path: "experts",
          })
          .exec();
        return something;
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export { productResolvers };
