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
    if (!/^\d{10}$/.test(contactPhone.replace(/\s/g, ""))) {
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

    try {
      const response = await fetch('http://localhost:5001/api/service-forms/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          serviceType: 'loudspeaker-events-permission',
          details: {
            name: eventName,
            phone: contactPhone,
            aadhar,
            eventType: eventDetails,
            location,
            date: startDate,
            time: endDate,
            description: eventDetails,
            image: null,
            additionalFiles: []
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form');
      }

      setNotificationMessage("Permission request submitted successfully!");
      setNotificationType("success");
      setShowNotification(true);
      
      // Reset form fields
      setEventName("")
      setEventDetails("")
      setContactName("")
      setEmail("")
      setContactPhone("")
      setAadhar("")
      setLocation("")
      setStartDate("")
      setEndDate("")

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
    setContactPhone(value.substring(0, 10))

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

                <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700">
                  Submit Request
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