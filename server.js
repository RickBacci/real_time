const path       = require('path');

const http       = require('http');
const express    = require('express');
const app        = express();

const bodyParser = require('body-parser')
const generateId = require('./lib/generate-id');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/index.html')
});

app.locals.title = 'Real Time';

app.set('port', process.env.PORT || 8080)

var port = process.env.PORT || 3000;


if (!module.parent) {
  var server = app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on port:  ${app.get('port')}.`);
  });
}

var io = require('socket.io')(server);

io.on('connection', function(socket){
  console.log('A user connected', io.engine.clientsCount);

  // debugger;
  socket.on('disconnect', function () {
    console.log('A user has disconnected.', io.engine.clientsCount);

    io.sockets.emit('usersConnected', io.engine.clientsCount);
  });

});



module.exports = app;
