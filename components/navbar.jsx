"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Facebook, Instagram, Twitter, MessageSquare, Menu, X, Bot, Users, Home, Phone, Search, FileText, AlertTriangle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full gradient-violet">
        <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/images/karnataka-state-emblem.png"
                alt="Karnataka State Emblem"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-xl text-white">Chikkaballapura Police</span>
          </Link>
          <div className="md:hidden">
            <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 text-white">
              <Menu className="h-6 w-6" />
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/beat-police">Beat Police</NavLink>
            <NavLink href="/nearest-station">Nearest Station</NavLink>
            <NavLink href="/anonymous-complaints">Anonymous Complaints</NavLink>
            <Button variant="secondary" className="text-sm">
              <Link href="/chatbot">Chatbot</Link>
            </Button>
          </nav>
        </div>
      </header>
    )
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky top-0 z-50 w-full gradient-violet animate-gradient"
    >
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-12 h-12">
            <Image
              src="/images/karnataka-state-emblem.png"
              alt="Karnataka State Emblem"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bold text-xl text-white">Chikkaballapura Police</span>
        </Link>

        {/* Mobile menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="md:hidden">
            <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[350px] gradient-violet-dark">
            <div className="flex flex-col h-full text-white">
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-xl">Menu</span>
                <div 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </div>
              </div>
              <nav className="flex flex-col space-y-6">
                <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
                  Home
                </MobileNavLink>
                <MobileNavLink href="/beat-police" onClick={() => setIsOpen(false)}>
                  Beat Police
                </MobileNavLink>
                <MobileNavLink href="/nearest-station" onClick={() => setIsOpen(false)}>
                  Nearest Station
                </MobileNavLink>
                <MobileNavLink href="/anonymous-complaints" onClick={() => setIsOpen(false)}>
                  Anonymous Complaints
                </MobileNavLink>
                <div className="pt-2">
                  <p className="text-sm font-medium mb-2">Services</p>
                  <div className="flex flex-col space-y-2 pl-4">
                    <MobileNavLink href="/women-companion" onClick={() => setIsOpen(false)}>
                      Women Companion
                    </MobileNavLink>
                    <MobileNavLink href="/loudspeaker-events-permission" onClick={() => setIsOpen(false)}>
                      Loud Speaker
                    </MobileNavLink>
                    <MobileNavLink href="/locked-house-monitoring" onClick={() => setIsOpen(false)}>
                      Locked House Monitoring
                    </MobileNavLink>
                    <MobileNavLink href="/senior-citizen" onClick={() => setIsOpen(false)}>
                      Senior Citizen
                    </MobileNavLink>
                    <MobileNavLink href="/lost-and-found" onClick={() => setIsOpen(false)}>
                      Lost and Found
                    </MobileNavLink>
                    <MobileNavLink href="/station-contacts" onClick={() => setIsOpen(false)}>
                      Station Contact Details
                    </MobileNavLink>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm font-medium mb-4">Connect With Us</p>
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.whatsapp.com/channel/0029VaxPouIBqbr67u0tzT3P"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-violet-200"
                    >
                      <MessageSquare className="h-5 w-5" />
                    </Link>
                    <Link href="https://www.facebook.com/sp.chikkaballapura" className="hover:text-violet-200">
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/spcbpura/?igsh=bjV1a28wbWQ2YzVj#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-violet-200"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://x.com/spcbpura?t=gWGEB7YcdNFR7ggrx0lxcw&s=08"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-violet-200"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  className="mt-auto text-sm bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <Bot className="h-4 w-4" />
                  <Link href="/chatbot">Chatbot</Link>
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center ml-auto space-x-6 justify-end w-full">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/beat-police">Beat Police</NavLink>
          <NavLink href="/nearest-station">Nearest Station</NavLink>
          <NavLink href="/anonymous-complaints">Anonymous Complaints</NavLink>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-white hover:text-violet-200">
                Services
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-lg p-2 min-w-[200px]">
              <DropdownMenuItem>
                <Link
                  href="/women-companion"
                  className="flex items-center space-x-2 text-gray-700 hover:text-violet-600"
                >
                  <Users className="h-4 w-4" />
                  <span>Women Companion</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/loudspeaker-events-permission"
                  className="flex items-center space-x-2 text-gray-700 hover:text-violet-600"
                >
                  <AlertTriangle className="h-4 w-4" />
                  <span>Loud Speaker</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/locked-house-monitoring"
                  className="flex items-center space-x-2 text-gray-700 hover:text-violet-600"
                >
                  <Home className="h-4 w-4" />
                  <span>Locked House Monitoring</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/senior-citizen"
                  className="flex items-center space-x-2 text-gray-700 hover:text-violet-600"
                >
                  <Users className="h-4 w-4" />
                  <span>Senior Citizen</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/lost-and-found"
                  className="flex items-center space-x-2 text-gray-700 hover:text-violet-600"
                >
                  <Search className="h-4 w-4" />
                  <span>Lost and Found</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/station-contacts"
                  className="flex items-center space-x-2 text-gray-700 hover:text-violet-600"
                >
                  <Phone className="h-4 w-4" />
                  <span>Station Contact Details</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-white hover:text-violet-200">
                Connect With Us
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-lg p-2 min-w-[200px]">
              <DropdownMenuItem>
                <Link
                  href="https://www.whatsapp.com/channel/0029VaxPouIBqbr67u0tzT3P"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-violet-600"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="https://www.facebook.com/sp.chikkaballapura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-violet-600"
                >
                  <Facebook className="h-4 w-4" />
                  <span>Facebook</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="https://www.instagram.com/spcbpura/?igsh=bjV1a28wbWQ2YzVj#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-violet-600"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Instagram</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="https://x.com/spcbpura?t=gWGEB7YcdNFR7ggrx0lxcw&s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-violet-600"
                >
                  <Twitter className="h-4 w-4" />
                  <span>Twitter</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button 
            variant="secondary" 
            className="text-sm bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <Bot className="h-4 w-4" />
            <Link href="/chatbot">Chatbot</Link>
          </Button>
        </nav>
      </div>
    </motion.header>
  )
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-violet-200 transition-colors duration-300"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-white hover:text-violet-200 transition-colors duration-300"
    >
      {children}
    </Link>
  )
} 