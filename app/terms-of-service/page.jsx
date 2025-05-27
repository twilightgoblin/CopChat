"use client"

import Image from "next/image"
import { FileText, Shield, AlertTriangle, User, Lock, Scale, AlertCircle, Phone } from "lucide-react"

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold text-violet-900 text-center">Terms of Service</h1>
          <p className="text-violet-600 mt-2 text-center">Chikkaballapura Police Department</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to the Chikkaballapura Police Department website. By accessing and using this website, you agree to comply with and be bound by these Terms of Service. Please read these terms carefully before using our services.
          </p>

          {/* Acceptance of Terms */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-semibold text-violet-900">1. Acceptance of Terms</h2>
            </div>
            <div className="bg-violet-50 rounded-lg p-6">
              <p className="text-gray-700">
                By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>
          </div>

          {/* Use of Services */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <User className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-semibold text-violet-900">2. Use of Services</h2>
            </div>
            <div className="bg-violet-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">You agree to use our services only for lawful purposes and in accordance with these terms. You must not:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Submit false or misleading information</li>
                <li>Use the services for any illegal activities</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the website</li>
                <li>Submit malicious code or content</li>
              </ul>
            </div>
          </div>

          {/* Emergency Services */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-semibold text-violet-900">3. Emergency Services</h2>
            </div>
            <div className="bg-violet-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                This website is not intended for emergency situations. In case of emergencies, please:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Call 112 for police emergencies</li>
                <li>Call 108 for medical emergencies</li>
                <li>Visit your nearest police station</li>
              </ul>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Lock className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-semibold text-violet-900">4. User Responsibilities</h2>
            </div>
            <div className="bg-violet-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">As a user of our services, you are responsible for:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the confidentiality of your account</li>
                <li>Reporting any security concerns immediately</li>
                <li>Complying with all applicable laws and regulations</li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Scale className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-semibold text-violet-900">5. Intellectual Property</h2>
            </div>
            <div className="bg-violet-50 rounded-lg p-6">
              <p className="text-gray-700">
                All content on this website, including text, graphics, logos, and software, is the property of the Chikkaballapura Police Department and is protected by intellectual property laws. You may not use, reproduce, or distribute this content without our permission.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-semibold text-violet-900">6. Limitation of Liability</h2>
            </div>
            <div className="bg-violet-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                The Chikkaballapura Police Department is not liable for any damages arising from the use or inability to use our services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Direct, indirect, or consequential damages</li>
                <li>Loss of data or business interruption</li>
                <li>Errors or omissions in the information provided</li>
              </ul>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FileText className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-semibold text-violet-900">7. Changes to Terms</h2>
            </div>
            <div className="bg-violet-50 rounded-lg p-6">
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page. Your continued use of our services after such modifications constitutes your acceptance of the new terms.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-semibold text-violet-900">8. Contact Information</h2>
            </div>
            <div className="bg-violet-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us at:
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