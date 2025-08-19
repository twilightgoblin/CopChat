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
import { useLanguage } from "@/app/contexts/LanguageContext"
import { translations } from "@/app/translations"

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

  const { language } = useLanguage()
  const t = translations[language]?.loudspeakerEventsPermission || translations.en.loudspeakerEventsPermission

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
      const hasFiles = false // No file inputs on this form currently
      const payload = hasFiles ? new FormData() : {}

      const baseFields = {
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

      if (hasFiles) {
        Object.entries(baseFields).forEach(([k, v]) => payload.append(k, String(v ?? '')))
      } else {
        Object.assign(payload, baseFields)
      }

      await handleFormSubmit(
        payload,
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
            {t.title}
          </h1>
          <p className="text-lg text-violet-700 text-center mb-8">
            {t.subtitle}
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
                  <Label htmlFor="eventName">{t.form.eventName}</Label>
                  <Input
                    id="eventName"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    required
                    placeholder={t.form.eventNamePlaceholder}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventDetails">{t.form.eventDetails}</Label>
                  <Textarea
                    id="eventDetails"
                    value={eventDetails}
                    onChange={(e) => setEventDetails(e.target.value)}
                    required
                    placeholder={t.form.eventDetailsPlaceholder}
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactName">{t.form.contactName}</Label>
                  <Input
                    id="contactName"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                    placeholder={t.form.contactNamePlaceholder}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t.form.email}</Label>
                  <div className="flex gap-2 items-center">
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      placeholder={t.form.emailPlaceholder}
                    />
                    {validateEmail(email) && (
                      <OTPVerification email={email} onVerified={setVerifiedOTP} />
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPhone">{t.form.phone}</Label>
                  <Input
                    id="contactPhone"
                    type="tel"
                    value={contactPhone}
                    onChange={handlePhoneChange}
                    required
                    placeholder={t.form.phonePlaceholder}
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
                  <Label htmlFor="location">{t.form.location}</Label>
                  <Textarea
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    placeholder={t.form.locationPlaceholder}
                    className="min-h-[80px]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">{t.form.startDate}</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="endDate">{t.form.endDate}</Label>
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
                  {isSubmitting ? t.form.submitting : t.form.submit}
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
                <h2 className="text-2xl font-bold text-violet-900 mb-4">{t.success.submitted}</h2>
                <p className="text-violet-700 mb-2">
                  {t.successMessage}
                </p>
                <p className="text-violet-700">{t.thankYou}</p>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 