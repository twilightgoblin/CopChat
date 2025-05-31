import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
if (!mongoose.connection.readyState) {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Generate OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Store OTPs (in production, use a proper database)
const otpStore = new Map();

// Handle form submission
export async function POST(request) {
  try {
    const formData = await request.json();
    const { serviceType, details } = formData;

    // Validate required fields
    if (!serviceType || !details) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate and store OTP
    const otp = generateOTP();
    otpStore.set(details.email, {
      otp,
      timestamp: Date.now(),
      serviceType,
      details,
    });

    // Send OTP email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: details.email,
      subject: 'OTP Verification - Police Service Portal',
      html: `
        <h1>OTP Verification</h1>
        <p>Your OTP for ${serviceType} service is: <strong>${otp}</strong></p>
        <p>This OTP is valid for 10 minutes.</p>
      `,
    });

    return NextResponse.json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error in form submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle OTP verification
export async function PUT(request) {
  try {
    const { email, otp } = await request.json();

    const storedData = otpStore.get(email);
    if (!storedData) {
      return NextResponse.json(
        { error: 'No OTP found for this email' },
        { status: 400 }
      );
    }

    // Check if OTP is expired (10 minutes)
    if (Date.now() - storedData.timestamp > 10 * 60 * 1000) {
      otpStore.delete(email);
      return NextResponse.json(
        { error: 'OTP expired' },
        { status: 400 }
      );
    }

    // Verify OTP
    if (storedData.otp !== otp) {
      return NextResponse.json(
        { error: 'Invalid OTP' },
        { status: 400 }
      );
    }

    // OTP is valid, process the form submission
    const { serviceType, details } = storedData;

    // Here you would typically save to database
    // For now, we'll just return success
    otpStore.delete(email);

    return NextResponse.json({
      message: 'Form submitted successfully',
      serviceType,
      details,
    });
  } catch (error) {
    console.error('Error in OTP verification:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle OTP resend
export async function PATCH(request) {
  try {
    const { email } = await request.json();

    const storedData = otpStore.get(email);
    if (!storedData) {
      return NextResponse.json(
        { error: 'No pending submission found for this email' },
        { status: 400 }
      );
    }

    // Generate new OTP
    const newOtp = generateOTP();
    otpStore.set(email, {
      ...storedData,
      otp: newOtp,
      timestamp: Date.now(),
    });

    // Send new OTP email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'New OTP Verification - Police Service Portal',
      html: `
        <h1>New OTP Verification</h1>
        <p>Your new OTP for ${storedData.serviceType} service is: <strong>${newOtp}</strong></p>
        <p>This OTP is valid for 10 minutes.</p>
      `,
    });

    return NextResponse.json({ message: 'New OTP sent successfully' });
  } catch (error) {
    console.error('Error in OTP resend:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 