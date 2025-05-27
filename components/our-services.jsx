"use client"

import Link from "next/link"
import { MapPin, MessageSquare, Shield, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
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

export default function OurServices() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-violet-900">Our Services</h2>
          <div className="h-0.5 w-16 bg-violet-600 mx-auto my-3"></div>
          <p className="text-violet-700">Essential police services to ensure your safety and convenience</p>
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
                  <h3 className="text-xl font-medium text-violet-900 mb-3">{service.title}</h3>
                  <p className="text-violet-700 mb-6">{service.description}</p>
                </div>
                <div className="mt-auto">
                  <Link href={service.link} scroll={false}>
                    <Button className="w-full bg-violet-600 hover:bg-violet-700">Access Service</Button>
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