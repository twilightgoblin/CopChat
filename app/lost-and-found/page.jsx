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
import { useLanguage } from "@/app/contexts/LanguageContext"
import { translations } from "@/app/translations"

export default function LostAndFoundPage() {
  const { language } = useLanguage()
  const t = translations[language].lostAndFound

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
      setError(t.errors.validEmail)
      return
    }

    // Validate phone number
    if (!validatePhone(phone)) {
      console.log('Phone validation failed')
      setError(t.errors.validPhone)
      return
    }

    // Validate Aadhar number only if provided
    if (!validateAadhar(aadhar)) {
      console.log('Aadhar validation failed')
      setError(t.errors.validAadhar)
      return
    }

    // Validate item field
    if (!item?.trim()) {
      console.log('Item validation failed')
      setError(t.errors.itemRequired)
      return
    }

    // Validate image for Found items
    if (!isLost && !image) {
      console.log('Image validation failed for Found item')
      setError(t.errors.imageRequired)
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
        setNotificationMessage(t.success.submitted);
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
        setError(err.message || t.errors.submitFailed);
        setNotificationMessage(err.message || t.errors.submitFailed);
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
      setEmailError(t.errors.validEmail)
    } else {
      setEmailError("")
    }
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "")
    setPhone(value.substring(0, 10))
    if (value.length > 0 && value.length !== 10) {
      setPhoneError(t.errors.validPhone)
    } else {
      setPhoneError("")
    }
  }

  const handleAadharChange = (e) => {
    const formatted = formatAadhar(e.target.value)
    setAadhar(formatted)
    if (formatted.replace(/\s/g, "").length > 0 && !validateAadhar(formatted)) {
      setAadharError(t.errors.validAadhar)
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
          <h1 className="text-4xl md:text-5xl font-bold text-center text-violet-900 mb-8">{t.title}</h1>
        </FadeIn>

        <FadeIn>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${isLost ? "font-bold" : ""}`}>{t.lost}</span>
              <Switch
                checked={!isLost}
                onCheckedChange={() => setIsLost(!isLost)}
                className="data-[state=checked]:bg-violet-600"
              />
              <span className={`text-lg ${!isLost ? "font-bold" : ""}`}>{t.found}</span>
            </div>

            <CardContent>
              {!submitted ? (
                <>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.form.name}</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder={t.form.namePlaceholder}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t.form.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        placeholder={t.form.emailPlaceholder}
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
                        <Label>{t.form.emailVerification}</Label>
                        <div className="p-4 border rounded-lg bg-violet-50">
                          <p className="text-sm text-gray-600 mb-4">
                            {t.form.emailVerificationMessage} ({email})
                          </p>
                          <OTPVerification 
                            email={email} 
                            onVerified={handleOTPVerified}
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.form.phone}</Label>
                      <Input
                        id="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                        placeholder={t.form.phonePlaceholder}
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
                      <Label htmlFor="aadhar">{t.form.aadhar}</Label>
                      <Input 
                        id="aadhar" 
                        value={aadhar} 
                        onChange={handleAadharChange} 
                        placeholder={t.form.aadharPlaceholder} 
                      />
                      {aadharError && (
                        <div className="flex items-center text-yellow-600 mt-1">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          <span>{aadharError}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="item">{isLost ? t.form.lostItem : t.form.foundItem}</Label>
                      <Input
                        id="item"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                        required
                        placeholder={isLost ? t.form.lostItemPlaceholder : t.form.foundItemPlaceholder}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">{isLost ? t.form.lastSeenLocation : t.form.foundLocation}</Label>
                      <Input
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                        placeholder={isLost ? t.form.lastSeenPlaceholder : t.form.foundPlaceholder}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">{t.form.briefInfo}</Label>
                      <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        placeholder={t.form.briefInfoPlaceholder}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="image">
                        {isLost ? t.form.lostItemPicture : t.form.foundItemPicture}
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
                          {t.form.attachImage}
                        </Button>
                        {image && (
                          <div className="mt-2 p-2 bg-violet-50 rounded-md flex-grow">
                            <p className="text-sm text-violet-700 truncate">{image.name}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalFiles">{t.form.additionalFiles}</Label>
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
                          {t.form.attachAdditionalFiles}
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
                                {t.form.remove}
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
                      {loading ? t.form.submitting : t.form.submit}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <h2 className="text-2xl font-semibold text-violet-900 mb-4">{t.thankYou}</h2>
                  <p className="text-gray-600">{t.successMessage}</p>
                </div>
              )}
            </CardContent>
          </div>
        </FadeIn>
      </div>
    </div>
  )
} 