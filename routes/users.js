const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = reqire('config');
const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');

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
    //after requesting body if error occurs
    return res.status(400).json({ errors: errors.array() });
  }

  //if no error occurs fetch this data
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email: email });

    if(user) {
      //if user already exists
      return res.status(400).json({ msg: 'User already exists'})
    }

    user = new User({
      //create new user if not exist
      name,
      email,
      password
    });

    //encrypt the password
    const salt = await bcrypt.getSalt(10);
    //to make it a hash password
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    }
    
    jwt.sign(payload, config.get('jwtSecret'), {
      expiresIn: 360000
    }, (err, token) => {
      if(err) throw err;
      res.json({ token });
    });
  } catch {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

});

module.exports = router;