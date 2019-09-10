const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const User = require('../tables/index').User;
const app = express();
const jwt = require('jsonwebtoken');

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.get('/', (req, res) => {
  res.status(200).send('Success');
});

module.exports = {
  signin: (req, res) => {
    return User.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      },
      attributes: ['id']
    }).then(function(result) {
      if (result) {
        return { isLogIn: true };
      }
    });
  },
  signout: (req, res) => {
    // res.redirect('/');
    return { isLogIn: false };
  },
  checkSign: (req, res) => {
    if (req.session.userId) {
      return { sessionId: req.session.userId };
    } else {
      return { isSession: false };
    }
  }
};
