const jwt = require('jsonwebtoken');

const authMiddleware = (req, res) => {
  const token = req.headers['x-access-token'] || req.query.token;

  if (!token) {
    return res.status(403).json({
      success: false,
      message: 'not logged in'
    });
  }

  const p = (resolve, reject) => {
    jwt.verify(token, '@OBok', (err, decoded) => {
      if (err) {
        reject(err);
      }
      resolve(decoded);
    });
  };

  const onError = error => {
    res.status(403).json({
      success: false,
      message: error.message
    });
  };

  p.then(decoded => {
    req.decoded = decoded;
    res.send(decoded);
  }).catch(onError);
};

module.exports = authMiddleware;
