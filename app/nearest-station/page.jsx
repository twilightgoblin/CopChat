"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Navigation, AlertTriangle, Search, Building, MapPinned, Shield, Landmark, Info } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { translations } from "@/app/translations"
import { getSafeTranslations } from "@/utils/helpers"

// Police stations data with coordinates
const policeStations = [
  {
    id: 1,
    name: "Chelur Police Station",
    lat: 13.2155,
    lng: 77.7883,
    phone: "08156-273645",
    taluks: ["Chik Ballapur"],
    pincodes: ["562103", "562104"],
  },
  {
    id: 2,
    name: "Chikkaballapura Rural Police Station",
    lat: 13.4352,
    lng: 77.7271,
    phone: "08156-272234",
    taluks: ["Chickballapur"],
    pincodes: ["562101", "562103", "562104"],
  },
  {
    id: 3,
    name: "Chikkaballapura Town Police Station",
    lat: 13.4323,
    lng: 77.7289,
    phone: "08156-272233",
    taluks: ["Chickballapur"],
    pincodes: ["562101"],
  },
  {
    id: 4,
    name: "Nandi Hills Police Station",
    lat: 13.37,
    lng: 77.68,
    phone: "08156-273456",
    taluks: ["Chickballapur"],
    pincodes: ["562101"],
  },
  {
    id: 5,
    name: "Dibburalli Police Station",
    lat: 13.3964,
    lng: 77.7738,
    phone: "08158-256789",
    taluks: ["Sidlaghatta"],
    pincodes: ["562105"],
  },
  {
    id: 6,
    name: "Gauribidanur Town Police Station",
    lat: 13.6108,
    lng: 77.5167,
    phone: "08155-286900",
    taluks: ["Gauribidanur"],
    pincodes: ["561208", "561213"],
  },
  {
    id: 7,
    name: "Gauribidanur Rural Police Station",
    lat: 13.6167,
    lng: 77.5167,
    phone: "08155-286901",
    taluks: ["Gauribidanur"],
    pincodes: ["561206", "561208", "561210", "561211", "561213", "561228"],
  },
  {
    id: 8,
    name: "Kencharlahalli Police Station",
    lat: 13.5833,
    lng: 77.6667,
    phone: "08155-290123",
    taluks: ["Gauribidanur"],
    pincodes: ["561209", "561210"],
  },
  {
    id: 9,
    name: "Manchenahalli Police Station",
    lat: 13.35,
    lng: 77.7,
    phone: "08156-290234",
    taluks: ["Chickballapur"],
    pincodes: ["562101"],
  },
  {
    id: 10,
    name: "Bagepalli Police Station",
    lat: 13.7833,
    lng: 77.7833,
    phone: "08150-282345",
    taluks: ["Bagepalli"],
    pincodes: ["561207", "563121", "563124"],
  },
  {
    id: 11,
    name: "Pathapalya Police Station",
    lat: 13.75,
    lng: 77.8,
    phone: "08150-283456",
    taluks: ["Bagepalli"],
    pincodes: ["561207", "561212", "563124"],
  },
  {
    id: 12,
    name: "Chintamani Town Police Station",
    lat: 13.4019,
    lng: 78.0529,
    phone: "08154-252567",
    taluks: ["Chintamani"],
    pincodes: ["563125", "563138", "563146"],
  },
  {
    id: 13,
    name: "Chintamani Rural Police Station",
    lat: 13.4,
    lng: 78.05,
    phone: "08154-252568",
    taluks: ["Chintamani"],
    pincodes: ["563123", "563125", "563138", "563146", "563159"],
  },
  {
    id: 14,
    name: "Batlahalli Police Station",
    lat: 13.45,
    lng: 78.1,
    phone: "08154-256789",
    taluks: ["Chintamani"],
    pincodes: ["563123", "563159"],
  },
  {
    id: 15,
    name: "Gudibande Police Station",
    lat: 13.6,
    lng: 77.7,
    phone: "08156-267890",
    taluks: ["Gudibanda"],
    pincodes: ["561209"],
  },
  {
    id: 16,
    name: "Sidlaghatta Town Police Station",
    lat: 13.3789,
    lng: 77.8372,
    phone: "08158-255678",
    taluks: ["Sidlaghatta"],
    pincodes: ["562105"],
  },
  {
    id: 17,
    name: "Sidlaghatta Rural Police Station",
    lat: 13.3733,
    lng: 77.8467,
    phone: "08158-255679",
    taluks: ["Sidlaghatta"],
    pincodes: ["562102", "562104", "562105"],
  },
]

