
  var config = {
    apiKey: "AIzaSyDLeuwiMQywQi1i-81n3rdTv3ZvUrYWu0E",
    authDomain: "train-schedule-2fe87.firebaseapp.com",
    databaseURL: "https://train-schedule-2fe87.firebaseio.com",
    projectId: "train-schedule-2fe87",
    storageBucket: "train-schedule-2fe87.appspot.com",
    messagingSenderId: "282219506778"
  };

firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var destination = "";
var time = "";
var frequency = "";
var arrival= "";



// database.ref("/trains").on("value", function(snapshot) {
//   snapshot.forEach(function(data) {


//     console.log(data.val()); //log out each train object

//     var train = data.val();

//     console.log(train.name); //this should log out each train’s name
//   });
// });

$("#submit-btn").on("click", function(event) {
 event.preventDefault();


name = $("#name-input").val().trim();
destination = $("#destination-input").val().trim();
time = $("#time-input").val().trim();
frequency = $("#frequency-input").val().trim();
arrival= $("#arrival-input").val().trim();

database.ref().set({
    name: name,
    destination: destination, 
    time: time,
    frequency: frequency,
    arrival: arrival,
  });

 });
   // console.log(database)
database.ref().on("value", function(snapshot) {

  console.log(snapshot.val());
  console.log(snapshot.val().name);
  console.log(snapshot.val().destination);
  console.log(snapshot.val().time);
  console.log(snapshot.val().frequency);
  console.log(snapshot.val().arrival);

// $("#name-display").text(snapshot.val().name);
// $("#destination-display").text(snapshot.val().destination);
// $("#time-display").text(snapshot.val().time);
// $("#frequency-display").text(snapshot.val().frequency);
// $("#arrival-display").text(snapshot.val().arrival);




$('#train-table > tbody').append("<tr><td>"+ snapshot.val().name +"</td><td>"+ snapshot.val().destination +"</td><td>"+ snapshot.val().time +"</td><td>"+ snapshot.val().frequency +"</td><td>"+ snapshot.val().arrival +"</td></tr>");


}, function(errorObject) {
  console.log("Errors handeled:" + errorObject.code);
});
