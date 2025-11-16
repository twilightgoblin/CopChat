"use client"

import { Shield, Users, Target, Award } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { translations } from "@/app/translations"
import { ParticleCard } from "@/components/particle-card"

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
                  <ParticleCard
                    key={index}
                    icon={Icon}
                    title={featureContent.title}
                    description={featureContent.description}
                    index={index}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  )
} 