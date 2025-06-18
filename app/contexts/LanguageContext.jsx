"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('kn')

  useEffect(() => {
    // Always start with Kannada as default language
    // Remove any previously saved language preference
    localStorage.removeItem('language')
    setLanguage('kn')
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'kn' : 'en'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 