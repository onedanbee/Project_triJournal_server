const jwt = require('jsonwebtoken');

const authMiddleware = (req, res) => {
  const token = req.headers['x-access-token'] || req.query.token || req.body.token;

  if (!token) {
    return res.status(403).json({
      success: false,
      message: 'you do not have the valid token'
    });
  }

  const p = jwt.verify(token, '@OBok');

  return p;
};

module.exports = authMiddleware;
