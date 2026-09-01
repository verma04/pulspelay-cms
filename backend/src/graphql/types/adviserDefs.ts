
const { gql } = require("apollo-server");
const cron = require("node-cron");
const { ObjectId } = require("mongodb");
const axios = require("axios");
var uuid = require("uuid");
// const { Parking } = require('../models/Parking');
module.exports = gql`
   scalar Date
  type Adviser {
  name:String
   designation:String
    videoUrl:String
   about:String
      status:Boolean
   avatar:String
        id:ID
        createdAt:Date
        updatedAt:Date
        updatedBy:updatedBy
     social:socialAdviser
     slug:String
  }

type socialAdviser {

 instagram: String
        linkedin: String
        facebook: String
        youtube: String
        twitter: String
        medium: String
        portfolio: String

}

  type memberUpdate {
        memberName:String
  }
  type updatedBy {
    member: memberUpdate
  }

  type Query {
    getAllAdviser: [Adviser]
   
  getAdviserById(id: ID):  Adviser
  getAllActiveAdviser: [Adviser]
  getAdviserActiveBySlug(slug:String):Adviser
  }

  type Mutation {

    editAdviser(  name:String
   designation:String
    videoUrl:String
   about:String
   avatar:String
   social:String
      status:Boolean, id:ID):  Adviser
   addAdviser(name: String):  Adviser
  }
`;
