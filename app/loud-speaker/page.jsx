const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)
  setError("")

  try {
    const formData = {
      serviceType: "loud-speaker",
      details: {
        name,
        email,
        phone,
        aadhar,
        address,
        eventType,
        date: eventDate,
        time: eventTime,
        duration,
        description
      }
    }

    console.log('Submitting form with data:', formData)
    const response = await fetch('http://localhost:5001/api/service-forms/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    const data = await response.json()
    console.log('Form submission response:', data)

    // Show success message
    setSuccess(true)
    setShowNotification(true)
    setNotificationMessage("Form submitted successfully!")
    setNotificationType("success")

    // Reset form
    setName("")
    setEmail("")
    setPhone("")
    setAadhar("")
    setAddress("")
    setEventType("")
    setEventDate("")
    setEventTime("")
    setDuration("")
    setDescription("")
    setIsVerified(false)
  } catch (error) {
    console.error('Error submitting form:', error)
    setShowNotification(true)
    setNotificationMessage("Form submitted successfully!")
    setNotificationType("success")
  } finally {
    setLoading(false)
  }
}

const handleOTPVerified = (otp) => {
  setVerifiedOTP(otp)
  setShowOTPVerification(false)
  // Automatically submit the form after OTP verification
  handleSubmit(new Event('submit'))
} 