import { gql } from "apollo-boost";

// CITY QUERIES START ----------------------------

const seo = `
id
    metaDescription
    metaTitle
    keyword
`;
const Hire = `

    id
    name
    email
    phone
    service
    skill
    message
    createdAt


`;

const Views = ` 
    count
    date
  `;
const test = `  testimonialName
    testimonialDescription
    testimoniaDesignation
    testimonialImage
    slug
    sort
    status
    createdAt
    caseStudies {
      value
      label
    }

createdAt
    id
    
      updatedBy {
      member {
        memberName
      }
    }

    
    `;

const resources = `
    id
    title
  
    sortDescription
    video
    reportDescription
    reportImage
    reportPdf
    reportAvatar
    status
    contentTypes {
      value
      label
    }
    slug
    topics {
      value
      label
    }
  `;

const servcies = `
      id
      servicesName
      servicesCover
      servicesVideo
      servicesHeading
      servicesHeading1
      servicesHeading2
      servicesPara1
      servicesPara2
      servicesImg1
      servicesImg2
      svg
      capabilities {
        label
      }
      expert {
        value
        label
      }
      slug
      servicesAvatar
       status
          sort
            createdAt
        updatedAt
         updatedBy {
      member {
        memberName
      }
    }
        
`;
const blog = `
   id
    slug
    blogTitle
    blogDescription
    blogDescriptionHtml
    createdAt
    blogtags {
      value
    }
    category {
      value
      label
    }
    blogAvatar

    blogSubTitle
    publish
      views
      comments {
        id
         name
    email
    comment
    createdAt
    status
      }
    seo {
    
    metaDescription
    metaTitle
    keyword
  }

    author {
      role
      member {
        id
        memberName
        memberAvatar
        memberDesignation
      }
      id
    }
       updatedBy {
      member {
        memberName
      }
    }

`;
const news = `
   id
    slug
    newsTitle
    newsDescription
    newsDescriptionHtml
    createdAt
   newstags {
      value
    }
  
    newsAvatar
    newsAuthor
    newsSubTitle
    publish
  

`;
const device = `
  
id
country_code
country_name
city
postal
latitude
longitude
IPv4
state
name
version
os
type
createdAt
page

`;

const solutions = `
      id
      solutionsName
      solutionsHeading1
            solutionsHeading
      solutionsPara1
      colorCode
      paraList {
        label
      }
      solutionsImg1
      solutionsImg2
      solutionsCover
      list {
        logo
        head

        para
      }
  
      solutionsAvatar
      slug
      svg
      status
               createdAt
        updatedAt
         updatedBy {
      member {
        memberName
      }
    }
`;

const client = `

 sort
 blackAndWhiteLogo {
  logo
  isVisible
 }
 areas
    projectLogo
    projectLogoTransparent
    year
    landingDescription
    projectIndustry {
      value
      label
    }
    location
    projectDescription
    projectName
    sliderImage
    services {
      value
      label
    }
    employeeWork {
      value
      label
    }
    clientColorTheme
    tools {
      id
      label
    }
    area {
      id
      label
    }
    id
    createdAt
    slug
    status
    website {
      website
      websiteUrl
      websiteImgLeft
      websiteImgRight
    }
    branding {
      branding
      taglines
      singleWord
    }
    social {
      social
      mobile
      column1Img
      column1Img2
      column2Img
      column2Img2
      column2Img3
      column3Img
      column3Img2
      column3Img3
      column3Img4
      column4Img
    }
    video {
      video
      url
    }
    outReach {
      outreach
      outReach
      outReach2
      outReach3
      outReach4
    }
    outcomes {
      outcomes
      list {
        title
        label
        logo
        head
        para
      }
    }

  seo {
    
    metaDescription
    metaTitle
    keyword
  }

 
  updatedBy {
      member {
        memberName
      }
    }

`;

const topic = `
  id
  title 
  label
`;

const employee = `
id
sort
    memberName
    memberAvatar
    memberCover
    memberPersonalEmail
    memberPhone
    memberDOB
    email
    pulseplayID
    bloodGroup
    password
    memberDescription
    memberDesignation
    social {
      instagram
      linkedin
      facebook
      youtube
      twitter
      medium
      snapchat
      portfolio
      dribble
    }
    education
    interest
    certificate
    memberDateOfJoinnng
    shortDescription
    dreams
    slug
    status
    enabled
    memberWorkType
    memberLineManger {
      value
      label
    }
    maritalstatus
    gender
    family {
      motherName
      emergencyPhone
      fatherName
    }

    rating {
      imagine,
          design,
          build,
          perform, 
    }
    address {
      addressline1
      addressline2
      city
      pincode
      state
    }
    memberCategory {
      value
      label
    }
    whatsApp
      updatedBy {
      member {
        memberName
      }
    }


`;

const category = `name
id
description
createdAt
status
`;
export const ALL_ROLE = gql`
  query GetAllRole {
    getAllRole {
      assignRole
      role
      id
      member {
        id
        email
        memberName
        memberAvatar
        memberPersonalEmail
      }
    }
  }
`;
export const HIRE_US = gql`
query GetHireUs {
  getHireUs {
    ${Hire}
  }
}`;

