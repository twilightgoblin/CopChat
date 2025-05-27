import React from 'react';

/**
 * Emergency assistance options
 * @type {import('../../components/chatbot/types').Option}
 */
export const emergencyOptions = {
  label: "Emergency Assistance / ತುರ್ತು ಸಹಾಯ",
  value: "emergency",
  keywords: ["emergency", "help", "urgent", "crisis", "ತುರ್ತು", "ಸಹಾಯ"],
  subOptions: [
    {
      label: "Police Emergency (112) / ಪೊಲೀಸ್ ತುರ್ತು ಸಹಾಯ (112)",
      value: "police",
      keywords: ["police", "crime", "danger", "ಪೊಲೀಸ್", "ಅಪರಾಧ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Emergency Number / ತುರ್ತು ಸಂಖ್ಯೆ: 112"),
        React.createElement('p', { className: "text-gray-600" }, "Replaces 100 / 100 ನ ಬದಲಿಗೆ"),
        React.createElement('p', { className: "font-medium" }, "What It Offers / ಒದಗಿಸುವ ಸೇವೆ:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Immediate police assistance / ತುರ್ತು ಪೊಲೀಸ್ ಸಹಾಯ"),
          React.createElement('li', null, "24/7 emergency response / 24/7 ತುರ್ತು ಪ್ರತಿಕ್ರಿಯೆ")
        )
      ),
    },
    {
      label: "Fire Brigade (101) / ಅಗ್ನಿಶಾಮಕ ದಳ (101)",
      value: "fire",
      keywords: ["fire", "burn", "flame", "ಬೆಂಕಿ", "ಅಗ್ನಿ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Emergency Number / ತುರ್ತು ಸಂಖ್ಯೆ: 101"),
        React.createElement('p', { className: "text-gray-600" }, "Fire emergencies / ಬೆಂಕಿ ಅಪಘಾತಗಳಿಗೆ"),
        React.createElement('p', { className: "font-medium" }, "What It Offers / ಒದಗಿಸುವ ಸೇವೆ:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Fire emergency response / ಬೆಂಕಿ ತುರ್ತು ಪ್ರತಿಕ್ರಿಯೆ"),
          React.createElement('li', null, "Rescue operations / ರಕ್ಷಣಾ ಕಾರ್ಯಾಚರಣೆಗಳು")
        )
      ),
    },
    {
      label: "Ambulance (108) / ಆಂಬ್ಯುಲೆನ್ಸ್ (108)",
      value: "medical",
      keywords: ["medical", "ambulance", "health", "ವೈದ್ಯಕೀಯ", "ಆರೋಗ್ಯ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Emergency Number / ತುರ್ತು ಸಂಖ್ಯೆ: 108"),
        React.createElement('p', { className: "text-gray-600" }, "Medical emergencies / ತುರ್ತು ವೈದ್ಯಕೀಯ ಸಹಾಯ"),
        React.createElement('p', { className: "font-medium" }, "What It Offers / ಒದಗಿಸುವ ಸೇವೆ:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Emergency medical transport / ತುರ್ತು ವೈದ್ಯಕೀಯ ಸಾರಿಗೆ"),
          React.createElement('li', null, "24/7 medical assistance / 24/7 ವೈದ್ಯಕೀಯ ಸಹಾಯ")
        )
      ),
    },
    {
      label: "Women's Helpline (1091) / ಮಹಿಳಾ ಸಹಾಯವಾಣಿ (1091)",
      value: "women",
      keywords: ["women", "helpline", "safety", "ಮಹಿಳಾ", "ಸುರಕ್ಷತೆ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Emergency Number / ತುರ್ತು ಸಂಖ್ಯೆ: 1091"),
        React.createElement('p', { className: "text-gray-600" }, "For women in distress / ಸಂಕಷ್ಟದಲ್ಲಿರುವ ಮಹಿಳೆಯರಿಗಾಗಿ"),
        React.createElement('p', { className: "font-medium" }, "What It Offers / ಒದಗಿಸುವ ಸೇವೆ:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Women's safety support / ಮಹಿಳಾ ಸುರಕ್ಷತಾ ಬೆಂಬಲ"),
          React.createElement('li', null, "24/7 assistance / 24/7 ಸಹಾಯ")
        )
      ),
    },
    {
      label: "Child Helpline (1098) / ಮಕ್ಕಳ ಸಹಾಯವಾಣಿ (1098)",
      value: "child",
      keywords: ["child", "protection", "safety", "ಮಕ್ಕಳ", "ರಕ್ಷಣೆ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Emergency Number / ತುರ್ತು ಸಂಖ್ಯೆ: 1098"),
        React.createElement('p', { className: "text-gray-600" }, "For child protection / ಮಕ್ಕಳ ರಕ್ಷಣೆಗಾಗಿ"),
        React.createElement('p', { className: "font-medium" }, "What It Offers / ಒದಗಿಸುವ ಸೇವೆ:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Child protection services / ಮಕ್ಕಳ ರಕ್ಷಣಾ ಸೇವೆಗಳು"),
          React.createElement('li', null, "24/7 support / 24/7 ಬೆಂಬಲ")
        )
      ),
    },
    {
      label: "Highway Patrol (1033) / ಹೆದ್ದಾರಿ ಪ್ಯಾಟ್ರೋಲ್ (1033)",
      value: "highway",
      keywords: ["highway", "accident", "road", "ಹೆದ್ದಾರಿ", "ಅಪಘಾತ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Emergency Number / ತುರ್ತು ಸಂಖ್ಯೆ: 1033"),
        React.createElement('p', { className: "text-gray-600" }, "Highway emergencies / ಹೆದ್ದಾರಿ ಅಪಘಾತಗಳಿಗೆ"),
        React.createElement('p', { className: "font-medium" }, "What It Offers / ಒದಗಿಸುವ ಸೇವೆ:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Highway accident response / ಹೆದ್ದಾರಿ ಅಪಘಾತ ಪ್ರತಿಕ್ರಿಯೆ"),
          React.createElement('li', null, "Road safety assistance / ರಸ್ತೆ ಸುರಕ್ಷತಾ ಸಹಾಯ")
        )
      ),
    },
    {
      label: "Cybercrime Helpline (1930) / ಸೈಬರ್ ಕ್ರೈಂ ಸಹಾಯವಾಣಿ (1930)",
      value: "cybercrime",
      keywords: ["cyber", "online", "fraud", "ಸೈಬರ್", "ಮೋಸ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Emergency Number / ತುರ್ತು ಸಂಖ್ಯೆ: 1930"),
        React.createElement('p', { className: "text-gray-600" }, "For online fraud / ಆನ್‌ಲೈನ್ ಮೋಸಗಳಿಗೆ"),
        React.createElement('p', { className: "font-medium" }, "What It Offers / ಒದಗಿಸುವ ಸೇವೆ:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Cybercrime reporting / ಸೈಬರ್ ಅಪರಾಧ ವರದಿ"),
          React.createElement('li', null, "Online fraud assistance / ಆನ್‌ಲೈನ್ ಮೋಸ ಸಹಾಯ")
        )
      ),
    },
    {
      label: "Useful Portals & Apps / ಉಪಯುಕ್ತ ಪೋರ್ಟಲ್‌ಗಳು ಮತ್ತು ಆ್ಯಪ್‌ಗಳು",
      value: "portals",
      keywords: ["portals", "apps", "online", "ಪೋರ್ಟಲ್", "ಆ್ಯಪ್"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Available Resources / ಲಭ್ಯವಿರುವ ಸಂಪನ್ಮೂಲಗಳು:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Karnataka Police Seva App / ಕರ್ನಾಟಕ ಪೊಲೀಸ್ ಸೇವಾ ಆ್ಯಪ್"),
          React.createElement('li', null, "Police Citizen Portal / ಪೊಲೀಸ್ ಸೇವಾ ಪೋರ್ಟಲ್"),
          React.createElement('li', null, 
            React.createElement('a', { href: "https://policeseva.ksp.gov.in", className: "text-blue-600 hover:underline" },
              "Visit Portal / ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ"
            )
          )
        )
      ),
    }
  ],
}; 