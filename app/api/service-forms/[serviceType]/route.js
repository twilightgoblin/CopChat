import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5001';

export async function GET(req, { params }) {
  const { serviceType } = params;
  try {
    const res = await fetch(`${BACKEND_URL}/api/service-forms/${serviceType}`);
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch data', error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const { serviceType } = params;
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();
  try {
    const res = await fetch(`${BACKEND_URL}/api/service-forms/${serviceType}/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to delete entry', error: error.message }, { status: 500 });
  }
} 