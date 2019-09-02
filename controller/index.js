var models = require('../models');

module.exports = {
  sign: {
    signin: async function(req, res) {
      try {
        const data = await models.sign.signin(req.body);
        res.status(200);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    signout: async function(req, res) {
      try {
        const data = await models.sign.signout(req.body);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    }
  },

  users: {
    checkId: async function(req, res) {
      try {
        const data = await models.users.checkId(req.body);
        res.status(200);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    signUp: async function(req, res) {
      try {
        const data = await models.users.signUp(req.body);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    findId: async function(req, res) {
      try {
        const data = await models.users.findId(req.body);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    findPassword: async function(req, res) {
      try {
        const data = await models.users.findPassword(req.body);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    getProfile: async function(req, res) {
      try {
        const data = await models.users.getProfile(req.body);
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
        const data = await models.posts.createPost(req.body);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    getPost: async function(req, res) {
      try {
        const data = await models.posts.getPost();
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    edit: async function(req, res) {
      try {
        const data = await models.posts.edit(req.body);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    deletePost: async function(req, res) {
      try {
        const data = await models.posts.deletePost();
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    }
  }
};
