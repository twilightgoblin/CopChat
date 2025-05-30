const mongoose = require('mongoose');

const chatbotOptionSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
    unique: true,
  },
  keywords: [{
    type: String,
    required: true,
  }],
  info: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subOptions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ChatbotOption',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt timestamp before saving
chatbotOptionSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('ChatbotOption', chatbotOptionSchema); 