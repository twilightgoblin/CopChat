const express = require('express');
const router = express.Router();

// Simple test route
router.get('/', (req, res) => {
  res.json({ message: 'Service forms route is working!' });
});

// Test POST route
router.post('/test', (req, res) => {
  res.json({ message: 'POST route is working!', body: req.body });
});

module.exports = router;
