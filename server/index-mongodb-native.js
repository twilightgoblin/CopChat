const express = require('express');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const serviceFormsRoutes = require('./routes/serviceForms');
const testimonialsRoutes = require('./routes/testimonials');
const updatesRoutes = require('./routes/updates');
const uploadRoutes = require('./routes/upload');
const beatPoliceRoutes = require('./routes/beatPolice');
const chatbotRoutes = require('./routes/chatbot');
require('dotenv').config();

const app = express();

// CORS configuration
const allowedOrigins = [
  'http://localhost:3000',
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
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PATCH', 'PUT'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Parse JSON bodies
app.use(express.json({ limit: '10mb' }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`, {
    body: req.body,
    query: req.query,
    headers: {
      'content-type': req.get('content-type'),
      'origin': req.get('origin'),
      'user-agent': req.get('user-agent')
    }
  });
  
  // Special logging for resend-otp route
  if (req.path === '/api/resend-otp') {
    console.log(`[Request Log] 🔍 Resend OTP route accessed: ${req.method} ${req.path}`);
    console.log(`[Request Log] 📧 Email in body:`, req.body.email);
  }
  
  next();
});

// MongoDB Connection with native driver
const MONGODB_URI = process.env.MONGODB_URI;

let db;

if (!process.env.MONGODB_URI) {
  console.error('Error: MONGODB_URI not found in environment variables. Please set it in your .env file.');
  process.exit(1);
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

// Also connect Mongoose for model-based routes
(async function connectMongoose() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI, {
        serverSelectionTimeoutMS: 10000
      });
      console.log('Mongoose connected successfully');
    }
  } catch (err) {
    console.error('Mongoose connection error:', {
      name: err.name,
      message: err.message,
      code: err.code
    });
    // Do not exit; native driver may still be serving non-mongoose routes
  }
})();

// Routes
app.use('/api/service-forms', serviceFormsRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/updates', updatesRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/beat-police', beatPoliceRoutes);
app.use('/api/chatbot', chatbotRoutes);

// Direct resend-otp route for testing
app.post('/api/resend-otp', async (req, res) => {
  try {
    console.log('[Direct Route] Request received:', req.body);
    const { email } = req.body;
    
    if (!email) {
      console.log('[Direct Route] No email provided');
      return res.status(400).json({ message: 'Email is required' });
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('[Direct Route] Invalid email format:', email);
      return res.status(400).json({ message: 'Invalid email format' });
    }
    
    console.log('[Direct Route] Processing email:', email);
    
    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Validate OTP format
    if (!/^\d{6}$/.test(otp)) {
      console.error(`[Direct Route] Invalid OTP generated: ${otp}`);
      return res.status(500).json({
        success: false,
        message: 'Error generating OTP'
      });
    }
    
    console.log(`[Direct Route] Generated OTP: ${otp} for ${email}`);
    console.log(`[Direct Route] OTP length: ${otp.length}`);
    console.log(`[Direct Route] OTP type: ${typeof otp}`);
    
    // Send OTP email
    const sendOtpEmail = require('./sendOtpEmail');
    console.log('[Direct Route] Calling sendOtpEmail...');
    await sendOtpEmail(email, otp);
    console.log('[Direct Route] Email sent successfully');
    
    res.status(200).json({ 
      success: true, 
      message: 'OTP sent successfully', 
      email 
    });
  } catch (error) {
    console.error('[Direct Route] Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send OTP', 
      error: error.message 
    });
  }
});

// Direct verify-otp route for testing
app.post('/api/verify-otp', async (req, res) => {
  try {
    console.log('[Verify Route] Request received:', req.body);
    const { email, otp } = req.body;
    
    if (!email || !otp) {
      console.log('[Verify Route] Missing email or OTP');
      return res.status(400).json({ message: 'Email and OTP are required' });
    }
    
    console.log('[Verify Route] Verifying OTP:', { email, otp });
    
    // For now, we'll do a simple verification
    // In production, you'd check against the stored OTP in MongoDB
    // Since we're using the direct route, we'll accept any 6-digit OTP for testing
    
    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      console.log('[Verify Route] Invalid OTP format');
      return res.status(400).json({ message: 'Invalid OTP format' });
    }
    
    console.log('[Verify Route] OTP format valid, accepting for testing');
    
    // Return success with the OTP for form submission
    res.status(200).json({
      message: 'OTP verified successfully',
      otp: otp,
      email: email
    });
    
    console.log('[Verify Route] OTP verification successful');
    
  } catch (error) {
    console.error('[Verify Route] Error:', error);
    res.status(500).json({
      message: 'Error verifying OTP',
      error: error.message
    });
  }
});

app.get('/', (req, res) => {
  res.send('Backend server is running with MongoDB native driver');
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`📧 Email service configured for: botchat879@gmail.com`);
  console.log(`🔗 API endpoints available at: http://localhost:${PORT}/api`);
  console.log(`✅ Direct resend-otp route: POST /api/resend-otp`);
  console.log(`✅ Direct verify-otp route: POST /api/verify-otp`);
  console.log(`✅ Service forms route: /api/service-forms/*`);
});
