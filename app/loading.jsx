"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

export default function Loading() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing")
  const [dots, setDots] = useState("")

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 5
        return newProgress > 100 ? 100 : newProgress
      })
    }, 200)

    // Animate loading text
    const textInterval = setInterval(() => {
      if (progress < 30) {
        setLoadingText("Initializing")
      } else if (progress < 60) {
        setLoadingText("Loading resources")
      } else if (progress < 90) {
        setLoadingText("Almost ready")
      } else {
        setLoadingText("Completing")
      }
    }, 2000)

    // Animate dots
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."))
    }, 500)

    return () => {
      clearInterval(interval)
      clearInterval(textInterval)
      clearInterval(dotsInterval)
    }
  }, [progress])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-violet-50 to-white overflow-hidden">
      <div className="w-full max-w-md mx-auto p-8 rounded-xl bg-white shadow-xl border border-violet-100 relative">
        {/* Animated background elements */}
        <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-float-delay"></div>
          <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-indigo-200 rounded-full opacity-30 animate-float-slow"></div>
        </div>

        <div className="flex flex-col items-center space-y-6 relative z-10">
          {/* Animated loader */}
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full bg-violet-100 animate-pulse"></div>
            <svg className="absolute inset-0" viewBox="0 0 100 100">
              <circle
                className="text-gray-200"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
              <circle
                className="text-violet-600"
                strokeWidth="8"
                strokeDasharray={251.2}
                strokeDashoffset={251.2 - (progress / 100) * 251.2}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="40"
                cx="50"
                cy="50"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="h-10 w-10 text-violet-600 animate-spin" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-violet-900">
            {loadingText}
            <span className="inline-block w-8">{dots}</span>
          </h2>

          <p className="text-violet-600 text-center">Please wait while we prepare your content</p>

          {/* Progress bar */}
          <div className="w-full h-3 bg-violet-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Progress percentage */}
          <div className="text-sm font-medium text-violet-800">{Math.round(progress)}% Complete</div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-violet-400 rounded-full opacity-20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.2; }
          90% { opacity: 0.2; }
          100% { transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); opacity: 0; }
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 18s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float-slow {
          animation: float 20s ease-in-out infinite;
          animation-delay: 5s;
        }
      `}</style>
    </div>
  )
} 