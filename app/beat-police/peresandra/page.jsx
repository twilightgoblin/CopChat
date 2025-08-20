import BeatPoliceLayout from '../BeatPoliceLayout';

// NOTE: Structure mirrors existing station pages (e.g., bagepalli).
// Populate supervisingOfficers and beatDetails using the Peresandra images/data.
// Each officer/village field supports bilingual labels: { en: string, kn: string }
const peresandraData = {
  talukName: {
    en: 'Peresandra',
    kn: 'ಪೆರಸಂದ್ರ'
  },
  supervisingOfficers: [
    {
      beats: '1-5',
      name: { en: 'Shri Ramachandra', kn: 'ಶ್ರೀ ರಾಮಚಂದ್ರ' },
      designation: { en: 'ASI', kn: 'ಎಎಸ್ಐ' },
      phone: '7411603337'
    },
    {
      beats: '6-10',
      name: { en: 'Shri Mukunda', kn: 'ಶ್ರೀ ಮುಕುಂದ' },
      designation: { en: 'ASI', kn: 'ಎಎಸ್ಐ' },
      phone: '9008222622'
    }
  ],
  beatDetails: [
    {
      number: 1,
      villages: [
        { en: 'Tandikonda', kn: 'ತಂಡಿಕೊಂಡ' },
        { en: 'Kottigere', kn: 'ಕೊಟ್ಟಿಗೇರೆ' },
        { en: 'Kurubarapalya', kn: 'ಕುರುಬರಪಾಳ್ಯ' },
        { en: 'Hesaragatta', kn: 'ಹೆಸರಘಟ್ಟ' },
        { en: 'Hulikatte', kn: 'ಹುಲಿಕಟ್ಟೆ' },
        { en: 'Doddakattige', kn: 'ದೊಡ್ಡಕಟ್ಟಿಗೆ' },
        { en: 'Madappanapalya', kn: 'ಮಡಪ್ಪನಪಾಳ್ಯ' },
        { en: 'Huttanahalli', kn: 'ಹುಟ್ಟನಹಳ್ಳಿ' },
        { en: 'Ballekatte', kn: 'ಬಳ್ಳೆಕಟ್ಟೆ' },
        { en: 'Bhairadevanapalya', kn: 'ಭೈರದೇವನಪಾಳ್ಯ' }
      ],
      officers: [
        {
          name: { en: 'Shri Krishanappa', kn: 'Shri Krishanappa' },
          designation: { en: 'AAB-45', kn: 'AAB-45' },
          phone: '9611252150'
        },
        {
          name: { en: 'Shri Raghavendra', kn: 'Shri Raghavendra' },
          designation: { en: 'AAB-216', kn: 'AAB-216' },
          phone: '9964040084'
        }
      ],
      supervisor: { name: { en: 'Shri Ramachandra', kn: 'ಶ್ರೀ ರಾಮಚಂದ್ರ' }, designation: { en: 'ASI', kn: 'ಎಎಸ್ಐ' }, phone: '7411603337' }
    },
    {
      number: 2,
      villages: [
        { en: 'Tandikonda', kn: 'ತಂಡಿಕೊಂಡ' },
        { en: 'Kottigere', kn: 'ಕೊಟ್ಟಿಗೇರೆ' },
        { en: 'Kurubarapalya', kn: 'ಕುರುಬರಪಾಳ್ಯ' },
        { en: 'Hesaragatta', kn: 'ಹೆಸರಘಟ್ಟ' },
        { en: 'Hulikatte', kn: 'ಹುಲಿಕಟ್ಟೆ' },
        { en: 'Doddakattige', kn: 'ದೊಡ್ಡಕಟ್ಟಿಗೆ' },
        { en: 'Madappanapalya', kn: 'ಮಡಪ್ಪನಪಾಳ್ಯ' },
        { en: 'Huttanahalli', kn: 'ಹುಟ್ಟನಹಳ್ಳಿ' },
        { en: 'Ballekatte', kn: 'ಬಳ್ಳೆಕಟ್ಟೆ' },
        { en: 'Bhairadevanapalya', kn: 'ಭೈರದೇವನಪಾಳ್ಯ' }
      ],
      officers: [
        {
          name: { en: 'Shri Anand Singh', kn: 'Shri Anand Singh' },
          designation: { en: 'AAB-267', kn: 'AAB-267' },
          phone: '7498006242'
        },
        {
          name: { en: 'Shri Mallikarjun', kn: 'Shri Mallikarjun' },
          designation: { en: 'AAB-351', kn: 'AAB-351' },
          phone: '9964046162'
        }
      ],
      supervisor: { name: { en: 'Shri Ramachandra', kn: 'ಶ್ರೀ ರಾಮಚಂದ್ರ' }, designation: { en: 'ASI', kn: 'ಎಎಸ್ಐ' }, phone: '7411603337' }
    },
    {
      number: 3,
      villages: [
        { en: 'Tandikonda', kn: 'ತಂಡಿಕೊಂಡ' },
        { en: 'Kottigere', kn: 'ಕೊಟ್ಟಿಗೇರೆ' },
        { en: 'Kurubarapalya', kn: 'ಕುರುಬರಪಾಳ್ಯ' },
        { en: 'Hesaragatta', kn: 'ಹೆಸರಘಟ್ಟ' },
        { en: 'Hulikatte', kn: 'ಹುಲಿಕಟ್ಟೆ' },
        { en: 'Doddakattige', kn: 'ದೊಡ್ಡಕಟ್ಟಿಗೆ' },
        { en: 'Madappanapalya', kn: 'ಮಡಪ್ಪನಪಾಳ್ಯ' },
        { en: 'Huttanahalli', kn: 'ಹುಟ್ಟನಹಳ್ಳಿ' },
        { en: 'Ballekatte', kn: 'ಬಳ್ಳೆಕಟ್ಟೆ' },
        { en: 'Bhairadevanapalya', kn: 'ಭೈರದೇವನಪಾಳ್ಯ' }
      ],
      officers: [
        {
          name: { en: 'Shri Chandrashekhara', kn: 'Shri Chandrashekhara' },
          designation: { en: 'AAB-83', kn: 'AAB-83' },
          phone: '9663029747'
        },
        {
          name: { en: 'Shri Manjunath', kn: 'Shri Manjunath' },
          designation: { en: 'AAB-103', kn: 'AAB-103' },
          phone: '9964720462'
        }
      ],
      supervisor: { name: { en: 'Shri Ramachandra', kn: 'ಶ್ರೀ ರಾಮಚಂದ್ರ' }, designation: { en: 'ASI', kn: 'ಎಎಸ್ಐ' }, phone: '7411603337' }
    },
    {
      number: 4,
      villages: [
        { en: 'Lakkojanahalli', kn: 'ಲಕ್ಕೋಜನಹಳ್ಳಿ' },
        { en: 'Jakkasandra', kn: 'ಜಕ್ಕಸಂದ್ರ' },
        { en: 'Lakkojanahalli Colony', kn: 'ಲಕ್ಕೋಜನಹಳ್ಳಿ ಕಾಲೋನಿ' },
        { en: 'Bairadevanapalya', kn: 'ಬೈರದೇವನಪಾಳ್ಯ' },
        { en: 'Guddahalli', kn: 'ಗುಡ್ಡಹಳ್ಳಿ' },
        { en: 'Muttusandra', kn: 'ಮುತ್ತಸಂದ್ರ' },
        { en: 'Tandikonda', kn: 'ತಂಡಿಕೊಂಡ' },
        { en: 'Basavanahalli', kn: 'ಬಸವನಹಳ್ಳಿ' },
        { en: 'Goutham Nagar', kn: 'ಗೌತಮ್ ನಗರ' },
        { en: 'Kestur Hosur', kn: 'ಕೇಸ್ತೂರು ಹೊಸೂರು' },
        { en: 'Halasur', kn: 'ಹಲಸೂರು' },
        { en: 'Dandinapura', kn: 'ದಂಡಿನಪುರ' },
        { en: 'Chikkakattige', kn: 'ಚಿಕ್ಕಕಟ್ಟಿಗೆ' }
      ],
      officers: [
        {
          name: { en: 'Shri Shivakumar', kn: 'Shri Shivakumar' },
          designation: { en: 'AAB-260', kn: 'AAB-260' },
          phone: '9844480290'
        },
        {
          name: { en: 'Shri Sunil Kumar', kn: 'Shri Sunil Kumar' },
          designation: { en: 'AAB-594', kn: 'AAB-594' },
          phone: '7483989329'
        }
      ],
      supervisor: { name: { en: 'Shri Ramachandra', kn: 'ಶ್ರೀ ರಾಮಚಂದ್ರ' }, designation: { en: 'ASI', kn: 'ಎಎಸ್ಐ' }, phone: '7411603337' }
    },
    {
      number: 5,
      villages: [
        { en: 'Chikkakattige', kn: 'ಚಿಕ್ಕಕಟ್ಟಿಗೆ' },
        { en: 'Basavanahalli', kn: 'ಬಸವನಹಳ್ಳಿ' },
        { en: 'Bhairadevanapalya', kn: 'ಭೈರದೇವನಪಾಳ್ಯ' },
        { en: 'Kestur Hosur', kn: 'ಕೇಸ್ತೂರು ಹೊಸೂರು' },
        { en: 'Muttusandra', kn: 'ಮುತ್ತಸಂದ್ರ' },
        { en: 'Guddahalli', kn: 'ಗುಡ್ಡಹಳ್ಳಿ' },
        { en: 'Lakkojanahalli', kn: 'ಲಕ್ಕೋಜನಹಳ್ಳಿ' },
        { en: 'Dandinapura', kn: 'ದಂಡಿನಪುರ' },
        { en: 'Halasur', kn: 'ಹಲಸೂರು' },
        { en: 'Jakkasandra', kn: 'ಜಕ್ಕಸಂದ್ರ' },
        { en: 'Bairadevanapalya', kn: 'ಬೈರದೇವನಪಾಳ್ಯ' }
      ],
      officers: [
        {
          name: { en: 'Shri Eranna', kn: 'Shri Eranna' },
          designation: { en: 'AAB-293', kn: 'AAB-293' },
          phone: '7022284480'
        },
        {
          name: { en: 'Shri Ramachandra', kn: 'Shri Ramachandra' },
          designation: { en: 'AAB-45', kn: 'AAB-45' },
          phone: '9972827954'
        }
      ],
      supervisor: { name: { en: 'Shri Ramachandra', kn: 'ಶ್ರೀ ರಾಮಚಂದ್ರ' }, designation: { en: 'ASI', kn: 'ಎಎಸ್ಐ' }, phone: '7411603337' }
    },
    {
      number: 6,
      villages: [
        { en: 'Doddamariyappanapalya', kn: 'ದೊಡ್ಡಮಾರಿಯಪ್ಪನಪಾಳ್ಯ' },
        { en: 'Goutham Nagar', kn: 'ಗೌತಮ್ ನಗರ' },
        { en: 'Bhairadevanapalya', kn: 'ಭೈರದೇವನಪಾಳ್ಯ' },
        { en: 'Kestur Hosur', kn: 'ಕೇಸ್ತೂರು ಹೊಸೂರು' },
        { en: 'Muttusandra', kn: 'ಮುತ್ತಸಂದ್ರ' },
        { en: 'Guddahalli', kn: 'ಗುಡ್ಡಹಳ್ಳಿ' },
        { en: 'Basavanahalli', kn: 'ಬಸವನಹಳ್ಳಿ' },
        { en: 'Tandikonda', kn: 'ತಂಡಿಕೊಂಡ' },
        { en: 'Dandinapura', kn: 'ದಂಡಿನಪುರ' },
        { en: 'Halasur', kn: 'ಹಲಸೂರು' },
        { en: 'Jakkasandra', kn: 'ಜಕ್ಕಸಂದ್ರ' },
        { en: 'Bairadevanapalya', kn: 'ಬೈರದೇವನಪಾಳ್ಯ' }
      ],
      officers: [
        {
          name: { en: 'Shri Doddamariyappa', kn: 'Shri Doddamariyappa' },
          designation: { en: 'AAB-203', kn: 'AAB-203' },
          phone: '7019998887'
        },
        {
          name: { en: 'Shri Doddaiah', kn: 'Shri Doddaiah' },
          designation: { en: 'AAB-272', kn: 'AAB-272' },
          phone: '9108771990'
        }
      ],
      supervisor: { name: { en: 'Shri Mukunda', kn: 'ಶ್ರೀ ಮುಕುಂದ' }, designation: { en: 'ASI', kn: 'ಎಎಸ್ಐ' }, phone: '9008222622' }
    },
    {
      number: 7,
      villages: [
        { en: 'Doddamariyappanapalya', kn: 'ದೊಡ್ಡಮಾರಿಯಪ್ಪನಪಾಳ್ಯ' },
        { en: 'Guddahalli', kn: 'ಗುಡ್ಡಹಳ್ಳಿ' },
        { en: 'Basavanahalli', kn: 'ಬಸವನಹಳ್ಳಿ' },
        { en: 'Bhairadevanapalya', kn: 'ಭೈರದೇವನಪಾಳ್ಯ' },
        { en: 'Chikkakattige', kn: 'ಚಿಕ್ಕಕಟ್ಟಿಗೆ' },
        { en: 'Tandikonda', kn: 'ತಂಡಿಕೊಂಡ' },
        { en: 'Lakkojanahalli Colony', kn: 'ಲಕ್ಕೋಜನಹಳ್ಳಿ ಕಾಲೋನಿ' },
        { en: 'Lakkojanahalli', kn: 'ಲಕ್ಕೋಜನಹಳ್ಳಿ' },
        { en: 'Jakkasandra', kn: 'ಜಕ್ಕಸಂದ್ರ' },
        { en: 'Kestur Hosur', kn: 'ಕೇಸ್ತೂರು ಹೊಸೂರು' },
        { en: 'Halasur', kn: 'ಹಲಸೂರು' },
        { en: 'Dandinapura', kn: 'ದಂಡಿನಪುರ' }
      ],
      officers: [
        {
          name: { en: 'Shri Ramakumar', kn: 'Shri Ramakumar' },
          designation: { en: 'AAB-240', kn: 'AAB-240' },
          phone: '7760999992'
        },
        {
          name: { en: 'Shri Shivu Nayak', kn: 'Shri Shivu Nayak' },
          designation: { en: 'AAB-290', kn: 'AAB-290' },
          phone: '9553075919'
        }
      ],
      supervisor: { name: { en: 'Shri Mukunda', kn: 'ಶ್ರೀ ಮುಕುಂದ' }, designation: { en: 'ASI', kn: 'ಎಎಸ್ಐ' }, phone: '9008222622' }
    },
    {
      number: 8,
      villages: [
        { en: 'Doddamariyappanapalya', kn: 'ದೊಡ್ಡಮಾರಿಯಪ್ಪನಪಾಳ್ಯ' },
        { en: 'Guddahalli', kn: 'ಗುಡ್ಡಹಳ್ಳಿ' },
        { en: 'Basavanahalli', kn: 'ಬಸವನಹಳ್ಳಿ' },
        { en: 'Bhairadevanapalya', kn: 'ಭೈರದೇವನಪಾಳ್ಯ' },
        { en: 'Chikkakattige', kn: 'ಚಿಕ್ಕಕಟ್ಟಿಗೆ' },
        { en: 'Tandikonda', kn: 'ತಂಡಿಕೊಂಡ' },
        { en: 'Lakkojanahalli Colony', kn: 'ಲಕ್ಕೋಜನಹಳ್ಳಿ ಕಾಲೋನಿ' },
        { en: 'Lakkojanahalli', kn: 'ಲಕ್ಕೋಜನಹಳ್ಳಿ' },
        { en: 'Jakkasandra', kn: 'ಜಕ್ಕಸಂದ್ರ' },
        { en: 'Kestur Hosur', kn: 'ಕೇಸ್ತೂರು ಹೊಸೂರು' },
        { en: 'Halasur', kn: 'ಹಲಸೂರು' },
        { en: 'Dandinapura', kn: 'ದಂಡಿನಪುರ' }
      ],
      officers: [
        {
          name: { en: 'Shri Nagesh Kumar', kn: 'Shri Nagesh Kumar' },
          designation: { en: 'AAB-120', kn: 'AAB-120' },
          phone: '7692045435'
        },
        {
          name: { en: 'Shri Doddaiah', kn: 'Shri Doddaiah' },
          designation: { en: 'AAB-405', kn: 'AAB-405' },
          phone: '7090886882'
        }
      ],
      supervisor: { name: { en: 'Shri Mukunda', kn: 'ಶ್ರೀ ಮುಕುಂದ' }, designation: { en: 'ASI', kn: 'ಎಎಸ್ಐ' }, phone: '9008222622' }
    },
    {
      number: 9,
      villages: [
        'Doddamariyappanapalya',
        'Guddahalli',
        'Basavanahalli',
        'Bhairadevanapalya',
        'Chikkakattige',
        'Tandikonda',
        'Lakkojanahalli Colony',
        'Lakkojanahalli',
        'Jakkasandra',
        'Kestur Hosur',
        'Halasur',
        'Dandinapura'
      ].map(v => ({ en: v, kn: v })),
      officers: [
        {
          name: { en: 'Shri Manjunath', kn: 'Shri Manjunath' },
          designation: { en: 'AAB-104', kn: 'AAB-104' },
          phone: '7691514414'
        },
        {
          name: { en: 'Shri Shivu Kumar', kn: 'Shri Shivu Kumar' },
          designation: { en: 'AAB-298', kn: 'AAB-298' },
          phone: '7980571169'
        }
      ],
      supervisor: { name: { en: 'Shri Mukunda', kn: 'ಶ್ರೀ ಮುಕುಂದ' }, designation: { en: 'ASI', kn: 'ಎಎಸ್ಐ' }, phone: '9008222622' }
    },
    {
      number: 10,
      villages: [
        { en: 'Muthusandra', kn: 'ಮುತ್ತಸಂದ್ರ' },
        { en: 'Halasur', kn: 'ಹಲಸೂರು' },
        { en: 'Guddahalli', kn: 'ಗುಡ್ಡಹಳ್ಳಿ' },
        { en: 'Basavanahalli', kn: 'ಬಸವನಹಳ್ಳಿ' },
        { en: 'Bhairadevanapalya', kn: 'ಭೈರದೇವನಪಾಳ್ಯ' },
        { en: 'Chikkakattige', kn: 'ಚಿಕ್ಕಕಟ್ಟಿಗೆ' },
        { en: 'Tandikonda', kn: 'ತಂಡಿಕೊಂಡ' },
        { en: 'Lakkojanahalli Colony', kn: 'ಲಕ್ಕೋಜನಹಳ್ಳಿ ಕಾಲೋನಿ' },
        { en: 'Lakkojanahalli', kn: 'ಲಕ್ಕೋಜನಹಳ್ಳಿ' },
        { en: 'Jakkasandra', kn: 'ಜಕ್ಕಸಂದ್ರ' },
        { en: 'Kestur Hosur', kn: 'ಕೇಸ್ತೂರು ಹೊಸೂರು' },
        { en: 'Dandinapura', kn: 'ದಂಡಿನಪುರ' }
      ],
      officers: [
        {
          name: { en: 'Shri B.V.Gopal', kn: 'Shri B.V.Gopal' },
          designation: { en: 'AAB-554', kn: 'AAB-554' },
          phone: '6722017774'
        },
        {
          name: { en: 'Shri B.R.Manjunath', kn: 'Shri B.R.Manjunath' },
          designation: { en: 'AAB-274', kn: 'AAB-274' },
          phone: '7980079073'
        }
      ],
      supervisor: { name: { en: 'Shri Mukunda', kn: 'ಶ್ರೀ ಮುಕುಂದ' }, designation: { en: 'ASI', kn: 'ಎಎಸ್ಐ' }, phone: '9008222622' }
    }
  ]
};

export default function PeresandraPage() {
  return (
    <BeatPoliceLayout 
      talukName={peresandraData.talukName}
      beatData={peresandraData}
    />
  );
}


