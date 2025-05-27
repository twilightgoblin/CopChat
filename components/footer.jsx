"use client"

import Link from "next/link"
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowUp, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gradient-to-r from-violet-900 to-purple-800 text-white relative">
      {/* Wave SVG divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform translate-y-[-98%]">
        <svg
          className="relative block w-full h-12 sm:h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/karnataka-state-emblem.png"
                  alt="Karnataka State Emblem"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-bold text-xl">Chikkaballapura Police</span>
            </div>
            <p className="text-violet-200 text-sm">
              Serving and protecting our community with dedication, integrity, and excellence.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="https://www.facebook.com/sp.chikkaballapura"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/spcbpura?t=gWGEB7YcdNFR7ggrx0lxcw&s=08"
                className="text-violet-200 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/spcbpura/?igsh=bjV1a28wbWQ2YzVj#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.whatsapp.com/channel/0029VaxPouIBqbr67u0tzT3P"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-violet-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/beat-police" className="text-violet-200 hover:text-white transition-colors">
                  Beat Police
                </Link>
              </li>
              <li>
                <Link href="/nearest-station" className="text-violet-200 hover:text-white transition-colors">
                  Nearest Station
                </Link>
              </li>
              <li>
                <Link href="/anonymous-complaints" className="text-violet-200 hover:text-white transition-colors">
                  Anonymous Complaints
                </Link>
              </li>
              <li>
                <Link href="/station-contacts" className="text-violet-200 hover:text-white transition-colors">
                  Station Contacts
                </Link>
              </li>
              <li>
                <Link href="/lost-and-found" className="text-violet-200 hover:text-white transition-colors">
                  Lost & Found
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-violet-700 pb-2">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/women-companion" className="text-violet-200 hover:text-white transition-colors">
                  Women Companion
                </Link>
              </li>
              <li>
                <Link href="/locked-house-monitoring" className="text-violet-200 hover:text-white transition-colors">
                  Locked House Monitoring
                </Link>
              </li>
              <li>
                <Link href="/senior-citizen" className="text-violet-200 hover:text-white transition-colors">
                  Senior Citizen Services
                </Link>
              </li>
              <li>
                <Link
                  href="/loudspeaker-events-permission"
                  className="text-violet-200 hover:text-white transition-colors"
                >
                  Event Permissions
                </Link>
              </li>
              <li>
                <Link href="/chatbot" className="text-violet-200 hover:text-white transition-colors">
                  Chatbot Assistance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-violet-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-violet-300 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Emergency</p>
                  <p className="text-violet-200">112</p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-violet-300 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Control Room</p>
                  <p className="text-violet-200">08156-277211</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-violet-300 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-violet-200">spcbpura@ksp.gov.in</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-violet-300 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Headquarters</p>
                  <p className="text-violet-200">SP Office, Chikkaballapura - 562101</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-violet-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-violet-200 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Chikkaballapura Police Department. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="text-violet-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-violet-200 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-violet-200 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {showBackToTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full bg-violet-600 hover:bg-violet-700 shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </footer>
  )
} 