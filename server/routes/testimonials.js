const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// Get recent testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find()
      .sort({ createdAt: -1 })
      .limit(5);
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Submit new testimonial
router.post('/', async (req, res) => {
  try {
    const { name, email, content, rating } = req.body;

    // Check for spam (same email used more than twice)
    const emailCount = await Testimonial.countDocuments({ email });
    if (emailCount >= 2) {
      return res.status(400).json({ message: 'Maximum feedback limit reached for this email' });
    }

    const testimonial = new Testimonial({
      name,
      email,
      content,
      rating
    });

    const savedTestimonial = await testimonial.save();
    res.status(201).json(savedTestimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 