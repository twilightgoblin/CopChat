"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Shield, FileQuestion, Home, UserCheck, Volume2, User, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { translations } from "@/app/translations"

const services = [
  {
    icon: Phone,
    title: {
      en: "Station Contact Details",
      kn: "ಠಾಣೆ ಸಂಪರ್ಕ ವಿವರಗಳು"
    },
    description: {
      en: "Find contact information for all police stations",
      kn: "ಎಲ್ಲಾ ಪೊಲೀಸ್ ಠಾಣೆಗಳ ಸಂಪರ್ಕ ವಿವರಗಳನ್ನು ಹುಡುಕಿ"
    },
    link: "/station-contacts",
  },
  {
    icon: UserCheck,
    title: {
      en: "Women Companion Service",
      kn: "ಮಹಿಳಾ ಸಂಗಾತಿ ಸೇವೆ"
    },
    description: {
      en: "Request a companion for safe travel",
      kn: "ಸುರಕ್ಷಿತ ಪ್ರಯಾಣಕ್ಕಾಗಿ ಸಂಗಾತಿಯನ್ನು ವಿನಂತಿಸಿ"
    },
    link: "/women-companion",
  },
  {
    icon: FileQuestion,
    title: {
      en: "Report Lost and Found",
      kn: "ಕಳೆದುಹೋದ ಮತ್ತು ದೊರೆತ ವಸ್ತುಗಳ ವರದಿ"
    },
    description: {
      en: "Report lost items or submit found items",
      kn: "ಕಳೆದುಹೋದ ವಸ್ತುಗಳನ್ನು ವರದಿ ಮಾಡಿ ಅಥವಾ ದೊರೆತ ವಸ್ತುಗಳನ್ನು ಸಲ್ಲಿಸಿ"
    },
    link: "/lost-and-found",
  },
  {
    icon: Home,
    title: {
      en: "Locked House Monitoring",
      kn: "ಅಗಲಿದ ಮನೆ ಮೇಲ್ವಿಚಾರಣೆ"
    },
    description: {
      en: "Register your house for police monitoring while traveling",
      kn: "ಪ್ರಯಾಣದ ಸಮಯದಲ್ಲಿ ಪೊಲೀಸ್ ಮೇಲ್ವಿಚಾರಣೆಗಾಗಿ ನಿಮ್ಮ ಮನೆಯನ್ನು ನೋಂದಾಯಿಸಿ"
    },
    link: "/locked-house-monitoring",
  },
  {
    icon: User,
    title: {
      en: "Senior Citizen Services",
      kn: "ವೃದ್ಧ ನಾಗರಿಕ ಸೇವೆಗಳು"
    },
    description: {
      en: "Register for special assistance and support services",
      kn: "ವಿಶೇಷ ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ ಸೇವೆಗಳಿಗಾಗಿ ನೋಂದಾಯಿಸಿ"
    },
    link: "/senior-citizen",
  },
  {
    icon: Volume2,
    title: {
      en: "Loudspeaker & Events Permission",
      kn: "ಲೌಡ್‌ಸ್ಪೀಕರ್ ಮತ್ತು ಕಾರ್ಯಕ್ರಮಗಳ ಅನುಮತಿ"
    },
    description: {
      en: "Apply for permission to use loudspeakers or host events",
      kn: "ಲೌಡ್‌ಸ್ಪೀಕರ್‌ಗಳನ್ನು ಬಳಸಲು ಅಥವಾ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಆಯೋಜಿಸಲು ಅನುಮತಿಗಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ"
    },
    link: "/loudspeaker-events-permission",
  },
]

export default function AdditionalServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="w-full py-12 bg-gradient-to-b from-violet-50 to-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-violet-900 mb-4">{t.services.title}</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-4"></div>
          <p className="text-lg text-violet-700">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card className="h-full p-6 border border-violet-200 hover:border-violet-300 hover:shadow-xl transition-all duration-300 relative overflow-hidden bg-white/80 backdrop-blur-sm">
                  {/* Background decoration */}
                  <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-violet-50 opacity-70"></div>

                  <div className="flex flex-col h-full relative z-10">
                    <div className="flex items-center mb-4">
                      <div
                        className={`p-3 rounded-lg bg-violet-100 transform transition-all duration-300 ${hoveredIndex === index ? "bg-violet-200" : ""}`}
                      >
                        <Icon className={`h-6 w-6 text-violet-600`} />
                      </div>
                      <h3 className="text-lg font-semibold text-violet-900 ml-3">{service.title[language]}</h3>
                    </div>
                    <p className="text-violet-700 flex-grow mb-4">{service.description[language]}</p>
                    <Link href={service.link} scroll={true} className="mt-auto">
                      <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                        {t.services.accessService}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 