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
    
    //test
    socket.emit('news', { hello: 'world' });
    //this communicates with the socket.js event
    socket.on('player event', function(data){
        console.log('Return value: ' + data);
    });

    //disconnect protocol
    socket.on('disconnect', function(){
        console.log('User disconnected');
    });
});

//start the server
http.listen(Port, function(){
    console.log('Ready Player One on localhost:' + Port);
});