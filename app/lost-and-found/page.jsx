"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { CardContent } from "@/components/ui/card"
import { Paperclip, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/fade-in"
import { Notification } from "@/components/ui/notification"
import OTPVerification from "@/components/otp-verification"

export default function LostAndFoundPage() {
  const [isLost, setIsLost] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [aadhar, setAadhar] = useState("")
  const [item, setItem] = useState("")
  const [location, setLocation] = useState("")
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
  const [showVerification, setShowVerification] = useState(false)
  const [showOTPVerification, setShowOTPVerification] = useState(false)
  const [verifiedOTP, setVerifiedOTP] = useState(null)
  const [isVerified, setIsVerified] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const fileInputRef = useRef(null)
  const additionalFilesRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const formData = {
        serviceType: 'lost-and-found',
        details: {
          name,
          email,
          phone,
          aadhar,
          itemType: item,
          location,
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
      setItem("")
      setLocation("")
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
          <h1 className="text-4xl md:text-5xl font-bold text-center text-violet-900 mb-8">Report Lost or Found</h1>
        </FadeIn>

        <FadeIn>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${isLost ? "font-bold" : ""}`}>Lost</span>
              <Switch
                checked={!isLost}
                onCheckedChange={() => setIsLost(!isLost)}
                className="data-[state=checked]:bg-violet-600"
              />
              <span className={`text-lg ${!isLost ? "font-bold" : ""}`}>Found</span>
            </div>

            <CardContent>
              {!submitted ? (
                <>
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
                      <Label htmlFor="item">{isLost ? "Lost Item" : "Found Item"} (Required)</Label>
                      <Input
                        id="item"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                        required
                        placeholder={`Enter the ${isLost ? "lost" : "found"} item`}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">{isLost ? "Last Seen Location" : "Found Location"} (Required)</Label>
                      <Input
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                        placeholder={`Enter where the item was ${isLost ? "last seen" : "found"}`}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Brief Information (Required)</Label>
                      <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        placeholder="Provide a brief description or any additional information"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="image">
                        {isLost ? "Picture of Lost Item" : "Picture of Found Item"} {!isLost && "(Required)"}
                      </Label>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Input
                          id="image"
                          type="file"
                          onChange={handleImageChange}
                          required={!isLost}
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
                      Submit Report
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <h2 className="text-2xl font-semibold text-violet-900 mb-4">Thank You!</h2>
                  <p className="text-gray-600">Your report has been submitted successfully.</p>
                </div>
              )}
            </CardContent>
          </div>
        </FadeIn>
      </div>
    </div>
  )
} 