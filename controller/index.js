var sign = require('../models/queries/sign');
var users = require('../models/queries/users');
var posts = require('../models/queries/posts');

module.exports = {
  sign: {
    signin: async function(req, res) {
      try {
        const data = await sign.signin(req, res); //req => req,res
        res.status(200);
        res.redirect('/search');
      } catch (err) {
        console.error(err);
      }
    },
    signout: async function(req, res) {
      try {
        const data = await sign.signout(req, res);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    checkSign: async function(req, res) {
      try {
        const data = await sign.checkSign(req, res);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.log(err);
      }
    }
  },

  users: {
    checkId: async function(req, res) {
      try {
        const data = await users.checkId(req, res);
        res.status(200);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    signUp: async function(req, res) {
      try {
        const data = await users.signUp(req, res);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    findId: async function(req, res) {
      try {
        const data = await users.findId(req, res);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    findPassword: async function(req, res) {
      try {
        const data = await users.findPassword(req, res);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    getProfile: async function(req, res) {
      try {
        const data = await users.getProfile(req, res);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    }
  },

  posts: {
    createPost: async function(req, res) {
      try {
        const data = await posts.createPost(req, res);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    getPost: async function(req, res) {
      try {
        const data = await posts.getPost(req, res);
        res.status(200);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    edit: async function(req, res) {
      try {
        const data = await posts.edit(req, res);
        res.status(200);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    deletePost: async function(req, res) {
      try {
        const data = await posts.deletePost(req, res);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    }
  }
};
