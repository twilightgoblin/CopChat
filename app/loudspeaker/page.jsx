"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CardContent } from "@/components/ui/card"
import { Paperclip, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/fade-in"
import { Notification } from "@/components/ui/notification"
import OTPVerification from "@/components/otp-verification"

export default function LoudspeakerPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [aadhar, setAadhar] = useState("")
  const [address, setAddress] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [eventTime, setEventTime] = useState("")
  const [eventType, setEventType] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)
  const [additionalFiles, setAdditionalFiles] = useState([])
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

  const fileInputRef = useRef(null)
  const additionalFilesRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address")
      return
    }

    // Validate phone number
    if (!/^\d{10}$/.test(phone.replace(/\s/g, ""))) {
      setPhoneError("Please enter a valid 10-digit phone number")
      return
    }

    // Validate Aadhar number only if provided
    const aadharWithoutSpaces = aadhar.replace(/\s/g, "")
    if (aadharWithoutSpaces && !/^\d{12}$/.test(aadharWithoutSpaces)) {
      setAadharError("Please enter a valid 12-digit Aadhar number")
      return
    }

    setEmailError("")
    setPhoneError("")
    setAadharError("")

    // Show OTP verification if not already verified
    if (!verifiedOTP) {
      setShowOTPVerification(true)
      return
    }

    try {
      const response = await fetch('http://localhost:5001/api/service-forms/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          serviceType: 'loud-speaker',
          details: {
            name,
            email,
            phone,
            aadhar,
            address,
            eventDate,
            eventTime,
            eventType,
            description,
            image: image ? image.name : null,
            additionalFiles: additionalFiles.map(file => file.name)
          },
          otp: verifiedOTP
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form');
      }

      setNotificationMessage("Loudspeaker request submitted successfully!");
      setNotificationType("success");
      setShowNotification(true);
      setSubmitted(true);
      
      // Reset form fields
      setName("")
      setEmail("")
      setPhone("")
      setAadhar("")
      setAddress("")
      setEventDate("")
      setEventTime("")
      setEventType("")
      setDescription("")
      setImage(null)
      setAdditionalFiles([])
      setVerifiedOTP(null)
      setShowOTPVerification(false)
      setIsVerified(true)

      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setNotificationMessage(
        error.message === 'Failed to fetch' 
          ? 'Unable to connect to the server. Please make sure the backend server is running.'
          : error.message || 'Failed to submit form. Please try again later.'
      );
      setNotificationType("error");
      setShowNotification(true);
      
      // Hide notification after 5 seconds for errors
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
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

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleAdditionalFilesChange = (e) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setAdditionalFiles((prev) => [...prev, ...newFiles])
    }
  }

  const removeAdditionalFile = (index) => {
    setAdditionalFiles((prev) => prev.filter((_, i) => i !== index))
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
          <h1 className="text-4xl md:text-5xl font-bold text-center text-violet-900 mb-8">Loudspeaker Permission</h1>
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
                        <Label htmlFor="address">Event Address (Required)</Label>
                        <Textarea
                          id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                          placeholder="Enter the event venue address"
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
                        <Label htmlFor="eventType">Event Type (Required)</Label>
                        <Input
                          id="eventType"
                          value={eventType}
                          onChange={(e) => setEventType(e.target.value)}
                          required
                          placeholder="e.g., Wedding, Festival, Religious Event"
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

                      <div className="space-y-2">
                        <Label htmlFor="image">Event Image (Optional)</Label>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Input
                            id="image"
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="hidden"
                            ref={fileInputRef}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => fileInputRef.current?.click()}
                            className="flex items-center justify-center gap-2 border-violet-300 text-violet-700 hover:bg-violet-50 w-full sm:w-auto"
                          >
                            <Paperclip className="h-4 w-4" />
                            Attach Image
                          </Button>
                          {image && (
                            <div className="mt-2 p-2 bg-violet-50 rounded-md flex-grow">
                              <p className="text-sm text-violet-700 truncate">{image.name}</p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additionalFiles">Additional Files (Optional)</Label>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Input
                            id="additionalFiles"
                            type="file"
                            multiple
                            onChange={handleAdditionalFilesChange}
                            accept="image/*,.pdf,.doc,.docx"
                            className="hidden"
                            ref={additionalFilesRef}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => additionalFilesRef.current?.click()}
                            className="flex items-center justify-center gap-2 border-violet-300 text-violet-700 hover:bg-violet-50 w-full sm:w-auto"
                          >
                            <Paperclip className="h-4 w-4" />
                            Attach Additional Files
                          </Button>
                        </div>
                        {additionalFiles.length > 0 && (
                          <div className="mt-2 space-y-2">
                            {additionalFiles.map((file, index) => (
                              <div key={index} className="flex items-center justify-between p-2 bg-violet-50 rounded-md">
                                <p className="text-sm text-violet-700 truncate">{file.name}</p>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeAdditionalFile(index)}
                                  className="text-red-500 hover:text-red-600"
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700">
                        Submit Request
                      </Button>
                    </form>
                  )}
                </>
              ) : (
                <div className="text-center py-8">
                  <h2 className="text-2xl font-semibold text-violet-900 mb-4">Thank You!</h2>
                  <p className="text-gray-600">Your loudspeaker permission request has been submitted successfully.</p>
                </div>
              )}
            </CardContent>
          </div>
        </FadeIn>
      </div>
    </div>
  )
} 