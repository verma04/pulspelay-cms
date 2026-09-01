import { Services } from "../../models/service";

const { DeviceInfo } = require("../../models/deviceInfo");
const checkAuth = require("../../util/checkAuth");

import { Capabilities } from "../../models/capabilities";
const slugify = require("slugify");
const moment = require("moment");

const capabilitiesResolvers = {
  Query: {
    async getAllCapabilities(_: any, {}: any, context: any) {
      try {
        return Capabilities.find({});
      } catch (error) {
        console.warn(error);
      }
    },
    async getSingleCapabilities(_: any, { id }: any, context: any) {
      try {
        return await Capabilities.findOne({ _id: id });
      } catch (error) {
        console.warn(error);
      }
    },
  },

  Mutation: {
    async addCapabilities(
      _: any,
      { capabilitiesTitle, capabilitiesDescription, capabilitiesList }: any,
      context: any
    ) {
      try {
        const user = checkAuth(context);

        const newCapabilities = new Capabilities({
          capabilitiesTitle,
          capabilitiesDescription,
          capabilitiesList: JSON.parse(capabilitiesList),
          createdAt: new Date().toISOString(),
        });

        const capabilities = newCapabilities.save();
        return capabilities;
      } catch (error) {
        console.warn(error);
      }
    },
    async editCapabilities(
      _: any,
      { id, capabilitiesTitle, capabilitiesDescription, capabilitiesList }: any,
      context: any
    ) {
      try {
        const user = checkAuth(context);

        const something = await Capabilities.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              capabilitiesTitle,
              capabilitiesDescription,
              capabilitiesList: JSON.parse(capabilitiesList),
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

export { capabilitiesResolvers };
