const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { typeDefs } = require("./TypeDefs");
const { resolvers } = require("./Resolvers");
const { firebaseClient } = require("./Firebase/firebase.utils");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
  context: ({ req }) => {
    return {
      headers: req.headers,
      firebaseClient,
    };
  },
});
server.applyMiddleware({ app });

app.listen(4000, () => console.log("server is running at port 4000"));
