const controller = require('./controller');
const router = require('express').Router();
const uploadProfilePic = require('./services/file-upload-profilepic');
const uploadJournalPic = require('./services/file-upload-journalpic');
const auth = require('./middleware/auth');

router.use('/test', auth);

router.post('/sign/signin', controller.sign.signin);

router.get('/sign/signout', controller.sign.signout);

router.post('/users/checkId', controller.users.checkId);

router.post('/users/signUp', controller.users.signUp);

router.post('/users/findId', controller.users.findId);

router.post('/users/findPassword', controller.users.findPassword);

router.get('/users/:username', controller.users.getProfile);

router.post('/users/:username/postUserProfilePic', uploadProfilePic.single('image'), (req, res) => {
  return res.json({ imageUrl: req.file.location });
});

router.post('/posts/:userName', controller.posts.createPost);

router.get('/posts/:userName', controller.posts.getPost);

router.post('/posts/:username/postJournalPic', uploadJournalPic.single('image'), (req, res) => {
  return res.json({ imageUrl: req.file.location });
});

router.put('/posts/:userName/:postId', controller.posts.edit);

router.delete('/posts/:userName/:postId', controller.posts.deletePost);

module.exports = router;
