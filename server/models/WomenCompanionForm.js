const mongoose = require('mongoose');

const womenCompanionFormSchema = new mongoose.Schema({
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
  address: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  travelDate: {
    type: Date,
    required: true
  },
  travelTime: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  additionalFiles: [{
    type: String
  }],
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'completed'],
    default: 'pending'
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  emailVerificationCode: String,
  emailVerificationExpires: Date,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt timestamp before saving
womenCompanionFormSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const WomenCompanionForm = mongoose.model('WomenCompanionForm', womenCompanionFormSchema);

module.exports = WomenCompanionForm; 