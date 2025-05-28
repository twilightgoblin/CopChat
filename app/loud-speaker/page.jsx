"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/fade-in"
import { Notification } from "@/components/ui/notification"
import OTPVerification from "@/components/otp-verification"

// Get API URL from environment variable or use default
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'

export default function LoudSpeakerPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [aadhar, setAadhar] = useState("")
  const [address, setAddress] = useState("")
  const [eventType, setEventType] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [eventTime, setEventTime] = useState("")
  const [duration, setDuration] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")
  const [notificationType, setNotificationType] = useState("success")
  const [showOTPVerification, setShowOTPVerification] = useState(false)
  const [verifiedOTP, setVerifiedOTP] = useState(null)
  const [isVerified, setIsVerified] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address")
      setLoading(false)
      return
    }

    // Validate phone number
    if (!/^\d{10}$/.test(phone.replace(/\s/g, ""))) {
      setError("Please enter a valid 10-digit phone number")
      setLoading(false)
      return
    }

    // Validate Aadhar number only if provided
    const aadharWithoutSpaces = aadhar.replace(/\s/g, "")
    if (aadharWithoutSpaces && !/^\d{12}$/.test(aadharWithoutSpaces)) {
      setError("Please enter a valid 12-digit Aadhar number")
      setLoading(false)
      return
    }

    // Show OTP verification if not already verified
    if (!verifiedOTP) {
      setShowOTPVerification(true)
      setLoading(false)
      return
    }

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
        },
        otp: verifiedOTP
      }

      // Check if we're in preview mode
      if (process.env.NEXT_PUBLIC_IS_PREVIEW === 'true') {
        // Simulate successful submission in preview
        console.log('Preview mode: Simulating form submission', formData)
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate network delay
        setSuccess(true)
        setShowNotification(true)
        setNotificationMessage("Form submitted successfully! (Preview Mode)")
        setNotificationType("success")
        resetForm()
        return
      }

      const response = await fetch(`${API_URL}/api/service-forms/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
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

  // Helper function to reset form
  const resetForm = () => {
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
    setVerifiedOTP(null)
    setShowOTPVerification(false)
    setIsVerified(true)
  }

  const handleOTPVerified = (otp) => {
    setVerifiedOTP(otp)
    setShowOTPVerification(false)
    setIsVerified(true)
    // Automatically submit the form after OTP verification
    handleSubmit(new Event('submit'))
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Please enter a valid email address")
    } else {
      setError("")
    }
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "")
    setPhone(value.substring(0, 10))
    if (value.length > 0 && value.length !== 10) {
      setError("Please enter a valid 10-digit phone number")
    } else {
      setError("")
    }
  }

  const handleAadharChange = (e) => {
    const value = e.target.value.replace(/\D/g, "")
    let formatted = ""
    for (let i = 0; i < value.length && i < 12; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += " "
      }
      formatted += value[i]
    }
    setAadhar(formatted)
    if (value.length > 0 && value.length !== 12) {
      setError("Please enter a valid 12-digit Aadhar number")
    } else {
      setError("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-100 to-white py-12">
      {showNotification && (
        <Notification
          message={notificationMessage}
          type={notificationType}
          onClose={() => setShowNotification(false)}
        />
      )}
      <div className="container mx-auto px-4 max-w-2xl">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-violet-900 mb-8">
            Loudspeaker Permission
          </h1>
        </FadeIn>

        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            {!success ? (
              <>
                {showOTPVerification ? (
                  <div className="max-w-md mx-auto">
                    <h2 className="text-xl font-semibold mb-4">Verify Your Email</h2>
                    <p className="text-gray-600 mb-4">
                      Please enter the OTP sent to your email address ({email})
                    </p>
                    <OTPVerification 
                      email={email} 
                      onVerified={handleOTPVerified}
                    />
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name (Required)</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email (Required)</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        placeholder="Enter your email address"
                      />
                      {error && error.includes("email") && (
                        <div className="flex items-center text-yellow-600 mt-1">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          <span>{error}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Required)</Label>
                      <Input
                        id="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                        placeholder="Enter your 10-digit phone number"
                        type="tel"
                      />
                      {error && error.includes("phone") && (
                        <div className="flex items-center text-yellow-600 mt-1">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          <span>{error}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="aadhar">Aadhar Number (Optional)</Label>
                      <Input
                        id="aadhar"
                        value={aadhar}
                        onChange={handleAadharChange}
                        placeholder="XXXX XXXX XXXX"
                      />
                      {error && error.includes("Aadhar") && (
                        <div className="flex items-center text-yellow-600 mt-1">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          <span>{error}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Event Address (Required)</Label>
                      <Textarea
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        placeholder="Enter the event venue address"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eventType">Event Type (Required)</Label>
                      <Input
                        id="eventType"
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        required
                        placeholder="e.g., Wedding, Festival, Religious Event"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="eventDate">Event Date (Required)</Label>
                        <Input
                          id="eventDate"
                          type="date"
                          value={eventDate}
                          onChange={(e) => setEventDate(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="eventTime">Event Time (Required)</Label>
                        <Input
                          id="eventTime"
                          type="time"
                          value={eventTime}
                          onChange={(e) => setEventTime(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration (Required)</Label>
                      <Input
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                        placeholder="e.g., 2 hours, 1 day"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Additional Information (Required)</Label>
                      <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        placeholder="Provide any additional information about the event"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-violet-600 hover:bg-violet-700"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit Request"}
                    </Button>
                  </form>
                )}
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <h2 className="text-2xl font-bold text-violet-900 mb-4">
                  Thank You!
                </h2>
                <p className="text-violet-700">
                  Your loudspeaker permission request has been submitted successfully.
                  You will receive a verification call soon.
                </p>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 