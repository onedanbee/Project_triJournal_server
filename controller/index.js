var sign = require('../models/sign');

module.exports = {
  sign: {
    signin: async function(req, res) {
      try {
        const data = await sign.signin(req.body);
        res.status(200);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    signout: async function(req, res) {
      try {
        const data = await sign.signout(req.body);
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
        const data = await users.checkId(req.body);
        res.status(200);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    signUp: async function(req, res) {
      try {
        const data = await users.signUp(req.body);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    findId: async function(req, res) {
      try {
        const data = await users.findId(req.body);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    findPassword: async function(req, res) {
      try {
        const data = await users.findPassword(req.body);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    getProfile: async function(req, res) {
      try {
        const data = await users.getProfile(req.body);
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
        const data = await posts.createPost(req.body);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    getPost: async function(req, res) {
      try {
        const data = await posts.getPost();
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    edit: async function(req, res) {
      try {
        const data = await posts.edit(req.body);
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    },
    deletePost: async function(req, res) {
      try {
        const data = await posts.deletePost();
        res.status(201);
        res.send(data);
      } catch (err) {
        console.error(err);
      }
    }
  }
};
