// lib/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3000/api/graphql', // replace with your GraphQL endpoint
  }),
  cache: new InMemoryCache(),
});

export default client;
