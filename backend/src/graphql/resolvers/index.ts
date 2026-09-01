import { adminResolvers } from "./admin";
import { DeivceInfoResolvers } from "./deviceInfo";
import { teamMemberResolvers } from "./teamMember";
import { GraphQLUpload } from "graphql-upload";
import { teamCategoryResolvers } from "./teamCategory";
import { carrerResolvers } from "./carrer";
import { servicesResolvers } from "./services";
import { solutionsResolvers } from "./solutions";
import { blogResolvers } from "./blog";
import { clientsResolvers } from "./clients";
import { tagResolvers } from "./tagImage";
import { websiteResolvers } from "./user";
import { capabilitiesResolvers } from "./capabilities";
import { careerFormResolvers } from "./careerForm";
import { contactusResolvers } from "./contactus";
import { resourcesResolvers } from "./resources";
import { newsResolvers } from "./News";
import { newsLetterResolvers } from "./newsLetter";
import { roleResolvers } from "./role";
import { aboutusResolvers } from "./AboutUs";
import { seoResolvers } from "./seo";
import { HomeResolvers } from "./Home";
import { openAiResolver } from "./openAi";
import { awardsResolvers } from "./Awards";
import { adviserResolvers } from "./Adviser";
import { productResolvers } from "./product";
module.exports = {
  Upload: GraphQLUpload,

  Query: {
    ...adminResolvers.Query,
    ...DeivceInfoResolvers.Query,
    ...teamMemberResolvers.Query,
    ...teamCategoryResolvers.Query,
    ...carrerResolvers.Query,
    ...servicesResolvers.Query,
    ...blogResolvers.Query,
    ...solutionsResolvers.Query,
    ...clientsResolvers.Query,
    ...tagResolvers.Query,
    ...websiteResolvers.Query,
    ...capabilitiesResolvers.Query,
    ...careerFormResolvers.Query,
    ...contactusResolvers.Query,
    ...resourcesResolvers.Query,
    ...newsResolvers.Query,
    ...newsLetterResolvers.Query,
    ...roleResolvers.Query,
    ...aboutusResolvers.Query,
    ...seoResolvers.Query,
    ...HomeResolvers.Query,
    ...awardsResolvers.Query,
    ...adviserResolvers.Query,
    ...productResolvers.Query,
  },
  Mutation: {
    ...adminResolvers.Mutation,
    ...teamMemberResolvers.Mutation,
    ...teamCategoryResolvers.Mutation,
    ...carrerResolvers.Mutation,
    ...servicesResolvers.Mutation,
    ...blogResolvers.Mutation,
    ...solutionsResolvers.Mutation,
    ...clientsResolvers.Mutation,
    ...tagResolvers.Mutation,
    ...capabilitiesResolvers.Mutation,
    ...careerFormResolvers.Mutation,
    ...contactusResolvers.Mutation,
    ...resourcesResolvers.Mutation,
    ...newsResolvers.Mutation,
    ...roleResolvers.Mutation,
    ...aboutusResolvers.Mutation,
    ...seoResolvers.Mutation,
    ...HomeResolvers.Mutation,
    ...openAiResolver.Mutation,
    ...awardsResolvers.Mutation,
    ...adviserResolvers.Mutation,
    ...productResolvers.Mutation,
  },
};
