import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7J1wYzqEaUldtEYnhCNj2j-LwIfc7O1w",
    authDomain: "slack-clone-1248e.firebaseapp.com",
    databaseURL: "https://slack-clone-1248e.firebaseio.com",
    projectId: "slack-clone-1248e",
    storageBucket: "slack-clone-1248e.appspot.com",
    messagingSenderId: "844015885642",
    appId: "1:844015885642:web:f13c043bcecd1df94c75b3",
    measurementId: "G-VH6GQSTPLW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;