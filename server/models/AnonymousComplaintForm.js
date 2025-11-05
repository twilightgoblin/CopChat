const mongoose = require('mongoose');

const anonymousComplaintFormSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  complaintType: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  resources: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    required: true
  },
  additionalInfo: {
    type: String,
    default: ''
  },
  evidence: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('anonymous-complaint', anonymousComplaintFormSchema); 