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
import { handleFormSubmit, validateEmail, validatePhone, validateAadhar, formatAadhar } from "@/utils/form-handlers"

export default function LockedHouseMonitoringPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [aadhar, setAadhar] = useState("")
  const [address, setAddress] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
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
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const fileInputRef = useRef(null)
  const additionalFilesRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const resetForm = () => {
    setName("")
    setEmail("")
    setPhone("")
    setAadhar("")
    setAddress("")
    setStartDate("")
    setEndDate("")
    setDescription("")
    setVerifiedOTP(null)
    setShowOTPVerification(false)
    setIsVerified(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    // Validate email
    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    // Validate phone number
    if (!validatePhone(phone)) {
      setError("Please enter a valid 10-digit phone number")
      return
    }

    // Validate Aadhar number
    if (!validateAadhar(aadhar)) {
      setError("Please enter a valid 12-digit Aadhar number")
      return
    }

    // Show OTP verification if not already verified
    if (!verifiedOTP) {
      setShowOTPVerification(true)
      return
    }

    const formData = {
      name,
      email,
      phone,
      aadhar,
      address,
      startDate,
      endDate,
      description,
      otp: verifiedOTP
    }

    await handleFormSubmit({
      formData,
      setLoading,
      setError,
      setSuccess,
      setShowNotification,
      setNotificationMessage,
      setNotificationType,
      resetForm,
      serviceType: 'locked-house-monitoring'
    })
  }

  const handleOTPVerified = (otp) => {
    setVerifiedOTP(otp)
    setIsVerified(true)
    setSubmitError("")
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    if (value && !validateEmail(value)) {
      setEmailError("Please enter a valid email address")
    } else {
      setEmailError("")
    }
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "")
    setPhone(value.substring(0, 10))
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
          <h1 className="text-4xl md:text-5xl font-bold text-center text-violet-900 mb-8">Locked House Monitoring</h1>
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
                          placeholder="Enter the address of the house to be monitored"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                      <div className="space-y-2">
                        <Label htmlFor="description">Additional Information (Required)</Label>
                        <Textarea
                          id="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                          placeholder="Provide any additional information about the house or monitoring requirements"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="image">House Image (Optional)</Label>
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

                      <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700" disabled={loading}>
                        {loading ? "Submitting..." : "Submit Request"}
                      </Button>
                    </form>
                  )}
                </>
              ) : (
                <div className="text-center py-8">
                  <h2 className="text-2xl font-semibold text-violet-900 mb-4">Thank You!</h2>
                  <p className="text-gray-600">Your monitoring request has been submitted successfully.</p>
                </div>
              )}
            </CardContent>
          </div>
        </FadeIn>
      </div>
    </div>
  )
} 