import { News } from "../../models/news";
import { BlogCategory } from "../../models/BlogCategory";

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");

const { Blog } = require("../../models/blog");
const checkAuth = require("../../util/checkAuth");
const slugify = require("slugify");

const newsResolvers = {
  Query: {
    async getAllNews(_: any, { data }: any, context: any) {
      try {
        return News.find({}).sort({ createdAt: -1 });
      } catch (error) {
        console.warn(error);
      }
    },
    async getAllPublishedNews(_: any, { data }: any, context: any) {
      try {
        return News.find({ publish: true }).sort({ createdAt: -1 });
      } catch (error) {
        console.warn(error);
      }
    },

    async getSingleNews(_: any, { id: _id }: any, context: any) {
      try {
        const { id } = checkAuth(context);


        const data2 = await News.findOne({ _id: _id });

        return data2;
      } catch (error) {
        console.warn(error);
      }
    },
    async getSingleNewsSlug(_: any, { slug }: any, context: any) {
      try {
        const data2 = await News.findOne({ slug: slug });

        return data2;
      } catch (error) {
        console.warn(error);
      }
    },
  },

  Mutation: {
    async addNews(
      _: any,
      { newsTitle, newsAvatar, newsAuthor, newsDescription, newsSubTitle }: any,
      context: any
    ) {
      try {
        const user = checkAuth(context);
        const slug = slugify(newsTitle, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
          trim: true,
        });

        const news = new News({
          newsTitle,
          slug,
          newsAvatar,
          newsAuthor,
          newsDescription,
          newsSubTitle,

          createdAt: new Date().toISOString(),
        });

        const data = news.save();

        return data;
      } catch (error) {
        console.warn(error);
      }
    },

    async editNews(
      _: any,
      { newsDescription, id, newsDescriptionHtml }: any,
      context: any
    ) {
      try {
        const something = await News.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              newsDescription,
              newsDescriptionHtml,
            },
          },
          { new: true, upsert: true }
        ).exec();
        return something;
      } catch (error) {
        console.warn(error);
      }
    },

    async publishNews(
      _: any,
      { newsTitle, newsAvatar, id, newsSubTitle, tags }: any,
      context: any
    ) {
      try {
        const slug = slugify(newsTitle, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
          trim: true,
        });

        const something = await Blog.findOneAndUpdate(
          { _id: id },

          {
            $set: {
              newsTitle,
              newsAvatar,
              slug,
              id,
              newsSubTitle,

              newstags: JSON.parse(tags),
            },
          },
          { new: true, upsert: true }
        ).exec();
        return something;
      } catch (error) {
        console.warn(error);
      }
    },

    async setNewsStatus(_: any, { status, id }: any, context: any) {
      try {

        const something = await News.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              publish: !status,
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

export { newsResolvers };
