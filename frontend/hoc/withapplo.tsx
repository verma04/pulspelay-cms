import withApollo from "next-with-apollo";
import { InMemoryCache, ApolloClient } from '@apollo/client';


import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from "apollo-link-http";
import { ApolloLink, from } from "apollo-link";
import { createUploadLink } from "apollo-upload-client";

const prod = process.env.NODE_ENV === "production";

const endpoint = prod
  ? "https://api.pulseplaydigital.com"
  : "http://localhost:4000/graphql";
const UploadLink = createUploadLink({
  uri: endpoint,
});

const httpLink = new HttpLink({ uri: endpoint });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: "Bearer " + localStorage.getItem("jwtToken"),
    },
  });

  return forward(operation);
});

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      link: from([authMiddleware, UploadLink]),
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
