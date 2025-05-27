const mongoose = require('mongoose');

const lostAndFoundFormSchema = new mongoose.Schema({
  isLost: {
    type: Boolean,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  aadhar: {
    type: String,
    required: false
  },
  item: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  additionalFiles: [{
    type: String
  }],
  emailVerified: {
    type: Boolean,
    default: false
  },
  emailVerificationCode: {
    type: String
  },
  emailVerificationExpires: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('lost-and-found', lostAndFoundFormSchema); 