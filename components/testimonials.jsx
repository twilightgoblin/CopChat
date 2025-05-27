"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Notification } from "@/components/ui/notification"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [feedback, setFeedback] = useState("")
  const [rating, setRating] = useState(5)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [testimonials, setTestimonials] = useState([])
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")
  const [notificationType, setNotificationType] = useState("success")
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Handle email change with validation
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    if (newEmail && !validateEmail(newEmail)) {
      setEmailError("Please enter a valid email address (e.g., name@domain.com)");
    } else {
      setEmailError("");
    }
  };

  // Fetch testimonials
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/testimonials');
        if (!response.ok) throw new Error('Failed to fetch testimonials');
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused || testimonials.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, testimonials.length])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate email before submission
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('http://localhost:5001/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          content: feedback,
          rating
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit feedback');
      }

      const newTestimonial = await response.json();
      setTestimonials(prev => [newTestimonial, ...prev].slice(0, 5));
      
      setNotificationMessage("Thank you for your feedback!");
      setNotificationType("success");
      setShowNotification(true);
      
      // Reset form
      setName("");
      setEmail("");
      setEmailError("");
      setFeedback("");
      setRating(5);
      setFeedbackOpen(false);

      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (error) {
      setNotificationMessage(error.message);
      setNotificationType("error");
      setShowNotification(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  const renderStars = (count) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < count ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
      ))
  }

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    setIsPaused(true)
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeThreshold = 50
    const swipeDistance = touchEndX.current - touchStartX.current

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
      } else {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }
    }

    setTimeout(() => setIsPaused(false), 2000)
  }

  // Pause auto-rotation when hovering
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <ScrollAnimation>
      <section className="py-12 md:py-24 relative overflow-hidden">
        {showNotification && (
          <Notification
            message={notificationMessage}
            type={notificationType}
            onClose={() => setShowNotification(false)}
          />
        )}
        
        {/* Background with crystal solid design */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-white -z-10"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5 -z-10"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600">
              What Our Community Says
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real feedback from citizens who have interacted with our services
            </p>
          </div>

          {/* Testimonials display with swipe functionality */}
          <div className="max-w-4xl mx-auto mb-16">
            <div
              className="relative"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <AnimatePresence mode="wait">
                {testimonials.length > 0 ? (
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="backdrop-blur-sm bg-white/60 p-8 md:p-10 rounded-2xl shadow-lg border border-white/40">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-violet-500 to-purple-500 p-3 rounded-full shadow-lg">
                          <Quote className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      <div className="pt-6 text-center">
                        <p className="text-xl md:text-2xl font-medium italic text-gray-700 mb-6">
                          "{testimonials[activeIndex].content}"
                        </p>

                        <div className="flex justify-center mb-4">{renderStars(testimonials[activeIndex].rating)}</div>

                        <div className="inline-block bg-white/80 px-6 py-2 rounded-full shadow-sm">
                          <p className="font-bold text-lg text-violet-800">{testimonials[activeIndex].name}</p>
                          <p className="text-sm text-violet-600">Community Member</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No testimonials yet. Be the first to share your feedback!</p>
                  </div>
                )}
              </AnimatePresence>

              {/* Navigation dots */}
              {testimonials.length > 0 && (
                <div className="flex justify-center mt-8 gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveIndex(index)
                        setIsPaused(true)
                        setTimeout(() => setIsPaused(false), 2000)
                      }}
                      className={`h-3 w-3 rounded-full transition-all ${
                        index === activeIndex ? "bg-violet-600 scale-125" : "bg-violet-200"
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Feedback button */}
          <div className="text-center">
            <Button
              onClick={() => setFeedbackOpen(true)}
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-medium px-8 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Share Your Feedback
            </Button>
          </div>

          {/* Feedback dialog */}
          <Dialog open={feedbackOpen} onOpenChange={setFeedbackOpen}>
            <DialogContent className="sm:max-w-md backdrop-blur-lg bg-white/90 border border-white/40">
              <DialogHeader>
                <DialogTitle className="text-center text-xl font-bold text-violet-800">
                  Share Your Experience
                </DialogTitle>
                <DialogDescription className="text-center text-violet-600">
                  Your feedback helps us improve our services
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className={`bg-white/50 ${emailError ? 'border-red-500' : ''}`}
                    placeholder="name@domain.com"
                  />
                  {emailError && (
                    <p className="text-sm text-red-500 mt-1">{emailError}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feedback">Your Feedback</Label>
                  <Textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                    className="bg-white/50 min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Rating</Label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`h-6 w-6 ${
                            star <= rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting || !!emailError}
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
                >
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </ScrollAnimation>
  )
} 