import { TeamCategory } from "../../models/teamCategory";
const { UserInputError } = require("apollo-server");
const checkAuth = require("../../util/checkAuth");
const teamCategoryResolvers = {
  Query: {
    async getAllCategory(_: any, { username, password }: any) {
      return TeamCategory.find({});
    },

    async getSingleCategory(_: any, { id }: any) {
      return TeamCategory.findOne({ id: id });
    },
  },

  Mutation: {
    async addTeamCategory(_: any, { name, description }: any) {


      

      try {
        const createdAt = new Date().toISOString();

        const cat = await TeamCategory.findOne({name });
  
   

  

        // wrong username
        if (cat) {
         
          return new UserInputError('Category AllReady Exist');
        }

      
        const newTeamCategory =  TeamCategory  ({
          name,
          description,
          createdAt,
        });

        return newTeamCategory.save()
        
      } catch (error) {
        
        throw error
      }

    },

    async statusTeamCategory(_: any, { id }: any) {
    
      const check = await TeamCategory.findOne({_id:id})

      const data = await TeamCategory.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            status: !check.status,
          },
        },
        { new: true, upsert: true }
      ).exec();

      return data;
    },

    async editTeamCategory(_: any, { id, name, description }: any) {
      const data = await TeamCategory.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            name,
            description,
          },
        },
        { new: true, upsert: true }
      ).exec();

      return data;
    },
  },
};

export { teamCategoryResolvers };
