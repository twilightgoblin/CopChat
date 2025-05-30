const express = require('express');
const router = express.Router();
const BeatPolice = require('../models/BeatPolice');

// Get all beat police officers
router.get('/', async (req, res) => {
    try {
        const beatPolice = await BeatPolice.find().sort({ createdAt: -1 });
        res.json(beatPolice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new beat police officer
router.post('/', async (req, res) => {
    const beatPolice = new BeatPolice({
        name: req.body.name,
        designation: req.body.designation,
        taluk: req.body.taluk,
        village: req.body.village,
        contactNumber: req.body.contactNumber
    });

    try {
        const newBeatPolice = await beatPolice.save();
        res.status(201).json(newBeatPolice);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a beat police officer
router.delete('/:id', async (req, res) => {
    try {
        const beatPolice = await BeatPolice.findById(req.params.id);
        if (!beatPolice) {
            return res.status(404).json({ message: 'Beat police officer not found' });
        }
        await beatPolice.deleteOne();
        res.json({ message: 'Beat police officer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a beat police officer
router.patch('/:id', async (req, res) => {
    try {
        const beatPolice = await BeatPolice.findById(req.params.id);
        if (!beatPolice) {
            return res.status(404).json({ message: 'Beat police officer not found' });
        }

        Object.keys(req.body).forEach(key => {
            beatPolice[key] = req.body[key];
        });

        const updatedBeatPolice = await beatPolice.save();
        res.json(updatedBeatPolice);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router; 