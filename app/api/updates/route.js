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

// Update Schema
const updateSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  priority: { type: String, enum: ['low', 'medium', 'high'] },
  createdAt: { type: Date, default: Date.now },
  active: { type: Boolean, default: true }
});

// Create model if it doesn't exist
const Update = mongoose.models.Update || mongoose.model('Update', updateSchema);

// Get all active updates
export async function GET() {
  try {
    const updates = await Update.find({ active: true })
      .sort({ priority: -1, createdAt: -1 })
      .limit(20);
    
    return NextResponse.json(updates);
  } catch (error) {
    console.error('Error fetching updates:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Create new update (admin only)
export async function POST(request) {
  try {
    const updateData = await request.json();
    
    // Validate required fields
    if (!updateData.title || !updateData.content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const update = new Update({
      ...updateData,
      active: true
    });

    await update.save();

    return NextResponse.json({
      message: 'Update created successfully',
      update
    });
  } catch (error) {
    console.error('Error creating update:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Update an existing update (admin only)
export async function PUT(request) {
  try {
    const { id, ...updateData } = await request.json();
    
    if (!id) {
      return NextResponse.json(
        { error: 'Update ID is required' },
        { status: 400 }
      );
    }

    const update = await Update.findByIdAndUpdate(
      id,
      { ...updateData },
      { new: true }
    );

    if (!update) {
      return NextResponse.json(
        { error: 'Update not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Update modified successfully',
      update
    });
  } catch (error) {
    console.error('Error updating update:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 