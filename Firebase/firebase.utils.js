// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase/app");

// Add the Firebase products that you want to use

require("firebase/firestore");

const config = {
  apiKey: "AIzaSyADG9UCbvPxRjc26AB51-IhJtQbxJjpwWg",
  authDomain: "crn-clothing-c1c81.firebaseapp.com",
  projectId: "crn-clothing-c1c81",
  storageBucket: "crn-clothing-c1c81.appspot.com",
  messagingSenderId: "662037750633",
  appId: "1:662037750633:web:e4ecc81a7d0dfc8ae553f8",
};

const firebaseClient = firebase.initializeApp(config);

const db = firebase.firestore();
module.exports = { db, firebaseClient };
