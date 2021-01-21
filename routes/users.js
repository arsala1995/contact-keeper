const express = require('express');
const router = express.Router();

const user = require('../models/User');
// @route  POST api/users
//@desc    Register a user
//@access  Public

 //pretains to api/users
router.post('/', (req, res) => {
  res.send(req.body)
});

module.exports = router;