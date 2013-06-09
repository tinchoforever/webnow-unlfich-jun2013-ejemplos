var io = require('socket.io').listen(8000);

io.sockets.on('connection', function (socket) {

  console.log("user started!");
  socket.broadcast.emit('news', {hello:"Welcome!"});

  socket.on('presentation', function (data) {
    console.log("presentation", data);
    socket.broadcast.emit('newUser', {name: data.name});
  });

});