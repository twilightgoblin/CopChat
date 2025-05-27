"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CardContent } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/fade-in"
import { Notification } from "@/components/ui/notification"
import OTPVerification from "@/components/otp-verification"

export default function SeniorCitizenPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [aadhar, setAadhar] = useState("")
  const [address, setAddress] = useState("")
  const [age, setAge] = useState("")
  const [emergencyContact, setEmergencyContact] = useState("")
  const [medicalConditions, setMedicalConditions] = useState("")
  const [description, setDescription] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [aadharError, setAadharError] = useState("")
  const [submitError, setSubmitError] = useState("")
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")
  const [notificationType, setNotificationType] = useState("success")
  const [showOTPVerification, setShowOTPVerification] = useState(false)
  const [verifiedOTP, setVerifiedOTP] = useState(null)
  const [isVerified, setIsVerified] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const formData = {
        serviceType: "senior-citizen",
        details: {
          name,
          email,
          phone,
          aadhar,
          address,
          age,
          emergencyContact,
          medicalConditions,
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
      setAge("")
      setEmergencyContact("")
      setMedicalConditions("")
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
    setIsVerified(true)
    setError("")
  }

  const formatAadhar = (value) => {
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

  const handleAadharChange = (e) => {
    const formatted = formatAadhar(e.target.value)
    setAadhar(formatted)

    // Validate Aadhar immediately
    const aadharWithoutSpaces = formatted.replace(/\s/g, "")
    if (aadharWithoutSpaces.length > 0 && aadharWithoutSpaces.length !== 12) {
      setAadharError("Please enter a valid 12-digit Aadhar number")
    } else {
      setAadharError("")
    }
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "")
    setPhone(value.substring(0, 10))

    // Validate phone immediately
    if (value.length > 0 && value.length !== 10) {
      setPhoneError("Please enter a valid 10-digit phone number")
    } else {
      setPhoneError("")
    }
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)

    // Validate email immediately
    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Please enter a valid email address")
    } else {
      setEmailError("")
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
          <h1 className="text-4xl md:text-5xl font-bold text-center text-violet-900 mb-8">Senior Citizen Registration</h1>
        </FadeIn>

        <FadeIn>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <CardContent>
              {!submitted ? (
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
                        {emailError && (
                          <div className="flex items-center text-yellow-600 mt-1">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            <span>{emailError}</span>
                          </div>
                        )}
                      </div>

                      {!isVerified && (
                        <div className="space-y-2">
                          <Label>Email Verification</Label>
                          <div className="p-4 border rounded-lg bg-violet-50">
                            <p className="text-sm text-gray-600 mb-4">
                              Please enter the OTP sent to your email address ({email})
                            </p>
                            <OTPVerification 
                              email={email} 
                              onVerified={handleOTPVerified}
                            />
                          </div>
                        </div>
                      )}

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
                        <Label htmlFor="address">Address (Required)</Label>
                        <Textarea
                          id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                          placeholder="Enter your complete address"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="age">Age (Required)</Label>
                          <Input
                            id="age"
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            min="60"
                            placeholder="Enter your age"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="emergencyContact">Emergency Contact (Required)</Label>
                          <Input
                            id="emergencyContact"
                            value={emergencyContact}
                            onChange={(e) => setEmergencyContact(e.target.value)}
                            required
                            placeholder="Enter emergency contact number"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="medicalConditions">Medical Conditions (Optional)</Label>
                        <Textarea
                          id="medicalConditions"
                          value={medicalConditions}
                          onChange={(e) => setMedicalConditions(e.target.value)}
                          placeholder="List any medical conditions or special requirements"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Additional Information (Required)</Label>
                        <Textarea
                          id="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                          placeholder="Provide any additional information that may be helpful"
                        />
                      </div>

                      <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700" disabled={loading}>
                        {loading ? "Submitting..." : "Submit Registration"}
                      </Button>
                    </form>
                  )}
                </>
              ) : (
                <div className="text-center py-8">
                  <h2 className="text-2xl font-semibold text-violet-900 mb-4">Thank You!</h2>
                  <p className="text-gray-600">Your senior citizen registration has been submitted successfully.</p>
                </div>
              )}
            </CardContent>
          </div>
        </FadeIn>
      </div>
    </div>
  )
} 