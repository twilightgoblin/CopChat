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

// OTP routes for testing
router.post('/resend-otp', (req, res) => {
  res.json({ 
    message: 'OTP sent successfully!', 
    email: req.body.email,
    timestamp: new Date().toISOString()
  });
});

router.post('/verify-otp', (req, res) => {
  res.json({ 
    message: 'OTP verified successfully!', 
    email: req.body.email,
    otp: req.body.otp,
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
