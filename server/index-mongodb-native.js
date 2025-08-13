const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const path = require('path');
const serviceFormsRoutes = require('./test-routes');
const testimonialsRoutes = require('./test-routes');
const updatesRoutes = require('./test-routes');
const uploadRoutes = require('./test-routes');
const beatPoliceRoutes = require('./test-routes');
const chatbotRoutes = require('./test-routes');
require('dotenv').config();

const app = express();

// CORS configuration
const allowedOrigins = [
  'http://localhost:3000',
  'https://your-frontend-app.netlify.app',
  'https://*.netlify.app',
  'https://*.onrender.com',
  'https://*.vercel.app',
  'https://chikkaballapurapoliceservice.vercel.app'
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.some(allowedOrigin => {
      if (allowedOrigin.includes('*')) {
        const pattern = new RegExp('^' + allowedOrigin.replace('*', '.*') + '$');
        return pattern.test(origin);
      }
      return allowedOrigin === origin;
    })) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Parse JSON bodies
app.use(express.json());

// MongoDB Connection with native driver
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://chatbot:botchat879@chatbot.elbegly.mongodb.net/?retryWrites=true&w=majority&appName=ChatBot';

let db;

if (!process.env.MONGODB_URI) {
  console.warn('Warning: MONGODB_URI not found in environment variables. Using fallback connection string.');
}

console.log('Attempting to connect to MongoDB...');
console.log('Connection URI:', MONGODB_URI.replace(/\/\/([^:]+):([^@]+)@/, '//****:****@')); // Hide credentials in logs

async function connectToMongoDB() {
  try {
    const client = new MongoClient(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      family: 4
    });

    await client.connect();
    db = client.db();
    
    console.log('Successfully connected to MongoDB.');
    console.log('Database name:', db.databaseName);
    
    // Test the connection by listing all collections
    const collections = await db.listCollections().toArray();
    console.log('Available collections:', collections.map(c => c.name));
    
    // Make db available globally for routes
    app.locals.db = db;
    
  } catch (err) {
    console.error('MongoDB connection error:', {
      name: err.name,
      message: err.message,
      code: err.code,
      stack: err.stack
    });
    
    // Additional error details for common issues
    if (err.code === 'ECONNREFUSED') {
      console.error('Connection refused. Please check:');
      console.error('1. MongoDB Atlas cluster is running');
      console.error('2. Your IP address is whitelisted in MongoDB Atlas');
      console.error('3. Network connectivity and firewall settings');
    } else if (err.code === 'ENOTFOUND') {
      console.error('DNS lookup failed. Please check:');
      console.error('1. MongoDB Atlas cluster URL is correct');
      console.error('2. Internet connectivity');
    }
    
    // Exit process on connection failure
    process.exit(1);
  }
}

// Connect to MongoDB
connectToMongoDB();

// Routes
app.use('/api/service-forms', serviceFormsRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/updates', updatesRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/beat-police', beatPoliceRoutes);
app.use('/api/chatbot', chatbotRoutes);

app.get('/', (req, res) => {
  res.send('Backend server is running with MongoDB native driver');
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
