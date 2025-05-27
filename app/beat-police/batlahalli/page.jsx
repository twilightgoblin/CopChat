"use client";

import BeatPoliceLayout from "../BeatPoliceLayout";

const beatPoliceInfo = [
  {
    beatNumber: 1,
    villages: [
      "Batlahalli",
      "Konapura",
      "Mavukere",
      "Chimalagutta",
      "Somakalahalli",
      "Vangimallu",
      "Kadanamari",
      "Kodigal",
      "Bommepalli",
      "Kariyappalli",
      "Ankalamadugu",
    ],
    kannadaVillages: [
      "ಬಟ್ಲಹಳ್ಳಿ",
      "ಕೋನಾಪುರ",
      "ಮಾವುಕೆರೆ",
      "ಚೀಮಲಗುಟ್ಟ",
      "ಸೋಮಕಲಹಳ್ಳಿ",
      "ವಂಗಿಮಾಳ್ಳು",
      "ಕಡದನಮರಿ",
      "ಕೋಡಿಗಲ್",
      "ಬೊಮ್ಮೇಪಲ್ಲಿ",
      "ಕರಿಯಪ್ಪಲ್ಲಿ",
      "ಅಂಕಾಲಮಡುಗು",
    ],
    officers: [
      {
        name: "Raja",
        kannadaName: "ರಾಜ",
        designation: "CPC-11",
        kannadaDesignation: "ಸಿಪಿಸಿ-11",
        phone: "8277964509",
      },
      {
        name: "Lakshmikantamma M.N",
        kannadaName: "ಲಕ್ಷ್ಮೀಕಾಂತಮ್ಮ ಎಂ.ಎನ್",
        designation: "MPCI-590",
        kannadaDesignation: "ಮ.ಪಿ.ಸಿ-590",
        phone: "8277964510",
      },
    ],
    supervisor: {
      name: "Ramanathareddy",
      kannadaName: "ರಾಮನಾಥರೆಡ್ಡಿ",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "8296106456",
    },
  },
  {
    beatNumber: 2,
    villages: [
      "Billandlahalli",
      "Pungipalli",
      "Puttagundlahalli",
      "Dinnamindahalli",
      "Bodugundlahalli",
      "Sunnagutta",
      "Hanumayyagarahalli",
      "Krishnapura",
      "Obalapura",
      "Chennarayanahalli",
      "Konakuntlu",
    ],
    kannadaVillages: [
      "ಬಿಲ್ಲಾಂಡ್ಲಹಳ್ಳಿ",
      "ಪುಂಗಿಪಲ್ಲಿ",
      "ಪುಟ್ಟಗುಂಡ್ಲಹಳ್ಳಿ",
      "ದಿನ್ನಮಿಂದಹಳ್ಳಿ",
      "ಬೋಡುಗುಂಡ್ಲಹಳ್ಳಿ",
      "ಸುನ್ನಪಗುಟ್ಟ",
      "ಹನುಮಯ್ಯಗಾರಹಳ್ಳಿ",
      "ಕೃಷ್ಣಾಪುರ",
      "ಓಬಳಾ ಪುರ",
      "ಚೆನ್ನರಾಯನಹಳ್ಳಿ",
      "ಕೋನಕುಂಟ್ಲು",
    ],
    officers: [
      {
        name: "Srinath M.P",
        kannadaName: "ಶ್ರೀನಾಥ ಎಂ.ಪಿ",
        designation: "CHC-139",
        kannadaDesignation: "ಸಿಹೆಚ್ಸಿ-139",
        phone: "8277964511",
      },
      {
        name: "Naveen Kumar",
        kannadaName: "ನವೀನ್ ಕುಮಾರ್",
        designation: "CPC-56",
        kannadaDesignation: "ಸಿಪಿಸಿ-56",
        phone: "8277964512",
      },
    ],
    supervisor: {
      name: "Ramanathareddy",
      kannadaName: "ರಾಮನಾಥರೆಡ್ಡಿ",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "8296106456",
    },
  },
  {
    beatNumber: 3,
    villages: [
      "Ragimakalahalli",
      "Mushuru Patna",
      "Yanamalapadi",
      "Kambalahalli",
      "Bodampalli",
      "Munganahalli",
      "Sitampalli",
      "Kanchinayakanahalli",
      "Y.Devapalli",
      "D.Devappalli",
      "M.Gollahalli",
      "Chintapalli",
      "Kondliganahalli",
    ],
    kannadaVillages: [
      "ರಾಗಿಮಾಕಲಹಳ್ಳಿ",
      "ಮುಷೂರು ಪಟ್ನ",
      "ಯನಮಲಪಾಡಿ",
      "ಕಂಬಾಲಹಳ್ಳಿ",
      "ಬೋಡಂಪಲ್ಲಿ",
      "ಮುಂಗಾನಹಳ್ಳಿ",
      "ಸೀತಂಪಲ್ಲಿ",
      "ಕಂಚಿನಾಯಕನಹಳ್ಳಿ",
      "ವೈ.ದೇವಪಲ್ಲಿ",
      "ಡಿ.ದೇವಪ್ಪಲ್ಲಿ",
      "ಎಂ.ಗೊಲ್ಲಹಳ್ಳಿ",
      "ಚಿಂತಪಲ್ಲಿ",
      "ಕೊಂಡ್ಲಿಗಾನಹಳ್ಳಿ",
    ],
    officers: [
      {
        name: "Ravanappa",
        kannadaName: "ರವಣಪ್ಪ",
        designation: "CHC-129",
        kannadaDesignation: "ಸಿಹೆಚ್ಸಿ-129",
        phone: "8277964409",
      },
      {
        name: "Malashri",
        kannadaName: "ಮಾಲಶ್ರಿ",
        designation: "MPC-26",
        kannadaDesignation: "ಮ.ಪಿ.ಸಿ-26",
        phone: "8277964410",
      },
    ],
    supervisor: {
      name: "Ramanathareddy",
      kannadaName: "ರಾಮನಾಥರೆಡ್ಡಿ",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "8296106456",
    },
  },
  {
    beatNumber: 4,
    villages: [
      "Palligadda",
      "Lakkepalli",
      "Nagarajahalli",
      "Guttapalli",
      "Kappalli",
      "Venkatarayankote",
      "Yarrayyagarahalli",
      "Vempalli",
      "Guddampalli",
      "Fasalanayakanahalli",
      "Chennarayanagadda",
    ],
    kannadaVillages: [
      "ಪಲ್ಲಿಗಡ್ಡ",
      "ಲಕ್ಕೇಪಲ್ಲಿ",
      "ನಾಗರಾಜಹಳ್ಳಿ",
      "ಗುಟ್ಟಪಾಳ್ಳಿ",
      "ಕಾಪಪಲ್ಲಿ",
      "ವೆಂಕಟರಾಯನಕೋಟೆ",
      "ಯರ್ರಯ್ಯಗಾರಹಳ್ಳಿ",
      "ವೇಂಪಲ್ಲಿ",
      "ಗುಡ್ಡಂಪಲ್ಲಿ",
      "ಫಸಲನಾಯಕನಹಳ್ಳಿ",
      "ಚೆನ್ನರಾಯನಗಡ್ಡ",
    ],
    officers: [
      {
        name: "Guruswami",
        kannadaName: "ಗುರುಸ್ವಾಮಿ",
        designation: "CPC-112",
        kannadaDesignation: "ಸಿಪಿಸಿ-112",
        phone: "8277964409",
      },
      {
        name: "Suresh",
        kannadaName: "ಸುರೇಶ್",
        designation: "CPC-110",
        kannadaDesignation: "ಸಿಪಿಸಿ-110",
        phone: "8277964410",
      },
    ],
    supervisor: {
      name: "Ramanathareddy",
      kannadaName: "ರಾಮನಾಥರೆಡ್ಡಿ",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "8296106456",
    },
  },
  {
    beatNumber: 5,
    villages: [
      "Brahmanahalli",
      "Nallaguttahalli",
      "Sitarampura",
      "Gundigere",
      "Nagarajahosahalli",
      "Raguttahalli",
      "Bhujangarayankote",
      "Yasagalahalli",
      "Madamangala",
      "Y.Gollahalli",
      "Bairabande",
      "Iragampalli",
      "Itamakalahalli",
      "Vegalahalli",
    ],
    kannadaVillages: [
      "ಬ್ರಾಹ್ಮಣರಹಳ್ಳಿ",
      "ನಲ್ಲಗುಟ್ಟಹಳ್ಳಿ",
      "ಸೀತಾರಾಂಪುರ",
      "ಗುಂದಿಗೆರೆ",
      "ನಾಗರಾಜಹೊಸಹಳ್ಳಿ",
      "ರಾಗುಟ್ಟಹಳ್ಳಿ",
      "ಭುಜಂಗರಾಯನಕೋಟೆ",
      "ಯಸಗಲಹಳ್ಳಿ",
      "ಮಾದಮಂಗಲ",
      "ವೈ.ಗೊಲ್ಲಹಳ್ಳಿ",
      "ಬೈರಾಬಂಡೆ",
      "ಇರಗಂಪಲ್ಲಿ",
      "ಈತಮಾಕಲಹಳ್ಳಿ",
      "ವೇಗಲಹಳ್ಳಿ",
    ],
    officers: [
      {
        name: "Jayaramayya",
        kannadaName: "ಜಯರಾಮಯ್ಯ",
        designation: "CHC-144",
        kannadaDesignation: "ಸಿಹೆಚ್ಸಿ-144",
        phone: "8277964413",
      },
      {
        name: "Praveen Kumar",
        kannadaName: "ಪ್ರವೀಣ್ ಕುಮಾರ್",
        designation: "CPC-117",
        kannadaDesignation: "ಸಿಪಿಸಿ-117",
        phone: "8277964414",
      },
    ],
    supervisor: {
      name: "Babajan",
      kannadaName: "ಬಾಬಾಜಾನ್",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9731911197",
    },
  },
  {
    beatNumber: 6,
    villages: [
      "Guntoorugadda",
      "Yagavakote",
      "Kondavenapalli",
      "Y.Kurapalli",
      "Pathakote",
      "Dinnamindahalli",
      "Kottudya",
      "Digavakote",
      "Kanagamakalahalli",
      "Kottapalli",
    ],
    kannadaVillages: [
      "ಗುಂತೂರುಗಡ್ಡ",
      "ಯಗವಕೋಟೆ",
      "ಕೊಂಡವೆನಕಪಲ್ಲಿ",
      "ವೈ.ಕುರಪಲ್ಲಿ",
      "ಪಾತಕೋಟೆ",
      "ದಿನ್ನಮಿಂದಹಳ್ಳಿ",
      "ಕೊತ್ತುಡ್ಯ",
      "ದಿಗವಕೋಟೆ",
      "ಕಾನಗಮಾಕಲಹಳ್ಳಿ",
      "ಕೊತ್ತಪಲ್ಲಿ",
    ],
    officers: [
      {
        name: "Devendra Patil",
        kannadaName: "ದೇವೇಂದ್ರಪಾಟೀಲ್",
        designation: "CPC-352",
        kannadaDesignation: "ಸಿಪಿಸಿ-352",
        phone: "8277964415",
      },
      {
        name: "Murali Krishna Gouda H.T",
        kannadaName: "ಮುರಳಿಕೃಷ್ಣೇಗೌಡ ಹೆಚ್.ಟಿ",
        designation: "CPC-327",
        kannadaDesignation: "ಸಿಪಿಸಿ-327",
        phone: "8277964416",
      },
    ],
    supervisor: {
      name: "Babajan",
      kannadaName: "ಬಾಬಾಜಾನ್",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9731911197",
    },
  },
  {
    beatNumber: 7,
    villages: [
      "Maniganahalli",
      "Gudarlahalli",
      "Gudamarlahalli",
      "G.Bhattalhalli",
      "Gundlahalli",
      "Yarrakote",
      "Myakapotalhalli",
      "I.Kuravapalli",
      "Junjamahalli",
      "Pullagundlahalli",
      "Naramakalahalli",
    ],
    kannadaVillages: [
      "ಮಣಿಗಾನಹಳ್ಳಿ",
      "ಗುಡಾರ್ಲಹಳ್ಳಿ",
      "ಗುಡಮಾರ್ಲಹಳ್ಳಿ",
      "ಜಿ.ಭತ್ತಲಹಳ್ಳಿ",
      "ಗುಂಡ್ಲಹಳ್ಳಿ",
      "ಯರ್ರಕೋಟೆ",
      "ಮ್ಯಾಕಪೋತಲಹಳ್ಳಿ",
      "ಐ.ಕುರವಪಲ್ಲಿ",
      "ಜುಂಜಮಹಳ್ಳಿ",
      "ಪುಲ್ಲಗುಂಡ್ಲಹಳ್ಳಿ",
      "ನಾರಮಾಕಲಹಳ್ಳಿ",
    ],
    officers: [
      {
        name: "Nagaraju",
        kannadaName: "ನಾಗರಾಜು",
        designation: "CHC-199",
        kannadaDesignation: "ಸಿಹೆಚ್ಸಿ-199",
        phone: "8277964417",
      },
      {
        name: "Pradeep M.B",
        kannadaName: "ಪ್ರದೀಪ ಎಂ.ಬಿ",
        designation: "CPC-430",
        kannadaDesignation: "ಸಿಪಿಸಿ-430",
        phone: "8277964418",
      },
    ],
    supervisor: {
      name: "Babajan",
      kannadaName: "ಬಾಬಾಜಾನ್",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9731911197",
    },
  },
  {
    beatNumber: 8,
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
      "Bodugundlahalli",
    ],
    kannadaVillages: [
      "ಪೆದ್ದೂರು",
      "ತುಮ್ಮಲಹಳ್ಳಿ",
      "ಕೊರಕೋನಪಲ್ಲಿ",
      "ಗೌನಿಚೆರುವುಪಲ್ಲಿ",
      "ದಿಗವಪಲ್ಲಿ",
      "ಮುದ್ದಲಹಳ್ಳಿ",
      "ನಿಮ್ಮಕಾಯಲಹಳ್ಳಿ",
      "ನಂದಿಗಾನಹಳ್ಳಿ",
      "ಕದಿರಪ್ಪನಾಯಕನಕೋಟೆ",
      "ನೀಲಪಲ್ಲಿ",
      "ಬೋಡುಗುಂಡ್ಲಹಳ್ಳಿ",
    ],
    officers: [
      {
        name: "Ramesh Talwar",
        kannadaName: "ರಮೇಶ್ ತಳವಾರ್",
        designation: "CPC-561",
        kannadaDesignation: "ಸಿಪಿಸಿ-561",
        phone: "8277964419",
      },
      {
        name: "Honnappa Talwar",
        kannadaName: "ಹೊನ್ನಪ್ಪ ತಳವಾರ್",
        designation: "CPC-430",
        kannadaDesignation: "ಸಿಪಿಸಿ-430",
        phone: "8277964404",
      },
    ],
    supervisor: {
      name: "Babajan",
      kannadaName: "ಬಾಬಾಜಾನ್",
      designation: "ASI",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9731911197",
    },
  },
];

const talukName = {
  en: "Batlahalli",
  kn: "ಬಟ್ಲಹಳ್ಳಿ"
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
      beats: "1-4",
      name: {
        en: "Ramanathareddy",
        kn: "ರಾಮನಾಥರೆಡ್ಡಿ"
      },
      designation: {
        en: "ASI",
        kn: "ಎ.ಎಸ್.ಐ"
      },
      phone: "8296106456"
    },
    {
      beats: "5-8",
      name: {
        en: "Babajan",
        kn: "ಬಾಬಾಜಾನ್"
      },
      designation: {
        en: "ASI",
        kn: "ಎ.ಎಸ್.ಐ"
      },
      phone: "9731911197"
    }
  ]
};

export default function BatlahalliBeatPolice() {
  return (
    <BeatPoliceLayout
      talukName={talukName}
      beatData={beatData}
      backLink="/beat-police"
    />
  );
} 