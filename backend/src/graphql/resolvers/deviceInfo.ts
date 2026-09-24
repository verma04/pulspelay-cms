import { KnownUser } from "../../models/knownUser";

// @ts-ignore
import CryptoJS from "crypto-js";
import { pushNotification } from "../../util/pushNotifications";
const { DeviceInfo } = require("../../models/deviceInfo");
const checkAuth = require("../../util/checkAuth");
var shortid = require("shortid");
const moment = require("moment");
const all = require("../../../AllCode");
const DeivceInfoResolvers = {
  Query: {
    async getUserLog(_: any, { id }: any, context: any) {
      try {
        const data2 = await DeviceInfo.find({ user: id })
          .sort({
            createdAt: -1,
          })
          .allowDiskUse(true);

        return data2;
      } catch (error) {
        console.warn(error);
      }
    },

    async getDeivceInfo(_: any, { data }: any, context: any) {
      try {
        if (data === "") {
          null;
        } else {
          const data1 = await JSON.parse(data);

          var bytes = CryptoJS.AES.decrypt(data1.amxId, "secret key 123");
          var originalAmxId = bytes.toString(CryptoJS.enc.Utf8);

          const user = await KnownUser.findOne({ amxId: originalAmxId });

          if (user === null) {
            const data = {
              amxId: originalAmxId,
              IPv4: data1.IPv4,
              uniqueID: `pdpl${shortid.generate()}`.toUpperCase(),
              createdAt: new Date().toISOString(),
            };
            const data2 = await KnownUser.create(data);

            pushNotification(
              `New User`,
              ` id: ${data1.IPv4}  uniqueID:${data.uniqueID} `
            );

            const set = {
              user: data2.id,
              ...data1,
              createdAt: new Date().toISOString(),
            };
            const pk = await DeviceInfo.create(set);
          } else {
            const set = {
              user: user.id,
              ...data1,
              createdAt: new Date().toISOString(),
            };
            const pk = await DeviceInfo.create(set);
          }
        }

        // const data2 = await DeviceInfo.create(data1);
      } catch (error) {
        console.warn(error);
      }
    },
    async getAllDeivceInfo(_: any, { data }: any, context: any) {
      try {
        const data2 = await DeviceInfo.find({})
          .sort({ createdAt: -1 })
          .allowDiskUse(true);

        return data2;
      } catch (error) {
        console.warn(error);
      }
    },

    async getKnownUser(_: any, { data }: any, context: any) {
      try {
        const data2 = await KnownUser.find({})
          .sort({ createdAt: -1 })
          .allowDiskUse(true);

        return data2;
      } catch (error) {
        console.warn(error);
      }
    },

    async getViews(_: any, { gte, lte }: any, context: any) {
      try {
        const today = moment().startOf("day");
        var dateArray: any = [];
        const fin: any = [];
        const data = await DeviceInfo.find({
          createdAt: {
            $gte: gte,
            $lte: lte,
          },
        });

        var currentDate = moment(gte);
        var stopDate = moment(lte);
        while (currentDate <= stopDate) {
          dateArray.push(moment(currentDate).format("L"));
          currentDate = moment(currentDate).add(1, "days");
        }

        await dateArray.forEach(async (element: any) => {
          const filter = await data.filter(
            (t: any) => moment(t.createdAt).format("L") === element
          );

          const arr = { count: filter.length, date: element };
          await fin.push(arr);
        });

        return fin;
      } catch (error) {
        console.warn(error);
      }
    },

    async getCities(_: any, { gte, lte }: any, context: any) {
      try {
        const today = moment().startOf("day");
        var dateArray: any = [];
        const fin: any = [];
        const data = await DeviceInfo.find({
          createdAt: {
            $gte: gte,
            $lte: lte,
          },
        });

        const set = await data.filter(
          (value: any, index: any, self: any) =>
            index === self.findIndex((t: any) => t.city === value.city)
        );

        var result = await set.map((t: any) => ({
          name: t.city,
          value: 0,
          color: "#0088FE",
        }));

        await result.forEach((element: any) => {
          const filter = data.filter((t: any) => t.city === element.name);

          const objIndex = result.findIndex(
            (set: any) => set.name === element.name
          );

          result[objIndex].value = filter.length;
        });

        return result.sort(
          (a: any, b: any) => parseFloat(b.value) - parseFloat(a.value)
        );
      } catch (error) {
        console.warn(error);
      }
    },
    async getCountry(_: any, { gte, lte }: any, context: any) {
      try {
        const today = moment().startOf("day");
        var dateArray: any = [];
        const fin: any = [];
        const data = await DeviceInfo.find({
          createdAt: {
            $gte: gte,
            $lte: lte,
          },
        });

        const set = await data.filter(
          (value: any, index: any, self: any) =>
            index ===
            self.findIndex((t: any) => t.country_name === value.country_name)
        );
        var result = await set.map((t: any) => ({
          name: t.country_name,
          value: 0,
          color: "#0088FE",
        }));

        await result.forEach((element: any) => {
          const filter = data.filter(
            (t: any) => t.country_name === element.name
          );

          const objIndex = result.findIndex(
            (set: any) => set.name === element.name
          );

          result[objIndex].value = filter.length;
        });
      } catch (error) {
        console.warn(error);
      }
    },

    async getPages(_: any, { gte, lte }: any, context: any) {
      try {
        const today = moment().startOf("day");
        var dateArray: any = [];
        const fin: any = [];
        const data = await DeviceInfo.find({
          createdAt: {
            $gte: gte,
            $lte: lte,
          },
        });

        const set = await data.filter(
          (value: any, index: any, self: any) =>
            index === self.findIndex((t: any) => t.page === value.page)
        );
        var result = await set.map((t: any) => ({
          name: t.page,
          value: 0,
          color: "#0088FE",
        }));

        await result.forEach((element: any) => {
          const filter = data.filter((t: any) => t.page === element.name);

          const objIndex = result.findIndex(
            (set: any) => set.name === element.name
          );

          result[objIndex].value = filter.length;
        });
        return result.sort(
          (a: any, b: any) => parseFloat(b.value) - parseFloat(a.value)
        );
      } catch (error) {
        console.warn(error);
      }
    },
    async getOs(_: any, { gte, lte }: any, context: any) {
      try {
        const today = moment().startOf("day");
        var dateArray: any = [];
        const fin: any = [];
        const data = await DeviceInfo.find({
          createdAt: {
            $gte: gte,
            $lte: lte,
          },
        });

        const set = await data.filter(
          (value: any, index: any, self: any) =>
            index === self.findIndex((t: any) => t.os === value.os)
        );
        var result = await set.map((t: any) => ({
          name: t.os,
          value: 0,
          color: "#0088FE",
        }));

        await result.forEach((element: any) => {
          const filter = data.filter((t: any) => t.os === element.name);

          const objIndex = result.findIndex(
            (set: any) => set.name === element.name
          );

          result[objIndex].value = filter.length;
        });
        return result.sort(
          (a: any, b: any) => parseFloat(b.value) - parseFloat(a.value)
        );
      } catch (error) {
        console.warn(error);
      }
    },

    async getCountryCode(_: any, { gte, lte }: any, context: any) {
      try {
        const today = moment().startOf("day");
        var dateArray: any = [];
        const fin: any = [];
        const data = await DeviceInfo.find({
          createdAt: {
            $gte: gte,
            $lte: lte,
          },
        });

        const set = await data.filter(
          (value: any, index: any, self: any) =>
            index ===
            self.findIndex((t: any) => t.country_code === value.country_code)
        );
        var result = await set.map((t: any) => ({
          name: t.country_code,
          value: 0,
          color: "#0088FE",
        }));

        await result.forEach((element: any) => {
          const filter = data.filter(
            (t: any) => t.country_code === element.name
          );

          const objIndex = result.findIndex(
            (set: any) => set.name === element.name
          );

          result[objIndex].value = filter.length;
        });

        const arr: any = [];
        await result.forEach(async (element: any) => {
          const n = await all.find((t: any) => t.alpha2 === element.name);
          arr.push({
            name: n.alpha3,
            value: parseInt(element.value),
          });
        });

        return arr;
      } catch (error) {
        console.warn(error);
      }
    },
  },

  Mutation: {},
};

export { DeivceInfoResolvers };
