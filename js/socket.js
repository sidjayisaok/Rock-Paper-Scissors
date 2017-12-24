var socket = io();
var player1Rock = "#player1Rock";
var player1Scissors = "#player1Scissors";
var player1Paper = "#player1Paper";
var player2Rock = "#player2Rock";
var player2Scissors = "#player2Scissors";
var player2Paper = "#player2Paper";
var item = this.id;

function sendMsg(data){
    $('#testSocket').empty();
    $('#testSocket').append($('<li>').text(data));
}

//function to handle requests
function clickEvent(paramA){
    $(paramA).on('click', function(){
         //this communicates with server
         socket.emit('player event', $(paramA).val({item}));
         $(paramA).val('');
        return false;
        console.log(paramA);
    });
    // this transmit button presses to everyone
    socket.on('player event', function(data){
        sendMsg(data);
    });
    //this shows when the player is connected
     socket.on('connect', function(data){
         sendMsg(data);
    });
    //this shows when the player is disconnected
    socket.on('disconnect', function(data){
        sendMsg(data);
    });
}

//call function
clickEvent(player1Rock);

clickEvent(player2Rock);

clickEvent(player1Paper);

clickEvent(player2Paper);

clickEvent(player1Scissors);

clickEvent(player2Scissors);

//this communicates with console
socket.on('player msg', function(data){
    console.log(data);  
});