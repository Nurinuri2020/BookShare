import firebase from 'firebase'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAJlYbRR7ycBIqlLG1t69uFZAs9OlKAxI8",
    authDomain: "new-app-d7fe6.firebaseapp.com",
    databaseURL: "https://new-app-d7fe6.firebaseio.com",
    projectId: "new-app-d7fe6",
    storageBucket: "new-app-d7fe6.appspot.com",
    messagingSenderId: "558258885009"
  };
  const fire = firebase.initializeApp(config);
  export default fire;
