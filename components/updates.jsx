"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { AlertTriangle, Bell, Calendar, Megaphone, Sparkles, Flame } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { translations } from "@/app/translations"

export default function Updates() {
  const [loading, setLoading] = useState(true)
  const [updates, setUpdates] = useState([])
  const [isPaused, setIsPaused] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await fetch('/api/updates')
        if (!response.ok) {
          throw new Error('Failed to fetch updates')
        }
        const data = await response.json()
        // Duplicate updates for seamless loop
        setUpdates([...data, ...data])
      } catch (error) {
        console.error('Error fetching updates:', error)
        setUpdates([])
      } finally {
        setLoading(false)
      }
    }

    fetchUpdates()
  }, [])

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Alert':
        return AlertTriangle
      case 'Event':
        return Calendar
      case 'News':
        return Megaphone
      case 'Announcement':
      default:
        return Bell
    }
  }

  const getCategoryColor = (category, isImportant) => {
    if (isImportant) {
      return {
        bg: 'from-red-600 via-red-500 to-orange-500',
        border: 'border-red-400',
        cardBg: 'bg-gradient-to-br from-red-50 to-orange-50',
        badge: 'bg-red-600 text-white',
        iconBg: 'bg-red-600',
        pulse: 'animate-pulse'
      }
    }
    
    switch (category) {
      case 'Alert':
        return {
          bg: 'from-yellow-500 to-orange-500',
          border: 'border-yellow-300',
          cardBg: 'bg-gradient-to-br from-yellow-50 to-orange-50',
          badge: 'bg-yellow-500 text-white',
          iconBg: 'bg-yellow-500',
          pulse: ''
        }
      case 'Event':
        return {
          bg: 'from-blue-500 to-cyan-500',
          border: 'border-blue-300',
          cardBg: 'bg-gradient-to-br from-blue-50 to-cyan-50',
          badge: 'bg-blue-500 text-white',
          iconBg: 'bg-blue-500',
          pulse: ''
        }
      case 'News':
        return {
          bg: 'from-green-500 to-emerald-500',
          border: 'border-green-300',
          cardBg: 'bg-gradient-to-br from-green-50 to-emerald-50',
          badge: 'bg-green-500 text-white',
          iconBg: 'bg-green-500',
          pulse: ''
        }
      case 'Announcement':
      default:
        return {
          bg: 'from-violet-500 to-purple-500',
          border: 'border-violet-300',
          cardBg: 'bg-gradient-to-br from-violet-50 to-purple-50',
          badge: 'bg-violet-500 text-white',
          iconBg: 'bg-violet-500',
          pulse: ''
        }
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return language === 'kn' ? 'ಇತ್ತೀಚೆಗೆ' : 'Recently'
    
    const date = new Date(dateString)
    
    if (isNaN(date.getTime())) {
      return language === 'kn' ? 'ಇತ್ತೀಚೆಗೆ' : 'Recently'
    }
    
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return language === 'kn' ? 'ಇಂದು' : 'Today'
    if (diffDays === 1) return language === 'kn' ? 'ನಿನ್ನೆ' : 'Yesterday'
    if (diffDays < 7) return language === 'kn' ? `${diffDays} ದಿನಗಳ ಹಿಂದೆ` : `${diffDays} days ago`
    
    return date.toLocaleDateString(language === 'kn' ? 'kn-IN' : 'en-IN', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    })
  }

  return (
    <ScrollAnimation>
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-violet-50/30 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12 px-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full mb-6"
            >
              <Sparkles className="h-5 w-5 text-violet-600" />
              <span className="text-sm font-semibold text-violet-700">{t.updates.stayInformed}</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              {t.updates.title}
            </motion.h2>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1.5 w-32 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 mx-auto mb-6 rounded-full"
            ></motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            >
              {t.updates.subtitle}
            </motion.p>
          </div>

          {/* Scrolling Updates */}
          {loading ? (
            <div className="flex gap-6 px-4">
              {Array(3).fill(0).map((_, index) => (
                <div key={index} className="min-w-[350px] animate-pulse">
                  <div className="bg-white rounded-2xl p-6 shadow-lg h-48">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : updates.length > 0 ? (
            <div className="relative">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              
              {/* Scrolling container */}
              <div 
                className="overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <motion.div
                  className="flex gap-6"
                  animate={{
                    x: isPaused ? undefined : [0, -1 * (updates.length / 2) * 370]
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: updates.length * 3,
                      ease: "linear"
                    }
                  }}
                >
                  {updates.map((update, index) => {
                    const Icon = getCategoryIcon(update.category)
                    const colors = getCategoryColor(update.category, update.isImportant)
                    
                    return (
                      <div
                        key={`${update._id}-${index}`}
                        className="min-w-[350px] flex-shrink-0"
                      >
                        <div className={`relative ${colors.cardBg} rounded-2xl p-6 shadow-xl border-2 ${colors.border} h-full ${colors.pulse}`}>
                          {/* Important flame indicator */}
                          {update.isImportant && (
                            <div className="absolute -top-3 -right-3 z-10">
                              <div className="relative">
                                <Flame className="h-10 w-10 text-red-500 animate-pulse drop-shadow-lg" fill="currentColor" />
                                <div className="absolute inset-0 bg-red-500 blur-xl opacity-50 animate-pulse"></div>
                              </div>
                            </div>
                          )}

                          {/* Icon and Category Badge */}
                          <div className="flex items-start justify-between mb-4">
                            <div className={`bg-gradient-to-br ${colors.bg} ${colors.iconBg} p-3 rounded-xl shadow-lg`}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <span className={`${colors.badge} text-xs font-bold px-3 py-1.5 rounded-full shadow-md`}>
                              {update.category}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className={`text-lg font-bold mb-3 line-clamp-2 ${update.isImportant ? 'text-red-900' : 'text-gray-900'}`}>
                            {update.title}
                          </h3>

                          {/* Content */}
                          <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${update.isImportant ? 'text-red-800' : 'text-gray-700'}`}>
                            {update.content}
                          </p>

                          {/* Date */}
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">{formatDate(update.date)}</span>
                          </div>

                          {/* Important banner */}
                          {update.isImportant && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-1 rounded-b-xl">
                              <span className="text-xs font-bold tracking-wider">⚡ {language === 'kn' ? 'ಮುಖ್ಯ' : 'IMPORTANT'} ⚡</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 px-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-violet-100 rounded-full mb-6">
                <Bell className="h-10 w-10 text-violet-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                {language === 'kn' ? 'ಇನ್ನೂ ಅಪ್‌ಡೇಟ್‌ಗಳಿಲ್ಲ' : 'No Updates Yet'}
              </h3>
              <p className="text-gray-500">{t.updates.noUpdates}</p>
            </div>
          )}
        </div>
      </section>
    </ScrollAnimation>
  )
} 