import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SetContextLink } from "@apollo/client/link/context";
import { HttpLink } from "@apollo/client/link/http";
// import { GRAPHQL_ENDPOINT } from "../utils/constants";
import { getAuthorization } from "../authorization";

const GRAPHQL_ENDPOINT = "http://localhost:4040/graphql";
const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
});

const authLink = new SetContextLink(async (prevContext, _operation) => {
  const authorization = await getAuthorization();

  return {
    headers: {
      ...prevContext.headers,
      ...authorization,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
