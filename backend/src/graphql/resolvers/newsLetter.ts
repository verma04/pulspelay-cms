import { NewsLetter } from "../../models/NewsLetter";

const { DeviceInfo } = require("../../models/deviceInfo");
const checkAuth = require("../../util/checkAuth");
const slugify = require("slugify");

const moment = require("moment");

const newsLetterResolvers = {
  Query: {
    async getAllNewsLetter(_: any, { data }: any, context: any) {
      try {
        return NewsLetter.find({}).sort({
          createdAt: -1,
        });
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export { newsLetterResolvers };
