import BeatPoliceLayout from "../BeatPoliceLayout";

const beatPoliceInfo = [
  {
    beatNumber: 1,
    areas: [
      "Ward No. 1",
      "C.R. Layout",
      "Kanaka Nagar",
      "Oil Mill Road",
      "Yellamma Temple Road",
      "K.K. Pete",
      "KSRTC Bus Stand Road",
    ],
    kannadaAreas: [
      "ವಾರ್ಡ್ ಸಂಖ್ಯೆ 1",
      "ಸಿ.ಆರ್. ಲೇಔಟ್",
      "ಕನಕ ನಗರ",
      "ಆಯಿಲ್ ಮಿಲ್ ರಸ್ತೆ",
      "ಯಲ್ಲಮ್ಮ ದೇವಸ್ಥಾನ ರಸ್ತೆ",
      "ಕೆ.ಕೆ ಪೇಟೆ",
      "ಕೆ.ಎಸ್.ಆರ್.ಟಿ.ಸಿ ಬಸ್ ನಿಲ್ದಾಣದ ರಸ್ತೆ",
    ],
    officers: [
      {
        name: "Sri Thimmanna Boosareddy",
        kannadaName: "ಶ್ರೀ ತಿಮ್ಮಣ್ಣ ಬೂಸರೆಡ್ಡಿ",
        designation: "CPC-60",
        kannadaDesignation: "ಸಿಪಿಸಿ-60",
        phone: "7892868393",
      },
    ],
    supervisor: {
      name: "Sri Shankarachari",
      kannadaName: "ಶ್ರೀ ಶಂಕರಾಚಾರಿ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್ಐ",
      phone: "9448955235",
    },
  },
  {
    beatNumber: 2,
    areas: ["Ward No. 2", "Bhovi Colony", "Garden Road", "Patel Street"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 2", "ಭೋವಿ ಕಾಲೋನಿ", "ಗಾರ್ಡನ್ ರಸ್ತೆ", "ಪಟೇಲರ ಬೀದಿ"],
    officers: [
      {
        name: "Sri Mahammad Saiyad",
        kannadaName: "ಶ್ರೀ ಮಹಮದ್ ಸೈಯದ್",
        designation: "CPC-159",
        kannadaDesignation: "ಸಿಪಿಸಿ-159",
        phone: "9535290950",
      },
    ],
    supervisor: {
      name: "Sri Shankarachari",
      kannadaName: "ಶ್ರೀ ಶಂಕರಾಚಾರಿ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್ಐ",
      phone: "9448955235",
    },
  },
  {
    beatNumber: 3,
    areas: [
      "Ward No. 3",
      "K.K. Pete",
      "Khadrappa Street",
      "Sharap Street",
      "Patel Street",
      "Gowda Street",
      "Vasavi Temple Road",
      "Ashoka Road",
    ],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 3", "ಕೆ.ಕೆ.ಪೇಟೆ", "ಖಾದ್ರಪ್ಪ ಬೀದಿ", "ಷರಾಪ್ ಬೀದಿ", "ಪಟೇಲರ ಬೀದಿ", "ಗೌಡರ ಬೀದಿ", "ವಾಸವಿ ದೇವಾಲಯದ ರಸ್ತೆ", "ಅಶೋಕ ರಸ್ತೆ"],
    officers: [
      {
        name: "Sri Dharanesh",
        kannadaName: "ಶ್ರೀ ಧರಣೇಶ್",
        designation: "CPC-556",
        kannadaDesignation: "ಸಿಪಿಸಿ-556",
        phone: "8748871589",
      },
    ],
    supervisor: {
      name: "Sri Shankarachari",
      kannadaName: "ಶ್ರೀ ಶಂಕರಾಚಾರಿ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್ಐ",
      phone: "9448955235",
    },
  },
  {
    beatNumber: 4,
    areas: ["Ward No. 4 & 30", "Kote", "Harijan Colony", "A.D. Colony", "T.B. Road Side"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 4 & 30", "ಕೋಟೆ", "ಹರಿಜನ ಕಾಲೋನಿ", "ಎ.ಡಿ ಕಾಲೋನಿ", "ಟಿ.ಬಿ ರಸ್ತೆ ಬದಿ"],
    officers: [
      {
        name: "Sri Ambareesh M.R.",
        kannadaName: "ಶ್ರೀ ಅಂಬರೀಶ್ ಎಂಆರ್",
        designation: "CHC-163",
        kannadaDesignation: "ಸಿಹೆಚ್ಸಿ-163",
        phone: "9900981851",
      },
    ],
    supervisor: {
      name: "Sri Shankarachari",
      kannadaName: "ಶ್ರೀ ಶಂಕರಾಚಾರಿ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್ಐ",
      phone: "9448955235",
    },
  },
  {
    beatNumber: 5,
    areas: ["Ward No. 5", "Khazi Road", "Dodda Khazi Road", "Ashoka Road", "VGT Road"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 5", "ಖಾಜಿ ರಸ್ತೆ", "ದೊಡ್ಡ ಖಾಜಿ ರಸ್ತೆ", "ಅಶೋಕ ರಸ್ತೆ", "ವಿಜಿಟಿ ರಸ್ತೆ"],
    officers: [
      {
        name: "Sri Manjunatha",
        kannadaName: "ಶ್ರೀ ಮಂಜುನಾಥ",
        designation: "CPC-59",
        kannadaDesignation: "ಸಿಪಿಸಿ-59",
        phone: "8970552576",
      },
    ],
    supervisor: {
      name: "Sri Shankarachari",
      kannadaName: "ಶ್ರೀ ಶಂಕರಾಚಾರಿ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್ಐ",
      phone: "9448955235",
    },
  },
  {
    beatNumber: 6,
    areas: ["Ward No. 6", "Kurubara Pete", "VGT Road", "T.B. Road", "Sharaf Road", "Old Hospital Road"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 6", "ಕುರುಬರ ಪೇಟೆ", "ವಿ.ಜಿ.ಟಿ ರಸ್ತೆ", "ಟಿ.ಬಿ ರಸ್ತೆ", "ಷರಾಫ್ ರಸ್ತೆ", "ಹಳೆ ಆಸ್ಪತ್ರೆ ರಸ್ತೆ"],
    officers: [
      {
        name: "Kumari Divya",
        kannadaName: "ಕುಮಾರಿ ದಿವ್ಯ",
        designation: "WPSC-363",
        kannadaDesignation: "ಮ.ಪಿ.ಸಿ 363",
        phone: "7353060167",
      },
    ],
    supervisor: {
      name: "Sri Shankarachari",
      kannadaName: "ಶ್ರೀ ಶಂಕರಾಚಾರಿ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್ಐ",
      phone: "9448955235",
    },
  },
  {
    beatNumber: 7,
    areas: ["Ward No. 7", "A.K. Colony", "Idga Road", "K.E.B. Road", "Siddhartha Nagar"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 7", "ಎ.ಕೆ ಕಾಲೋನಿ", "ಈದ್ಗಾ ರಸ್ತೆ", "ಕೆ.ಇ.ಬಿ ರಸ್ತೆ", "ಸಿದ್ದಾರ್ಥ ನಗರ"],
    officers: [
      {
        name: "Sri Sunil Kumar",
        kannadaName: "ಶ್ರೀ ಸುನೀಲ್ ಕುಮಾರ್",
        designation: "CPC-178",
        kannadaDesignation: "ಸಿಪಿಸಿ-178",
        phone: "8095125126",
      },
    ],
    supervisor: {
      name: "Sri Navaz Ahmad",
      kannadaName: "ಶ್ರೀ ನವಾಜ್ ಅಹಮದ್",
        designation: "ASI",
        kannadaDesignation: "ಎಎಸ್ಐ",
        phone: "9148476571",
    },
  },
  {
    beatNumber: 8,
    areas: ["Ward No. 8", "A.K. Colony", "Idga Road", "Bypass Road", "K.E.B. Road", "Siddhartha Nagar"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 8", "ಎ.ಕೆ.ಕಾಲೋನಿ", "ಈದ್ಗಾ ರಸ್ತೆ", "ಬೈಪಾಸ್ ರಸ್ತೆ", "ಕೆ.ಇ.ಬಿ ರಸ್ತೆ", "ಸಿದ್ದಾರ್ಥ ನಗರ"],
    officers: [
      {
        name: "Sri Manjunatha",
        kannadaName: "ಶ್ರೀ ಮಂಜುನಾಥ",
        designation: "CPC-288",
        kannadaDesignation: "ಸಿಪಿಸಿ-288",
        phone: "8147262747",
      },
    ],
    supervisor: {
      name: "Sri Navaz Ahmad",
      kannadaName: "ಶ್ರೀ ನವಾಜ್ ಅಹಮದ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್ಐ",
      phone: "9148476571",
    },
  },
  {
    beatNumber: 9,
    areas: [
      "Ward No. 9",
      "A.K. Colony",
      "Bypass Road",
      "K.E.B. Road",
      "Sunnasabi Quarters",
      "Poojamma Temple Road",
      "Nallimarada Halli",
    ],
    kannadaAreas: [
      "ವಾರ್ಡ್ ಸಂಖ್ಯೆ 9",
      "ಎ.ಕೆ.ಕಾಲೋನಿ",
      "ಬೈಪಾಸ್ ರಸ್ತೆ",
      "ಕೆ.ಇ.ಬಿ ರಸ್ತೆ",
      "ಸುನ್ನಾಸಾಬಿ ಕ್ವಾಟ್ರಸ್",
      "ಪೂಜಮ್ಮ ದೇವಾಲಯ ರಸ್ತೆ",
      "ನಲ್ಲಿಮರದ ಹಳ್ಳಿ",
    ],
    officers: [
      {
        name: "Sri Devaraj",
        kannadaName: "ಶ್ರೀ ದೇವರಾಜ್",
        designation: "CHC-236",
        kannadaDesignation: "ಸಿಹೆಚ್ಸಿ-236",
        phone: "9366590236",
      },
    ],
    supervisor: {
      name: "Sri Navaz Ahmad",
      kannadaName: "ಶ್ರೀ ನವಾಜ್ ಅಹಮದ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್ಐ",
      phone: "9148476571",
    },
  },
  {
    beatNumber: 10,
    areas: ["Ward No. 10", "2nd Nagartara Pete", "VGT Road", "Old Hospital Road", "1st Nagartara Pete", "Ashoka Road"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 10", "2ನೇ ನಗರ್ತರ ಪೇಟೆ", "ವಿ.ಜಿ.ಟಿ ರಸ್ತೆ", "ಹಳೆ ಆಸ್ಪತ್ರೆ ರಸ್ತೆ", "1ನೇ ನಗತರ್ತರಪೇಟೆ", "ಅಶೋಕ ರಸ್ತೆ"],
    officers: [
      {
        name: "Sri Muralikrishna",
        kannadaName: "ಶ್ರೀ ಮುರಳಿಕೃಷ್ಣ",
        designation: "CHC-76",
        kannadaDesignation: "ಸಿಹೆಚ್ಸಿ-76",
        phone: "8747992233",
      },
    ],
    supervisor: {
      name: "Sri Navaz Ahmad",
      kannadaName: "ಶ್ರೀ ನವಾಜ್ ಅಹಮದ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್ಐ",
      phone: "9148476571",
    },
  },
  {
    beatNumber: 11,
    areas: ["Ward No. 11", "Deshada Pete", "Ulluru Pete", "Kumbara Pete", "Ashoka Road"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 11", "ದೇಶದ ಪೇಟೆ", "ಉಲ್ಲೂರುಪೇಟೆ", "ಕುಂಬಾರಪೇಟೆ", "ಅಶೋಕ ರಸ್ತೆ"],
    officers: [
      {
        name: "Sri Rajesh",
        kannadaName: "ಶ್ರೀ ರಾಜೇಶ್",
        designation: "CHC-39",
        kannadaDesignation: "ಸಿಹೆಚ್ಸಿ-39",
        phone: "9900710449",
      },
    ],
    supervisor: {
      name: "Sri Navaz Ahmad",
      kannadaName: "ಶ್ರೀ ನವಾಜ್ ಅಹಮದ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್ಐ",
      phone: "9148476571",
    },
  },
  {
    beatNumber: 12,
    areas: ["Ward No. 12", "Gandhi Nagar", "2nd Karmika Nagar", "Rahmat Nagar", "3rd Karmika Nagar", "Khasim Palya"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 12", "ಗಾಂಧಿ ನಗರ", "2ನೇ ಕಾರ್ಮಿಕ ನಗರ", "ರಹಮತ್ ನಗರ", "3ನೇ ಕಾರ್ಮಿಕ ನಗರ", "ಖಾಸಿಂ ಪಾಳ್ಯ"],
    officers: [
      {
        name: "Sri Ramesh",
        kannadaName: "ಶ್ರೀ ರಮೇಶ್",
        designation: "CHC-182",
        kannadaDesignation: "ಸಿ.ಹೆಚ್.ಸಿ 182",
        phone: "974009211",
      },
    ],
    supervisor: {
      name: "Sri Navaz Ahmad",
      kannadaName: "ಶ್ರೀ ನವಾಜ್ ಅಹಮದ್",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್ಐ",
      phone: "9148476571",
    },
  },
  {
    beatNumber: 13,
    areas: [
      "Ward No. 13",
      "Canara Bank & Kemmannu Bagilu Circle",
      "Canara Bank Road",
      "Old Hospital Road",
      "Vijayalakshmi Circle",
      "Kadiri Palya",
    ],
    kannadaAreas: [
      "ವಾರ್ಡ್ ಸಂಖ್ಯೆ 13",
      "ಕೆನರಾ ಬ್ಯಾಂಕ್ & ಕೆಮ್ಮಣ್ಣು ಬಾಗಿಲು ಸರ್ಕಲ್",
      "ಕೆನರಾ ಬ್ಯಾಂಕ್ ರಸ್ತೆ",
      "ಹಳೇ ಆಸ್ಪತ್ರೆ ರಸ್ತೆ",
      "ವಿಜಯಲಕ್ಷ್ಮೀ ವೃತ್ತ",
      "ಕದಿರಿಪಾಳ್ಯ",
    ],
    officers: [
      {
        name: "Sri Ashwath",
        kannadaName: "ಶ್ರೀ ಅಶ್ವಥ್",
        designation: "CHC-119",
        kannadaDesignation: "ಸಿ.ಹೆಚ್.ಸಿ 119",
        phone: "7899773108",
      },
    ],
    supervisor: {
      name: "Sri Venugopal M",
      kannadaName: "ಶ್ರೀ ವೇಣುಗೋಪಾಲ್ ಎಂ",
      designation: "PSI",
      kannadaDesignation: "ಪಿ.ಎಸ್.ಐ",
      phone: "9480802557",
    },
  },
  {
    beatNumber: 14,
    areas: [
      "Ward No. 14",
      "Housing Board Area & Nisar Palya",
      "Housing Board",
      "Nissar Palya",
      "Old Police Quarters",
      "KHB Colony",
    ],
    kannadaAreas: [
      "ವಾರ್ಡ್ ಸಂಖ್ಯೆ 14",
      "ಹೌಸಿಂಗ್ ಬೋರ್ಡ್ ಏರಿಯಾ & ನಿಸಾರ್ ಪಾಳ್ಯ",
      "ಹೌಸಿಂಗ್ ಬೋರ್ಡ್",
      "ನಿಸ್ಸಾರ್ ಪಾಳ್ಯ",
      "ಹಳೆ ಪೊಲೀಸ್ ವಸತಿ ಗೃಹಗಳು",
      "ಕೆಹೆಚ್ಬಿ ಕಾಲೋನಿ",
    ],
    officers: [
      {
        name: "Sri Praveen Kumar",
        kannadaName: "ಶ್ರೀ ಪ್ರವೀಣ್ ಕುಮಾರ್",
        designation: "CPC-554",
        kannadaDesignation: "ಸಿಪಿಸಿ-554",
        phone: "8722337727",
      },
    ],
    supervisor: {
      name: "Sri Venugopal M",
      kannadaName: "ಶ್ರೀ ವೇಣುಗೋಪಾಲ್ ಎಂ",
      designation: "PSI",
      kannadaDesignation: "ಪಿ.ಎಸ್.ಐ",
      phone: "9480802557",
    },
  },
  {
    beatNumber: 15,
    areas: ["Ward No. 15 & 31", "Gandhi Nagar", "Maruti Nagar", "Kadiri Palya", "Idludu Road"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 15 & 31", "ಗಾಂಧಿ ನಗರ", "ಮಾರುತಿ ನಗರ", "ಕದರಿಪಾಳ್ಯ", "ಇದ್ಲೂಡು ರಸ್ತೆ"],
    officers: [
      {
        name: "Sri Venkatareddy",
        kannadaName: "ಶ್ರೀ ವೆಂಕಟರೆಡ್ಡಿ",
        designation: "CHC-151",
        kannadaDesignation: "ಸಿಹೆಚ್ಸಿ-151",
        phone: "8710001418",
      },
    ],
    supervisor: {
      name: "Sri Venkataravanappa",
      kannadaName: "ಶ್ರೀ ವೆಂಕಟರವಣಪ್ಪ",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "7483015567",
    },
  },
  {
    beatNumber: 16,
    areas: [
      "Ward No. 16",
      "1st T.M.C. & P. Narayana Swamy Layout",
      "1st T.M.C Layout",
      "M. Narayana Swamy Layout",
      "Khasim Palya",
    ],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 16", "1ನೇ ಟಿ.ಎಂ.ಸಿ. & ಪಿ.ನಾರಾಯಣಸ್ವಾಮಿ ಲೇಔಟ್", "1ನೇ ಟಿ.ಎಂ.ಸಿ ಲೇಔಟ್", "ಎಂ. ನಾರಾಯಣಸ್ವಾಮಿ ಲೇಔಟ್", "ಖಾಸಿಂಪಾಳ್ಯ"],
    officers: [
      {
        name: "Sri Nandishwara",
        kannadaName: "ಶ್ರೀ ನಂದೀಶ್ವರ",
        designation: "CPC-143",
        kannadaDesignation: "ಸಿ.ಪಿ.ಸಿ 143",
        phone: "8095111613",
      },
    ],
    supervisor: {
      name: "Sri Venkataravanappa",
      kannadaName: "ಶ್ರೀ ವೆಂಕಟರವಣಪ್ಪ",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "7483015567",
    },
  },
  {
    beatNumber: 17,
    areas: ["Ward No. 17", "3rd Karmika Nagar", "Rahmat Nagar"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 17", "3ನೇ ಕಾರ್ಮಿಕ ನಗರ", "ರಹಮತ್ ನಗರ"],
    officers: [
      {
        name: "Sri Vinod",
        kannadaName: "ಶ್ರೀ ವಿನೋದ್",
        designation: "CPC-273",
        kannadaDesignation: "ಸಿಪಿಸಿ-273",
        phone: "9590945484",
      },
    ],
    supervisor: {
      name: "Sri Venkataravanappa",
      kannadaName: "ಶ್ರೀ ವೆಂಕಟರವಣಪ್ಪ",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "7483015567",
    },
  },
  {
    beatNumber: 18,
    areas: ["Ward No. 18", "2nd T.M.C. Layout", "2nd T.M.C Layout", "Azad Nagar", "2nd & 3rd Karmika Nagar"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 18", "2ನೇ ಟಿ.ಎಂ.ಸಿ. ಲೇಔಟ್", "2ನೇ ಟಿ.ಎಂ.ಸಿ ಲೇಔಟ್", "ಅಜಾದ್ ನಗರ", "2ನೇ & 3ನೇ ಕಾರ್ಮಿಕ ನಗರ"],
    officers: [
      {
        name: "Sri Saleemulla",
        kannadaName: "ಶ್ರೀ ಸಲೀಮುಲ್ಲಾ",
        designation: "CPC-292",
        kannadaDesignation: "ಸಿ.ಪಿ.ಸಿ 292",
        phone: "6361144993",
      },
    ],
    supervisor: {
      name: "Sri Venkataravanappa",
      kannadaName: "ಶ್ರೀ ವೆಂಕಟರವಣಪ್ಪ",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "7483015567",
    },
  },
  {
    beatNumber: 19,
    areas: ["Ward No. 19 & 29", "Azad Nagar", "1st Karmika Nagar", "1st T.M.C. Layout", "Dibburahalli Road"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 19 & 29", "ಅಜಾದ್ ನಗರ", "1ನೇ ಕಾರ್ಮಿಕ ನಗರ", "1ನೇ ಟಿ.ಎಂ.ಸಿ. ಲೇಔಟ್", "ದಿಬ್ಬೂರಹಳ್ಳಿ ರಸ್ತೆ"],
    officers: [
      {
        name: "Kumari Megha",
        kannadaName: "ಕುಮಾರಿ ಮೇಘ",
        designation: "WPSC-154",
        kannadaDesignation: "ಮಪಿಸಿ-154",
        phone: "9632618774",
      },
    ],
    supervisor: {
      name: "Sri Venkataravanappa",
      kannadaName: "ಶ್ರೀ ವೆಂಕಟರವಣಪ್ಪ",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "7483015567",
    },
  },
  {
    beatNumber: 20,
    areas: ["Ward No. 20", "Mahboob Nagar", "Dibburahalli Road", "Ilahi Nagar"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 20", "ಮಹಬೂಬ್ ನಗರ", "ದಿಬ್ಬೂರಹಳ್ಳಿ ರಸ್ತೆ", "ಇಲಾಹಿ ನಗರ"],
    officers: [
      {
        name: "Sri Shivaraj Kumar",
        kannadaName: "ಶ್ರೀ ಶಿವರಾಜ್ ಕುಮಾರ್",
        designation: "CPC-143",
        kannadaDesignation: "ಸಿಪಿಸಿ-143",
        phone: "7411070646",
      },
    ],
    supervisor: {
      name: "Sri Venkataravanappa",
      kannadaName: "ಶ್ರೀ ವೆಂಕಟರವಣಪ್ಪ",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "7483015567",
    },
  },
  {
    beatNumber: 21,
    areas: ["Ward No. 21", "Kamatigar Pete", "Shankar Math Road", "Agrahara Street", "Arale Pete"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 21", "ಕಾಮಾಟಿಗರಪೇಟೆ", "ಶಂಕರಮಠ ರಸ್ತೆ", "ಅಗ್ರಹಾರ ಬೀದಿ", "ಅರಳೆಪೇಟೆ"],
    officers: [
      {
        name: "Sri Naveen",
        kannadaName: "ಶ್ರೀ ನವೀನ್",
        designation: "CPC-122",
        kannadaDesignation: "ಸಿಪಿಸಿ-122",
        phone: "9611451488",
      },
    ],
    supervisor: {
      name: "Sri Seenappa",
      kannadaName: "ಶ್ರೀ ಸೀನಪ್ಪ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್ಐ",
      phone: "9972124559",
    },
  },
  {
    beatNumber: 22,
    areas: ["Ward No. 22", "Ulluru Pete", "Deshada Pete", "Mayura Circle", "Chintamani Road"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 22", "ಉಲ್ಲೂರು ಪೇಟೆ", "ದೇಶದಪೇಟೆ", "ಮಯೂರ ವೃತ್ತ", "ಚಿಂತಾಮಣಿ ರಸ್ತೆ"],
    officers: [
      {
        name: "Sri Kemparaju",
        kannadaName: "ಶ್ರೀ ಕೆಂಪರಾಜು",
        designation: "CPC-115",
        kannadaDesignation: "ಸಿಪಿಸಿ 115",
        phone: "9902588506",
      },
    ],
    supervisor: {
      name: "Sri Seenappa",
      kannadaName: "ಶ್ರೀ ಸೀನಪ್ಪ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್ಐ",
      phone: "9972124559",
    },
  },
  {
    beatNumber: 23,
    areas: ["Ward No. 23", "Jougu Pete", "Shettiguni Road", "Prema Nagar", "Mayura Circle"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 23", "ಜೌಗುಪೇಟೆ", "ಶೆಟ್ಟಿಗುನಿ ರಸ್ತೆ", "ಪ್ರೇಮ ನಗರ", "ಮಯೂರ ವೃತ್ತ"],
    officers: [
      {
        name: "Sri Kiran Kalamadi",
        kannadaName: "ಶ್ರೀ ಕಿರಣ್ ಕಲಾಮಡಿ",
        designation: "CPC-358",
        kannadaDesignation: "ಸಿಪಿಸಿ-358",
        phone: "7676651303",
      },
    ],
    supervisor: {
      name: "Sri Seenappa",
      kannadaName: "ಶ್ರೀ ಸೀನಪ್ಪ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್ಐ",
      phone: "9972124559",
    },
  },
  {
    beatNumber: 24,
    areas: ["Ward No. 24", "3rd Karmika Nagar", "2nd & 3rd Karmika Nagar", "Ansariya Masjid", "Taiba Nagar"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 24", "3ನೇ ಕಾರ್ಮಿಕ ನಗರ", "2 ನೇ & 3ನೇ ಕಾರ್ಮಿಕ ನಗರ", "ಅನ್ಸಾರಿಯಾ ಮಸೀದಿ", "ತೈಬಾ ನಗರ"],
    officers: [
      {
        name: "Sri Ashoka Babu",
        kannadaName: "ಶ್ರೀ ಅಶೋಕ ಬಾಬು",
        designation: "CPC-268",
        kannadaDesignation: "ಸಿಪಿಸಿ-268",
        phone: "782937039",
      },
    ],
    supervisor: {
      name: "Sri Seenappa",
      kannadaName: "ಶ್ರೀ ಸೀನಪ್ಪ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್ಐ",
      phone: "9972124559",
    },
  },
  {
    beatNumber: 25,
    areas: ["Ward No. 25", "Rahmat Nagar", "Taiba Nagar", "2nd Karmika Nagar"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 25", "ರಹಮತ್ ನಗರ", "ತೈಬಾ ನಗರ", "2ನೇ ಕಾರ್ಮಿಕ ನಗರ"],
    officers: [
      {
        name: "Sri Manjunatha",
        kannadaName: "ಶ್ರೀ ಮಂಜುನಾಥ",
        designation: "CPC-571",
        kannadaDesignation: "ಸಿಪಿಸಿ-571",
        phone: "8749098912",
      },
    ],
    supervisor: {
      name: "Sri Seenappa",
      kannadaName: "ಶ್ರೀ ಸೀನಪ್ಪ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್ಐ",
      phone: "9972124559",
    },
  },
  {
    beatNumber: 26,
    areas: ["Ward No. 26", "2nd T.M.C. Layout", "Santosh Nagar", "Rajiv Gandhi Layout", "Toiba Nagar"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 26", "2ನೇ ಟಿ.ಎಂ.ಸಿ. ಲೇಔಟ್", "ಸಂತೋಷ ನಗರ", "ರಾಜೀವ್ ಗಾಂಧಿ ಲೇಔಟ್", "ತೊಯಾಬಾ ನಗರ"],
    officers: [
      {
        name: "Sri Prakash",
        kannadaName: "ಶ್ರೀ ಪ್ರಕಾಶ್",
        designation: "CHC-94",
        kannadaDesignation: "ಸಿಹೆಚ್ಸಿ-94",
        phone: "8453374298",
      },
    ],
    supervisor: {
      name: "Sri Seenappa",
      kannadaName: "ಶ್ರೀ ಸೀನಪ್ಪ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್ಐ",
      phone: "9972124559",
    },
  },
  {
    beatNumber: 27,
    areas: ["Ward No. 27 & 28", "Mehboob Nagar", "Mehboob Nagar", "Tippu Shadi Mahal"],
    kannadaAreas: ["ವಾರ್ಡ್ ಸಂಖ್ಯೆ 27 & 28", "ಮೆಹಬೂಬ್ ನಗರ", "ಮೆಹಬೂಬ್ ನಗರ", "ಟಿಪ್ಪು ಶಾದಿ ಮಹಲ್"],
    officers: [
      {
        name: "Sri Srihari",
        kannadaName: "ಶ್ರೀ ಶ್ರೀಹರಿ",
        designation: "CPC-135",
        kannadaDesignation: "ಸಿಪಿಸಿ-135",
        phone: "9945007233",
      },
    ],
    supervisor: {
      name: "Sri Seenappa",
      kannadaName: "ಶ್ರೀ ಸೀನಪ್ಪ",
      designation: "ASI",
      kannadaDesignation: "ಎಎಸ್ಐ",
      phone: "9972124559",
    },
  },
];

export default function ShidlaghattaTown() {
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
        en: "Shidlaghatta Town",
        kn: "ಶಿಡ್ಲಘಟ್ಟ ಪಟ್ಟಣ"
      }}
    />
  );
} 