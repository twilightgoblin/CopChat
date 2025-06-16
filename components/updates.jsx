"use client"

import React, { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { AlertTriangle, Bell, Info, RefreshCw, Calendar, Newspaper } from "lucide-react"
import { useRef } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { translations } from "@/app/translations"

// This would be replaced with actual data from WhatsApp API
const defaultUpdates = [
  { icon: AlertTriangle, key: "trafficRegulations", type: "warning" },
  { icon: Bell, key: "mobileApp", type: "info" },
  { icon: Info, key: "communityPolicing", type: "success" },
  { icon: AlertTriangle, key: "trafficViolations", type: "warning" },
]

export default function Updates() {
  const [loading, setLoading] = useState(true)
  const [updates, setUpdates] = useState([])
  const controls = useAnimation()
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        setUpdates(defaultUpdates)
      } catch (error) {
        console.error('Error fetching updates:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUpdates()
  }, [])

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    })
  }, [controls])

  const getIconColor = (type) => {
    switch (type) {
      case 'warning':
        return 'text-yellow-500'
      case 'info':
        return 'text-blue-500'
      case 'success':
        return 'text-green-500'
      default:
        return 'text-violet-500'
    }
  }

  return (
    <ScrollAnimation>
      <section className="py-12 md:py-24 bg-gradient-to-b from-violet-50 to-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-violet-900 mb-4">{t.updates.title}</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-4"></div>
            <p className="text-lg text-violet-700">{t.updates.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              // Loading skeleton
              Array(3).fill(0).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-lg"></div>
                </div>
              ))
            ) : updates.length > 0 ? (
              updates.map((update, index) => {
                const Icon = update.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    className="relative"
                  >
                    <div className="backdrop-blur-sm bg-white/60 p-6 rounded-xl shadow-lg border border-violet-100 hover:border-violet-200 transition-all duration-300 h-full">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-violet-50 ${getIconColor(update.type)}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-violet-900 font-medium">
                            {t.updates.updates[update.key]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">{t.updates.noUpdates}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </ScrollAnimation>
  )
} 