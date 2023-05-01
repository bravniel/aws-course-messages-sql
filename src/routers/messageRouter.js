const express = require('express');
const Message = require('../models/messageModel');

const router = new express.Router();

router.post('/add-message', async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.send(message);
  } catch (err) {
    console.log(err);
  }
});

router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.findAll();
    if (messages) res.send(messages);
    else res.send([]);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
