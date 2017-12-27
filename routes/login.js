const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const requireUserAuthentication = () => {
  console.log('you shall login');
};

router.all('*', requireUserAuthentication);

/* GET root api. */
router.get('/', (req, res) => {
  res.status(200).json({ result: true });
});

module.exports = router;