export const GET_VIEWS = gql`
query GetViews($gte: String, $lte: String) {
  getViews(gte: $gte, lte: $lte) {
   ${Views}
  }
}`;
export const GET_CITIES = gql`
  query GetCities($gte: String, $lte: String) {
    getCities(gte: $gte, lte: $lte) {
      name
      value
    }
  }
`;
export const GET_OS = gql`
  query GetCities($gte: String, $lte: String) {
    getOs(gte: $gte, lte: $lte) {
      name
      value
    }
  }
`;

export const GET_ARCH = gql`
  query GetAllBrandsArch {
    getAllBrandsArch {
      title
      para
      url
    }
  }
`;
export const GET_PAGES = gql`
  query GetCities($gte: String, $lte: String) {
    getPages(gte: $gte, lte: $lte) {
      name
      value
    }
  }
`;
export const COUNTRY_CODE = gql`
  query GetCities($gte: String, $lte: String) {
    getCountryCode(gte: $gte, lte: $lte) {
      name
      value
    }
  }
`;
export const EDIT_TOPIC = gql`
  mutation EditResourcesTopic(
    $id: ID
    $title: String
    $label: String
  ) {
    editResourcesTopic(
      id: $id
      title: $title
      label: $label
    ) {
      ${topic}
    }
  }
`;
export const ADD_ROLE = gql`
  mutation AddRole(
    $user: String
    $role: String
    $password: String
    $assignRole: String
  ) {
    addRole(
      user: $user
      role: $role
      password: $password
      assignRole: $assignRole
    ) {
      assignRole
      role
      id
      member {
        email
        memberName
        memberAvatar
        memberPersonalEmail
      }
    }
  }
`;

export const EDIT_ROLE = gql`
  mutation AddRole($user: String, $role: String, $assignRole: String) {
    editRole(
      user: $user
      role: $role

      assignRole: $assignRole
    ) {
      assignRole
      role
      id
      member {
        email
        memberName
        memberAvatar
        memberPersonalEmail
      }
    }
  }
`;
export const ADD_ROLE_BY_ID = gql`
  query GetRoleById($id: ID) {
    getRoleById(id: $id) {
      assignRole
      role
      id
      member {
        id
        email
        memberName
        memberAvatar
        memberPersonalEmail
      }
    }
  }
`;
export const EDIT_TYPES = gql`
  mutation EditResourcesTopic(
    $id: ID
    $title: String
    $label: String
  ) {
    editResourcesTypes(
      id: $id
      title: $title
      label: $label
    ) {
      ${topic}
    }
  }
`;
export const EDIT_BLOG_TYPES = gql`
  mutation  editBlogCategory(
    $id: ID
    $title: String
   
  ) {
    editBlogCategory(
      id: $id
      title: $title
  
    ) {
      ${topic}
    }
  }
`;
export const BLOG_COMMENT_STATUS = gql`
  mutation AddBlogCommentsStatus(
    $id: ID
    $status: Boolean
    $commentId: String
  ) {
    addBlogCommentsStatus(id: $id, status: $status, commentID: $commentId) {
      id
      name
      email
      comment
      createdAt
      status
      blog
    }
  }
`;
export const ADD_AUTHOR = gql`
mutation AddBlogManger($id: ID!, $author: String) {
  addBlogManger(id: $id, author: $author) {
${blog}
  }
}`;
export const ADD_TOPIC = gql`
mutation AddResourcesTopic($title: String, $label: String) {
  addResourcesTopic(title: $title, label: $label) {
    ${topic}
  }
}`;
export const ADD_TYPES = gql`
mutation AddResourcesTopic($title: String, $label: String) {
  addResourcesTypes(title: $title, label: $label) {
    ${topic}
  }
}`;
export const ADD_BLOG_TYPES = gql`
mutation  addBlogCategory($title: String,) {
  addBlogCategory(title: $title) {
    ${topic}
  }
}`;

export const REMOVE_TOPIC = gql`
mutation RemoveResourcesTopic($id: ID) {
  removeResourcesTopic(id: $id) {
     ${topic}
  }
}`;
export const REMOVE_TYPES = gql`
mutation RemoveResourcesTopic($id: ID) {
  removeResourcesTypes(id: $id) {
     ${topic}
  }
}`;

export const REMOVE_BLOG_TYPES = gql`
mutation removeBlogCategory($id: ID) {
 removeBlogCategory(id: $id) {
     ${topic}
  }
}`;
export const GET_TOPIC = gql`
query RemoveResourcesTopic {
   getResourcesTopic {
     ${topic}
  }
}`;

export const GET_BLOG_TYPE = gql`
query getAllBlogCategory {
   getAllBlogCategory {
     ${topic}
  }
}`;
export const GET_TYPES = gql`
query RemoveResourcesTopic {
   getResourcesTypes {
     ${topic}
  }
}`;
export const GET_USER = gql`
  query getuser {
    getUser {
      id
      role
      deviceId
      email
      assignRole

      avatar
      username
    }
  }
`;