// Famous places in Chikkaballapura district
const famousPlaces = [
  // Tourist Attractions & Historical Places
  {
    name: "Nandi Hills",
    lat: 13.3701,
    lng: 77.6836,
    description: "Famous hill station and tourist destination"
  },
  {
    name: "Chikkaballapura Fort",
    lat: 13.4349,
    lng: 77.7278,
    description: "Historical fort in Chikkaballapura town"
  },
  {
    name: "Ghati Subramanya Temple",
    lat: 13.4019,
    lng: 77.6889,
    description: "Famous temple dedicated to Lord Subramanya"
  },
  {
    name: "Chintamani Temple",
    lat: 13.4019,
    lng: 78.0529,
    description: "Ancient temple in Chintamani town"
  },
  {
    name: "Gudibande Fort",
    lat: 13.6,
    lng: 77.7,
    description: "Historical fort in Gudibande"
  },
  {
    name: "Bagepalli Palace",
    lat: 13.7833,
    lng: 77.7833,
    description: "Historical palace in Bagepalli"
  },

  // Educational Institutions - Colleges
  {
    name: "Government First Grade College Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Government college in Chikkaballapura"
  },
  {
    name: "Government First Grade College Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    description: "Government college in Chintamani"
  },
  {
    name: "Government First Grade College Gauribidanur",
    lat: 13.6107,
    lng: 77.5173,
    description: "Government college in Gauribidanur"
  },
  {
    name: "Government First Grade College Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    description: "Government college in Sidlaghatta"
  },
  {
    name: "Government First Grade College Bagepalli",
    lat: 13.7833,
    lng: 77.7833,
    description: "Government college in Bagepalli"
  },
  {
    name: "Government Polytechnic College Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Polytechnic college in Chikkaballapura"
  },
  {
    name: "Government ITI Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Industrial Training Institute"
  },
  {
    name: "Government ITI Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    description: "Industrial Training Institute"
  },
  {
    name: "SJC Institute of Technology",
    lat: 13.4349,
    lng: 77.7278,
    description: "Engineering college in Chikkaballapura"
  },

  // Schools - High Schools
  {
    name: "Government High School Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Government high school in Chikkaballapura"
  },
  {
    name: "Government High School Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    description: "Government high school in Chintamani"
  },
  {
    name: "Government High School Gauribidanur",
    lat: 13.6107,
    lng: 77.5173,
    description: "Government high school in Gauribidanur"
  },
  {
    name: "Government High School Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    description: "Government high school in Sidlaghatta"
  },
  {
    name: "Government High School Bagepalli",
    lat: 13.7833,
    lng: 77.7833,
    description: "Government high school in Bagepalli"
  },
  {
    name: "Government High School Gudibande",
    lat: 13.6,
    lng: 77.7,
    description: "Government high school in Gudibande"
  },
  {
    name: "Government High School Batlahalli",
    lat: 13.45,
    lng: 78.1,
    description: "Government high school in Batlahalli"
  },
  {
    name: "St. Joseph's High School Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Private high school in Chikkaballapura"
  },
  {
    name: "St. Mary's High School Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    description: "Private high school in Chintamani"
  },

  // Hospitals & Medical Centers
  {
    name: "District Hospital Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Main district hospital"
  },
  {
    name: "Taluk Hospital Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    description: "Taluk level hospital"
  },
  {
    name: "Taluk Hospital Gauribidanur",
    lat: 13.6107,
    lng: 77.5173,
    description: "Taluk level hospital"
  },
  {
    name: "Taluk Hospital Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    description: "Taluk level hospital"
  },
  {
    name: "Taluk Hospital Bagepalli",
    lat: 13.7833,
    lng: 77.7833,
    description: "Taluk level hospital"
  },
  {
    name: "Primary Health Center Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Primary health center"
  },

  // Transportation Hubs
  {
    name: "KSRTC Bus Stand Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Main bus stand in Chikkaballapura"
  },
  {
    name: "KSRTC Bus Stand Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    description: "Bus stand in Chintamani"
  },
  {
    name: "KSRTC Bus Stand Gauribidanur",
    lat: 13.6107,
    lng: 77.5173,
    description: "Bus stand in Gauribidanur"
  },
  {
    name: "KSRTC Bus Stand Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    description: "Bus stand in Sidlaghatta"
  },
  {
    name: "KSRTC Bus Stand Bagepalli",
    lat: 13.7833,
    lng: 77.7833,
    description: "Bus stand in Bagepalli"
  },
  {
    name: "Gauribidanur Railway Station",
    lat: 13.6107,
    lng: 77.5173,
    description: "Major railway junction"
  },
  {
    name: "Chikkaballapura Railway Station",
    lat: 13.4349,
    lng: 77.7278,
    description: "Railway station in Chikkaballapura"
  },

  // Markets & Shopping Areas
  {
    name: "Chikkaballapura Market",
    lat: 13.4349,
    lng: 77.7278,
    description: "Main market area in Chikkaballapura"
  },
  {
    name: "Chintamani Market",
    lat: 13.4019,
    lng: 78.0529,
    description: "Main market area in Chintamani"
  },
  {
    name: "Gauribidanur Market",
    lat: 13.6107,
    lng: 77.5173,
    description: "Main market area in Gauribidanur"
  },
  {
    name: "Sidlaghatta Market",
    lat: 13.3789,
    lng: 77.8372,
    description: "Famous market area in Sidlaghatta"
  },
  {
    name: "Bagepalli Market",
    lat: 13.7833,
    lng: 77.7833,
    description: "Main market area in Bagepalli"
  },
  {
    name: "Gudibande Market",
    lat: 13.6,
    lng: 77.7,
    description: "Market area in Gudibande"
  },

  // Banks & Financial Institutions
  {
    name: "State Bank of India Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Main SBI branch in Chikkaballapura"
  },
  {
    name: "Canara Bank Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Canara Bank branch"
  },
  {
    name: "State Bank of India Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    description: "SBI branch in Chintamani"
  },
  {
    name: "State Bank of India Gauribidanur",
    lat: 13.6107,
    lng: 77.5173,
    description: "SBI branch in Gauribidanur"
  },

  // Government Offices
  {
    name: "Deputy Commissioner Office Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "District administrative office"
  },
  {
    name: "Superintendent of Police Office Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "District police headquarters"
  },
  {
    name: "Taluk Office Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    description: "Taluk administrative office"
  },
  {
    name: "Taluk Office Gauribidanur",
    lat: 13.6107,
    lng: 77.5173,
    description: "Taluk administrative office"
  },
  {
    name: "Taluk Office Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    description: "Taluk administrative office"
  },
  {
    name: "Taluk Office Bagepalli",
    lat: 13.7833,
    lng: 77.7833,
    description: "Taluk administrative office"
  },

  // Parks & Recreation
  {
    name: "Gandhi Park Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Public park in Chikkaballapura"
  },
  {
    name: "Children's Park Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    description: "Children's park in Chintamani"
  },
  {
    name: "Batlahalli Lake",
    lat: 13.45,
    lng: 78.1,
    description: "Scenic lake in Batlahalli"
  },
  {
    name: "Nandi Hills View Point",
    lat: 13.3701,
    lng: 77.6836,
    description: "Scenic viewpoint at Nandi Hills"
  },

  // Religious Places
  {
    name: "Chelur Temple",
    lat: 13.7833,
    lng: 77.7833,
    description: "Ancient temple in Chelur"
  },
  {
    name: "Sri Venkateshwara Temple Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Famous temple in Chikkaballapura"
  },
  {
    name: "Masjid-e-Azam Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Main mosque in Chikkaballapura"
  },
  {
    name: "St. Joseph's Church Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Catholic church in Chikkaballapura"
  },

  // Petrol Pumps & Fuel Stations
  {
    name: "Indian Oil Petrol Pump Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Indian Oil fuel station"
  },
  {
    name: "HP Petrol Pump Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    description: "HP fuel station"
  },
  {
    name: "BP Petrol Pump Gauribidanur",
    lat: 13.6107,
    lng: 77.5173,
    description: "BP fuel station"
  },
  {
    name: "Shell Petrol Pump Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    description: "Shell fuel station"
  },

  // ATMs & Banking Services
  {
    name: "HDFC Bank ATM Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "HDFC Bank ATM"
  },
  {
    name: "ICICI Bank ATM Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    description: "ICICI Bank ATM"
  },
  {
    name: "Axis Bank ATM Gauribidanur",
    lat: 13.6107,
    lng: 77.5173,
    description: "Axis Bank ATM"
  },
  {
    name: "Karnataka Bank ATM Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    description: "Karnataka Bank ATM"
  },

  // Industrial & Commercial Areas
  {
    name: "Chikkaballapura Industrial Area",
    lat: 13.4349,
    lng: 77.7278,
    description: "Industrial manufacturing zone"
  },
  {
    name: "Chintamani Industrial Estate",
    lat: 13.4019,
    lng: 78.0529,
    description: "Industrial estate in Chintamani"
  },
  {
    name: "Gauribidanur Business Park",
    lat: 13.6107,
    lng: 77.5173,
    description: "Business park with offices"
  },
  {
    name: "Sidlaghatta Warehouse Complex",
    lat: 13.3789,
    lng: 77.8372,
    description: "Warehouse and storage facilities"
  },

  // Additional Healthcare Facilities
  {
    name: "Multi-Specialty Hospital Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Private multi-specialty hospital"
  },
  {
    name: "Dental Clinic Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    description: "Dental care center"
  },
  {
    name: "Medical Store Gauribidanur",
    lat: 13.6107,
    lng: 77.5173,
    description: "Pharmacy and medical store"
  },
  {
    name: "Diagnostic Center Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    description: "Medical diagnostic laboratory"
  },
  {
    name: "Eye Hospital Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Specialized eye care hospital"
  },

  // Additional Educational Institutions
  {
    name: "Government Primary School Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Government primary school"
  },
  {
    name: "St. Mary's Nursery School Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    description: "Nursery and pre-primary school"
  },
  {
    name: "Coaching Center Gauribidanur",
    lat: 13.6107,
    lng: 77.5173,
    description: "Tuition and coaching center"
  },
  {
    name: "Public Library Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    description: "Public library and reading room"
  },
  {
    name: "Computer Training Center Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Computer education center"
  },

  // Residential & Community Areas
  {
    name: "Senior Citizens Club Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Senior citizens community center"
  },

  // Additional Transportation Hubs
  {
    name: "Auto Stand Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Auto-rickshaw stand"
  },
  {
    name: "Taxi Stand Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    description: "Taxi and cab pickup point"
  },
  {
    name: "Public Parking Gauribidanur",
    lat: 13.6107,
    lng: 77.5173,
    description: "Public parking area"
  },
  {
    name: "Cycle Stand Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    description: "Bicycle parking area"
  },

  // Legal & Professional Services
  {
    name: "District Court Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "District court and judicial complex"
  },
  {
    name: "Law Office Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    description: "Legal services office"
  },
  {
    name: "Insurance Office Gauribidanur",
    lat: 13.6107,
    lng: 77.5173,
    description: "Insurance company office"
  },
  {
    name: "Real Estate Office Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    description: "Property and real estate office"
  },
  {
    name: "Notary Office Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Notary public office"
  },

  // Entertainment & Leisure
  {
    name: "Children's Playground Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Children's play area"
  },
  {
    name: "Swimming Pool Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    description: "Public swimming pool"
  },
  {
    name: "Gaming Center Gauribidanur",
    lat: 13.6107,
    lng: 77.5173,
    description: "Entertainment and gaming center"
  },
  {
    name: "Sports Ground Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    description: "Multi-purpose sports ground"
  },
  {
    name: "Adventure Park Nandi Hills",
    lat: 13.3701,
    lng: 77.6836,
    description: "Adventure sports and activities"
  },
  {
    name: "Boating Club Batlahalli Lake",
    lat: 13.45,
    lng: 78.1,
    description: "Boating and water sports"
  },

  // Post Offices
  {
    name: "Head Post Office Chikkaballapura",
    lat: 13.4349,
    lng: 77.7278,
    description: "Main post office in Chikkaballapura"
  },
  {
    name: "Post Office Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    description: "Post office in Chintamani"
  },
  {
    name: "Post Office Gauribidanur",
    lat: 13.6107,
    lng: 77.5173,
    description: "Post office in Gauribidanur"
  },
  {
    name: "Post Office Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    description: "Post office in Sidlaghatta"
  },
  {
    name: "Post Office Bagepalli",
    lat: 13.7833,
    lng: 77.7833,
    description: "Post office in Bagepalli"
  }
]

