const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// POST route to save applications
router.post('/apply', async (req, res) => {
  try {
    const application = new Application(req.body);
    await application.save();
    res.status(201).send({ message: 'Application submitted successfully!' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to submit application' });
  }
});

module.exports = router;
