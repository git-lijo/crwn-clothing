import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAP0jwDBl9hs6AQE5C6Jm0WIk3y3aMJ7TQ",
    authDomain: "crwn-db-61923.firebaseapp.com",
    databaseURL: "https://crwn-db-61923.firebaseio.com",
    projectId: "crwn-db-61923",
    storageBucket: "crwn-db-61923.appspot.com",
    messagingSenderId: "973645239430",
    appId: "1:973645239430:web:1116516c45d107a074ad07",
    measurementId: "G-7Z7NVJZWLL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
