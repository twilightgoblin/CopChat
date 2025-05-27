"use client";

import BeatPoliceLayout from "../BeatPoliceLayout";

const beatPoliceInfo = [
  {
    beatNumber: 1,
    villages: [
      "Gopalli",
      "Jogyanhalli",
      "Marinayakanahalli",
      "Dandupalya",
      "Gandraganahalli",
      "Barlahalli",
      "Dugginarepalli",
      "Murugamalla",
      "Chikkakarakamakalhalli",
      "Doddakarakamakalhalli",
      "Gollapalligadda",
      "Chalamakote",
      "Shettihalli",
      "Aivaradinne",
    ],
    kannadaVillages: [
      "ಗೋಪಲ್ಲಿ",
      "ಜೋಗ್ಯನಹಳ್ಳಿ",
      "ಮಾರಿನಾಯಕನಹಳ್ಳಿ",
      "ದಂಡುಪಾಳ್ಯ",
      "ಗಂಡ್ರಗನಹಳ್ಳಿ",
      "ಬರ್ಲಹಳ್ಳಿ",
      "ದುಗ್ಗಿನರೇಪಲ್ಲಿ",
      "ಮುರುಗಮಲ್ಲ",
      "ಚಿಕ್ಕಕರಕಮಾಕಲಹಳ್ಳಿ",
      "ದೊಡ್ಡಕರಕಮಾಕಲಹಳ್ಳಿ",
      "ಗೊಲ್ಲಪಲ್ಲಿ ಗಡ್ಡ",
      "ಚಲಮಕೋಟೆ",
      "ಶೆಟ್ಟಿಹಳ್ಳಿ",
      "ಐವರದಿನ್ನೆ",
    ],
    officers: [
      {
        name: "Sri Malikantha",
        kannadaName: "ಶ್ರೀ ಮಾಲಿಕಾಂತ",
        designation: "CPC-239",
        kannadaDesignation: "ಸಿಪಿಸಿ-239",
        phone: "7676030333",
      },
      {
        name: "Sri Ameesh Bai K",
        kannadaName: "ಶ್ರೀ ಅಮೀಶ್ ಬಾಯ್ ಕೆ",
        designation: "CPC-186",
        kannadaDesignation: "ಸಿಪಿಸಿ-186",
        phone: "7411008084",
      },
    ],
    supervisor: {
      name: "Sri Chandraprabha K.M",
      kannadaName: "ಶ್ರೀ ಚಂದ್ರಪ್ರಭ ಕೆ.ಎಂ",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9448536492",
    },
  },
  {
    beatNumber: 2,
    villages: [
      "Bhumishettihalli",
      "Siddepalli Cross",
      "Kanishettihalli",
      "Somayajalahalli",
      "Siddepalli",
      "Alappalli",
      "Mugalamari",
      "Bairasandra",
      "Agrahara",
      "Kapalli",
      "Upparlahalli",
      "Gudisalahalli",
      "Nallarallahalli",
      "Domalappalligadda",
    ],
    kannadaVillages: [
      "ಭೂಮಿಶೆಟ್ಟಿಹಳ್ಳಿ",
      "ಸಿದ್ದೇಪಲ್ಲಿ ಕ್ರಾಸ್",
      "ಕಣಿಶೆಟ್ಟಿಹಳ್ಳಿ",
      "ಸೋಮಯಾಜಲಹಳ್ಳಿ",
      "ಸಿದ್ದೇಪಲ್ಲಿ",
      "ಅಲಪಲ್ಲಿ",
      "ಮುಗಲಮರಿ",
      "ಬೈರಸಂದ್ರ",
      "ಅಗ್ರಹಾರ",
      "ಕಾಪಲ್ಲಿ",
      "ಉಪ್ಪರ್ಲಹಳ್ಳಿ",
      "ಗುಡಿಸಲಹಳ್ಳಿ",
      "ನಲ್ಲರಲ್ಲಹಳ್ಳಿ",
      "ದೊಮಲಪಲ್ಲಿ ಗಡ್ಡ",
    ],
    officers: [
      {
        name: "Sri Narayana M",
        kannadaName: "ಶ್ರೀ ನಾರಾಯಣ ಎಂ",
        designation: "CPC-278",
        kannadaDesignation: "ಸಿಪಿಸಿ-278",
        phone: "7019537297",
      },
      {
        name: "Sri Shashikumar",
        kannadaName: "ಶ್ರೀ ಶಶಿಕುಮಾರ್",
        designation: "CPC-209",
        kannadaDesignation: "ಸಿಪಿಸಿ-209",
        phone: "6360348718",
      },
    ],
    supervisor: {
      name: "Sri Chandraprabha K.M",
      kannadaName: "ಶ್ರೀ ಚಂದ್ರಪ್ರಭ ಕೆ.ಎಂ",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9448536492",
    },
  },
  {
    beatNumber: 3,
    villages: [
      "Bandakote",
      "Bhattalhalli",
      "Subbarayana Palya",
      "Nernahalli",
      "Egava Mindigal",
      "Digava Mindigal",
      "Gutturu",
      "Yandahalli",
      "Kencharlahalli",
      "Gaudanahalli",
      "Nadampalli",
      "Maraballi",
      "Shettinayakanahalli",
      "Egava/Digava Gollahalli",
    ],
    kannadaVillages: [
      "ಬಂಡಕೋಟೆ",
      "ಭತ್ತಲಹಳ್ಳಿ",
      "ಸುಬ್ಬರಾಯನ ಪಾಳ್ಯ",
      "ನೇರ್ನಹಳ್ಳಿ",
      "ಎಗವ ಮಿಂದಿಗಲ್",
      "ದಿಗವ ಮಿಂದಿಗಲ್",
      "ಗುತ್ತೂರು",
      "ಯಂಡಹಳ್ಳಿ",
      "ಕೆಂಚರ್ಲಹಳ್ಳಿ",
      "ಗೌಡನಹಳ್ಳಿ",
      "ನಾಡಂಪಲ್ಲಿ",
      "ಮಾರಬಲ್ಲಿ",
      "ಶೆಟ್ಟಿನಾಯಕನಹಳ್ಳಿ",
      "ಎಗವ/ದಿಗವ ಗೊಲ್ಲಹಳ್ಳಿ",
    ],
    officers: [
      {
        name: "Sri Rajanna M",
        kannadaName: "ಶ್ರೀ ರಾಜಣ್ಣ ಎಂ",
        designation: "CHC-03",
        kannadaDesignation: "ಸಿಹೆಚ್ಸಿ-03",
        phone: "9448276211",
      },
      {
        name: "Sri Murali",
        kannadaName: "ಶ್ರೀ ಮುರಳಿ",
        designation: "CPC-371",
        kannadaDesignation: "ಸಿಪಿಸಿ-371",
        phone: "7975846473",
      },
    ],
    supervisor: {
      name: "Sri Chandrakumar R",
      kannadaName: "ಶ್ರೀ ಚಂದ್ರಕುಮಾರ್ ಆರ್",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9740642779",
    },
  },
  {
    beatNumber: 4,
    villages: [
      "Kodegandlu",
      "Tuvakalahalli",
      "Mittahalli",
      "Gonenahalli",
      "Agraharahalli",
      "Rasapalli",
      "Venkatareddypalya",
      "Nandanavana",
      "Anappalli",
      "Appasanahalli",
      "Kommepalli",
      "Gurrampalli",
      "Amitahalli",
      "Kattigenhalli",
    ],
    kannadaVillages: [
      "ಕೋಡೆಗಂಡ್ಲು",
      "ತುವಕಲಹಳ್ಳಿ",
      "ಮಿತ್ತಹಳ್ಳಿ",
      "ಗೋನೆನಹಳ್ಳಿ",
      "ಅಗ್ರಹಾರಹಳ್ಳಿ",
      "ರಸಪಲ್ಲಿ",
      "ವೆಂಕಟರೆಡ್ಡಿಪಾಳ್ಯ",
      "ನಂದನವನ",
      "ಅನಪಲ್ಲಿ",
      "ಅಪ್ಪಸನಹಳ್ಳಿ",
      "ಕೊಮ್ಮೇಪಲ್ಲಿ",
      "ಗುರ್ರಂಪಲ್ಲಿ",
      "ಅಮಿತಹಳ್ಳಿ",
      "ಕತ್ತಿಗೆನಹಳ್ಳಿ",
    ],
    officers: [
      {
        name: "Sri Suresh K.M",
        kannadaName: "ಶ್ರೀ ಸುರೇಶ್ ಕೆ.ಎಂ",
        designation: "CPC-558",
        kannadaDesignation: "ಸಿಪಿಸಿ-558",
        phone: "8792928780",
      },
      {
        name: "Smt Padmavathi K.S",
        kannadaName: "ಶ್ರೀಮತಿ ಪದ್ಮಾವತಿ ಕೆ.ಎಸ್",
        designation: "MHC-231",
        kannadaDesignation: "ಎಂ.ಹೆಚ್.ಸಿ-231",
        phone: "8310364484",
      },
    ],
    supervisor: {
      name: "Sri Chandrakumar R",
      kannadaName: "ಶ್ರೀ ಚಂದ್ರಕುಮಾರ್ ಆರ್",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9740642779",
    },
  },
  {
    beatNumber: 5,
    villages: [
      "Rangenahalli",
      "Nandanahosahalli",
      "Yarrampalli (Majra)",
      "Doddaguttahalli",
      "Kutappanahalli",
      "Polanayakanahalli",
      "Yarramareddihalli",
      "Seegalagutta",
      "Changavarahalli",
      "Jangalahalli",
      "Kalkasandra (Majra)",
      "Papatimmanahalli",
      "Rampatatti",
      "Kadirenahalli Village & Cross",
    ],
    kannadaVillages: [
      "ರಂಗೆನಹಳ್ಳಿ",
      "ನಂದನಹೊಸಹಳ್ಳಿ",
      "ಯರ್ರಂಪಲ್ಲಿ (ಮಜ್ರಾ)",
      "ದೊಡ್ಡಗುಟ್ಟಹಳ್ಳಿ",
      "ಕುಟಪ್ಪನಹಳ್ಳಿ",
      "ಪೋಲನಾಯಕನಹಳ್ಳಿ",
      "ಯರ್ರಮರೆಡ್ಡಿಹಳ್ಳಿ",
      "ಸೀಗಲಗುಟ್ಟ",
      "ಚಂಗವರಹಳ್ಳಿ",
      "ಜಂಗಲಹಳ್ಳಿ",
      "ಕಲ್ಕಸಂದ್ರ (ಮಜ್ರಾ)",
      "ಪಾಪಟಿಮ್ಮನಹಳ್ಳಿ",
      "ರಂಪಟ್ಟಿ",
      "ಕದಿರೆನಹಳ್ಳಿ ಗ್ರಾಮ ಮತ್ತು ಕ್ರಾಸ್",
    ],
    officers: [
      {
        name: "Sri Somashekhar",
        kannadaName: "ಶ್ರೀ ಸೋಮಶೇಖರ್",
        designation: "CHC-300",
        kannadaDesignation: "ಸಿಹೆಚ್ಸಿ-300",
        phone: "9880439634",
      },
      {
        name: "Sri Ravikumar M",
        kannadaName: "ಶ್ರೀ ರವಿಕುಮಾರ್ ಎಂ",
        designation: "CPC-568",
        kannadaDesignation: "ಸಿಪಿಸಿ-568",
        phone: "9945322635",
      },
    ],
    supervisor: {
      name: "Sri Narasimhamurthy",
      kannadaName: "ಶ್ರೀ ನರಸಿಂಹಮೂರ್ತಿ",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9980700005",
    },
  },
  {
    beatNumber: 6,
    villages: [
      "Masanahalli",
      "Maniyaramuddalhalli",
      "K.Devaganahalli",
      "Korlapatri",
      "K.Gollahalli",
      "Bachhaganahalli",
      "Gajalavarahalli",
      "Neradaguttahalli",
      "Bandepalli",
      "B.Anuppalli",
      "Yagava Basapura",
      "Konepalli",
      "Burudagunte",
      "Achepalli",
    ],
    kannadaVillages: [
      "ಮಾಸನಹಳ್ಳಿ",
      "ಮಣಿಯಾರಮುದ್ದಲಹಳ್ಳಿ",
      "ಕೆ.ದೇವಗನಹಳ್ಳಿ",
      "ಕೊರ್ಲಪತ್ರಿ",
      "ಕೆ.ಗೊಲ್ಲಹಳ್ಳಿ",
      "ಬಚ್ಚಗನಹಳ್ಳಿ",
      "ಗಜಲವರಹಳ್ಳಿ",
      "ನೇರಡಗುಟ್ಟಹಳ್ಳಿ",
      "ಬಂಡೇಪಲ್ಲಿ",
      "ಬಿ.ಅನುಪಲ್ಲಿ",
      "ಯಗವ ಬಸಾಪುರ",
      "ಕೋನೇಪಲ್ಲಿ",
      "ಬುರುಡಗುಂಟೆ",
      "ಅಚೇಪಲ್ಲಿ",
    ],
    officers: [
      {
        name: "Sri Santosh Kumar",
        kannadaName: "ಶ್ರೀ ಸಂತೋಷ್ ಕುಮಾರ್",
        designation: "CPC-128",
        kannadaDesignation: "ಸಿಪಿಸಿ-128",
        phone: "8747867253",
      },
      {
        name: "Sri Lakshmipathi M.N",
        kannadaName: "ಶ್ರೀ ಲಕ್ಷ್ಮೀಪತಿ ಎಂ.ಎನ್",
        designation: "CHC-69",
        kannadaDesignation: "ಸಿಹೆಚ್ಸಿ-69",
        phone: "9591804483",
      },
    ],
    supervisor: {
      name: "Sri Narasimhamurthy",
      kannadaName: "ಶ್ರೀ ನರಸಿಂಹಮೂರ್ತಿ",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9980700005",
    },
  },
  {
    beatNumber: 7,
    villages: [
      "Maravapalli",
      "Bhattalapura (Majra)",
      "Gadigavarahalli",
      "Krishnapura (Majra)",
      "Kurubarahalli",
      "Deshamvarapalli",
      "T. Gollahalli",
      "Hosahudya",
      "Dharmavarahalli",
      "T.Devapalli",
      "Tulavanuru",
      "Gangireddypalya",
      "Salamakalhalli",
    ],
    kannadaVillages: [
      "ಮಾರವಪಲ್ಲಿ",
      "ಭತ್ತಲಾಪುರ (ಮಜ್ರಾ)",
      "ಗಡಿಗವರಹಳ್ಳಿ",
      "ಕೃಷ್ಣಾಪುರ (ಮಜ್ರಾ)",
      "ಕುರುಬರಹಳ್ಳಿ",
      "ದೇಶಂವರಪಲ್ಲಿ",
      "ಟಿ. ಗೊಲ್ಲಹಳ್ಳಿ",
      "ಹೊಸಹುಡ್ಯ",
      "ಧರ್ಮವರಹಳ್ಳಿ",
      "ಟಿ.ದೇವಪಲ್ಲಿ",
      "ತುಲವನೂರು",
      "ಗಂಗಿರೆಡ್ಡಿಪಾಳ್ಯ",
      "ಸಲಮಾಕಲಹಳ್ಳಿ",
    ],
    officers: [
      {
        name: "Sri Amresh P.N",
        kannadaName: "ಶ್ರೀ ಅಮರೇಶ್ ಪಿ.ಎನ್",
        designation: "CHC-09",
        kannadaDesignation: "ಸಿಹೆಚ್ಸಿ-09",
        phone: "9001101701",
      },
      {
        name: "Sri Gopal K.S",
        kannadaName: "ಶ್ರೀ ಗೋಪಾಲ್ ಕೆ.ಎಸ್",
        designation: "CPC-357",
        kannadaDesignation: "ಸಿಪಿಸಿ-357",
        phone: "9342824262",
      },
    ],
    supervisor: {
      name: "Sri Ramakrishnaprabhu",
      kannadaName: "ಶ್ರೀ ರಾಮಕೃಷ್ಣಪ್ರಭು",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9482935933",
    },
  },
  {
    beatNumber: 8,
    villages: [
      "Digavadwarapalli",
      "Egavadwarapalli",
      "Chilakalanerpu",
      "Bidalahalli",
      "Minchalahalli",
      "Chinnapalli",
      "Balareddihalli",
      "Enigadale",
      "Kenchepalli",
      "Nakkalollapalli",
      "Gundlahalli",
      "Chokkanahalli",
      "Ulibele",
      "Motamakalhalli",
      "Gorladoddihalli",
      "Chintamakalhalli",
      "Konapalli",
    ],
    kannadaVillages: [
      "ದಿಗವದ್ವಾರಪಲ್ಲಿ",
      "ಎಗವದ್ವಾರಪಲ್ಲಿ",
      "ಚಿಲಕಲನೇರ್ಪು",
      "ಬಿಡಲಹಳ್ಳಿ",
      "ಮಿಂಚಲಹಳ್ಳಿ",
      "ಚಿನ್ನಪಲ್ಲಿ",
      "ಬಳರೆಡ್ಡಿಹಳ್ಳಿ",
      "ಎನಿಗಡಲೆ",
      "ಕೆಂಚೇಪಲ್ಲಿ",
      "ನಕ್ಕಲೊಲ್ಲಪಲ್ಲಿ",
      "ಗುಂಡ್ಲಹಳ್ಳಿ",
      "ಚೊಕ್ಕನಹಳ್ಳಿ",
      "ಉಳಿಬೇಲೆ",
      "ಮೋಟಮಾಕಲಹಳ್ಳಿ",
      "ಗೊರ್ಲದೊಡ್ಡಿಹಳ್ಳಿ",
      "ಚಿಂತಮಾಕಲಹಳ್ಳಿ",
      "ಕೋನಪಲ್ಲಿ",
    ],
    officers: [
      {
        name: "Sri Vijay R",
        kannadaName: "ಶ್ರೀ ವಿಜಯ್ ಆರ್",
        designation: "CPC-588",
        kannadaDesignation: "ಸಿಪಿಸಿ-588",
        phone: "9845182342",
      },
      {
        name: "Smt Nagamani",
        kannadaName: "ಶ್ರೀಮತಿ ನಾಗಮಣಿ",
        designation: "MPC-220",
        kannadaDesignation: "ಎಂ.ಪಿ.ಸಿ-220",
        phone: "9482167653",
      },
    ],
    supervisor: {
      name: "Sri Ramakrishnaprabhu",
      kannadaName: "ಶ್ರೀ ರಾಮಕೃಷ್ಣಪ್ರಭು",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9482935933",
    },
  },
];

