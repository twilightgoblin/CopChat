import BeatPoliceLayout from "../BeatPoliceLayout";

const beatPoliceInfo = [
  {
    beatNumber: 1,
    officers: [
      {
        name: "Sri. Lokesh",
        kannadaName: "ಶ್ರೀ ಲೋಕೇಶ್",
        designation: "CPC-111",
        kannadaDesignation: "ಸಿಪಿಸಿ-111",
        phone: "7975537635"
      },
      {
        name: "Sri. Venkata Shiva",
        kannadaName: "ಶ್ರೀ ವೆಂಕಟ ಶಿವ",
        designation: "CPC-263",
        kannadaDesignation: "ಸಿಪಿಸಿ-263",
        phone: "6360449305"
      }
    ],
    areas: [
      "Bandarahalli",
      "Kantarahalli",
      "Mattavalahalli",
      "Appannagarihalli",
      "Nanjaiahgarihalli",
      "Kotappanahalli",
      "Narasimhareddihalli",
      "Nagaragere",
      "Payandahalli",
      "Mallenahalli"
    ],
    kannadaAreas: [
      "ಬಂಡರಹಳ್ಳಿ",
      "ಕಂಟರಹಳ್ಳಿ",
      "ಮಟ್ಟವಳಹಳ್ಳಿ",
      "ಅಪ್ಪಣಗರಿಹಳ್ಳಿ",
      "ನಂಜಯ್ಯಗರಿಹಳ್ಳಿ",
      "ಕೋಟಪ್ಪನಹಳ್ಳಿ",
      "ನರಸಿಂಹರೆಡ್ಡಿಹಳ್ಳಿ",
      "ನಾಗರಗೆರೆ",
      "ಪಾಯಂದಹಳ್ಳಿ",
      "ಮಲ್ಲೇನಹಳ್ಳಿ"
    ],
    supervisor: {
      name: "Smt. Lalithamma",
      kannadaName: "ಶ್ರೀಮತಿ ಲಲಿತಮ್ಮ",
      designation: "PSI (Crime)",
      kannadaDesignation: "ಪಿಎಸ್ಐ (ಕ್ರೈಮ್)",
      phone: "9480802575"
    }
  },
  {
    beatNumber: 2,
    officers: [
      {
        name: "Sri. Shivashankar",
        kannadaName: "ಶ್ರೀ ಶಿವಶಂಕರ",
        designation: "CPC-12",
        kannadaDesignation: "ಸಿಪಿಸಿ-12",
        phone: "9964640406"
      },
      {
        name: "Sri. Manjunath",
        kannadaName: "ಶ್ರೀ ಮಂಜುನಾಥ",
        designation: "CPC-46",
        kannadaDesignation: "ಸಿಪಿಸಿ-46",
        phone: "8152901869"
      }
    ],
    areas: [
      "Jinkavaripalli",
      "Chinnappareddihalli",
      "Bellavalahalli",
      "Gundlakothuru",
      "Tandas",
      "Bottadappanahalli",
      "Cholashettihalli",
      "Kodihalli",
      "Nallahalli",
      "Chikkamallenahalli"
    ],
    kannadaAreas: [
      "ಜಿಂಕವರಿಪಳ್ಳಿ",
      "ಚಿನ್ನಪ್ಪರೆಡ್ಡಿಹಳ್ಳಿ",
      "ಬೆಳ್ಳವಳಹಳ್ಳಿ",
      "ಗುಂಡಲಕೋತೂರು",
      "ತಾಂಡಸ್",
      "ಬೊಟ್ಟದಪ್ಪನಹಳ್ಳಿ",
      "ಚೋಳಶೆಟ್ಟಿಹಳ್ಳಿ",
      "ಕೋಡಿಹಳ್ಳಿ",
      "ನಲ್ಲಹಳ್ಳಿ",
      "ಚಿಕ್ಕಮಲ್ಲೇನಹಳ್ಳಿ"
    ],
    supervisor: {
      name: "Smt. Lalithamma",
      kannadaName: "ಶ್ರೀಮತಿ ಲಲಿತಮ್ಮ",
      designation: "PSI (Crime)",
      kannadaDesignation: "ಪಿಎಸ್ಐ (ಕ್ರೈಮ್)",
      phone: "9480802575"
    }
  },
  {
    beatNumber: 3,
    officers: [
      {
        name: "Sri. Anand Kumar B.N",
        kannadaName: "ಶ್ರೀ ಆನಂದ್ ಕುಮಾರ್ ಬಿ.ಎನ್",
        designation: "CPC-165",
        kannadaDesignation: "ಸಿಪಿಸಿ-165",
        phone: "9902271816"
      },
      {
        name: "Sri. Ramachandra",
        kannadaName: "ಶ್ರೀ ರಾಮಚಂದ್ರ",
        designation: "CPC-129",
        kannadaDesignation: "ಸಿಪಿಸಿ-129",
        phone: "9844537736"
      }
    ],
    areas: [
      "Krishnarajapura",
      "Chimukalahalli",
      "Tokalahalli",
      "Mopurahalli",
      "Sabbanahalli",
      "Vatadahosahalli",
      "Dabbalavaripalli",
      "Bodabandahalli",
      "Subbarayanahalli",
      "Kereolaginhalli",
      "Halevooru",
      "Kadirenahalli"
    ],
    kannadaAreas: [
      "ಕೃಷ್ಣರಾಜಪುರ",
      "ಚಿಮುಕಲಹಳ್ಳಿ",
      "ತೋಕಲಹಳ್ಳಿ",
      "ಮೊಪುರಹಳ್ಳಿ",
      "ಸಬ್ಬನಹಳ್ಳಿ",
      "ವಟದಹೊಸಹಳ್ಳಿ",
      "ಡಬ್ಬಲವರಿಪಳ್ಳಿ",
      "ಬೋಡಬಂಡಹಳ್ಳಿ",
      "ಸುಬ್ಬರಾಯನಹಳ್ಳಿ",
      "ಕೆರೆಒಳಗಿನಹಳ್ಳಿ",
      "ಹಳೇವೂರು",
      "ಕದಿರೇನಹಳ್ಳಿ"
    ],
    supervisor: {
      name: "Smt. Lalithamma",
      kannadaName: "ಶ್ರೀಮತಿ ಲಲಿತಮ್ಮ",
      designation: "PSI (Crime)",
      kannadaDesignation: "ಪಿಎಸ್ಐ (ಕ್ರೈಮ್)",
      phone: "9480802575"
    }
  },
  {
    beatNumber: 4,
    officers: [
      {
        name: "Sri. Ravikumar",
        kannadaName: "ಶ್ರೀ ರವಿಕುಮಾರ್",
        designation: "CPC-97",
        kannadaDesignation: "ಸಿಪಿಸಿ-97",
        phone: "8971436163"
      },
      {
        name: "Sri. Chandappayaligar",
        kannadaName: "ಶ್ರೀ ಚಂದಪ್ಪಯಾಳಿಗರ್",
        designation: "CPC-308",
        kannadaDesignation: "ಸಿಪಿಸಿ-308",
        phone: "7483652137"
      }
    ],
    areas: [
      "Srinivasacharahalli",
      "Hanumenahalli",
      "Musalmanarahalli",
      "Manipal",
      "M. Gollahalli",
      "Muddalodu",
      "Jilakunte",
      "Sadarahalli",
      "Maripadagu",
      "Ontimanehalli",
      "Chittavulahalli",
      "Melya",
      "Hunasenahalli",
      "Dinne Hunasenahalli",
      "Jagareddihalli"
    ],
    kannadaAreas: [
      "ಶ್ರೀನಿವಾಸಚಾರಹಳ್ಳಿ",
      "ಹನುಮೇನಹಳ್ಳಿ",
      "ಮುಸಲ್ಮಾನರಹಳ್ಳಿ",
      "ಮಣಿಪಾಲ",
      "ಎಂ. ಗೊಳ್ಳಹಳ್ಳಿ",
      "ಮುದ್ದಲೋಡು",
      "ಜಿಲಕುಂಟೆ",
      "ಸದರಹಳ್ಳಿ",
      "ಮರಿಪಡಗು",
      "ಒಂಟಿಮನೆಹಳ್ಳಿ",
      "ಚಿತ್ತವುಳಹಳ್ಳಿ",
      "ಮೇಲ್ಯ",
      "ಹುನಸೇನಹಳ್ಳಿ",
      "ದಿನ್ನೆ ಹುನಸೇನಹಳ್ಳಿ",
      "ಜಗರೆಡ್ಡಿಹಳ್ಳಿ"
    ],
    supervisor: {
      name: "Smt. Lalithamma",
      kannadaName: "ಶ್ರೀಮತಿ ಲಲಿತಮ್ಮ",
      designation: "PSI (Crime)",
      kannadaDesignation: "ಪಿಎಸ್ಐ (ಕ್ರೈಮ್)",
      phone: "9480802575"
    }
  },
  {
    beatNumber: 5,
    officers: [
      {
        name: "Sri. Ashwathappa D.N",
        kannadaName: "ಶ್ರೀ ಅಶ್ವತ್ಥಪ್ಪ ಡಿ.ಎನ್",
        designation: "CPC-187",
        kannadaDesignation: "ಸಿಪಿಸಿ-187",
        phone: "9611160609"
      },
      {
        name: "Smt. Rathnamala",
        kannadaName: "ಶ್ರೀಮತಿ ರತ್ನಮಾಲಾ",
        designation: "CPC-04",
        kannadaDesignation: "ಸಿಪಿಸಿ-04",
        phone: "8197091541"
      }
    ],
    areas: [
      "Gotlakunte",
      "Peddanahalli",
      "Katanakallu",
      "Sooranayakanahalli",
      "Hulikunte",
      "Narasapura",
      "Nakkalahalli",
      "Devaganahalli",
      "Lakkasandra",
      "Lakshmipura",
      "Hudaguru"
    ],
    kannadaAreas: [
      "ಗೋಟ್ಲಕುಂಟೆ",
      "ಪೆದ್ದನಹಳ್ಳಿ",
      "ಕಟನಕಲ್ಲು",
      "ಸೂರನಾಯಕನಹಳ್ಳಿ",
      "ಹುಳಿಕುಂಟೆ",
      "ನರಸಪುರ",
      "ನಕ್ಕಲಹಳ್ಳಿ",
      "ದೇವಗನಹಳ್ಳಿ",
      "ಲಕ್ಕಸಂದ್ರ",
      "ಲಕ್ಷ್ಮೀಪುರ",
      "ಹುಡಗೂರು"
    ],
    supervisor: {
      name: "Smt. Lalithamma",
      kannadaName: "ಶ್ರೀಮತಿ ಲಲಿತಮ್ಮ",
      designation: "PSI (Crime)",
      kannadaDesignation: "ಪಿಎಸ್ಐ (ಕ್ರೈಮ್)",
      phone: "9480802575"
    }
  },
  {
    beatNumber: 6,
    officers: [
      {
        name: "Sri. Ravikumar",
        kannadaName: "ಶ್ರೀ ರವಿಕುಮಾರ್",
        designation: "CPC-97",
        kannadaDesignation: "ಸಿಪಿಸಿ-97",
        phone: "8971436163"
      },
      {
        name: "Smt. Sunitha",
        kannadaName: "ಶ್ರೀಮತಿ ಸುನಿತಾ",
        designation: "CPC-242",
        kannadaDesignation: "ಸಿಪಿಸಿ-242",
        phone: "9686322953"
      }
    ],
    areas: [
      "Kamaganahalli",
      "Seegalahalli",
      "Guntamadagu",
      "Dimmaghattanahalli",
      "Kachamachenahalli",
      "Kenkere",
      "Narasimhanahalli",
      "Singanahalli",
      "Gedare",
      "Kondapura",
      "Bandarahalli"
    ],
    kannadaAreas: [
      "ಕಾಮಗನಹಳ್ಳಿ",
      "ಸೀಗಲಹಳ್ಳಿ",
      "ಗುಂಟಮಡಗು",
      "ದಿಮ್ಮಘಟ್ಟನಹಳ್ಳಿ",
      "ಕಚಮಚೇನಹಳ್ಳಿ",
      "ಕೆಂಕೆರೆ",
      "ನರಸಿಂಹನಹಳ್ಳಿ",
      "ಸಿಂಗನಹಳ್ಳಿ",
      "ಗೇದರೆ",
      "ಕೊಂಡಪುರ",
      "ಬಂಡರಹಳ್ಳಿ"
    ],
    supervisor: {
      name: "Smt. Lalithamma",
      kannadaName: "ಶ್ರೀಮತಿ ಲಲಿತಮ್ಮ",
      designation: "PSI (Crime)",
      kannadaDesignation: "ಪಿಎಸ್ಐ (ಕ್ರೈಮ್)",
      phone: "9480802575"
    }
  },
  {
    beatNumber: 7,
    officers: [
      {
        name: "Sri. Sikindar Mulla",
        kannadaName: "ಶ್ರೀ ಸಿಕಂದರ್ ಮುಲ್ಲಾ",
        designation: "CPC-246",
        kannadaDesignation: "ಸಿಪಿಸಿ-246",
        phone: "9742050669"
      },
      {
        name: "Sri. Raju Malagali",
        kannadaName: "ಶ್ರೀ ರಾಜು ಮಾಲಗಾಳಿ",
        designation: "CPC-362",
        kannadaDesignation: "ಸಿಪಿಸಿ-362",
        phone: "8660870097"
      }
    ],
    areas: [
      "Naduvalahalli",
      "Konaganahalli",
      "Goddavalahalli",
      "Machenahalli",
      "Narasayyanapalya",
      "Sonaganahalli",
      "Hunase Kunte",
      "Gurappanahalli",
      "Ranganapalya",
      "Gundenahalli",
      "Yarapotenahalli",
      "Hoskote",
      "Hakki-Pikki Colony",
      "Bhaktarahalli",
      "Somashettihalli"
    ],
    kannadaAreas: [
      "ನಾಡುವಳಹಳ್ಳಿ",
      "ಕೊನಗನಹಳ್ಳಿ",
      "ಗೊಡ್ಡವಳಹಳ್ಳಿ",
      "ಮಚೇನಹಳ್ಳಿ",
      "ನರಸಯ್ಯನಪಾಳ್ಯ",
      "ಸೋನಗನಹಳ್ಳಿ",
      "ಹುನಸೆ ಕುಂಟೆ",
      "ಗುರಪ್ಪನಹಳ್ಳಿ",
      "ರಂಗನಪಾಳ್ಯ",
      "ಗುಂಡೇನಹಳ್ಳಿ",
      "ಯರಪೋಟೇನಹಳ್ಳಿ",
      "ಹೊಸಕೋಟೆ",
      "ಹಕ್ಕಿ-ಪಿಕ್ಕಿ ಕಾಲೋನಿ",
      "ಭಕ್ತರಹಳ್ಳಿ",
      "ಸೋಮಶೆಟ್ಟಿಹಳ್ಳಿ"
    ],
    supervisor: {
      name: "Sri. Rameshguggari",
      kannadaName: "ಶ್ರೀ ರಮೇಶ್ಗುಗ್ಗರಿ",
      designation: "PSI (Law & Order)",
      kannadaDesignation: "ಪಿಎಸ್ಐ (ಲಾ & ಆರ್ಡರ್)",
      phone: "9480802548"
    }
  },
  {
    beatNumber: 8,
    officers: [
      {
        name: "Sri. Gopal",
        kannadaName: "ಶ್ರೀ ಗೋಪಾಲ್",
        designation: "CPC-217",
        kannadaDesignation: "ಸಿಪಿಸಿ-217",
        phone: "9449677914"
      },
      {
        name: "Sri. Krishnamurthy",
        kannadaName: "ಶ್ರೀ ಕೃಷ್ಣಮೂರ್ತಿ",
        designation: "CPC-326",
        kannadaDesignation: "ಸಿಪಿಸಿ-326",
        phone: "9164775872"
      }
    ],
    areas: [
      "Hosuru",
      "Kotaladinne",
      "Mudagere",
      "Hale Upparahalli",
      "Bommashettihalli",
      "Kadalaveni",
      "Udumalodu",
      "Jalahalli",
      "Vaichakurahalli",
      "Maraluru",
      "Chennenahalli"
    ],
    kannadaAreas: [
      "ಹೊಸೂರು",
      "ಕೋಟಲದಿನ್ನೆ",
      "ಮುಡಗೆರೆ",
      "ಹಳೇ ಉಪ್ಪರಹಳ್ಳಿ",
      "ಬೊಮ್ಮಶೆಟ್ಟಿಹಳ್ಳಿ",
      "ಕಡಲವೇಣಿ",
      "ಉಡುಮಲೋಡು",
      "ಜಳಹಳ್ಳಿ",
      "ವೈಚಕುರಹಳ್ಳಿ",
      "ಮರಳೂರು",
      "ಚೆನ್ನೇನಹಳ್ಳಿ"
    ],
    supervisor: {
      name: "Sri. Rameshguggari",
      kannadaName: "ಶ್ರೀ ರಮೇಶ್ಗುಗ್ಗರಿ",
      designation: "PSI (Law & Order)",
      kannadaDesignation: "ಪಿಎಸ್ಐ (ಲಾ & ಆರ್ಡರ್)",
      phone: "9480802548"
    }
  },
  {
    beatNumber: 9,
    officers: [
      {
        name: "Sri. Madhusudan Y.S",
        kannadaName: "ಶ್ರೀ ಮಧುಸೂದನ್ ವೈ.ಎಸ್",
        designation: "CPC-67",
        kannadaDesignation: "ಸಿಪಿಸಿ-67",
        phone: "8970735864"
      },
      {
        name: "Sri. Siddarama",
        kannadaName: "ಶ್ರೀ ಸಿದ್ದರಾಮ",
        designation: "CPC-401",
        kannadaDesignation: "ಸಿಪಿಸಿ-401",
        phone: "9164408539"
      }
    ],
    areas: [
      "Ranganahalli",
      "Kuroodi",
      "Kadirenahalli",
      "Dronakunte",
      "Anudi",
      "Kurubarahalli",
      "Hampasandra",
      "H. Jalahalli",
      "Jodibisilahalli",
      "Kundihalli",
      "Ramapura",
      "Kudurebalya",
      "Hosa Upparahalli"
    ],
    kannadaAreas: [
      "ರಂಗನಹಳ್ಳಿ",
      "ಕುರೂಡಿ",
      "ಕದಿರೇನಹಳ್ಳಿ",
      "ದ್ರೋಣಕುಂಟೆ",
      "ಅನೂಡಿ",
      "ಕುರುಬರಹಳ್ಳಿ",
      "ಹಂಪಸಂದ್ರ",
      "ಹೆಚ್. ಜಳಹಳ್ಳಿ",
      "ಜೋಡಿಬಿಸಿಲಹಳ್ಳಿ",
      "ಕುಂಡಿಹಳ್ಳಿ",
      "ರಾಮಪುರ",
      "ಕುದುರೆಬಾಳ್ಯ",
      "ಹೊಸ ಉಪ್ಪರಹಳ್ಳಿ"
    ],
    supervisor: {
      name: "Sri. Rameshguggari",
      kannadaName: "ಶ್ರೀ ರಮೇಶ್ಗುಗ್ಗರಿ",
      designation: "PSI (Law & Order)",
      kannadaDesignation: "ಪಿಎಸ್ಐ (ಲಾ & ಆರ್ಡರ್)",
      phone: "9480802548"
    }
  },
  {
    beatNumber: 10,
    officers: [
      {
        name: "Sri. Shetti Yogesh",
        kannadaName: "ಶ್ರೀ ಶೆಟ್ಟಿ ಯೋಗೇಶ್",
        designation: "CPC-342",
        kannadaDesignation: "ಸಿಪಿಸಿ-342",
        phone: "9008980616"
      },
      {
        name: "Smt. Ramyashree",
        kannadaName: "ಶ್ರೀಮತಿ ರಮ್ಯಶ್ರೀ",
        designation: "CPC-369",
        kannadaDesignation: "ಸಿಪಿಸಿ-369",
        phone: "8080087710"
      }
    ],
    areas: [
      "Balagere",
      "Idaguru",
      "Bheemanahalli",
      "Jakkenahalli",
      "Shambookanagara",
      "Chandanadooru",
      "Halaganahalli",
      "Kadirenahalli",
      "Gandhinagara"
    ],
    kannadaAreas: [
      "ಬಾಳಗೆರೆ",
      "ಇಡಗೂರು",
      "ಭೀಮನಹಳ್ಳಿ",
      "ಜಕ್ಕೇನಹಳ್ಳಿ",
      "ಶಂಬೂಕನಗರ",
      "ಚಂದನದೂರು",
      "ಹಾಲಗನಹಳ್ಳಿ",
      "ಕದಿರೇನಹಳ್ಳಿ",
      "ಗಾಂಧಿನಗರ"
    ],
    supervisor: {
      name: "Sri. Rameshguggari",
      kannadaName: "ಶ್ರೀ ರಮೇಶ್ಗುಗ್ಗರಿ",
      designation: "PSI (Law & Order)",
      kannadaDesignation: "ಪಿಎಸ್ಐ (ಲಾ & ಆರ್ಡರ್)",
      phone: "9480802548"
    }
  },
  {
    beatNumber: 11,
    officers: [
      {
        name: "Sri. Lambani Ambareesh",
        kannadaName: "ಶ್ರೀ ಲಂಬಾಣಿ ಅಂಬರೀಶ್",
        designation: "CPC-398",
        kannadaDesignation: "ಸಿಪಿಸಿ-398",
        phone: "7026105623"
      },
      {
        name: "Sri. Basavaraju K.M",
        kannadaName: "ಶ್ರೀ ಬಸವರಾಜು ಕೆ.ಎಂ",
        designation: "CPC-423",
        kannadaDesignation: "ಸಿಪಿಸಿ-423",
        phone: "9740913472"
      }
    ],
    areas: [
      "Hooduti",
      "Nagasandra",
      "Babenahalli",
      "Kudumalakunte",
      "Doddakurugodu",
      "Yarahalli",
      "Ramachandrapura",
      "Vidurashwatha",
      "Chennabairenahalli",
      "Gowdasandra",
      "Chikkakuru Godu"
    ],
    kannadaAreas: [
      "ಹೂಡುತಿ",
      "ನಾಗಸಂದ್ರ",
      "ಬಾಬೇನಹಳ್ಳಿ",
      "ಕುದುಮಲಕುಂಟೆ",
      "ದೊಡ್ಡಕುರುಗೋಡು",
      "ಯರಹಳ್ಳಿ",
      "ರಾಮಚಂದ್ರಪುರ",
      "ವಿದುರಾಶ್ವತ",
      "ಚೆನ್ನಬೈರೇನಹಳ್ಳಿ",
      "ಗೌಡಸಂದ್ರ",
      "ಚಿಕ್ಕಕುರುಗೋಡು"
    ],
    supervisor: {
      name: "Sri. Rameshguggari",
      kannadaName: "ಶ್ರೀ ರಮೇಶ್ಗುಗ್ಗರಿ",
      designation: "PSI (Law & Order)",
      kannadaDesignation: "ಪಿಎಸ್ಐ (ಲಾ & ಆರ್ಡರ್)",
      phone: "9480802548"
    }
  },
  {
    beatNumber: 12,
    officers: [
      {
        name: "Sri. Naveenkumar",
        kannadaName: "ಶ್ರೀ ನವೀನ್ಕುಮಾರ್",
        designation: "CPC-175",
        kannadaDesignation: "ಸಿಪಿಸಿ-175",
        phone: "948257699"
      },
      {
        name: "Sri. Ramesh",
        kannadaName: "ಶ್ರೀ ರಮೇಶ್",
        designation: "CPC-408",
        kannadaDesignation: "ಸಿಪಿಸಿ-408",
        phone: "9731615140"
      }
    ],
    areas: [
      "Konapura",
      "Baichapura",
      "Badimaraluru",
      "Virupasandra",
      "Uchodanahalli",
      "Saganahalli",
      "Gangasandra",
      "Kengenahalli",
      "Vedalaveni",
      "Kurubarahalli",
      "Veeragollahalli",
      "Sugar Factory",
      "Cheegatagere"
    ],
    kannadaAreas: [
      "ಕೋನಪುರ",
      "ಬೈಚಪುರ",
      "ಬಡಿಮರಳೂರು",
      "ವಿರೂಪಸಂದ್ರ",
      "ಉಚೋಡನಹಳ್ಳಿ",
      "ಸಾಗನಹಳ್ಳಿ",
      "ಗಂಗಾಸಂದ್ರ",
      "ಕೆಂಗೇನಹಳ್ಳಿ",
      "ವೇದಲವೇಣಿ",
      "ಕುರುಬರಹಳ್ಳಿ",
      "ವೀರಗೊಳ್ಳಹಳ್ಳಿ",
      "ಸಕ್ಕರೆ ಕಾರ್ಖಾನೆ",
      "ಚೀಗಟಗೆರೆ"
    ],
    supervisor: {
      name: "Sri. Rameshguggari",
      kannadaName: "ಶ್ರೀ ರಮೇಶ್ಗುಗ್ಗರಿ",
      designation: "PSI (Law & Order)",
      kannadaDesignation: "ಪಿಎಸ್ಐ (ಲಾ & ಆರ್ಡರ್)",
      phone: "9480802548"
    }
  }
];

