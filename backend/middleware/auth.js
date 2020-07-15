const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  //console.log(req.headers);
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    if(req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      console.log('Valid user !');
      next();
    }
  } catch {
    console.log('Invalid request');
    res.status(401).json({error: new Error('Invalid request')});
  }
};
