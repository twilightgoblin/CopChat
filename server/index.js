const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const serviceFormsRoutes = require('./routes/serviceForms');
const testimonialsRoutes = require('./routes/testimonials');
const updatesRoutes = require('./routes/updates');
const uploadRoutes = require('./routes/upload');
require('dotenv').config();

const app = express();

// CORS configuration
const allowedOrigins = [
  'http://localhost:3000',
  'https://your-frontend-app.netlify.app',
  'https://*.netlify.app'
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

// MongoDB Connection with detailed logging
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://chatbot:botchat879@chatbot.elbegly.mongodb.net/?retryWrites=true&w=majority&appName=ChatBot';

if (!process.env.MONGODB_URI) {
  console.warn('Warning: MONGODB_URI not found in environment variables. Using fallback connection string.');
}

console.log('Attempting to connect to MongoDB...');
console.log('Connection URI:', MONGODB_URI.replace(/\/\/([^:]+):([^@]+)@/, '//****:****@')); // Hide credentials in logs

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000, // Increased timeout to 10s
  socketTimeoutMS: 45000,
  family: 4 // Force IPv4
})
.then(() => {
  console.log('Successfully connected to MongoDB.');
  console.log('Database name:', mongoose.connection.name);
  console.log('Connection state:', mongoose.connection.readyState);
  
  // Test the connection by listing all collections
  return mongoose.connection.db.listCollections().toArray();
})
.then((collections) => {
  console.log('Available collections:', collections.map(c => c.name));
})
.catch((err) => {
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
});

// Add connection event listeners
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
  // Attempt to reconnect
  console.log('Attempting to reconnect...');
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

// Handle process termination
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed through app termination');
    process.exit(0);
  } catch (err) {
    console.error('Error during MongoDB connection closure:', err);
    process.exit(1);
  }
});

// Routes
app.use('/api/service-forms', serviceFormsRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/updates', updatesRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/', (req, res) => {
  res.send('Backend server is running');
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 