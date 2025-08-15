import { NextResponse } from 'next/server';
import { API_ENDPOINTS } from '@/utils/api';

export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/service-forms`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
         const data = await response.json();
         return new Response(JSON.stringify(data), { status: response.status });
      } else {
         return new Response(JSON.stringify({ message: "Server returned an error (status: " + response.status + ") – not JSON." }), { status: 500 });
      }
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: response.status });
  } catch (error) {
    console.error("Error in resend-otp proxy:", error);
    return new Response(JSON.stringify({ message: error.message || "Internal server error" }), { status: 500 });
  }
} 