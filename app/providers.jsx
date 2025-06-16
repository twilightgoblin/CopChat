"use client"

import React from "react"
import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "./contexts/LanguageContext"

export function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  )
} 