//variables used
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Port = process.env.PORT || 5000;

//middleware
app.use(express.static(__dirname));

//get function
app.get('/', function(request, repsonse){
    response.sendFile(__dirname + '/index.html');
});

//socket.io initialization
io.on('connection', function(socket){
    console.log('User signed in');
    //connection protocol
    socket.on('connection', function(){
        io.emit('connect', "Player connected");
    });
    //this communicates to the client browser
    socket.emit('player msg', function(data){
        console.log('Return value: ' + JSON.stringify(data.selector));
    });
    //this communicates with the socket.js event on the server
    socket.on('player event', function(data){
        console.log('Return value: ' + JSON.stringify(data.selector));
        io.emit('player event', JSON.stringify(data.selector));
    });
    //disconnection protocol
    socket.on('disconnect', function(){
        console.log('User disconnected');
        io.emit('disconnect', "Player disconnected");
    });
});

//start the server
http.listen(Port, function(){
    console.log('Ready Player One on localhost:' + Port);
});