"use client"

import Image from "next/image"
import { Shield, Users, Target, Award, Clock, Star } from "lucide-react"
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
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Always ready to serve and protect",
  },
  {
    icon: Star,
    title: "Public Trust",
    description: "Building trust through transparency",
  },
]

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        {/* Header with Logo */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative w-24 h-24 mb-4">
            <Image
              src="/images/karnataka-state-emblem.png"
              alt="Karnataka State Police Emblem"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-violet-900 text-center">About Us</h1>
          <p className="text-violet-600 mt-2 text-center">Chikkaballapura Police Department</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-violet-900">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              The Chikkaballapura Police Department is committed to maintaining law and order, preventing crime, and ensuring the safety and security of all citizens. We strive to provide professional, efficient, and transparent police services while upholding the highest standards of integrity and accountability.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-violet-50 rounded-lg p-6">
                <feature.icon className="h-8 w-8 text-violet-600 mb-4" />
                <h3 className="text-lg font-semibold text-violet-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Our Values */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-violet-900">Our Values</h2>
            <div className="bg-violet-50 rounded-lg p-6">
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Integrity and Professionalism</li>
                <li>Community Partnership</li>
                <li>Respect for Human Rights</li>
                <li>Transparency and Accountability</li>
                <li>Innovation and Technology</li>
                <li>Public Service Excellence</li>
              </ul>
            </div>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-violet-900">Our Services</h2>
            <div className="bg-violet-50 rounded-lg p-6">
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>24/7 Emergency Response</li>
                <li>Community Policing</li>
                <li>Crime Prevention</li>
                <li>Traffic Management</li>
                <li>Women and Child Protection</li>
                <li>Senior Citizen Services</li>
                <li>Cyber Crime Prevention</li>
                <li>Public Awareness Programs</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-violet-900">Contact Information</h2>
            <div className="bg-violet-50 rounded-lg p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium mr-2">Address:</span>
                  <span>SP Office, Chikkaballapura - 562101</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Phone:</span>
                  <span>08156-277211</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Email:</span>
                  <span>spcbpura@ksp.gov.in</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Emergency:</span>
                  <span>112</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 