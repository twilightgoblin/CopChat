const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Import routes
const serviceFormsRoutes = require('../../server/routes/serviceForms');
const testimonialsRoutes = require('../../server/routes/testimonials');
const updatesRoutes = require('../../server/routes/updates');
const uploadRoutes = require('../../server/routes/upload');
const beatPoliceRoutes = require('../../server/routes/beatPolice');
const chatbotRoutes = require('../../server/routes/chatbot');

const app = express();

// CORS configuration
app.use(cors({
  origin: '*', // In production, you might want to restrict this
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse JSON bodies
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      family: 4
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

// Initialize MongoDB connection
connectDB();

// Routes
app.use('/api/service-forms', serviceFormsRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/updates', updatesRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/beat-police', beatPoliceRoutes);
app.use('/api/chatbot', chatbotRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Export the serverless handler
exports.handler = serverless(app); 