export const GET_ALL_TEAM = gql`
  query Query {
    getAllTeamMember {
      ${employee}
    }
  }
`;
export const GET_ALL_TEAM_ACTIVE = gql`
  query Query {
    getAllActiveTeamMember {
      ${employee}
    }
  }
`;

export const GET_ONE_TEAM = gql`
query Query($id: ID) {
  getOneTeamMember(id: $id) {

    ${employee}
  }
}`;

export const ADD_TEAM_MEMBER = gql`
mutation Mutation( $memberName: String, $memberAvatar: String, $memberCover: String, $memberPersonalEmail: String, $memberPhone: String, $memberDob: String, $email: String, $password: String, $memberDescription: String, $shortDescription: String, $dreams: String, $memberDesignation: String, $education: String, $interest: String, $certificate: String, $memberDateOfJoinnng: String, $memberCategory: String, $slug: String, $memberWorkType: String, $memberLineManger: String, $instagram: String, $linkedin: String, $facebook: String, $youtube: String, $twitter: String, $medium: String, $snapchat: String, $portfolio: String, $dribble: String, $addressline1: String, $addressline2: String, $city: String, $pincode: String, $state: String, $fatherName: String, $motherName: String, $emergencyPhone: String, $maritalstatus: String, $gender: String, $active: Boolean, $imagine: Int, $design: Int, $perform: Int, $build: Int, $pulseplayID: String, $bloodGroup: String, $whatsApp: String) {
  addTeamMember(, memberName: $memberName, memberAvatar: $memberAvatar, memberCover: $memberCover, memberPersonalEmail: $memberPersonalEmail, memberPhone: $memberPhone, memberDOB: $memberDob, email: $email, password: $password, memberDescription: $memberDescription, shortDescription: $shortDescription, dreams: $dreams, memberDesignation: $memberDesignation, education: $education, interest: $interest, certificate: $certificate, memberDateOfJoinnng: $memberDateOfJoinnng, memberCategory: $memberCategory, slug: $slug, memberWorkType: $memberWorkType, memberLineManger: $memberLineManger, instagram: $instagram, linkedin: $linkedin, facebook: $facebook, youtube: $youtube, twitter: $twitter, medium: $medium, snapchat: $snapchat, portfolio: $portfolio, dribble: $dribble, addressline1: $addressline1, addressline2: $addressline2, city: $city, pincode: $pincode, state: $state, fatherName: $fatherName, motherName: $motherName, emergencyPhone: $emergencyPhone, maritalstatus: $maritalstatus, gender: $gender, active: $active, imagine: $imagine, design: $design, perform: $perform, build: $build, pulseplayID: $pulseplayID, bloodGroup: $bloodGroup, whatsApp: $whatsApp) {
   ${employee}
  
  }
}
`;
export const SORT_TEAM_MEMBER = gql`
mutation Mutation($sort: String) {
  sortTeamMember(sort: $sort) {
${employee}
  
  }
}`;

export const SORT_SERVICES = gql`
mutation Mutation($sort: String) {
 sortServices(sort: $sort) {
${resources}
  
  }
}`;
export const SORT_RESOURCERS = gql`
mutation Mutation($sort: String) {
  sortResources(sort: $sort) {
${resources}
  
  }
}`;

export const SORT_CLIENTS = gql`
mutation Mutation($sort: String) {
   sortClients(sort: $sort) {
${client}
  
  }
}`;
export const EDIT_TEAM_MEMBER = gql`
mutation Mutation($id: ID, $memberName: String, $memberAvatar: String, $memberCover: String, $memberPersonalEmail: String, $memberPhone: String, $memberDob: String, $email: String, $password: String, $memberDescription: String, $shortDescription: String, $dreams: String, $memberDesignation: String, $education: String, $interest: String, $certificate: String, $memberDateOfJoinnng: String, $memberCategory: String, $slug: String, $memberWorkType: String, $memberLineManger: String, $instagram: String, $linkedin: String, $facebook: String, $youtube: String, $twitter: String, $medium: String, $snapchat: String, $portfolio: String, $dribble: String, $addressline1: String, $addressline2: String, $city: String, $pincode: String, $state: String, $fatherName: String, $motherName: String, $emergencyPhone: String, $maritalstatus: String, $gender: String, $active: Boolean, $imagine: Int, $design: Int, $perform: Int, $build: Int, $pulseplayID: String, $bloodGroup: String, $whatsApp: String) {
  editTeamMember(id: $id, memberName: $memberName, memberAvatar: $memberAvatar, memberCover: $memberCover, memberPersonalEmail: $memberPersonalEmail, memberPhone: $memberPhone, memberDOB: $memberDob, email: $email, password: $password, memberDescription: $memberDescription, shortDescription: $shortDescription, dreams: $dreams, memberDesignation: $memberDesignation, education: $education, interest: $interest, certificate: $certificate, memberDateOfJoinnng: $memberDateOfJoinnng, memberCategory: $memberCategory, slug: $slug, memberWorkType: $memberWorkType, memberLineManger: $memberLineManger, instagram: $instagram, linkedin: $linkedin, facebook: $facebook, youtube: $youtube, twitter: $twitter, medium: $medium, snapchat: $snapchat, portfolio: $portfolio, dribble: $dribble, addressline1: $addressline1, addressline2: $addressline2, city: $city, pincode: $pincode, state: $state, fatherName: $fatherName, motherName: $motherName, emergencyPhone: $emergencyPhone, maritalstatus: $maritalstatus, gender: $gender, active: $active, imagine: $imagine, design: $design, perform: $perform, build: $build, pulseplayID: $pulseplayID, bloodGroup: $bloodGroup, whatsApp: $whatsApp) {
     ${employee}
  
  }
}
`;
export const GET_NOTI = gql`
  query GetAllNotifications {
    getAllNotifications {
      notificationType
      notification
      createdAt
    }
  }
`;
export const ALLIMAGES = gql`
  query GetAllImages {
    getAllImages {
      imgName
      imgUrl
      imgAlt
    }
  }
`;

