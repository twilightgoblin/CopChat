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

// Update Schema - unified with admin
const updateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['Announcement', 'Event', 'News', 'Alert'],
    default: 'Announcement'
  },
  date: { type: Date, default: Date.now },
  isImportant: { type: Boolean, default: false },
  active: { type: Boolean, default: true }
});

// Create model if it doesn't exist
const Update = mongoose.models.Update || mongoose.model('Update', updateSchema);

// Get all active updates
export async function GET() {
  try {
    const updates = await Update.find({ active: true })
      .sort({ isImportant: -1, date: -1 })
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

// Delete an update (admin only)
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'Update ID is required' },
        { status: 400 }
      );
    }

    const update = await Update.findByIdAndDelete(id);

    if (!update) {
      return NextResponse.json(
        { error: 'Update not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Update deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting update:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 