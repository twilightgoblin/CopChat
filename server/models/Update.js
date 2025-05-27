const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Announcement', 'Event', 'News', 'Alert'],
    default: 'Announcement'
  },
  date: {
    type: Date,
    default: Date.now
  },
  isImportant: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Update', updateSchema); 