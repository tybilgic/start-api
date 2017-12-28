const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const requireUserAuthentication = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (typeof authHeader !== 'undefined') {
    console.log(authHeader);
    next();
  } else {
    console.log('header not found');
    const err = new Error();
    err.status = 403;
    err.message = 'Forbidden';
    next(err);
  }
};

// Require authentication for every request made to api
router.use(requireUserAuthentication);

/* GET root api. */
router.get('/', (req, res) => {
  res.status(200).json({ result: true });
});

router.get('/someEndpoint', (req, res) => {
  res.status(200).json({ result: false });
});

module.exports = router;
