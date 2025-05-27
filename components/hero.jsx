"use client"

import { Button } from "@/components/ui/button"
import { Shield, MessageSquare, Phone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Melted liquid background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-300 to-purple-300"></div>
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%238b5cf6' d='M142.8,-191.7C183.4,-169.3,213.8,-130.5,229.7,-87.8C245.6,-45.1,247,-0.5,230.3,35.5C213.6,71.4,178.8,98.8,143.3,123.8C107.8,148.8,71.6,171.5,31.1,182.2C-9.4,193,-54.2,191.7,-91.1,174.9C-128,158.1,-157,125.8,-178.6,88.7C-200.2,51.6,-214.3,9.7,-210.9,-32.3C-207.5,-74.3,-186.6,-116.4,-155.8,-141.6C-125,-166.8,-84.3,-175.2,-43.9,-193.8C-3.6,-212.5,36.5,-241.4,78.9,-237.6C121.3,-233.8,166,-214.2,142.8,-191.7Z' transform='translate(200 200) scale(1.1)'/%3E%3C/svg%3E")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "morph 15s ease-in-out infinite",
          }}
        ></div>
      </div>

      {/* Police-related shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.svg
          className="absolute top-1/4 left-1/4 w-10 h-10 sm:w-16 sm:h-16 text-white/20"
          viewBox="0 0 24 24"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <path
            fill="currentColor"
            d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z"
          />
        </motion.svg>

        <motion.svg
          className="absolute top-3/4 right-1/4 w-10 h-10 sm:w-12 sm:h-12 text-white/20"
          viewBox="0 0 24 24"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <path
            fill="currentColor"
            d="M18,2A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H18M18,4H6V20H18V4M7,5H9V9H7V5M15,5H17V9H15V5M7,11H9V15H7V11M15,11H17V15H15V11M7,17H9V19H7V17M15,17H17V19H15V17Z"
          />
        </motion.svg>

        <motion.svg
          className="absolute bottom-1/4 left-1/3 w-16 h-16 sm:w-20 sm:h-20 text-white/20"
          viewBox="0 0 24 24"
          initial={{ scale: 0, x: -100 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <path
            fill="currentColor"
            d="M6,7H18A1,1 0 0,1 19,8V16A1,1 0 0,1 18,17H6A1,1 0 0,1 5,16V8A1,1 0 0,1 6,7M6.5,16A0.5,0.5 0 0,0 7,15.5A0.5,0.5 0 0,0 6.5,15A0.5,0.5 0 0,0 6,15.5A0.5,0.5 0 0,0 6.5,16M18,16A0.5,0.5 0 0,0 18.5,15.5A0.5,0.5 0 0,0 18,15A0.5,0.5 0 0,0 17.5,15.5A0.5,0.5 0 0,0 18,16M6.5,8A0.5,0.5 0 0,0 7,7.5A0.5,0.5 0 0,0 6.5,7A0.5,0.5 0 0,0 6,7.5A0.5,0.5 0 0,0 6.5,8M18,8A0.5,0.5 0 0,0 18.5,7.5A0.5,0.5 0 0,0 18,7A0.5,0.5 0 0,0 17.5,7.5A0.5,0.5 0 0,0 18,8M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11Z"
          />
        </motion.svg>

        <motion.svg
          className="absolute top-1/3 right-1/3 w-10 h-10 sm:w-16 sm:h-16 text-white/20"
          viewBox="0 0 24 24"
          initial={{ scale: 0, y: -100 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <path
            fill="currentColor"
            d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"
          />
        </motion.svg>
      </div>

      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-6 md:space-y-8 relative z-10 py-8">
        <motion.div
          initial={{ rotate: -180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <div className="relative w-24 h-24">
            <Image
              src="/images/karnataka-state-emblem.png"
              alt="Karnataka State Emblem"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>
        </motion.div>
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Chikkaballapura Police Services
        </motion.h1>
        <motion.p
          className="max-w-[600px] text-white text-sm sm:text-base md:text-lg drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Serving and Protecting Our Community with Dedication, Integrity, and Excellence
        </motion.p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white shadow-lg"
            onClick={() => (window.location.href = "tel:100")}
          >
            <Phone className="mr-2 h-4 w-4" />
            Emergency 100
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/80 backdrop-blur-sm text-violet-700 hover:bg-white border-violet-300 shadow-lg"
          >
            <Link href="/chatbot" className="flex items-center justify-center">
              <MessageSquare className="mr-2 h-4 w-4" />
              Talk to Chatbot
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Simple gradient divider line */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-1">
        <div className="w-full h-full bg-gradient-to-r from-violet-400 via-purple-500 to-violet-400"></div>
      </div>

      {/* Add CSS for the morphing animation */}
      <style jsx global>{`
        @keyframes morph {
          0% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
        }
      `}</style>
    </section>
  )
} 