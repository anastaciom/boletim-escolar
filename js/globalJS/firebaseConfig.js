var firebaseConfig = {
    apiKey: "AIzaSyBBn5dGZHUgMYwv81hX77FhSMAcRRC-src",
    authDomain: "boletim-escolar-2fa33.firebaseapp.com",
    projectId: "boletim-escolar-2fa33",
    storageBucket: "boletim-escolar-2fa33.appspot.com",
    messagingSenderId: "77523005463",
    appId: "1:77523005463:web:3c6d2c032673b9d7846c52"
  };
  
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore()
  var auth = firebase.auth()
  
  