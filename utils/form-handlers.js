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

    const response = await fetch(`${API_URL}/api/service-forms/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        serviceType,
        details: formData
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || 'Failed to submit form')
    }

    setSuccess(true)
    setShowNotification(true)
    setNotificationMessage("Form submitted successfully!")
    setNotificationType("success")
    resetForm()
  } catch (error) {
    console.error('Error submitting form:', error)
    setError(error.message || "Failed to submit form. Please try again.")
    setShowNotification(true)
    setNotificationMessage(error.message || "Failed to submit form. Please try again.")
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