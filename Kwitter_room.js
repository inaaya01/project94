var firebaseConfig = {
    apiKey: "AIzaSyCwX0DmylCOJxlW-m0btZJdVs_MlGJNv7Q",
    authDomain: "kwitter-project-c7505.firebaseapp.com",
    projectId: "kwitter-project-c7505",
    storageBucket: "kwitter-project-c7505.appspot.com",
    messagingSenderId: "860084756204",
    appId: "1:860084756204:web:2206d2ee7c0c959b1fcfc9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addRoom(){
    user_name = document.getElementById("room").value;
    firebase.database().ref("/").child("user_name").update({
        purpose : "adding user"
    });
}