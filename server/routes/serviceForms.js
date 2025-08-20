const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const LostAndFoundForm = require('../models/LostAndFoundForm');
const LockedHouseMonitoringForm = require('../models/LockedHouseMonitoringForm');
const WomenCompanionForm = require('../models/WomenCompanionForm');
const LoudSpeakerForm = require('../models/LoudSpeakerForm');
const AnonymousComplaintForm = require('../models/AnonymousComplaintForm');
const SeniorCitizenForm = require('../models/SeniorCitizenForm');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const mongoose = require('mongoose');
const sendOtpEmail = require('../sendOtpEmail');

// Create a schema for OTP storage
const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  otp: {
    type: String,
    required: true
  },
  expires: {
    type: Date,
    required: true
  }
});

const OTP = mongoose.model('OTP', OTPSchema);

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'botchat879@gmail.com',
    pass: 'kogt hqxd tfsx hzly' // App password for Gmail
  },
  debug: true, // Enable debug logging
  logger: true // Enable logger
});

// Verify transporter configuration
transporter.verify(function(error, success) {
  if (error) {
    console.error('SMTP configuration error:', error);
  } else {
    console.log('SMTP server is ready to take our messages');
  }
});

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, '../uploads');
    // Create uploads directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Generate unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter to accept only images and documents
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only images and documents are allowed.'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Send OTP before form submission
router.post('/send-otp', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: 'Email is required'
      });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date();
    otpExpires.setMinutes(otpExpires.getMinutes() + 10); // OTP expires in 10 minutes

    // Store OTP in MongoDB
    await OTP.findOneAndUpdate(
      { email },
      { 
        email,
        otp,
        expires: otpExpires
      },
      { upsert: true, new: true }
    );

    // Send OTP email using the utility function
    await sendOtpEmail(email, otp);

    res.status(200).json({
      message: 'OTP sent successfully'
    });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({
      message: 'Error sending OTP',
      error: error.message
    });
  }
});

// Verify OTP before form submission
router.post('/verify-otp', async (req, res) => {
  try {
    const { email, otp } = req.body;
    console.log('Verifying OTP for:', { email, otp });

    if (!email || !otp) {
      console.log('Missing email or OTP');
      return res.status(400).json({
        message: 'Email and OTP are required'
      });
    }

    // Get stored OTP from MongoDB
    const storedOTP = await OTP.findOne({ email });
    console.log('Stored OTP:', storedOTP);
    
    if (!storedOTP) {
      console.log('No OTP found for email:', email);
      return res.status(400).json({
        message: 'No OTP found for this email'
      });
    }

    if (storedOTP.expires < new Date()) {
      console.log('OTP expired for email:', email);
      await OTP.deleteOne({ email });
      return res.status(400).json({
        message: 'OTP has expired'
      });
    }

    if (storedOTP.otp !== otp) {
      console.log('Invalid OTP for email:', email);
      return res.status(400).json({
        message: 'Invalid OTP'
      });
    }

    // Don't delete OTP yet - we'll delete it after form submission
    console.log('OTP verified successfully for email:', email);

    res.status(200).json({
      message: 'OTP verified successfully',
      otp: otp // Send back the OTP for form submission
    });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({
      message: 'Error verifying OTP',
      error: error.message
    });
  }
});

// Send OTP before form submission
router.post('/resend-otp', async (req, res) => {
  console.log('[resend-otp] ====== OTP REQUEST START ======');
  console.log('[resend-otp] Request body:', req.body);
  console.log('[resend-otp] Request headers:', req.headers);
  
  const { email } = req.body;
  if (!email) {
    console.log('[resend-otp] No email provided');
    return res.status(400).json({ message: 'Email is required' });
  }
  
  console.log('[resend-otp] Email extracted:', email);
  
  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpires = new Date();
  otpExpires.setMinutes(otpExpires.getMinutes() + 10); // OTP expires in 10 minutes
  
  console.log('[resend-otp] Generated OTP:', otp);
  console.log('[resend-otp] OTP expires:', otpExpires);
  console.log('[resend-otp] Sending OTP to:', email, 'Code:', otp);
  
  try {
    // Store OTP in MongoDB
    console.log('[resend-otp] Storing OTP in MongoDB...');
    const storedOTP = await OTP.findOneAndUpdate(
      { email },
      { email, otp, expires: otpExpires },
      { upsert: true, new: true }
    );
    console.log('[resend-otp] OTP stored in MongoDB:', storedOTP);
    
    // Send OTP email using the new utility
    console.log('[resend-otp] Calling sendOtpEmail...');
    await sendOtpEmail(email, otp);
    console.log('[resend-otp] Email sent successfully via sendOtpEmail');
    
    const response = { success: true, message: 'OTP sent successfully', email };
    console.log('[resend-otp] Sending response:', response);
    res.status(200).json(response);
    
    console.log('[resend-otp] ====== OTP REQUEST COMPLETE ======');
  } catch (err) {
    console.error('[resend-otp] Error sending email:', err);
    console.error('[resend-otp] Error details:', {
      name: err.name,
      message: err.message,
      stack: err.stack
    });
    res.status(500).json({ success: false, message: 'Failed to send OTP', error: err.message });
  }
});

