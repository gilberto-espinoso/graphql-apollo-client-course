import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User
      users: [User]
    }

    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'asa9d09a0-pa9',
          userName: 'Admin',
        };
      },
      users: () => {
        return [
          {
            id: 'asa9d09a0-pa9',
            userName: 'Admin',
          },

          {
            id: '23923j923-pa9',
            userName: 'Client',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
