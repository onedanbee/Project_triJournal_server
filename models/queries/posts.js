const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const app = express();
const Journal = require('../tables/index').Journal;
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
AWS.config.loadFromPath(__dirname + '/../../config/awsconfig.json');

let s3 = new AWS.S3();

let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'tirjournal-picture',
    key: function(req, file, cb) {
      cb(null, Data.now().toString());
    },
    acl: 'public-read-write'
  })
});

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

module.exports = {
  createPost: (req, res) => {
    const body = req.body;
    Journal.create({
      best: body.best,
      worst: body.worst,
      todo: body.todo,
      longLog: body.longLog,
      picUrl: body.picUrl,
      userName: req.params.userName
    }).then(function() {
      return { isPostCreated: true };
    });
  },
  getPost: (req, res) => {
    return Journal.findAll({
      where: { userName: req.params.userName }
    }).then(function(journal) {
      if (req.session.userId) {
        return journal;
      } else {
        return [];
      }
    });
  },
  edit: (req, res) => {
    const body = req.body;
    Journal.update(
      {
        best: body.best,
        worst: body.worst,
        todo: body.todo,
        longLog: body.longLog,
        picUrl: body.picUrl,
        userName: req.params.userName
      },
      { where: { id: req.params.postId } }
    );
    return Journal.findOne({ where: { id: req.params.postId } });
  },
  deletePost: (req, res) => {
    Journal.destroy({
      where: { id: req.params.postId }
    }).then(function() {
      return { isDeleted: true };
    });
  },
  postPicture: (req, res) => {
    upload.single('file'),
      function(req, res) {
        // let imgFile = req.file;
        console.log(req);
      };
  }
};
