const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const requireUserAuthentication = (req, res, next) => {
  console.log('you shall pass');
  next();
};

router.all('*', requireUserAuthentication, (req, res, next) => next());

/* GET root api. */
router.get('/', (req, res) => {
  res.status(200).json({ result: true });
});

router.get('/someEndpoint', (req, res) => {
  res.status(200).json({ result: false });
});

module.exports = router;
