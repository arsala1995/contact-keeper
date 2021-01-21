const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');

const user = require('../models/User');

// @route  GET api/auth
//@desc    Get logged in user
//@access  Private

 //pretains to api/auth
router.get('/', (req, res) => {
  res.send("Get logged in user")
});

// @route  POSt api/auth
//@desc    Auth user and get token
//@access  Public

 //pretains to api/auth
 router.post('/', [
   check('email', 'Please incude a valid email').isEmail(),
   check('password', 'Password is required').exists()
 ],
 async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    //after requesting body if error occurs
    return res.status(400).json({ errors: errors.array() });
  }

  const {email, password} = req.body;
  
  try {
    let user = await User.findOne({ email });

    if(!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

      const isMatch = await bcrypt.compare(password, user.password);

      if(!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

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

    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;