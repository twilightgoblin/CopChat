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
  content: String,
  rating: Number,
  createdAt: { type: Date, default: Date.now }
});

// Create model if it doesn't exist
const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema);

// Get all testimonials
export async function GET() {
  try {
    const testimonials = await Testimonial.find()
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
    if (!testimonialData.name || !testimonialData.content || !testimonialData.rating) {
      return NextResponse.json(
        { error: 'Name, content, and rating are required' },
        { status: 400 }
      );
    }

    // Validate rating
    if (testimonialData.rating < 1 || testimonialData.rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    const testimonial = new Testimonial(testimonialData);
    await testimonial.save();

    return NextResponse.json({
      message: 'Testimonial submitted successfully',
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