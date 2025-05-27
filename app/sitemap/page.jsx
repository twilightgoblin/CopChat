"use client"

import Image from "next/image"
import Link from "next/link"
import { Map, Shield, Users, MessageSquare, Phone, Info, FileText, AlertTriangle } from "lucide-react"

export default function Sitemap() {
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
          <h1 className="text-4xl font-bold text-violet-900 text-center">Sitemap</h1>
          <p className="text-violet-600 mt-2 text-center">Chikkaballapura Police Department</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          {/* Main Services */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-semibold text-violet-900">Main Services</h2>
            </div>
            <div className="bg-violet-50 rounded-lg p-6">
              <ul className="space-y-4">
                <li>
                  <Link href="/beat-police" className="flex items-center space-x-3 text-violet-700 hover:text-violet-900">
                    <Map className="h-5 w-5" />
                    <span>Beat Police</span>
                  </Link>
                </li>
                <li>
                  <Link href="/nearest-police-station" className="flex items-center space-x-3 text-violet-700 hover:text-violet-900">
                    <Map className="h-5 w-5" />
                    <span>Nearest Police Station</span>
                  </Link>
                </li>
                <li>
                  <Link href="/anonymous-complaints" className="flex items-center space-x-3 text-violet-700 hover:text-violet-900">
                    <MessageSquare className="h-5 w-5" />
                    <span>Anonymous Complaints</span>
                  </Link>
                </li>
                <li>
                  <Link href="/police-chatbot" className="flex items-center space-x-3 text-violet-700 hover:text-violet-900">
                    <MessageSquare className="h-5 w-5" />
                    <span>Police Chatbot</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Services */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Users className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-semibold text-violet-900">Additional Services</h2>
            </div>
            <div className="bg-violet-50 rounded-lg p-6">
              <ul className="space-y-4">
                <li>
                  <Link href="/station-contact-details" className="flex items-center space-x-3 text-violet-700 hover:text-violet-900">
                    <Phone className="h-5 w-5" />
                    <span>Station Contact Details</span>
                  </Link>
                </li>
                <li>
                  <Link href="/women-companion-service" className="flex items-center space-x-3 text-violet-700 hover:text-violet-900">
                    <Users className="h-5 w-5" />
                    <span>Women Companion Service</span>
                  </Link>
                </li>
                <li>
                  <Link href="/lost-and-found" className="flex items-center space-x-3 text-violet-700 hover:text-violet-900">
                    <Shield className="h-5 w-5" />
                    <span>Report Lost and Found</span>
                  </Link>
                </li>
                <li>
                  <Link href="/locked-house-monitoring" className="flex items-center space-x-3 text-violet-700 hover:text-violet-900">
                    <Shield className="h-5 w-5" />
                    <span>Locked House Monitoring</span>
                  </Link>
                </li>
                <li>
                  <Link href="/senior-citizen" className="flex items-center space-x-3 text-violet-700 hover:text-violet-900">
                    <Users className="h-5 w-5" />
                    <span>Senior Citizen Services</span>
                  </Link>
                </li>
                <li>
                  <Link href="/loudspeaker-events-permission" className="flex items-center space-x-3 text-violet-700 hover:text-violet-900">
                    <Shield className="h-5 w-5" />
                    <span>Loudspeaker & Events Permission</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Information Pages */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Info className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-semibold text-violet-900">Information Pages</h2>
            </div>
            <div className="bg-violet-50 rounded-lg p-6">
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="flex items-center space-x-3 text-violet-700 hover:text-violet-900">
                    <Info className="h-5 w-5" />
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="flex items-center space-x-3 text-violet-700 hover:text-violet-900">
                    <Phone className="h-5 w-5" />
                    <span>Contact Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="flex items-center space-x-3 text-violet-700 hover:text-violet-900">
                    <FileText className="h-5 w-5" />
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="flex items-center space-x-3 text-violet-700 hover:text-violet-900">
                    <FileText className="h-5 w-5" />
                    <span>Terms of Service</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Emergency Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-semibold text-violet-900">Emergency Information</h2>
            </div>
            <div className="bg-violet-50 rounded-lg p-6">
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-violet-700">
                  <Phone className="h-5 w-5" />
                  <span>Police Emergency: 112</span>
                </li>
                <li className="flex items-center space-x-3 text-violet-700">
                  <Phone className="h-5 w-5" />
                  <span>Medical Emergency: 108</span>
                </li>
                <li className="flex items-center space-x-3 text-violet-700">
                  <Phone className="h-5 w-5" />
                  <span>Women & Child Helpline: 1091</span>
                </li>
                <li className="flex items-center space-x-3 text-violet-700">
                  <Phone className="h-5 w-5" />
                  <span>Cybercrime: 1930</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 