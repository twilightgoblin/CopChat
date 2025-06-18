/**
 * Conditionally join class names
 * @param  {...string} classes - Class names to join
 * @returns {string} - Joined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Delay execution for a specified time
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise<void>}
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Check if the device is mobile
 * @returns {boolean}
 */
export function isMobile() {
  return window.innerWidth < 768;
}

/**
 * Safely access translations with fallback values
 * @param {Object} translations - The translations object
 * @param {string} language - The current language
 * @param {string} section - The section to access (e.g., 'stationContacts', 'nearestStation')
 * @returns {Object} - The translation section with fallback values
 */
export function getSafeTranslations(translations, language, section) {
  try {
    const translationSection = translations[language]?.[section]
    if (translationSection) {
      return translationSection
    }
    
    // Return fallback values based on section
    const fallbacks = {
      stationContacts: {
        title: "Station Contact Details",
        searchPlaceholder: "Search contact details...",
        office: "Office:",
        mobile: "Mobile:",
        email: "Email:",
        contactDetails: {}
      },
      nearestStation: {
        title: "Find Nearest Police Station",
        subtitle: "Search by village name, pincode, or famous place to find the nearest police stations",
        searchByVillage: "Search by Village",
        searchByPincode: "Search by Pincode",
        searchByFamousPlace: "Search by Famous Place",
        villagePlaceholder: "Enter village name...",
        pincodePlaceholder: "Enter pincode...",
        famousPlacePlaceholder: "Enter famous place name...",
        search: "Search",
        contactNumber: "Contact Number",
        viewOnGoogleMaps: "View on Google Maps",
        importantNote: "Important Note",
        noteText: "The police stations are displayed in order of nearest first. The first station shown is the closest to your location.",
        noStationsFound: "No Police Stations Found",
        noStationsMessage: "We couldn't find any police stations for your search. Please try another",
        searchMessages: {
          village: "Enter your village name. If not found, try searching by famous place or pincode.",
          pincode: "Enter your pincode. If not found, try searching by village name or famous place.",
          famous: "Enter a famous place name. If not found, try searching by village name or pincode."
        }
      },
      beatPolice: {
        title: "Chikkaballapura Beat Police",
        subtitle: "Select a police station to view beat police information",
        searchPlaceholder: "Search police stations...",
        viewBeatInfo: "View Beat Information",
        filters: {
          areas: {
            all: "All",
            north: "North",
            central: "Central",
            south: "South",
            east: "East"
          },
          types: {
            all: "All",
            town: "Town",
            rural: "Rural"
          }
        },
        stations: {}
      },
      anonymousComplaints: {
        title: "Anonymous Complaints",
        complaintSubmitted: "Complaint Submitted",
        thankYouMessage: "Thank you for your submission. Your complaint has been recorded anonymously.",
        emergencyMessage: "For emergencies, please call 100 or visit your nearest police station.",
        form: {
          complaintType: "Type of Complaint",
          complaintTypePlaceholder: "Select complaint type",
          location: "Location",
          locationPlaceholder: "Enter location details",
          resources: "Resources (if any)",
          resourcesPlaceholder: "Any resources or evidence available",
          attach: "Attach",
          attachments: "Attachments:",
          description: "Brief Description",
          descriptionPlaceholder: "Please describe the issue in 3-4 lines",
          descriptionHint: "(3-4 lines maximum)",
          submit: "Submit Complaint",
          submitting: "Submitting..."
        },
        errors: {
          selectComplaintType: "Please select a complaint type",
          locationRequired: "Location is required",
          descriptionRequired: "Description is required",
          descriptionTooLong: "Description should be 3-4 lines maximum",
          validEmail: "Please enter a valid email address",
          validPhone: "Please enter a valid 10-digit phone number",
          submitFailed: "Failed to submit form. Please try again."
        },
        success: {
          submitted: "✅ Anonymous complaint submitted successfully! We will process your complaint and take necessary action."
        },
        complaintTypes: {
          trafficViolation: "Traffic Violation",
          corruption: "Corruption",
          publicNuisance: "Public Nuisance",
          illegalActivities: "Illegal Activities",
          policeMisconduct: "Police Misconduct",
          environmentalViolation: "Environmental Violation",
          noisePollution: "Noise Pollution",
          other: "Other"
        }
      }
    }
    
    return fallbacks[section] || {}
  } catch (error) {
    console.warn(`Translation error for section ${section}:`, error)
    return {}
  }
} 