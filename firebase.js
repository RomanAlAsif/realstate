// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA4_QrZ5cDskDwfEw3jLlKVG-NG7aYij0E",
    authDomain: "myhome-16609.firebaseapp.com",
    databaseURL: "https://myhome-16609.firebaseio.com",
    projectId: "myhome-16609",
    storageBucket: "myhome-16609.appspot.com",
    messagingSenderId: "610095279798",
    appId: "1:610095279798:web:fb377ebb9e61a52eda0017",
    measurementId: "G-4KDPWPB606"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();