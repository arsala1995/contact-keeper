const express = require('express');
const router = express.Router();


// @route  Get api/contacts
//@desc    Get all users contacts
//@access  Private

 //pretains to api/contacts
router.get('/', (req, res) => {
  res.send("Get all contacts")
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