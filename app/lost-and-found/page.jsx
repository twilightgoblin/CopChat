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
import { handleFormSubmit, validateEmail, validatePhone, validateAadhar, formatAadhar } from "@/utils/form-handlers"

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

  const resetForm = () => {
    setName("")
    setEmail("")
    setPhone("")
    setAadhar("")
    setItem("")
    setLocation("")
    setDescription("")
    setImage(null)
    setAdditionalFiles([])
    setVerifiedOTP(null)
    setShowOTPVerification(false)
    setIsVerified(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted')
    setError("")

    // Log all form fields for debugging
    console.log('Form field values:', {
      isLost,
      name,
      email,
      phone,
      aadhar,
      item,
      location,
      description,
      hasImage: !!image,
      additionalFilesCount: additionalFiles.length
    })

    // Validate email
    if (!validateEmail(email)) {
      console.log('Email validation failed')
      setError("Please enter a valid email address")
      return
    }

    // Validate phone number
    if (!validatePhone(phone)) {
      console.log('Phone validation failed')
      setError("Please enter a valid 10-digit phone number")
      return
    }

    // Validate Aadhar number only if provided
    if (!validateAadhar(aadhar)) {
      console.log('Aadhar validation failed')
      setError("Please enter a valid 12-digit Aadhar number")
      return
    }

    // Validate item field
    if (!item?.trim()) {
      console.log('Item validation failed')
      setError("Please enter the item details")
      return
    }

    // Validate image for Found items
    if (!isLost && !image) {
      console.log('Image validation failed for Found item')
      setError("Please attach an image of the found item")
      return
    }

    // Show OTP verification if not already verified
    if (!verifiedOTP) {
      console.log('OTP not verified')
      setShowOTPVerification(true)
      return
    }

    console.log('All validations passed, preparing form data')

    try {
      setLoading(true)

      // First, prepare the form data as a plain object
      const formFields = {
        isLost,
        name,
        email,
        phone,
        item,
        location,
        description,
        otp: verifiedOTP
      }
      
      // Add optional fields if they exist
      if (aadhar) formFields.aadhar = aadhar

      console.log('🚀 Submitting form data:', JSON.stringify(formFields, null, 2))

      // Submit the form data first
      await handleFormSubmit(
        formFields,
        setLoading,
        setError,
        setSuccess,
        setShowNotification,
        setNotificationMessage,
        setNotificationType,
        resetForm,
        'lost-and-found'
      )

      // If we get here, the form submission was successful
      setShowNotification(false);
      setTimeout(() => {
        setNotificationMessage("✅ Lost and Found request submitted successfully! We will process your request and get back to you soon.");
        setNotificationType("success");
        setShowNotification(true);
      }, 10);
      setSubmitted(true);
      resetForm();

      // If we have files and the form submission was successful, upload the files
      if (image || additionalFiles.length > 0) {
        console.log('📤 Uploading files...')
        
        const formData = new FormData()
        if (image) {
          formData.append('image', image)
        }
        additionalFiles.forEach((file) => {
          formData.append('additionalFiles', file)
        })

        // Upload files in a separate request
        const uploadResponse = await fetch('/api/upload-files', {
          method: 'POST',
          body: formData
        })

        if (!uploadResponse.ok) {
          throw new Error('Failed to upload files')
        }

        console.log('✅ Files uploaded successfully')
      }

    } catch (err) {
      setShowNotification(false);
      setTimeout(() => {
        setError(err.message || 'An error occurred while submitting the form');
        setNotificationMessage(err.message || "Failed to submit form. Please try again.");
        setNotificationType("error");
        setShowNotification(true);
      }, 10);
      setLoading(false)
    }
  }

  const handleOTPVerified = (otp) => {
    setVerifiedOTP(otp)
    setIsVerified(true)
    setError("")
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
          onClose={() => {
            setShowNotification(false);
            if (notificationType === 'success') {
              setSubmitted(true);
            }
          }}
          className={notificationType === 'success' ? 'bg-green-100 border-green-500 text-green-800' : ''}
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

                    <Button 
                      type="submit" 
                      className="w-full bg-violet-600 hover:bg-violet-700" 
                      disabled={loading || !isVerified}
                    >
                      {loading ? 'Submitting...' : 'Submit Report'}
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