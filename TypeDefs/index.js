const { gql } = require("apollo-server");

const typeDefs = gql`
  #To get collection id and its title only
  type OnlyCollectionTitles {
    id: ID
    title: String
  }

  #Types to get collection with all items
  type CollectionWithItems {
    id: ID
    title: String
    items: [Items]
  }
  type Items {
    id: String
    imageUrl: String
    name: String
    price: Int
  }

  #to get usersData
  type Users {
    id: ID
    displayName: String
    email: String
  }

  type Query {
    collectionTitles: [OnlyCollectionTitles]
    collection: [CollectionWithItems]
    users: [Users]
  }
`;

module.exports = { typeDefs };
