const firebase = require("firebase/app");
require("firebase/auth");
//firebase API config/key
firebaseConfig = {
    apiKey: "AIzaSyDQm4jUuneS38vvPSjwhCP7JnT4IxQUtT8",
    databaseURL: "https://carnet-e1efe.firebaseio.com",
    projectId: "carnet-e1efe",
    storageBucket: "carnet-e1efe.appspot.com",
    messagingSenderId: "1002956662880",
    appId: "1:1002956662880:web:5f2597bf17eaa7319e3b05",
    measurementId: "G-FSHPMG9M89"
};

//starts firebase
firebase.initializeApp(firebaseConfig);

//stores signIn and signUp buttons in respective vars to listen for click
var signIn = document.getElementById('signIn');
var signUp = document.getElementById('signUp');

//When user clicks signUP button
signUp.addEventListener('click', function () {
    var email = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    //Create a user in firebase and log errors
    firebase.auth().createUserWithEmailAndPassword(email,password).then(function () {
        //If user creation is successful then go to prompt some feedback perhaps alert message
        alert("Success");
        //log error in console devTools
    }).catch(function (error) {
        if(error != null) {
            console.log(error.message);
            return;
        }
    });
});

//When user clicks signIn button
signIn.addEventListener('click', function () {
    var email = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    firebase.auth().signInWithEmailAndPassword(email,password).then(function () {
        //If user successfully signs in then go to home page
        window.location.href = "mainWindow.html";

        //logs errors
    }).catch(function (error) {
        console.log("Error")
        if(error != null) {
            console.log(error.message);
            return;
        }
    })
});