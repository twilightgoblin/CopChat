import BeatPoliceLayout from "../BeatPoliceLayout";

const beatPoliceInfo = [
  {
    beatNumber: 1,
    area: "Venkatagiri Kote North",
    kannadaArea: "ವೆಂಕಟಗಿರಿಕೋಟೆ ಉತ್ತರ",
    officers: [
      {
        name: "Lokesh",
        kannadaName: "ಲೋಕೇಶ್",
        designation: "CPC-551",
        kannadaDesignation: "ಸಿಪಿಸಿ-551",
        phone: "8971190683",
      },
    ],
    supervisor: {
      name: "Anjanappa",
      kannadaName: "ಆಂಜನಪ್ಪ",
      designation: "A.S.I",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9880040179",
    },
  },
  {
    beatNumber: 2,
    area: "Venkatagiri Kote South",
    kannadaArea: "ವೆಂಕಟಗಿರಿಕೋಟೆ ದಕ್ಷಿಣ",
    officers: [
      {
        name: "Sunita",
        kannadaName: "ಸುನಿತಾ",
        designation: "MPCI-230",
        kannadaDesignation: "ಮಪಿಸಿ-230",
        phone: "6360666783",
      },
    ],
    supervisor: {
      name: "Anjanappa",
      kannadaName: "ಆಂಜನಪ್ಪ",
      designation: "A.S.I",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9880040179",
    },
  },
  {
    beatNumber: 3,
    area: "Ven. Kote Colony",
    kannadaArea: "ವೆಂ.ಕೋಟೆ ಕಾಲೋನಿ",
    officers: [
      {
        name: "Srikant",
        kannadaName: "ಶ್ರೀಕಾಂತ",
        designation: "CPC-365",
        kannadaDesignation: "ಸಿಪಿಸಿ-365",
        phone: "N/A",
      },
    ],
    supervisor: {
      name: "Anjanappa",
      kannadaName: "ಆಂಜನಪ್ಪ",
      designation: "A.S.I",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9880040179",
    },
  },
  {
    beatNumber: 4,
    area: "Tank Bund Road, West",
    kannadaArea: "ಟ್ಯಾಂಕ್ ಬಂಡ್ ರಸ್ತೆ, ಪಶ್ಚಿಮ",
    officers: [
      {
        name: "Manjunath",
        kannadaName: "ಮಂಜುನಾಥ",
        designation: "H.C-198",
        kannadaDesignation: "ಹೆಚ್.ಸಿ-198",
        phone: "8660637033",
      },
    ],
    supervisor: {
      name: "Anjanappa",
      kannadaName: "ಆಂಜನಪ್ಪ",
      designation: "A.S.I",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9880040179",
    },
  },
  {
    beatNumber: 5,
    area: "Tank Bund Road, East",
    kannadaArea: "ಟ್ಯಾಂಕ್ ಬಂಡ್ ರಸ್ತೆ, ಪೂರ್ವ",
    officers: [
      {
        name: "Muniraju",
        kannadaName: "ಮುನಿರಾಜು",
        designation: "CPC-279",
        kannadaDesignation: "ಸಿಪಿಸಿ-279",
        phone: "7259350135",
      },
    ],
    supervisor: {
      name: "Anjanappa",
      kannadaName: "ಆಂಜನಪ್ಪ",
      designation: "A.S.I",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9880040179",
    },
  },
  {
    beatNumber: 6,
    area: "Kalappa Badavane",
    kannadaArea: "ಕಾಳಪ್ಪ ಬಡಾವಣೆ",
    officers: [
      {
        name: "Ashok",
        kannadaName: "ಅಶೋಕ",
        designation: "CPC-142",
        kannadaDesignation: "ಸಿಪಿಸಿ-142",
        phone: "9606862970",
      },
    ],
    supervisor: {
      name: "Anjanappa",
      kannadaName: "ಆಂಜನಪ್ಪ",
      designation: "A.S.I",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9880040179",
    },
  },
  {
    beatNumber: 7,
    area: "K.R. Badavane",
    kannadaArea: "ಕೆ.ಆರ್.ಬಡಾವಣೆ",
    officers: [
      {
        name: "Srinivasa",
        kannadaName: "ಶ್ರೀನಿವಾಸ",
        designation: "PC-185",
        kannadaDesignation: "ಪಿಸಿ-185",
        phone: "9606862970",
      },
    ],
    supervisor: {
      name: "Anjanappa",
      kannadaName: "ಆಂಜನಪ್ಪ",
      designation: "A.S.I",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9880040179",
    },
  },
  {
    beatNumber: 8,
    area: "Anjani Badavane",
    kannadaArea: "ಅಂಜನಿ ಬಡಾವಣೆ",
    officers: [
      {
        name: "Vishwanath",
        kannadaName: "ವಿಶ್ವನಾಥ",
        designation: "H.C-95",
        kannadaDesignation: "ಹೆಚ್.ಸಿ-95",
        phone: "7795439894",
      },
    ],
    supervisor: {
      name: "Anjanappa",
      kannadaName: "ಆಂಜನಪ್ಪ",
      designation: "A.S.I",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9880040179",
    },
  },
  {
    beatNumber: 9,
    area: "Ashwini Badavane",
    kannadaArea: "ಅಶ್ವಿನಿ ಬಡಾವಣೆ",
    officers: [
      {
        name: "Harinath",
        kannadaName: "ಹರೀನಾಥ",
        designation: "PC-142",
        kannadaDesignation: "ಪಿಸಿ-142",
        phone: "9448776989",
      },
    ],
    supervisor: {
      name: "Anjanappa",
      kannadaName: "ಆಂಜನಪ್ಪ",
      designation: "A.S.I",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9880040179",
    },
  },
  {
    beatNumber: 10,
    area: "Prabhakar Badavane",
    kannadaArea: "ಪ್ರಭಾಕರ ಬಡಾವಣೆ",
    officers: [
      {
        name: "Muralidhara",
        kannadaName: "ಮುರಳೀಧರ",
        designation: "H.C-211",
        kannadaDesignation: "ಹೆಚ್.ಸಿ-211",
        phone: "9448886687",
      },
    ],
    supervisor: {
      name: "Umashankar",
      kannadaName: "ಊಮಾಶಂಕರ್",
      designation: "A.S.I",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9740749327",
    },
  },
  {
    beatNumber: 11,
    area: "Malapalli",
    kannadaArea: "ಮಾಳಪಲ್ಲಿ",
    officers: [
      {
        name: "Mallikarjuna Davaleshwaram",
        kannadaName: "ಮಲ್ಲಿಕಾರ್ಜುನ ದವಳೇಶ್ವರಂ",
        designation: "CPC-586",
        kannadaDesignation: "ಸಿಪಿಸಿ-586",
        phone: "6360944494",
      },
    ],
    supervisor: {
      name: "Umashankar",
      kannadaName: "ಊಮಾಶಂಕರ್",
      designation: "A.S.I",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9740749327",
    },
  },
  {
    beatNumber: 12,
    area: "N.R Badavane",
    kannadaArea: "ಎನ್.ಆರ್ ಬಡಾವಣೆ",
    officers: [
      {
        name: "Gangaraju",
        kannadaName: "ಗಂಗರಾಜು",
        designation: "CPC-327",
        kannadaDesignation: "ಸಿಪಿಸಿ-327",
        phone: "9448875548",
      },
    ],
    supervisor: {
      name: "Umashankar",
      kannadaName: "ಊಮಾಶಂಕರ್",
      designation: "A.S.I",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9740749327",
    },
  },
  {
    beatNumber: 13,
    area: "Vinobha Colony, Rajabovi Colony",
    kannadaArea: "ವಿನೋಭಾ ಕಾಲೋನಿ, ರಾಜಬೋವಿ ಕಾಲೋನಿ",
    officers: [
      {
        name: "Peiroz Ali",
        kannadaName: "ಪೈರೋಜ್ ಆಲಿ",
        designation: "H.C-08",
        kannadaDesignation: "ಹೆಚ್.ಸಿ-08",
        phone: "8660100584",
      },
    ],
    supervisor: {
      name: "Umashankar",
      kannadaName: "ಊಮಾಶಂಕರ್",
      designation: "A.S.I",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9740749327",
    },
  },
  {
    beatNumber: 14,
    area: "Venkateshwara Badavane",
    kannadaArea: "ವೆಂಕಟೇಶ್ವರ ಬಡಾವಣೆ",
    officers: [
      {
        name: "Sudha",
        kannadaName: "ಸುಧಾ",
        designation: "M.H.C-122",
        kannadaDesignation: "ಮ.ಹೆಚ್.ಸಿ-122",
        phone: "8722647321",
      },
    ],
    supervisor: {
      name: "Umashankar",
      kannadaName: "ಊಮಾಶಂಕರ್",
      designation: "A.S.I",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9740749327",
    },
  },
  {
    beatNumber: 15,
    area: "Bhakta Nagar",
    kannadaArea: "ಭಕ್ತ ನಗರ",
    officers: [
      {
        name: "Deepak Kumar",
        kannadaName: "ದೀಪಕ್ ಕುಮಾರ್",
        designation: "PC-183",
        kannadaDesignation: "ಪಿಸಿ-183",
        phone: "9164576484",
      },
    ],
    supervisor: {
      name: "Umashankar",
      kannadaName: "ಊಮಾಶಂಕರ್",
      designation: "A.S.I",
      kannadaDesignation: "ಎ.ಎಸ್.ಐ",
      phone: "9740749327",
    },
  },
];

export default function ChintamaniTown() {
  // Transform the data into the expected format
  const transformedData = {
    beatDetails: beatPoliceInfo.map(beat => ({
      number: beat.beatNumber,
      villages: [{
        en: beat.area,
        kn: beat.kannadaArea
      }],
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
        en: "Chintamani Town",
        kn: "ಚಿಂತಾಮಣಿ ಪಟ್ಟಣ"
      }}
    />
  );
} 