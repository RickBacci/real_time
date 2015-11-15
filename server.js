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





if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on port:  ${app.get('port')}.`);
  });
}

module.exports = app;

