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
  "Anjanapura": "561207"
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
      "Ward No. 5", "Khazi Road", "Dodda Khazi Road", "Ashoka Road", "VGT Road",
      "Ward No. 6", "Kurubara Pete", "VGT Road", "T.B. Road", "Sharaf Road", "Old Hospital Road",
      "Ward No. 7", "A.K. Colony", "Idga Road", "K.E.B. Road", "Siddhartha Nagar",
      "Ward No. 8", "A.K. Colony", "Idga Road", "Bypass Road", "K.E.B. Road", "Siddhartha Nagar",
      "Ward No. 9", "A.K. Colony", "Bypass Road", "K.E.B. Road", "Sunnasabi Quarters", "Poojamma Temple Road", "Nallimarada Halli"
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
      "Gadag",
      "Adagal"
    ]
  },
  "Nandi Hills Police Station": {
    pincode: "562101",
    villages: [
      "Doddakirugambi",
      "Chikkakirugambi",
      "Elehalli",
      "Keshavara",
      "Nelamakalahalli"
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