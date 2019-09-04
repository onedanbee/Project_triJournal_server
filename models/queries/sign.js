const parser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const crypto = require('crypto');
const User = require('../tables/User');
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

module.exports = {
  signin: app.post('/sign/signin', (req, res) => {
    const cryptoPassword = crypto.createHash('sha512').update(req.body.password);
    return User.findOne({
      where: {
        username: req.body.username,
        password: cryptoPassword,
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
  }),
  signout: app.post('/sign/signout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
    return { isLogIn: false };
  })
};
