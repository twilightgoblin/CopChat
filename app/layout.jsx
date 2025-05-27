import React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export const metadata = {
  title: "Chikkaballapura Police Services",
  description: "Official website for Chikkaballapura Police Services",
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: '/images/karnataka-state-emblem.png',
        type: 'image/png',
      }
    ],
    shortcut: '/images/karnataka-state-emblem.png',
    apple: '/images/karnataka-state-emblem.png',
  },
}

import "./globals.css" 