
const adviser = `
    about
    createdAt
    designation
    id
    avatar
    name
    social {
      facebook
      instagram
      linkedin
      medium
      portfolio
      twitter
      youtube
    }
    status
    updatedAt
    updatedBy {
      member {
        memberName
      }
    }
    videoUrl
        `

import { gql } from "apollo-boost";
export const ADD_ADVISER = gql`
mutation AddAdviser($name: String) {
  addAdviser(name: $name) {
        id
    }
}`
export const GET_ALL_ADVISER = gql`
query GetAllAdviser {
  getAllAdviser {
       ${adviser}
    }
}`
export const ADVISER_ID = gql`
query GetAdviserById($id: ID) {
  getAdviserById(id: $id) {
${adviser}
    }
}`
export const EDIT_ADIVSER = gql`
mutation EditAdviser($name: String, $designation: String, $videoUrl: String, $about: String, $status: Boolean, $id: ID , $avatar:String , $social:String) {
  editAdviser(name: $name, designation: $designation, videoUrl: $videoUrl, about: $about, status: $status, id: $id , avatar:$avatar , social:$social) {
    
${adviser}
    }
}`