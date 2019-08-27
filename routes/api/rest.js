const express = require('express');
const router = express.Router();
const random = require('random-name');

// Basic REST endpoint. Returns a random full name
router.get('/', (req, res) => {
  res.status(200).json({
    first_name: random.first(),
    middle_name: random.middle(),
    last_name: random.last(),
    random_num: Math.random()
  });
});

module.exports = router
