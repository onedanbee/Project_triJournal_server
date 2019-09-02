var controller = require('./controllers');
var router = require('express').Router();

router.post('/sign/signin', controller.sign.signin);

router.post('/sign/signout', controller.sign.signout);

router.post('/users/checkId', controller.users.checkId);

router.post('/users/signUp', controller.users.signUp);

router.post('/users/findId', controller.users.findId);

router.post('/users/findPassword', controller.users.findPassword);

router.post('/users/?userId={id}', controller.post.createPost);

router.get('/users/?userId={id}', controller.posts.getPost);

router.get('/users/:userId', controller.users.getProfile);

router.put('/posts?userId={id}?postId={postId}', controller.posts.edit);

router.delete('/posts?userId={id}?postId={postId}', controller.posts.deletePost);

module.exports = router;
