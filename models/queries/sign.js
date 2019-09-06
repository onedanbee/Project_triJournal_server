const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const crypto = require('crypto');
const User = require('../tables/User');
const app = express();

app.use(
  session({
    secret: '@OBok', //쿠키에 저장할 connect.sid 값을 암호화할 키 값 입력
    resave: false, // 세션 아이디를 접속할 때마다 새롭게 발급하지 않음
    saveUninitialized: true // 세션 아이디를 실제 사용하기 전에는 발급하지 않음
  })
);

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
        password: req.body.password,
        attributes: ['id']
      }
    }).then(function(result) {
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
    res.redirect('/');
    return { isLogIn: false };
  }
};
