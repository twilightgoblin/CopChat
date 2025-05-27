import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Target, Award } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const features = [
  {
    icon: Shield,
    title: "Protection",
    description: "24/7 vigilant protection for our community",
  },
  {
    icon: Users,
    title: "Community Service",
    description: "Dedicated to serving all citizens",
  },
  {
    icon: Target,
    title: "Quick Response",
    description: "Rapid emergency response system",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to maintaining high standards",
  },
]

export default function AboutUs() {
  return (
    <ScrollAnimation>
      <section className="py-12 md:py-24 bg-primary/5">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">About Us</h2>
              <p className="text-muted-foreground">
                The Chikkaballapura Police Department is dedicated to maintaining law and order, ensuring public safety,
                and fostering positive community relationships. Our force consists of highly trained professionals
                committed to serving with integrity and compassion.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card key={index} className="bg-background">
                    <CardContent className="p-6">
                      <Icon className="h-8 w-8 mb-4 text-primary" />
                      <h3 className="font-bold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
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