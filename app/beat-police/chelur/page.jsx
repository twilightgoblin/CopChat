'use client';

import React from 'react';
import BeatPoliceLayout from '../BeatPoliceLayout';

const talukName = {
  en: "Chelur",
  kn: "ಚೆಲೂರು"
};

const beatData = {
    supervisingOfficers: [
      { 
        beats: "1, 2, 3", 
        name: {
          en: "Sri Srinivasa",
          kn: "ಶ್ರೀ ಶ್ರೀನಿವಾಸ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "9448771120" 
      },
      { 
        beats: "4, 5, 6", 
        name: {
          en: "Sri Venkatesh",
          kn: "ಶ್ರೀ ವೆಂಕಟೇಶ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "9740899276" 
      },
      { 
        beats: "7, 8, 9", 
        name: {
          en: "Sri Mustafa",
          kn: "ಶ್ರೀ ಮುಸ್ತಫಾ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "8105869995" 
      },
      { 
        beats: "10, 11, 12", 
        name: {
          en: "Sri Sanaulla Islam",
          kn: "ಶ್ರೀ ಸನಾಉಲ್ಲಾ ಇಸ್ಲಾಂ"
        }, 
        designation: {
          en: "ASI",
          kn: "ಎ.ಎಸ್.ಐ"
        }, 
        phone: "8073923947" 
      }
    ],
    beatDetails: [
      {
        number: "1",
        officers: [
          { 
            name: {
              en: "Sri Beeranna Hikkanagutti",
              kn: "ಶ್ರೀ ಬೀರಣ್ಣ ಹಿಕ್ಕನಗುಟ್ಟಿ"
            }, 
            designation: {
              en: "CPC-136",
              kn: "ಸಿ.ಪಿ.ಸಿ-136"
            }, 
            phone: "9008027746" 
          },
          { 
            name: {
              en: "Sri Srikanth Bhajantri",
              kn: "ಶ್ರೀ ಶ್ರೀಕಾಂತ್ ಭಜಂತ್ರಿ"
            }, 
            designation: {
              en: "CPC-216",
              kn: "ಸಿ.ಪಿ.ಸಿ-216"
            }, 
            phone: "7090620401" 
          }
        ],
        villages: [
          { en: "Chelur", kn: "ಚೆಲೂರು" },
          { en: "Daravaripalli", kn: "ದಾರವಾರಿಪಲ್ಲಿ" },
          { en: "Nimmakayalapalli", kn: "ನಿಮ್ಮಕಾಯಲಪಲ್ಲಿ" },
          { en: "Bairappanpalli", kn: "ಬೈರಪ್ಪನ್ಪಲ್ಲಿ" },
          { en: "Paturu", kn: "ಪಟೂರು" },
          { en: "Sherkhan Kote", kn: "ಶೇರ್ಖಾನ್ ಕೋಟೆ" },
          { en: "Iddilawaripalli", kn: "ಇಡ್ಡಿಲವಾರಿಪಲ್ಲಿ" },
          { en: "Hosahudya", kn: "ಹೊಸಹುದ್ಯ" }
        ],
        supervisor: { 
          name: {
            en: "Sri Srinivasa T",
            kn: "ಶ್ರೀ ಶ್ರೀನಿವಾಸ ಟಿ"
          }, 
          designation: {
            en: "ASI",
            kn: "ಎ.ಎಸ್.ಐ"
          }, 
          phone: "9448771120" 
        }
      },
      {
        number: "2",
        officers: [
          { 
            name: {
              en: "Sri Babavali",
              kn: "ಶ್ರೀ ಬಾಬಾವಾಲಿ"
            }, 
            designation: {
              en: "CPC-130",
              kn: "ಸಿ.ಪಿ.ಸಿ-130"
            }, 
            phone: "9164564661" 
          },
          { 
            name: {
              en: "Sri Gangaraju",
              kn: "ಶ್ರೀ ಗಂಗಾರಾಜು"
            }, 
            designation: {
              en: "CPC-323",
              kn: "ಸಿ.ಪಿ.ಸಿ-323"
            }, 
            phone: "9741431056" 
          }
        ],
        villages: [
          { en: "Bellalamapalli A+B", kn: "ಬೆಲ್ಲಾಲಮಪಲ್ಲಿ ಎ+ಬಿ" },
          { en: "Nallasanapalli", kn: "ನಲ್ಲಸನಪಲ್ಲಿ" },
          { en: "Dabbaravarpalli", kn: "ದಬ್ಬರವಾರ್ಪಲ್ಲಿ" },
          { en: "Myakalapalli", kn: "ಮ್ಯಾಕಲಪಲ್ಲಿ" },
          { en: "Puligintivarpalli", kn: "ಪುಲಿಗಿಂತಿವಾರ್ಪಲ್ಲಿ" },
          { en: "Pulavandlapalli", kn: "ಪುಲವಂಡ್ಲಪಲ್ಲಿ" },
          { en: "Gandhipura", kn: "ಗಾಂಧಿಪುರ" },
          { en: "Srinivasapura", kn: "ಶ್ರೀನಿವಾಸಪುರ" },
          { en: "Ramachandrapura", kn: "ರಾಮಚಂದ್ರಪುರ" },
          { en: "Ragimakalpalli", kn: "ರಾಗಿಮಕಲ್ಪಲ್ಲಿ" }
        ],
        supervisor: { 
          name: {
            en: "Sri Srinivasa T",
            kn: "ಶ್ರೀ ಶ್ರೀನಿವಾಸ ಟಿ"
          }, 
          designation: {
            en: "ASI",
            kn: "ಎ.ಎಸ್.ಐ"
          }, 
          phone: "9448771120" 
        }
      },
      {
        number: "3",
        officers: [
          { 
            name: {
              en: "Sri Suresh Kondaguli",
              kn: "ಶ್ರೀ ಸುರೇಶ್ ಕೊಂಡಗುಳಿ"
            }, 
            designation: {
              en: "CPC-234",
              kn: "ಸಿ.ಪಿ.ಸಿ-234"
            }, 
            phone: "9148586252" 
          },
          { 
            name: {
              en: "Sri Mutturaju",
              kn: "ಶ್ರೀ ಮುತ್ತುರಾಜು"
            }, 
            designation: {
              en: "CPC-306",
              kn: "ಸಿ.ಪಿ.ಸಿ-306"
            }, 
            phone: "7760012167" 
          }
        ],
        villages: [
          { en: "Puligal", kn: "ಪುಲಿಗಲ್" },
          { en: "Gollapalli", kn: "ಗೊಲ್ಲಪಲ್ಲಿ" },
          { en: "Udavaripalli", kn: "ಉಡವಾರಿಪಲ್ಲಿ" },
          { en: "Sajjalawaripalli", kn: "ಸಜ್ಜಲವಾರಿಪಲ್ಲಿ" },
          { en: "Sitireddipalli", kn: "ಸಿತಿರೆಡ್ಡಿಪಲ್ಲಿ" },
          { en: "Vaddivandlapalli", kn: "ವಡ್ಡಿವಂಡ್ಲಪಲ್ಲಿ" },
          { en: "Kottur", kn: "ಕೊಟ್ಟೂರು" },
          { en: "Yagavapayalavaripalli", kn: "ಯಾಗವಪಾಯಲವಾರಿಪಲ್ಲಿ" },
          { en: "Digavapayalavaripalli", kn: "ಡಿಗವಪಾಯಲವಾರಿಪಲ್ಲಿ" },
          { en: "Adireddipalli", kn: "ಅಡಿರೆಡ್ಡಿಪಲ್ಲಿ" }
        ],
        supervisor: { 
          name: {
            en: "Sri Srinivasa T",
            kn: "ಶ್ರೀ ಶ್ರೀನಿವಾಸ ಟಿ"
          }, 
          designation: {
            en: "ASI",
            kn: "ಎ.ಎಸ್.ಐ"
          }, 
          phone: "9448771120" 
        }
      },
      {
        number: "4",
        officers: [
          { 
            name: {
              en: "Sri Prabhakar",
              kn: "ಶ್ರೀ ಪ್ರಭಾಕರ್"
            }, 
            designation: {
              en: "CHC-47",
              kn: "ಸಿ.ಎಚ್.ಸಿ-47"
            }, 
            phone: "7022839562" 
          },
          { 
            name: {
              en: "Sri Harish N.M",
              kn: "ಶ್ರೀ ಹರೀಶ್ ಎನ್.ಎಂ"
            }, 
            designation: {
              en: "CPC-563",
              kn: "ಸಿ.ಪಿ.ಸಿ-563"
            }, 
            phone: "7022839562" 
          }
        ],
        villages: [
          { en: "Chakavel", kn: "ಚಕವೇಲ್" },
          { en: "Venkatareddipalli", kn: "ವೆಂಕಟರೆಡ್ಡಿಪಲ್ಲಿ" },
          { en: "Venkatareddipalli Tanda", kn: "ವೆಂಕಟರೆಡ್ಡಿಪಲ್ಲಿ ತಾಂಡಾ" },
          { en: "Maddireddipalli", kn: "ಮಡ್ಡಿರೆಡ್ಡಿಪಲ್ಲಿ" },
          { en: "Papireddipalli", kn: "ಪಾಪಿರೆಡ್ಡಿಪಲ್ಲಿ" },
          { en: "Rajollapalli (Majara)", kn: "ರಾಜೊಲ್ಲಪಲ್ಲಿ (ಮಜಾರಾ)" },
          { en: "Venkateshpalli", kn: "ವೆಂಕಟೇಶಪಲ್ಲಿ" },
          { en: "Maravapalli", kn: "ಮಾರವಪಲ್ಲಿ" }
        ],
        supervisor: { 
          name: {
            en: "Sri Venkateshappa",
            kn: "ಶ್ರೀ ವೆಂಕಟೇಶಪ್ಪ"
          }, 
          designation: {
            en: "ASI",
            kn: "ಎ.ಎಸ್.ಐ"
          }, 
          phone: "9740899276" 
        }
      },
      {
        number: "5",
        officers: [
          { 
            name: {
              en: "Sri Nagaraj",
              kn: "ಶ್ರೀ ನಾಗರಾಜ್"
            }, 
            designation: {
              en: "CHC-152",
              kn: "ಸಿ.ಎಚ್.ಸಿ-152"
            }, 
            phone: "9886144575" 
          },
          { 
            name: {
              en: "Sri Yamanuruppa Hadri",
              kn: "ಶ್ರೀ ಯಮನೂರಪ್ಪ ಹಾದ್ರಿ"
            }, 
            designation: {
              en: "CPC-174",
              kn: "ಸಿ.ಪಿ.ಸಿ-174"
            }, 
            phone: "9902837173" 
          }
        ],
        villages: [
          { en: "Buddhavarapalli", kn: "ಬುದ್ಧವಾರಪಲ್ಲಿ" },
          { en: "Kotampalli", kn: "ಕೋಟಂಪಲ್ಲಿ" },
          { en: "Kondamvarapalli", kn: "ಕೊಂಡಂವಾರಪಲ್ಲಿ" },
          { en: "Dasarivandlapalli", kn: "ದಾಸರಿವಂಡ್ಲಪಲ್ಲಿ" },
          { en: "Manjunatapura", kn: "ಮಂಜುನಾಥಪುರ" },
          { en: "Kurabavandlapalli", kn: "ಕುರಬವಂಡ್ಲಪಲ್ಲಿ" },
          { en: "Gadampalli", kn: "ಗಡಂಪಲ್ಲಿ" },
          { en: "Musaliganalapalli", kn: "ಮುಸಲಿಗನಲಪಲ್ಲಿ" }
        ],
        supervisor: { 
          name: {
            en: "Sri Venkateshappa",
            kn: "ಶ್ರೀ ವೆಂಕಟೇಶಪ್ಪ"
          }, 
          designation: {
            en: "ASI",
            kn: "ಎ.ಎಸ್.ಐ"
          }, 
          phone: "9740899276" 
        }
      },
      {
        number: "6",
        officers: [
          { 
            name: {
              en: "Sri Mallikarjuna",
              kn: "ಶ್ರೀ ಮಲ್ಲಿಕಾರ್ಜುನ"
            }, 
            designation: {
              en: "CHC-239",
              kn: "ಸಿ.ಎಚ್.ಸಿ-239"
            }, 
            phone: "9141541630" 
          },
          { 
            name: {
              en: "Sri Parasappa",
              kn: "ಶ್ರೀ ಪರಸಪ್ಪ"
            }, 
            designation: {
              en: "CPC-176",
              kn: "ಸಿ.ಪಿ.ಸಿ-176"
            }, 
            phone: "7337639246" 
          }
        ],
        villages: [
          { en: "Rascheru", kn: "ರಾಸ್ಚೇರು" },
          { en: "Ramaswamypalli", kn: "ರಾಮಸ್ವಾಮಿಪಲ್ಲಿ" },
          { en: "Narayanapalli", kn: "ನಾರಾಯಣಪಲ್ಲಿ" },
          { en: "Somakalapalli", kn: "ಸೋಮಕಲಪಲ್ಲಿ" },
          { en: "Ugranapalli", kn: "ಉಗ್ರನಪಲ್ಲಿ" },
          { en: "Diguvagollapalli", kn: "ಡಿಗುವಗೊಲ್ಲಪಲ್ಲಿ" },
          { en: "Babenayakanapalli Tanda", kn: "ಬಾಬೆನಾಯಕನಪಲ್ಲಿ ತಾಂಡಾ" },
          { en: "Timmayagarapalli (Majara)", kn: "ತಿಮ್ಮಯಗರಪಲ್ಲಿ (ಮಜಾರಾ)" },
          { en: "Kondoripalli", kn: "ಕೊಂಡೋರಿಪಲ್ಲಿ" }
        ],
        supervisor: { 
          name: {
            en: "Sri Venkateshappa",
            kn: "ಶ್ರೀ ವೆಂಕಟೇಶಪ್ಪ"
          }, 
          designation: {
            en: "ASI",
            kn: "ಎ.ಎಸ್.ಐ"
          }, 
          phone: "9740899276" 
        }
      },
      {
        number: "7",
        officers: [
          { 
            name: {
              en: "Sri Sudhakar",
              kn: "ಶ್ರೀ ಸುಧಾಕರ್"
            }, 
            designation: {
              en: "CHC-202",
              kn: "ಸಿ.ಎಚ್.ಸಿ-202"
            }, 
            phone: "9945502009" 
          },
          { 
            name: {
              en: "Sri Chandrakant",
              kn: "ಶ್ರೀ ಚಂದ್ರಕಾಂತ್"
            }, 
            designation: {
              en: "CPC-204",
              kn: "ಸಿ.ಪಿ.ಸಿ-204"
            }, 
            phone: "9611371783" 
          }
        ],
        villages: [
          { en: "Venkatapura", kn: "ವೆಂಕಟಪುರ" },
          { en: "Nallagutlapalli", kn: "ನಲ್ಲಗುಟ್ಲಪಲ್ಲಿ" },
          { en: "Rajuvandlapalli", kn: "ರಾಜುವಂಡ್ಲಪಲ್ಲಿ" },
          { en: "Mugireddipalli", kn: "ಮುಗಿರೆಡ್ಡಿಪಲ್ಲಿ" },
          { en: "Kottakotavandlapalli", kn: "ಕೊಟ್ಟಕೋಟವಂಡ್ಲಪಲ್ಲಿ" },
          { en: "Jilipigarapalli", kn: "ಜಿಲಿಪಿಗರಪಲ್ಲಿ" },
          { en: "Jilipigarapalli Tanda", kn: "ಜಿಲಿಪಿಗರಪಲ್ಲಿ ತಾಂಡಾ" },
          { en: "Bhattalavarapalli", kn: "ಭಟ್ಟಲವಾರಪಲ್ಲಿ" },
          { en: "Gunturupalli", kn: "ಗುಂಟೂರುಪಲ್ಲಿ" }
        ],
        supervisor: { 
          name: {
            en: "Sri Mustafa",
            kn: "ಶ್ರೀ ಮುಸ್ತಫಾ"
          }, 
          designation: {
            en: "ASI",
            kn: "ಎ.ಎಸ್.ಐ"
          }, 
          phone: "8105869995" 
        }
      },
      {
        number: "8",
        officers: [
          { 
            name: {
              en: "Sri Sriramappa",
              kn: "ಶ್ರೀ ಶ್ರೀರಾಮಪ್ಪ"
            }, 
            designation: {
              en: "CHC-216",
              kn: "ಸಿ.ಎಚ್.ಸಿ-216"
            }, 
            phone: "9901774082" 
          },
          { 
            name: {
              en: "Smt Swapna",
              kn: "ಶ್ರೀಮತಿ ಸ್ವಾಪ್ನಾ"
            }, 
            designation: {
              en: "MPC-595",
              kn: "ಎಂ.ಪಿ.ಸಿ-595"
            }, 
            phone: "8861372370" 
          }
        ],
        villages: [
          { en: "Pasapulavarapalli", kn: "ಪಾಸಪುಲವಾರಪಲ್ಲಿ" },
          { en: "Birangivandlapalli", kn: "ಬಿರಂಗಿವಂಡ್ಲಪಲ್ಲಿ" },
          { en: "Gundlapalli", kn: "ಗುಂಡ್ಲಪಲ್ಲಿ" },
          { en: "Peddaru", kn: "ಪೆಡ್ಡಾರು" },
          { en: "Pemmayagarapalli (Majara)", kn: "ಪೆಮ್ಮಯಗರಪಲ್ಲಿ (ಮಜಾರಾ)" },
          { en: "Palyakere", kn: "ಪಾಲ್ಯಕೆರೆ" },
          { en: "Mandyampalli", kn: "ಮಂಡ್ಯಂಪಲ್ಲಿ" },
          { en: "Banalapalli", kn: "ಬನಲಪಲ್ಲಿ" }
        ],
        supervisor: { 
          name: {
            en: "Sri Mustafa",
            kn: "ಶ್ರೀ ಮುಸ್ತಫಾ"
          }, 
          designation: {
            en: "ASI",
            kn: "ಎ.ಎಸ್.ಐ"
          }, 
          phone: "8105869995" 
        }
      },
      {
        number: "9",
        officers: [
          { 
            name: {
              en: "Sri Somashekharachari",
              kn: "ಶ್ರೀ ಸೋಮಶೇಖರಾಚಾರಿ"
            }, 
            designation: {
              en: "CHC-245",
              kn: "ಸಿ.ಎಚ್.ಸಿ-245"
            }, 
            phone: "8971857781" 
          }
        ],
        villages: [
          { en: "Muddalapalli", kn: "ಮುದ್ದಲಪಲ್ಲಿ" },
          { en: "Jinkapalli", kn: "ಜಿಂಕಪಲ್ಲಿ" },
          { en: "Gollapalli", kn: "ಗೊಲ್ಲಪಲ್ಲಿ" },
          { en: "Ramojipalli", kn: "ರಾಮೋಜಿಪಲ್ಲಿ" },
          { en: "Gaunivarapalli", kn: "ಗೌನಿವಾರಪಲ್ಲಿ" },
          { en: "Yarrayyagarapalli", kn: "ಯರ್ರಾಯ್ಯಗರಪಲ್ಲಿ" },
          { en: "Diguvanettakontapalli", kn: "ಡಿಗುವನೆಟ್ಟಕೊಂಟಪಲ್ಲಿ" },
          { en: "Yaguvanettakuntapalli", kn: "ಯಾಗುವನೆಟ್ಟಕುಂಟಪಲ್ಲಿ" },
          { en: "Doddipalli", kn: "ದೊಡ್ಡಿಪಲ್ಲಿ" }
        ],
        supervisor: { 
          name: {
            en: "Sri Mustafa",
            kn: "ಶ್ರೀ ಮುಸ್ತಫಾ"
          }, 
          designation: {
            en: "ASI",
            kn: "ಎ.ಎಸ್.ಐ"
          }, 
          phone: "8105869995" 
        }
      },
      {
        number: "10",
        officers: [
          { 
            name: {
              en: "Sri Vijay Kumar",
              kn: "ಶ್ರೀ ವಿಜಯ್ ಕುಮಾರ್"
            }, 
            designation: {
              en: "CHC-36",
              kn: "ಸಿ.ಎಚ್.ಸಿ-36"
            }, 
            phone: "9741313093" 
          },
          { 
            name: {
              en: "Sri Mahesh Bhajantri",
              kn: "ಶ್ರೀ ಮಹೇಶ್ ಭಜಂತ್ರಿ"
            }, 
            designation: {
              en: "CPC-74",
              kn: "ಸಿ.ಪಿ.ಸಿ-74"
            }, 
            phone: "8431145353" 
          }
        ],
        villages: [
          { en: "Cheegatigalagutti", kn: "ಚೀಗಟಿಗಲಗುಟ್ಟಿ" },
          { en: "Machanapalli", kn: "ಮಚನಪಲ್ಲಿ" },
          { en: "Abravarapalli", kn: "ಅಬ್ರವಾರಪಲ್ಲಿ" },
          { en: "Kotturupalli", kn: "ಕೊಟ್ಟೂರುಪಲ್ಲಿ" },
          { en: "Gundamvarapalli", kn: "ಗುಂಡಂವಾರಪಲ್ಲಿ" },
          { en: "Peddarajapalli", kn: "ಪೆಡ್ಡರಾಜಪಲ್ಲಿ" },
          { en: "Kuntakindapalli", kn: "ಕುಂಟಕಿಂಡಪಲ್ಲಿ" },
          { en: "Ramojipalli", kn: "ರಾಮೋಜಿಪಲ್ಲಿ" },
          { en: "Gundamvarapalli (Majara)", kn: "ಗುಂಡಂವಾರಪಲ್ಲಿ (ಮಜಾರಾ)" }
        ],
        supervisor: { 
          name: {
            en: "Sri Sanaulla Islam",
            kn: "ಶ್ರೀ ಸನಾಉಲ್ಲಾ ಇಸ್ಲಾಂ"
          }, 
          designation: {
            en: "ASI",
            kn: "ಎ.ಎಸ್.ಐ"
          }, 
          phone: "8073923947" 
        }
      },
      {
        number: "11",
        officers: [
          { 
            name: {
              en: "Sri Manjunath",
              kn: "ಶ್ರೀ ಮಂಜುನಾಥ್"
            }, 
            designation: {
              en: "CHC-38",
              kn: "ಸಿ.ಎಚ್.ಸಿ-38"
            }, 
            phone: "8746956661" 
          },
          { 
            name: {
              en: "Sri Prashant Wali",
              kn: "ಶ್ರೀ ಪ್ರಶಾಂತ್ ವಾಲಿ"
            }, 
            designation: {
              en: "CPC-459",
              kn: "ಸಿ.ಪಿ.ಸಿ-459"
            }, 
            phone: "7899074511" 
          }
        ],
        villages: [
          { en: "Kuntlapalli", kn: "ಕುಂಟ್ಲಪಲ್ಲಿ" },
          { en: "Bhattalapalli", kn: "ಭಟ್ಟಲಪಲ್ಲಿ" },
          { en: "Polanayakanapalli", kn: "ಪೊಲನಾಯಕನಪಲ್ಲಿ" },
          { en: "Budidagaddapalli", kn: "ಬುಡಿಡಗಡ್ಡಪಲ್ಲಿ" },
          { en: "Achaganapalli", kn: "ಅಚಗನಪಲ್ಲಿ" },
          { en: "Motakapalli", kn: "ಮೋಟಕಪಲ್ಲಿ" },
          { en: "Narasapura", kn: "ನರಸಪುರ" },
          { en: "Bommasandra", kn: "ಬೊಮ್ಮಸಂದ್ರ" }
        ],
        supervisor: { 
          name: {
            en: "Sri Sanaulla Islam",
            kn: "ಶ್ರೀ ಸನಾಉಲ್ಲಾ ಇಸ್ಲಾಂ"
          }, 
          designation: {
            en: "ASI",
            kn: "ಎ.ಎಸ್.ಐ"
          }, 
          phone: "8073923947" 
        }
      },
      {
        number: "12",
        officers: [
          { 
            name: {
              en: "Sri Nandan Kumar N",
              kn: "ಶ್ರೀ ನಂದನ್ ಕುಮಾರ್ ಎನ್"
            }, 
            designation: {
              en: "CPC-316",
              kn: "ಸಿ.ಪಿ.ಸಿ-316"
            }, 
            phone: "7259643872" 
          },
          { 
            name: {
              en: "Sri Srinivasa N",
              kn: "ಶ್ರೀ ಶ್ರೀನಿವಾಸ ಎನ್"
            }, 
            designation: {
              en: "CPC-595",
              kn: "ಸಿ.ಪಿ.ಸಿ-595"
            }, 
            phone: "6360431774" 
          }
        ],
        villages: [
          { en: "Kallapparallapalli", kn: "ಕಲ್ಲಪ್ಪರಲ್ಲಪಲ್ಲಿ" },
          { en: "Yaguvamarappagarpalli", kn: "ಯಾಗುವಮರಪ್ಪಗರ್ಪಲ್ಲಿ" },
          { en: "Diguvamarappagarpalli", kn: "ಡಿಗುವಮರಪ್ಪಗರ್ಪಲ್ಲಿ" },
          { en: "Dugginayakanapalli", kn: "ಡುಗ್ಗಿನಾಯಕನಪಲ್ಲಿ" },
          { en: "Gummalapalli", kn: "ಗುಮ್ಮಲಪಲ್ಲಿ" },
          { en: "Peddanagarlu", kn: "ಪೆಡ್ಡನಗರ್ಲು" },
          { en: "Poolakuntlapalli", kn: "ಪೂಲಕುಂಟ್ಲಪಲ್ಲಿ" }
        ],
        supervisor: { 
          name: {
            en: "Sri Sanaulla Islam",
            kn: "ಶ್ರೀ ಸನಾಉಲ್ಲಾ ಇಸ್ಲಾಂ"
          }, 
          designation: {
            en: "ASI",
            kn: "ಎ.ಎಸ್.ಐ"
          }, 
          phone: "8073923947" 
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