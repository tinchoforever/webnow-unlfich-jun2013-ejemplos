var io = require('socket.io').listen(parseInt(process.env.PORT));
//For Heroku
io.configure(function () {
    io.set("transports", ["xhr-polling"]);
    io.set("polling duration", 10);
    io.set("log level", 1);
});


io.sockets.on('connection', function (socket) {

  console.log("user started!");
  socket.broadcast.emit('news', {hello:"Welcome!"});

  socket.on('presentation', function (data) {
    console.log("presentation", data);
    socket.broadcast.emit('newUser', {name: data.name});
  });

});

