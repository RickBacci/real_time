var socket = io();

var connectionCount = document.getElementById('connection-count');

socket.on('usersConnected', function(count) {
    connectionCount.innerText = 'Connected Users: ' + count;
  console.log('client has connected');
});
