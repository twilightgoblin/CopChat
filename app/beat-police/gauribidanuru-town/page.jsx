import BeatPoliceLayout from "../BeatPoliceLayout";

const beatPoliceInfo = [
  {
    beatNumber: 1,
    areas: ["Karekalahalli", "Swagat Layout", "Nagaredddy Layout", "Nagalamma Layout"],
    kannadaAreas: ["ಕರೇಕಲ್ಲಹಳ್ಳಿ", "ಸ್ವಾಗತ್ ಲೇಔಟ್", "ನಾಗರೆಡ್ಡಿ ಬಡಾವಣೆ", "ನಾಗಲಮ್ಮ ಬಡಾವಣೆ"],
    officers: [
      {
        name: "Suresh H R",
        kannadaName: "ಸುರೇಶ್ ಹೆಚ್ ಆರ್",
        designation: "CPC-587",
        kannadaDesignation: "ಸಿಪಿಸಿ-587",
        phone: "9482789177",
      },
    ],
    supervisor: {
      name: "Venkateshappa S M",
      kannadaName: "ವೆಂಕಟೇಶಪ್ಪ ಎಸ್ ಎಂ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9900985365",
    },
  },
  {
    beatNumber: 2,
    areas: ["Kuvempu Nagar", "Vidya Nagar", "K.L.N Layout"],
    kannadaAreas: ["ಕುವೆಂಪು ನಗರ", "ವಿದ್ಯಾನಗರ", "ಕೆ.ಎಲ್.ಎನ್ ಲೇಔಟ್"],
    officers: [
      {
        name: "Shashikumar",
        kannadaName: "ಶಶಿಕುಮಾರ್",
        designation: "CPC-572",
        kannadaDesignation: "ಸಿಪಿಸಿ-572",
        phone: "9663033416",
      },
    ],
    supervisor: {
      name: "Venkateshappa S M",
      kannadaName: "ವೆಂಕಟೇಶಪ್ಪ ಎಸ್ ಎಂ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9900985365",
    },
  },
  {
    beatNumber: 3,
    areas: ["Virandahalli", "H.N Layout", "Ayyappa Swami Temple Area"],
    kannadaAreas: ["ವೀರಂಡಹಳ್ಳಿ", "ಹೆಚ್.ಎನ್ ಬಡಾವಣೆ", "ಅಯ್ಯಪ್ಪ ಸ್ವಾಮಿ ದೇವಸ್ಥಾನ ಹಿಂಭಾಗ"],
    officers: [
      {
        name: "Govindappa",
        kannadaName: "ಗೋವಿಂದಪ್ಪ",
        designation: "HC-113",
        kannadaDesignation: "ಹೆಚ್‌ಸಿ-113",
        phone: "9986002896",
      },
      {
        name: "Sheela",
        kannadaName: "ಶೀಲಾ",
        designation: "MPC-380",
        kannadaDesignation: "ಮಪಿಸಿ-380",
        phone: "8105260530",
      },
    ],
    supervisor: {
      name: "Venkateshappa S M",
      kannadaName: "ವೆಂಕಟೇಶಪ್ಪ ಎಸ್ ಎಂ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9900985365",
    },
  },
  {
    beatNumber: 4,
    areas: ["Vinayaka Nagar", "Brahmin Street"],
    kannadaAreas: ["ವಿನಾಯಕ ನಗರ", "ಬ್ರಾಹ್ಮಣರ ಬೀದಿ"],
    officers: [
      {
        name: "Shivashekhar",
        kannadaName: "ಶಿವಶೇಖರ್",
        designation: "CPC-179",
        kannadaDesignation: "ಸಿಪಿಸಿ-179",
        phone: "9535455203",
      },
    ],
    supervisor: {
      name: "Venkateshappa S M",
      kannadaName: "ವೆಂಕಟೇಶಪ್ಪ ಎಸ್ ಎಂ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9900985365",
    },
  },
  {
    beatNumber: 5,
    areas: ["Vinayaka Nagar", "Brahmin Street"],
    kannadaAreas: ["ವಿನಾಯಕ ನಗರ", "ಬ್ರಾಹ್ಮಣರ ಬೀದಿ"],
    officers: [
      {
        name: "Manjunatha",
        kannadaName: "ಮಂಜುನಾಥ",
        designation: "CPC-34",
        kannadaDesignation: "ಸಿಪಿಸಿ-34",
        phone: "6361251198",
      },
    ],
    supervisor: {
      name: "Venkateshappa S M",
      kannadaName: "ವೆಂಕಟೇಶಪ್ಪ ಎಸ್ ಎಂ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9900985365",
    },
  },
  {
    beatNumber: 6,
    areas: ["Sante Maidana", "Nadigadde", "Sadashiva Layout"],
    kannadaAreas: ["ಸಂತೇ ಮೈದಾನ", "ನದಿಗಡ್ಡೆ", "ಸದಾಶಿವ ಬಡಾವಣೆ"],
    officers: [
      {
        name: "Sriramayya",
        kannadaName: "ಶ್ರೀರಾಮಯ್ಯ",
        designation: "HC-10",
        kannadaDesignation: "ಹೆಚ್‌ಸಿ-10",
        phone: "8892712725",
      },
    ],
    supervisor: {
      name: "Venkateshappa S M",
      kannadaName: "ವೆಂಕಟೇಶಪ್ಪ ಎಸ್ ಎಂ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9900985365",
    },
  },
  {
    beatNumber: 7,
    areas: ["Kakanathopu", "Abhilash Layout", "Sumangali Layout"],
    kannadaAreas: ["ಕಾಕನತೋಪು", "ಅಭಿಲಾಷ್ ಲೇಔಟ್", "ಸುಮಂಗಲಿ ಬಡಾವಣೆ"],
    officers: [
      {
        name: "Babu",
        kannadaName: "ಬಾಬು",
        designation: "CPC-139",
        kannadaDesignation: "ಸಿಪಿಸಿ-139",
        phone: "9742188108",
      },
    ],
    supervisor: {
      name: "Venkateshappa S M",
      kannadaName: "ವೆಂಕಟೇಶಪ್ಪ ಎಸ್ ಎಂ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9900985365",
    },
  },
  {
    beatNumber: 8,
    areas: ["Panduranga Temple", "Mental Hospital", "Madhava Nagar", "Church"],
    kannadaAreas: ["ಪಾಂಡುರಂಗ ದೇವಸ್ಥಾನ", "ಮಾನಸ ಅಸ್ಪತ್ರೆ", "ಮಾಧವ ನಗರ", "ಚರ್ಚ್"],
    officers: [
      {
        name: "Sindu",
        kannadaName: "ಸಿಂಧು",
        designation: "MPC-445",
        kannadaDesignation: "ಮ.ಪಿ.ಸಿ-445",
        phone: "9741657357",
      },
    ],
    supervisor: {
      name: "Venkateshappa S M",
      kannadaName: "ವೆಂಕಟೇಶಪ್ಪ ಎಸ್ ಎಂ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9900985365",
    },
  },
  {
    beatNumber: 9,
    areas: ["Shyanu Bhogarahalli", "Ramayanadavaragalli", "Bazaar Road Left Side"],
    kannadaAreas: ["ಶ್ಯಾನು ಭೋಗರಗಲ್ಲಿ", "ರಾಮಾಯಣದವರಗಲ್ಲಿ", "ಬಜಾರ್ ರಸ್ತೆ ಎಡ ಭಾಗ"],
    officers: [
      {
        name: "Ashwathanarayana",
        kannadaName: "ಅಶ್ವತ್ಥನಾರಾಯಣ",
        designation: "CPC-235",
        kannadaDesignation: "ಸಿಪಿಸಿ-235",
        phone: "6360589048",
      },
    ],
    supervisor: {
      name: "Venkateshappa S M",
      kannadaName: "ವೆಂಕಟೇಶಪ್ಪ ಎಸ್ ಎಂ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9900985365",
    },
  },
  {
    beatNumber: 10,
    areas: ["Hoovadigaragalli", "Gaurayagalli", "B.H Road", "Bavi Katte", "Marigamma Temple Area"],
    kannadaAreas: ["ಹೂವಡಿಗರಗಲ್ಲಿ", "ಗೌರಯ್ಯಗಲ್ಲಿ", "ಬಿ ಹೆಚ್.ರಸ್ತೆ", "ಬಾವಿ ಕಟ್ಟೆ", "ಮರಿಗಮ್ಮ ದೇವಸ್ಥಾನ ಪ್ರದೇಶ್"],
    officers: [
      {
        name: "Gadeppa Shivapura",
        kannadaName: "ಗದ್ದೆಪ್ಪ ಶಿವಪೂರ",
        designation: "PC-388",
        kannadaDesignation: "ಪಿ.ಸಿ-388",
        phone: "9901763407",
      },
    ],
    supervisor: {
      name: "Venkateshappa S M",
      kannadaName: "ವೆಂಕಟೇಶಪ್ಪ ಎಸ್ ಎಂ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9900985365",
    },
  },
  {
    beatNumber: 11,
    areas: [
      "Railway Quarters",
      "Isturi Sibbayashetty Layout",
      "H.P Nagendra Kumar Layout",
      "G.S.K Layout",
      "C Rajanna Layout",
      "K.N Ramegowda Layout",
      "M Narasamma Layout",
    ],
    kannadaAreas: [
      "ರೈಲ್ವೆ ಕ್ವಾಟ್ರಸ್",
      "ಇಸ್ತೂರಿ ಸಿಬ್ಬಯ್ಯಶೆಟ್ಟಿ ಬಡಾವಣೆ",
      "ಹೆಚ್.ಪಿ ನಾಗೇಂದ್ರ ಕುಮರ್ಬಡಾವಣೆ",
      "ಜಿ.ಎಸ್.ಕೆ ಬಡಾವಣೆ",
      "ಸಿ ರಾಜಣ್ಣ ಬಡಾವಣೆ",
      "ಕೆ.ಎನ್ ರಾಮೇಗೌಡ ಬಡಾವಣೆ",
      "ಎಂ ನರಸಮ್ಮ ಬಡಾವಣೆ",
    ],
    officers: [
      {
        name: "Santosh Malagi",
        kannadaName: "ಸಂತೋಷ್ ಮಾಳಗಿ",
        designation: "PC-585",
        kannadaDesignation: "ಪಿ.ಸಿ-585",
        phone: "8722335684",
      },
    ],
    supervisor: {
      name: "Venkateshappa S M",
      kannadaName: "ವೆಂಕಟೇಶಪ್ಪ ಎಸ್ ಎಂ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9900985365",
    },
  },
  {
    beatNumber: 12,
    areas: ["Thyagaraja Colony", "Kambakka Layout"],
    kannadaAreas: ["ತ್ಯಾಗರಾಜ ಕಾಲೋನಿ", "ಕಂಬಕ್ಕ ಬಡಾವಣೆ"],
    officers: [
      {
        name: "Padma",
        kannadaName: "ಪದ್ಮ",
        designation: "WHC-05",
        kannadaDesignation: "ಮ.ಹೆಚ್.ಸಿ-05",
        phone: "9972862192",
      },
    ],
    supervisor: {
      name: "Venkateshappa S M",
      kannadaName: "ವೆಂಕಟೇಶಪ್ಪ ಎಸ್ ಎಂ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9900985365",
    },
  },
  {
    beatNumber: 13,
    areas: [
      "R.K Area",
      "Stella Convent, Railway Station Road",
      "Kolimigalli Area",
      "Dr. Raju House Area",
      "Kambakka and Venkatesh Layout",
      "Shani Mahatma Temple Back Area",
      "Kokala Kodata Area",
      "Nataraju Talkies Back Area",
    ],
    kannadaAreas: [
      "ಆರ್.ಕೆ ಏರಿಯಾ",
      "ಸ್ಟೇಲ್ಲಾ ಕಾನ್ವೆಂಟ್, ರೈಲ್ವೇ ಸ್ಟೇಷನ್ ರಸ್ತೆ",
      "ಕೊಲಿಮಿಗಲ್ಲಿ ಪ್ರದೇಶ್",
      "ಡಾ|| ರಾಜು ಮನೆ ಪ್ರದೇಶ್",
      "ಕಂಬಕ್ಕ ಮತ್ತು ವೆಂಕಟೇಶ್ ಬಡಾವಣೆ",
      "ಶನಿ ಮಹಾತ್ಮ ದೇವಸ್ಥಾನ ಹಿಂಭಾಗ",
      "ಕೊಕಲ ಕೊಡತ ಪ್ರದೇಶ",
      "ನಟರಾಜು ಟಾಕೀಸ್ ಹಿಂಭಾಗ",
    ],
    officers: [
      {
        name: "Tippeswami",
        kannadaName: "ತಿಪ್ಪೇಸ್ವಾಮಿ",
        designation: "CPC-208",
        kannadaDesignation: "ಸಿಪಿಸಿ-208",
        phone: "8147985648",
      },
    ],
    supervisor: {
      name: "Venkateshappa S M",
      kannadaName: "ವೆಂಕಟೇಶಪ್ಪ ಎಸ್ ಎಂ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9900985365",
    },
  },
  {
    beatNumber: 14,
    areas: [
      "VV Puram",
      "Gauri School Area",
      "Bank Colony",
      "Railway Parallel Side",
      "Housing Board Colony",
      "Nagaraju Gupta and Nanjuraju Gupta Layout",
    ],
    kannadaAreas: [
      "ವಿವಿಪುರಂ",
      "ಗೌರಿ ಶಾಲೆ ಪ್ರದೇಶ",
      "ಬ್ಯಾಂಕ್ ಕಾಲೋನಿ",
      "ರೈಲ್ವೆ ಪ್ಯಾರೇರಲ್ ಪಕ್ಕ",
      "ಹೌಸಿಂಗ್ ಬೋರ್ಡ್ ಕಾಲೋನಿ",
      "ನಾಗರಾಜು ಗುಪ್ತ ಮತ್ತು ನಂಜುರಾಜು ಗುಪ್ತ ಬಡಾವಣೆ",
    ],
    officers: [
      {
        name: "Manjunatha",
        kannadaName: "ಮಂಜುನಾಥ",
        designation: "HC-206",
        kannadaDesignation: "ಹೆಚ್.ಸಿ-206",
        phone: "9480246425",
      },
    ],
    supervisor: {
      name: "Venkateshappa S M",
      kannadaName: "ವೆಂಕಟೇಶಪ್ಪ ಎಸ್ ಎಂ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9900985365",
    },
  },
  {
    beatNumber: 15,
    areas: [
      "Tippu Nagar",
      "Hosapet",
      "Welcome Bar Road",
      "Paragi Huchappagalli",
      "Peeru Sabigalli",
      "Bakari Sabgalli",
      "Esupgalli",
    ],
    kannadaAreas: ["ಟಿಪ್ಪುನಗರ", "ಹೊಸಪೇಟ್", "ವೆಲ್ಕಮ್ ಬಾರ್ ರಸ್ತೆ", "ಪರಗಿ ಹುಚ್ಚಪ್ಪಗಲ್ಲಿ", "ಪೀರುಸಾಬಿಗಲ್ಲಿ", "ಬಕಾರಿ ಸಾಬ್ಗಲ್ಲಿ", "ಈಸೂಪ್ಗಲ್ಲಿ"],
    officers: [
      {
        name: "Kariyappa",
        kannadaName: "ಕರಿಯಪ್ಪ",
        designation: "CPC-339",
        kannadaDesignation: "ಸಿಪಿಸಿ-339",
        phone: "8722620205",
      },
    ],
    supervisor: {
      name: "Venkateshappa S M",
      kannadaName: "ವೆಂಕಟೇಶಪ್ಪ ಎಸ್ ಎಂ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9900985365",
    },
  },
  {
    beatNumber: 16,
    areas: [
      "Marigamma Temple Area",
      "Hosapete Area Marigamma Road",
      "M.G. Circle Left Side",
      "M.G. Circle to Canara Bank",
      "Bangalore Circle to Madhugiri Circle",
    ],
    kannadaAreas: [
      "ಮರಿಗಮ್ಮ ದೇವಸ್ಥಾನ ಪ್ರದೇಶ",
      "ಹೊಸಪೇಟೆ ಏರಿಯಾ ಮರಿಗಮ್ಮ ರಸ್ತೆ",
      "ಎಂ.ಜಿ.ವೃತ್ತ ಎಡಭಾಗ",
      "ಎಂ.ಜಿ ವೃತ್ತದಿಂದ ಕೆನರಾ ಬ್ಯಾಂಕ್ ವರಗೆ",
      "ಬೆಂಗಳೂರು ವೃತ್ತದಿಂದ ಮಧುಗಿರಿ ವೃತ್ತದ ವರೆಗೆ",
    ],
    officers: [
      {
        name: "Nagamani",
        kannadaName: "ನಾಗಮಣಿ",
        designation: "WHC-356",
        kannadaDesignation: "ಮ,ಹೆಚ್,ಸಿ-356",
        phone: "9741030627",
      },
    ],
    supervisor: {
      name: "Somashekhar",
      kannadaName: "ಸೋಮಶೇಖರ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9742862849",
    },
  },
  {
    beatNumber: 17,
    areas: ["Azad Nagar, 1st to 3rd Roads", "Slum Area"],
    kannadaAreas: ["ಅಜಾದ್ ನಗರ, 01 ರಿಂದ 03 ನೇ ರಸ್ತೆಗಳು", "ಸ್ಲಂ ಏರಿಯಾ"],
    officers: [
      {
        name: "Jikriya",
        kannadaName: "ಜಿಕ್ರಿಯಾ",
        designation: "HC-247",
        kannadaDesignation: "ಹೆಚ್.ಸಿ-247",
        phone: "9844134708",
      },
    ],
    supervisor: {
      name: "Somashekhar",
      kannadaName: "ಸೋಮಶೇಖರ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9742862849",
    },
  },
  {
    beatNumber: 18,
    areas: ["Nehruji Colony", "Old Court Back Area", "Bala Vidya Bhavana School Road"],
    kannadaAreas: ["ನೆಹರೂಜಿ ಕಾಲೋನಿ", "ಹಳೇ ಕೋರ್ಟ್ ಹಿಂಭಾಗ ಪ್ರದೇಶ್", "ಬಾಲ ವಿದ್ಯಾ ಭವನ ಶಾಲೆ ರಸ್ತೆ"],
    officers: [
      {
        name: "Prakash Tegalli",
        kannadaName: "ಪ್ರಕಾಶ್ ತೆಗಳ್ಳಿ",
        designation: "CPC-569",
        kannadaDesignation: "ಸಿಪಿಸಿ-569",
        phone: "7760552569",
      },
    ],
    supervisor: {
      name: "Somashekhar",
      kannadaName: "ಸೋಮಶೇಖರ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9742862849",
    },
  },
  {
    beatNumber: 19,
    areas: ["Sri Nagar", "M.T.C Colony", "Railway Parallel Road", "Court Main Road", "Chikkajappana House Area"],
    kannadaAreas: ["ಶ್ರೀನಗರ", "ಎಂ.ಟಿ.ಸಿ ಕಾಲೋನಿ", "ರೈಲ್ವೇ ಪ್ಯಾರೇರಲ್ ರಸ್ತೆ", "ಕೋರ್ಟ್ ಮುಖ್ಯ ರಸ್ತೆ", "ಚಿಕ್ಕಜಪ್ಪನ ಮನೆ ಏರಿಯಾ"],
    officers: [
      {
        name: "Santosh Kumar",
        kannadaName: "ಸಂತೋಷ್ ಕುಮಾರ್",
        designation: "CPC-567",
        kannadaDesignation: "ಸಿಪಿಸಿ-567",
        phone: "9686195221",
      },
    ],
    supervisor: {
      name: "Somashekhar",
      kannadaName: "ಸೋಮಶೇಖರ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9742862849",
    },
  },
  {
    beatNumber: 20,
    areas: [
      "Uppara Colony",
      "Jyothi Nagar",
      "G. Shankaranarayana Layout",
      "Isturi Subbayya Layout",
      "Venkatadri Layout",
      "Udumalodu Road Left and Right Side Area",
    ],
    kannadaAreas: [
      "ಉಪ್ಪಾರ ಕಾಲೋನಿ",
      "ಜ್ಯೋತಿನಗರ",
      "ಜಿ.ಶಂಕರನಾರಾಯಣ ಬಡಾವಣೆ",
      "ಇಸ್ತೂರಿ ಸುಬ್ಬಯ್ಯ ಬಡಾವಣೆ",
      "ವೆಂಕಟಾದ್ರಿ ಬಡಾವಣೆ",
      "ಉಡುಮಲೋಡು ರಸ್ತೆಯ ಎಡ ಮತ್ತು ಬಲ ಭಾಗ ಪ್ರದೇಶ",
    ],
    officers: [
      {
        name: "Pushpa",
        kannadaName: "ಪುಷ್ಪಾ",
        designation: "WHC-28",
        kannadaDesignation: "ಮ.ಹೆಚ್.ಸಿ-28",
        phone: "9845258376",
      },
    ],
    supervisor: {
      name: "Somashekhar",
      kannadaName: "ಸೋಮಶೇಖರ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9742862849",
    },
  },
  {
    beatNumber: 21,
    areas: ["Aravinda Nagar", "Muneshwara Layout", "M.G Road Left Side"],
    kannadaAreas: ["ಅರವಿಂದ ನಗರ", "ಮುನೇಶ್ವರ ಬಡಾವಣೆ", "ಎಂ.ಜಿ ರಸ್ತೆ ಎಡ ಭಾಗ"],
    officers: [
      {
        name: "Gyanappa",
        kannadaName: "ಗ್ಯಾನಪ್ಪ",
        designation: "CPC-455",
        kannadaDesignation: "ಸಿಪಿಸಿ-455",
        phone: "9743436018",
      },
    ],
    supervisor: {
      name: "Somashekhar",
      kannadaName: "ಸೋಮಶೇಖರ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9742862849",
    },
  },
  {
    beatNumber: 22,
    areas: [
      "Madanahalli",
      "Pushpanjali Back Area",
      "Reliance Petrol Bunk Back Area",
      "Panduranga Temple Area",
      "Hanumantappa Layout",
      "Vidyanidhi School Area",
      "Vandu Beedu Area",
    ],
    kannadaAreas: [
      "ಮಾದನಹಳ್ಳಿ",
      "ಪುಷ್ಪಾಂಜಲಿ ಹಿಂಭಾಗ",
      "ರಿಲಯನ್ಸ್ ಪೆಟ್ರೋಲ್ ಬಂಕ್ ಹಿಂಭಾಗ",
      "ಪಾಂಡುರಂಗ ದೇವಸ್ಥಾನ ಪ್ರದೇಶ",
      "ಹನುಮಂತಪ್ಪ ಲೇಔಟ್",
      "ವಿದ್ಯಾನಿಧಿ ಶಾಲೆ ಪ್ರದೇಶ್",
      "ವಂಡು ಬೀಡು ಪ್ರದೇಶ",
    ],
    officers: [
      {
        name: "Mahantesh",
        kannadaName: "ಮಹಾಂತೇಶ್",
        designation: "CPC-344",
        kannadaDesignation: "ಸಿಪಿಸಿ-344",
        phone: "9591713170",
      },
    ],
    supervisor: {
      name: "Somashekhar",
      kannadaName: "ಸೋಮಶೇಖರ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9742862849",
    },
  },
  {
    beatNumber: 23,
    areas: ["Anandapura", "Hanumantnagar", "Madanahalli Main Road Right Side Area"],
    kannadaAreas: ["ಆನಂದಪುರ", "ಹನುಮಂತನಗರ", "ಮಾದನಹಳ್ಳಿ ಮುಖ್ಯ ರಸ್ತೆ ಬಲಭಾಗ ಪ್ರದೇಶ"],
    officers: [
      {
        name: "Mrutyunjayya",
        kannadaName: "ಮೃತ್ಯುಂಜಯ್ಯ",
        designation: "CPC-348",
        kannadaDesignation: "ಸಿಪಿಸಿ-348",
        phone: "8618418700",
      },
    ],
    supervisor: {
      name: "Somashekhar",
      kannadaName: "ಸೋಮಶೇಖರ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9742862849",
    },
  },
  {
    beatNumber: 24,
    areas: ["Gangamma Layout", "Annapurneshwari Layout", "Gundapura", "Pinakini Layout"],
    kannadaAreas: ["ಗಂಗಮ್ಮ ಬಡಾವಣೆ", "ಅನ್ನಪೂರ್ಣೇಶ್ವರಿ ಬಡಾವಣೆ", "ಗುಂಡಾಪುರ", "ಪಿನಾಕಿನಿ ಲೇಔಟ್"],
    officers: [
      {
        name: "Kumar Nayak",
        kannadaName: "ಕುಮಾರ್ ನಾಯಕ",
        designation: "CHC-23",
        kannadaDesignation: "ಸಿಹೆಚ್‌ಸಿ-23",
        phone: "8183943431",
      },
    ],
    supervisor: {
      name: "Somashekhar",
      kannadaName: "ಸೋಮಶೇಖರ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9742862849",
    },
  },
  {
    beatNumber: 25,
    areas: [
      "Kalludi-1, Christian Colony",
      "SC Colony",
      "Over Tank Area",
      "Bhajane Mandira Area",
      "Huduti and Nagasandra Road",
    ],
    kannadaAreas: [
      "ಕಲ್ಲೂಡಿ-1, ಕ್ರಿಶ್ಚಿಯನ್ ಕಾಲೋನಿ",
      "ಎಸ್.ಸಿ ಕಾಲೋನಿ",
      "ಓವರ್ ಟ್ಯಾಂಕ್ ಹತ್ತಿರ",
      "ಭಜನೆ ಮಂದಿರ ಏರಿಯಾ",
      "ಹುದೂತಿ ಮತ್ತು ನಾಗಸಂದ್ರಕ್ಕೆ ಹೋಗುವ ರಸ್ತೆ",
    ],
    officers: [
      {
        name: "Anita",
        kannadaName: "ಅನಿತಾ",
        designation: "MHC-07",
        kannadaDesignation: "ಮ ಹೆಚ್.ಸಿ-07",
        phone: "9741488434",
      },
    ],
    supervisor: {
      name: "Somashekhar",
      kannadaName: "ಸೋಮಶೇಖರ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9742862849",
    },
  },
  {
    beatNumber: 26,
    areas: ["Kalludi-02) Ganganagar", "Bypass Road", "Prashant Nagar"],
    kannadaAreas: ["ಕಲ್ಲೂಡಿ-02) ಗಂಗಾನಗರ", "ಬೈಪಾಸ್ ರಸ್ತೆ", "ಪ್ರಶಾಂತ ನಗರ"],
    officers: [
      {
        name: "Hanumantrayyappa",
        kannadaName: "ಹನುಮಂತರಾಯಪ್ಪ",
        designation: "HC-109",
        kannadaDesignation: "ಹೆಚ್,ಸಿ-109",
        phone: "9945917479",
      },
      {
        name: "Ashoka",
        kannadaName: "ಅಶೋಕ",
        designation: "CPC-443",
        kannadaDesignation: "ಸಿಪಿಸಿ-443",
        phone: "9964861865",
      },
    ],
    supervisor: {
      name: "Somashekhar",
      kannadaName: "ಸೋಮಶೇಖರ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9742862849",
    },
  },
  {
    beatNumber: 27,
    areas: ["Puttapurlahalli", "Tank Area", "Ramakrishnappa House Road", "Avalappa House Road"],
    kannadaAreas: ["ಪುಟ್ಟಾಪುರ್ಲಹಳ್ಳಿ", "ಟ್ಯಾಂಕ್ ಏರಿಯಾ", "ರಾಮಕೃಷ್ಣಪ್ಪ ಮನೆ ರಸ್ತೆ", "ಆವಲಪ್ಪ ರವರ ಮನೆ ರಸ್ತೆ"],
    officers: [
      {
        name: "Deepti",
        kannadaName: "ದೀಪ್ತಿ",
        designation: "MPC-379",
        kannadaDesignation: "ಮ.ಪಿ.ಸಿ-379",
        phone: "9964520432",
      },
    ],
    supervisor: {
      name: "Somashekhar",
      kannadaName: "ಸೋಮಶೇಖರ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9742862849",
    },
  },
  {
    beatNumber: 28,
    areas: ["Gotakanapura", "Dipalya Road", "Bypass Road", "Christian Colony", "SC Colony", "Jain House Road"],
    kannadaAreas: ["ಗೊಟಕನಾಪುರ", "ಡಿಪಾಳ್ಯ ರಸ್ತೆ", "ಬೈಪಾಸ್ ರಸೆ", "ಕ್ರಿಶ್ಚಿಯನ್ ಕಾಲೋನಿ", "ಎಸ್.ಸಿ ಕಾಲೋನಿ", "ಜೈನ್ ಮನೆ ರಸ್ತೆ"],
    officers: [
      {
        name: "Ishwara Hugara",
        kannadaName: "ಈಶ್ವರ ಹುಗಾರ",
        designation: "CPC-69",
        kannadaDesignation: "ಸಿಪಿಸಿ-69",
        phone: "8217396806",
      },
    ],
    supervisor: {
      name: "Somashekhar",
      kannadaName: "ಸೋಮಶೇಖರ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9742862849",
    },
  },
  {
    beatNumber: 29,
    areas: [
      "A.K Colony",
      "Govinda House Area",
      "Nandisha House Area",
      "Muslim Area",
      "Karkhane Area",
      "Subbaraju House Area",
      "Nambanna Layout",
    ],
    kannadaAreas: [
      "ಎ.ಕೆ ಕಾಲೋನಿ",
      "ಗೋವಿಂದ ಮನೆ ಏರಿಯಾ",
      "ನಂದೀಶ ರವರ ಮನೆ ಏರಿಯಾ",
      "ಮುಸ್ಲಿಂ ಏರಿಯಾ",
      "ಕಾರ್ಖಾನೆ ಏರಿಯಾ",
      "ಸುಬ್ಬರಾಜು ರವರ ಮನೆಯ ಪ್ರದೇಶ್",
      "ನಂಬಣ್ಣ ಬಡಾವಣೆ",
    ],
    officers: [
      {
        name: "Sri Ramesh",
        kannadaName: "ಶ್ರೀ ರಮೇಶ್",
        designation: "HC-14",
        kannadaDesignation: "ಹೆಚ್.ಸಿ-14",
        phone: "8105580690",
      },
    ],
    supervisor: {
      name: "Somashekhar",
      kannadaName: "ಸೋಮಶೇಖರ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9742862849",
    },
  },
  {
    beatNumber: 30,
    areas: ["Hirebidanuru", "Shashi Shop Road", "Radhakrishna House Road", "Masjid Road", "Rangamma Temple Road"],
    kannadaAreas: ["ಹಿರೇಬಿದನೂರು", "ಶಶಿ ಅಂಗಡಿ ರಸ್ತೆ", "ರಾಧಕೃಷ್ಣ ರವರ ಮನೆ ರಸ್ತೆ", "ಮಸೀದಿ ಹೋಗುವ ರಸ್ತೆ", "ರಂಗಮ್ಮ ದೇವಸ್ಥಾನ ರಸ್ತೆ"],
    officers: [
      {
        name: "Vinay Kumar",
        kannadaName: "ವಿನಯ್ ಕುಮಾರ್",
        designation: "CPC-237",
        kannadaDesignation: "ಸಿಪಿಸಿ-237",
        phone: "9591807584",
      },
    ],
    supervisor: {
      name: "Somashekhar",
      kannadaName: "ಸೋಮಶೇಖರ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್‌ಐ",
      phone: "9742862849",
    },
  },
];

export default function GauribidanuruTown() {
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
        en: "Gauribidanuru Town",
        kn: "ಗೌರಿಬಿದನೂರು ಪಟ್ಟಣ"
      }}
    />
  );
} 