const express = require('express');
const router = express.Router();
const Update = require('../models/Update');

// Get all updates, sorted by date
router.get('/', async (req, res) => {
  try {
    const updates = await Update.find()
      .sort({ date: -1 })
      .limit(10); // Get latest 10 updates
    res.json(updates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new update
router.post('/', async (req, res) => {
  try {
    const { title, content, category, isImportant } = req.body;

    const update = new Update({
      title,
      content,
      category,
      isImportant,
      date: new Date()
    });

    const savedUpdate = await update.save();
    res.status(201).json(savedUpdate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an update
router.delete('/:id', async (req, res) => {
  try {
    const update = await Update.findByIdAndDelete(req.params.id);
    if (!update) {
      return res.status(404).json({ message: 'Update not found' });
    }
    res.json({ message: 'Update deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 