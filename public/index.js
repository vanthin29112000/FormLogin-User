import * as firebase from 'firebase'
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      var uid = user.uid;
      document.getElementById("background_form").style.display = "none";
      console.log("Chao mung ban ~~~");
      // ...
    } else {
      // User is signed out
      console.log("Sai mat khau !!");
      // ...
    }
  });
function Login()
{
    let Username = document.getElementById("Username").value;
    let Password = document.getElementById("Password").value;
    console.log(Username , Password);

    firebase.auth().signInWithEmailAndPassword(Username, Password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : "+errorMessage);
    });
}