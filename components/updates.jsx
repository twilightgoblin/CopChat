"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle, Bell, Info, Calendar, Megaphone, Sparkles, TrendingUp } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { translations } from "@/app/translations"

export default function Updates() {
  const [loading, setLoading] = useState(true)
  const [updates, setUpdates] = useState([])
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
        setUpdates(data)
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
        bg: 'bg-gradient-to-br from-red-500 to-orange-500',
        border: 'border-red-200',
        text: 'text-red-700',
        badge: 'bg-red-100 text-red-700',
        glow: 'shadow-red-200'
      }
    }
    
    switch (category) {
      case 'Alert':
        return {
          bg: 'bg-gradient-to-br from-yellow-400 to-orange-400',
          border: 'border-yellow-200',
          text: 'text-yellow-700',
          badge: 'bg-yellow-100 text-yellow-700',
          glow: 'shadow-yellow-200'
        }
      case 'Event':
        return {
          bg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
          border: 'border-blue-200',
          text: 'text-blue-700',
          badge: 'bg-blue-100 text-blue-700',
          glow: 'shadow-blue-200'
        }
      case 'News':
        return {
          bg: 'bg-gradient-to-br from-green-500 to-emerald-500',
          border: 'border-green-200',
          text: 'text-green-700',
          badge: 'bg-green-100 text-green-700',
          glow: 'shadow-green-200'
        }
      case 'Announcement':
      default:
        return {
          bg: 'bg-gradient-to-br from-violet-500 to-purple-500',
          border: 'border-violet-200',
          text: 'text-violet-700',
          badge: 'bg-violet-100 text-violet-700',
          glow: 'shadow-violet-200'
        }
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'Recently'
    
    const date = new Date(dateString)
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return 'Recently'
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-violet-50/30 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
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

          {/* Updates Grid */}
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {Array(6).fill(0).map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
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
              </motion.div>
            ) : updates.length > 0 ? (
              <motion.div 
                key="updates"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {updates.map((update, index) => {
                  const Icon = getCategoryIcon(update.category)
                  const colors = getCategoryColor(update.category, update.isImportant)
                  
                  return (
                    <motion.div
                      key={update._id || index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      className="group relative"
                    >
                      {/* Important badge */}
                      {update.isImportant && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                          className="absolute -top-2 -right-2 z-10"
                        >
                          <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            Important
                          </div>
                        </motion.div>
                      )}

                      <div className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl ${colors.glow} transition-all duration-300 border-2 ${colors.border} h-full overflow-hidden`}>
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/0 to-purple-50/0 group-hover:from-violet-50/50 group-hover:to-purple-50/50 transition-all duration-300 rounded-2xl"></div>
                        
                        <div className="relative z-10">
                          {/* Icon and Category */}
                          <div className="flex items-start justify-between mb-4">
                            <div className={`${colors.bg} p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <span className={`${colors.badge} text-xs font-semibold px-3 py-1 rounded-full`}>
                              {update.category}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-violet-700 transition-colors">
                            {update.title}
                          </h3>

                          {/* Content */}
                          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                            {update.content}
                          </p>

                          {/* Date */}
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(update.date)}</span>
                          </div>
                        </div>

                        {/* Decorative corner */}
                        <div className={`absolute -bottom-6 -right-6 w-24 h-24 ${colors.bg} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="col-span-full text-center py-20"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-violet-100 rounded-full mb-6">
                  <Bell className="h-10 w-10 text-violet-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Updates Yet</h3>
                <p className="text-gray-500">{t.updates.noUpdates}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </ScrollAnimation>
  )
} 