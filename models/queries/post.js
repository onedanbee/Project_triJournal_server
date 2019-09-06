const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const app = express();
const Journal = require('../tables/index').Journal;

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

module.exports = {
  createPost: (req, res) => {
    const body = req.body;
    console.log('BODY: ', body);
    return Journal.create({
      best: body.best,
      worst: body.worst,
      todo: body.todo,
      longLog: body.longLog,
      picUrl: body.picUrl,
      username: req.params.username
    }).then(journal => res.json(journal));
  },
  getPost: (req, res) => {
    const body = req.body;
    // console.log('BODY: ', body);
    return Journal.findAll({
      where: { id: req.params.userId, username: body.username },
      attributes: ['id']
    }).then(journals => res.json(journals));
  }
};
