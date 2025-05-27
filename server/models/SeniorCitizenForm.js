const mongoose = require('mongoose');

const seniorCitizenFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 60
  },
  contactName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contactPhone: {
    type: String,
    required: true
  },
  aadhar: {
    type: String
  },
  address: {
    type: String,
    required: true
  },
  emergencyContact: {
    type: String,
    required: true
  },
  medicalConditions: {
    type: String
  },
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

module.exports = mongoose.model('senior-citizen', seniorCitizenFormSchema); 