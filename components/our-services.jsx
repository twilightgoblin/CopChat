"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Users, Target, Award } from "lucide-react"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { translations } from "@/app/translations"

const services = [
  {
    icon: Shield,
    title: {
      en: "File a Complaint",
      kn: "ದೂರು ದಾಖಲಿಸಿ"
    },
    description: {
      en: "Register your complaints online securely",
      kn: "ನಿಮ್ಮ ದೂರುಗಳನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿ ದಾಖಲಿಸಿ"
    },
    link: "/file-complaint",
  },
  {
    icon: Users,
    title: {
      en: "Beat Police",
      kn: "ಬೀಟ್ ಪೊಲೀಸ್"
    },
    description: {
      en: "Find your local beat police officer",
      kn: "ನಿಮ್ಮ ಸ್ಥಳೀಯ ಬೀಟ್ ಪೊಲೀಸ್ ಅಧಿಕಾರಿಯನ್ನು ಹುಡುಕಿ"
    },
    link: "/beat-police",
  },
  {
    icon: Target,
    title: {
      en: "Nearest Station",
      kn: "ಹತ್ತಿರದ ಪೊಲೀಸ್ ಠಾಣೆ"
    },
    description: {
      en: "Locate your nearest police station",
      kn: "ನಿಮ್ಮ ಹತ್ತಿರದ ಪೊಲೀಸ್ ಠಾಣೆಯನ್ನು ಹುಡುಕಿ"
    },
    link: "/nearest-station",
  },
  {
    icon: Award,
    title: {
      en: "Anonymous Complaints",
      kn: "ಅನಾಮಧೇಯ ದೂರುಗಳು"
    },
    description: {
      en: "Submit complaints anonymously",
      kn: "ಅನಾಮಧೇಯವಾಗಿ ದೂರುಗಳನ್ನು ಸಲ್ಲಿಸಿ"
    },
    link: "/anonymous-complaints",
  },
]

export default function OurServices() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-violet-900">{t.services.title}</h2>
          <div className="h-0.5 w-16 bg-violet-600 mx-auto my-3"></div>
          <p className="text-violet-700">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 h-full flex flex-col shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex-1">
                  <div className="mb-4 text-violet-600">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-medium text-violet-900 mb-3">{service.title[language]}</h3>
                  <p className="text-violet-700 mb-6">{service.description[language]}</p>
                </div>
                <div className="mt-auto">
                  <Link href={service.link} scroll={false}>
                    <Button className="w-full bg-violet-600 hover:bg-violet-700">{t.services.accessService}</Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 