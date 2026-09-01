import { KPI } from "../../models/KPi";
import { Home } from "../../models/HOME";

const { DeviceInfo } = require("../../models/deviceInfo");
const checkAuth = require("../../util/checkAuth");
const slugify = require("slugify");
const { Carrer } = require("../../models/carrer");

const moment = require("moment");

const HomeResolvers = {
  Query: {
    async getHomeWork(_: any, { }: any, context: any) {
      try {
        return Home.find({})
          .populate({
            path: "work",
          })
          .sort({
            sort: 1,
          });
      } catch (error) {
        console.warn(error);
      }
    },

    async getAllKpi(_: any, { }: any, context: any) {
      try {
        return KPI.find({}).sort({
          sort: 1,
        });
      } catch (error) {
        console.warn(error);
      }
    },
  },

  Mutation: {
    async addHomePageWork(_: any, { image, work, color }: any, context: any) {
      try {
        const user = checkAuth(context);

        const newCarrer = new Home({
          image,
          work,
        });

        const news = await newCarrer.save();
        return news;
      } catch (error) {
        console.warn(error);
      }
    },

    async addKpi(_: any, { title, description }: any, context: any) {
      try {
        const user = checkAuth(context);

        const newCarrer = new KPI({
          title,
          description,
        });

        const news = await newCarrer.save();

        return news;
      } catch (error) {
        console.warn(error);
      }
    },
    async editHomePageWork(
      _: any,
      { image, work, id, color }: any,
      context: any
    ) {
      try {
        const user = checkAuth(context);


        const something = await Home.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              image,
              work,
              id,
              color,
            },
          },
          { new: true, upsert: true }
        )
          .populate({
            path: "work",
          })
          .exec();

        return something;
      } catch (error) {
        console.warn(error);
      }
    },

    async editKpi(
      _: any,
      { id, title, description, color }: any,
      context: any
    ) {
      try {
        const user = checkAuth(context);

        console.log(id, title, description);
        const something = await KPI.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              title,
              description,
              color,
            },
          },
          { new: true, upsert: true }
        ).exec();

        return something;
      } catch (error) {
        console.warn(error);
      }
    },

    async sortHomePage(_: any, { sort }: any, context: any) {
      const user = checkAuth(context);

      try {
        await JSON.parse(sort).forEach(async (t: any) => {
          const something = await Home.findOneAndUpdate(
            { _id: t.id },
            {
              $set: {
                sort: t.sort,
              },
            },
            { new: true, upsert: true }
          );
        });
        const set = await Home.find({})
          .populate({
            path: "work",
          })
          .sort({
            sort: 1,
          });

        return set;
      } catch (error) {
        console.warn(error);
      }
    },
    async sortKpi(_: any, { sort }: any, context: any) {
      const user = checkAuth(context);

      try {
        await JSON.parse(sort).forEach(async (t: any) => {
          const something = await KPI.findOneAndUpdate(
            { _id: t.id },
            {
              $set: {
                sort: t.sort,
              },
            },
            { new: true, upsert: true }
          );
        });
        const set = await KPI.find({});

        return set;
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export { HomeResolvers };
