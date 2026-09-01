const { DeviceInfo } = require("../../models/deviceInfo");
const checkAuth = require("../../util/checkAuth");
const slugify = require("slugify");
const { Carrer } = require("../../models/carrer");

const moment = require("moment");


const carrerResolvers = {
  Query: {
    async getAllCarrer(_: any, { data }: any, context: any) {
      try {
        const res = await Carrer.find({});


        await res;
        return res;
      } catch (error) {
        console.warn(error);
      }
    },
    async getOneCarrer(_: any, { id }: any, context: any) {
      try {
        const data2 = await Carrer.findOne({ _id: id });

        return data2;
      } catch (error) {
        console.warn(error);
      }
    },
    async getBySlugCarrer(_: any, { slug }: any, context: any) {
      try {
        const data2 = await Carrer.findOne({ slug: slug });

        return data2;
      } catch (error) {
        console.warn(error);
      }
    },
    async getOneSlugCarrer(_: any, { id }: any, context: any) {
      try {
        const data2 = await Carrer.findOne({ _id: id });

        return data2;
      } catch (error) {
        console.warn(error);
      }
    },
  },

  Mutation: {
    async addCarrer(
      _: any,
      {
        carrer,
        carrerVaccancy,
        carrerCategory,
        carrerLocation,
        carrerVancy,
        carrerDescription,
        employeLink,
        experience,
      }: any,
      context: any
    ) {
      try {
        const user = checkAuth(context);

        const slug = slugify(carrer, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
          trim: true,
        });

        const newCarrer = new Carrer({
          carrer,
          slug,
          carrerVaccancy,
          carrerCategory,
          carrerLocation,
          carrerVancy,
          carrerDescription,
          employeLink,
          experience,
          createdAt: new Date().toISOString(),
        });

        return newCarrer.save();
      } catch (error) {
        console.warn(error);
      }
    },
    async editCarrer(
      _: any,
      {
        id,
        carrer,
        carrerVaccancy,
        carrerCategory,
        carrerLocation,
        carrerVancy,
        carrerDescription,
        employeLink,
        experience,
      }: any,
      context: any
    ) {
      try {
        const user = checkAuth(context);

        const slug = slugify(carrer, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
          trim: true,
        });

        const something = await Carrer.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              slug,
              carrer,
              carrerVaccancy,
              carrerCategory,
              carrerLocation,
              carrerVancy,
              carrerDescription,
              employeLink,
              experience,
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

export { carrerResolvers };
