const express = require('express');
const router = express.Router();


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
 router.post('/', (req, res) => {
  res.send("Login user")
});

module.exports = router;