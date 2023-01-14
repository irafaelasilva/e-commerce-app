const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
    numberOfCalls: Int
  }
`;

const resolvers = {
  Query: {
    hello: () => "World!",
    numberOfCalls: () => 45,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});
