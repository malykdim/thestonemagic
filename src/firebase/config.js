import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAkWRJflnzNdSLEBA37RvogAXHjo9jc_PA",
    authDomain: "the-stone-magic.firebaseapp.com",
    projectId: "the-stone-magic",
    storageBucket: "the-stone-magic.appspot.com",
    messagingSenderId: "810290988414",
    appId: "1:810290988414:web:7945c589a9125db820df2f",
    measurementId: "G-XN2GHVNFFT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore};