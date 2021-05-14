const { db } = require("../Firebase/firebase.utils");
const testFunction = require("../Firebase/coverting.function");
//just wanted to pass function as a resolver

const resolvers = {
  Query: {
    //Resolves into collection ID and title only
    collectionTitles: async () => {
      const collectionRef = db.collection("collection");
      const snapShot = await collectionRef.get();
      const data = snapShot.docs.map((element) => {
        const returnObject = {
          id: element.id,
          title: element.data().title,
        };
        return returnObject;
      });
      return data;
    },

    //Resolves into collection ID and title and items array also.
    collection: async () => {
      const collectionRef = db.collection("collection");
      const snapShot = await collectionRef.get();

      const data = snapShot.docs.map((element) => {
        console.log(element);
        const returnObject = {
          id: element.id,
          title: element.data().title,
          items: element.data().items,
        };
        return returnObject;
      });
      return data;
    },

    users: async () => {
      const userRef = db.collection("users");
      const snapShot = await userRef.get();
      const data = snapShot.docs.map((element) => {
        const returnObject = {
          id: element.id,
          displayName: element.data().displayName,
          email: element.data().email,
        };
        return returnObject;
      });
      return data;
    },
  },
};

module.exports = { resolvers };
