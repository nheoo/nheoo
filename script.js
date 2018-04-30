// Initialize Firebase
//The project has been deleted in firebase
//fill in your own config info 
var config = {
  apiKey: "AIzaSyAznaJZALTVprmYTMh2vUAkD9Ok0uN5yho",
    authDomain: "frame-9999.firebaseapp.com",
    databaseURL: "https://frame-9999.firebaseio.com",
    projectId: "frame-9999",
    storageBucket: "frame-9999.appspot.com",
    messagingSenderId: "782517923174"
};
firebase.initializeApp(config);

$(document).ready(function(){
  var database = firebase.database();
  var ledStatus;

  database.ref().on("value", function(snap){
    ledStatus = snap.val().ledStatus;
    if(ledStatus == 1){
      $(".lightStatus").text("Đèn đã bật nè");
    } else {
      $(".lightStatus").text("Đèn tắt rồi cha nội");
    }
  });

  $(".lightButton").click(function(){
    var firebaseRef = firebase.database().ref().child("ledStatus");

    if(ledStatus == 1){
      firebaseRef.set(0);
      ledStatus = 0;
    } else {
      firebaseRef.set(1);
      ledStatus = 1;
    }
  });
});
