const mongoose = require('mongoose');

const anonymousComplaintFormSchema = new mongoose.Schema({
  complaintType: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  resources: {
    type: String
  },
  description: {
    type: String,
    required: true
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