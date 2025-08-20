export const getApiUrl = () => {
  // In production, this should be your actual backend URL
  // You'll need to set this in Netlify's environment variables
  const rawBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

  // Normalize: remove any trailing slashes first
  let normalized = rawBaseUrl.replace(/\/+$/, '');

  // Then remove trailing /api (with or without a slash) to avoid /api/api
  normalized = normalized.replace(/\/api\/?$/, '');

  return normalized;
};

export const API_ENDPOINTS = {
  serviceForms: {
    submit: `${getApiUrl()}/api/service-forms/submit`,
    verifyOtp: `${getApiUrl()}/api/verify-otp`,
    resendOtp: `${getApiUrl()}/api/resend-otp`, // Using the direct working route
  },
  updates: {
    list: `${getApiUrl()}/api/updates`,
    single: (id) => `${getApiUrl()}/api/updates/${id}`,
  },
  upload: `${getApiUrl()}/api/upload`,
  testimonials: `${getApiUrl()}/api/testimonials`,
  admin: {
    // Service forms admin endpoints
    serviceFormsList: (serviceType) => `${getApiUrl()}/api/service-forms/${serviceType}`,
    serviceFormsDelete: (serviceType, id) => `${getApiUrl()}/api/service-forms/${serviceType}/${id}`,

    // Testimonials admin endpoints
    testimonialsList: `${getApiUrl()}/api/testimonials/admin`,
    testimonialsDelete: (id) => `${getApiUrl()}/api/testimonials/${id}`,
    testimonialsUpdateStatus: (id) => `${getApiUrl()}/api/testimonials/${id}/status`,
  },
}; 