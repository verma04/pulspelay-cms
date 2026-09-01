// useRequest.js
import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const API_URL = `http://localhost:4000/graphql`;

const graphQLClient = new GraphQLClient(API_URL, {
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
});

export function useGetPosts() {
  return useQuery("get-posts",  async () => {
    const data = await graphQLClient.request(gql`
      query {
        getAllDeivceInfo {
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
    `);
    return data;
  });
}