// Village to pincode mapping from the provided data
const villagePincodeMap = {
  // Chickballapur Taluk
  "Chickballapur": "562101",
  "Chickballapur Mandy Bazarr": "562101",
  "Ajjavara": "562101",
  "Avalagurki": "562101",
  "Dibbur": "562101",
  "Gerehalli": "562101",
  "Gundlagurki": "562101",
  "Jathavara": "562101",
  "Kanganahalli": "562101",
  "Kethenahalli": "562101",
  "Manchenabele": "562101",
  "Maralakunte": "562101",
  "Muddenahalli": "562101",
  "Nandi Hills": "562101",
  "Patrenahalli": "562101",
  "Manchenahalli": "562101",
  "Manchenahalli Town": "562101",
  "Manchenahalli Rural": "562101",
  "Nandi Hills Town": "562101",
  "Nandi Hills Rural": "562101",
  "Kandavara": "562101",

  // Sidlaghatta Taluk
  "Sidlaghatta": "562105",
  "Sidlagatta Bazar": "562105",
  "Ablodu": "562105",
  "Basettihalli": "562105",
  "Devaramallur": "562105",
  "Dibburhalli": "562105",
  "Kothnur": "562105",
  "Kundlagurki": "562105",
  "Pallicherlu": "562105",
  "Sidlaghatta Town": "562105",
  "Sidlaghatta Rural": "562105",
  "Dibburalli": "562105",
  "Dibburalli Town": "562105",
  "Dibburalli Rural": "562105",

  // Chintamani Taluk
  "Chintamani": "563125",
  "Chintamani Bazar": "563125",
  "Chintamani Market": "563125",
  "Ganjigunte": "563125",
  "Settihalli": "563125",
  "N. Kothur": "563125",
  "Chintamani Town": "563125",
  "Chintamani Rural": "563125",
  "Batlahalli": "563123",
  "Batlahalli Town": "563123",
  "Batlahalli Rural": "563123",
  "Kodigal": "563123",
  "E. Thimmasandra": "563159",
  "Mittahalli": "563159",
  "Papathimmanahalli": "563159",
  "Polinayakanahalli": "563159",

  // Gauribidanur Taluk
  "Gauribidanur": "561208",
  "Gauribidanur Bzr": "561208",
  "Gauribidanur Town": "561208",
  "Gauribidanur Rural": "561208",
  "Alakapura": "561213",
  "Chandandur": "561208",
  "Doddakurugodu": "561208",
  "Gangasandra": "561208",
  "H. Nagasandra": "561208",
  "Halaganahalli": "561208",
  "Kalludi": "561208",
  "Kamaganahalli": "561213",
  "Melya": "561208",
  "Dn Palya": "561206",
  "Huduguru": "561206",
  "Kadabur": "561206",
  "Haleupparahalli": "561210",
  "Kenkere": "561210",
  "Bislahalli": "561211",

  // Bagepalli Taluk
  "Bagepalli": "561207",
  "Bagepalli Town": "561207",
  "Bagepalli Rural": "561207",
  "Chenchurayanapalli": "561207",
  "Gorthapalli": "561207",
  "Kothakote": "561207",
  "Mallasandra": "561207",
  "Mittemari": "561207",
  "Nallappareddipalli": "561207",
  "Naravalapalli": "561207",
  "Neerantipalli": "561207",
  "Paragodu": "561207",
  "Pathapalya": "561207",
  "Pathapalya Town": "561207",
  "Pathapalya Rural": "561207",
  "Peddapalli": "563121",
  "Palyakere": "563124",
  "Puligal": "563124",
  "Rasicheruvu": "563124",
  "Naremaddepalli": "561212",

  // Gudibande Taluk
  "Gudibande": "561209",
  "Gudibande Town": "561209",
  "Gudibande Rural": "561209",
  "Beechaganahalli": "561209",
  "Cholasettyhalli": "561209",
  "Chowtakuntapalli": "561209",
  "Dapparthi": "561209",
  "Ramapatna": "561209",
  "Kencharlahalli": "561209",
  "Kencharlahalli Town": "561209",
  "Kencharlahalli Rural": "561209",

  // Chelur Taluk
  "Chelur": "562103",
  "Chelur Town": "562103",
  "Chelur Rural": "562103",
  "Agalagurki": "562103",
  "Kalavara": "562103",
  "Kondenahalli": "562103",
  "Chikkapyalagurkj": "562104",
  "Peresandra": "562104",
  "S.Devaganahalli": "562104",
  "Sadali": "562103",

  // Other Villages
  "Cheemangala": "562102",
  "Hemaranahalli": "562102",
  "Jangamkote": "562102",
  "Malamachanahalli": "562102",
  "Mallur": "562102",
  "Nagamangala": "562102",

  // Beat Police Villages (by Police Station) (added from beat police data)
  "Pedduru": "563123",
  "Tummalahalli": "563123",
  "Korakonapalli": "563123",
  "Gaunicheruvupalli": "563123",
  "Digavapalli": "563123",
  "Muddalhalli": "563123",
  "Nimmakayalahalli": "563123",
  "Nandiganahalli": "563123",
  "Kadirappanayakankote": "563123",
  "Neelapalli": "563123",
  "Bodugundlahalli": "563123",
  "Mamidimakalapalli": "561209",
  "Devaramakalapalli": "561209",
  "Pyayalavarapalli": "561209",
  "Arigevarigutta": "561209",
  "Gyadavandlapalli": "561209",
  "Bestalapalli": "561209",
  "Konapura": "561209",
  "Baichapura": "561209",
  "Badimaraluru": "561209",
  "Virupasandra": "561209",
  "Uchchodanahalli": "561209",
  "Saganahalli": "561209",
  "Gangasandra": "561209",
  "Kengenahalli": "561209",
  "Vedalaveni": "561209",
  "Kurubarahalli": "561209",
  "Virlagollahalli": "561209",
  "Sugar Factory": "561209",
  "Cheegatagere": "561209",
  "Kallapparallapalli": "562103",
  "Yaguvamarappagarpalli": "562103",
  "Diguvamarappagarpalli": "562103",
  "Dugginayakanapalli": "562103",
  "Gummalapalli": "562103",
  "Peddanagarlu": "562103",
  "Poolakuntlapalli": "562103",
  "Gooluru Gram Panchayat": "561207",
  "Chinnakayalapalli": "561207",
  "Yagava Aivarlpalli": "561207",
  "Lakshman Tanda": "561207",
  "Ramakka Tanda": "561207",
  "Parvathipura Tanda": "561207",
  "Papannakunta Tanda": "561207",
  "Saddupalli": "561207",
  "Saddupalli Tanda": "561207",
  "Kuruvadinepalli": "561207",
  "Anjanapura": "561207",

  // Additional villages from beat police data (not yet included)
  "Thyagaraja Colony": "561208",
  "Kambakka Layout": "561208",
  "R.K Area": "561208",
  "Stella Convent, Railway Station Road": "561208",
  "Kolimigalli Area": "561208",
  "Dr. Raju House Area": "561208",
  "Kambakka and Venkatesh Layout": "561208",
  "Shani Mahatma Temple Back Area": "561208",
  "Kokala Kodata Area": "561208",
  "Nataraju Talkies Back Area": "561208",
  "VV Puram": "561208",
  "Gauri School Area": "561208",
  "Bank Colony": "561208",
  "Railway Parallel Side": "561208",
  "Housing Board Colony": "561208",
  "Nagaraju Gupta and Nanjuraju Gupta Layout": "561208",
  "Tippu Nagar": "561208",
  "Hosapet": "561208",
  "Welcome Bar Road": "561208",
  "Paragi Huchappagalli": "561208",
  "Peeru Sabigalli": "561208",
  "Bakari Sabgalli": "561208",
  "Esupgalli": "561208",
  "Marigamma Temple Area": "561208",
  "Hosapete Area Marigamma Road": "561208",
  "M.G. Circle Left Side": "561208",
  "M.G. Circle to Canara Bank": "561208",
  "Bangalore Circle to Madhugiri Circle": "561208",
  "Azad Nagar, 1st to 3rd Roads": "561208",
  "Slum Area": "561208",
  "Nehruji Colony": "561208",
  "Old Court Back Area": "561208",
  "Bala Vidya Bhavana School Road": "561208",
  "Sri Nagar": "561208",
  "M.T.C Colony": "561208",
  "Railway Parallel Road": "561208",
  "Court Main Road": "561208",
  "Chikkajappana House Area": "561208",
  "Uppara Colony": "561208",
  "Jyothi Nagar": "561208",
  "G. Shankaranarayana Layout": "561208",
  "Isturi Subbayya Layout": "561208",
  "Venkatadri Layout": "561208",
  "Udumalodu Road Left and Right Side Area": "561208",
  "Aravinda Nagar": "561208",
  "Muneshwara Layout": "561208",
  "M.G Road Left Side": "561208",
  "Madanahalli": "561208",
  "Pushpanjali Back Area": "561208",
  "Reliance Petrol Bunk Back Area": "561208",
  "Panduranga Temple Area": "561208",
  "Hanumantappa Layout": "561208",
  "Vidyanidhi School Area": "561208",
  "Vandu Beedu Area": "561208",
  "Anandapura": "561208",
  "Hanumantnagar": "561208",
  "Madanahalli Main Road Right Side Area": "561208",
  "Gangamma Layout": "561208",
  "Annapurneshwari Layout": "561208",
  "Gundapura": "561208",
  "Pinakini Layout": "561208",
  "Kalludi-1, Christian Colony": "561208",
  "SC Colony": "561208",
  "Over Tank Area": "561208",
  "Bhajane Mandira Area": "561208",
  "Huduti and Nagasandra Road": "561208",
  "Kalludi-02) Ganganagar": "561208",
  "Bypass Road": "561208",
  "Prashant Nagar": "561208",
  "Puttapurlahalli": "561208",
  "Tank Area": "561208",
  "Ramakrishnappa House Road": "561208",
  "Avalappa House Road": "561208",
  "Gotakanapura": "561208",
  "Dipalya Road": "561208",
  "Christian Colony": "561208",
  "Jain House Road": "561208",
  "A.K Colony": "561208",
  "Govinda House Area": "561208",
  "Nandisha House Area": "561208",
  "Muslim Area": "561208",
  "Karkhane Area": "561208",
  "Subbaraju House Area": "561208",
  "Nambanna Layout": "561208",
  "Hirebidanuru": "561208",
  "Shashi Shop Road": "561208",
  "Radhakrishna House Road": "561208",
  "Masjid Road": "561208",
  "Rangamma Temple Road": "561208",
  "Bandarahalli": "561208",
  "Kantarahalli": "561208",
  "Mattavalahalli": "561208",
  "Appannagarihalli": "561208",
  "Nanjaiahgarihalli": "561208",
  "Kotappanahalli": "561208",
  "Narasimhareddihalli": "561208",
  "Nagaragere": "561208",
  "Payandahalli": "561208",
  "Mallenahalli": "561208",
  "Jinkavaripalli": "561208",
  "Chinnappareddihalli": "561208",
  "Bellavalahalli": "561208",
  "Gundlakothuru": "561208",
  "Tandas": "561208",
  "Bottadappanahalli": "561208",
  "Cholashettihalli": "561208",
  "Kodihalli": "561208",
  "Nallahalli": "561208",
  "Chikkamallenahalli": "561208",
  "Krishnarajapura": "561208",
  "Chimukalahalli": "561208",
  "Tokalahalli": "561208",
  "Mopurahalli": "561208",
  "Sabbanahalli": "561208",
  "Vatadahosahalli": "561208",
  "Dabbalavaripalli": "561208",
  "Bodabandahalli": "561208",
  "Subbarayanahalli": "561208",
  "Kereolaginhalli": "561208",
  "Halevooru": "561208",
  "Kadirenahalli": "561208",
  "Srinivasacharahalli": "561208",
  "Hanumenahalli": "561208",
  "Musalmanarahalli": "561208",
  "Manipal": "561208",
  "M. Gollahalli": "561208",
  "Muddalodu": "561208",
  "Jilakunte": "561208",
  "Sadarahalli": "561208",
  "Maripadagu": "561208",
  "Ontimanehalli": "561208",
  "Chittavulahalli": "561208",
  "Melya": "561208",
  "Hunasenahalli": "561208",
  "Dinne Hunasenahalli": "561208",
  "Jagareddihalli": "561208",
  "Gotlakunte": "561208",
  "Peddanahalli": "561208",
  "Katanakallu": "561208",
  "Sooranayakanahalli": "561208",
  "Hulikunte": "561208",
  "Narasapura": "561208",
  "Nakkalahalli": "561208",
  "Devaganahalli": "561208",
  "Lakkasandra": "561208",
  "Lakshmipura": "561208",
  "Hudaguru": "561208",
  "Kamaganahalli": "561208",
  "Seegalahalli": "561208",
  "Guntamadagu": "561208",
  "Dimmaghattanahalli": "561208",
  "Kachamachenahalli": "561208",
  "Kenkere": "561208",
  "Narasimhanahalli": "561208",
  "Singanahalli": "561208",
  "Gedare": "561208",
  "Kondapura": "561208",
  "Naduvalahalli": "561208",
  "Konaganahalli": "561208",
  "Goddavalahalli": "561208",
  "Machenahalli": "561208",
  "Narasayyanapalya": "561208",
  "Sonaganahalli": "561208",
  "Hunase Kunte": "561208",
  "Gurappanahalli": "561208",
  "Ranganapalya": "561208",
  "Gundenahalli": "561208",
  "Yarapotenahalli": "561208",
  "Hoskote": "561208",
  "Hakki-Pikki Colony": "561208",
  "Bhaktarahalli": "561208",
  "Somashettihalli": "561208",
  "Hosuru": "561208",
  "Kotaladinne": "561208",
  "Mudagere": "561208",
  "Hale Upparahalli": "561208",
  "Bommashettihalli": "561208",
  "Kadalaveni": "561208",
  "Udumalodu": "561208",
  "Jalahalli": "561208",
  "Vaichakurahalli": "561208",
  "Maraluru": "561208",
  "Chennenahalli": "561208",
  "Ranganahalli": "561208",
  "Kuroodi": "561208",
  "Dronakunte": "561208",
  "Anudi": "561208",
  "Hampasandra": "561208",
  "H. Jalahalli": "561208",
  "Jodibisilahalli": "561208",
  "Kundihalli": "561208",
  "Ramapura": "561208",
  "Kudurebalya": "561208",
  "Hosa Upparahalli": "561208",
  "Balagere": "561208",
  "Idaguru": "561208",
  "Bheemanahalli": "561208",
  "Jakkenahalli": "561208",
  "Shambookanagara": "561208",
  "Chandanadooru": "561208",
  "Halaganahalli": "561208",
  "Gandhinagara": "561208",
  "Hooduti": "561208",
  "Nagasandra": "561208",
  "Babenahalli": "561208",
  "Kudumalakunte": "561208",
  "Doddakurugodu": "561208",
  "Yarahalli": "561208",
  "Ramachandrapura": "561208",
  "Vidurashwatha": "561208",
  "Chennabairenahalli": "561208",
  "Gowdasandra": "561208",
  "Chikkakuru Godu": "561208",
  "Uchodanahalli": "561208",
  "Saganahalli": "561208",
  "Veeragollahalli": "561208",
  "Sugar Factory": "561208",
  "Cheegatagere": "561208",
  "Ward No. 1": "562105",
  "Vapasandra": "562105",
  "C.R. Layout": "562105",
  "Kanaka Nagar": "562105",
  "Oil Mill Road": "562105",
  "Yellamma Temple Road": "562105",
  "K.K. Pete": "562105",
  "KSRTC Bus Stand Road": "562105",
  "Ward No. 2": "562105",
  "Bhovi Colony": "562105",
  "Garden Road": "562105",
  "Patel Street": "562105",
  "Ward No. 3": "562105",
  "Khadrappa Street": "562105",
  "Sharap Street": "562105",
  "Gowda Street": "562105",
  "Vasavi Temple Road": "562105",
  "Ashoka Road": "562105",
  "Ward No. 4 & 30": "562105",
  "Kote": "562105",
  "Harijan Colony": "562105",
  "A.D. Colony": "562105",
  "T.B. Road Side": "562105",
  "Ward No. 5": "562105",
  "Khazi Road": "562105",
  "Dodda Khazi Road": "562105",
  "VGT Road": "562105",
  "Ward No. 6": "562105",
  "Kurubara Pete": "562105",
  "T.B. Road": "562105",
  "Sharaf Road": "562105",
  "Old Hospital Road": "562105",
  "Ward No. 7": "562105",
  "Idga Road": "562105",
  "K.E.B. Road": "562105",
  "Siddhartha Nagar": "562105",
  "Ward No. 8": "562105",
  "Ward No. 9": "562105",
  "Sunnasabi Quarters": "562105",
  "Poojamma Temple Road": "562105",
  "Nallimarada Halli": "562105",
  "Ward No. 10": "562105",
  "2nd Nagartara Pete": "562105",
  "1st Nagartara Pete": "562105",
  "Ward No. 14": "562101",
  "Housing Board Area & Nisar Palya": "562101",
  "Housing Board": "562101",
  "Nissar Palya": "562101",
  "Old Police Quarters": "562101",
  "KHB Colony": "562101",
  "Ward No. 15 & 31": "562101",
  "Gandhi Nagar": "562101",
  "Maruti Nagar": "562101",
  "Kadiri Palya": "562101",
  "Idludu Road": "562101",

  // Additional villages from remaining beat police files
  "Sonnaganahallli": "562103",
  "Kotagal": "562103",
  "Kamanahalli": "562103",
  "Bandarlahallli": "562103",
  "Pusaganadoddi": "562103",
  "Neralemaradahalli": "562103",
  "S.Venkatapura": "562103",
  "Uppakunthalli": "562103",
  "Nallappanahalli": "562103",
  "Niluvarathahalli": "562103",
  "S.Kurubarhalli": "562103",
  "S.Devaganahallli": "562103",
  "S.Gundlahalli": "562103",
  "Yarranagenahallli": "562103",
  "Varadaganahalli": "562103",
  "Dibburalli": "562103",
  "Chikkadibburalli": "562103",
  "Bachhanahalli": "562103",
  "Vaddahalli": "562103",
  "Bayyappanahalli": "562103",
  "Chandaganahalli": "562103",
  "Sithahalli": "562103",
  "Hireyalachenahalli": "562103",
  "Yalagalahalli": "562103",
  "Kondappagarahalli": "562103",
  "Jarugahalli": "562103",
  "Venkatakrishnammanahalli": "562103",
  "S.Gollahalli": "562103",
  "Iragappanahalli": "562103",
  "Chakappanahalli": "562103",
  "Gadiminchenahallli": "562103",
  "Kudupakunte": "562103",
  "Yarrahalli": "562103",
  "Nallojanahallli": "562103",
  "Timmanaykanahallli": "562103",
  "Alagurki": "562103",
  "A.Nakkalahallli": "562103",
  "Budugavarahalli": "562103",
  "Dasarlahalli": "562103",
  "Maralappanahalli": "562103",
  "Dimbarlahalli": "562103",
  "Rayappanahalli": "562103",
  "Talakayalabetta": "562103",
  "T.Venkatapura": "562103",
  "Kariyappanahalli": "562103",
  "Halehalli": "562103",
  "Mallishettihalli": "562103",
  "E.Timmasandra": "562103",
  "Subbarayanahallli": "562103",
  "Bairaganahallli": "562103",
  "Shettikere": "562103",
  "Varasandra": "562103",
  "Sadlavarahalli": "562103",
  "S.M.Kondarajanahallli": "562103",
  "Kommasandra": "562103",
  "Turukachanahalli": "562103",
  "Gandlachinte": "562103",
  "Nallacheruvupalli": "562103",
  "Roppavarahahlli": "562103",
  "G.Nakkalahallli": "562103",
  "Bandahalli": "562103",
  "Atagollahalli": "562103",
  "Egaletahalli": "562103",
  "Bashettihalli": "562103",
  "Ramalingapura": "562103",
  "Kachanayakanahallli": "562103",
  "Ammagarahalli": "562103",
  "Dyavarahalli": "562103",
  "Amoortimmanahallli": "562103",
  "Kumbarahalli": "562103",
  "Valasenahalli": "562103",
  "Rameshwara": "562103",
  "Nallarallahalli": "562103",
  "Vantooru": "562103",
  "Pendlivarahalli": "562103",
  "Doddagummanahalli": "562103",
  "Kambalahalli": "562103",
  "Kempanahallli": "562103",
  "Goudanahalli": "562103",
  "Dhanamittenahalli": "562103",
  "Doddatekahalli": "562103",
  "T.Peddanahalli": "562103",
  "Chikkatekahalli": "562103",
  "Ajjakadirehalli": "562103",
  "Maddayyagarahalli": "562103",
  "Marganuparti": "562103",
  "Goramillahalli": "562103",
  "Sadahalli": "562103",
  "Dyavappanagudi": "562103",
  "Bhinnamangala": "562103",
  "Kannappanahalli": "562103",
  "Saddahalli": "562103",
  "Tarabahalli": "562103",
  "Somanahallli": "562103",
  "Marihalli": "562103",
  "Nachaganahallli": "562103",
  "Pillagundlahalli": "562103",
  "Anemadagu": "562103",
  "Choudareddihallli": "562103",
  "Dadanghatta": "562103",
  "Gorlagummanahallli": "562103",
  "Lakhinayakanahallli": "562103",
  "Tokalahalli": "562103",
  "Mummanahalli": "562103",
  "Rachanahallli": "562103",
  "Chokkanahalli": "562103",
  "Gangahalli": "562103",
  "Brahmanahalli": "562103",
  "Gonimaradahallli": "562103",
  "G.K.Hosooru": "562103",
  "G.Kurubarhalli": "562103",
  "Ganjikunte": "562103",
  "Devaguttahalli": "562103",
  "Nagireddihalli": "562103",
  "Haleganjikunte": "562103",
  "Lakkenahallli": "562103",
  "Yarrabacchenahallli": "562103",
  "G.Kondarajanahallli": "562103",
  "Vemagal": "562103",
  "Kyasagere": "562103",
  "Balegoudanahalli": "562103",
  "Doddabandaraghatta": "562103",
  "Chikkabandaraghatta": "562103",
  "Hakkipikki Colony": "562103",
  "Poolakunthahalli": "562103",
  "Madenahallli": "562103",
  "Nandi": "562101",
  "Angatta": "562101",
  "Irenahalli": "562101",
  "Kuduvathi": "562101",
  "Chikkasagarahalli": "562101",
  "Sultan Pete": "562101",
  "Singatakadirenahalli": "562101",
  "Gandipura": "562101",
  "Nandi Betta": "562101",
  "Bairanayakanahalli": "562101",
  "Tirnahalli": "562101",
  "Bachhahalli": "562101",
  "Gantigananahalli": "562101",
  "Suddahalli": "562101",
  "Muddenahalli": "562101",
  "Chigatenahalli": "562101",
  "Kanivenarayanapura": "562101",
  "N Hosuru": "562101",
  "Kanganahalli": "562101",
  "Gauchenhalli": "562101",
  "Madhurenahalli": "562101",
  "Gattiganahalli": "562101",
  "Korlahalli": "562101",
  "Jakkalamadugu": "562101",
  "Gungirlahalli": "562101",
  "Chikkanahalli": "562101",
  "Chadalapura": "562101",
  "Kuppahalli": "562101",
  "Devishettihalli": "562101",
  "Yaluvahalli": "562101",
  "Nandi Cross": "562101",
  "Bidaganahalli": "562101",
  "Kottanuru": "562101",
  "Mavalli": "562101",
  "Arasanahalli": "562101",
  "Chokkahalli": "562101",
  "Tumakalahalli": "562101",
  "Jadatimmanahalli": "562101",
  "Gaviganahalli": "562101",
  "Varamallenahalli": "562101",
  "Chinnandahalli": "562101",
  "Kolavanahalli": "562101",
  "Doddamarali": "562101",
  "D. Hosuru": "562101",
  "Bommanahalli": "562101",
  "Talahalli": "562101",
  "Nakkanahalli": "562101",
  "Kanitahalli": "562101",
  "Nakkalabachhahalli": "562101",
  "Srirampura": "562101",
  "Chikkakadigenahalli": "562101",
  "Chidachikkanahalli": "562101",
  "Toudanahalli": "562101",
  "Timmanahalli": "562101",
  "Kondenhalli": "562101",
  "Kadashigenahalli": "562101",
  "Chalumenahalli": "562101",
  "Doddakirugambi": "562101",
  "Chikkakirugambi": "562101",
  "Elehalli": "562101",
  "Keshavara": "562101",
  "Nelamakalahalli": "562101",
  "Yalagalapalli": "561207",
  "Bairepalli": "561207",
  "Sangatapalli": "561207",
  "Bairegollapalli": "561207",
  "Devarajapalli": "561207",
  "Nagarlu": "561207",
  "Guttamidapalli": "561207",
  "Pathapalya": "561207",
  "Nallasanapalli": "561207",
  "Bukkanapalli": "561207",
  "Gondipalli": "561207",
  "Kamasanapalli": "561207",
  "Singappagaripallli": "561207",
  "Pathakote": "561207",
  "Gudipalli": "561207",
  "Kottooru": "561207",
  "Gujjepalli": "561207",
  "Sakkanappagaripallli": "561207",
  "Bandolapalli": "561207",
  "Paipalya": "561207",
  "Vadigere": "561207",
  "Nadampalli": "561207",
  "Bandakindapalli": "561207",
  "Bodikadirepalli": "561207",
  "Vasapparallapalli": "561207",
  "Neeragantipalli": "561207",
  "Balehosahalli": "561207",
  "Hosahudya": "561207",
  "Joolapalya": "561207",
  "Nakkalapalli": "561207",
  "Adagal": "562101",
  "Bhadra": "562101",
  "Sagara": "562101",
  "Nagar": "562101",
  "Badagal": "562101",
  "Manchenahalli": "562101",
}

