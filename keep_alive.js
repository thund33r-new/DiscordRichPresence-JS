var net = require('net');

var serverConnections = 0;
var clientConnections = 0;

// Server: accept connections and set keep-alive
net.createServer(function(socket) {
  socket.setKeepAlive(true, 0);  // <-----
  serverConnections++;
  console.log(serverConnections);
}).listen(8080);

// Client: make 1000 connections
(function connect() {
  net.connect(8080, function(err){
    clientConnections++;
    if (err) console.log(err);
    if (clientConnections < 1000) {
      connect();
    }
  });
})();