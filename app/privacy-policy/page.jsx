"use client"

import Image from "next/image"
import { Shield, Lock, User, Share2, AlertCircle, Phone } from "lucide-react"

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-violet-900 text-center">Privacy Policy</h1>
          <p className="text-violet-600 mt-2 text-center">Chikkaballapura Police Department</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            At Chikkaballapura Police Department, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and services.
          </p>

          {/* Information Collection Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <User className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-semibold text-violet-900">Information We Collect</h2>
            </div>
            <div className="bg-violet-50 rounded-lg p-6">
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Address and location information</li>
                <li>Complaint and service request details</li>
                <li>Device and browser information</li>
                <li>Usage data and analytics</li>
              </ul>
            </div>
          </div>

          {/* Data Usage Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-semibold text-violet-900">How We Use Your Information</h2>
            </div>
            <div className="bg-violet-50 rounded-lg p-6">
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>To process and respond to your service requests</li>
                <li>To provide emergency assistance when needed</li>
                <li>To improve our services and website functionality</li>
                <li>To communicate important updates and information</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>
          </div>

          {/* Security Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Lock className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-semibold text-violet-900">Data Security</h2>
            </div>
            <div className="bg-violet-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our security practices include:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Secure data storage and transmission</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Share2 className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-semibold text-violet-900">Information Sharing</h2>
            </div>
            <div className="bg-violet-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Law enforcement agencies when required by law</li>
                <li>Emergency services in case of emergencies</li>
                <li>Service providers who assist in our operations</li>
                <li>Other government departments when necessary</li>
              </ul>
            </div>
          </div>

          {/* User Rights Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-semibold text-violet-900">Your Rights</h2>
            </div>
            <div className="bg-violet-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of non-essential communications</li>
                <li>File a complaint about data handling</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-semibold text-violet-900">Contact Us</h2>
            </div>
            <div className="bg-violet-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                If you have any questions or concerns about our Privacy Policy, please contact us at:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Email: spcbpura@ksp.gov.in</li>
                <li>Phone: 08156-277211</li>
                <li>Address: SP Office, Chikkaballapura - 562101</li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  )
} 