// Beat Police Villages (by Police Station) (added from beat police data)
const villagePoliceStationMap = {
  "Batlahalli Police Station": {
    pincode: "563123",
    villages: [
      "Pedduru",
      "Tummalahalli",
      "Korakonapalli",
      "Gaunicheruvupalli",
      "Digavapalli",
      "Muddalhalli",
      "Nimmakayalahalli",
      "Nandiganahalli",
      "Kadirappanayakankote",
      "Neelapalli",
      "Bodugundlahalli"
    ]
  },
  "Kencharlahalli Police Station": {
    pincode: "561209",
    villages: [
      "Mamidimakalapalli",
      "Devaramakalapalli",
      "Pyayalavarapalli",
      "Arigevarigutta",
      "Gyadavandlapalli",
      "Bestalapalli"
    ]
  },
  "Gudibande Police Station": {
    pincode: "561209",
    villages: [
      "Konapura",
      "Baichapura",
      "Badimaraluru",
      "Virupasandra",
      "Uchchodanahalli",
      "Saganahalli",
      "Gangasandra",
      "Kengenahalli",
      "Vedalaveni",
      "Kurubarahalli",
      "Virlagollahalli",
      "Sugar Factory",
      "Cheegatagere"
    ]
  },
  "Chelur Police Station": {
    pincode: "562103",
    villages: [
      "Kallapparallapalli",
      "Yaguvamarappagarpalli",
      "Diguvamarappagarpalli",
      "Dugginayakanapalli",
      "Gummalapalli",
      "Peddanagarlu",
      "Poolakuntlapalli"
    ]
  },
  "Bagepalli Police Station": {
    pincode: "561207",
    villages: [
      "Gooluru Gram Panchayat",
      "Chinnakayalapalli",
      "Yagava Aivarlpalli",
      "Lakshman Tanda",
      "Ramakka Tanda",
      "Parvathipura Tanda",
      "Papannakunta Tanda",
      "Saddupalli",
      "Saddupalli Tanda",
      "Kuruvadinepalli",
      "Anjanapura"
    ]
  },
  "Chikkaballapura Rural Police Station": {
    pincode: "562101",
    villages: [
      "C M C Layout",
      "Agalagurki",
      "Bannikuppe",
      "Sonnapura",
      "Tippanahalli",
      "Ajjavara",
      "Nugitahalli",
      "Mannarapura",
      "Poojanahalli"
    ]
  },
  "Chikkaballapura Town Police Station": {
    pincode: "562101",
    villages: [
      "Ward No. 1", "Vapasandra", "C.R. Layout", "Kanaka Nagar", "Oil Mill Road", "Yellamma Temple Road", "K.K. Pete", "KSRTC Bus Stand Road",
      "Ward No. 2", "Bhovi Colony", "Garden Road", "Patel Street",
      "Ward No. 3", "K.K. Pete", "Khadrappa Street", "Sharap Street", "Patel Street", "Gowda Street", "Vasavi Temple Road", "Ashoka Road",
      "Ward No. 4 & 30", "Kote", "Harijan Colony", "A.D. Colony", "T.B. Road Side",
      "Ward No. 5", "Khazi Road", "Dodda Khazi Road", "VGT Road",
      "Ward No. 6", "Kurubara Pete", "T.B. Road", "Sharaf Road", "Old Hospital Road",
      "Ward No. 7", "Idga Road", "K.E.B. Road", "Siddhartha Nagar",
      "Ward No. 8", "Ward No. 9", "Sunnasabi Quarters", "Poojamma Temple Road", "Nallimarada Halli",
      "Ward No. 10", "2nd Nagartara Pete", "1st Nagartara Pete"
    ]
  },
  "Chintamani Town Police Station": {
    pincode: "563125",
    villages: [
      "Venkatagiri Kote North", "Venkatagiri Kote South", "Ven. Kote Colony", "Tank Bund Road, West", "Tank Bund Road, East", "Kalappa Badavane", "K.R. Badavane", "Anjani Badavane", "Ashwini Badavane", "Prabhakar Badavane", "Malapalli", "N.R Badavane"
    ]
  },
  "Chintamani Rural Police Station": {
    pincode: "563125",
    villages: [
      "Bhaktarahalli", "Ulappanahalli", "Korlahalli", "Chandrahalli", "Kattariguppe", "Husseinpura", "Kadashanahalli", "Timmasandra", "Mohammadpura", "Kanganahalli",
      "Bukkanahalli", "Singasandra", "N.Kotturu", "K.Gollahalli", "Doddahalli", "Kurumaralahalli", "Sujjanahalli", "Narasapura", "Kotagal", "K.Raguttahalli", "Chaudadenahalli", "Bandameedahalli", "Bodanamari", "Nallarallahalli Cross",
      "Chokkanahalli", "Nayanhalli", "Srinivasapura", "Venkatapura", "Ketanayakanahalli", "Yashwantapura", "Palepalli", "Jaladenahalli", "Shettihalli", "Anakal", "Tammepalli", "Chikkamunimangala", "Doddamunimangala", "Kodigenahalli", "Nelamachanahalli",
      "Chokkareddihalli", "Krishnarajapura", "Tippanahalli", "Veerapalli", "Jagattanahalli", "Gopalapura", "Bacchavarahalli", "Kagati", "Hiranyahalli", "Kongatimmanahalli", "Badagavarahalli", "Kariyapalli",
      "Gopasandra", "Buragamakalhalli", "Handijogigadda", "Ulavadi", "Kurapalli", "Bhattalhalli"
    ]
  },
  "Gauribidanuru Town Police Station": {
    pincode: "561208",
    villages: [
      "Karekalahalli", "Swagat Layout", "Nagaredddy Layout", "Nagalamma Layout",
      "Kuvempu Nagar", "Vidya Nagar", "K.L.N Layout",
      "Virandahalli", "H.N Layout", "Ayyappa Swami Temple Area",
      "Vinayaka Nagar", "Brahmin Street",
      "Sante Maidana", "Nadigadde", "Sadashiva Layout",
      "Kakanathopu", "Abhilash Layout", "Sumangali Layout",
      "Panduranga Temple", "Mental Hospital", "Madhava Nagar", "Church",
      "Shyanu Bhogarahalli", "Ramayanadavaragalli", "Bazaar Road Left Side",
      "Hoovadigaragalli", "Gaurayagalli", "B.H Road", "Bavi Katte", "Marigamma Temple Area",
      "Railway Quarters", "Isturi Sibbayashetty Layout", "H.P Nagendra Kumar Layout", "G.S.K Layout", "C Rajanna Layout", "K.N Ramegowda Layout", "M Narasamma Layout"
    ]
  },
  "Gauribidanuru Rural Police Station": {
    pincode: "561208",
    villages: [
      "Bandarahalli", "Kantarahalli", "Mattavalahalli", "Appannagarihalli", "Nanjaiahgarihalli", "Kotappanahalli", "Narasimhareddihalli", "Nagaragere", "Payandahalli", "Mallenahalli",
      "Jinkavaripalli", "Chinnappareddihalli", "Bellavalahalli", "Gundlakothuru", "Tandas", "Bottadappanahalli", "Cholashettihalli", "Kodihalli", "Nallahalli", "Chikkamallenahalli",
      "Krishnarajapura", "Chimukalahalli", "Tokalahalli", "Mopurahalli", "Sabbanahalli", "Vatadahosahalli", "Dabbalavaripalli", "Bodabandahalli", "Subbarayanahalli", "Kereolaginhalli", "Halevooru", "Kadirenahalli",
      "Srinivasacharahalli", "Hanumenahalli", "Musalmanarahalli", "Manipal", "M. Gollahalli", "Muddalodu", "Jilakunte", "Sadarahalli", "Maripadagu", "Ontimanehalli", "Chittavulahalli", "Melya", "Hunasenahalli", "Dinne Hunasenahalli", "Jagareddihalli",
      "Gotlakunte", "Peddanahalli", "Katanakallu", "Sooranayakanahalli", "Hulikunte", "Narasapura", "Nakkalahalli", "Devaganahalli", "Lakkasandra", "Lakshmipura", "Hudaguru"
    ]
  },
  "Shidlaghatta Rural Police Station": {
    pincode: "562105",
    villages: [
      "Shilemakalhalli", "Handiganala", "Keshavapura", "Hanumenahalli", "Appegoudanahalli", "Kambadahalli", "Meluru", "Ganganahalli", "Chaudasandra", "Ragimakalhalli",
      "Anuru", "A.Hunasenahalli", "Tippenahalli", "Dabarganahalli", "Bairanayakanahalli", "Japti Hosahalli", "Bodaguru", "Hittalahalli", "Belluti", "Bhaktahalli",
      "Malluru", "Matturu", "Kachahalli", "Ankattatti", "Kakachakkondahalli", "Nagamangala", "Hosahalli", "Nallenahalli", "Nadipinaayakanahalli", "Pura (Be)",
      "Mugiladapi", "Malamachanahalli", "Basavapattana", "Taduru", "Totliganahalli", "Yannanguru", "Doddachakkondahalli", "Eddalatippenahalli", "Hosapete",
      "Jangamakote/Cross", "Obalapura", "J.Kurabarahalli", "Tottibavi", "K.G Chikkaballa", "Sundrahalli", "Bairasandra", "Sugaturu", "Ghattamaranahalli", "J.Venkatapura", "Baluvanahalli", "Mittanahalli"
    ]
  },
  "Manchenahalli Police Station": {
    pincode: "562101",
    villages: [
      "Adagal", "Bhadra", "Sagara", "Nagar", "Badagal", "Manchenahalli"
    ]
  },
  "Nandi Hills Police Station": {
    pincode: "562101",
    villages: [
      "Nandi", "Angatta", "Irenahalli", "Kuduvathi", "Chikkasagarahalli",
      "Sultan Pete", "Singatakadirenahalli", "Gandipura", "Nandi Betta",
      "Bairanayakanahalli", "Tirnahalli", "Bachhahalli", "Gantigananahalli", "Suddahalli", "Muddenahalli",
      "Chigatenahalli", "Kanivenarayanapura", "N Hosuru", "Kanganahalli", "Gauchenhalli", "Madhurenahalli",
      "Gattiganahalli", "Korlahalli", "Jakkalamadugu", "Gungirlahalli", "Chikkanahalli",
      "Chadalapura", "Kuppahalli", "Devishettihalli", "Yaluvahalli", "Nandi Cross", "Bidaganahalli",
      "Kottanuru", "Mavalli", "Arasanahalli", "Chokkahalli", "Tumakalahalli", "Jadatimmanahalli",
      "Gaviganahalli", "Varamallenahalli", "Chinnandahalli", "Kolavanahalli", "Doddamarali", "D. Hosuru",
      "Bommanahalli", "Talahalli", "Nakkanahalli", "Kanitahalli",
      "Nakkalabachhahalli", "Srirampura", "Chikkakadigenahalli", "Chidachikkanahalli",
      "Toudanahalli", "Timmanahalli", "Kondenhalli", "Kadashigenahalli", "Chalumenahalli",
      "Doddakirugambi", "Chikkakirugambi", "Elehalli", "Keshavara", "Nelamakalahalli"
    ]
  },
  "Pathapalya Police Station": {
    pincode: "561207",
    villages: [
      "Yalagalapalli", "Bairepalli", "Sangatapalli", "Bairegollapalli", "Devarajapalli", "Nagarlu", "Guttamidapalli", "Pathapalya",
      "Nallasanapalli", "Bukkanapalli", "Gondipalli", "Kamasanapalli", "Singappagaripallli", "Pathakote", "Gudipalli",
      "Kottooru", "Gujjepalli", "Sakkanappagaripallli", "Bandolapalli", "Paipalya", "Vadigere", "Nadampalli", "Bandakindapalli",
      "Bodikadirepalli", "Vasapparallapalli", "Neeragantipalli", "Balehosahalli", "Hosahudya", "Joolapalya", "Nakkalapalli"
    ]
  },
}

