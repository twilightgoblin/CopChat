import { NextResponse } from 'next/server';
import { API_ENDPOINTS } from '@/utils/api';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json(
        { message: 'No file provided' },
        { status: 400 }
      );
    }

    // Forward the file to the backend service
    const backendFormData = new FormData();
    backendFormData.append('file', file);

    const response = await fetch(API_ENDPOINTS.upload, {
      method: 'POST',
      body: backendFormData
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || 'Failed to upload file' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 