// Submit a new service form
router.post('/submit', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'additionalFiles', maxCount: 5 }
]), async (req, res) => {
  // Add request ID for tracking
  const requestId = Math.random().toString(36).substring(7);
  console.log(`[${requestId}] Starting form submission request`);
  console.log(`[${requestId}] 📩 Received body:`, JSON.stringify(req.body, null, 2));
  console.log(`[${requestId}] 📎 Received files:`, req.files ? JSON.stringify(req.files, null, 2) : 'No files');
  console.log(`[${requestId}] 🔍 Content-Type:`, req.get('Content-Type'));

  try {
    // Handle both JSON and multipart form data
    let serviceType, details;
    
    if (req.is('multipart/form-data')) {
      console.log(`[${requestId}] 📦 Processing as multipart/form-data`);
      // Handle multipart form data
      serviceType = req.body.serviceType;
      details = { ...req.body };
      
      // Handle uploaded files
      if (req.files) {
        if (req.files.image) {
          details.image = `/uploads/${req.files.image[0].filename}`;
        }
        if (req.files.additionalFiles) {
          details.additionalFiles = req.files.additionalFiles.map(file => `/uploads/${file.filename}`);
        }
      }

      // Map files to evidence for anonymous-complaint service
      if (serviceType === 'anonymous-complaint') {
        if (Array.isArray(details.additionalFiles) && details.additionalFiles.length > 0) {
          details.evidence = details.additionalFiles;
        }
      }
    } else {
      console.log(`[${requestId}] 📦 Processing as JSON`);
      // Handle JSON data
      ({ serviceType, details } = req.body);
      console.log(`[${requestId}] 🔍 Extracted JSON data:`, {
        serviceType,
        details: JSON.stringify(details, null, 2)
      });
    }

    console.log(`[${requestId}] 🔍 Extracted data:`, { 
      serviceType, 
      details: JSON.stringify(details, null, 2),
      hasItem: !!details?.item,
      itemValue: details?.item
    });

    if (!serviceType || !details) {
      console.log(`[${requestId}] Missing required fields:`, { serviceType: !!serviceType, hasDetails: !!details });
      return res.status(400).json({ message: 'Service type and details are required' });
    }

    console.log(`[${requestId}] Processing ${serviceType} form submission`);
    let form;

    // Create form based on service type
    switch (serviceType) {
      case 'senior-citizen':
        form = new SeniorCitizenForm({
          ...details,
          contactPhone: details.phone
        });
        break;

      case 'women-companion':
        form = new WomenCompanionForm(details);
        break;

      case 'lost-and-found':
        console.log(`[${requestId}] Creating Lost and Found form with details:`, JSON.stringify(details, null, 2));
        // Validate image requirement for found items
        if (!details.isLost && !details.image) {
          return res.status(400).json({ 
            message: 'Image is required for found items',
            errors: { image: { message: 'Image is required for found items' } }
          });
        }
        form = new LostAndFoundForm(details);
        break;

      case 'locked-house-monitoring':
        form = new LockedHouseMonitoringForm(details);
        break;

      case 'loud-speaker':
        form = new LoudSpeakerForm({
          // Core identity/contact fields
          name: details.name || details.eventName || details.contactName,
          email: details.email,
          phone: details.phone || details.contactPhone,
          aadhar: details.aadhar,
          
          // Address/Location
          address: details.address || details.location,
          location: details.location || details.address,
          
          // Event specifics (align with frontend fields)
          eventType: details.eventType || details.eventDetails,
          eventDate: details.eventDate || details.startDate,
          endDate: details.endDate,
          
          // Description
          description: details.description || details.eventDetails,
        });
        break;

      case 'anonymous-complaint':
        form = new AnonymousComplaintForm(details);
        break;

      default:
        console.log(`[${requestId}] Invalid service type:`, serviceType);
        return res.status(400).json({ message: 'Invalid service type' });
    }

    // Validate the form before saving
    const validationError = form.validateSync();
    if (validationError) {
      console.log(`[${requestId}] Validation errors:`, JSON.stringify(validationError.errors, null, 2));
      return res.status(400).json({
        message: 'Invalid form data',
        errors: validationError.errors
      });
    }

    console.log(`[${requestId}] Saving form to database...`);
    const savedForm = await form.save();
    console.log(`[${requestId}] Form saved successfully with ID:`, savedForm._id);

    // Send confirmation email if email is provided
    if (details.email) {
      try {
        console.log(`[${requestId}] Sending confirmation email to:`, details.email);
        const mailOptions = {
          from: 'botchat879@gmail.com',
          to: details.email,
          subject: 'Service Request Confirmation',
          html: `
            <h2>Service Request Confirmation</h2>
            <p>Your service request has been submitted successfully.</p>
            <p>Service Type: ${serviceType}</p>
            <p>Reference ID: ${savedForm._id}</p>
            <p>We will process your request and get back to you soon.</p>
          `
        };

        await transporter.sendMail(mailOptions);
        console.log(`[${requestId}] Confirmation email sent successfully`);
      } catch (emailError) {
        console.error(`[${requestId}] Email error:`, emailError.message);
        // Don't fail the request if email fails
      }
    }

    // Return success response
    console.log(`[${requestId}] Request completed successfully`);
    res.status(201).json({
      message: 'Form submitted successfully',
      formId: savedForm._id,
      serviceType: serviceType
    });

  } catch (error) {
    console.error(`[${requestId}] Error in form submission:`, {
      name: error.name,
      message: error.message
    });

    if (error.name === 'ValidationError') {
      console.log(`[${requestId}] Validation errors:`, JSON.stringify(error.errors, null, 2));
      return res.status(400).json({ 
        message: 'Invalid form data', 
        errors: error.errors 
      });
    }

    if (error.code === 11000) {
      return res.status(400).json({
        message: 'A form with this information already exists'
      });
    }

    res.status(500).json({
      message: 'Error submitting form',
      error: error.message
    });
  }
});

