const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json([
    { id: 1, username: 'mahmut' },
    { id: 2, username: 'mahmood' },
  ]);
});

module.exports = router;
