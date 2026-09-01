import sendGridEmail from "../../util/sendGridEmail";
import { TeamMember } from "../../models/teamMember";
import moment from "moment";


const { gql } = require("apollo-server");
const cron = require("node-cron");
// const { Parking } = require('../models/Parking');
module.exports = gql`
   scalar Date
  type Awards {
  title:String
   location:String
    decription:String
     date:String
      status:Boolean
       img:[String]
        id:ID
        createdAt:Date
        updatedAt:Date
        updatedBy:updatedBy

  }

  type memberUpdate {
        memberName:String
  }
  type updatedBy {
    member: memberUpdate
  }

  type Query {
    getAllAwards: [ Awards]
   
  getAwardsById(id: ID):  Awards
  getAllActiveAwards:[Awards]
  }

  type Mutation {

    editAwards(title:String, location:String, decription:String, date:String, status:Boolean, img:String, id:ID):  Awards
   addAwards(title: String, ):  Awards
  }
`;
