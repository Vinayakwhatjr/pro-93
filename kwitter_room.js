// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEgIFhtT_n9OGmV2sT8Z_gSb3ajU6w5pw",
    authDomain: "kwitter-ccd71.firebaseapp.com",
    databaseURL: "https://kwitter-ccd71-default-rtdb.firebaseio.com",
    projectId: "kwitter-ccd71",
    storageBucket: "kwitter-ccd71.appspot.com",
    messagingSenderId: "1078601373168",
    appId: "1:1078601373168:web:904c06641ac39e168b7935",
    measurementId: "G-2H21XERDC0"
  };
  
  // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