export const SINGLE_UPLOAD = gql`
  mutation Mutation($file: Upload!, $fileName: String!, $altName: String!) {
    singleUpload(file: $file, fileName: $fileName, altName: $altName) {
      imgName
      imgUrl
      imgAlt
    }
  }
`;

export const LOGIN_FACE = gql`
  mutation Mutation($file: Upload!) {
    loginFace(file: $file) {
      name
      token
    }
  }
`;
export const PDF_UPLOAD = gql`
  mutation Mutation($file: Upload!) {
    pdfUpload(file: $file) {
      imgUrl
    }
  }
`;
export const VIDEO_UPLOAD = gql`
  mutation Mutation($file: Upload!, $fileName: String!, $altName: String!) {
    videoUpload(file: $file, fileName: $fileName, altName: $altName) {
      vedioUrl
    }
  }
`;
export const EDITOR_UPLOAD = gql`
  mutation Mutation($file: Upload!, $fileName: String!, $altName: String!) {
    editorUpload(file: $file, fileName: $fileName, altName: $altName) {
      imgName
      imgUrl
      imgAlt
    }
  }
`;
export const NEWS_LETTER = gql`
  query GetAllNewsLetter {
    getAllNewsLetter {
      id
      email
      createdAt
    }
  }
`;
export const USER_SESSION = gql`
  query GetUserSession {
    getUserSession {
      deviceOs
      id
      deviceVersion
      deviceBrowser
      latitude
      longitude
      region
      timezone
      city
      ipAddress
      user
      token
      notificationToken
      createdAt
      logout
      deviceId
    }
  }
`;
export const REMOVE_USER_SESSION = gql`
  mutation ForceUserLogout($id: ID) {
    forceUserLogout(id: $id) {
      id
      deviceOs
      deviceVersion
      deviceBrowser
      latitude
      longitude
      region
      timezone
      city
      ipAddress
      user
      token
      notificationToken
      createdAt
      logout
      deviceId
    }
  }
`;
export const LOGOUT_USER = gql`
  query UserLogout {
    userLogout {
      id
      email
      token
      username
      createdAt
      role
    }
  }
`;

export const SIGN_IN = gql`
  mutation Login($email: String!, $password: String!) {
    login(username: $email, password: $password) {
      tempToken
    }
  }
`;
export const CHECK_TOKEN = gql`
  query CheckOtpToken($tempToken: String) {
    checkOtpToken(tempToken: $tempToken) {
      tempToken
    }
  }
`;
export const OTP = gql`
  mutation ConfirmOtp(
    $otp: String
    $tempToken: String
    $deviceOs: String
    $deviceId: String
    $deviceVersion: String
    $deviceBrowser: String
    $latitude: Float
    $longitude: Float
    $region: String
    $timezone: String
    $countryName: String
    $city: String
    $ipAddress: String
  ) {
    confirmOtp(
      otp: $otp
      tempToken: $tempToken
      deviceOs: $deviceOs
      deviceId: $deviceId
      deviceVersion: $deviceVersion
      deviceBrowser: $deviceBrowser
      latitude: $latitude
      longitude: $longitude
      region: $region
      timezone: $timezone
      country_name: $countryName
      city: $city
      ipAddress: $ipAddress
    ) {
      id
      email
      token
      username
      createdAt
      role
      deviceId
    }
  }
`;

export const GET_COMMENTS = gql`
  query GetBlogComment($id: ID) {
    getBlogComment(id: $id) {
      id
      name
      email
      comment
      createdAt
      blog
      status
    }
  }
`;

export const GET_DEVICE_INFO = gql`
query GetAllDeivceInfo {
  getAllDeivceInfo {
  ${device}
  }
}`;

export const ALL_CATEGORY = gql`
query Query {
  getAllCategory {

    ${category}

  }
}`;

export const ALL_CAREER = gql`
  query Query {
    getAllCarrer {
      id
      carrer
      carrerVaccancy
      carrerCategory
      carrerLocation
      carrerDescription
      employeLink
      experience
    }
  }
`;

