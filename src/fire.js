import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyD-X8ZHpEOUNO9wRw8H9IlrBXATqyfEcV4",
    authDomain: "first-react-app-7dc30.firebaseapp.com",
    databaseURL: "https://first-react-app-7dc30.firebaseio.com",
    projectId: "first-react-app-7dc30",
    storageBucket: "first-react-app-7dc30.appspot.com",
    messagingSenderId: "525474836884"
  };
  
const fire = firebase.initializeApp(config);

export default fire;