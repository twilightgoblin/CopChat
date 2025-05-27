const express = require('express');
const router = express.Router();
const LostAndFoundForm = require('../models/LostAndFoundForm');
const LockedHouseMonitoringForm = require('../models/LockedHouseMonitoringForm');
const WomenCompanionForm = require('../models/WomenCompanionForm');
const LoudSpeakerForm = require('../models/LoudSpeakerForm');
const AnonymousComplaintForm = require('../models/AnonymousComplaintForm');
const SeniorCitizenForm = require('../models/SeniorCitizenForm');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const mongoose = require('mongoose');

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
  }
});

// Verify transporter configuration
transporter.verify(function(error, success) {
  if (error) {
    console.error('SMTP configuration error:', error);
  } else {
    console.log('SMTP server is ready to take our messages');
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

    // Send OTP email
    const mailOptions = {
      from: 'botchat879@gmail.com',
      to: email,
      subject: 'OTP for Police Service Request',
      html: `
        <h2>OTP for Police Service Request</h2>
        <p>Your OTP is: <strong>${otp}</strong></p>
        <p>This OTP will expire in 10 minutes.</p>
        <p>Please enter this OTP to submit your service request.</p>
      `
    };

    await transporter.sendMail(mailOptions);

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
  try {
    const { email } = req.body;
    console.log('Resending OTP to:', email); // Debug log

    if (!email) {
      console.log('Email is required'); // Debug log
      return res.status(400).json({
        message: 'Email is required'
      });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date();
    otpExpires.setMinutes(otpExpires.getMinutes() + 10); // OTP expires in 10 minutes

    console.log('Generated OTP:', { email, otp, expires: otpExpires }); // Debug log

    // Store OTP in MongoDB
    const storedOTP = await OTP.findOneAndUpdate(
      { email },
      { 
        email,
        otp,
        expires: otpExpires
      },
      { upsert: true, new: true }
    );
    console.log('Stored OTP in database:', storedOTP); // Debug log

    // Send OTP email
    const mailOptions = {
      from: 'botchat879@gmail.com',
      to: email,
      subject: 'OTP for Police Service Request',
      html: `
        <h2>OTP for Police Service Request</h2>
        <p>Your OTP is: <strong>${otp}</strong></p>
        <p>This OTP will expire in 10 minutes.</p>
        <p>Please enter this OTP to submit your service request.</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('OTP email sent successfully to:', email); // Debug log

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

// Submit a new service form
router.post('/submit', async (req, res) => {
  try {
    console.log('Received form submission request:', req.body);
    const { serviceType, details } = req.body;

    if (!serviceType || !details) {
      console.error('Missing required fields:', { serviceType, details });
      return res.status(400).json({ message: 'Service type and details are required' });
    }

    console.log('Processing form submission for service type:', serviceType);
    let form;

    // Create form based on service type
    switch (serviceType) {
      case 'senior-citizen':
        console.log('Creating senior citizen form with details:', details);
        form = new SeniorCitizenForm({
          ...details,
          contactPhone: details.phone // Map phone to contactPhone
        });
        break;

      case 'women-companion':
        console.log('Creating women companion form with details:', details);
        form = new WomenCompanionForm(details);
        break;

      case 'lost-and-found':
        console.log('Creating lost and found form with details:', details);
        form = new LostAndFoundForm({
          ...details,
          item: details.itemType // Map itemType to item
        });
        break;

      case 'locked-house-monitoring':
        console.log('Creating locked house monitoring form with details:', details);
        form = new LockedHouseMonitoringForm(details);
        break;

      case 'loud-speaker':
        console.log('Creating loud speaker form with details:', details);
        form = new LoudSpeakerForm({
          ...details,
          name: details.eventName, // Map eventName to name
          eventDate: details.date, // Map date to eventDate
          startTime: details.time, // Map time to startTime
          endTime: details.duration // Map duration to endTime
        });
        break;

      case 'anonymous-complaint':
        console.log('Creating anonymous complaint form with details:', details);
        form = new AnonymousComplaintForm(details);
        break;

      default:
        console.error('Invalid service type:', serviceType);
        return res.status(400).json({ message: 'Invalid service type' });
    }

    // Validate the form before saving
    const validationError = form.validateSync();
    if (validationError) {
      console.error('Form validation error:', validationError);
      return res.status(400).json({
        message: 'Invalid form data',
        errors: validationError.errors
      });
    }

    console.log('Attempting to save form to database...');
    const savedForm = await form.save();
    console.log('Form saved successfully:', {
      id: savedForm._id,
      serviceType: serviceType,
      createdAt: savedForm.createdAt
    });

    // Send confirmation email if email is provided
    if (details.email) {
      try {
        console.log('Sending confirmation email to:', details.email);
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
        console.log('Confirmation email sent successfully');
      } catch (emailError) {
        console.error('Error sending confirmation email:', emailError);
        // Don't fail the request if email fails
      }
    }

    // Return success response
    res.status(201).json({
      message: 'Form submitted successfully',
      formId: savedForm._id,
      serviceType: serviceType
    });

  } catch (error) {
    console.error('Error submitting form:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });

    // Check if it's a validation error
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Invalid form data',
        errors: error.errors
      });
    }

    // Check if it's a duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({
        message: 'A form with this information already exists'
      });
    }

    // For other errors
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

module.exports = router; 