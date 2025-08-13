const getApiUrl = () => {
  // In production, this should be your actual backend URL
  // You'll need to set this in Netlify's environment variables
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
  
  // Remove trailing /api if it exists to avoid double /api/api/
  // Force redeploy to pick up environment variable changes
  return baseUrl.replace(/\/api\/?$/, '');
};

export const API_ENDPOINTS = {
  serviceForms: {
    submit: `${getApiUrl()}/api/service-forms/submit`,
    verifyOtp: `${getApiUrl()}/api/verify-otp`,
    resendOtp: `${getApiUrl()}/api/resend-otp`,
  },
  updates: {
    list: `${getApiUrl()}/api/updates`,
    single: (id) => `${getApiUrl()}/api/updates/${id}`,
  },
  upload: `${getApiUrl()}/api/upload`,
  testimonials: `${getApiUrl()}/api/testimonials`,
}; 