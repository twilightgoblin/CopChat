"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Volume2, CheckCircle, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/fade-in"
import { Notification } from "@/components/ui/notification"
import { handleFormSubmit, validateEmail, validatePhone, validateAadhar, formatAadhar } from "@/utils/form-handlers"
import OTPVerification from "@/components/otp-verification"

export default function LoudspeakerEventsPermissionPage() {
  const [eventName, setEventName] = useState("")
  const [eventDetails, setEventDetails] = useState("")
  const [contactName, setContactName] = useState("")
  const [email, setEmail] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const [aadhar, setAadhar] = useState("")
  const [location, setLocation] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [aadharError, setAadharError] = useState("")
  const [submitError, setSubmitError] = useState("")
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")
  const [notificationType, setNotificationType] = useState("success")

  // OTP states
  const [verifiedOTP, setVerifiedOTP] = useState(null)

  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError("")
    setIsSubmitting(true)

    // Validate email
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address")
      return
    }

    // Validate phone number
    if (!validatePhone(contactPhone)) {
      setPhoneError("Please enter a valid 10-digit phone number")
      return
    }

    // Validate Aadhar number only if provided
    if (!validateAadhar(aadhar)) {
      setAadharError("Please enter a valid 12-digit Aadhar number")
      return
    }

    if (!verifiedOTP) {
      setSubmitError("Please verify OTP before submitting the form.")
      return
    }

    try {
      const formData = {
        name: eventName,
        email,
        phone: contactPhone,
        aadhar,
        address: location,
        eventType: eventDetails,
        eventDate: startDate,
        endDate,
        description: eventDetails,
        contactName,
        otp: verifiedOTP,
      }

      await handleFormSubmit(
        formData,
        setIsSubmitting,
        setSubmitError,
        setSubmitted,
        setShowNotification,
        setNotificationMessage,
        setNotificationType,
        resetForm,
        'loud-speaker'
      )

      // Ensure only one notification is shown at a time
      setShowNotification(false);
      setTimeout(() => {
        setNotificationMessage("✅ Loudspeaker event permission request submitted successfully! We will process your request and get back to you soon.");
        setNotificationType("success");
        setShowNotification(true);
      }, 10);
      setSubmitted(true);
      resetForm();
    } catch (error) {
      setIsSubmitting(false)
      setShowNotification(false);
      setTimeout(() => {
        setSubmitError(error.message || "Failed to submit form. Please try again.");
        setNotificationMessage(error.message || "Failed to submit form. Please try again.");
        setNotificationType("error");
        setShowNotification(true);
      }, 10);
    }
  }

  const resetForm = () => {
    setEventName("")
    setEventDetails("")
    setContactName("")
    setEmail("")
    setContactPhone("")
    setAadhar("")
    setLocation("")
    setStartDate("")
    setEndDate("")
    setEmailError("")
    setPhoneError("")
    setAadharError("")
    setSubmitError("")
    setVerifiedOTP(null)
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    if (value && !validateEmail(value)) {
      setEmailError("Please enter a valid email address")
    } else {
      setEmailError("")
    }
    setVerifiedOTP(null)
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "")
    setContactPhone(value.substring(0, 10))
    if (value.length > 0 && value.length !== 10) {
      setPhoneError("Please enter a valid 10-digit phone number")
    } else {
      setPhoneError("")
    }
  }

  const handleAadharChange = (e) => {
    const formatted = formatAadhar(e.target.value)
    setAadhar(formatted)
    if (formatted.replace(/\s/g, "").length > 0 && !validateAadhar(formatted)) {
      setAadharError("Please enter a valid 12-digit Aadhar number")
    } else {
      setAadharError("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-100 to-white py-12">
      {showNotification && (
        <Notification
          message={notificationMessage}
          type={notificationType}
          onClose={() => {
            setShowNotification(false);
            if (notificationType === 'success') {
              setSubmitted(true);
            }
          }}
        />
      )}
      <div className="container mx-auto px-4 max-w-2xl">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-violet-900 mb-4">
            Loudspeaker & Events Permission
          </h1>
          <p className="text-lg text-violet-700 text-center mb-8">
            Apply for permission to use loudspeakers or host events
          </p>
        </FadeIn>

        <Card className="bg-white shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              <Volume2 className="h-12 w-12 text-violet-600" />
            </div>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="eventName">Event Name (Required)</Label>
                  <Input
                    id="eventName"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    required
                    placeholder="Enter event name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventDetails">Event Details (Required)</Label>
                  <Textarea
                    id="eventDetails"
                    value={eventDetails}
                    onChange={(e) => setEventDetails(e.target.value)}
                    required
                    placeholder="Provide details about the event, expected attendees, etc."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Person Name (Required)</Label>
                  <Input
                    id="contactName"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                    placeholder="Enter contact person name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email (Required)</Label>
                  <div className="flex gap-2 items-center">
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      placeholder="Enter your email address"
                    />
                    {validateEmail(email) && (
                      <OTPVerification email={email} onVerified={setVerifiedOTP} />
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Contact Phone Number (Required)</Label>
                  <Input
                    id="contactPhone"
                    type="tel"
                    value={contactPhone}
                    onChange={handlePhoneChange}
                    required
                    placeholder="Enter your 10-digit contact number"
                  />
                  {phoneError && (
                    <div className="flex items-center text-yellow-600 mt-1">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{phoneError}</span>
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
                  {aadharError && (
                    <div className="flex items-center text-yellow-600 mt-1">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{aadharError}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location Details (Required)</Label>
                  <Textarea
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    placeholder="Enter complete location details"
                    className="min-h-[80px]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date (Required)</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="endDate">End Date (Required)</Label>
                    <Input
                      id="endDate"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="flex justify-center mb-4"
                >
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </motion.div>
                <h2 className="text-2xl font-bold text-violet-900 mb-4">Permission Request Submitted</h2>
                <p className="text-violet-700 mb-2">
                  Thank you for submitting your loudspeaker and event permission request.
                </p>
                <p className="text-violet-700">You will receive a verification call soon.</p>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 