const { DeviceInfo } = require("../../models/deviceInfo");
const checkAuth = require("../../util/checkAuth");
var mongoose = require("mongoose");
const { Carrer } = require("../../models/carrer");
import { TeamMember } from "../../models/teamMember";
import { Services } from "../../models/service";
import { Solutions } from "../../models/solutions";
import { Work } from "../../models/work";

const { TagImage } = require("../../models/tagImages");
const moment = require("moment");

const websiteResolvers = {
  Query: {
    async getAllTeamMemberWeb(_: any, { name }: any, context: any) {
      return TeamMember.find({}).sort({ memberDateOfJoinnng: 1 });
      try {
      } catch (error) {
        console.warn(error);
      }
    },

    async getOneTeamMemberCarrer(_: any, { id }: any, context: any) {
      try {
        return TeamMember.findOne({ _id: id });
      } catch (error) {
        console.warn(error);
      }
    },

    async getOneTeamMemberWeb(_: any, { slug }: any, context: any) {
      return TeamMember.findOne({ slug: slug });
      try {
      } catch (error) {
        console.warn(error);
      }
    },

    async getAllServicesWeb(_: any, { name }: any, context: any) {
      return Services.find({});
      try {
      } catch (error) {
        console.warn(error);
      }
    },
    async getAllSolutionWeb(_: any, { id }: any, context: any) {
      return Solutions.find({});
      try {
      } catch (error) {
        console.warn(error);
      }
    },

    async getSingleClientWeb(_: any, { slug }: any, context: any) {
      try {
        return Work.findOne({ slug: slug });
      } catch (error) {
        console.warn(error);
      }
    },

    async getProjectById(_: any, { id }: any, context: any) {
      try {
        const data = await Work.find({ status: true });

        const arr: any = [];

        data.forEach((element: any) => {
          if (element.employeeWork === null) {
          } else {
            const set = element.employeeWork.find((t: any) => t.value === id);

            if (set) {
              arr.push(element);
            }

            // console.log(data)
          }
        });

        return arr;
      } catch (error) {
        console.warn(error);
      }
    },

    async getTaggedById(_: any, { id }: any, context: any) {
      try {
        const data = await TagImage.find({}).populate({
          path: "member",
          populate: {
            path: "tag",
          },
        });

        const arr: any = [];

        // await data.forEach((element: any) => {
        //   element.member.forEach((tab: any) => {
        //     const data = {
        //       image: element.image,
        //       id: tab.id,
        //       caption: element.caption,
        //       tag: element.tag,
        //       ...tab._doc,
        //     };
        //     arr.push(data);
        //   });
        // });

        await data.forEach((element: any) => {
          element.member.forEach((tab: any) => {
            const data = {
              image: element?.image,
              id: tab?.id,
              caption: element?.caption,
              member: element?.member,
              memberId: tab?.tag?.id,
            };
            arr.push(data);
          });
        });

        const set = await arr.filter((t: any) => t.memberId === id);

        console.log(set, id);

        // console.log(set);
        // return set;

        // data.forEach((element: any) => {
        //   if (element.employeeWork === null) {
        //   } else {
        //     const set = element.employeeWork.find((t: any) => t.value === id);

        //     if (set) {
        //       arr.push(element);
        //     }

        //     // console.log(data)
        //   }
        // });

        return set;
      } catch (error) {
        console.warn(error);
      }
    },
  },

  Mutation: {},
};

export { websiteResolvers };
