const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const checkUserAuthentication = (req, res, next) => {
  console.log('checking auth...');
  next();
};

router.use(checkUserAuthentication);

/* GET root api. */
router.get('/', (req, res) => {
  res.status(200).json({ result: true });
});

module.exports = router;