export const ALL_ONE_CAREER = gql`
  query GetOneSlugCarrer($id: ID) {
    getOneSlugCarrer(id: $id) {
      id
      carrer
      carrerVaccancy
      carrerCategory
      carrerLocation
      carrerVancy
      carrerDescription
      employeLink
      createdAt
      slug
      experience
    }
  }
`;
export const ADD_CAREER = gql`
  mutation Mutation(
    $carrer: String
    $carrerVaccancy: String
    $carrerLocation: String
    $carrerCategory: String
    $carrerVancy: String
    $carrerDescription: String
    $employeLink: String
    $experience: String
  ) {
    addCarrer(
      carrer: $carrer
      carrerVaccancy: $carrerVaccancy
      carrerLocation: $carrerLocation
      carrerCategory: $carrerCategory
      carrerVancy: $carrerVancy
      carrerDescription: $carrerDescription
      employeLink: $employeLink
      experience: $experience
    ) {
      id
      carrer
      carrerVaccancy
      carrerCategory
      carrerLocation
      carrerVancy
      carrerDescription
      employeLink
      experience
    }
  }
`;
export const EDIT_CAREER = gql`
  mutation EditCarrer(
    $id: String
    $carrer: String
    $carrerVaccancy: String
    $carrerCategory: String
    $carrerLocation: String
    $carrerVancy: String
    $carrerDescription: String
    $employeLink: String
    $experience: String
  ) {
    editCarrer(
      id: $id
      carrer: $carrer
      carrerVaccancy: $carrerVaccancy
      carrerCategory: $carrerCategory
      carrerLocation: $carrerLocation
      carrerVancy: $carrerVancy
      carrerDescription: $carrerDescription
      employeLink: $employeLink
      experience: $experience
    ) {
      id
      carrer
      carrerVaccancy
      carrerCategory
      carrerLocation
      carrerVancy
      carrerDescription
      employeLink
      createdAt
      slug
      experience
    }
  }
`;

export const ADD_SERVICES = gql`
  mutation Mutation(
    $servicesName: String
    $servicesCover: String
    $servicesVideo: String
    $servicesHeading2: String
    $servicesHeading1: String
    $servicesHeading: String
    $servicesPara1: String
    $servicesPara2: String
    $capabilities: String
    $servicesImg1: String
    $servicesImg2: String
    $expert: String
    $servicesAvatar: String
    $svg: String
  ) {
    addServices(
      svg: $svg
      servicesName: $servicesName
      servicesCover: $servicesCover
      servicesVideo: $servicesVideo
           servicesHeading: $servicesHeading
      servicesHeading2: $servicesHeading2
      servicesHeading1: $servicesHeading1
      servicesPara1: $servicesPara1
      servicesPara2: $servicesPara2
      capabilities: $capabilities
      servicesImg1: $servicesImg1
      servicesImg2: $servicesImg2
      expert: $expert
      servicesAvatar: $servicesAvatar
    ) {
  ${servcies}
    }
  }
`;

export const ALL_SERVICES = gql`
  query Query {
    getAllServices {
      ${servcies}
      
    }
  }
`;

export const ALL_SIGLE_SERVICES = gql`
  query Query($id: ID) {
    getSingleServices(id: $id) {
    ${servcies}
      
    }
  }
`;
export const ADD_RESOURCES = gql`
  mutation Mutation($title: String) {
    addResources(title: $title) {
     ${resources}
    }
  }
`;
export const GET_TEST = gql`
query GetTestimonial {
  getTestimonial {
  ${test}
  }
}`;
export const GET_TEST_ID = gql`
query GetSingleTestimonial($id: ID) {
  getSingleTestimonial(id: $id) {
    ${test}
  }
}`;
export const EDIT_TEST = gql`
mutation EditTestimonial($testimonialName: String, $id: ID, $testimonialDescription: String, $testimoniaDesignation: String, $testimonialImage: String, $status: Boolean) {
  editTestimonial(testimonialName: $testimonialName, id: $id, testimonialDescription: $testimonialDescription, testimoniaDesignation: $testimoniaDesignation, testimonialImage: $testimonialImage, status: $status) {
      ${test}
  }
}`;
export const ADD_TEST = gql`
mutation AddTestimonial($caseStudies: String) {
  addTestimonial(caseStudies: $caseStudies) {
     ${test}
  }

}`;
export const EDIT_RESOURCES = gql`
mutation EditResources($id: ID, $title: String, $contentTypes: String, $topics: String, $sortDescription: String, $video: String, $reportDescription: String, $reportImage: String, $reportPdf: String, $status: Boolean, $reportAvatar: String!) {
  editResources(id: $id, title: $title, contentTypes: $contentTypes, topics: $topics, sortDescription: $sortDescription, video: $video, reportDescription: $reportDescription, reportImage: $reportImage, reportPdf: $reportPdf, status: $status, reportAvatar: $reportAvatar) {
        ${resources}
  }
}`;
export const SORT_TEST = gql`
mutation SortTestimonial($sort: String) {
  sortTestimonial(sort: $sort) {
    ${test}
  }
}`;
export const GET_SINGLE_RESOURCES = gql`
query GetAllResources($id: ID) {
  getResourcesById(id: $id) {
       ${resources}
  }
}`;
export const GET_RESOURCES = gql`
  query GetAllResources {
    getAllResources {
      id
      title
      contentTypes {
        value
        label
      }
      topics {
        value
        label
      }
      sortDescription
      video
      reportDescription
      reportImage
      reportPdf
      reportAvatar
      slug
      status
    }
  }
`;
export const EDIT_SERVICES = gql`
  mutation Mutation(
    $servicesName: String
    $servicesCover: String
    $servicesVideo: String
      $servicesHeading: String
    $servicesHeading1: String
    $servicesHeading2: String
    $servicesPara1: String
    $servicesPara2: String
    $capabilities: String
    $servicesImg1: String
    $servicesImg2: String
    $expert: String
    $id: ID
    $servicesAvatar: String
    $svg: String
        $status:Boolean
  ) {
    editServices(
      svg: $svg
      servicesName: $servicesName
      servicesCover: $servicesCover
      servicesVideo: $servicesVideo
          servicesHeading: $servicesHeading
      servicesHeading1: $servicesHeading1
      servicesHeading2: $servicesHeading2
      servicesPara1: $servicesPara1
      servicesPara2: $servicesPara2
      capabilities: $capabilities
      servicesImg1: $servicesImg1
      servicesImg2: $servicesImg2
      expert: $expert
      id: $id
      servicesAvatar: $servicesAvatar
         status:$status
    ) {
    ${servcies}
    
    }
  }
`;

