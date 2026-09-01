import { Notification } from "../../models/notification";
import { Blog } from "../../models/blog";
import { News } from "../../models/news";
import { Resources } from "../../models/resources";
import { Services } from "../../models/service";
import { Solutions } from "../../models/solutions";
import { TeamMember } from "../../models/teamMember";
import { Work } from "../../models/work";
import sendEmail from "../../util/sendEmail";
import { SeoPages } from "../../models/SeoPages";
const checkAuth = require("../../util/checkAuth");
const seoResolvers = {
  Query: {
    async seoPages(_: any, { name }: any, context: any) {
      try {
        const find = await SeoPages.findOne({ name });

        if (find) return find;
        else {
          return SeoPages.create({
            name: name,
          });
        }
      } catch (error) {
        console.warn(error);
      }
    },
  },
  Mutation: {
    async manageSeo(
      _: any,
      { id, keyword, category, metaDescription, metaTitle }: any,
      context: any
    ) {
      const data = checkAuth(context);

      try {
        switch (category) {
          case "Work":
            await Work.findOneAndUpdate(
              { _id: id },
              {
                $set: {
                  seo: {
                    keyword: keyword && JSON.parse(keyword),
                    metaDescription,
                    metaTitle,
                  },
                },
              },
              { new: true, upsert: true }
            );
          case "blog":
            await Blog.findOneAndUpdate(
              { _id: id },
              {
                $set: {
                  seo: {
                    keyword: keyword && JSON.parse(keyword),
                    metaDescription,
                    metaTitle,
                  },
                },
              },
              { new: true, upsert: true }
            );

            break;

          case "page":
            await SeoPages.findOneAndUpdate(
              { _id: id },
              {
                $set: {
                  seo: {
                    keyword: keyword && JSON.parse(keyword),
                    metaDescription,
                    metaTitle,
                  },
                },
              },
              { new: true, upsert: true }
            );

            break;

          default:

        }
      } catch (error) {
        console.warn(error);
      }
    },

    async sendEmail(_: any, { id, message, subject }: any, context: any) {
      const data = checkAuth(context);

      try {
        const user = await TeamMember.findOne({ _id: id });


        sendEmail(message, [user.email, user.memberPersonalEmail], subject);
        return {
          id: id,
        };
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export { seoResolvers };
