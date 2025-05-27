"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Navigation, AlertTriangle, Search, Building, MapPinned, Shield, Landmark, Info } from "lucide-react"
import { motion } from "framer-motion"

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
  "Sadali": "562104",

  // Other Villages
  "Cheemangala": "562102",
  "Hemaranahalli": "562102",
  "Jangamkote": "562102",
  "Malamachanahalli": "562102",
  "Mallur": "562102",
  "Nagamangala": "562102"
}

// Famous places data with coordinates
const famousPlaces = [
  {
    name: "Nandi Hills",
    taluk: "Chickballapur",
    lat: 13.3700,
    lng: 77.6800,
    type: "Hill Station"
  },
  {
    name: "Bhoga Nandeeshwara Temple",
    taluk: "Nandi",
    lat: 13.3889,
    lng: 77.6967,
    type: "Temple"
  },
  {
    name: "Tipu's Drop",
    taluk: "Nandi",
    lat: 13.3700,
    lng: 77.6800,
    type: "Historical Site"
  },
  {
    name: "Amrita Sarovar",
    taluk: "Nandi",
    lat: 13.3700,
    lng: 77.6800,
    type: "Lake"
  },
  {
    name: "Skandagiri",
    taluk: "Chickballapur",
    lat: 13.4000,
    lng: 77.7000,
    type: "Hill Station"
  },
  {
    name: "Chikka Tirupathi",
    taluk: "Chickballapur",
    lat: 13.4500,
    lng: 77.7500,
    type: "Temple"
  },
  {
    name: "Muddenahalli",
    taluk: "Chickballapur",
    lat: 13.3500,
    lng: 77.7000,
    type: "Historical Site"
  },
  {
    name: "Ghati Subramanya Temple",
    taluk: "Doddaballapur",
    lat: 13.4000,
    lng: 77.6667,
    type: "Temple"
  },
  {
    name: "Chintamani Narasimha Swamy Temple",
    taluk: "Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    type: "Temple"
  },
  {
    name: "Sidlaghatta Kote",
    taluk: "Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    type: "Historical Site"
  },
  {
    name: "Gauribidanur Radio Telescope",
    taluk: "Gauribidanur",
    lat: 13.6108,
    lng: 77.5167,
    type: "Science Center"
  },
  {
    name: "Bagepalli Fort",
    taluk: "Bagepalli",
    lat: 13.7833,
    lng: 77.7833,
    type: "Historical Site"
  },
  {
    name: "Gudibande Fort",
    taluk: "Gudibande",
    lat: 13.6000,
    lng: 77.7000,
    type: "Historical Site"
  },
  {
    name: "Muddenahalli Heritage Site",
    taluk: "Chickballapur",
    lat: 13.3500,
    lng: 77.7000,
    type: "Historical Site"
  },
  {
    name: "Chintamani Lake",
    taluk: "Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    type: "Lake"
  },
  {
    name: "Brahmashram",
    taluk: "Chickballapur",
    lat: 13.3700,
    lng: 77.6800,
    type: "Historical Site"
  },
  {
    name: "Yoga Nandeeshwara Temple",
    taluk: "Nandi",
    lat: 13.3889,
    lng: 77.6967,
    type: "Temple"
  },
  {
    name: "Arunachala Temple",
    taluk: "Chickballapur",
    lat: 13.4500,
    lng: 77.7500,
    type: "Temple"
  },
  {
    name: "Channarayana Durga Fort",
    taluk: "Chickballapur",
    lat: 13.4000,
    lng: 77.7000,
    type: "Historical Site"
  },
  {
    name: "Himavad Gopalaswamy Temple",
    taluk: "Chickballapur",
    lat: 13.3700,
    lng: 77.6800,
    type: "Temple"
  },
  {
    name: "Kailasagiri Temple",
    taluk: "Chickballapur",
    lat: 13.4500,
    lng: 77.7500,
    type: "Temple"
  },
  {
    name: "Muddenahalli Sir M Visvesvaraya Memorial",
    taluk: "Chickballapur",
    lat: 13.3500,
    lng: 77.7000,
    type: "Museum"
  },
  {
    name: "Nandi Temple",
    taluk: "Nandi",
    lat: 13.3889,
    lng: 77.6967,
    type: "Temple"
  },
  {
    name: "Pilikula Nisargadhama",
    taluk: "Chickballapur",
    lat: 13.4000,
    lng: 77.7000,
    type: "Nature Park"
  },
  {
    name: "Ranganatha Swamy Temple",
    taluk: "Chickballapur",
    lat: 13.4500,
    lng: 77.7500,
    type: "Temple"
  },
  {
    name: "Siddaganga Mutt",
    taluk: "Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    type: "Religious Site"
  },
  {
    name: "Sri Lakshmi Narasimha Swamy Temple",
    taluk: "Chickballapur",
    lat: 13.4500,
    lng: 77.7500,
    type: "Temple"
  },
  {
    name: "Sri Ranganatha Swamy Temple",
    taluk: "Chickballapur",
    lat: 13.4500,
    lng: 77.7500,
    type: "Temple"
  },
  {
    name: "Sri Venkataramana Swamy Temple",
    taluk: "Chickballapur",
    lat: 13.4500,
    lng: 77.7500,
    type: "Temple"
  },
  {
    name: "Talakad",
    taluk: "Chickballapur",
    lat: 13.4000,
    lng: 77.7000,
    type: "Historical Site"
  },
  {
    name: "Talakad Temples",
    taluk: "Chickballapur",
    lat: 13.4000,
    lng: 77.7000,
    type: "Temple"
  },
  {
    name: "Vijayanagara Fort",
    taluk: "Chickballapur",
    lat: 13.4000,
    lng: 77.7000,
    type: "Historical Site"
  },
  {
    name: "Vijayanagara Temples",
    taluk: "Chickballapur",
    lat: 13.4000,
    lng: 77.7000,
    type: "Temple"
  },
  {
    name: "Yediyur Siddhalingeshwara Temple",
    taluk: "Chickballapur",
    lat: 13.4500,
    lng: 77.7500,
    type: "Temple"
  },
  {
    name: "Chickballapur Market",
    taluk: "Chickballapur",
    lat: 13.4323,
    lng: 77.7289,
    type: "Market"
  },
  {
    name: "Sidlaghatta Market",
    taluk: "Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    type: "Market"
  },
  {
    name: "Chintamani Market",
    taluk: "Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    type: "Market"
  },
  {
    name: "Gauribidanur Market",
    taluk: "Gauribidanur",
    lat: 13.6108,
    lng: 77.5167,
    type: "Market"
  },
  {
    name: "Bagepalli Market",
    taluk: "Bagepalli",
    lat: 13.7833,
    lng: 77.7833,
    type: "Market"
  },
  {
    name: "Nandi Hills View Point",
    taluk: "Chickballapur",
    lat: 13.3700,
    lng: 77.6800,
    type: "View Point"
  },
  {
    name: "Chickballapur Bus Stand",
    taluk: "Chickballapur",
    lat: 13.4323,
    lng: 77.7289,
    type: "Transport Hub"
  },
  {
    name: "Chintamani Bus Stand",
    taluk: "Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    type: "Transport Hub"
  },
  {
    name: "Gauribidanur Railway Station",
    taluk: "Gauribidanur",
    lat: 13.6108,
    lng: 77.5167,
    type: "Transport Hub"
  },
  {
    name: "Chickballapur Railway Station",
    taluk: "Chickballapur",
    lat: 13.4323,
    lng: 77.7289,
    type: "Transport Hub"
  },
  {
    name: "Sidlaghatta Bus Stand",
    taluk: "Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    type: "Transport Hub"
  },
  {
    name: "Bagepalli Bus Stand",
    taluk: "Bagepalli",
    lat: 13.7833,
    lng: 77.7833,
    type: "Transport Hub"
  },
  {
    name: "Chickballapur Government Hospital",
    taluk: "Chickballapur",
    lat: 13.4323,
    lng: 77.7289,
    type: "Hospital"
  },
  {
    name: "Chintamani Government Hospital",
    taluk: "Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    type: "Hospital"
  },
  {
    name: "Gauribidanur Government Hospital",
    taluk: "Gauribidanur",
    lat: 13.6108,
    lng: 77.5167,
    type: "Hospital"
  },
  {
    name: "Sidlaghatta Government Hospital",
    taluk: "Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    type: "Hospital"
  },
  {
    name: "Bagepalli Government Hospital",
    taluk: "Bagepalli",
    lat: 13.7833,
    lng: 77.7833,
    type: "Hospital"
  },
  {
    name: "Chickballapur District Court",
    taluk: "Chickballapur",
    lat: 13.4323,
    lng: 77.7289,
    type: "Government Office"
  },
  {
    name: "Chintamani Court",
    taluk: "Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    type: "Government Office"
  },
  {
    name: "Gauribidanur Court",
    taluk: "Gauribidanur",
    lat: 13.6108,
    lng: 77.5167,
    type: "Government Office"
  },
  {
    name: "Sidlaghatta Court",
    taluk: "Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    type: "Government Office"
  },
  {
    name: "Bagepalli Court",
    taluk: "Bagepalli",
    lat: 13.7833,
    lng: 77.7833,
    type: "Government Office"
  },
  {
    name: "Chickballapur District Stadium",
    taluk: "Chickballapur",
    lat: 13.4323,
    lng: 77.7289,
    type: "Sports Complex"
  },
  {
    name: "Chintamani Stadium",
    taluk: "Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    type: "Sports Complex"
  },
  {
    name: "Gauribidanur Stadium",
    taluk: "Gauribidanur",
    lat: 13.6108,
    lng: 77.5167,
    type: "Sports Complex"
  },
  {
    name: "Sidlaghatta Stadium",
    taluk: "Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    type: "Sports Complex"
  },
  {
    name: "Bagepalli Stadium",
    taluk: "Bagepalli",
    lat: 13.7833,
    lng: 77.7833,
    type: "Sports Complex"
  },
  {
    name: "Chickballapur District Library",
    taluk: "Chickballapur",
    lat: 13.4323,
    lng: 77.7289,
    type: "Library"
  },
  {
    name: "Chintamani Library",
    taluk: "Chintamani",
    lat: 13.4019,
    lng: 78.0529,
    type: "Library"
  },
  {
    name: "Gauribidanur Library",
    taluk: "Gauribidanur",
    lat: 13.6108,
    lng: 77.5167,
    type: "Library"
  },
  {
    name: "Sidlaghatta Library",
    taluk: "Sidlaghatta",
    lat: 13.3789,
    lng: 77.8372,
    type: "Library"
  },
  {
    name: "Bagepalli Library",
    taluk: "Bagepalli",
    lat: 13.7833,
    lng: 77.7833,
    type: "Library"
  }
]

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

  const handleSearch = (query) => {
    if (!query) return

    if (searchType === "famous") {
      const place = famousPlaces.find(p => p.name.toLowerCase() === query.toLowerCase())
      if (place) {
        const nearestStation = findNearestStation(place.lat, place.lng)
        setNearestStations([nearestStation])
        setShowSuggestions(false)
      } else {
        setNearestStations([])
        setShowSuggestions(true)
      }
    } else {
      let pincode
      if (searchType === "village") {
        pincode = villagePincodeMap[query]
      } else {
        pincode = query
      }
      
      if (!pincode) {
        setNearestStations([])
        setShowSuggestions(true)
        return
      }

      const stations = findNearestStationsByPincode(pincode)
      setNearestStations(stations)
      setShowSuggestions(false)
    }
  }

  const getSuggestions = () => {
    if (!searchQuery) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    // If we have results, don't show suggestions
    if (nearestStations.length > 0) {
      setShowSuggestions(false)
      return
    }

    if (searchType === "famous") {
      const filteredPlaces = famousPlaces.filter(place =>
        place.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setSuggestions(filteredPlaces.map(place => place.name))
    } else if (searchType === "village") {
      const filteredVillages = Object.keys(villagePincodeMap).filter((village) =>
        village.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setSuggestions(filteredVillages)
    } else {
      const uniquePincodes = [...new Set(Object.values(villagePincodeMap))]
      const filteredPincodes = uniquePincodes.filter((pincode) =>
        pincode.includes(searchQuery)
      )
      setSuggestions(filteredPincodes)
    }
    setShowSuggestions(true)
  }

  useEffect(() => {
    getSuggestions()
  }, [searchQuery, searchType])

  const openGoogleMaps = (lat, lng, name) => {
    const url = `https://www.google.com/maps/search/${encodeURIComponent(name)}/@${lat},${lng},15z`
    window.open(url, '_blank')
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
        setSearchMessage("Enter your village name. If not found, try searching by famous place or pincode.")
        break
      case "pincode":
        setSearchMessage("Enter your pincode. If not found, try searching by village name or famous place.")
        break
      case "famous":
        setSearchMessage("Enter a famous place name. If not found, try searching by village name or pincode.")
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
          <h1 className="text-4xl md:text-5xl font-bold text-center text-violet-900 mb-4">Find Nearest Police Station</h1>
          <p className="text-lg text-violet-700 text-center mb-8">
            Search by village name, pincode, or famous place to find the nearest police stations
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
                  Search by Village
                </Button>
                <Button
                  variant={searchType === "pincode" ? "default" : "outline"}
                  onClick={() => handleSearchTypeChange("pincode")}
                  className="flex-1"
                >
                  <MapPinned className="h-4 w-4 mr-2" />
                  Search by Pincode
                </Button>
                <Button
                  variant={searchType === "famous" ? "default" : "outline"}
                  onClick={() => handleSearchTypeChange("famous")}
                  className="flex-1"
                >
                  <Landmark className="h-4 w-4 mr-2" />
                  Search by Famous Place
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
                      searchType === "village" ? "Enter village name..." :
                      searchType === "pincode" ? "Enter pincode..." :
                      "Enter famous place name..."
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
                    Search
                  </Button>
                </div>

                {showSuggestions && suggestions.length > 0 && !nearestStations.length && (
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
                                <h3 className="text-sm font-medium text-violet-700">Contact Number</h3>
                                <p className="text-violet-900 font-semibold">{station.phone}</p>
                              </div>
                            </div>
                          </div>

                          <Button
                            onClick={() => openGoogleMaps(station.lat, station.lng, station.name)}
                            className="w-full bg-violet-600 hover:bg-violet-700"
                          >
                            <Navigation className="h-4 w-4 mr-2" />
                            View on Google Maps
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
                    <h3 className="text-lg font-semibold text-violet-900">Important Note</h3>
                  </div>
                  <p className="text-violet-700">
                    The police stations are displayed in order of nearest first. 
                    <span className="font-medium text-violet-900"> The first station shown is the closest to your location.</span>
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
                <h2 className="text-2xl font-bold text-violet-900 mb-2">No Police Stations Found</h2>
                <p className="text-violet-700 max-w-md mx-auto">
                  We couldn't find any police stations for your search. Please try another {searchType === "village" ? "village" : searchType === "pincode" ? "pincode" : "famous place"}.
                </p>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </div>
  )
} 