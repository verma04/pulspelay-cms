import { TeamMember } from "../../models/teamMember";
import { Services } from "../../models/service";
const { UserInputError } = require("apollo-server");
const { DeviceInfo } = require("../../models/deviceInfo");
const checkAuth = require("../../util/checkAuth");
import { Testimonial } from "../../models/testimonial";
import { Work } from "../../models/work";

const slugify = require("slugify");
const moment = require("moment");

const clientsResolvers = {
  Query: {
    async getAllClients(_: any, { data }: any, context: any) {
      try {
        return Work.find({})
          .populate({
            path: "updatedBy",
            populate: {
              path: "member",
            },
          })
          .sort({
            sort: 1,
          });
      } catch (error) {
        console.warn(error);
      }
    },

    async getAllClientsHomePage(_: any, { data }: any, context: any) {
      try {
        return Work.find({})
          .sort({
            sort: 1,
          })
          .limit(4);
      } catch (error) {
        console.warn(error);
      }
    },
    async getAllClientsWeb(_: any, { data }: any, context: any) {
      try {
        return Work.find({ status: true }).sort({
          sort: 1,
        });
      } catch (error) {
        console.warn(error);
      }
    },
    async getSingleClients(_: any, { id }: any, context: any) {
      try {
        const data2 = await Work.findOne({ _id: id });

        return data2;
      } catch (error) {
        console.warn(error);
      }
    },

    async getSingleClientsBySlug(_: any, { slug }: any, context: any) {
      try {
        const data2 = await Work.findOne({ slug, status: true });

        const team = await TeamMember.find({ status: true }).sort({
          memberDateOfJoinnng: 1,
        });

        const arr: any = [];

        const set = await Testimonial.find({});

        let fin: any = [];

        await set.forEach(async (element: any) => {
          if (element?.caseStudies?.value === data2?.id) {
            fin === element;
            fin.push(element);
          }
        });

        return { id: data2._id, ...data2._doc, work: arr, test: fin[0] };
      } catch (error) {
        console.warn(error);
      }
    },

    async getTestimonialClientWeb(_: any, { id }: any, context: any) {
      try {
        const set = await Testimonial.find({ status: true }).sort({
          sort: 1,
        });

        return set;
      } catch (error) {
        console.warn(error);
      }
    },

    async getTestimonialClient(_: any, { id }: any, context: any) {
      try {
        const set = await Testimonial.find({});

        let fin: any = [];

        await set.forEach(async (element: any) => {
          if (element.caseStudies.value === id) {
            fin === element;
            fin.push(element);
          }
        });

        return fin[0];
      } catch (error) {
        console.warn(error);
      }
    },

    async getTestimonial(_: any, {}: any, context: any) {
      try {
        const user = checkAuth(context);

        const client = await Testimonial.find({}).sort({
          sort: 1,
        });

        return client;
      } catch (error) {
        console.warn(error);
      }
    },
    async getSingleTestimonial(_: any, { id }: any, context: any) {
      try {
        const data2 = await Testimonial.findOne({ _id: id });

        return data2;
      } catch (error) {
        console.warn(error);
      }
    },

    async getWorkClients(_: any, { id }: any, context: any) {
      try {
        const data2 = await Work.findOne({ _id: id });

        const team = await TeamMember.find({ status: true }).sort({
          memberDateOfJoinnng: 1,
        });

        const arr: any = [];

        if (data2.employeeWork) {
          await data2.employeeWork.forEach((element: any) => {
            const set = team.find((t: any) => t.id === element.value);

            if (set) {
              arr.push(set);
            }
          });
          return arr;
        }

        return [];
      } catch (error) {
        console.warn(error);
      }
    },

    async getAllLogoHomePage(_: any, { data }: any, context: any) {
      try {
        const set = await Work.find({}).sort({
          sort: 1,
        });

        const fin = await set.filter(
          (t: any) => t?.blackAndWhiteLogo?.isVisible === true
        );

        return fin;
      } catch (error) {
        console.warn(error);
      }
    },
  },

  Mutation: {
    async addClient(_: any, { projectName }: any, context: any) {
      try {
        const user = checkAuth(context);

        const slug = slugify(projectName, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
          trim: true,
        });

        const work = await Work.findOne({ projectName });
        const length = await Work.find({});

        if (work) {
          return new UserInputError("Case Studies allReady exist");
        }

        const newClient = new Work({
          projectName,
          slug,
          status: false,
          sort: length.length + 1,
          updatedBy: user.id,

          createdAt: new Date().toISOString(),
        });

        const client = newClient.save();
        return client;
      } catch (error) {
        console.warn(error);
      }
    },

    async addTestimonial(_: any, { caseStudies }: any, context: any) {
      try {
        const user = checkAuth(context);
        const set = JSON.parse(caseStudies);

        const slug = slugify(set.label, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
          trim: true,
        });

        const work = await Testimonial.findOne({ caseStudies: set });
        const length = await Testimonial.find({});

        if (work) {
          return new UserInputError(" Testimonial allReady exist");
        }

        const newClient = new Testimonial({
          set,
          slug,
          status: false,
          sort: length.length + 1,
          caseStudies: set,
          createdAt: new Date().toISOString(),
        });

        const client = newClient.save();

        return client;
      } catch (error) {
        console.warn(error);
      }
    },

    async editTestimonial(
      _: any,
      {
        testimonialName,
        id,
        testimonialDescription,
        testimoniaDesignation,
        caseStudies,
        testimonialImage,
        youtubeUrl,
        status,
      }: any,
      context: any
    ) {
      try {
        const user = checkAuth(context);

        const updateData: any = {
          testimonialName,
          testimonialDescription,
          testimoniaDesignation,
          testimonialImage,
          youtubeUrl,
          updatedBy: user.id,
          status,
        };

        if (caseStudies) {
          updateData.caseStudies =
            typeof caseStudies === "string"
              ? JSON.parse(caseStudies)
              : caseStudies;
        }

        const something = await Testimonial.findOneAndUpdate(
          { _id: id },
          {
            $set: updateData,
          },
          { new: true, upsert: true }
        )
          .populate({
            path: "updatedBy",
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

    async editClient(
      _: any,
      {
        projectName,
        id,
        year,
        landingDescription,
        areas,
        location,

        projectLogo,
        sliderImage,
        projectLogoTransparent,
        clientColorTheme,
        employeeWork,
        blackAndWhiteLogo,

        projectIndustry,
        services,

        projectDescription,
        area,
        tools,
        website,
        branding,

        social,
        video,
        outReach,
        outcomes,
        status,
      }: any,
      context: any
    ) {
      try {
        const user = checkAuth(context);

        const slug = slugify(projectName, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
          trim: true,
        });

        const something = await Work.findOneAndUpdate(
          { _id: id },
          {
            $set: {
              projectName,
              id,
              year,
              landingDescription,
              status,
              location,
              updatedBy: user.id,
              slug,
              areas,
              blackAndWhiteLogo: JSON.parse(blackAndWhiteLogo),
              projectLogo,
              sliderImage,
              projectLogoTransparent,
              clientColorTheme,
              employeeWork: JSON.parse(employeeWork),

              projectIndustry: JSON.parse(projectIndustry),
              services: JSON.parse(services),

              projectDescription,
              area: JSON.parse(area),
              tools: JSON.parse(tools),
              website: JSON.parse(website),
              branding: JSON.parse(branding),

              social: JSON.parse(social),
              video: JSON.parse(video),
              outReach: JSON.parse(outReach),
              outcomes: JSON.parse(outcomes),
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
          .exec();

        return something;
      } catch (error) {
        console.warn(error);
      }
    },

    async sortClients(_: any, { sort }: any, context: any) {
      const user = checkAuth(context);

      try {
        await JSON.parse(sort).forEach(async (t: any) => {
          const something = await Work.findOneAndUpdate(
            { _id: t.id },
            {
              $set: {
                sort: t.sort,
              },
            },
            { new: true, upsert: true }
          );
        });
        const set = await Work.find({}).sort({
          memberDateOfJoinnng: 1,
        });

        return set;
      } catch (error) {
        console.warn(error);
      }
    },
    async sortTestimonial(_: any, { sort }: any, context: any) {
      const user = checkAuth(context);

      try {
        await JSON.parse(sort).forEach(async (t: any) => {
          const something = await Testimonial.findOneAndUpdate(
            { _id: t.id },
            {
              $set: {
                sort: t.sort,
              },
            },
            { new: true, upsert: true }
          );
        });
        const set = await Testimonial.find({});

        return set;
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export { clientsResolvers };
