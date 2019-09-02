const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const parser = require('body-parser');
const router = require('./routes.js');
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(parser.json());
app.use('/', router);

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on ', app.get('port'));
}

module.exports.app = app;
