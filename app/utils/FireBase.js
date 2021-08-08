import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD3qILw_G7qC3B6ldJckBWRJ18wjPCWx8Q",
    authDomain: "washapp-91ae9.firebaseapp.com",
    databaseURL: "https://washapp-91ae9.firebaseio.com",
    projectId: "washapp-91ae9",
    storageBucket: "washapp-91ae9.appspot.com",
    messagingSenderId: "499107820485",
    appId: "1:499107820485:web:61e3bb8017d710c55a91ac",
    measurementId: "G-Y8L9XFL93L"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