export default function GauribidanuruRural() {
  // Transform the data into the expected format
  const transformedData = {
    beatDetails: beatPoliceInfo.map(beat => ({
      number: beat.beatNumber,
      villages: beat.areas.map((area, index) => ({
        en: area,
        kn: beat.kannadaAreas[index]
      })),
      officers: beat.officers.map(officer => ({
        name: {
          en: officer.name,
          kn: officer.kannadaName
        },
        designation: {
          en: officer.designation,
          kn: officer.kannadaDesignation
        },
        phone: officer.phone
      })),
      supervisor: {
        name: {
          en: beat.supervisor.name,
          kn: beat.supervisor.kannadaName
        },
        designation: {
          en: beat.supervisor.designation,
          kn: beat.supervisor.kannadaDesignation
        },
        phone: beat.supervisor.phone
      }
    })),
    supervisingOfficers: Array.from(new Set(beatPoliceInfo.map(beat => beat.supervisor.name))).map(supervisorName => {
      const supervisor = beatPoliceInfo.find(beat => beat.supervisor.name === supervisorName).supervisor;
      const supervisedBeats = beatPoliceInfo
        .filter(beat => beat.supervisor.name === supervisorName)
        .map(beat => beat.beatNumber)
        .join(", ");
      
      return {
        beats: supervisedBeats,
        name: {
          en: supervisor.name,
          kn: supervisor.kannadaName
        },
        designation: {
          en: supervisor.designation,
          kn: supervisor.kannadaDesignation
        },
        phone: supervisor.phone
      };
    })
  };

  return (
    <BeatPoliceLayout 
      beatData={transformedData}
      talukName={{
        en: "Gauribidanuru Rural",
        kn: "ಗೌರಿಬಿದನೂರು ಗ್ರಾಮೀಣ"
      }}
    />
  );
} 