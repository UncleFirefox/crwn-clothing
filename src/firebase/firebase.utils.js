import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDNwyIHum1n53FjBull6cPZI61s3HHagGw",
    authDomain: "cwrn-db-e7025.firebaseapp.com",
    projectId: "cwrn-db-e7025",
    storageBucket: "cwrn-db-e7025.appspot.com",
    messagingSenderId: "864028872048",
    appId: "1:864028872048:web:e5cd47170110e97b0593b5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;