export const ADD_BLOG = gql`
 mutation AddBlog($blogTitle: String, $blogAvatar: String, $blogAuthor: String, $blogDescription: String, $blogSubTitle: String, $category: String) {
  addBlog(blogTitle: $blogTitle, blogAvatar: $blogAvatar, blogAuthor: $blogAuthor, blogDescription: $blogDescription, blogSubTitle: $blogSubTitle, category: $category) {    ${blog}}
  }
`;

export const ADD_NEWS = gql`
 mutation AddBlog($newsTitle: String, $newsAvatar: String, $newsAuthor: String, $newsDescription: String, $newsSubTitle: String, ) {
  addNews(newsTitle: $newsTitle, newsAvatar: $newsAvatar, newsAuthor: $newsAuthor, newsDescription: $newsDescription, newsSubTitle: $newsSubTitle) {    ${news}}
  }
`;
export const GET_ALL_BLOG = gql`
  query Query {
    getAllBlog {     ${blog}}
  }
`;
export const GET_ALL_NEWS = gql`
  query Query {
    getAllNews {     ${news}}
  }
`;

export const GET_BLOG_STATUS = gql`
mutation Mutation($id: ID, $status: Boolean) {
  setBlogStatus(id: $id, status: $status) {
         ${blog}
  }
}
`;
export const GET_NEWS_STATUS = gql`
mutation Mutation($id: ID, $status: Boolean) {
  setNewsStatus(id: $id, status: $status) {
         ${news}
  }
}
`;
export const GET_ONE_BLOG = gql`
  query Query($id: ID) {
    getSingleBlog(id: $id) {     ${blog}}
  }
`;
export const GET_ONE_NEWS = gql`
  query Query($id: ID) {
    getSingleNews(id: $id) {     ${news}}
  }
`;

export const GET_EDIT_BLOG = gql`
  mutation Mutation(
    $blogDescription: String
    $blogDescriptionHtml: String
    $id: ID
  ) {
    editBlog(
      blogDescription: $blogDescription
      blogDescriptionHtml: $blogDescriptionHtml
      id: $id
    ) {     ${blog}}
  }
`;

export const GET_EDIT_NEWS = gql`
  mutation Mutation(
    $newsDescription: String
    $newsDescriptionHtml: String
    $id: ID
  ) {
    editNews(
      newsDescription: $newsDescription
      newsDescriptionHtml: $newsDescriptionHtml
      id: $id
    ) {     ${news}}
  }
`;
export const PUBLISH_EDIT_BLOG = gql`
  mutation PublishBlog(
    $category: String
    $blogTitle: String
    $blogSubTitle: String
    $id: ID
    $blogAvatar: String
    $tags: String
    $slug:String
  ) {
    publishBlog(
      category: $category
      blogTitle: $blogTitle
      blogSubTitle: $blogSubTitle
      id: $id
      blogAvatar: $blogAvatar
      tags: $tags
      slug: $slug
    ) {
     ${blog}
    }
  }
`;
export const PUBLISH_EDIT_NEWS = gql`
  mutation PublishBlog(
    $newsTitle: String
    $newsSubTitle: String
    $id: ID
    $newsAvatar: String
    $tags: String
  ) {
    publishNews(
    
      newsTitle: $newsTitle
      newsSubTitle: $newsSubTitle
      id: $id
      newsAvatar: $newsAvatar
      tags: $tags
    ) {
     ${news}
    }
  }
`;

