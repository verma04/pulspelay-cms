// const { default: gql } = require('graphql-tag');

import { TeamMember } from "../../models/teamMember";
import moment from "moment";

//  //put your server key here
// var fcm = new FCM(serverKey);
import { Notification } from "../../models/notification";
import { pushNotification } from "../../util/pushNotifications";

const { gql } = require("apollo-server");
const cron = require("node-cron");
const { ObjectId } = require("mongodb");
const axios = require("axios");
const sgMail = require("@sendgrid/mail");
var uuid = require("uuid");

module.exports = gql`
  type heroSection {
    title: String
    image: String
    paragraph: String
  }
  type keyFeatures {
    title: String
    svg: String
    paragraph: String
  }
  type imageProduct {
    laptop: String
    dashBoard: String
    mobile: String
  }
  type keyFeaturesProduct {
    title: String
    svg: String
    paragraph: String
  }
  type Product {
    id: String
    productName: String
    status: Boolean
    name: String
    seo: seo
    para: String
    para2: String
    image: imageProduct
    keyFeatures: [keyFeaturesProduct]
    experts: [teamMember]
    heroSection: heroSection
  }

  type Query {
    getAllProduct: [Product]
    getAllActiveProduct: [Product]
    getProductById(id: ID): Product
    getProductBySlug(slug: String): Product
  }
  type Mutation {
    addProduct(productName: String): Product
    editProduct(
      id: ID!
      productName: String!
      heroSection: String!
      keyFeatures: String!
      para: String!
      para2: String!
      image: String!
      experts: String!
      status: Boolean!
    ): Product
  }
`;
