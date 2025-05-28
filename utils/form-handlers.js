// Get API URL from environment variable or use default
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'

const MAX_RETRIES = 2;
const RETRY_DELAY = 1000; // 1 second

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

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
  endpoint = '/api/submit-form'
) => {
  if (!formData) {
    console.error('No form data provided');
    setError('Form data is missing');
    setNotificationMessage('Error: Form data is missing');
    setNotificationType('error');
    setShowNotification(true);
    return;
  }

  // Validate API URL
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    console.error('API URL not configured');
    setError('Server configuration error. Please try again later.');
    setNotificationMessage('Error: Server configuration error');
    setNotificationType('error');
    setShowNotification(true);
    return;
  }

  // Check if we're in preview mode
  if (process.env.NEXT_PUBLIC_IS_PREVIEW === 'true') {
    console.log('Preview mode: Simulating form submission');
    await sleep(1000); // Simulate network delay
    setSuccess(true);
    setNotificationMessage('Form submitted successfully (Preview Mode)');
    setNotificationType('success');
    setShowNotification(true);
    resetForm();
    return;
  }

  let retryCount = 0;
  let lastError = null;

  while (retryCount <= MAX_RETRIES) {
    try {
      setLoading(true);
      setError(null);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch(`${apiUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
        credentials: 'include'
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        setSuccess(true);
        setNotificationMessage(data.message || 'Form submitted successfully');
        setNotificationType('success');
        setShowNotification(true);
        resetForm();
        return;
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      lastError = error;
      console.error(`Attempt ${retryCount + 1} failed:`, error);

      if (error.name === 'AbortError') {
        throw new Error('Request timed out. Please try again.');
      }

      if (retryCount < MAX_RETRIES) {
        retryCount++;
        await sleep(RETRY_DELAY * retryCount); // Exponential backoff
        continue;
      }

      // Handle specific error types
      let errorMessage = 'An error occurred while submitting the form.';
      
      if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
        errorMessage = 'Network error. Please check your internet connection and try again.';
      } else if (error.message.includes('CORS')) {
        errorMessage = 'Server configuration error. Please try again later.';
      } else if (error.message.includes('timeout')) {
        errorMessage = 'Request timed out. Please try again.';
      } else if (error.message) {
        errorMessage = error.message;
      }

      setError(errorMessage);
      setNotificationMessage(errorMessage);
      setNotificationType('error');
      setShowNotification(true);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  // If we've exhausted all retries, throw the last error
  throw lastError;
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