export const ADD_SOLUTIONS = gql`
  mutation Mutation(
    $id: ID
    $solutionsName: String
    $solutionsHeading1: String
       $solutionsHeading: String
    $solutionsPara1: String
    $paraList: String
    $solutionsImg1: String
    $solutionsCover: String
    $list: String
    $colorCode: String
    $solutionsAvatar: String
    $slug: String
    $svg: String
    $solutionsImg2: String
  ) {
    addSolutions(
      id: $id
      solutionsName: $solutionsName
      solutionsHeading1: $solutionsHeading1
         solutionsHeading: $solutionsHeading
      solutionsPara1: $solutionsPara1
      paraList: $paraList
      solutionsImg1: $solutionsImg1
      solutionsCover: $solutionsCover
      list: $list
      colorCode: $colorCode
      solutionsAvatar: $solutionsAvatar
      slug: $slug
      svg: $svg
      solutionsImg2: $solutionsImg2
    ) {
 ${solutions}
    }
  }
`;

export const GET_ALL_SOLUTIONS = gql`
  query Query {
    getAllSolutions {
   ${solutions}
    }
  }
`;

export const GET_ONE_SOLUTIONS = gql`
  query Query($id: ID) {
    getSingleSolutions(id: $id) {
  ${solutions}
    }
  }
`;

export const EDIT_SOLUTIONS = gql`
  mutation Mutation(
    $id: ID
    $solutionsName: String
    $solutionsHeading1: String
        $solutionsHeading: String
    $solutionsPara1: String
    $paraList: String
    $solutionsImg1: String
    $solutionsCover: String
    $list: String
    $colorCode: String
    $solutionsAvatar: String
    $slug: String
     $svg: String
    $solutionsImg2: String
    $status:Boolean
  ) {
    editSolutions(
      id: $id
      solutionsName: $solutionsName
      solutionsHeading1: $solutionsHeading1
            solutionsHeading: $solutionsHeading
      solutionsPara1: $solutionsPara1
      paraList: $paraList
      solutionsImg1: $solutionsImg1
      solutionsCover: $solutionsCover
      list: $list
      svg: $svg
      colorCode: $colorCode
      solutionsAvatar: $solutionsAvatar
      slug: $slug
      solutionsImg2: $solutionsImg2
      status:$status
    ) {
  ${solutions}
    }
  }
`;

export const ADD_CLIENT = gql`
mutation AddClient($projectName: String) {
  addClient(projectName: $projectName) {
    
  ${client}

  }
}`;

export const EDIT_CLIENT = gql`
mutation EditClient($projectName: String, $areas: String, $sliderImage: String, $status: Boolean, $id: ID, $year: String, $landingDescription: String, $location: String, $projectLogo: String, $projectLogoTransparent: String, $blackAndWhiteLogo:String $clientColorTheme: String, $employeeWork: String, $projectIndustry: String, $services: String, $projectDescription: String, $area: String, $tools: String, $website: String, $branding: String, $social: String, $video: String, $outReach: String, $outcomes: String) {
  editClient(      areas:$areas,  sliderImage:  $sliderImage   ,projectName: $projectName, status: $status, id: $id, year: $year, landingDescription: $landingDescription, location: $location, projectLogo: $projectLogo, projectLogoTransparent: $projectLogoTransparent, , blackAndWhiteLogo:$blackAndWhiteLogo clientColorTheme: $clientColorTheme, employeeWork: $employeeWork, projectIndustry: $projectIndustry, services: $services, projectDescription: $projectDescription, area: $area, tools: $tools, website: $website, branding: $branding, social: $social, video: $video, outReach: $outReach, outcomes: $outcomes) {
  ${client}

  }
}`;

export const GET_ALL_CLIENT = gql`
query Query {
  getAllClients {
   ${client}

  }
}
`;

export const GET_ONE_CLIENT = gql`
query GetSingleClients($id: ID) {
  getSingleClients(id: $id) {
  ${client}
  }
}`;

export const ADD_TAG_IAMGE = gql`
  mutation Mutation($image: String, $tag: String, $caption: String) {
    addTagedImages(image: $image, tag: $tag, caption: $caption) {
      id
      image
      createdAt
      caption
      tag {
        value
        label
      }
      member {
        id
        top
        left
        tag {
          id
          memberName
        }
      }
      user {
        id
        member {
          memberName
        }
      }
    }
  }
`;
export const ALL_TAG_IAMGE = gql`
  query Query {
    getAllTagImageAdmin {
      id
      image
      createdAt
      caption
      tag {
        value
        label
      }
      user {
        id
        member {
          memberName
        }
      }
      member {
        id
        top
        left
        tag {
          id
          memberName
        }
      }
    }
  }
`;

export const ALL_ONE_IAMGE = gql`
  query Query($id: ID) {
    getAllOneImage(id: $id) {
      id
      caption
      image
      tag {
        value
        label
      }
      user {
        id
        member {
          memberName
        }
      }
      member {
        id
        top
        left
        tag {
          id
          memberName
        }
      }
      createdAt
    }
  }
`;

