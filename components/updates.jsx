"use client"

import React, { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { AlertTriangle, Bell, Info, RefreshCw, Calendar, Newspaper } from "lucide-react"
import { useRef } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"

// This would be replaced with actual data from WhatsApp API
const defaultUpdates = [
  { icon: AlertTriangle, text: "New traffic regulations in effect from March 1st", type: "warning" },
  { icon: Bell, text: "Download our mobile app for instant updates", type: "info" },
  { icon: Info, text: "Community policing initiative launched in all sectors", type: "success" },
  { icon: AlertTriangle, text: "Special drive against traffic violations this week", type: "warning" },
]

export default function Updates() {
  const containerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [autoScroll, setAutoScroll] = useState(true)
  const [updates, setUpdates] = useState([])
  const [loading, setLoading] = useState(true)
  const [lastFetched, setLastFetched] = useState(null)
  const controls = useAnimation()

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/updates')
        if (!response.ok) throw new Error('Failed to fetch updates')
        const data = await response.json()
        setUpdates(data)
        setLastFetched(new Date())
      } catch (error) {
        console.error('Error fetching updates:', error)
        setUpdates(defaultUpdates)
      } finally {
        setLoading(false)
      }
    }

    fetchUpdates()
  }, [])

  useEffect(() => {
    let animationId

    const startAutoScroll = () => {
      if (!containerRef.current || !autoScroll) return

      const scrollSpeed = 1 // pixels per frame
      const container = containerRef.current

      const animate = () => {
        if (!container) return
        container.scrollLeft += scrollSpeed

        // Reset scroll position when reaching the end
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0
        }

        animationId = requestAnimationFrame(animate)
      }

      animationId = requestAnimationFrame(animate)
    }

    startAutoScroll()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [autoScroll])

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setAutoScroll(false)
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0))
    setScrollLeft(containerRef.current?.scrollLeft || 0)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setTimeout(() => setAutoScroll(true), 3000) // Resume auto-scroll after 3 seconds
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()

    const x = e.pageX - (containerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2 // Scroll speed multiplier
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setAutoScroll(false)
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0))
    setScrollLeft(containerRef.current?.scrollLeft || 0)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    setTimeout(() => setAutoScroll(true), 3000) // Resume auto-scroll after 3 seconds
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return

    const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2 // Scroll speed multiplier
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Alert':
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case 'Event':
        return <Calendar className="h-5 w-5 text-blue-500" />
      case 'News':
        return <Newspaper className="h-5 w-5 text-green-500" />
      default:
        return <Bell className="h-5 w-5 text-violet-500" />
    }
  }

  return (
    <ScrollAnimation>
      <section className="py-12 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-violet-900 mb-4">Latest Updates</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-4"></div>
            <p className="text-lg text-violet-700">Stay informed with our latest announcements and news</p>
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
              updates.map((update, index) => (
                <motion.div
                  key={update._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-lg shadow-lg ${
                    update.isImportant ? 'bg-red-50' : 'bg-white'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        {getCategoryIcon(update.category)}
                        <span className={`text-sm font-medium ${
                          update.category === 'Alert' ? 'text-red-600' :
                          update.category === 'Event' ? 'text-blue-600' :
                          update.category === 'News' ? 'text-green-600' :
                          'text-violet-600'
                        }`}>
                          {update.category}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(update.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{update.title}</h3>
                    <p className="text-gray-600">{update.content}</p>
                  </div>
                  {update.isImportant && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-sm font-medium">
                      Important
                    </div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No updates available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </ScrollAnimation>
  )
} 