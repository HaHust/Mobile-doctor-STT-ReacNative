import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyC9b3-zCOdeji2w8TMhlZfxwsxUeYwYhKk",
    authDomain: "stt307-f5eaa.firebaseapp.com",
    projectId: "stt307-f5eaa",
    storageBucket: "stt307-f5eaa.appspot.com",
    messagingSenderId: "690677329710",
    appId: "1:690677329710:web:fea1bb9855b5037985d4bf",
    measurementId: "G-WHTWMX9QWR"
  };
// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase