import BeatPoliceLayout from '../BeatPoliceLayout';

const manchenahalliData = {
  talukName: {
    en: "Manchenahalli",
    kn: "ಮಂಚೆನಹಳ್ಳಿ"
  },
  supervisingOfficers: [
    {
      beats: "1,2",
      name: {
        en: "Sri. Ravi Kumar",
        kn: "ಶ್ರೀ. ರವಿ ಕುಮಾರ್"
      },
      designation: {
        en: "J.C.L",
        kn: "ಜೆ.ಸಿ.ಎಲ್"
      },
      phone: "9611888732"
    },
    {
      beats: "3,4",
      name: {
        en: "Sri. Sridhar",
        kn: "ಶ್ರೀ. ಶ್ರೀಧರ್"
      },
      designation: {
        en: "J.C.L",
        kn: "ಜೆ.ಸಿ.ಎಲ್"
      },
      phone: "9164656623"
    },
    {
      beats: "5,6",
      name: {
        en: "Sri. Adarsh",
        kn: "ಶ್ರೀ. ಆದರ್ಶ್"
      },
      designation: {
        en: "J.C.L",
        kn: "ಜೆ.ಸಿ.ಎಲ್"
      },
      phone: "944820091"
    },
    {
      beats: "7,8,9",
      name: {
        en: "Sri. Amara Gowda",
        kn: "ಶ್ರೀ. ಅಮರ ಗೌಡ"
      },
      designation: {
        en: "J.C.L",
        kn: "ಜೆ.ಸಿ.ಎಲ್"
      },
      phone: "9449668763"
    }
  ],
  beatDetails: [
    {
      number: 1,
      villages: [
        {
          en: "Adagal",
          kn: "ಆಡಗಲ್"
        },
        {
          en: "Bhadra",
          kn: "ಭದ್ರ"
        }
      ],
      officers: [
        {
          name: {
            en: "Sri. Ravi Kumar",
            kn: "ಶ್ರೀ. ರವಿ ಕುಮಾರ್"
          },
          designation: {
            en: "J.C.L",
            kn: "ಜೆ.ಸಿ.ಎಲ್"
          },
          phone: "9611888732"
        }
      ],
      supervisor: {
        name: {
          en: "Sri. Ravi Kumar",
          kn: "ಶ್ರೀ. ರವಿ ಕುಮಾರ್"
        },
        designation: {
          en: "J.C.L",
          kn: "ಜೆ.ಸಿ.ಎಲ್"
        },
        phone: "9611888732"
      }
    },
    {
      number: 2,
      villages: [
        {
          en: "Bhadra",
          kn: "ಭದ್ರ"
        },
        {
          en: "Sagara",
          kn: "ಸಾಗರ"
        }
      ],
      officers: [
        {
          name: {
            en: "Sri. Ravi Kumar",
            kn: "ಶ್ರೀ. ರವಿ ಕುಮಾರ್"
          },
          designation: {
            en: "J.C.L",
            kn: "ಜೆ.ಸಿ.ಎಲ್"
          },
          phone: "9611888732"
        }
      ],
      supervisor: {
        name: {
          en: "Sri. Ravi Kumar",
          kn: "ಶ್ರೀ. ರವಿ ಕುಮಾರ್"
        },
        designation: {
          en: "J.C.L",
          kn: "ಜೆ.ಸಿ.ಎಲ್"
        },
        phone: "9611888732"
      }
    },
    {
      number: 3,
      villages: [
        {
          en: "Sagara",
          kn: "ಸಾಗರ"
        },
        {
          en: "Nagar",
          kn: "ನಗರ"
        }
      ],
      officers: [
        {
          name: {
            en: "Sri. Sridhar",
            kn: "ಶ್ರೀ. ಶ್ರೀಧರ್"
          },
          designation: {
            en: "J.C.L",
            kn: "ಜೆ.ಸಿ.ಎಲ್"
          },
          phone: "9164656623"
        }
      ],
      supervisor: {
        name: {
          en: "Sri. Sridhar",
          kn: "ಶ್ರೀ. ಶ್ರೀಧರ್"
        },
        designation: {
          en: "J.C.L",
          kn: "ಜೆ.ಸಿ.ಎಲ್"
        },
        phone: "9164656623"
      }
    },
    {
      number: 4,
      villages: [
        {
          en: "Nagar",
          kn: "ನಗರ"
        },
        {
          en: "Badagal",
          kn: "ಬಡಗಲ್"
        }
      ],
      officers: [
        {
          name: {
            en: "Sri. Sridhar",
            kn: "ಶ್ರೀ. ಶ್ರೀಧರ್"
          },
          designation: {
            en: "J.C.L",
            kn: "ಜೆ.ಸಿ.ಎಲ್"
          },
          phone: "9164656623"
        }
      ],
      supervisor: {
        name: {
          en: "Sri. Sridhar",
          kn: "ಶ್ರೀ. ಶ್ರೀಧರ್"
        },
        designation: {
          en: "J.C.L",
          kn: "ಜೆ.ಸಿ.ಎಲ್"
        },
        phone: "9164656623"
      }
    },
    {
      number: 5,
      villages: [
        {
          en: "Badagal",
          kn: "ಬಡಗಲ್"
        },
        {
          en: "Manchenahalli",
          kn: "ಮಂಚೆನಹಳ್ಳಿ"
        }
      ],
      officers: [
        {
          name: {
            en: "Sri. Adarsh",
            kn: "ಶ್ರೀ. ಆದರ್ಶ್"
          },
          designation: {
            en: "J.C.L",
            kn: "ಜೆ.ಸಿ.ಎಲ್"
          },
          phone: "944820091"
        }
      ],
      supervisor: {
        name: {
          en: "Sri. Adarsh",
          kn: "ಶ್ರೀ. ಆದರ್ಶ್"
        },
        designation: {
          en: "J.C.L",
          kn: "ಜೆ.ಸಿ.ಎಲ್"
        },
        phone: "944820091"
      }
    },
    {
      number: 6,
      villages: [
        {
          en: "Manchenahalli",
          kn: "ಮಂಚೆನಹಳ್ಳಿ"
        },
        {
          en: "Hosahalli",
          kn: "ಹೊಸಹಳ್ಳಿ"
        }
      ],
      officers: [
        {
          name: {
            en: "Sri. Adarsh",
            kn: "ಶ್ರೀ. ಆದರ್ಶ್"
          },
          designation: {
            en: "J.C.L",
            kn: "ಜೆ.ಸಿ.ಎಲ್"
          },
          phone: "944820091"
        }
      ],
      supervisor: {
        name: {
          en: "Sri. Adarsh",
          kn: "ಶ್ರೀ. ಆದರ್ಶ್"
        },
        designation: {
          en: "J.C.L",
          kn: "ಜೆ.ಸಿ.ಎಲ್"
        },
        phone: "944820091"
      }
    },
    {
      number: 7,
      villages: [
        {
          en: "Hosahalli",
          kn: "ಹೊಸಹಳ್ಳಿ"
        },
        {
          en: "Kallur",
          kn: "ಕಲ್ಲೂರು"
        }
      ],
      officers: [
        {
          name: {
            en: "Sri. Amara Gowda",
            kn: "ಶ್ರೀ. ಅಮರ ಗೌಡ"
          },
          designation: {
            en: "J.C.L",
            kn: "ಜೆ.ಸಿ.ಎಲ್"
          },
          phone: "9449668763"
        }
      ],
      supervisor: {
        name: {
          en: "Sri. Amara Gowda",
          kn: "ಶ್ರೀ. ಅಮರ ಗೌಡ"
        },
        designation: {
          en: "J.C.L",
          kn: "ಜೆ.ಸಿ.ಎಲ್"
        },
        phone: "9449668763"
      }
    },
    {
      number: 8,
      villages: [
        {
          en: "Kallur",
          kn: "ಕಲ್ಲೂರು"
        },
        {
          en: "Gadag",
          kn: "ಗದಗ"
        }
      ],
      officers: [
        {
          name: {
            en: "Sri. Amara Gowda",
            kn: "ಶ್ರೀ. ಅಮರ ಗೌಡ"
          },
          designation: {
            en: "J.C.L",
            kn: "ಜೆ.ಸಿ.ಎಲ್"
          },
          phone: "9449668763"
        }
      ],
      supervisor: {
        name: {
          en: "Sri. Amara Gowda",
          kn: "ಶ್ರೀ. ಅಮರ ಗೌಡ"
        },
        designation: {
          en: "J.C.L",
          kn: "ಜೆ.ಸಿ.ಎಲ್"
        },
        phone: "9449668763"
      }
    },
    {
      number: 9,
      villages: [
        {
          en: "Gadag",
          kn: "ಗದಗ"
        },
        {
          en: "Adagal",
          kn: "ಆಡಗಲ್"
        }
      ],
      officers: [
        {
          name: {
            en: "Sri. Amara Gowda",
            kn: "ಶ್ರೀ. ಅಮರ ಗೌಡ"
          },
          designation: {
            en: "J.C.L",
            kn: "ಜೆ.ಸಿ.ಎಲ್"
          },
          phone: "9449668763"
        }
      ]
    }
  ]
};

export default function ManchenahalliPage() {
  return <BeatPoliceLayout 
    talukName={manchenahalliData.talukName}
    beatData={manchenahalliData}
  />;
} 