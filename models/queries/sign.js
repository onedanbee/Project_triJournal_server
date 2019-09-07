const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const User = require('../tables/index').User;
const app = express();

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
      console.log('SESSION: ', req.session);
      if (result) {
        req.session.userId = result.id;
        return { isLogIn: true };
      } else {
        return { isLogIn: false };
      }
    });
  },
  signout: (req, res) => {
    req.session.destroy();
    // res.redirect('/');
    return { isLogIn: false };
  },
  checkSign: (req, res) => {
    if (req.session.userId) {
      return { isLogIn: true };
    } else {
      return { isLogIn: false };
    }
  }
};
