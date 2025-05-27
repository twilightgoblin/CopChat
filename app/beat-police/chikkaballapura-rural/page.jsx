'use client';

import React from 'react';
import BeatPoliceLayout from '../BeatPoliceLayout';

const talukName = {
  en: "Chikkaballapura Rural",
  kn: "ಚಿಕ್ಕಬಳ್ಳಾಪುರ ಗ್ರಾಮೀಣ"
};

const beatData = {
  supervisingOfficers: [
    { 
      beats: "1, 2, 3", 
      name: {
        en: "Sri Chandrashekhar",
        kn: "ಶ್ರೀ ಚಂದ್ರಶೇಖರ್"
      }, 
      designation: {
        en: "ASI",
        kn: "ಎ.ಎಸ್.ಐ"
      }, 
      phone: "7975174540" 
    },
    { 
      beats: "4, 5, 6", 
      name: {
        en: "Sri Venkatesh",
        kn: "ಶ್ರೀ ವೆಂಕಟೇಶ್"
      }, 
      designation: {
        en: "ASI",
        kn: "ಎ.ಎಸ್.ಐ"
      }, 
      phone: "9972625152" 
    },
    { 
      beats: "7, 8, 9", 
      name: {
        en: "Sri Manjunathagupta",
        kn: "ಶ್ರೀ ಮಂಜುನಾಥಗುಪ್ತ"
      }, 
      designation: {
        en: "ASI",
        kn: "ಎ.ಎಸ್.ಐ"
      }, 
      phone: "9901773153" 
    },
    { 
      beats: "10, 11, 12", 
      name: {
        en: "Sri Hanumantappa",
        kn: "ಶ್ರೀ ಹನುಮಂತಪ್ಪ"
      }, 
      designation: {
        en: "ASI",
        kn: "ಎ.ಎಸ್.ಐ"
      }, 
      phone: "9448587730" 
    }
  ],
  beatDetails: [
    {
      number: "1",
      officers: [
        { 
          name: {
            en: "Sri Murali",
            kn: "ಶ್ರೀ ಮುರಳಿ"
          }, 
          designation: {
            en: "CPC-138",
            kn: "ಸಿಪಿಸಿ-138"
          }, 
          phone: "9113019811" 
        },
        { 
          name: {
            en: "Sri Narayanareddy",
            kn: "ಶ್ರೀ ನಾರಾಯಣರೆಡ್ಡಿ"
          }, 
          designation: {
            en: "CPC-51",
            kn: "ಸಿಪಿಸಿ-51"
          }, 
          phone: "9686063388" 
        }
      ],
      villages: [
        { en: "Balakuntahalli", kn: "ಬಾಲಕುಂಟಹಳ್ಳಿ" },
        { en: "Gurukulanagenahalli", kn: "ಗುರುಕುಲನಾಗೇನಹಳ್ಳಿ" },
        { en: "Poshettihalli", kn: "ಪೊಶೆಟ್ಟಿಹಳ್ಳಿ" },
        { en: "Yapalahalli", kn: "ಯಾಪಲಹಳ್ಳಿ" },
        { en: "Ragimakalhalli", kn: "ರಾಗಿಮಕಲ್ಹಳ್ಳಿ" },
        { en: "Majara Kottooru", kn: "ಮಜರಾ ಕೊತ್ತೂರು" },
        { en: "Bommenahalli", kn: "ಬೊಮ್ಮೇನಹಳ್ಳಿ" },
        { en: "Boramakanahalli", kn: "ಬೋರಮಾಕನಹಳ್ಳಿ" },
        { en: "Koolimenahalli", kn: "ಕೂಲಿಮೇನಹಳ್ಳಿ" },
        { en: "Doddegaanahalli", kn: "ದೊಡ್ಡಗಾನಹಳ್ಳಿ" },
        { en: "Bandammanahalli", kn: "ಬಂಡಮ್ಮನಹಳ್ಳಿ" },
        { en: "Kanive Gollahalli", kn: "ಕಣಿವೆ ಗೊಲ್ಲಹಳ್ಳಿ" }
      ],
      supervisor: { 
        name: {
          en: "Sri Chandrashekhar",
          kn: "ಶ್ರೀ ಚಂದ್ರಶೇಖರ್"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "7975174540" 
      }
    },
    {
      number: "2",
      officers: [
        { 
          name: {
            en: "Sri Manjunathsingh",
            kn: "ಶ್ರೀ ಮಂಜುನಾಥಸಿಂಗ್"
          }, 
          designation: {
            en: "HC-160",
            kn: "ಹೆಚ್.ಸಿ-160"
          }, 
          phone: "9964175775" 
        },
        { 
          name: {
            en: "Smt. Madhusumati",
            kn: "ಶ್ರೀಮತಿ ಮಧುಸೂಮತಿ"
          }, 
          designation: {
            en: "WPC-366",
            kn: "ಡಬ್ಲ್ಯೂ.ಪಿ.ಸಿ-366"
          }, 
          phone: "8618625558" 
        }
      ],
      villages: [
        { en: "Motlooru", kn: "ಮೊಟ್ಲೂರು" },
        { en: "Nallakadirenahalli", kn: "ನಲ್ಲಕದಿರೇನಹಳ್ಳಿ" },
        { en: "Tippenahalli", kn: "ತಿಪ್ಪೇನಹಳ್ಳಿ" },
        { en: "Badagaanahalli", kn: "ಬಡಗಾನಹಳ್ಳಿ" },
        { en: "Rangasthala", kn: "ರಂಗಸ್ಥಳ" },
        { en: "Kanajenahalli", kn: "ಕಣಜೇನಹಳ್ಳಿ" },
        { en: "Dinnooru", kn: "ದಿನ್ನೂರು" },
        { en: "Mailappanahalli", kn: "ಮೈಲಪ್ಪನಹಳ್ಳಿ" },
        { en: "Kalavara", kn: "ಕಲಾವರ" },
        { en: "Ankanagondi", kn: "ಅಂಕನಗೊಂಡಿ" },
        { en: "Dinnehosahalli", kn: "ದಿನ್ನೇಹೊಸಹಳ್ಳಿ" }
      ],
      supervisor: { 
        name: {
          en: "Sri Chandrashekhar",
          kn: "ಶ್ರೀ ಚಂದ್ರಶೇಖರ್"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "7975174540" 
      }
    },
    {
      number: "3",
      officers: [
        { 
          name: {
            en: "Sri Shivanna",
            kn: "ಶ್ರೀ ಶಿವಣ್ಣ"
          }, 
          designation: {
            en: "HC-213",
            kn: "ಹೆಚ್.ಸಿ-213"
          }, 
          phone: "9449170553" 
        },
        { 
          name: {
            en: "Sri Srinivasa",
            kn: "ಶ್ರೀ ಶ್ರೀನಿವಾಸ"
          }, 
          designation: {
            en: "CPC-47",
            kn: "ಸಿಪಿಸಿ-47"
          }, 
          phone: "7353951090" 
        }
      ],
      villages: [
        { en: "Soosepalya", kn: "ಸೂಸೆಪಾಳ್ಯ" },
        { en: "Hanumantapura", kn: "ಹನುಮಂತಪುರ" },
        { en: "Arikere", kn: "ಅರಿಕೆರೆ" },
        { en: "Goondahalli", kn: "ಗೂಂಡಹಳ್ಳಿ" },
        { en: "Vaddarepalya", kn: "ವಡ್ಡರೆಪಾಳ್ಯ" },
        { en: "Kurlahalli", kn: "ಕುರ್ಲಹಳ್ಳಿ" },
        { en: "Hariharapura", kn: "ಹರಿಹರಪುರ" },
        { en: "Kavarnahalli", kn: "ಕವರ್ನಹಳ್ಳಿ" },
        { en: "Avalagurki", kn: "ಅವಲಗುರ್ಕಿ" },
        { en: "Honnagiriyappanahalli", kn: "ಹೊನ್ನಗಿರಿಅಪ್ಪನಹಳ್ಳಿ" },
        { en: "Gerahalli", kn: "ಗೇರಹಳ್ಳಿ" },
        { en: "Dinnegerahalli", kn: "ದಿನ್ನೇಗೇರಹಳ್ಳಿ" }
      ],
      supervisor: { 
        name: {
          en: "Sri Chandrashekhar",
          kn: "ಶ್ರೀ ಚಂದ್ರಶೇಖರ್"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "7975174540" 
      }
    },
    {
      number: "4",
      officers: [
        { 
          name: {
            en: "Sri Anantkumar",
            kn: "ಶ್ರೀ ಅನಂತಕುಮಾರ್"
          }, 
          designation: {
            en: "HC-24",
            kn: "ಹೆಚ್.ಸಿ-24"
          }, 
          phone: "8694898923" 
        },
        { 
          name: {
            en: "Sri Sunil Balammanavar",
            kn: "ಶ್ರೀ ಸುನಿಲ್ ಬಾಲಮ್ಮನವರ್"
          }, 
          designation: {
            en: "CPC-580",
            kn: "ಸಿಪಿಸಿ-580"
          }, 
          phone: "827636338" 
        }
      ],
      villages: [
        { en: "Nallaguttapalya", kn: "ನಲ್ಲಗುಟ್ಟಪಾಳ್ಯ" },
        { en: "Jangamarappanahalli", kn: "ಜಂಗಮರಪ್ಪನಹಳ್ಳಿ" },
        { en: "Marappanahalli", kn: "ಮಾರಪ್ಪನಹಳ್ಳಿ" },
        { en: "Golladoddi", kn: "ಗೊಲ್ಲದೊಡ್ಡಿ" },
        { en: "Sadenahalli", kn: "ಸಾದೇನಹಳ್ಳಿ" },
        { en: "Ketenahalli", kn: "ಕೇತೇನಹಳ್ಳಿ" },
        { en: "Anemodagu", kn: "ಆನೆಮೊಡಗು" },
        { en: "A.Kottooru", kn: "ಎ.ಕೊತ್ತೂರು" },
        { en: "Motlooru", kn: "ಮೊಟ್ಲೂರು" },
        { en: "Nyasatimmanahalli", kn: "ನ್ಯಾಸತಿಮ್ಮನಹಳ್ಳಿ" },
        { en: "Kondenahalli", kn: "ಕೊಂಡೇನಹಳ್ಳಿ" },
        { en: "Narenahalli", kn: "ನಾರೇನಹಳ್ಳಿ" },
        { en: "Yarranagenahalli", kn: "ಯರ್ರನಾಗೇನಹಳ್ಳಿ" }
      ],
      supervisor: { 
        name: {
          en: "Sri Venkatesh",
          kn: "ಶ್ರೀ ವೆಂಕಟೇಶ್"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "9972625152" 
      }
    },
    {
      number: "5",
      officers: [
        { 
          name: {
            en: "Sri Roopanath Prasad",
            kn: "ಶ್ರೀ ರೂಪನಾಥ್ ಪ್ರಸಾದ್"
          }, 
          designation: {
            en: "HC-24",
            kn: "ಹೆಚ್.ಸಿ-24"
          }, 
          phone: "9731329857" 
        },
        { 
          name: {
            en: "Sri Siddeshwara",
            kn: "ಶ್ರೀ ಸಿದ್ದೇಶ್ವರ"
          }, 
          designation: {
            en: "CPC-315",
            kn: "ಸಿಪಿಸಿ-315"
          }, 
          phone: "9449451616" 
        }
      ],
      villages: [
        { en: "Paiyooru", kn: "ಪೈಯ್ಯೂರು" },
        { en: "Ittappanahalli", kn: "ಇಟ್ಟಪ್ಪನಹಳ್ಳಿ" },
        { en: "S.Gollahalli", kn: "ಎಸ್.ಗೊಲ್ಲಹಳ್ಳಿ" },
        { en: "Guvvalakanahalli", kn: "ಗುವ್ವಲಕನಹಳ್ಳಿ" },
        { en: "Set Dinne", kn: "ಸೆಟ್ ದಿನ್ನೇ" },
        { en: "Ramadevaragudu", kn: "ರಾಮದೇವರಗುಡು" },
        { en: "Kallukunte", kn: "ಕಲ್ಲುಕುಂಟೆ" },
        { en: "Yalagere", kn: "ಯಲಗೇರೆ" },
        { en: "Chambahalli", kn: "ಚಾಂಬಹಳ್ಳಿ" },
        { en: "Mogalakuppe", kn: "ಮೊಗಲಕುಪ್ಪೆ" },
        { en: "Biragaanahalli", kn: "ಬೀರಗಾನಹಳ್ಳಿ" },
        { en: "Kariganapalya", kn: "ಕರಿಗಾನಪಾಳ್ಯ" }
      ],
      supervisor: { 
        name: {
          en: "Sri Venkatesh",
          kn: "ಶ್ರೀ ವೆಂಕಟೇಶ್"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "9972625152" 
      }
    },
    {
      number: "6",
      officers: [
        { 
          name: {
            en: "Sri Ramesh",
            kn: "ಶ್ರೀ ರಮೇಶ್"
          }, 
          designation: {
            en: "HC-130",
            kn: "ಹೆಚ್.ಸಿ-130"
          }, 
          phone: "9448587473" 
        },
        { 
          name: {
            en: "Kumari Sailakshmi",
            kn: "ಕುಮಾರಿ ಸೈಲಕ್ಷ್ಮಿ"
          }, 
          designation: {
            en: "WPC-44",
            kn: "ಡಬ್ಲ್ಯೂ.ಪಿ.ಸಿ-44"
          }, 
          phone: "8599065583" 
        }
      ],
      villages: [
        { en: "Honnenahalli", kn: "ಹೊನ್ನೇನಹಳ್ಳಿ" },
        { en: "Guntappanahalli", kn: "ಗುಂಟಪ್ಪನಹಳ್ಳಿ" },
        { en: "Chitravati", kn: "ಚಿತ್ರಾವತಿ" },
        { en: "Harobande", kn: "ಹಾರೋಬಂಡೆ" },
        { en: "Marasanahalli", kn: "ಮಾರಸನಹಳ್ಳಿ" },
        { en: "Lingashettipura", kn: "ಲಿಂಗಶೆಟ್ಟಿಪುರ" },
        { en: "Akalatimmanahalli", kn: "ಆಕಲತಿಮ್ಮನಹಳ್ಳಿ" },
        { en: "Hunegal", kn: "ಹುನೇಗಲ್" },
        { en: "Devasthana Hosahalli", kn: "ದೇವಸ್ಥಾನ ಹೊಸಹಳ್ಳಿ" },
        { en: "Naduvanahalli", kn: "ನಡುವನಹಳ್ಳಿ" },
        { en: "Soolakunte", kn: "ಸೂಲಕುಂಟೆ" },
        { en: "Mustooru", kn: "ಮುಸ್ತೂರು" },
        { en: "Gongadipura", kn: "ಗೊಂಗಡಿಪುರ" }
      ],
      supervisor: { 
        name: {
          en: "Sri Venkatesh",
          kn: "ಶ್ರೀ ವೆಂಕಟೇಶ್"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "9972625152" 
      }
    },
    {
      number: "7",
      officers: [
        { 
          name: {
            en: "Sri Rajesh",
            kn: "ಶ್ರೀ ರಾಜೇಶ್"
          }, 
          designation: {
            en: "HC-33",
            kn: "ಹೆಚ್.ಸಿ-33"
          }, 
          phone: "9972751239" 
        },
        { 
          name: {
            en: "Sri Nagaraj Naik",
            kn: "ಶ್ರೀ ನಾಗರಾಜ್ ನಾಯ್ಕ್"
          }, 
          designation: {
            en: "CPC-243",
            kn: "ಸಿಪಿಸಿ-243"
          }, 
          phone: "8310905143" 
        }
      ],
      villages: [
        { en: "Jadenahalli", kn: "ಜಾಡೇನಹಳ್ಳಿ" },
        { en: "Renumakalhalli", kn: "ರೇಣುಮಕಲ್ಹಳ್ಳಿ" },
        { en: "Gandlahalli", kn: "ಗಂಡ್ಲಹಳ್ಳಿ" },
        { en: "Gangarekaluwe", kn: "ಗಂಗಾರೆಕಲುವೆ" },
        { en: "Doddatammanahalli", kn: "ದೊಡ್ಡತಮ್ಮನಹಳ್ಳಿ" },
        { en: "Shettivarahalli", kn: "ಶೆಟ್ಟಿವರಹಳ್ಳಿ" },
        { en: "Chalakayalaparti", kn: "ಚಲಕಾಯಲಪರ್ತಿ" },
        { en: "Golluchinnappanahalli", kn: "ಗೊಲ್ಲುಚಿನ್ನಪ್ಪನಹಳ್ಳಿ" },
        { en: "Lakkanayakanahalli", kn: "ಲಕ್ಕನಾಯಕನಹಳ್ಳಿ" },
        { en: "Rayappanahalli", kn: "ರಾಯಪ್ಪನಹಳ್ಳಿ" },
        { en: "Soppahalli", kn: "ಸೊಪ್ಪಹಳ್ಳಿ" },
        { en: "Puradagadde", kn: "ಪುರದಗಡ್ಡೆ" }
      ],
      supervisor: { 
        name: {
          en: "Sri Manjunathagupta",
          kn: "ಶ್ರೀ ಮಂಜುನಾಥಗುಪ್ತ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "9901773153" 
      }
    },
    {
      number: "8",
      officers: [
        { 
          name: {
            en: "Sri Parashuram Bhovi",
            kn: "ಶ್ರೀ ಪರಶುರಾಮ್ ಭೋವಿ"
          }, 
          designation: {
            en: "CPC-259",
            kn: "ಸಿಪಿಸಿ-259"
          }, 
          phone: "6361210926" 
        },
        { 
          name: {
            en: "Sri Deepak",
            kn: "ಶ್ರೀ ದೀಪಕ್"
          }, 
          designation: {
            en: "CPC-52",
            kn: "ಸಿಪಿಸಿ-52"
          }, 
          phone: "9599347741" 
        }
      ],
      villages: [
        { en: "Dibbooru", kn: "ದಿಬ್ಬೂರು" },
        { en: "Nallimaradahalli", kn: "ನಲ್ಲಿಮರದಹಳ್ಳಿ" },
        { en: "D Kurubarhalli", kn: "ಡಿ ಕುರುಬರಹಳ್ಳಿ" },
        { en: "Gollu", kn: "ಗೊಲ್ಲು" },
        { en: "Hiriyannahalli", kn: "ಹಿರಿಯಣ್ಣನಹಳ್ಳಿ" },
        { en: "Budaganooru", kn: "ಬುಡಗನೂರು" },
        { en: "Badanigaanahalli", kn: "ಬದನಿಗಾನಹಳ್ಳಿ" },
        { en: "T Hosooru", kn: "ಟಿ ಹೊಸೂರು" },
        { en: "Katriguppe", kn: "ಕತ್ರಿಗುಪ್ಪೆ" },
        { en: "Maralukunte", kn: "ಮರಳುಕುಂಟೆ" },
        { en: "Kada Dibbooru", kn: "ಕಾಡ ದಿಬ್ಬೂರು" }
      ],
      supervisor: { 
        name: {
          en: "Sri Manjunathagupta",
          kn: "ಶ್ರೀ ಮಂಜುನಾಥಗುಪ್ತ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "9901773153" 
      }
    },
    {
      number: "9",
      officers: [
        { 
          name: {
            en: "Sri Girish",
            kn: "ಶ್ರೀ ಗಿರೀಶ್"
          }, 
          designation: {
            en: "HC-208",
            kn: "ಹೆಚ್.ಸಿ-208"
          }, 
          phone: "9731821157" 
        },
        { 
          name: {
            en: "Smt. Chaitra",
            kn: "ಶ್ರೀಮತಿ ಚೈತ್ರ"
          }, 
          designation: {
            en: "WPC-223",
            kn: "ಡಬ್ಲ್ಯೂ.ಪಿ.ಸಿ-223"
          }, 
          phone: "900683648" 
        }
      ],
      villages: [
        { en: "Tandramaradahalli", kn: "ತಾಂಡ್ರಮರದಹಳ್ಳಿ" },
        { en: "Adavigollavarahalli", kn: "ಅಡವಿಗೊಲ್ಲವರಹಳ್ಳಿ" },
        { en: "Honnappanahalli", kn: "ಹೊನ್ನಪ್ಪನಹಳ್ಳಿ" },
        { en: "Maregaanahalli", kn: "ಮರೇಗಾನಹಳ್ಳಿ" },
        { en: "Avalahalli", kn: "ಆವಲಹಳ್ಳಿ" },
        { en: "Chimanahalli", kn: "ಚಿಮನಹಳ್ಳಿ" },
        { en: "Pathooru", kn: "ಪಾತೂರು" },
        { en: "Angarekhanahalli", kn: "ಅಂಗಾರೆಖನಹಳ್ಳಿ" },
        { en: "Chikkatimmanahalli", kn: "ಚಿಕ್ಕತಿಮ್ಮನಹಳ್ಳಿ" },
        { en: "Kandakanahalli", kn: "ಕಂದಕನಹಳ್ಳಿ" }
      ],
      supervisor: { 
        name: {
          en: "Sri Manjunathagupta",
          kn: "ಶ್ರೀ ಮಂಜುನಾಥಗುಪ್ತ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "9901773153" 
      }
    },
    {
      number: "10",
      officers: [
        { 
          name: {
            en: "Sri Purushottama",
            kn: "ಶ್ರೀ ಪುರುಷೋತ್ತಮ"
          }, 
          designation: {
            en: "HC-133",
            kn: "ಹೆಚ್.ಸಿ-133"
          }, 
          phone: "8660905855" 
        },
        { 
          name: {
            en: "Sri Rajakumara",
            kn: "ಶ್ರೀ ರಾಜಕುಮಾರ"
          }, 
          designation: {
            en: "CPC-90",
            kn: "ಸಿಪಿಸಿ-90"
          }, 
          phone: "8970041197" 
        }
      ],
      villages: [
        { en: "Sabbenahalli", kn: "ಸಬ್ಬೇನಹಳ್ಳಿ" },
        { en: "Manchanabale", kn: "ಮಂಚನಬಲೆ" },
        { en: "Eetamakalhalli", kn: "ಈಟಮಕಲ್ಹಳ್ಳಿ" },
        { en: "Puttatimmanahalli", kn: "ಪುಟ್ಟತಿಮ್ಮನಹಳ್ಳಿ" },
        { en: "Kamashetihalli", kn: "ಕಾಮಶೆಟ್ಟಿಹಳ್ಳಿ" },
        { en: "Gundlagurki", kn: "ಗುಂಡ್ಲಗುರ್ಕಿ" },
        { en: "Anakanooru", kn: "ಅನಕನೂರು" },
        { en: "Patrenahalli", kn: "ಪಾತ್ರೇನಹಳ್ಳಿ" },
        { en: "Nayanhalli", kn: "ನಾಯನಹಳ್ಳಿ" },
        { en: "Andarlahalli", kn: "ಅಂದರ್ಲಹಳ್ಳಿ" },
        { en: "Muttakadahalli", kn: "ಮುತ್ತಕದಹಳ್ಳಿ" }
      ],
      supervisor: { 
        name: {
          en: "Sri Hanumantappa",
          kn: "ಶ್ರೀ ಹನುಮಂತಪ್ಪ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "9448587730" 
      }
    },
    {
      number: "11",
      officers: [
        { 
          name: {
            en: "Sri Manjunatha",
            kn: "ಶ್ರೀ ಮಂಜುನಾಥ"
          }, 
          designation: {
            en: "HC-137",
            kn: "ಹೆಚ್.ಸಿ-137"
          }, 
          phone: "9945512939" 
        },
        { 
          name: {
            en: "Smt. Bhavani",
            kn: "ಶ್ರೀಮತಿ ಭವಾನಿ"
          }, 
          designation: {
            en: "WPC-385",
            kn: "ಡಬ್ಲ್ಯೂ.ಪಿ.ಸಿ-385"
          }, 
          phone: "7676940336" 
        }
      ],
      villages: [
        { en: "Varadahalli", kn: "ವರದಹಳ್ಳಿ" },
        { en: "Tammanayakanahalli", kn: "ತಮ್ಮನಾಯಕನಹಳ್ಳಿ" },
        { en: "Jatavara Hosahalli", kn: "ಜಾತವರ ಹೊಸಹಳ್ಳಿ" },
        { en: "Hennoorukadirenahalli", kn: "ಹೆನ್ನೂರುಕದಿರೇನಹಳ್ಳಿ" },
        { en: "Ramachandra Hosooru", kn: "ರಾಮಚಂದ್ರ ಹೊಸೂರು" },
        { en: "Nanjayagarahalli", kn: "ನಂಜಯ್ಯಗಾರಹಳ್ಳಿ" },
        { en: "Balajigapade", kn: "ಬಾಲಜಿಗಾಪಾಡೆ" },
        { en: "Jatavara", kn: "ಜಾತವರ" },
        { en: "Gidnahalli", kn: "ಗಿಡ್ನಹಳ್ಳಿ" },
        { en: "Hosahudya", kn: "ಹೊಸಹುದ್ಯ" }
      ],
      supervisor: { 
        name: {
          en: "Sri Hanumantappa",
          kn: "ಶ್ರೀ ಹನುಮಂತಪ್ಪ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "9448587730" 
      }
    },
    {
      number: "12",
      officers: [
        { 
          name: {
            en: "Sri Venkatesh",
            kn: "ಶ್ರೀ ವೆಂಕಟೇಶ್"
          }, 
          designation: {
            en: "HC-224",
            kn: "ಹೆಚ್.ಸಿ-224"
          }, 
          phone: "9480246425" 
        },
        { 
          name: {
            en: "Sri Yallalinga Kurubar",
            kn: "ಶ್ರೀ ಯಲ್ಲಾಲಿಂಗ ಕುರುಬರ್"
          }, 
          designation: {
            en: "CPC-448",
            kn: "ಸಿಪಿಸಿ-448"
          }, 
          phone: "8296395157" 
        }
      ],
      villages: [
        { en: "C M C Layout", kn: "ಸಿ ಎಂ ಸಿ ಲೇಔಟ್" },
        { en: "Agalagurki", kn: "ಅಗಲಗುರ್ಕಿ" },
        { en: "Bannikuppe", kn: "ಬನ್ನಿಕುಪ್ಪೆ" },
        { en: "Sonnapura", kn: "ಸೊನ್ನಾಪುರ" },
        { en: "Tippanahalli", kn: "ತಿಪ್ಪನಹಳ್ಳಿ" },
        { en: "Ajjavara", kn: "ಅಜ್ಜಾವರ" },
        { en: "Nugitahalli", kn: "ನುಗಿತಹಳ್ಳಿ" },
        { en: "Mannarapura", kn: "ಮನ್ನಾರಾಪುರ" },
        { en: "Poojanahalli", kn: "ಪೂಜನಹಳ್ಳಿ" }
      ],
      supervisor: { 
        name: {
          en: "Sri Hanumantappa",
          kn: "ಶ್ರೀ ಹನುಮಂತಪ್ಪ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "9448587730" 
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