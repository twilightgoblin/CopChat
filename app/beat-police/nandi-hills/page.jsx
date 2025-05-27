'use client';

import React from 'react';
import BeatPoliceLayout from '../BeatPoliceLayout';

const talukName = {
  en: "Nandi Hills",
  kn: "ನಂದಿ ಬೆಟ್ಟ"
};

const beatData = {
  supervisingOfficers: [
    { 
      beats: "1, 2, 3", 
      name: {
        en: "Narasimha Murthy",
        kn: "ನರಸಿಂಹ ಮೂರ್ತಿ"
      }, 
      designation: {
        en: "ASI",
        kn: "ಎ.ಎಸ್.ಐ"
      }, 
      phone: "9876543212" 
    },
    { 
      beats: "4, 5, 6", 
      name: {
        en: "Balaji Singh",
        kn: "ಬಾಲಾಜಿಸಿಂಗ್"
      }, 
      designation: {
        en: "ASI",
        kn: "ಎಎಸ್ಐ"
      }, 
      phone: "9876543219" 
    },
    { 
      beats: "7, 8, 9", 
      name: {
        en: "Shankarappa",
        kn: "ಶಂಕರಪ್ಪ"
      }, 
      designation: {
        en: "ASI",
        kn: "ಎಎಸ್ಐ"
      }, 
      phone: "9876543226" 
    },
    { 
      beats: "10, 11, 12", 
      name: {
        en: "Gangaraju",
        kn: "ಗಂಗರಾಜು"
      }, 
      designation: {
        en: "ASI",
        kn: "ಎಎಸ್ಐ"
      }, 
      phone: "9876543233" 
    }
  ],
  beatDetails: [
    {
      number: "1",
      officers: [
        { 
          name: {
            en: "Prashant",
            kn: "ಪ್ರಶಾಂತ"
          }, 
          designation: {
            en: "CPC-295",
            kn: "ಸಿಪಿಸಿ-295"
          }, 
          phone: "9876543210" 
        },
        { 
          name: {
            en: "Nagaveni",
            kn: "ನಾಗವೇಣಿ"
          }, 
          designation: {
            en: "MPCW-270",
            kn: "ಮಪಿಸಿ-270"
          }, 
          phone: "9876543211" 
        }
      ],
      villages: [
        { en: "Nandi", kn: "ನಂದಿ" },
        { en: "Angatta", kn: "ಅಂಗಟ್ಟ" },
        { en: "Irenahalli", kn: "ಈರೇನಹಳ್ಳಿ" },
        { en: "Kuduvathi", kn: "ಕುಡುವತಿ" },
        { en: "Chikkasagarahalli", kn: "ಚಿಕ್ಕಸಾಗರಹಳ್ಳಿ" }
      ],
      supervisor: { 
        name: {
          en: "Narasimha Murthy",
          kn: "ನರಸಿಂಹ ಮೂರ್ತಿ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "9876543212" 
      }
    },
    {
      number: "2",
      officers: [
        { 
          name: {
            en: "Manjunath",
            kn: "ಮಂಜುನಾಥ"
          }, 
          designation: {
            en: "CHC-150",
            kn: "ಸಿ.ಹೆಚ್.ಸಿ-150"
          }, 
          phone: "9876543213" 
        },
        { 
          name: {
            en: "Anil N.M.",
            kn: "ಅನಿಲ್ ಎನ್. ಎಂ."
          }, 
          designation: {
            en: "CPC-293",
            kn: "ಸಿಪಿಸಿ-293"
          }, 
          phone: "9876543214" 
        }
      ],
      villages: [
        { en: "Sultan Pete", kn: "ಸುಲ್ತಾನ್ ಪೇಟೆ" },
        { en: "Singatakadirenahalli", kn: "ಸಿಂಗಾಟಕದಿರೇನಹಳ್ಳಿ" },
        { en: "Gandipura", kn: "ಗಾಂದಿಪುರ" },
        { en: "Nandi Betta", kn: "ನಂದಿ ಬೆಟ್ಟ" }
      ],
      supervisor: { 
        name: {
          en: "Narasimha Murthy",
          kn: "ನರಸಿಂಹ ಮೂರ್ತಿ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "9876543212" 
      }
    },
    {
      number: "3",
      officers: [
        { 
          name: {
            en: "Ramesh",
            kn: "ರಮೇಶ್"
          }, 
          designation: {
            en: "HC-169",
            kn: "ಹೆಚ್ಸಿ-169"
          }, 
          phone: "9876543215" 
        },
        { 
          name: {
            en: "Basavaraj",
            kn: "ಬಸವರಾಜ್"
          }, 
          designation: {
            en: "CPC-452",
            kn: "ಸಿಪಿಸಿ-452"
          }, 
          phone: "9876543216" 
        }
      ],
      villages: [
        { en: "Bairanayakanahalli", kn: "ಬೈರನಾಯಕನಹಳ್ಳಿ" },
        { en: "Tirnahalli", kn: "ತಿರ್ನಹಳ್ಳಿ" },
        { en: "Bandahalli", kn: "ಬಂಡಹಳ್ಳಿ" },
        { en: "Bachhahalli", kn: "ಬಚ್ಚಹಳ್ಳಿ" },
        { en: "Gantigananahalli", kn: "ಗಂಟಿಗಾನಹಳ್ಳಿ" },
        { en: "Suddahalli", kn: "ಸುದ್ದಹಳ್ಳಿ" },
        { en: "Muddenahalli", kn: "ಮುದ್ದೇನಹಳ್ಳಿ" }
      ],
      supervisor: { 
        name: {
          en: "Narasimha Murthy",
          kn: "ನರಸಿಂಹ ಮೂರ್ತಿ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "9876543212" 
      }
    },
    {
      number: "4",
      officers: [
        { 
          name: {
            en: "Naveen Babu",
            kn: "ನವೀನ್ ಬಾಬು"
          }, 
          designation: {
            en: "PC-231",
            kn: "ಪಿಸಿ-231"
          }, 
          phone: "9876543217" 
        },
        { 
          name: {
            en: "Nagesh",
            kn: "ನಾಗೇಶ್"
          }, 
          designation: {
            en: "CPC-198",
            kn: "ಸಿ.ಪಿ.ಸಿ-198"
          }, 
          phone: "9876543218" 
        }
      ],
      villages: [
        { en: "Chigatenahalli", kn: "ಚಿಗಟೇನಹಳ್ಳಿ" },
        { en: "Kanivenarayanapura", kn: "ಕಣಿವೆನಾರಾಯಣಪುರ" },
        { en: "N Hosuru", kn: "ಎನ್ ಹೊಸೂರು" },
        { en: "Kanganahalli", kn: "ಕಂಗಾನಹಳ್ಳಿ" },
        { en: "Gauchenhalli", kn: "ಗೌಚೇನಹಳ್ಳಿ" },
        { en: "Madhurenahalli", kn: "ಮಧುರೆನಹಳ್ಳಿ" }
      ],
      supervisor: { 
        name: {
          en: "Balaji Singh",
          kn: "ಬಾಲಾಜಿಸಿಂಗ್"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎಎಸ್ಐ"
        }, 
        phone: "9876543219" 
      }
    },
    {
      number: "5",
      officers: [
        { 
          name: {
            en: "Venugopal",
            kn: "ವೇಣುಗೋಪಾಲ್"
          }, 
          designation: {
            en: "HC-02",
            kn: "ಹೆಚ್.ಸಿ-02"
          }, 
          phone: "9876543220" 
        },
        { 
          name: {
            en: "Kallesha D.",
            kn: "ಕಲ್ಲೇಶ ಡಿ."
          }, 
          designation: {
            en: "CPC-271",
            kn: "ಸಿಪಿಸಿ-271"
          }, 
          phone: "9876543221" 
        }
      ],
      villages: [
        { en: "Subbarayanahalli", kn: "ಸುಬ್ಬರಾಯನಹಳ್ಳಿ" },
        { en: "Gattiganahalli", kn: "ಗಟ್ಟಿಗಾನಹಳ್ಳಿ" },
        { en: "Korlahalli", kn: "ಕೊರ್ಲಹಳ್ಳಿ" },
        { en: "Jakkalamadugu", kn: "ಜಕ್ಕಲಮಡುಗು" },
        { en: "Gungirlahalli", kn: "ಗುಂಗಿರ್ಲಹಳ್ಳಿ" },
        { en: "Chikkanahalli", kn: "ಚಿಕ್ಕನಹಳ್ಳಿ" }
      ],
      supervisor: { 
        name: {
          en: "Balaji Singh",
          kn: "ಬಾಲಾಜಿಸಿಂಗ್"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎಎಸ್ಐ"
        }, 
        phone: "9876543219" 
      }
    },
    {
      number: "6",
      officers: [
        { 
          name: {
            en: "Shweta",
            kn: "ಶ್ವೇತಾ"
          }, 
          designation: {
            en: "MPCW-248",
            kn: "ಮಪಿಸಿ-248"
          }, 
          phone: "9876543222" 
        },
        { 
          name: {
            en: "Chetan Ningareddy",
            kn: "ಚೇತನ್ ನಿಂಗಾರೆಡ್ಡಿ"
          }, 
          designation: {
            en: "CPC-367",
            kn: "ಸಿಪಿಸಿ-367"
          }, 
          phone: "9876543223" 
        }
      ],
      villages: [
        { en: "Chadalapura", kn: "ಚದಲಪುರ" },
        { en: "Kuppahalli", kn: "ಕುಪ್ಪಹಳ್ಳಿ" },
        { en: "Devishettihalli", kn: "ದೇವಿಶೆಟ್ಟಿಹಳ್ಳಿ" },
        { en: "Yaluvahalli", kn: "ಯಲುವಹಳ್ಳಿ" },
        { en: "Nandi Cross", kn: "ನಂದಿಕ್ರಾಸ್" },
        { en: "Bidaganahalli", kn: "ಬೀಡಗಾನಹಳ್ಳಿ" }
      ],
      supervisor: { 
        name: {
          en: "Balaji Singh",
          kn: "ಬಾಲಾಜಿಸಿಂಗ್"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎಎಸ್ಐ"
        }, 
        phone: "9876543219" 
      }
    },
    {
      number: "7",
      officers: [
        { 
          name: {
            en: "Narasimhamurthy",
            kn: "ನರಸಿಂಹಮೂರ್ತಿ"
          }, 
          designation: {
            en: "CPC-264",
            kn: "ಸಿಪಿಸಿ-264"
          }, 
          phone: "9876543224" 
        },
        { 
          name: {
            en: "Jyothi",
            kn: "ಜ್ಯೋತಿ"
          }, 
          designation: {
            en: "MPCW-457",
            kn: "ಮಪಿಸಿ-457"
          }, 
          phone: "9876543225" 
        }
      ],
      villages: [
        { en: "Kottanuru", kn: "ಕೊತ್ತನೂರು" },
        { en: "Mavalli", kn: "ಮಾವಳ್ಳಿ" },
        { en: "Arasanahalli", kn: "ಅರಸನಹಳ್ಳಿ" },
        { en: "Chokkahalli", kn: "ಚೊಕ್ಕಹಳ್ಳಿ" },
        { en: "Tumakalahalli", kn: "ತುಮಕಲಹಳ್ಳಿ" },
        { en: "Jadatimmanahalli", kn: "ಜಡಲತಿಮ್ಮನಹಳ್ಳಿ" }
      ],
      supervisor: { 
        name: {
          en: "Shankarappa",
          kn: "ಶಂಕರಪ್ಪ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎಎಸ್ಐ"
        }, 
        phone: "9876543226" 
      }
    },
    {
      number: "8",
      officers: [
        { 
          name: {
            en: "Vanaja K.S.",
            kn: "ವನಜಾ ಕೆ.ಎಸ್"
          }, 
          designation: {
            en: "MHCW-185",
            kn: "ಮಹೆಚ್ಸಿ-185"
          }, 
          phone: "9876543227" 
        },
        { 
          name: {
            en: "Srikanta Hugara",
            kn: "ಶ್ರೀಕಾಂತ ಹೂಗಾರ"
          }, 
          designation: {
            en: "CPC-232",
            kn: "ಸಿಪಿಸಿ-232"
          }, 
          phone: "9876543228" 
        }
      ],
      villages: [
        { en: "Gaviganahalli", kn: "ಗವಿಗಾನಹಳ್ಳಿ" },
        { en: "Varamallenahalli", kn: "ವರಮಲ್ಲೇನಹಳ್ಳಿ" },
        { en: "Chinnandahalli", kn: "ಚಿನ್ನಂಡಹಳ್ಳಿ" },
        { en: "Kolavanahalli", kn: "ಕೊಳವನಹಳ್ಳಿ" },
        { en: "Doddamarali", kn: "ದೊಡ್ಡಮರಳಿ" },
        { en: "D. Hosuru", kn: "ಡಿ.ಹೊಸೂರು" }
      ],
      supervisor: { 
        name: {
          en: "Shankarappa",
          kn: "ಶಂಕರಪ್ಪ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎಎಸ್ಐ"
        }, 
        phone: "9876543226" 
      }
    },
    {
      number: "9",
      officers: [
        { 
          name: {
            en: "Madhu H.K.",
            kn: "ಮಧು ಹೆಚ್.ಕೆ."
          }, 
          designation: {
            en: "HC-83",
            kn: "ಹೆಚ್ಸಿ-83"
          }, 
          phone: "9876543229" 
        },
        { 
          name: {
            en: "Nagarjuna",
            kn: "ನಾಗಾರ್ಜುನ"
          }, 
          designation: {
            en: "PC-550",
            kn: "ಪಿಸಿ-550"
          }, 
          phone: "9876543230" 
        }
      ],
      villages: [
        { en: "Bommanahalli", kn: "ಬೊಮ್ಮನಹಳ್ಳಿ" },
        { en: "Talahalli", kn: "ತಾಳಹಳ್ಳಿ" },
        { en: "Nakkanahalli", kn: "ನಕ್ಕನಹಳ್ಳಿ" },
        { en: "Kanitahalli", kn: "ಕಣಿತಹಳ್ಳಿ" }
      ],
      supervisor: { 
        name: {
          en: "Shankarappa",
          kn: "ಶಂಕರಪ್ಪ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎಎಸ್ಐ"
        }, 
        phone: "9876543226" 
      }
    },
    {
      number: "10",
      officers: [
        { 
          name: {
            en: "Anil Kumar",
            kn: "ಅನೀಲ್ ಕುಮಾರ್"
          }, 
          designation: {
            en: "CPC-390",
            kn: "ಸಿಪಿಸಿ-390"
          }, 
          phone: "9876543231" 
        },
        { 
          name: {
            en: "Anita",
            kn: "ಅನಿತಾ"
          }, 
          designation: {
            en: "MPCW-70",
            kn: "ಮಪಿಸಿ-70"
          }, 
          phone: "9876543232" 
        }
      ],
      villages: [
        { en: "Nakkalabachhahalli", kn: "ನಕ್ಕಲಬಚ್ಚಹಳ್ಳಿ" },
        { en: "Srirampura", kn: "ಶ್ರೀರಾಂಪುರ" },
        { en: "Chikkakadigenahalli", kn: "ಚೀಕ್ಕಕಾಡಿಗೇನಹಳ್ಳಿ" },
        { en: "Chidachikkanahalli", kn: "ಚಿಡಚಿಕ್ಕನಹಳ್ಳಿ" }
      ],
      supervisor: { 
        name: {
          en: "Gangaraju",
          kn: "ಗಂಗರಾಜು"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎಎಸ್ಐ"
        }, 
        phone: "9876543233" 
      }
    },
    {
      number: "11",
      officers: [
        { 
          name: {
            en: "Keshavamurthy",
            kn: "ಕೇಶವಮೂರ್ತಿ"
          }, 
          designation: {
            en: "HC-32",
            kn: "ಹೆಚ್ಸಿ-32"
          }, 
          phone: "9876543234" 
        },
        { 
          name: {
            en: "Pavitra Kothari",
            kn: "ಪವಿತ್ರಾ ಕೊಠಾರಿ"
          }, 
          designation: {
            en: "MPCW-449",
            kn: "ಮಪಿಸಿ-449"
          }, 
          phone: "9876543235" 
        }
      ],
      villages: [
        { en: "Toudanahalli", kn: "ತೌಡನಹಳ್ಳಿ" },
        { en: "Timmanahalli", kn: "ತಿಮ್ಮನಹಳ್ಳಿ" },
        { en: "Kondenhalli", kn: "ಕೊಂಡೇನಹಳ್ಳಿ" },
        { en: "Kadashigenahalli", kn: "ಕಡಶಿಗೇನಹಳ್ಳಿ" },
        { en: "Chalumenahalli", kn: "ಚಲುಮೇನಹಳ್ಳಿ" }
      ],
      supervisor: { 
        name: {
          en: "Gangaraju",
          kn: "ಗಂಗರಾಜು"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎಎಸ್ಐ"
        }, 
        phone: "9876543233" 
      }
    },
    {
      number: "12",
      officers: [
        { 
          name: {
            en: "Sunil Kumar",
            kn: "ಸುನೀಲ್ಕುಮಾರ್"
          }, 
          designation: {
            en: "HC-25",
            kn: "ಹೆಚ್ಸಿ-25"
          }, 
          phone: "9876543236" 
        },
        { 
          name: {
            en: "Venkateshamurthy",
            kn: "ವೆಂಕಟೇಶಮೂರ್ತಿ"
          }, 
          designation: {
            en: "CPC-559",
            kn: "ಸಿಪಿಸಿ-559"
          }, 
          phone: "9876543237" 
        }
      ],
      villages: [
        { en: "Doddakirugambi", kn: "ದೊಡ್ಡಕಿರುಗಂಬಿ" },
        { en: "Chikkakirugambi", kn: "ಚಿಕ್ಕಕಿರುಗಂಬಿ" },
        { en: "Elehalli", kn: "ಎಲೆಹಳ್ಳಿ" },
        { en: "Keshavara", kn: "ಕೇಶವಾರ" },
        { en: "Nelamakalahalli", kn: "ನೆಲಮಾಕಲಹಳ್ಳಿ" }
      ],
      supervisor: { 
        name: {
          en: "Gangaraju",
          kn: "ಗಂಗರಾಜು"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎಎಸ್ಐ"
        }, 
        phone: "9876543233" 
      }
    }
  ]
};

export default function TalukBeatPolice() {
  return (
    <BeatPoliceLayout 
      talukName={talukName}
      beatData={beatData}
    />
  );
} 