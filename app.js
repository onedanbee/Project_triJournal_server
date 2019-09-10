const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const parser = require('body-parser');
const router = require('./routes.js');
const app = express();
const port = 3000;
const config = require('./config/jwtConfig');

//
//   session({
//     //세션을 사용하는 곳이 아닌 app.js에다 저장을 해야 된다. 즉, sign.js에다 session을 사용을 정의하면 안 된다.
//     secret: '@OBok', //쿠키에 저장할 connect.sid 값을 암호화할 키 값 입력
//     name: 'sessionId',
//     resave: false, // 세션 아이디를 접속할 때마다 새롭게 발급하지 않음 false
//     saveUninitialized: true, // 세션 아이디를 실제 사용하기 전에는 발급하지 않음true
//     store: new FileStore(),
//     cookie: { secure: false, maxAge: 1 * 60 * 60 * 1000 }
//   })
// );

app.use(cors({ credentials: true, origin: 'http://localhost:8000' }));
app.use(morgan('dev'));
app.use(parser.json());
app.use('/', router);
app.set('jwt-secret', config.secret);

app.set('port', port);

if (!module.parent) {
  app.listen(port);
  console.log('Listening on ', port);
}

module.exports.app = app;
