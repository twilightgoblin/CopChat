"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Notification } from "@/components/ui/notification"
import Link from "next/link"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { translations } from "@/app/translations"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [testimonials, setTestimonials] = useState([])
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")
  const [notificationType, setNotificationType] = useState("success")
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const { language } = useLanguage()
  const t = translations[language]

  // Fetch testimonials
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch testimonials');
        }
        const data = await response.json();
        // Only filter by rating > 3
        const filteredTestimonials = data.filter(t => t.rating > 3);
        setTestimonials(filteredTestimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setNotificationMessage(error.message || "Failed to load testimonials");
        setNotificationType("error");
        setShowNotification(true);
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
              {t.testimonials.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.testimonials.subtitle}
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
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">{t.testimonials.noTestimonials}</p>
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
            <Link href="/testimonials">
              <Button
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-medium px-8 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {t.testimonials.shareFeedback}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  )
} 