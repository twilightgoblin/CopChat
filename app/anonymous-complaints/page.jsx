"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { AlertCircle, CheckCircle2, Paperclip } from "lucide-react"
import { Notification } from "@/components/ui/notification"
import { handleFormSubmit, validateEmail, validatePhone } from "@/utils/form-handlers"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { translations } from "@/app/translations"

export default function AnonymousComplaintsPage() {
  // Add this at the beginning of the AnonymousComplaintsPage component function
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { language } = useLanguage()
  const [typedText, setTypedText] = useState("")
  const [complaintType, setComplaintType] = useState("")
  const [location, setLocation] = useState("")
  const [resources, setResources] = useState("")
  const [description, setDescription] = useState("")
  const [additionalInfo, setAdditionalInfo] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [attachments, setAttachments] = useState([])
  const [submitError, setSubmitError] = useState("")
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")
  const [notificationType, setNotificationType] = useState("success")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [emailError, setEmailError] = useState("")
  const [phoneError, setPhoneError] = useState("")

  const formRef = useRef(null)
  const fileInputRef = useRef(null)

  useEffect(() => {
    const text = translations[language].anonymousComplaints.title
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setTypedText((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [language])

  const validateForm = () => {
    const newErrors = {}

    if (!complaintType) {
      newErrors.complaintType = translations[language].anonymousComplaints.errors.selectComplaintType
    }

    if (!location) {
      newErrors.location = translations[language].anonymousComplaints.errors.locationRequired
    }

    if (!description) {
      newErrors.description = translations[language].anonymousComplaints.errors.descriptionRequired
    } else if (description.split(/\r\n|\r|\n/).length > 4) {
      newErrors.description = translations[language].anonymousComplaints.errors.descriptionTooLong
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const resetForm = () => {
    setName("")
    setEmail("")
    setPhone("")
    setComplaintType("")
    setLocation("")
    setDescription("")
    setResources("")
    setAdditionalInfo("")
    setAttachments([])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError("")

    // Validate email if provided
    if (email && !validateEmail(email)) {
      setSubmitError(translations[language].anonymousComplaints.errors.validEmail)
      return
    }

    // Validate phone if provided
    if (phone && !validatePhone(phone)) {
      setSubmitError(translations[language].anonymousComplaints.errors.validPhone)
      return
    }

    const formData = {
      name,
      email,
      phone,
      complaintType,
      location,
      resources,
      description,
      additionalInfo
    }

    try {
      await handleFormSubmit(
        formData,
        setIsSubmitting,
        setSubmitError,
        setSubmitted,
        setShowNotification,
        setNotificationMessage,
        setNotificationType,
        resetForm,
        'anonymous-complaint'
      )
      // Ensure only one notification is shown at a time
      setShowNotification(false);
      setTimeout(() => {
        setNotificationMessage(translations[language].anonymousComplaints.success.submitted);
        setNotificationType("success");
        setShowNotification(true);
      }, 10);
      setSubmitted(true);
      resetForm();
    } catch (error) {
      setShowNotification(false);
      setTimeout(() => {
        setSubmitError(error.message || translations[language].anonymousComplaints.errors.submitFailed);
        setNotificationMessage(error.message || translations[language].anonymousComplaints.errors.submitFailed);
        setNotificationType("error");
        setShowNotification(true);
      }, 10);
    }
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    if (value && !validateEmail(value)) {
      setEmailError(translations[language].anonymousComplaints.errors.validEmail)
    } else {
      setEmailError("")
    }
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "")
    setPhone(value.substring(0, 10))
    if (value.length > 0 && value.length !== 10) {
      setPhoneError(translations[language].anonymousComplaints.errors.validPhone)
    } else {
      setPhoneError("")
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setAttachments((prev) => [...prev, ...newFiles])
    }
  }

  const handleAttachClick = () => {
    fileInputRef.current?.click()
  }

  const removeAttachment = (index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index))
  }

  const complaintTypes = [
    { key: "trafficViolation", label: translations[language].anonymousComplaints.complaintTypes.trafficViolation },
    { key: "corruption", label: translations[language].anonymousComplaints.complaintTypes.corruption },
    { key: "publicNuisance", label: translations[language].anonymousComplaints.complaintTypes.publicNuisance },
    { key: "illegalActivities", label: translations[language].anonymousComplaints.complaintTypes.illegalActivities },
    { key: "policeMisconduct", label: translations[language].anonymousComplaints.complaintTypes.policeMisconduct },
    { key: "environmentalViolation", label: translations[language].anonymousComplaints.complaintTypes.environmentalViolation },
    { key: "noisePollution", label: translations[language].anonymousComplaints.complaintTypes.noisePollution },
    { key: "other", label: translations[language].anonymousComplaints.complaintTypes.other },
  ]

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
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-violet-900 mb-8"
        >
          {typedText}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6 md:p-8"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold text-green-700 mb-2">{translations[language].anonymousComplaints.complaintSubmitted}</h2>
              <p className="text-gray-600 mb-4">
                {translations[language].anonymousComplaints.thankYouMessage}
              </p>
              <p className="text-sm text-gray-500">
                {translations[language].anonymousComplaints.emergencyMessage}
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="complaintType">
                  {translations[language].anonymousComplaints.form.complaintType} <span className="text-red-500">*</span>
                </Label>
                <Select value={complaintType} onValueChange={setComplaintType}>
                  <SelectTrigger id="complaintType" className={errors.complaintType ? "border-red-500" : ""}>
                    <SelectValue placeholder={translations[language].anonymousComplaints.form.complaintTypePlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {complaintTypes.map((type) => (
                      <SelectItem key={type.key} value={type.key}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.complaintType && (
                  <p className="text-red-500 text-sm flex items-center mt-1">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.complaintType}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">
                  {translations[language].anonymousComplaints.form.location} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="location"
                  placeholder={translations[language].anonymousComplaints.form.locationPlaceholder}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={errors.location ? "border-red-500" : ""}
                />
                {errors.location && (
                  <p className="text-red-500 text-sm flex items-center mt-1">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.location}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="resources">{translations[language].anonymousComplaints.form.resources}</Label>
                <div className="flex gap-2">
                  <Input
                    id="resources"
                    placeholder={translations[language].anonymousComplaints.form.resourcesPlaceholder}
                    value={resources}
                    onChange={(e) => setResources(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleAttachClick}
                    className="flex items-center gap-2 border-violet-300 text-violet-700 hover:bg-violet-50"
                  >
                    <Paperclip className="h-4 w-4" />
                    {translations[language].anonymousComplaints.form.attach}
                  </Button>
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" multiple />
                </div>
                {attachments.length > 0 && (
                  <div className="mt-2 space-y-2">
                    <p className="text-sm font-medium text-violet-700">{translations[language].anonymousComplaints.form.attachments}</p>
                    <div className="flex flex-wrap gap-2">
                      {attachments.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 bg-violet-50 px-3 py-1 rounded-full text-sm"
                        >
                          <span className="truncate max-w-[150px]">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeAttachment(index)}
                            className="text-violet-700 hover:text-violet-900"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">
                  {translations[language].anonymousComplaints.form.description} <span className="text-red-500">*</span>
                  <span className="text-sm text-gray-500 ml-2">{translations[language].anonymousComplaints.form.descriptionHint}</span>
                </Label>
                <Textarea
                  id="description"
                  placeholder={translations[language].anonymousComplaints.form.descriptionPlaceholder}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className={errors.description ? "border-red-500" : ""}
                  rows={4}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm flex items-center mt-1">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.description}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? translations[language].anonymousComplaints.form.submitting : translations[language].anonymousComplaints.form.submit}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
} 