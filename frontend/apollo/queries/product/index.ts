import { gql } from "apollo-boost";

const product = `
    id
      image {
        dashBoard
        laptop
        mobile
      }
      name
      para
      para2
      productName
      seo {
        keyword
        metaDescription
        metaTitle
      }
      status
      keyFeatures {
        paragraph
        svg
        title
      }
      heroSection {
        image
        paragraph
        title
      }
      experts {
        memberAvatar
        memberDesignation
        id
        memberName
      }
`;
export const GET_ALL_PRODUCT = gql`
  query GetAllProduct {
    getAllProduct {
  ${product}
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
query GetProjectById($id: ID) {
 getProductById(id: $id) {
  ${product}
    }
  }
`;

export const ADD_PRODUCT = gql`
 mutation AddProduct($productName: String) {
  addProduct(productName: $productName) {
      ${product}
  }
}
`;
export const EDIT_PRODUCT = gql`
mutation EditProduct($id: ID, $projectName: String, $heroSection: String, $keyFeatures: String, $para: String, $para2: String, $image: String, $experts: String, $status: Boolean) {
  editProduct(id: $id, projectName: $projectName, heroSection: $heroSection, keyFeatures: $keyFeatures, para: $para, para2: $para2, image: $image, experts: $experts, status: $status) {
     ${product}
  }
}
`;