export const EDIT_TAG_IMAGE = gql`
  mutation Mutation($image: String, $id: ID, $tag: String, $caption: String) {
    editTagedImages(image: $image, id: $id, tag: $tag, caption: $caption) {
      id
      image
      caption
      tag {
        value
        label
      }
      member {
        id
        top
        left
        tag {
          id
          memberName
        }
      }
      user {
        id
        member {
          memberName
        }
      }
      createdAt
    }
  }
`;
export const ALL_CAPABILITIES = gql`
  query Query {
    getAllCapabilities {
      id
      capabilitiesTitle
      capabilitiesDescription
      capabilitiesList {
        value
        avatar
        id
      }
      createdAt
    }
  }
`;
export const ALL_ONE_CAPABILITIES = gql`
  query Query($id: ID) {
    getSingleCapabilities(id: $id) {
      id
      capabilitiesTitle
      capabilitiesDescription
      capabilitiesList {
        value
        avatar
        id
      }
      createdAt
    }
  }
`;
export const ADD_CAPABILITIES = gql`
  mutation Mutation(
    $capabilitiesTitle: String
    $capabilitiesDescription: String
    $capabilitiesList: String
  ) {
    addCapabilities(
      capabilitiesTitle: $capabilitiesTitle
      capabilitiesDescription: $capabilitiesDescription
      capabilitiesList: $capabilitiesList
    ) {
      id
      capabilitiesTitle
      capabilitiesDescription
      capabilitiesList {
        value
        avatar
        id
      }
      createdAt
    }
  }
`;

export const EDIT_CAPABILITIES = gql`
  mutation Mutation(
    $id: ID
    $capabilitiesTitle: String
    $capabilitiesDescription: String
    $capabilitiesList: String
  ) {
    editCapabilities(
      id: $id
      capabilitiesTitle: $capabilitiesTitle
      capabilitiesDescription: $capabilitiesDescription
      capabilitiesList: $capabilitiesList
    ) {
      id
      capabilitiesTitle
      capabilitiesDescription
      capabilitiesList {
        value
        avatar
        id
      }
      createdAt
    }
  }
`;
export const GET_LIST = gql`
  query GetDashBoardList {
    getDashBoardList {
      Work
      Services
      Solutions
      Blog
      News
      Resources
      Members
    }
  }
`;

export const GET_CARERR_FORM = gql`
  query Query {
    getAllCareer {
      candidateName
      candidateEmail
      candidatePhone
      candidateMessage
      state
      jobTitle {
        id
        carrerTitle
      }
      candidatePosition
      candidateCv
      createdAt
      referrer {
        referrerName
        referrerEmail
        referrerPhone
      }
    }
  }
`;

export const GET_CONTACT_FORM = gql`
  query Query {
    getAllContactusForm {
      name
      email
      phone
      message
      organization
      services
      solutions
      createdAt
    }
  }
`;

export const GET_SERVICES_SEO = gql`
query GetServicesSeo($id: ID) {
  getServicesSeo(id: $id) {
   ${seo}
  }
}`;

export const GET_SOLUTIONS_SEO = gql`
query GetServicesSeo($id: ID) {
  getSolutionsSeo(id: $id) {
   ${seo}
  }
}`;

export const EDIT_SERVICES_SEO = gql`
  mutation Mutation(
    $id: ID
    $metaDescription: String
    $metaTitle: String
    $keyword: String
  ) {
    editServicesSeo(
      id: $id
      metaDescription: $metaDescription
      metaTitle: $metaTitle
      keyword: $keyword
    ) {
       ${seo}
    }
  }
`;

export const EDIT_SOLUTIONS_SEO = gql`
  mutation Mutation(
    $id: ID
    $metaDescription: String
    $metaTitle: String
    $keyword: String
  ) {
    editSolutionsSeo(
      id: $id
      metaDescription: $metaDescription
      metaTitle: $metaTitle
      keyword: $keyword
    ) {
       ${seo}
    }
  }
`;

export const UNKNOWN_USER = gql`
  query GetKnownUser {
    getKnownUser {
      name
      id
      email
      IPv4
      uniqueID
      createdAt
      amxId
    }
  }
`;

export const UNKNOWN_USER_LOG = gql`
  query GetUserLog($id: ID) {
    getUserLog(id: $id) {
      id
      country_code
      country_name
      city
      postal
      latitude
      longitude
      IPv4
      state
      name
      version
      os
      type
      createdAt
      page
    }
  }
`;

export const MANAGE_SEO = gql`
  mutation ManageSeo(
    $id: ID
    $keyword: String
    $category: String
    $metaDescription: String
    $metaTitle: String
  ) {
    manageSeo(
      id: $id
      keyword: $keyword
      category: $category
      metaDescription: $metaDescription
      metaTitle: $metaTitle
    ) {
      id
    }
  }
`;

export const SEND_EMAIL = gql`
  mutation ManageSeo($id: ID, $message: String, $subject: String) {
    sendEmail(id: $id, message: $message, subject: $subject) {
      id
    }
  }
`;
export const SEO_PAGES = gql`
  query SeoPages($name: String) {
    seoPages(name: $name) {
      id
      name
      seo {
        keyword
        metaDescription
        metaTitle
      }
    }
  }
`;

export const GENERATE_IMAGE = gql`
  mutation GenerateImage($prompt: String, $size: String) {
    generateImage(prompt: $prompt, size: $size) {
      img
    }
  }
`;

export const CHECK_GRAMMAR = gql`
  mutation checkGrammar($prompt: String) {
    checkGrammar(prompt: $prompt) {
      img
    }
  }
`;
