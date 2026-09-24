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
// const { Parking } = require('../models/Parking');
module.exports = gql`
  scalar Upload

  type notifications {
    notificationType: String
    notification: [String]
    createdAt: String
  }
  type seo {
    metaDescription: String
    metaTitle: String
    keyword: [String]
  }

  type getDashBoardList {
    Work: Int
    Services: Int
    Solutions: Int
    Blog: Int
    News: Int
    Resources: Int
    Members: Int
  }
  type Testimonial {
    testimonialName: String
    testimonialDescription: String

    testimoniaDesignation: String
    testimonialImage: String
    youtubeUrl: String
    slug: String
    sort: Int
    status: Boolean
    createdAt: String
    caseStudies: category
    id: ID
    updatedBy: updatedBy
  }
  type User {
    id: ID
    email: String
    token: String!
    role: String
    username: String
    createdAt: String

    deviceId: String
    avatar: String
    assignRole: [String]
  }
  type OTP {
    tempToken: String!
  }
  type getKnownUser {
    name: String
    email: String
    IPv4: String
    uniqueID: String
    createdAt: String
    id: ID
    amxId: String
  }
  type NewsLetter {
    id: String
    email: String
    createdAt: String!
  }
  type Seo {
    id: ID
    metaDescription: String
    metaTitle: String
    keyword: [String]
  }

  type CareerForm {
    candidateName: String
    candidateEmail: String
    candidatePhone: String
    candidateMessage: String
    jobTitle: jobTitle
    candidatePosition: String
    candidateCv: String

    createdAt: String
    referrer: referrer
    state: String
  }

  type ContactForm {
    name: String
    email: String
    phone: String
    message: String
    organization: String
    services: String
    solutions: String

    createdAt: String
  }

  type services {
    id: ID
    servicesName: String
  }
  type solutions {
    id: ID
    solutionsName: String
  }
  type hireUs {
    id: ID
    name: String
    email: String
    phone: String
    service: String
    skill: String
    message: String

    createdAt: String
  }

  type jobTitle {
    id: ID
    carrerTitle: String
  }

  type referrer {
    referrerName: String
    referrerEmail: String
    referrerPhone: String
    referrerLocation: String
  }
  type Images {
    imgName: String
    imgUrl: String
    imgAlt: String
    createdAt: String
  }
  type img {
    img: String
  }
  type Capabilities {
    id: ID
    capabilitiesTitle: String
    capabilitiesDescription: String
    capabilitiesList: [capabilitiesList]
    createdAt: String
  }
  type capabilitiesList {
    value: String
    avatar: String
    id: ID
  }

  type teamCategory {
    name: String!
    id: ID!
    description: String!
    createdAt: String!
    status: Boolean!
  }

  type deviceInfo {
    id: ID!
    country_code: String
    country_name: String
    city: String
    postal: String
    latitude: String
    longitude: String
    IPv4: String
    state: String
    name: String
    version: String
    os: String
    type: String
    createdAt: String
    page: String
  }

  type category {
    value: String
    label: String
  }

  type social {
    instagram: String
    linkedin: String
    facebook: String
    youtube: String
    twitter: String
    medium: String
    snapchat: String
    portfolio: String
    dribble: String
  }

  type address {
    addressline1: String
    addressline2: String
    city: String
    pincode: String
    state: String
  }
  type family {
    motherName: String
    emergencyPhone: String
    fatherName: String
  }
  type rating {
    imagine: Int
    design: Int
    build: Int
    perform: Int
  }
  type teamMember {
    id: String
    sort: Int
    memberName: String
    memberAvatar: String
    memberCover: String
    memberPersonalEmail: String
    shortDescription: String
    dreams: [String]
    memberPhone: String
    memberDOB: String
    email: String
    password: String
    memberDescription: String
    memberDesignation: String
    pulseplayID: String
    social: social
    education: String
    interest: [String]
    certificate: [String]
    memberDateOfJoinnng: String
    memberCategory: [category]
    slug: String
    status: Boolean
    enabled: Boolean
    memberWorkType: String
    memberLineManger: category
    family: family
    maritalstatus: String
    gender: String
    address: address
    rating: rating
    token: String
    bloodGroup: String
    whatsApp: String
    updatedBy: updatedBy
  }
  type website {
    websiteUrl: String
    website: Boolean
    websiteImgLeft: String
    websiteImgRight: String
  }
  type branding {
    branding: String
    taglines: String
    singleWord: String
  }
  type socialWork {
    social: Boolean
    column1Img: String
    mobile: String
    column1Img2: String

    column2Img: String

    column2Img2: String

    column2Img3: String

    column3Img: String

    column3Img2: String

    column3Img3: String

    column3Img4: String

    column4Img: String
  }

  type video {
    video: Boolean
    url: String
  }
  type list {
    title: String
    label: String
  }
  type topic {
    id: ID
    title: String
    label: String
  }
  type outReach {
    outreach: Boolean
    outReach: String
    outReach2: String
    outReach3: String
    outReach4: String
  }
  type outcomes {
    outcomes: Boolean

    list: [list]
  }

  type blackAndWhiteLogo {
    logo: String
    isVisible: Boolean
  }
  type Client {
    projectLogo: String
    projectLogoTransparent: String
    blackAndWhiteLogo: blackAndWhiteLogo
    year: String
    landingDescription: String
    projectIndustry: [category]
    location: String
    projectDescription: String
    projectName: String
    services: [category]
    employeeWork: [category]
    clientColorTheme: String
    tools: [capabilities]
    area: [capabilities]
    id: ID
    areas: String
    createdAt: String
    slug: String
    status: Boolean
    work: [teamMember]
    test: Testimonial
    website: website
    branding: branding
    social: socialWork
    video: video
    outReach: outReach
    outcomes: outcomes
    sort: Int
    sliderImage: String
    seo: seo
    updatedBy: updatedBy
  }

  type Carrer {
    id: ID
    carrer: String
    carrerVaccancy: String
    carrerCategory: String
    carrerLocation: String
    carrerVancy: String
    carrerDescription: String
    employeLink: String
    createdAt: String
    slug: String
    experience: String
  }

  type capabilities {
    id: String
    label: String
  }
  type expert {
    value: String
    label: String
  }
  type resources {
    id: ID
    title: String
    contentTypes: [category]
    topics: [category]
    sortDescription: String

    video: String
    reportDescription: String
    reportImage: String
    reportPdf: String
    reportAvatar: String
    slug: String
    status: Boolean
  }

  type Services {
    id: ID
    servicesName: String
    servicesCover: String
    servicesVideo: String
    servicesHeading1: String
    servicesHeading2: String
    servicesPara1: String
    servicesPara2: String
    servicesImg1: String
    servicesImg2: String
    capabilities: [capabilities]
    expert: [expert]
    slug: String
    servicesAvatar: String

    svg: String
    servicesHeading: String
    sort: String
    seo: Seo
    status: Boolean
    createdAt: Date
    updatedAt: Date
    updatedBy: updatedBy
  }
  type list {
    logo: String
    head: String
    para: String
  }
  type paraList {
    label: String
  }
  type Solutions {
    id: ID
    solutionsName: String
    solutionsHeading1: String
    solutionsHeading: String
    solutionsPara1: String
    colorCode: String
    paraList: [capabilities]
    solutionsImg1: String
    solutionsImg2: String
    solutionsCover: String
    list: [list]
    solutionsAvatar: String
    slug: String

    svg: String
    sort: String
    seo: Seo
    status: Boolean
    createdAt: Date
    updatedAt: Date
    updatedBy: updatedBy
  }

  type tagImage {
    id: ID
    top: Float
    left: Float
    tag: teamMember
  }
  type uses {
    id: ID
    member: teamMember
  }
  type Tag {
    id: ID
    image: String
    tag: [category]
    createdAt: String
    caption: String
    member: [tagImage]
    user: uses
  }
  # type blogUser {
  #    avatar
  # }

  type News {
    id: ID
    slug: String
    newsTitle: String

    newsDescription: String

    newsDescriptionHtml: String

    createdAt: String
    newstags: [blogtags]
    category: [expert]
    newsAvatar: String
    newsAuthor: String
    newsSubTitle: String
    publish: Boolean
  }

  type ServicesWeb {
    services: [Services]
    member: [teamMember]
  }

  type Session {
    id: ID
    deviceOs: String
    deviceVersion: String
    deviceBrowser: String
    latitude: String
    longitude: String

    region: String
    timezone: String
    deviceId: String
    city: String
    ipAddress: String
    user: String
    token: String
    notificationToken: String
    createdAt: String
    logout: Boolean
  }

  type Views {
    count: String
    date: String
  }
  type Outcomes {
    title: String
    para: String
    id: ID
  }

  type role {
    id: ID

    token: String!
    role: String

    avatar: String
    assignRole: [String]
    member: teamMember
  }
  type Query {
    getRoleById(id: ID): role
    getAllRole: [role]
    checkOtpToken(tempToken: String): OTP
    getHireUs: [hireUs]
    getViews(gte: String, lte: String): [Views]
    getAllNotifications: [notifications]
    getDashBoardList: getDashBoardList
    getTestimonialClient(id: ID): Testimonial
    getTaggedById(id: ID): [Tag]
    getAllContactusForm: [ContactForm]
    # TagImages
    getAllTagImage: [Tag]
    getAllTagImageAdmin: [Tag]
    getAllOneImage(id: ID): Tag
    getUser: User!
    getMember: teamMember!
    getServicesSeo(id: ID): Seo
    getSolutionsSeo(id: ID): Seo
    getAllServices: [Services]
    getSingleServices(id: ID): Services
    getAllActiveServices(id: ID): [Services]
    getAllSolutions: [Solutions]
    getSingleSolutions(id: ID): Solutions
    getAllActiveSolutions: [Solutions]
    getSolutionsBySlug(slug: String): Solutions
    getDeivceInfo(data: String): deviceInfo
    getUserLog(id: ID): [deviceInfo]

    getAllDeivceInfo: [deviceInfo]
    getAllSolutionWeb: [Solutions]
    getCategory: [category]
    getAllTeamMember: [teamMember]
    getAllActiveTeamMember: [teamMember]
    getOneTeamMember(id: ID): teamMember
    getAllOneSolutionWeb(id: ID): Services
    getSingleClientsBySlug(slug: String): Client
    getAllServicesWeb: [Services]
    getAllTeamMemberWeb: [teamMember]
    getOneTeamMemberWeb(slug: String): teamMember
    getAllCategory: [teamCategory]
    getSingleCategory: teamCategory
    getAllImages: [Images]
    getOneCarrer(id: ID): Carrer
    getOneTeamMemberCarrer(id: String): teamMember
    getBySlugCarrer(slug: String): Carrer
    getOneSlugCarrer(id: ID): Carrer
    getAllCarrer: [Carrer]

    getAllNewsLetter: [NewsLetter]
    getAllNews: [News]

    getAllPublishedNews: [News]
    getTestmonialsSolutions(id: ID): [Client]

    getSingleNews(id: ID): News

    getSingleNewsSlug(slug: String): News

    getAllClients: [Client]
    getAllClientsWeb: [Client]
    getAllLogoHomePage: [Client]
    getSingleClients(id: ID): Client
    getSingleClientWeb(slug: String): Client
    getProjectById(id: ID): [Client]
    getOneTeamMemberBySlug(slug: String): teamMember
    #  Capabilities
    getAllCapabilities: [Capabilities]
    getSingleCapabilities(id: ID): Capabilities
    getTestimonialClientWeb: [Testimonial]
    # CareerForm
    getAllCareer: [CareerForm]
    getServicesExpert(id: ID!): [teamMember]

    getKnownUser: [getKnownUser]

    # resources
    getAllResources: [resources]
    getAllResourcesWeb: [resources]
    getResourcesById(id: ID): resources
    getResourcesBySlug(slug: String): resources
    getCapabilitiesSlug(slug: String): resources
    getTestimonial: [Testimonial]

    getSingleTestimonial(id: ID): Testimonial
    getResourcesTopic: [topic]
    getResourcesTypes: [topic]

    getUserSession: [Session]
    userLogout: User
    getCities(gte: String, lte: String): [City]
    getCountry(gte: String, lte: String): [City]
    getPages(gte: String, lte: String): [City]
    getOs(gte: String, lte: String): [City]
    getCountryCode(gte: String, lte: String): [City]
  }
  type City {
    name: String
    value: String
  }

  type loginFace {
    name: String
    token: String
  }

  type UploadedFileResponse {
    imgUrl: String
    imgAlt: String
    imgName: String
  }
  type UploadedVideoResponse {
    vedioUrl: String
  }

  input Input {
    file: Upload!
  }
  type Images {
    imgUrl: String
  }
  type Comments {
    id: ID
    name: String
    email: String
    comment: String
    createdAt: String
    status: Boolean
    blog: ID
  }
  type View {
    count: String
  }

  type Mutation {
    newsLetter(email: String!): ContactForm
    loginFace(file: Upload!): loginFace!
    forceUserLogout(id: ID): Session
    videoUpload(
      file: Upload!
      fileName: String!
      altName: String!
    ): UploadedVideoResponse!
    singleUpload(
      file: Upload!
      fileName: String!
      altName: String!
    ): UploadedFileResponse!
    pdfUpload(file: Upload!): UploadedFileResponse!
    editorUpload(
      file: Upload!
      fileName: String!
      altName: String!
    ): UploadedFileResponse!
    confirmOtp(
      otp: String
      tempToken: String
      deviceOs: String
      deviceId: String
      deviceVersion: String
      deviceBrowser: String
      latitude: Float
      longitude: Float

      region: String
      timezone: String
      country_name: String
      city: String
      ipAddress: String
    ): User!

    login(username: String!, password: String!): OTP!
    memberLogin(email: String!, password: String!): teamMember!
    addTeamMember(
      id: ID
      projectLogo: String
      memberName: String
      memberAvatar: String
      memberCover: String
      memberPersonalEmail: String
      memberPhone: String
      memberDOB: String
      email: String
      password: String
      memberDescription: String
      shortDescription: String
      dreams: String
      memberDesignation: String
      education: String
      interest: String
      certificate: String
      memberDateOfJoinnng: String
      memberCategory: String
      slug: String
      memberWorkType: String
      memberLineManger: String
      certificate: String
      interest: String
      education: String
      instagram: String
      linkedin: String
      facebook: String
      youtube: String
      twitter: String
      medium: String
      snapchat: String
      portfolio: String
      dribble: String
      addressline1: String
      addressline2: String
      city: String
      pincode: String
      state: String
      motherName: String
      fatherName: String
      emergencyPhone: String
      maritalstatus: String
      gender: String
      active: Boolean
      imagine: Int
      design: Int
      build: Int
      perform: Int
      pulseplayID: String
      bloodGroup: String
      token: String
      whatsApp: String
    ): teamMember
    sortTeamMember(sort: String): [teamMember]

    sortClients(sort: String): [Client]
    sortTestimonial(sort: String): [Testimonial]
    sortServices(sort: String): [Services]
    editTeamMember(
      id: ID
      projectLogo: String
      bloodGroup: String
      shortDescription: String
      dreams: String
      whatsApp: String
      memberName: String
      memberAvatar: String
      memberCover: String
      memberPersonalEmail: String
      memberPhone: String
      memberDOB: String
      email: String
      password: String
      memberDescription: String
      memberDesignation: String
      education: String
      interest: String
      certificate: String
      memberDateOfJoinnng: String
      memberCategory: String
      slug: String
      memberWorkType: String
      memberLineManger: String
      certificate: String
      interest: String
      education: String
      instagram: String
      linkedin: String
      facebook: String
      youtube: String
      twitter: String
      medium: String
      snapchat: String
      portfolio: String
      dribble: String
      addressline1: String
      addressline2: String
      city: String
      pincode: String
      state: String
      motherName: String
      fatherName: String
      emergencyPhone: String
      maritalstatus: String
      gender: String
      active: Boolean
      imagine: Int
      design: Int
      build: Int
      perform: Int
      pulseplayID: String
    ): teamMember
    addCarrer(
      carrer: String
      carrerVaccancy: String
      carrerCategory: String
      carrerLocation: String
      carrerVancy: String
      carrerDescription: String
      employeLink: String
      experience: String
    ): Carrer
    editCarrer(
      id: String
      carrer: String
      carrerVaccancy: String
      carrerCategory: String
      carrerLocation: String
      carrerVancy: String
      carrerDescription: String
      employeLink: String
      experience: String
    ): Carrer

    addTeamCategory(name: String!, description: String!): teamCategory
    statusTeamCategory(id: ID!): teamCategory
    editTeamCategory(id: ID!, name: String!, description: String!): teamCategory
    editServicesSeo(
      id: ID
      metaDescription: String
      metaTitle: String
      keyword: String
    ): Seo
    editSolutionsSeo(
      id: ID
      metaDescription: String
      metaTitle: String
      keyword: String
    ): Seo
    addServices(
      svg: String
      servicesName: String
      servicesCover: String
      servicesVideo: String
      servicesHeading1: String
      servicesHeading2: String
      servicesHeading: String
      servicesPara1: String
      servicesPara2: String
      capabilities: String
      servicesImg1: String
      servicesImg2: String
      expert: String
      servicesAvatar: String
    ): Services

    editServices(
      svg: String
      servicesName: String
      servicesCover: String
      servicesVideo: String
      servicesHeading1: String
      servicesHeading2: String
      servicesHeading: String
      servicesPara1: String
      servicesPara2: String
      capabilities: String
      servicesImg1: String
      servicesImg2: String
      expert: String
      id: ID
      status: Boolean
      servicesAvatar: String
    ): Services

    addSolutions(
      id: ID
      svg: String
      solutionsName: String
      solutionsHeading1: String
      solutionsHeading: String
      solutionsPara1: String
      paraList: String
      solutionsImg1: String
      solutionsImg2: String
      solutionsCover: String
      list: String
      colorCode: String
      solutionsAvatar: String
      slug: String
    ): Solutions

    editSolutions(
      id: ID
      svg: String
      solutionsName: String
      solutionsHeading1: String
      solutionsHeading: String
      solutionsPara1: String
      paraList: String
      solutionsImg1: String
      solutionsImg2: String
      colorCode: String
      solutionsCover: String
      list: String
      solutionsAvatar: String
      slug: String
      status: Boolean
    ): Solutions

    addNews(
      newsTitle: String
      newsAvatar: String
      newsAuthor: String
      newsDescription: String
      newsSubTitle: String
    ): News
    editNews(newsDescription: String, newsDescriptionHtml: String, id: ID): News
    publishNews(
      newsTitle: String
      newsSubTitle: String
      id: ID
      newsAvatar: String
      tags: String
    ): News

    editClient(
      sliderImage: String
      projectName: String
      id: ID
      year: String
      landingDescription: String
      status: Boolean
      location: String
      areas: String
      projectLogo: String
      projectLogoTransparent: String
      blackAndWhiteLogo: String
      clientColorTheme: String
      employeeWork: String

      projectIndustry: String
      services: String

      projectDescription: String
      area: String
      tools: String
      website: String
      branding: String

      social: String
      video: String
      outReach: String
      outcomes: String
    ): Client
    addUserToken(token: String): User
    addTagedImages(image: String, tag: String, caption: String): Tag

    editTagedImages(id: ID, image: String, tag: String, caption: String): Tag

    addClient(projectName: String): Client

    #  Capabilities
    addCapabilities(
      capabilitiesTitle: String
      capabilitiesDescription: String
      capabilitiesList: String
    ): Capabilities
    editCapabilities(
      id: ID
      capabilitiesTitle: String
      capabilitiesDescription: String
      capabilitiesList: String
    ): Capabilities

    # CareerForm

    addCareerForm(
      candidateName: String
      candidateEmail: String
      candidatePhone: String
      candidateMessage: String

      candidatePosition: String
      candidateCv: Upload!
      amxId: String
      referrerName: String
      referrerEmail: String
      referrerPhone: String
      referrerLocation: String
      state: String
    ): CareerForm

    addContactusForm(
      name: String
      email: String
      phone: String
      message: String
      organization: String
      services: String
      solutions: String
      amxId: String
    ): ContactForm

    #  Blog

    setNewsStatus(id: ID, status: Boolean): News

    # resources
    addResources(title: String): resources
    sortResources(sort: String): [resources]
    editResources(
      id: ID
      title: String
      contentTypes: String
      topics: String
      sortDescription: String

      video: String
      reportDescription: String
      reportImage: String
      reportPdf: String
      reportAvatar: String

      status: Boolean
    ): resources
    addTestimonial(caseStudies: String): Testimonial
    editTestimonial(
      testimonialName: String
      id: ID
      testimonialDescription: String
      testimoniaDesignation: String
      caseStudies: String
      testimonialImage: String
      youtubeUrl: String

      status: Boolean
    ): Testimonial
    addResourcesTopic(title: String, label: String): topic
    editResourcesTopic(id: ID, title: String, label: String): topic
    addResourcesTypes(title: String, label: String): topic
    editResourcesTypes(id: ID, title: String, label: String): topic
    removeResourcesTopic(id: ID): topic

    removeResourcesTypes(id: ID): topic

    hireUsForm(
      name: String
      email: String
      phone: String
      service: String
      skill: String
      message: String
      amxId: String
    ): [hireUs]
    addRole(
      user: String
      role: String
      password: String

      assignRole: String
    ): role

    editRole(
      user: String
      role: String

      assignRole: String
    ): role

    generateImage(prompt: String, size: String): img
    checkGrammar(prompt: String): img
  }
`;
cron.schedule("10 01 * * *", async () => {
  const find = await TeamMember.find({ status: true });
  console.log("corn");
  try {
    find.forEach((t: any) => {
      if (
        moment(t.memberDateOfJoinnng).format("MM/DD") ===
        moment(new Date()).format("MM/DD")
      ) {
        var firstDate = moment(t.memberDateOfJoinnng, "YYYY-MM-DD"); //Create date using string-format constructor
        var secondDate = moment(new Date(), "YYYY-MM-DD");
        var duration = moment.duration(secondDate.diff(firstDate));
        var years = duration.asYears();

        Notification.create({
          createdAt: new Date().toISOString(),
          notification: [
            `  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256-.0078C260.7-.0081 265.2 1.008 269.4 2.913L457.7 82.79C479.7 92.12 496.2 113.8 496 139.1C495.5 239.2 454.7 420.7 282.4 503.2C265.7 511.1 246.3 511.1 229.6 503.2C57.25 420.7 16.49 239.2 15.1 139.1C15.87 113.8 32.32 92.12 54.3 82.79L242.7 2.913C246.8 1.008 251.4-.0081 256-.0078V-.0078zM256 444.8C393.1 378 431.1 230.1 432 141.4L256 66.77L256 444.8z"/></svg> Congratulations  ${
              t.memberName
            } completed ${Math.round(years)} years `,
          ],
          notificationType: "Joining",
        });
      }
    });

    find.forEach((t: any) => {
      if (moment(t.memberDOB).format("MM/DD") === moment().format("MM/DD")) {
        Notification.create({
          createdAt: new Date().toISOString(),
          notification: [
            ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 111.1c22.09 0 40-17.88 40-39.97S352 0 352 0s-40 49.91-40 72S329.9 111.1 352 111.1zM224 111.1c22.09 0 40-17.88 40-39.97S224 0 224 0S184 49.91 184 72S201.9 111.1 224 111.1zM383.1 223.1L384 160c0-8.836-7.164-16-16-16h-32C327.2 144 320 151.2 320 160v64h-64V160c0-8.836-7.164-16-16-16h-32C199.2 144 192 151.2 192 160v64H128V160c0-8.836-7.164-16-16-16h-32C71.16 144 64 151.2 64 160v63.97c-35.35 0-64 28.65-64 63.1v68.7c9.814 6.102 21.39 11.33 32 11.33c20.64 0 45.05-19.73 52.7-27.33c6.25-6.219 16.34-6.219 22.59 0C114.1 348.3 139.4 367.1 160 367.1s45.05-19.73 52.7-27.33c6.25-6.219 16.34-6.219 22.59 0C242.1 348.3 267.4 367.1 288 367.1s45.05-19.73 52.7-27.33c6.25-6.219 16.34-6.219 22.59 0C370.1 348.3 395.4 367.1 416 367.1c10.61 0 22.19-5.227 32-11.33V287.1C448 252.6 419.3 223.1 383.1 223.1zM352 373.3c-13.75 10.95-38.03 26.66-64 26.66s-50.25-15.7-64-26.66c-13.75 10.95-38.03 26.66-64 26.66s-50.25-15.7-64-26.66c-13.75 10.95-38.03 26.66-64 26.66c-11.27 0-22.09-3.121-32-7.377v87.38C0 497.7 14.33 512 32 512h384c17.67 0 32-14.33 32-32v-87.38c-9.91 4.256-20.73 7.377-32 7.377C390 399.1 365.8 384.3 352 373.3zM96 111.1c22.09 0 40-17.88 40-39.97S96 0 96 0S56 49.91 56 72S73.91 111.1 96 111.1z"/></svg> Happy Birthday  ${t.memberName}`,
          ],
          notificationType: "Birthday",
        });
      }
    });
    const date = new Date().getDate();
    const month = new Date().getMonth();

    if (date === 1) {
      const arr: any = [];
      await find.forEach((t: any) => {
        if (new Date(t.memberDOB).getMonth() === month) {
          arr.push(
            `${t.memberName} birthday on ${moment(t.memberDOB).format("MM/DD")}`
          );
        }
        if (new Date(t.memberDateOfJoinnng).getMonth() === month) {
          var firstDate = moment(t.memberDateOfJoinnng, "YYYY-MM-DD"); //Create date using string-format constructor
          var secondDate = moment(new Date(), "YYYY-MM-DD");
          var duration = moment.duration(secondDate.diff(firstDate));
          var years = duration.asYears();

          arr.push(
            `${t.memberName}  will complete ${Math.round(years)} ${
              Math.round(years) <= 1 ? "year" : "years"
            } on ${moment(t.memberDateOfJoinnng).format("MM/DD")}`
          );
        }
      });

      Notification.create({
        createdAt: new Date().toISOString(),
        notification: arr,
        notificationType: "Monthly Events",
      });
    }
  } catch (error) {
    console.warn(error);
  }
});

// var message = {
//   //this may vary according to the message type (single recipient, multicast, topic, et cetera)
//   to: "dm9n_42MQxq3QrT1rkhCpV:APA91bFWA0w76KTSVvdlC_T-w1Sm3x2mTcMt5riADU7eDXkscbshiO0X8sPwzKVMYG7F4XX8gjrGMJyC3HGSj9WBJQJrxu4LdgmAgcfKqGmqaw__8sA1bIXe-OP-Zy1JJ6rpk5Uewj0e",
//   collapse_key: "your_collapse_key",

//   notification: {
//     title: "Hi Pankaj",
//     body: "Wecome to pulse Play digital",
//   },

//   data: {
//     //you can send only notification or only data(or include both)
//     my_key: "my value",
//     my_another_key: "my another value",
//   },
// };

// fcm.send(message, function (err: any, response: any) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully sent with response: ", response);
//   }
// });