// Get all forms of a specific type
router.get('/:serviceType', async (req, res) => {
  try {
    const { serviceType } = req.params;
    let Form;
    
    switch (serviceType) {
      case 'senior-citizen':
        Form = SeniorCitizenForm;
        break;
      case 'women-companion':
        Form = WomenCompanionForm;
        break;
      case 'lost-and-found':
        Form = LostAndFoundForm;
        break;
      case 'locked-house-monitoring':
        Form = LockedHouseMonitoringForm;
        break;
      case 'loud-speaker':
        Form = LoudSpeakerForm;
        break;
      case 'anonymous-complaint':
        Form = AnonymousComplaintForm;
        break;
      default:
        return res.status(400).json({ message: 'Invalid service type' });
    }

    const forms = await Form.find().sort({ createdAt: -1 });
    res.status(200).json(forms);
  } catch (error) {
    console.error('Error fetching forms:', error);
    res.status(500).json({
      message: 'Error fetching forms',
      error: error.message
    });
  }
});

// Get a specific form by ID
router.get('/:serviceType/:id', async (req, res) => {
  try {
    const { serviceType, id } = req.params;
    let Form;
    
    switch (serviceType) {
      case 'senior-citizen':
        Form = SeniorCitizenForm;
        break;
      case 'women-companion':
        Form = WomenCompanionForm;
        break;
      case 'lost-and-found':
        Form = LostAndFoundForm;
        break;
      case 'locked-house-monitoring':
        Form = LockedHouseMonitoringForm;
        break;
      case 'loud-speaker':
        Form = LoudSpeakerForm;
        break;
      case 'anonymous-complaint':
        Form = AnonymousComplaintForm;
        break;
      default:
        return res.status(400).json({ message: 'Invalid service type' });
    }

    const form = await Form.findById(id);
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    res.status(200).json(form);
  } catch (error) {
    console.error('Error fetching form:', error);
    res.status(500).json({
      message: 'Error fetching form',
      error: error.message
    });
  }
});

// Delete a specific form by ID (admin only)
router.delete('/:serviceType/:id', async (req, res) => {
  try {
    const { serviceType, id } = req.params;
    let Form;
    switch (serviceType) {
      case 'senior-citizen':
        Form = SeniorCitizenForm;
        break;
      case 'women-companion':
        Form = WomenCompanionForm;
        break;
      case 'lost-and-found':
        Form = LostAndFoundForm;
        break;
      case 'locked-house-monitoring':
        Form = LockedHouseMonitoringForm;
        break;
      case 'loud-speaker':
        Form = LoudSpeakerForm;
        break;
      case 'anonymous-complaint':
        Form = AnonymousComplaintForm;
        break;
      default:
        return res.status(400).json({ message: 'Invalid service type' });
    }

    const deleted = await Form.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Form not found' });
    }
    res.status(200).json({ message: 'Form deleted successfully' });
  } catch (error) {
    console.error('Error deleting form:', error);
    res.status(500).json({
      message: 'Error deleting form',
      error: error.message
    });
  }
});

module.exports = router; 