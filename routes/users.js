const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const user = require('../models/User');
// @route  POST api/users
//@desc    Register a user
//@access  Public

 //pretains to api/users
router.post('/', [
  //checks name, email and password that can be automatically done using require on line 3.

  check('name', 'Pleae add name')
  .not()
  .isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password', 'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 })
], 
(req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  res.send("Passed!")
});

module.exports = router;