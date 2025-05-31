import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
if (!mongoose.connection.readyState) {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

// Testimonial Schema
const testimonialSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  rating: Number,
  createdAt: { type: Date, default: Date.now },
  approved: { type: Boolean, default: false }
});

// Create model if it doesn't exist
const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema);

// Get all approved testimonials
export async function GET() {
  try {
    const testimonials = await Testimonial.find({ approved: true })
      .sort({ createdAt: -1 })
      .limit(10);
    
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Submit new testimonial
export async function POST(request) {
  try {
    const testimonialData = await request.json();
    
    // Validate required fields
    if (!testimonialData.name || !testimonialData.message) {
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      );
    }

    const testimonial = new Testimonial({
      ...testimonialData,
      approved: false // Requires admin approval
    });

    await testimonial.save();

    return NextResponse.json({
      message: 'Testimonial submitted successfully. It will be visible after approval.',
      testimonial
    });
  } catch (error) {
    console.error('Error submitting testimonial:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 