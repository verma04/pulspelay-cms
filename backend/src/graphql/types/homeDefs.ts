// const { default: gql } = require('graphql-tag');

import { TeamMember } from "../../models/teamMember";
import moment from "moment";
var FCM = require("fcm-node");
var serverKey =
  "AAAAPzDTgI4:APA91bHCes5Cb8qSs-exCDY54M1BCTPvIjejStj3rS7zaz0QbDTslVO3s5SO5iUvwmdrzySu5RHfXJQaDlmvnu3NWDxyqKR0ic-QLR5jVyA8Xgzqa1tT-XuO_cTpIla5I3j1gAYCicJS"; //put your server key here
var fcm = new FCM(serverKey);
import { Notification } from "../../models/notification";
const { gql } = require("apollo-server");
const cron = require("node-cron");
const { ObjectId } = require("mongodb");
const axios = require("axios");
var uuid = require("uuid");
// const { Parking } = require('../models/Parking');
module.exports = gql`
  scalar Upload
  type Image {
    imgUrl: String
    imgAlt: String
  }
  type home {
    id: ID
    work: Client
    sort: Int
    image: String
    color: String
  }
  type kpi {
    id: ID
    title: String
    description: String
    sort: Int
    color: String
  }

  type Query {
    getHomeWork: [home]
    getAllKpi: [kpi]
    getWorkClients(id: ID): [teamMember]
  }

  type Mutation {
    addHomePageWork(image: String, work: String): home
    editHomePageWork(image: String, work: String, id: ID, color: String): home
    sortHomePage(sort: String): [home]
    sortKpi(sort: String): [kpi]
    editKpi(title: String, description: String, id: ID, color: String): kpi
    addKpi(title: String, description: String): kpi
  }
`;
