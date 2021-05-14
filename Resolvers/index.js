const { db } = require("../Firebase/firebase.utils");
const testFunction = require("../Firebase/coverting.function");
//just wanted to pass function as a resolver

const resolvers = {
  Query: {
    test: async () => {
      const dataRef = db.collection("test");
      const snapShot = await dataRef.get();
      const data = snapShot.docs.map((ele) => ele.data());
      return data;
    },

    collection: () => {
      const returnObject = { id: "1", title: "Madhur Jain" };
      return returnObject;
    },
  },
};

module.exports = { resolvers };