// Merge all villages from villagePoliceStationMap into villagePincodeMap
Object.values(villagePoliceStationMap).forEach(({ villages, pincode }) => {
  villages.forEach(village => {
    villagePincodeMap[village] = pincode;
  });
});

// Function to calculate distance between two points using Haversine formula
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371 // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c // Distance in km
  return distance
}

const deg2rad = (deg) => {
  return deg * (Math.PI / 180)
}

// Function to find nearest stations by pincode
const findNearestStationsByPincode = (pincode) => {
  const stationsWithPincode = policeStations.filter((station) => station.pincodes.includes(pincode))
  return stationsWithPincode
}

// Function to find nearest station to a place
const findNearestStation = (lat, lng) => {
  let nearestStation = null
  let minDistance = Infinity

  policeStations.forEach(station => {
    const distance = calculateDistance(lat, lng, station.lat, station.lng)
    if (distance < minDistance) {
      minDistance = distance
      nearestStation = station
    }
  })

  return nearestStation
}

export default function NearestStationPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [nearestStations, setNearestStations] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [searchType, setSearchType] = useState("village") // "village", "pincode", or "famous"
  const [searchMessage, setSearchMessage] = useState("")
  const suggestionsRef = useRef(null)
  const { language } = useLanguage()
  
  // Use safe translation access
  const t = getSafeTranslations(translations, language, 'nearestStation')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    function handleClickOutside(event) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const suggestions = getSuggestions()
    setSuggestions(suggestions)
    setShowSuggestions(suggestions.length > 0 && searchQuery.trim().length > 0)
  }, [searchQuery, searchType])

  const handleSearch = (query) => {
    if (!query.trim()) return

    let results = []
    
    if (searchType === "village") {
      // Search by village name
      const matchingVillages = Object.keys(villagePincodeMap).filter(village =>
        village.toLowerCase().includes(query.toLowerCase())
      )
      
      if (matchingVillages.length > 0) {
        matchingVillages.forEach(village => {
          const pincode = villagePincodeMap[village]
          const stations = findNearestStationsByPincode(pincode)
          results.push(...stations)
        })
      }
    } else if (searchType === "pincode") {
      // Search by pincode
      const matchingPincodes = Object.values(villagePincodeMap).filter(pincode =>
        pincode.includes(query)
      )
      
      if (matchingPincodes.length > 0) {
        matchingPincodes.forEach(pincode => {
          const stations = findNearestStationsByPincode(pincode)
          results.push(...stations)
        })
      }
    } else if (searchType === "famous") {
      // Search by famous place
      const matchingPlaces = famousPlaces.filter(place =>
        place.name.toLowerCase().includes(query.toLowerCase())
      )
      
      if (matchingPlaces.length > 0) {
        matchingPlaces.forEach(place => {
          const nearestStation = findNearestStation(place.lat, place.lng)
          if (nearestStation) {
            results.push(nearestStation)
          }
        })
      }
    }

    // Remove duplicates and sort by distance
    const uniqueResults = results.filter((station, index, self) =>
      index === self.findIndex(s => s.id === station.id)
    )

    setNearestStations(uniqueResults)
    setShowSuggestions(false)
  }

  const getSuggestions = () => {
    if (!searchQuery.trim()) return []

    if (searchType === "village") {
      return Object.keys(villagePincodeMap).filter(village =>
        village.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    } else if (searchType === "pincode") {
      return Object.values(villagePincodeMap).filter(pincode =>
        pincode.includes(searchQuery)
      ).slice(0, 5)
    } else if (searchType === "famous") {
      return famousPlaces.filter(place =>
        place.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).map(place => place.name).slice(0, 5)
    }

    return []
  }

  const openGoogleMaps = (lat, lng, name) => {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchQuery)
    }
  }

  const handleSearchTypeChange = (type) => {
    setSearchType(type)
    setSearchQuery("")
    setSuggestions([])
    setNearestStations([])
    setShowSuggestions(false)
    
    // Set appropriate message based on search type
    switch(type) {
      case "village":
        setSearchMessage(t.searchMessages.village)
        break
      case "pincode":
        setSearchMessage(t.searchMessages.pincode)
        break
      case "famous":
        setSearchMessage(t.searchMessages.famous)
        break
      default:
        setSearchMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-100 to-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center text-violet-900 mb-4">{t.title}</h1>
          <p className="text-lg text-violet-700 text-center mb-8">
            {t.subtitle}
          </p>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-center space-x-4 mb-4">
                <Button
                  variant={searchType === "village" ? "default" : "outline"}
                  onClick={() => handleSearchTypeChange("village")}
                  className="flex-1"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  {t.searchByVillage}
                </Button>
                <Button
                  variant={searchType === "pincode" ? "default" : "outline"}
                  onClick={() => handleSearchTypeChange("pincode")}
                  className="flex-1"
                >
                  <MapPinned className="h-4 w-4 mr-2" />
                  {t.searchByPincode}
                </Button>
                <Button
                  variant={searchType === "famous" ? "default" : "outline"}
                  onClick={() => handleSearchTypeChange("famous")}
                  className="flex-1"
                >
                  <Landmark className="h-4 w-4 mr-2" />
                  {t.searchByFamousPlace}
                </Button>
              </div>

              {searchMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-violet-600 text-sm italic mb-2"
                >
                  {searchMessage}
                </motion.div>
              )}

              <div className="relative" ref={suggestionsRef}>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder={
                      searchType === "village" ? t.villagePlaceholder :
                      searchType === "pincode" ? t.pincodePlaceholder :
                      t.famousPlacePlaceholder
                    }
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 text-lg"
                  />
                  <Button 
                    onClick={() => handleSearch(searchQuery)} 
                    className="bg-violet-600 hover:bg-violet-700 px-6"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    {t.search}
                  </Button>
                </div>

                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto border border-violet-100">
                    {suggestions.map((item) => (
                      <div
                        key={item}
                        className="px-4 py-3 hover:bg-violet-50 cursor-pointer border-b border-violet-50 last:border-b-0"
                        onClick={() => {
                          setSearchQuery(item)
                          handleSearch(item)
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{item}</span>
                          {searchType === "village" && (
                            <span className="text-sm text-violet-600">
                              {villagePincodeMap[item]}
                            </span>
                          )}
                          {searchType === "famous" && (
                            <span className="text-sm text-violet-600">
                              {famousPlaces.find(p => p.name === item)?.taluk}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {nearestStations.length > 0 ? (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {nearestStations.map((station) => (
                  <motion.div
                    key={station.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-violet-100">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <div className="bg-violet-100 p-3 rounded-full">
                            <Shield className="h-6 w-6 text-violet-600" />
                          </div>
                          <div>
                            <CardTitle className="text-xl font-bold text-violet-900">{station.name}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="bg-violet-50 rounded-lg p-4">
                            <div className="flex items-center gap-3">
                              <div className="bg-white p-2 rounded-full">
                                <Phone className="h-4 w-4 text-violet-600" />
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-violet-700">{t.contactNumber}</h3>
                                <p className="text-violet-900 font-semibold">{station.phone}</p>
                              </div>
                            </div>
                          </div>

                          <Button
                            onClick={() => openGoogleMaps(station.lat, station.lng, station.name)}
                            className="w-full bg-violet-600 hover:bg-violet-700"
                          >
                            <Navigation className="h-4 w-4 mr-2" />
                            {t.viewOnGoogleMaps}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 text-center"
              >
                <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto border border-violet-100">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="bg-violet-100 p-2 rounded-full">
                      <Info className="h-5 w-5 text-violet-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-violet-900">{t.importantNote}</h3>
                  </div>
                  <p className="text-violet-700">
                    {t.noteText}
                  </p>
                </div>
              </motion.div>
            </>
          ) : (
            searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="bg-yellow-50 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <AlertTriangle className="h-10 w-10 text-yellow-500" />
                </div>
                <h2 className="text-2xl font-bold text-violet-900 mb-2">{t.noStationsFound}</h2>
                <p className="text-violet-700 max-w-md mx-auto">
                  {t.noStationsMessage} {searchType === "village" ? "ಹಳ್ಳಿ" : searchType === "pincode" ? "ಪಿನ್‌ಕೋಡ್" : "ಪ್ರಸಿದ್ಧ ಸ್ಥಳ"}.
                </p>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </div>
  )
} 