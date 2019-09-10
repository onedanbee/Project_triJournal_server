const header = {
  typ: 'JWT',
  alg: 'HS256'
};

// encode to base64
const encodedPayload = new Buffer(JSON.stringify(payload)).toString('base64').replace('=', '');
console.log('payload: ', encodedPayload);
