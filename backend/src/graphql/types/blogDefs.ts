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
  type blogtags {
    value: String
  }
  type blogCategory {
    category: String
  }

  type Blog {
    views: Int
    id: ID
    slug: String
    blogTitle: String

    blogDescription: String

    blogDescriptionHtml: String

    createdAt: String
    blogtags: [blogtags]
    category: [expert]
    blogAvatar: String

    blogSubTitle: String
    publish: Boolean
    comments: [Comments]
    seo: Seo

    author: [role]
    updatedBy: updatedBy

    user: role
  }

  type Query {
    getAllBlog: [Blog]
    getAllTechBlog: [Blog]
    getAllPublishedBlog: [Blog]
    getAllBlogFilter(blogAuthor: String): [Blog]
    getSingleBlogSlug(slug: String): Blog
    getSingleBlog(id: ID): Blog
    getAllBlogByMember(blogAuthor: ID): [Blog]
    getAllBlogCategory: [topic]
    addViewBlog(id: String, ip: String): [Blog]
    getBlogComment(id: ID): [Comments]
  }

  type Mutation {
    searchBlog(search: String): [Blog]

    addBlog(
      blogTitle: String
      blogAvatar: String
      blogAuthor: String
      blogDescription: String
      blogSubTitle: String
      category: String
    ): Blog
    addBlogComments(
      id: String
      name: String
      comment: String
      email: String
    ): Blog
    editBlog(blogDescription: String, blogDescriptionHtml: String, id: ID): Blog
    publishBlog(
      category: String
      blogTitle: String
      blogSubTitle: String
      id: ID
      blogAvatar: String
      tags: String
      slug: String
    ): Blog
    setBlogStatus(id: ID, status: Boolean): Blog
    removeBlogCategory(id: ID): topic
    addBlogCategory(title: String): topic
    editBlogCategory(id: ID, title: String): topic
    addBlogCommentsStatus(
      id: ID
      status: Boolean
      commentID: String
    ): [Comments]
    addBlogManger(id: ID!, author: String): Blog
  }
`;
