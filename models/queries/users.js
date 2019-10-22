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
        return { isName: true };
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
      userProfilePic: body.userProfilePic
    }).then(function() {
      return { isAccountCreated: true };
    });
  },
  findId: (req, res) => {
    const body = req.body;
    return User.findOne({
      where: { email: body.email },
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
  },
  uploadprofilepic: (req, res) => {
    User.Journal.update(
      {
        userProfilePic: req.file.location
      },
      { where: { id: req.params.postId } }
    );
  }
};
