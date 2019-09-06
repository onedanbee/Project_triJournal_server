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
  checkId: (req, res) => {
    const body = req.body;
    return User.findOne({
      where: { username: body.username },
      attributes: ['id']
    }).then(function(name) {
      if (name) {
        return { isName: true }; //중복아이디 체크 true/false값 반환
      } else {
        return { isName: false };
      }
    });
  },

  signUp: (req, res) => {
    const body = req.body;
    return User.create({
      username: body.username,
      email: body.email,
      password: body.password,
      userProfilePic: undefined
    }).then(function() {
      return { isAccountCreated: true };
    });
  },
  findId: (req, res) => {
    const body = req.body;
    return User.findOne({
      where: { email: body.email }, //이메일을 받아 username을 반환 없으면 undefined
      attributes: ['username']
    }).then(function(username) {
      if (username) {
        return username;
      } else {
        return { username: undefined };
      }
    });
  },
  findPassword: (req, res) => {
    const body = req.body;
    return User.findOne({
      where: { email: body.email },
      attributes: ['password']
    }).then(function(password) {
      if (password) {
        return password;
      } else {
        return { isPassword: undefined };
      }
    });
  },
  getProfile: (req, res) => {
    return User.findOne({
      where: { username: req.params.username }
    });
  }
};
