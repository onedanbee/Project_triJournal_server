const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const crypto = require('crypto');
const User = require('../models/Users');
const app = require('../../app');

app.use(
  session({
    secret: '@OBok'
  })
);

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.get('/', (req, res) => {
  res.status(200).send('Success');
});

app.post('/sign/signin', (req, res) => {
  const cryptoPassword = crypto.createHash('sha512').update(req.body.password);
  User.findOne({
    where: {
      username: req.body.username,
      password: cryptoPassword,
      attributes: ['id']
    }
  }).then(function(result) {
    if (result) {
      req.session.userId = result.id;
      res.json({ isLogIn: true }); // 어떤 값으로 반환할 지 클라이언트 파트와 논의
    }
  });
});

app.post('/sign/signout', (req, res) => {
  req.session.destroy();
  res.json({ isLogIn: false });
  res.redirect('/');
});
