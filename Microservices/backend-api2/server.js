require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

app.use(require('./api/message'));
app.use(require('./api/health'));


app.use('*', function (req, res, next) {
  res.sendStatus(400);
})


var port = process.env.PORT || 19020;
var server = app.listen(port, function () {
  var port = server.address().port;
  console.log(`### Server listening on ${server.address().port}`);
});