const getApiUrl = () => {
  // In production, this should be your actual backend URL
  // You'll need to set this in Netlify's environment variables
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
};

export const API_ENDPOINTS = {
  serviceForms: {
    submit: `${getApiUrl()}/api/service-forms/submit`,
    verifyOtp: '/api/verify-otp',
    resendOtp: '/api/resend-otp',
  },
  updates: {
    list: `${getApiUrl()}/api/updates`,
    single: (id) => `${getApiUrl()}/api/updates/${id}`,
  },
  upload: `${getApiUrl()}/api/upload`,
  testimonials: `${getApiUrl()}/api/testimonials`,
}; 