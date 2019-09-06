var controller = require('./controller');
var router = require('express').Router();

router.post('/sign/signin', controller.sign.signin);

router.post('/sign/signout', controller.sign.signout);

router.post('/users/checkId', controller.users.checkId);

router.post('/users/signUp', controller.users.signUp);

router.post('/users/findId', controller.users.findId);

router.post('/users/findPassword', controller.users.findPassword);

router.get('/users/:username', controller.users.getProfile);

router.post('/posts/:username', controller.posts.createPost);

router.get('/posts/:userId', controller.posts.getPost);

router.put('/posts/:userId/:postId', controller.posts.edit);

router.delete('/posts/:userId/:postId', controller.posts.deletePost);

module.exports = router;