const talukName = {
  en: "Kencharlahalli",
  kn: "ಕೆಂಚರ್ಲಹಳ್ಳಿ"
};

const beatData = {
  beatDetails: beatPoliceInfo.map(beat => ({
    number: beat.beatNumber,
    villages: beat.villages.map((village, index) => ({
      en: village,
      kn: beat.kannadaVillages[index]
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
  supervisingOfficers: [
    {
      beats: "1-2",
      name: {
        en: "Sri Chandraprabha K.M",
        kn: "ಶ್ರೀ ಚಂದ್ರಪ್ರಭ ಕೆ.ಎಂ"
      },
      designation: {
        en: "ASI",
        kn: "ಎ.ಎಸ್.ಐ"
      },
      phone: "9448536492"
    },
    {
      beats: "3-4",
      name: {
        en: "Sri Chandrakumar R",
        kn: "ಶ್ರೀ ಚಂದ್ರಕುಮಾರ್ ಆರ್"
      },
      designation: {
        en: "ASI",
        kn: "ಎ.ಎಸ್.ಐ"
      },
      phone: "9740642779"
    },
    {
      beats: "5-6",
      name: {
        en: "Sri Narasimhamurthy",
        kn: "ಶ್ರೀ ನರಸಿಂಹಮೂರ್ತಿ"
      },
      designation: {
        en: "ASI",
        kn: "ಎ.ಎಸ್.ಐ"
      },
      phone: "9980700005"
    },
    {
      beats: "7-8",
      name: {
        en: "Sri Ramakrishnaprabhu",
        kn: "ಶ್ರೀ ರಾಮಕೃಷ್ಣಪ್ರಭು"
      },
      designation: {
        en: "ASI",
        kn: "ಎ.ಎಸ್.ಐ"
      },
      phone: "9482935933"
    }
  ]
};

export default function KencharlahalliBeatPolice() {
  return (
    <BeatPoliceLayout
      talukName={talukName}
      beatData={beatData}
      backLink="/beat-police"
    />
  );
} 