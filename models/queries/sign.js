const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const User = require('../tables/index').User;
const app = express();
const passport = require('passport');
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

const getUser = async obj => {
  return await User.findOne({ where: obj });
};

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = ' <your secret key> ';

let strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  let user = getUser({ id: jwt_payload.id });
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
passport.use(strategy);

app.use(passport.initialize());
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.get('/', (req, res) => {
  res.status(200).send('Success');
});

module.exports = {
  signin: (req, res) => {
    console.log('aaaaaaaaaaaaaaaaa');
    return User.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    }).then(function(result) {
      if (result) {
        let payload = { id: result.id };
        let token = jwt.sign(payload, jwtOptions.secretOrKey);
        passport.authenticate('jwt', { session: false });
        res.setHeader('x-access-token', token);
        return { isLogIn: true };
      } else {
        return { isLogIn: false };
      }
    });
  },
  signout: (req, res) => {
    let tokenValidation = auth(req, res);
    if (tokenValidation.id) {
      return { isLogIn: false };
    }
  }
};
