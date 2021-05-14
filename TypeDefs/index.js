const { gql } = require("apollo-server");

const typeDefs = gql`
  type Test {
    name: String
  }
  type Collection {
    id: ID
    title: String
  }

  type Query {
    test: [Test]
    collection: [Collection]
  }
`;

module.exports = { typeDefs };
