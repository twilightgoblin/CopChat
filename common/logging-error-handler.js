// Common logging error handler for the application
const loggingErrorHandler = {
  // Handle general errors
  handleError: (error, context = '') => {
    console.error(`[${context}] Error:`, error);
    
    // In production, you might want to send this to a logging service
    if (process.env.NODE_ENV === 'production') {
      // Add production logging logic here if needed
      // For example, sending to a logging service
    }
  },

  // Handle warnings
  handleWarning: (warning, context = '') => {
    console.warn(`[${context}] Warning:`, warning);
  },

  // Handle info messages
  handleInfo: (message, context = '') => {
    console.info(`[${context}] Info:`, message);
  },

  // Handle debug messages
  handleDebug: (message, context = '') => {
    if (process.env.NODE_ENV !== 'production') {
      console.debug(`[${context}] Debug:`, message);
    }
  },

  // Handle API errors specifically
  handleApiError: (error, endpoint = '') => {
    console.error(`[API Error] ${endpoint}:`, error);
    
    // Format error for API responses
    return {
      message: error.message || 'An unexpected error occurred',
      status: error.status || 500,
      endpoint
    };
  }
};

module.exports = loggingErrorHandler; 