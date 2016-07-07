// Initialize Firebase
var config = {
  apiKey: "AIzaSyAXQyHhte3sCUFB-rB6tSZ8IrhUq9OL-5M",
  authDomain: "rock-paper-scissors-demo.firebaseapp.com",
  databaseURL: "https://rock-paper-scissors-demo.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

dataB = firebase.database();

var playerOne = dataB.ref('one');
var playerTwo = dataB.ref('two');

$('button').on('click', function() {
  playerOne.set({
    name: "",
    turnPlayed: false
  });
  playerTwo.set({
    name: "",
    turnPlayed: false
  });
})

function getValue(ref) {
  ref.on('value', function(snapshot) {
    console.log(snapshot.val())
  });
};

firebase.auth().signInAnonymously().catch(function(error) {
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;
// ...
});

firebase.auth().onAuthStateChanged(function(user) {
if (user) {
  // User is signed in.
  var isAnonymous = user.isAnonymous;
  var uid = user.uid;
  // ...
} else {
  logout(user);
}
// ...
});


//initial code
$(document).ready(function(){

//variables used
var paper = "https://i.imgur.com/eSKSHcR.png";
var scissor = "https://i.imgur.com/q21v2Ga.png";
var rock = "https://i.imgur.com/Ht64Hvd.png";
var item1;
var item2;

  //player 1 button functions
  $("#player1Paper, #player1Rock, #player1Scissors").on('click', function(){
  item1 = this.id;
  //this brings up the photos when the button is pressed
  if(item1 === 'player1Paper'){
    img = $('<img>');
    p = $('<p>');
    img.attr('src', paper);
    $("#results1").empty();
    $("#results1").prepend(p);
    $("#results1").prepend(img);
  }
  else if(item1 === 'player1Scissors'){
    img = $('<img>');
    p = $('<p>');
    img.attr('src', scissor);
    $("#results1").empty();
    $("#results1").prepend(p);
    $("#results1").prepend(img);
  }
  else if(item1 === 'player1Rock'){
    img = $('<img>');
    p = $('<p>');
    img.attr('src', rock);
    $("#results1").empty();
    $("#results1").prepend(p);
    $("#results1").prepend(img);
  }
  //function defined at the bottom
  compare(item1, item2);
});
  //same as above but for player two
  $("#player2Rock, #player2Paper, #player2Scissors").on('click', function(){
  item2 = this.id;
  //same as above
  if(item2 === 'player2Paper'){
    img = $('<img>');
    p = $('<p>');
    img.attr('src', paper);
    $("#results2").empty();
    $("#results2").prepend(p);
    $("#results2").prepend(img);
  }
  else if(item2 === 'player2Scissors'){
    img = $('<img>');
    p = $('<p>');
    img.attr('src', scissor);
    $("#results2").empty();
    $("#results2").prepend(p);
    $("#results2").prepend(img);
  }
  else if(item2 === 'player2Rock'){
    img = $('<img>');
    p = $('<p>');
    img.attr('src', rock);
    $("#results2").empty();
    $("#results2").prepend(p);
    $("#results2").prepend(img);
  }

  compare(item1, item2);
});
//function to work out the rock paper scissor logic
function compare(item1, item2){
  if(
    (item1 === "player1Rock" && item2 === "player2Rock") ||
    (item1 === "player1Scissors" && item2 === "player2Scissors") ||
    (item1 === "player1Paper" && item2 === "player2Paper")
){
    //this parts displays our results
    $(".finalResults").empty();
    $(".finalResults").append("<p>tie!</p>");
  }

  else if (
    (item1 === "player1Rock" && item2 === "player2Scissors") ||
    (item2 === "player2Rock" && item1 === "player1Scissors")
){
    $(".finalResults").empty();
    $(".finalResults").append("<p>Rock wins!</p>");
  }

  else if (
    (item1 === "player1Rock" && item2 === "player2Paper") ||
    (item2 === "player2Rock" && item1 === "player1Paper")
  ){
    $(".finalResults").empty();
    $(".finalResults").append("<p>Paper wins!</p>");
  }

  else if (
    (item1 === "player1Scissors" && item2 === "player2Paper") ||
    (item2 === "player2Scissors" && item1 === "player1Paper")
  ){
    $(".finalResults").empty();
    $(".finalResults").append("<p>Scissor wins!</p>");
  }

  else{
    $(".finalResults").empty();
    $(".finalResults").append("<p>awaiting second player</p>");
  }

}

dataB.ref().set({

});

});
