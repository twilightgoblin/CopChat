'use client';

import React from 'react';
import BeatPoliceLayout from '../BeatPoliceLayout';

const talukName = {
  en: "Pathapalya",
  kn: "ಪಾತಪಾಳ್ಯ"
};

const beatData = {
  supervisingOfficers: [
    { 
      beats: "1, 2, 3, 4", 
      name: {
        en: "Raju M.",
        kn: "ರಾಜು .ಎಂ."
      }, 
      designation: {
        en: "ASI",
        kn: "ಎ.ಎಸ್.ಐ"
      }, 
      phone: "N/A" 
    },
    { 
      beats: "5, 6, 7, 8", 
      name: {
        en: "Chandrashekhar M.V",
        kn: "ಚಂದ್ರಶೇಖರ್.ಎಂ.ವಿ"
      }, 
      designation: {
        en: "ASI",
        kn: "ಎ.ಎಸ್.ಐ"
      }, 
      phone: "N/A" 
    },
    { 
      beats: "9", 
      name: {
        en: "Ramachandrappa",
        kn: "ರಾಮಚಂದ್ರಪ್ಪ"
      }, 
      designation: {
        en: "ASI",
        kn: "ಎ.ಎಸ್.ಐ"
      }, 
      phone: "N/A" 
    },
    { 
      beats: "10, 11, 12", 
      name: {
        en: "Nanjunda Sharma",
        kn: "ನಂಜುಂಡ ಶರ್ಮ"
      }, 
      designation: {
        en: "ASI",
        kn: "ಎ.ಎಸ್.ಐ"
      }, 
      phone: "N/A" 
    }
  ],
  beatDetails: [
    {
      number: "1",
      officers: [
        { 
          name: {
            en: "Manjunath B.S",
            kn: "ಮಂಜುನಾಥ ಬಿ.ಎಸ್"
          }, 
          designation: {
            en: "CPC-577",
            kn: "ಸಿಪಿಸಿ-577"
          }, 
          phone: "N/A" 
        },
        { 
          name: {
            en: "Priyanka C D",
            kn: "ಪ್ರಿಯಾಂಕ ಸಿ ಡಿ"
          }, 
          designation: {
            en: "MPC-299",
            kn: "ಮ.ಪಿ.ಸಿ-299"
          }, 
          phone: "N/A" 
        }
      ],
      villages: [
        { en: "Yalagalapalli", kn: "ಯಲಗಲಪಲ್ಲಿ" },
        { en: "Bairepalli", kn: "ಬೈರೆಪಲ್ಲಿ" },
        { en: "Sangatapalli", kn: "ಸಂಗಟಪಲ್ಲಿ" },
        { en: "Bairegollapalli", kn: "ಬೈರೇಗೊಲ್ಲಪಲ್ಲಿ" },
        { en: "Devarajapalli", kn: "ದೇವರಾಜಪಲ್ಲಿ" },
        { en: "Nagarlu", kn: "ನಗರುಲು" },
        { en: "Guttamidapalli", kn: "ಗುಟ್ಟಮೀದಪಲ್ಲಿ" },
        { en: "Pathapalya", kn: "ಪಾತಪಾಳ್ಯ" }
      ],
      supervisor: { 
        name: {
          en: "Raju M.",
          kn: "ರಾಜು .ಎಂ."
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "N/A" 
      }
    },
    {
      number: "2",
      officers: [
        { 
          name: {
            en: "Raghavendra P S",
            kn: "ರಾಘವೇಂದ್ರ ಪಿ ಸ್"
          }, 
          designation: {
            en: "CHC-183",
            kn: "ಸಿಹೆಚ್ಸಿ-183"
          }, 
          phone: "N/A" 
        },
        { 
          name: {
            en: "Anita K.B",
            kn: "ಅನಿತ ಕೆ.ಬಿ"
          }, 
          designation: {
            en: "MPC-356",
            kn: "ಮ.ಪಿ.ಸಿ-356"
          }, 
          phone: "N/A" 
        }
      ],
      villages: [
        { en: "Nallasanapalli", kn: "ನಲ್ಲಸಾನಪಲ್ಲಿ" },
        { en: "Bukkanapalli", kn: "ಬುಕ್ಕನಪಲ್ಲಿ" },
        { en: "Gondipalli", kn: "ಗೊಂದಿಪಲ್ಲಿ" },
        { en: "Kamasanapalli", kn: "ಕಾಮಸಾನಪಲ್ಲಿ" },
        { en: "Singappagaripallli", kn: "ಸಿಂಗಪ್ಪಗಾರಿಪಲ್ಲಿ" },
        { en: "Pathakote", kn: "ಪಾತಕೋಟೆ" },
        { en: "Gudipalli", kn: "ಗುಡಿಪಲ್ಲಿ" }
      ],
      supervisor: { 
        name: {
          en: "Raju M.",
          kn: "ರಾಜು .ಎಂ."
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "N/A" 
      }
    },
    {
      number: "3",
      officers: [
        { 
          name: {
            en: "Narayanareddy N",
            kn: "ನಾರಾಯಣರೆಡ್ಡಿ ಎನ್"
          }, 
          designation: {
            en: "CHC-233",
            kn: "ಸಿಹೆಚ್ಸಿ-233"
          }, 
          phone: "N/A" 
        },
        { 
          name: {
            en: "Abbasali Nandahalli",
            kn: "ಅಬ್ಬಾಸಲಿ ನಂದಹಳ್ಳಿ"
          }, 
          designation: {
            en: "CPC-584",
            kn: "ಸಿಪಿಸಿ-584"
          }, 
          phone: "N/A" 
        }
      ],
      villages: [
        { en: "Kottooru", kn: "ಕೊತ್ತೂರು" },
        { en: "Gujjepalli", kn: "ಗುಜ್ಜೇಪಲ್ಲಿ" },
        { en: "Sakkanappagaripallli", kn: "ಸಕ್ಕನಪ್ಪಗಾರಿಪಲ್ಲಿ" },
        { en: "Bandolapalli", kn: "ಬಂಡೋಲಪಲ್ಲಿ" },
        { en: "Paipalya", kn: "ಪೈಪಾಳ್ಯ" },
        { en: "Vadigere", kn: "ವಡಿಗೆರೆ" },
        { en: "Nadampalli", kn: "ನಡಂಪಲ್ಲಿ" },
        { en: "Bandakindapalli", kn: "ಬಂಡಕಿಂದಪಲ್ಲಿ" }
      ],
      supervisor: { 
        name: {
          en: "Raju M.",
          kn: "ರಾಜು .ಎಂ."
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "N/A" 
      }
    },
    {
      number: "4",
      officers: [
        { 
          name: {
            en: "Rajesh T.N",
            kn: "ರಾಜೇಶ್. ಟಿ.ಎನ್"
          }, 
          designation: {
            en: "CHC-179",
            kn: "ಸಿಹೆಚ್ಸಿ-179"
          }, 
          phone: "N/A" 
        }
      ],
      villages: [
        { en: "Bodikadirepalli", kn: "ಬೋಡಿಕದಿರೇಪಲ್ಲಿ" },
        { en: "Vasapparallapalli", kn: "ವಾಸಪ್ಪರಾಲ್ಲಪಲ್ಲಿ" },
        { en: "Neeragantipalli", kn: "ನೀರಗಂಟಿಪಲ್ಲಿ" },
        { en: "Balehosahalli", kn: "ಬಳೇಹೊಸಹಳ್ಳಿ" },
        { en: "Hosahudya", kn: "ಹೊಸಹುಡ್ಯ" },
        { en: "Joolapalya", kn: "ಜೂಲಪಾಳ್ಯ" },
        { en: "Nakkalapalli", kn: "ನಕ್ಕಲಪಲ್ಲಿ" }
      ],
      supervisor: { 
        name: {
          en: "Raju M.",
          kn: "ರಾಜು .ಎಂ."
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "N/A" 
      }
    },
    {
      number: "5",
      officers: [
        { 
          name: {
            en: "Sheela K.V",
            kn: "ಶೀಲಾ ಕೆ.ವಿ"
          }, 
          designation: {
            en: "MHC-106",
            kn: "ಮ.ಹೆಚ್.ಸಿ-106"
          }, 
          phone: "N/A" 
        },
        { 
          name: {
            en: "Lakshmipathi V",
            kn: "ಲಕ್ಷ್ಮೀಪತಿ .ವಿ"
          }, 
          designation: {
            en: "CPC-189",
            kn: "ಸಿಪಿಸಿ-189"
          }, 
          phone: "N/A" 
        }
      ],
      villages: [
        { en: "Somanathapura", kn: "ಸೋಮನಾಥಪುರ" },
        { en: "Boodalapalli", kn: "ಬೂದಲಪಲ್ಲಿ" },
        { en: "Seegalapalli", kn: "ಸೀಗಲಪಲ್ಲಿ" },
        { en: "Seemannagaripallli", kn: "ಸೀಮನ್ನಗಾರಿಪಲ್ಲಿ" },
        { en: "Devarlapalli", kn: "ದೇವಾರ್ಲಪಲ್ಲಿ" },
        { en: "Gundamvarapalli", kn: "ಗುಂಡಂವಾರಪಲ್ಲಿ" },
        { en: "Marimakalapalli", kn: "ಮರಿಮಾಕಲಪಲ್ಲಿ" },
        { en: "Tollapalli", kn: "ತೋಳ್ಳಪಲ್ಲಿ" }
      ],
      supervisor: { 
        name: {
          en: "Chandrashekhar M.V",
          kn: "ಚಂದ್ರಶೇಖರ್.ಎಂ.ವಿ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "N/A" 
      }
    },
    {
      number: "6",
      officers: [
        { 
          name: {
            en: "Ramesh C",
            kn: "ರಮೇಶ್.ಸಿ"
          }, 
          designation: {
            en: "CHC-205",
            kn: "ಸಿಹೆಚ್ಸಿ-205"
          }, 
          phone: "N/A" 
        },
        { 
          name: {
            en: "Yaragoresh Satihala",
            kn: "ಯರಗೋರೇಶ್ ಸಾತಿಹಾಳ"
          }, 
          designation: {
            en: "CPC-326",
            kn: "ಸಿಪಿಸಿ-326"
          }, 
          phone: "N/A" 
        }
      ],
      villages: [
        { en: "Gummanayakanapalya", kn: "ಗುಮ್ಮನಾಯಕನಪಾಳ್ಯ" },
        { en: "Tungetidinna", kn: "ತುಂಗೇಟಿದಿನ್ನ" },
        { en: "Vasantapura", kn: "ವಸಂತಪುರ" },
        { en: "Agatamadaka", kn: "ಅಗಟಮಡಕ" },
        { en: "Yarrapetla", kn: "ಯರ್ರಪೆಟ್ಲ" },
        { en: "Kanalapalli", kn: "ಕಣಾಲಪಲ್ಲಿ" },
        { en: "Gummavandlapalli", kn: "ಗುಮ್ಮವಾಂಡ್ಲಪಲ್ಲಿ" },
        { en: "Kamatampalli", kn: "ಕಮಟಂಪಲ್ಲಿ" }
      ],
      supervisor: { 
        name: {
          en: "Chandrashekhar M.V",
          kn: "ಚಂದ್ರಶೇಖರ್.ಎಂ.ವಿ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "N/A" 
      }
    },
    {
      number: "7",
      officers: [
        { 
          name: {
            en: "Narasimhayya K.G",
            kn: "ನರಸಿಂಹಯ್ಯ ಕೆ.ಜಿ"
          }, 
          designation: {
            en: "CHC-260",
            kn: "ಸಿ.ಹೆಚ್.ಸಿ-260"
          }, 
          phone: "N/A" 
        },
        { 
          name: {
            en: "Ganesh Kumar",
            kn: "ಗಣೇಶ್ ಕುಮಾರ"
          }, 
          designation: {
            en: "CPC-41",
            kn: "ಸಿಪಿಸಿ-41"
          }, 
          phone: "N/A" 
        }
      ],
      villages: [
        { en: "Rechanayakanahalli", kn: "ರೇಚನಾಯಕನಹಳ್ಳಿ" },
        { en: "Kollawaripalli", kn: "ಕೊಳ್ಳವಾರಿಪಲ್ಲಿ" },
        { en: "Naremaddepalli", kn: "ನಾರೇಮದ್ದೇಪಲ್ಲಿ" },
        { en: "Jangalapalli", kn: "ಜಂಗಾಲಪಲ್ಲಿ" },
        { en: "Shivapura", kn: "ಶಿವಪುರ" },
        { en: "Kondireddipalli", kn: "ಕೊಂಡಿರೆಡ್ಡಿಪಲ್ಲಿ" },
        { en: "Kallirayanakunte", kn: "ಕಲ್ಲಿರಾಯನಕುಂಟೆ" },
        { en: "Upparlapalli", kn: "ಉಪ್ಪಾರ್ಲಪಲ್ಲಿ" }
      ],
      supervisor: { 
        name: {
          en: "Chandrashekhar M.V",
          kn: "ಚಂದ್ರಶೇಖರ್.ಎಂ.ವಿ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "N/A" 
      }
    },
    {
      number: "8",
      officers: [
        { 
          name: {
            en: "Parasappa Rathod",
            kn: "ಪರಸಪ್ಪ ರಾಥೋಡ್"
          }, 
          designation: {
            en: "CPC-188",
            kn: "ಸಿಪಿಸಿ-188"
          }, 
          phone: "N/A" 
        },
        { 
          name: {
            en: "Shabbir Ooranamani",
            kn: "ಶಬ್ಬೀರ್ ಊರನಾಮನಿ"
          }, 
          designation: {
            en: "CPC-278",
            kn: "ಸಿಪಿಸಿ-278"
          }, 
          phone: "N/A" 
        }
      ],
      villages: [
        { en: "Vangarlapalli", kn: "ವಂಗಾರ್ಲಪಲ್ಲಿ" },
        { en: "Nandappagaripallli", kn: "ನಂದಪ್ಪಗಾರಿಪಲ್ಲಿ" },
        { en: "Sujnampalli", kn: "ಸುಜ್ಞಾಂಪಲ್ಲಿ" },
        { en: "Kallipalli", kn: "ಕಲ್ಲಿಪಲ್ಲಿ" },
        { en: "Indukurollapalli", kn: "ಇಂದುಕುರೋಲ್ಲಪಲ್ಲಿ" },
        { en: "Dugginepalli", kn: "ದುಗ್ಗಿನೇಪಲ್ಲಿ" },
        { en: "Peddareddipallli", kn: "ಪೆದ್ದರೆಡ್ಡಿಪಲ್ಲಿ" },
        { en: "Billooru", kn: "ಬಿಳ್ಳೂರು" }
      ],
      supervisor: { 
        name: {
          en: "Chandrashekhar M.V",
          kn: "ಚಂದ್ರಶೇಖರ್.ಎಂ.ವಿ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "N/A" 
      }
    },
    {
      number: "9",
      officers: [
        { 
          name: {
            en: "Venkatesh M",
            kn: "ವೆಂಕಟೇಶ್ ಎಂ"
          }, 
          designation: {
            en: "CPC-566",
            kn: "ಸಿಪಿಸಿ-566"
          }, 
          phone: "N/A" 
        },
        { 
          name: {
            en: "Lal Sab Shekh",
            kn: "ಲಾಲ್ ಸಾಬ್ ಷೇಖ್"
          }, 
          designation: {
            en: "CPC-73",
            kn: "ಸಿಪಿಸಿ-73"
          }, 
          phone: "N/A" 
        }
      ],
      villages: [
        { en: "Mallepalli", kn: "ಮಲ್ಲೇಪಲ್ಲಿ" },
        { en: "Myakalollapalli", kn: "ಮ್ಯಾಕಲೋಳ್ಳಪಲ್ಲಿ" },
        { en: "Gandamvarapalli", kn: "ಗಂದಂವಾರಪಲ್ಲಿ" },
        { en: "Boyipalli", kn: "ಬೋಯಿಪಲ್ಲಿ" },
        { en: "Kottooru", kn: "ಕೊತ್ತೂರು" },
        { en: "Chamalawaripalli", kn: "ಚಾಮಲವಾರಿಪಲ್ಲಿ" },
        { en: "Goravandlapalli", kn: "ಗೊರವಾಂಡ್ಲಪಲ್ಲಿ" },
        { en: "Kurapalli", kn: "ಕುರಪಲ್ಲಿ" }
      ],
      supervisor: { 
        name: {
          en: "Ramachandrappa",
          kn: "ರಾಮಚಂದ್ರಪ್ಪ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "N/A" 
      }
    },
    {
      number: "10",
      officers: [
        { 
          name: {
            en: "Nataraja",
            kn: "ನಟರಾಜ"
          }, 
          designation: {
            en: "CHC-156",
            kn: "ಸಿಹೆಚ್ ಸಿ-156"
          }, 
          phone: "N/A" 
        },
        { 
          name: {
            en: "Praveen Kumar",
            kn: "ಪ್ರವೀಣ್ ಕುಮಾರ್"
          }, 
          designation: {
            en: "CPC-599",
            kn: "ಸಿಪಿಸಿ-599"
          }, 
          phone: "N/A" 
        }
      ],
      villages: [
        { en: "Rachavarapalli", kn: "ರಾಚವಾರಪಲ್ಲಿ" },
        { en: "Gotlapalli", kn: "ಗೊಟ್ಲಪಲ್ಲಿ" },
        { en: "Mangalamaduguvarapalli", kn: "ಮಂಗಳಮಡುಗುವಾರಪಲ್ಲಿ" },
        { en: "Doddivarapalli", kn: "ದೊಡ್ಡಿವಾರಪಲ್ಲಿ" },
        { en: "Chinnaganapalli", kn: "ಚಿನ್ನಗಾನಪಲ್ಲಿ" },
        { en: "Kurubarhalli", kn: "ಕುರುಬರಹಳ್ಳಿ" },
        { en: "Kurapalli", kn: "ಕುರಪಲ್ಲಿ" },
        { en: "Ramanupadi", kn: "ರಾಮಾನುಪಾಡಿ" }
      ],
      supervisor: { 
        name: {
          en: "Nanjunda Sharma",
          kn: "ನಂಜುಂಡ ಶರ್ಮ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "N/A" 
      }
    },
    {
      number: "11",
      officers: [
        { 
          name: {
            en: "Ramesh L.C",
            kn: "ರಮೇಶ್.ಎಲ್.ಸಿ"
          }, 
          designation: {
            en: "CPC-88",
            kn: "ಸಿಪಿಸಿ-88"
          }, 
          phone: "N/A" 
        },
        { 
          name: {
            en: "Yallappa Tollamatti",
            kn: "ಯಲ್ಲಪ್ಪ ತೋಳ್ಳಮಟ್ಟಿ"
          }, 
          designation: {
            en: "CPC-576",
            kn: "ಸಿಪಿಸಿ-576"
          }, 
          phone: "N/A" 
        }
      ],
      villages: [
        { en: "Vanteeravandlapalli", kn: "ವಂಟೀರವಾಂಡ್ಲಪಲ್ಲಿ" },
        { en: "Kadirannagarikoota", kn: "ಕದಿರನ್ನಗಾರಿಕೋಟ" },
        { en: "Doranalapalli", kn: "ದೋರಣಾಲಪಲ್ಲಿ" },
        { en: "Turikeshpalli", kn: "ತುರಿಕೇಶ್ಪಲ್ಲಿ" },
        { en: "Kallarollapalli", kn: "ಕಲ್ಲರೋಲ್ಲಪಲ್ಲಿ" },
        { en: "Kottapalli", kn: "ಕೋತ್ತಪಲ್ಲಿ" },
        { en: "Ramanupadi", kn: "ರಾಮಾನುಪಾಡಿ" },
        { en: "R.Nallagutlapalli", kn: "ಆರ್.ನಲ್ಲಗುಟ್ಲಪಲ್ಲಿ" }
      ],
      supervisor: { 
        name: {
          en: "Nanjunda Sharma",
          kn: "ನಂಜುಂಡ ಶರ್ಮ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "N/A" 
      }
    },
    {
      number: "12",
      officers: [
        { 
          name: {
            en: "Manjunath N S",
            kn: "ಮಂಜುನಾಥ ಎನ್ ಎಸ್"
          }, 
          designation: {
            en: "CPC-32",
            kn: "ಸಿಪಿಸಿ-32"
          }, 
          phone: "N/A" 
        }
      ],
      villages: [
        { en: "Mamidimakalapalli", kn: "ಮಾಮಿಡಿಮಾಕಲಪಲ್ಲಿ" },
        { en: "Devaramakalapalli", kn: "ದೇವರಮಾಕಲಪಲ್ಲಿ" },
        { en: "Pyayalavarapalli", kn: "ಪ್ಯಾಯಲವಾರಪಲ್ಲಿ" },
        { en: "Arigevarigutta", kn: "ಅರಿಗೇವಾರಿಗುಟ್ಟ" },
        { en: "Gyadavandlapalli", kn: "ಗ್ಯಾದವಾಂಡ್ಲಪಲ್ಲಿ" },
        { en: "Bestalapalli", kn: "ಬೆಸ್ತಲಪಲ್ಲಿ" }
      ],
      supervisor: { 
        name: {
          en: "Nanjunda Sharma",
          kn: "ನಂಜುಂಡ ಶರ್ಮ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "N/A" 
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