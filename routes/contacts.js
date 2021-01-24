const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');
const Contact = require('../models/Contact');


// @route  Get api/contacts
//@desc    Get all users contacts
//@access  Private

 //pretains to api/contacts
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

// @route  POST api/contacts
//@desc    Add new contact
//@access  Private

 //pretains to api/contacts
 router.post('/', (req, res) => {
  res.send("Add contacts")
});

// @route  PUT api/contacts
//@desc    Update contact
//@access  Private

 //pretains to api/contacts
 router.put('/:id', (req, res) => {
  res.send("Update contacts")
});

// @route  Delete api/contacts
//@desc    Update contact
//@access  Private

 //pretains to api/contacts
 router.delete('/:id', (req, res) => {
  res.send("Delete contacts")
});

module.exports = router;