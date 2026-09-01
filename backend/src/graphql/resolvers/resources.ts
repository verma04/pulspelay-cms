import { Services } from "../../models/service";

const checkAuth = require("../../util/checkAuth");

import { Resources } from "../../models/resources";
import { UserInputError } from "apollo-server";
import { ResourcesTopic } from "../../models/resourcesTopic";
import { ResourcesTypes } from "../../models/resourcesTypes";
const slugify = require("slugify");
const moment = require("moment");

const resourcesResolvers = {
  Query: {
    async getAllResources(_: any, { }: any, context: any) {
      try {
        const user = checkAuth(context);
        return Resources.find({});
      } catch (error) {
        console.warn(error);
      }
    },
    async getAllResourcesWeb(_: any, { }: any, context: any) {
      try {
        return Resources.find({ status: true }).sort({ sort: -1 });
      } catch (error) {
        console.warn(error);
      }
    },
    async getResourcesById(_: any, { id }: any, context: any) {
      try {
        const user = checkAuth(context);
        return await Resources.findOne({ _id: id });
      } catch (error) {
        console.warn(error);
      }
    },
    async getResourcesBySlug(_: any, { slug }: any, context: any) {
      try {
        return await Resources.findOne({ slug: slug });
      } catch (error) {
        console.warn(error);
      }
    },
    async getCapabilitiesSlug(_: any, { id }: any, context: any) {
      try {
        return await Resources.findOne({ _id: id });
      } catch (error) {
        console.warn(error);
      }
    },

    async getResourcesTopic(_: any, { }: any, context: any) {
      try {
        return await ResourcesTopic.find({});
      } catch (error) {
        console.warn(error);
      }
    },

    async getResourcesTypes(_: any, { }: any, context: any) {
      try {
        return await ResourcesTypes.find({});
      } catch (error) {
        console.warn(error);
      }
    },
  },

  Mutation: {
    async addResources(_: any, { title }: any, context: any) {
      try {
        const user = checkAuth(context);

        const slug = slugify(title, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
          trim: true,
        });
        const work = await Resources.findOne({ title });
        const length = await Resources.find({});

        if (work) {
          return new UserInputError("Resources allReady exist");
        }

        const newResources = new Resources({
          title,
          slug,
          status: false,
          sort: length.length + 1,

          createdAt: new Date().toISOString(),
        });
        const resources = newResources.save();
        return resources;
      } catch (error) {
        console.warn(error);
      }
    },
    async editResources(
      _: any,
      {
        id,
        title,
        contentTypes,
        topics,
        sortDescription,

        video,
        reportDescription,
        reportImage,
        reportPdf,
        reportAvatar,

        status,
      }: any,
      context: any
    ) {
      try {
        const user = checkAuth(context);

        const slug = slugify(title, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
          trim: true,
        });

        const something = await Resources.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              title,
              contentTypes: JSON.parse(contentTypes),
              topics: JSON.parse(topics),
              sortDescription,
              slug,
              video,
              reportDescription,
              reportImage,
              reportPdf,
              reportAvatar,

              status,
            },
          },
          { new: true, upsert: true }
        ).exec();



        return something;
      } catch (error) {
        console.warn(error);
      }
    },
    async sortResources(_: any, { sort }: any, context: any) {
      const user = checkAuth(context);

      try {
        await JSON.parse(sort).forEach(async (t: any) => {
          const something = await Resources.findOneAndUpdate(
            { _id: t.id },
            {
              $set: {
                sort: t.sort,
              },
            },
            { new: true, upsert: true }
          );
        });
        const set = await Resources.find({}).sort({
          sort: -1,
        });

        return set;
      } catch (error) {
        console.warn(error);
      }
    },

    async addResourcesTopic(_: any, { title, label }: any, context: any) {
      try {
        return await ResourcesTopic.create({ title, label });
      } catch (error) {
        console.warn(error);
      }
    },
    async editResourcesTopic(_: any, { id, title, label }: any, context: any) {
      try {
        // return await ResourcesTopic.create({ title, label });
        const something = await ResourcesTopic.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              title,
              label,
            },
          },
          { new: true, upsert: true }
        ).exec();

        return something;
      } catch (error) {
        console.warn(error);
      }
    },
    async addResourcesTypes(_: any, { title, label }: any, context: any) {
      try {
        return await ResourcesTypes.create({ title, label });
      } catch (error) {
        console.warn(error);
      }
    },
    async editResourcesTypes(_: any, { id, title, label }: any, context: any) {
      try {
        // return await ResourcesTypes.create({ title, label });
        const something = await ResourcesTypes.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              title,
              label,
            },
          },
          { new: true, upsert: true }
        ).exec();

        return something;
      } catch (error) {
        console.warn(error);
      }
    },
    async removeResourcesTopic(_: any, { id }: any, context: any) {
      try {

        return await ResourcesTopic.findOneAndRemove({ _id: id });
      } catch (error) {
        console.warn(error);
      }
    },
    async removeResourcesTypes(_: any, { id }: any, context: any) {
      try {
        return await ResourcesTypes.findOneAndRemove({ _id: id });
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export { resourcesResolvers };
