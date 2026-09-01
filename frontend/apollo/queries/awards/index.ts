
const awards = `
 title
        location
        decription
        date
        status
        img
        id
         createdAt
        updatedAt
         updatedBy {
      member {
        memberName
      }
    }
        `

import { gql } from "apollo-boost";
export const ADD_REWARDS = gql`
mutation AddAwards($title: String) {
    addAwards(title: $title) {
        id
    }
}`
export const GET_ALL_AWARDS = gql`
query GetAllAwards {
  getAllAwards {
       ${awards}
    }
}`
export const AWARD_ID = gql`
query GetAwardsById($id: ID) {
    getAwardsById(id: $id) {
${awards}
    }
}`
export const EDIT_AWARD = gql`
mutation EditAwards($title: String, $location: String, $decription: String, $date: String, $status: Boolean, $img: String, $id: ID) {
    editAwards(title: $title, location: $location, decription: $decription, date: $date, status: $status, img: $img, id: $id) {
${awards}
    }
}`