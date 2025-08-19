// Central API endpoints
import { API_ENDPOINTS } from '@/utils/api'

const MAX_RETRIES = 2;
const RETRY_DELAY = 1000; // 1 second

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Add submission lock at the top of the file
let isSubmitting = false;

// Helper function to handle form submission with preview mode
export const handleFormSubmit = async (
  formData,
  setLoading,
  setError,
  setSuccess,
  setShowNotification,
  setNotificationMessage,
  setNotificationType,
  resetForm,
  serviceType
) => {
  // Prevent duplicate submissions
  if (isSubmitting) {
    console.log('Form submission already in progress, ignoring duplicate submission');
    return;
  }

  try {
    isSubmitting = true;

    if (!formData) {
      console.error('No form data provided');
      if (typeof setError === 'function') setError('Form data is missing');
      if (typeof setNotificationMessage === 'function') setNotificationMessage('Error: Form data is missing');
      if (typeof setNotificationType === 'function') setNotificationType('error');
      if (typeof setShowNotification === 'function') setShowNotification(true);
      return;
    }

    if (!serviceType) {
      console.error('No service type provided');
      if (typeof setError === 'function') setError('Service type is missing');
      if (typeof setNotificationMessage === 'function') setNotificationMessage('Error: Service type is missing');
      if (typeof setNotificationType === 'function') setNotificationType('error');
      if (typeof setShowNotification === 'function') setShowNotification(true);
      return;
    }

    // Validate API base URL (used by API_ENDPOINTS)
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
    if (!apiUrl) {
      console.error('API URL not configured');
      if (typeof setError === 'function') setError('Server configuration error. Please try again later.');
      if (typeof setNotificationMessage === 'function') setNotificationMessage('Error: Server configuration error');
      if (typeof setNotificationType === 'function') setNotificationType('error');
      if (typeof setShowNotification === 'function') setShowNotification(true);
      return;
    }

    // Check if we're in preview mode
    if (process.env.NEXT_PUBLIC_IS_PREVIEW === 'true') {
      console.log('Preview mode: Simulating form submission', { serviceType, formData });
      await sleep(1000); // Simulate network delay
      if (typeof setSuccess === 'function') setSuccess(true);
      if (typeof setNotificationMessage === 'function') setNotificationMessage('Form submitted successfully (Preview Mode)');
      if (typeof setNotificationType === 'function') setNotificationType('success');
      if (typeof setShowNotification === 'function') setShowNotification(true);
      if (typeof resetForm === 'function') resetForm();
      return;
    }

    let retryCount = 0;
    let lastError = null;

    while (retryCount <= MAX_RETRIES) {
      try {
        if (typeof setLoading === 'function') setLoading(true);
        if (typeof setError === 'function') setError(null);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

        // Check if formData is FormData instance
        const isFormData = formData instanceof FormData;
        
        // Prepare the request payload
        let requestBody;
        let headers = {
          'Accept': 'application/json',
        };

        if (isFormData) {
          // For FormData (file uploads), don't set Content-Type header
          // Browser will set it automatically with the correct boundary
          requestBody = formData;
          formData.append('serviceType', serviceType);
        } else {
          // For JSON data
          headers['Content-Type'] = 'application/json';
          requestBody = JSON.stringify({
            serviceType,
            details: formData
          });
        }

        console.log('formData type:', isFormData ? 'FormData' : 'JSON');
        console.log('formData:', formData);

        const response = await fetch(API_ENDPOINTS.serviceForms.submit, {
          method: 'POST',
          headers,
          body: requestBody,
          signal: controller.signal,
          credentials: 'include'
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error('Server response error:', {
            status: response.status,
            statusText: response.statusText,
            errorData
          });
          throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Server response:', data);

        // Treat any successful HTTP response as success regardless of a 'success' flag
        if (response.ok) {
          if (typeof setSuccess === 'function') setSuccess(true);
          if (typeof setNotificationMessage === 'function') setNotificationMessage(data.message || 'Form submitted successfully');
          if (typeof setNotificationType === 'function') setNotificationType('success');
          if (typeof setShowNotification === 'function') setShowNotification(true);
          if (typeof resetForm === 'function') resetForm();
          return;
        } else {
          throw new Error(data.message || 'Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        lastError = error;
        
        // Only retry on network errors or server errors (5xx)
        if (error.name === 'AbortError' || (error.message && error.message.includes('500'))) {
          if (retryCount < MAX_RETRIES) {
            console.log(`Retrying submission (attempt ${retryCount + 1}/${MAX_RETRIES})...`);
            await sleep(RETRY_DELAY);
            retryCount++;
            continue;
          }
        }
        
        // For other errors, don't retry
        if (typeof setError === 'function') setError(error.message || 'Failed to submit form. Please try again.');
        if (typeof setNotificationMessage === 'function') setNotificationMessage(error.message || 'Failed to submit form. Please try again.');
        if (typeof setNotificationType === 'function') setNotificationType('error');
        if (typeof setShowNotification === 'function') setShowNotification(true);
        break;
      } finally {
        if (typeof setLoading === 'function') setLoading(false);
      }
    }

    if (retryCount > MAX_RETRIES) {
      throw new Error('Maximum retry attempts reached. Please try again later.');
    }
  } finally {
    isSubmitting = false;
    if (typeof setLoading === 'function') setLoading(false);
  }
}

// Helper function to validate email
export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Helper function to validate phone
export const validatePhone = (phone) => {
  return /^\d{10}$/.test(phone.replace(/\s/g, ""))
}

// Helper function to validate Aadhar
export const validateAadhar = (aadhar) => {
  const aadharWithoutSpaces = aadhar.replace(/\s/g, "")
  return !aadharWithoutSpaces || /^\d{12}$/.test(aadharWithoutSpaces)
}

// Helper function to format Aadhar number
export const formatAadhar = (value) => {
  const digits = value.replace(/\D/g, "")
  let formatted = ""

  for (let i = 0; i < digits.length && i < 12; i++) {
    if (i > 0 && i % 4 === 0) {
      formatted += " "
    }
    formatted += digits[i]
  }

  return formatted
} 