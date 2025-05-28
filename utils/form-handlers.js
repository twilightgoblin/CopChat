// Get API URL from environment variable or use default
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'

// Helper function to handle form submission with preview mode
export const handleFormSubmit = async ({
  formData,
  setLoading,
  setError,
  setSuccess,
  setShowNotification,
  setNotificationMessage,
  setNotificationType,
  resetForm,
  serviceType
}) => {
  setLoading(true)
  setError("")

  try {
    // Check if we're in preview mode
    if (process.env.NEXT_PUBLIC_IS_PREVIEW === 'true') {
      // Simulate successful submission in preview
      console.log('Preview mode: Simulating form submission', formData)
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate network delay
      setSuccess(true)
      setShowNotification(true)
      setNotificationMessage(`Form submitted successfully! (Preview Mode)`)
      setNotificationType("success")
      resetForm()
      return
    }

    // Validate API URL
    if (!API_URL) {
      throw new Error('API URL is not configured. Please check your environment variables.')
    }

    // Add timeout to fetch request
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    try {
      const response = await fetch(`${API_URL}/api/service-forms/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          serviceType,
          details: formData
        }),
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `Server error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json().catch(() => ({}))
      
      // Check if the response indicates success
      if (data.success === false) {
        throw new Error(data.message || 'Form submission failed')
      }

      setSuccess(true)
      setShowNotification(true)
      setNotificationMessage("Form submitted successfully!")
      setNotificationType("success")
      resetForm()
    } catch (fetchError) {
      if (fetchError.name === 'AbortError') {
        throw new Error('Request timed out. Please try again.')
      }
      throw fetchError
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    
    // Handle specific error cases
    let errorMessage = error.message || "Failed to submit form. Please try again."
    
    if (error.message.includes('Failed to fetch')) {
      errorMessage = "Unable to connect to the server. Please check your internet connection and try again."
    } else if (error.message.includes('timeout')) {
      errorMessage = "The request took too long to complete. Please try again."
    } else if (error.message.includes('API URL is not configured')) {
      errorMessage = "The application is not properly configured. Please contact support."
    }

    setError(errorMessage)
    setShowNotification(true)
    setNotificationMessage(errorMessage)
    setNotificationType("error")
  } finally {
    setLoading(false)
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