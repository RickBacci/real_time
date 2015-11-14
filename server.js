const path     = require('path');

const express  = require('express');
const app      = express();

app.locals.title = 'Real Time';

app.set('port', process.env.PORT || 8080)
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/index.html')
});


if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on port:  ${app.get('port')}.`);
  });
}

module.exports = app;

