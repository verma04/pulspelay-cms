import { gql } from "apollo-boost";

export const GET_HOME_PAGE = gql`
  query GetHomeWork {
    getHomeWork {
      id
      image
      sort
      color
      work {
        id
        projectLogo
        status
        projectName
      }
    }
  }
`;
export const GET_KPI = gql`
  query GetHomeWork {
    getAllKpi {
      id
      title
      description
      sort
      color
    }
  }
`;

export const EDIT_KPI = gql`
  mutation EditKpi(
    $title: String
    $description: String
    $id: ID
    $color: String
  ) {
    editKpi(title: $title, description: $description, id: $id, color: $color) {
      id
      description
      title
      color
    }
  }
`;
export const EDIT_HOME_PAGE = gql`
  mutation EditHomePageWork(
    $image: String
    $work: String
    $id: ID
    $color: String
  ) {
    editHomePageWork(image: $image, work: $work, id: $id, color: $color) {
      id
      image
      sort
      color
      work {
        id
        projectLogo
        status
        projectName
      }
    }
  }
`;

export const SORT_HOME_PAGE = gql`
  mutation SortHomePage($sort: String) {
    sortHomePage(sort: $sort) {
      id
      image
      color
      sort
      work {
        id
        projectLogo
        status
        projectName
      }
    }
  }
`;

export const SORT_KPI = gql`
  mutation SortKpi($sort: String) {
    sortKpi(sort: $sort) {
      id
      title
      description
      sort
      color
    }
  }
`;
