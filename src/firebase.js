import firebase from 'firebase/app'
import  'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDv9dyqIMO62qYb2pJZB2pxNTipm-Pp-Kg",
    authDomain: "crud-5cbce.firebaseapp.com",
    projectId: "crud-5cbce",
    storageBucket: "crud-5cbce.appspot.com",
    messagingSenderId: "844420253524",
    appId: "1:844420253524:web:0d3a0ebdba781ad9136ac1"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)

