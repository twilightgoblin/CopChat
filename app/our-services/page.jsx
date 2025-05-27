"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, MessageSquare, Shield, AlertTriangle, ArrowRight, User } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Main services
const mainServices = [
  {
    icon: Shield,
    title: "Beat Police",
    description: "Find information about beat police in your area",
    link: "/beat-police",
  },
  {
    icon: MapPin,
    title: "Nearest Police Station",
    description: "Locate the closest police station to your location",
    link: "/nearest-station",
  },
  {
    icon: AlertTriangle,
    title: "Anonymous Complaints",
    description: "Submit complaints anonymously and securely",
    link: "/anonymous-complaints",
  },
  {
    icon: MessageSquare,
    title: "Police Chatbot",
    description: "Get instant answers to your queries 24/7",
    link: "/chatbot",
  },
]

// Additional services
const additionalServices = [
  {
    icon: MapPin,
    title: "Station Contact Details",
    description: "Find contact information for all police stations",
    link: "/station-contacts",
  },
  {
    icon: Shield,
    title: "Women Companion Service",
    description: "Request a companion for safe travel",
    link: "/women-companion",
  },
  {
    icon: AlertTriangle,
    title: "Report Lost and Found",
    description: "Report lost items or submit found items",
    link: "/lost-and-found",
  },
  {
    icon: Shield,
    title: "Locked House Monitoring",
    description: "Register your house for police monitoring while traveling",
    link: "/locked-house-monitoring",
  },
  {
    icon: User,
    title: "Senior Citizen Services",
    description: "Register for special assistance and support services",
    link: "/senior-citizen",
  },
  {
    icon: MessageSquare,
    title: "Loudspeaker & Events Permission",
    description: "Apply for permission to use loudspeakers or host events",
    link: "/loudspeaker-events-permission",
  },
]

export default function OurServicesPage() {
  const [hoveredService, setHoveredService] = useState(null)

  return (
    <div className="min-h-screen">
      {/* Main Services Section with darker gradient background */}
      <div className="bg-gradient-to-b from-violet-900 via-violet-800 to-violet-700 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mx-auto mb-4"></div>
            <p className="text-lg text-violet-100 max-w-3xl mx-auto">
              Comprehensive police services to ensure your safety and convenience
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-white mb-8"
          >
            Essential Services
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <Card
                    className="transition-all duration-300 hover:shadow-lg cursor-pointer bg-white/90 backdrop-blur-sm border-violet-200/30 overflow-hidden h-full"
                    onMouseEnter={() => setHoveredService(service.title)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Decorative gradient corner */}
                    <div className="absolute -right-10 -top-10 w-20 h-20 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full opacity-70"></div>

                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-violet-100 mr-3 transition-all duration-300 hover:bg-violet-200">
                          <Icon className="h-5 w-5 text-violet-600" />
                        </div>
                        <h3 className="text-lg font-bold text-violet-900">{service.title}</h3>
                      </div>
                      <p className="text-violet-600 mb-4">{service.description}</p>
                    </CardContent>

                    <CardFooter className="px-6 pb-6 pt-0">
                      <Link href={service.link} className="w-full" scroll={true}>
                        <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                          Access Service
                          <motion.div
                            animate={{
                              x: hoveredService === service.title ? 5 : 0,
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </motion.div>
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Gradient divider between sections */}
      <div className="h-2 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 w-full"></div>

      {/* Additional Services Section with different background */}
      <div className="bg-gradient-to-b from-indigo-50 to-white py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-indigo-900 mb-8"
          >
            Additional Services
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <Card
                    className="transition-all duration-300 hover:shadow-lg cursor-pointer bg-white/90 backdrop-blur-sm border-indigo-200 overflow-hidden h-full"
                    onMouseEnter={() => setHoveredService(service.title)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Decorative gradient corner */}
                    <div className="absolute -right-10 -top-10 w-20 h-20 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-70"></div>

                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-indigo-100 mr-3 transition-all duration-300 hover:bg-indigo-200">
                          <Icon className="h-5 w-5 text-indigo-600" />
                        </div>
                        <h3 className="text-lg font-bold text-indigo-900">{service.title}</h3>
                      </div>
                      <p className="text-indigo-600 mb-4">{service.description}</p>
                    </CardContent>

                    <CardFooter className="px-6 pb-6 pt-0">
                      <Link href={service.link} className="w-full" scroll={true}>
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                          Access Service
                          <motion.div
                            animate={{
                              x: hoveredService === service.title ? 5 : 0,
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </motion.div>
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
} 