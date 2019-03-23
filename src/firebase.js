import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyCPde98GcsFLWGNHXS-xgGlbHryFdGG9TI",
  authDomain: "react-slack-clone-13f7e.firebaseapp.com",
  databaseURL: "https://react-slack-clone-13f7e.firebaseio.com",
  projectId: "react-slack-clone-13f7e",
  storageBucket: "react-slack-clone-13f7e.appspot.com",
  messagingSenderId: "563559939613"
};

firebase.initializeApp(config);

export default firebase;
