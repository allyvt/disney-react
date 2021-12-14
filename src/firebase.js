import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCzD8u7RLXZn45oGQyiApU4jUFiwCvW9qY",
//   authDomain: "disney-c3dcb.firebaseapp.com",
//   projectId: "disney-c3dcb",
//   storageBucket: "disney-c3dcb.appspot.com",
//   messagingSenderId: "842143847504",
//   appId: "1:842143847504:web:4dcd886f09f3954c616d55",
//   measurementId: "G-B0J1JRC9YS"
// };
const firebaseConfig = {
    apiKey: "AIzaSyAoG_76nYVbim-5nwMj9ZYkutmNLEb6uHQ",
    authDomain: "disney-app-test.firebaseapp.com",
    projectId: "disney-app-test",
    storageBucket: "disney-app-test.appspot.com",
    messagingSenderId: "934349320404",
    appId: "1:934349320404:web:e1d3831596228b2047cb41"
  };

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;