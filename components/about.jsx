"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Target, Award } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { translations } from "@/app/translations"

const features = [
  {
    icon: Shield,
    key: "protection",
  },
  {
    icon: Users,
    key: "community",
  },
  {
    icon: Target,
    key: "response",
  },
  {
    icon: Award,
    key: "excellence",
  },
]

export default function AboutUs() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <ScrollAnimation>
      <section className="py-12 md:py-24 bg-gradient-to-b from-violet-50 to-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-violet-900">{t.about.title}</h2>
              <p className="text-violet-700">
                {t.about.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                const featureContent = t.about[feature.key]
                return (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm border-violet-200 hover:border-violet-300 transition-all duration-300">
                    <CardContent className="p-6">
                      <Icon className="h-8 w-8 mb-4 text-violet-600" />
                      <h3 className="font-bold mb-2 text-violet-900">{featureContent.title}</h3>
                      <p className="text-sm text-violet-700">{featureContent.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  )
} 