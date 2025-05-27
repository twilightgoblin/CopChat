"use client";

import BeatPoliceLayout from "../BeatPoliceLayout";

const Dibburahalli = () => {
  const beatData = {
    supervisingOfficers: [
      {
        beats: "1-4",
        name: {
          en: "Nagaraj M",
          kn: "ನಾಗರಾಜ ಎಂ"
        },
        designation: {
          en: "A.S.I",
          kn: "ಎ.ಎಸ್.ಐ"
        },
        phone: "8050785854"
      },
      {
        beats: "5-8",
        name: {
          en: "Ananthakumar M D",
          kn: "ಅನಂತಕುಮಾರ್ ಎಂ ಡಿ"
        },
        designation: {
          en: "A.S.I",
          kn: "ಎ.ಎಸ್.ಐ"
        },
        phone: "9731757205"
      }
    ],
    beatDetails: [
      {
        number: "01",
        villages: [
          { en: "Sadali", kn: "ಸಾದಲಿ" },
          { en: "Sonnaganahallli", kn: "ಸೊಣ್ಣಗಾನಹಳ್ಳಿ" },
          { en: "Kotagal", kn: "ಕೋಟಗಲ್" },
          { en: "Kamanahalli", kn: "ಕಾಮನಹಳ್ಳಿ" },
          { en: "Bandarlahallli", kn: "ಬಂದಾರ್ಲಹಳ್ಳಿ" },
          { en: "Pusaganadoddi", kn: "ಪೂಸಗಾನದೊಡ್ಡಿ" },
          { en: "Neralemaradahalli", kn: "ನೇರಳೆಮರದಹಳ್ಳಿ" },
          { en: "S.Venkatapura", kn: "ಎಸ್.ವೆಂಕಟಾಪುರ" },
          { en: "Uppakunthalli", kn: "ಉಪ್ಪಕುಂಟಹಳ್ಳಿ" },
          { en: "Nallappanahalli", kn: "ನಲ್ಲಪ್ಪನಹಳ್ಳಿ" },
          { en: "Niluvarathahalli", kn: "ನಿಲುವರಾತಹಳ್ಳಿ" },
          { en: "S.Kurubarhalli", kn: "ಎಸ್.ಕುರುಬರಹಳ್ಳಿ" },
          { en: "S.Devaganahallli", kn: "ಎಸ್.ದೇವಗಾನಹಳ್ಳಿ" },
          { en: "S.Gundlahalli", kn: "ಎಸ್.ಗುಂಡ್ಲಹಳ್ಳಿ" },
          { en: "Yarranagenahallli", kn: "ಯರ್ರನಾಗೇನಹಳ್ಳಿ" },
          { en: "Varadaganahalli", kn: "ವರದಗಾನಹಳ್ಳಿ" }
        ],
        officers: [
          {
            name: {
              en: "Manjunath",
              kn: "ಮಂಜುನಾಥ"
            },
            designation: {
              en: "C.H.C-55",
              kn: "ಸಿ.ಹೆಚ್.ಸಿ-55"
            },
            phone: "8277964494"
          },
          {
            name: {
              en: "Suma K.R",
              kn: "ಸುಮ ಕೆ.ಆರ್"
            },
            designation: {
              en: "MPCI-589",
              kn: "ಎಂಪಿಸಿ-589"
            },
            phone: "9164297636"
          }
        ],
        supervisor: {
          name: {
            en: "Nagaraj M",
            kn: "ನಾಗರಾಜ ಎಂ"
          },
          designation: {
            en: "A.S.I",
            kn: "ಎ.ಎಸ್.ಐ"
          },
          phone: "8050785854"
        }
      },
      {
        number: "02",
        villages: [
          { en: "Dibburalli", kn: "ದಿಬ್ಬೂರಹಳ್ಳಿ" },
          { en: "Chikkadibburalli", kn: "ಚಿಕ್ಕದಿಬ್ಬೂರಹಳ್ಳಿ" },
          { en: "Bachhanahalli", kn: "ಬಚ್ಚನಹಳ್ಳಿ" },
          { en: "Vaddahalli", kn: "ವಡ್ಡಹಳ್ಳಿ" },
          { en: "Bayyappanahalli", kn: "ಬಯ್ಯಪ್ಪನಹಳ್ಳಿ" },
          { en: "Chandaganahalli", kn: "ಚಂದಗಾನಹಳ್ಳಿ" },
          { en: "Sithahalli", kn: "ಸೀತಹಳ್ಳಿ" },
          { en: "Hireyalachenahalli", kn: "ಹಿರೇಯಲಚೇನಹಳ್ಳಿ" },
          { en: "Yalagalahalli", kn: "ಯಲಗಲಹಳ್ಳಿ" },
          { en: "Kondappagarahalli", kn: "ಕೊಂಡಪ್ಪಗಾರಹಳ್ಳಿ" },
          { en: "Jarugahalli", kn: "ಜರುಗಹಳ್ಳಿ" },
          { en: "Venkatakrishnammanahalli", kn: "ವೆಂಕಟಕೃಷ್ಣಮ್ಮನಹಳ್ಳಿ" },
          { en: "S.Gollahalli", kn: "ಎಸ್.ಗೊಲ್ಲಹಳ್ಳಿ" },
          { en: "Iragappanahalli", kn: "ಇರಗಪ್ಪನಹಳ್ಳಿ" },
          { en: "Chakappanahalli", kn: "ಚಾಕಪ್ಪನಹಳ್ಳಿ" },
          { en: "Gadiminchenahallli", kn: "ಗಡಿಮಿಂಚೇನಹಳ್ಳಿ" }
        ],
        officers: [
          {
            name: {
              en: "Savithramma",
              kn: "ಸಾವಿತ್ರಮ್ಮ"
            },
            designation: {
              en: "M.H.C-251",
              kn: "ಮ.ಹೆಚ್.ಸಿ-251"
            },
            phone: "9663807169"
          },
          {
            name: {
              en: "Shashikumar",
              kn: "ಶಶಿಕುಮಾರ್"
            },
            designation: {
              en: "CPC-29",
              kn: "ಸಿಪಿಸಿ-29"
            },
            phone: "7353805273"
          }
        ],
        supervisor: {
          name: {
            en: "Nagaraj M",
            kn: "ನಾಗರಾಜ ಎಂ"
          },
          designation: {
            en: "A.S.I",
            kn: "ಎ.ಎಸ್.ಐ"
          },
          phone: "8050785854"
        }
      },
      {
        number: "03",
        villages: [
          { en: "Kudupakunte", kn: "ಕುದುಪಕುಂಟೆ" },
          { en: "Yarrahalli", kn: "ಯರ್ರಹಳ್ಳಿ" },
          { en: "Nallojanahallli", kn: "ನಲ್ಲೋಜನಹಳ್ಳಿ" },
          { en: "Timmanaykanahallli", kn: "ತಿಮ್ಮನಾಯಕನಹಳ್ಳಿ" },
          { en: "Alagurki", kn: "ಅಲಗುರ್ಕಿ" },
          { en: "A.Nakkalahallli", kn: "ಎ.ನಕ್ಕಲಹಳ್ಳಿ" },
          { en: "Budugavarahalli", kn: "ಬುಡುಗವಾರಹಳ್ಳಿ" },
          { en: "Dasarlahalli", kn: "ದಾಸಾರ್ಲಹಳ್ಳಿ" },
          { en: "Maralappanahalli", kn: "ಮರಳಪ್ಪನಹಳ್ಳಿ" },
          { en: "Dimbarlahalli", kn: "ದಿಂಬಾರ್ಲಹಳ್ಳಿ" },
          { en: "Rayappanahalli", kn: "ರಾಯಪ್ಪನಹಳ್ಳಿ" },
          { en: "Talakayalabetta", kn: "ತಲಕಾಯಲಬೆಟ್ಟ" },
          { en: "T.Venkatapura", kn: "ಟಿ.ವೆಂಕಟಾಪುರ" },
          { en: "Kariyappanahalli", kn: "ಕರಿಯಪ್ಪನಹಳ್ಳಿ" },
          { en: "Halehalli", kn: "ಹಳೇಹಳ್ಳಿ" },
          { en: "Mallishettihalli", kn: "ಮಲ್ಲಿಶೆಟ್ಟಿಹಳ್ಳಿ" }
        ],
        officers: [
          {
            name: {
              en: "Krishnappa M",
              kn: "ಕೃಷ್ಣಪ್ಪ ಎಂ"
            },
            designation: {
              en: "C.H.C-161",
              kn: "ಸಿ.ಹೆಚ್.ಸಿ-161"
            },
            phone: "9900298575"
          },
          {
            name: {
              en: "Prashant G V",
              kn: "ಪ್ರಶಾಂತ್ ಜಿ ವಿ"
            },
            designation: {
              en: "CPC-20",
              kn: "ಸಿಪಿಸಿ-20"
            },
            phone: "9741391740"
          }
        ],
        supervisor: {
          name: {
            en: "Nagaraj M",
            kn: "ನಾಗರಾಜ ಎಂ"
          },
          designation: {
            en: "A.S.I",
            kn: "ಎ.ಎಸ್.ಐ"
          },
          phone: "8050785854"
        }
      },
      {
        number: "04",
        villages: [
          { en: "E.Timmasandra", kn: "ಈ.ತಿಮ್ಮಸಂದ್ರ" },
          { en: "Subbarayanahallli", kn: "ಸುಬ್ಬರಾಯನಹಳ್ಳಿ" },
          { en: "Bairaganahallli", kn: "ಬೈರಗಾನಹಳ್ಳಿ" },
          { en: "Shettikere", kn: "ಶೆಟ್ಟಿಕೆರೆ" },
          { en: "Varasandra", kn: "ವರಸಂದ್ರ" },
          { en: "Sadlavarahalli", kn: "ಸಡ್ಲವಾರಹಳ್ಳಿ" },
          { en: "S.M.Kondarajanahallli", kn: "ಎಸ್.ಎಂ.ಕೊಂಡರಾಜನಹಳ್ಳಿ" },
          { en: "Kommasandra", kn: "ಕೊಮ್ಮಸಂದ್ರ" },
          { en: "Turukachanahalli", kn: "ತುರುಕಾಚನಹಳ್ಳಿ" },
          { en: "Gandlachinte", kn: "ಗಾಂಡ್ಲಚಿಂತೆ" },
          { en: "Nallacheruvupalli", kn: "ನಲ್ಲಚೆರುವುಪಲ್ಲಿ" },
          { en: "Roppavarahahlli", kn: "ರೊಪ್ಪವಾರಹಳ್ಳಿ" },
          { en: "G.Nakkalahallli", kn: "ಜಿ.ನಕ್ಕಲಹಳ್ಳಿ" },
          { en: "Bandahalli", kn: "ಬಂಡಹಳ್ಳಿ" },
          { en: "Atagollahalli", kn: "ಆಟಗೊಲ್ಲಹಳ್ಳಿ" },
          { en: "Egaletahalli", kn: "ಈಗಲೇಟಹಳ್ಳಿ" }
        ],
        officers: [
          {
            name: {
              en: "Narasimhayya M",
              kn: "ನರಸಿಂಹಯ್ಯ ಎಂ"
            },
            designation: {
              en: "C.H.C-186",
              kn: "ಸಿ.ಹೆಚ್.ಸಿ-186"
            },
            phone: "9972751297"
          },
          {
            name: {
              en: "Kiran N M",
              kn: "ಕಿರಣ್ ಎನ್ ಎಂ"
            },
            designation: {
              en: "CPC-137",
              kn: "ಸಿಪಿಸಿ-137"
            },
            phone: "9663572940"
          }
        ],
        supervisor: {
          name: {
            en: "Nagaraj M",
            kn: "ನಾಗರಾಜ ಎಂ"
          },
          designation: {
            en: "A.S.I",
            kn: "ಎ.ಎಸ್.ಐ"
          },
          phone: "8050785854"
        }
      },
      {
        number: "05",
        villages: [
          { en: "Bashettihalli", kn: "ಬಶೆಟ್ಟಿಹಳ್ಳಿ" },
          { en: "Ramalingapura", kn: "ರಾಮಲಿಂಗಾಪುರ" },
          { en: "Kachanayakanahallli", kn: "ಕಾಚನಾಯಕನಹಳ್ಳಿ" },
          { en: "Ammagarahalli", kn: "ಅಮ್ಮಗಾರಹಳ್ಳಿ" },
          { en: "Dyavarahalli", kn: "ದ್ಯಾವರಹಳ್ಳಿ" },
          { en: "Amoortimmanahallli", kn: "ಆಮೂರತಿಮ್ಮನಹಳ್ಳಿ" },
          { en: "Kumbarahalli", kn: "ಕುಂಬಾರಹಳ್ಳಿ" },
          { en: "Valasenahalli", kn: "ವಲಸೇನಹಳ್ಳಿ" },
          { en: "Rameshwara", kn: "ರಾಮೇಶ್ವರ" },
          { en: "Nallarallahalli", kn: "ನಲ್ಲರಾಳ್ಳಹಳ್ಳಿ" },
          { en: "Vantooru", kn: "ವಂಟೂರು" },
          { en: "Pendlivarahalli", kn: "ಪೆಂಡ್ಲಿವಾರಹಳ್ಳಿ" },
          { en: "Doddagummanahalli", kn: "ದೊಡ್ಡಗುಮ್ಮನಹಳ್ಳಿ" },
          { en: "Kambalahalli", kn: "ಕಂಬಾಲಹಳ್ಳಿ" },
          { en: "Kempanahallli", kn: "ಕೆಂಪನಹಳ್ಳಿ" },
          { en: "Goudanahalli", kn: "ಗೌಡನಹಳ್ಳಿ" },
          { en: "Dhanamittenahalli", kn: "ಧನಮಿಟ್ಟೇನಹಳ್ಳಿ" }
        ],
        officers: [
          {
            name: {
              en: "Srinivas",
              kn: "ಶ್ರೀನಿವಾಸ್"
            },
            designation: {
              en: "C.H.C-61",
              kn: "ಸಿ.ಹೆಚ್.ಸಿ-61"
            },
            phone: "9972906947"
          },
          {
            name: {
              en: "Srinivasamurthy G V",
              kn: "ಶ್ರೀನಿವಾಸಮೂರ್ತಿ ಜಿ.ವಿ"
            },
            designation: {
              en: "CPC-557",
              kn: "ಸಿಪಿಸಿ-557"
            },
            phone: "9743651597"
          }
        ],
        supervisor: {
          name: {
            en: "Ananthakumar M D",
            kn: "ಅನಂತಕುಮಾರ್ ಎಂ ಡಿ"
          },
          designation: {
            en: "A.S.I",
            kn: "ಎ.ಎಸ್.ಐ"
          },
          phone: "9731757205"
        }
      },
      {
        number: "06",
        villages: [
          { en: "Doddatekahalli", kn: "ದೊಡ್ಡತೇಕಹಳ್ಳಿ" },
          { en: "T.Peddanahalli", kn: "ಟಿ.ಪೆದ್ದನಹಳ್ಳಿ" },
          { en: "Chikkatekahalli", kn: "ಚಿಕ್ಕತೇಕಹಳ್ಳಿ" },
          { en: "Ajjakadirehalli", kn: "ಅಜ್ಜಕದಿರೇಹಳ್ಳಿ" },
          { en: "Maddayyagarahalli", kn: "ಮದ್ದಯ್ಯಗಾರಹಳ್ಳಿ" },
          { en: "Marganuparti", kn: "ಮಾರ್ಗಾನುಪರ್ತಿ" },
          { en: "Goramillahalli", kn: "ಗೊರಮಿಳ್ಳಹಳ್ಳಿ" },
          { en: "Sadahalli", kn: "ಸಾದಹಳ್ಳಿ" },
          { en: "Dyavappanagudi", kn: "ದ್ಯಾವಪ್ಪನಗುಡಿ" },
          { en: "Bairaganahallli", kn: "ಬೈರಗಾನಹಳ್ಳಿ" },
          { en: "Bhinnamangala", kn: "ಭಿನ್ನಮಂಗಲ" },
          { en: "Kannappanahalli", kn: "ಕನ್ನಪ್ಪನಹಳ್ಳಿ" },
          { en: "Saddahalli", kn: "ಸದ್ದಹಳ್ಳಿ" },
          { en: "Tarabahalli", kn: "ತರಬಹಳ್ಳಿ" },
          { en: "Somanahallli", kn: "ಸೋಮನಹಳ್ಳಿ" },
          { en: "Marihalli", kn: "ಮರಿಹಳ್ಳಿ" }
        ],
        officers: [
          {
            name: {
              en: "Srinivasa Gouda",
              kn: "ಶ್ರೀನಿವಾಸ ಗೌಡ"
            },
            designation: {
              en: "C.H.C-89",
              kn: "ಸಿ.ಹೆಚ್.ಸಿ-89"
            },
            phone: "8711871185"
          },
          {
            name: {
              en: "Chandrashekhar H",
              kn: "ಚಂದ್ರಶೇಖರ್ ಹೆಚ್"
            },
            designation: {
              en: "CPC-200",
              kn: "ಸಿಪಿಸಿ-200"
            },
            phone: "7975452192"
          }
        ],
        supervisor: {
          name: {
            en: "Ananthakumar M D",
            kn: "ಅನಂತಕುಮಾರ್ ಎಂ ಡಿ"
          },
          designation: {
            en: "A.S.I",
            kn: "ಎ.ಎಸ್.ಐ"
          },
          phone: "9731757205"
        }
      },
      {
        number: "07",
        villages: [
          { en: "Nachaganahallli", kn: "ನಾಚಗಾನಹಳ್ಳಿ" },
          { en: "Pillagundlahalli", kn: "ಪಿಲ್ಲಗುಂಡ್ಲಹಳ್ಳಿ" },
          { en: "Anemadagu", kn: "ಆನೇಮಡಗು" },
          { en: "Choudareddihallli", kn: "ಚೌಡರೆಡ್ಡಿಹಳ್ಳಿ" },
          { en: "Dadanghatta", kn: "ದಢಂಘಟ್ಟ" },
          { en: "Gorlagummanahallli", kn: "ಗೊರ್ಲಗುಮ್ಮನಹಳ್ಳಿ" },
          { en: "Lakhinayakanahallli", kn: "ಲಖಿನಾಯಕನಹಳ್ಳಿ" },
          { en: "Tokalahalli", kn: "ತೋಕಲಹಳ್ಳಿ" },
          { en: "Mummanahalli", kn: "ಮುಮ್ಮನಹಳ್ಳಿ" },
          { en: "Rachanahallli", kn: "ರಾಚನಹಳ್ಳಿ" },
          { en: "Chokkanahalli", kn: "ಚೊಕ್ಕನಹಳ್ಳಿ" },
          { en: "Gangahalli", kn: "ಗಂಗಹಳ್ಳಿ" },
          { en: "Brahmanahalli", kn: "ಬ್ರಾಹ್ಮಣರಹಳ್ಳಿ" },
          { en: "Gonimaradahallli", kn: "ಗೋಣಿಮರದಹಳ್ಳಿ" },
          { en: "G.K.Hosooru", kn: "ಜಿ.ಕೆ.ಹೊಸೂರು" },
          { en: "G.Kurubarhalli", kn: "ಜಿ.ಕುರುಬರಹಳ್ಳಿ" }
        ],
        officers: [
          {
            name: {
              en: "Pratap A R",
              kn: "ಪ್ರತಾಪ್ ಎ.ಆರ್"
            },
            designation: {
              en: "CPC-355",
              kn: "ಸಿಪಿಸಿ-355"
            },
            phone: "8549927183"
          },
          {
            name: {
              en: "Malappa B",
              kn: "ಮಾಳಪ್ಪ ಬಿ"
            },
            designation: {
              en: "CPC-432",
              kn: "ಸಿಪಿಸಿ-432"
            },
            phone: "7026248533"
          }
        ],
        supervisor: {
          name: {
            en: "Ananthakumar M D",
            kn: "ಅನಂತಕುಮಾರ್ ಎಂ ಡಿ"
          },
          designation: {
            en: "A.S.I",
            kn: "ಎ.ಎಸ್.ಐ"
          },
          phone: "9731757205"
        }
      },
      {
        number: "08",
        villages: [
          { en: "Ganjikunte", kn: "ಗಂಜಿಗುಂಟೆ" },
          { en: "Devaguttahalli", kn: "ದೇವಗುಟ್ಟಹಳ್ಳಿ" },
          { en: "Nagireddihalli", kn: "ನಾಗಿರೆಡ್ಡಿಹಳ್ಳಿ" },
          { en: "Haleganjikunte", kn: "ಹಳೇಗಂಜಿಗುಂಟೆ" },
          { en: "Lakkenahallli", kn: "ಲಕ್ಕೇನಹಳ್ಳಿ" },
          { en: "Yarrabacchenahallli", kn: "ಯರ್ರಬಚ್ಚೇನಹಳ್ಳಿ" },
          { en: "G.Kondarajanahallli", kn: "ಜಿ.ಕೊಂಡರಾಜನಹಳ್ಳಿ" },
          { en: "Vemagal", kn: "ವೇಮಗಲ್" },
          { en: "Kyasagere", kn: "ಕ್ಯಾಸಗೆರೆ" },
          { en: "Balegoudanahalli", kn: "ಬಾಳೇಗೌಡನಹಳ್ಳಿ" },
          { en: "Doddabandaraghatta", kn: "ದೊಡ್ಡಬಂಧರಘಟ್ಟ" },
          { en: "Chikkabandaraghatta", kn: "ಚಿಕ್ಕಬಂಧರಘಟ್ಟ" },
          { en: "Hakkipikki Colony", kn: "ಹಕ್ಕಿಪಿಕ್ಕಿ ಕಾಲೋನಿ" },
          { en: "Poolakunthahalli", kn: "ಪೂಲಕುಂಟಹಳ್ಳಿ" },
          { en: "Madenahallli", kn: "ಮಾದೇನಹಳ್ಳಿ" }
        ],
        officers: [
          {
            name: {
              en: "Krishnappa",
              kn: "ಕೃಷ್ಣಪ್ಪ"
            },
            designation: {
              en: "C.H.C-148",
              kn: "ಸಿ.ಹೆಚ್.ಸಿ-148"
            },
            phone: "9844803177"
          },
          {
            name: {
              en: "Kavita Y D",
              kn: "ಕವಿತಾ ವೈ.ಡಿ"
            },
            designation: {
              en: "MPCI-65",
              kn: "ಎಂಪಿಸಿ-65"
            },
            phone: "9538369831"
          }
        ],
        supervisor: {
          name: {
            en: "Ananthakumar M D",
            kn: "ಅನಂತಕುಮಾರ್ ಎಂ ಡಿ"
          },
          designation: {
            en: "A.S.I",
            kn: "ಎ.ಎಸ್.ಐ"
          },
          phone: "9731757205"
        }
      }
    ]
  };

  return (
    <BeatPoliceLayout
      talukName={{
        en: "Dibburahalli",
        kn: "ದಿಬ್ಬೂರಹಳ್ಳಿ"
      }}
      beatData={beatData}
    />
  );
};

export default Dibburahalli; 