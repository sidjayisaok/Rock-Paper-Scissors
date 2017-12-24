//initial code
$(document).ready(function(){

//variables used
var paper = "https://i.imgur.com/eSKSHcR.png";
var scissor = "https://i.imgur.com/q21v2Ga.png";
var rock = "https://i.imgur.com/Ht64Hvd.png";
var item1;
var item2;
var results1 = '#results1';
var results2 = '#results2';

function createPhoto(param, results){
  img = $('<img>');
  p = $('<p>');
  img.attr('src', param);
  $(results).empty();
  $(results).prepend(p);
  $(results).prepend(img);
}

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

  //player 1 button functions
  $("#player1Paper, #player1Rock, #player1Scissors").on('click', function(){
  item1 = this.id;
  //this brings up the photos when the button is pressed
  if(item1 === 'player1Paper'){
    createPhoto(paper, results1);
  }
  else if(item1 === 'player1Scissors'){
    createPhoto(scissor, results1);
  }
  else if(item1 === 'player1Rock'){
    createPhoto(rock, results1);
  }
  //function defined at the bottom
  compare(item1, item2);
});
  //same as above but for player two
  $("#player2Rock, #player2Paper, #player2Scissors").on('click', function(){
  item2 = this.id;
  //same as above
  if(item2 === 'player2Paper'){
    createPhoto(paper, results2);
  }
  else if(item2 === 'player2Scissors'){
    createPhoto(scissor, results2);
  }
  else if(item2 === 'player2Rock'){
    createPhoto(rock, results2);
  }

  compare(item1, item2);
});

});
