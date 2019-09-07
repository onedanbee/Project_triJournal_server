const express = require('express');
const session = require('express-session');
const cors = require('cors');
const morgan = require('morgan');
const parser = require('body-parser');
const router = require('./routes.js');
const FileStore = require('session-file-store')(session);
const app = express();
const port = 3000;

app.use(
  session({
    //세션을 사용하는 곳이 아닌 app.js에다 저장을 해야 된다. 즉, sign.js에다 session을 사용을 정의하면 안 된다.
    secret: '@OBok', //쿠키에 저장할 connect.sid 값을 암호화할 키 값 입력
    resave: false, // 세션 아이디를 접속할 때마다 새롭게 발급하지 않음
    saveUninitialized: true, // 세션 아이디를 실제 사용하기 전에는 발급하지 않음
    store: new FileStore()
  })
);
app.use(cors());
app.use(morgan('dev'));
app.use(parser.json());
app.use('/', router);

app.set('port', port);

if (!module.parent) {
  app.listen(port);
  console.log('Listening on ', port);
}

module.exports.app = app;
