import tagImageEmail from "../../util/htmlTemplate/tagImageEmail";
import { Services } from "../../models/service";

const { DeviceInfo } = require("../../models/deviceInfo");
const checkAuth = require("../../util/checkAuth");
const { User } = require("../../models/User");
const { TagImage } = require("../../models/tagImages");
const slugify = require("slugify");
const moment = require("moment");
const { Solutions } = require("../../models/solutions");
const tagResolvers = {
  Query: {
    async getAllTagImage(_: any, { data }: any, context: any) {
      try {
        return TagImage.find({})
          .sort({ createdAt: -1 })
          .populate({
            path: "member",
            populate: {
              path: "tag",
            },
          })
          .populate({
            path: "user",
            populate: {
              path: "member",
            },
          });
      } catch (error) {
        console.warn(error);
      }
    },
    async getAllTagImageAdmin(_: any, { data }: any, context: any) {
      try {
        const { id } = checkAuth(context);
        const user = await User.findOne({ _id: id });

        if (user.role === "admin") {
          return TagImage.find({})
            .sort({ createdAt: -1 })
            .populate({
              path: "member",
              populate: {
                path: "tag",
              },
            })
            .populate({
              path: "user",
              populate: {
                path: "member",
              },
            });
        } else {
          return TagImage.find({ user: id })
            .sort({ createdAt: -1 })
            .populate({
              path: "member",
              populate: {
                path: "tag",
              },
            })
            .populate({
              path: "user",
              populate: {
                path: "member",
              },
            });
        }
      } catch (error) {
        console.warn(error);
      }
    },
    async getAllOneImage(_: any, { id }: any, context: any) {
      try {
        const tag = await TagImage.findOne({ _id: id })
          .populate({
            path: "member",
            populate: {
              path: "tag",
            },
          })
          .populate({
            path: "user",
            populate: {
              path: "member",
            },
          });

        return tag;
      } catch (error) {
        console.warn(error);
      }
    },
    // async getSingleSolutions(_: any, { id }: any, context: any) {
    //   try {
    //     const data2 = await Solutions.findOne({ _id: id });

    //     return data2;
    //   } catch (error) {
    //     console.warn(error);
    //   }
    // },
  },

  Mutation: {
    async addTagedImages(_: any, { image, tag, caption }: any, context: any) {
      try {
        const user = checkAuth(context);

        const tags = JSON.parse(tag);

        const sortsTags = await tags.map((set: any) => ({
          top: set.top,
          left: set.left,
          tag: set.tag.id,
        }));

        const newTagImage = new TagImage({
          tag: JSON.parse(tag),
          image,
          caption,
          member: sortsTags,
          user: user.id,
          createdAt: new Date().toISOString(),
        });

        const tagImage = await newTagImage.save();
        tagImageEmail({ id: tagImage.id });

        return TagImage.findOne({ _id: tagImage })
          .populate({
            path: "member",
            populate: {
              path: "tag",
            },
          })
          .populate({
            path: "user",
            populate: {
              path: "member",
            },
          });
      } catch (error) {
        console.warn(error);
      }
    },

    async editTagedImages(
      _: any,
      { id, image, tag, caption }: any,
      context: any
    ) {
      try {
        const user = checkAuth(context);

        const tags = JSON.parse(tag);

        const sortsTags = await tags.map((set: any) => ({
          top: set.top,
          left: set.left,
          tag: set.tag.id,
        }));

        const something = await TagImage.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              member: sortsTags,
              image,
              caption,
            },
          },
          { new: true, upsert: true }
        )
          .populate({
            path: "member",
            populate: {
              path: "tag",
            },
          })
          .populate({
            path: "user",
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
  },
};

export { tagResolvers };
