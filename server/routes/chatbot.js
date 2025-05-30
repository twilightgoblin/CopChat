const express = require('express');
const router = express.Router();
const ChatbotOption = require('../models/ChatbotOption');

// Get all chatbot options
router.get('/', async (req, res) => {
  try {
    const options = await ChatbotOption.find()
      .populate('subOptions')
      .sort({ category: 1, createdAt: -1 });
    res.json(options);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get options by category
router.get('/category/:category', async (req, res) => {
  try {
    const options = await ChatbotOption.find({ category: req.params.category })
      .populate('subOptions')
      .sort({ createdAt: -1 });
    res.json(options);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new chatbot option
router.post('/', async (req, res) => {
  const option = new ChatbotOption({
    label: req.body.label,
    value: req.body.value,
    keywords: req.body.keywords,
    info: req.body.info,
    category: req.body.category,
    subOptions: req.body.subOptions || [],
  });

  try {
    const newOption = await option.save();
    res.status(201).json(newOption);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a chatbot option
router.patch('/:id', async (req, res) => {
  try {
    const option = await ChatbotOption.findById(req.params.id);
    if (!option) {
      return res.status(404).json({ message: 'Chatbot option not found' });
    }

    // Update only the fields that are provided
    if (req.body.label) option.label = req.body.label;
    if (req.body.value) option.value = req.body.value;
    if (req.body.keywords) option.keywords = req.body.keywords;
    if (req.body.info) option.info = req.body.info;
    if (req.body.category) option.category = req.body.category;
    if (req.body.subOptions) option.subOptions = req.body.subOptions;

    const updatedOption = await option.save();
    res.json(updatedOption);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a chatbot option
router.delete('/:id', async (req, res) => {
  try {
    const option = await ChatbotOption.findById(req.params.id);
    if (!option) {
      return res.status(404).json({ message: 'Chatbot option not found' });
    }

    // If this option is a sub-option of another option, remove the reference
    await ChatbotOption.updateMany(
      { subOptions: req.params.id },
      { $pull: { subOptions: req.params.id } }
    );

    await option.deleteOne();
    res.json({ message: 'Chatbot option deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 