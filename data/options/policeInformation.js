import React from 'react';

/**
 * Police information options
 * @type {import('../../components/chatbot/types').Option}
 */
export const policeInformationOptions = {
  label: "Police Information / ಪೊಲೀಸ್ ಮಾಹಿತಿ",
  value: "police-information",
  keywords: ["police", "information", "station", "jurisdiction", "ಪೊಲೀಸ್", "ಮಾಹಿತಿ", "ಠಾಣೆ", "ಅಧಿಕಾರ ವ್ಯಾಪ್ತಿ"],
  subOptions: [
    {
      label: "Police Station Information / ಪೊಲೀಸ್ ಠಾಣೆ ಮಾಹಿತಿ",
      value: "station",
      keywords: ["station", "police", "contact", "address", "ಠಾಣೆ", "ಪೊಲೀಸ್", "ಸಂಪರ್ಕ", "ವಿಳಾಸ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "What It Offers / ಏನು ಒದಗಿಸುತ್ತದೆ:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Contact details of police stations / ಪೊಲೀಸ್ ಠಾಣೆಗಳ ಸಂಪರ್ಕ ವಿವರಗಳು"),
          React.createElement('li', null, "Address and jurisdiction information / ವಿಳಾಸ ಮತ್ತು ಅಧಿಕಾರ ವ್ಯಾಪ್ತಿ ಮಾಹಿತಿ")
        ),
        React.createElement('p', { className: "font-medium" }, "How to Use / ಹೇಗೆ ಬಳಸುವುದು:"),
        React.createElement('ol', { className: "list-decimal pl-4 space-y-2" },
          React.createElement('li', null,
            "Provide the following details / ಈ ಕೆಳಗಿನ ವಿವರಗಳನ್ನು ನೀಡಿ:",
            React.createElement('ul', { className: "list-disc pl-4 space-y-1" },
              React.createElement('li', null, "Name of the police station / ಪೊಲೀಸ್ ಠಾಣೆಯ ಹೆಸರು"),
              React.createElement('li', null, "Location or area of interest / ಸ್ಥಳ ಅಥವಾ ಆಸಕ್ತಿಯ ಪ್ರದೇಶ")
            )
          ),
          React.createElement('li', null,
            React.createElement('a', {
              href: "/nearest-station",
              className: "text-blue-600 hover:underline"
            }, "Find your nearest police station / ನಿಮ್ಮ ಹತ್ತಿರದ ಪೊಲೀಸ್ ಠಾಣೆಯನ್ನು ಹುಡುಕಿ")
          ),
          React.createElement('li', null, "Visit the station or contact them for assistance / ಸಹಾಯಕ್ಕಾಗಿ ಠಾಣೆಗೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ಸಂಪರ್ಕಿಸಿ")
        )
      ),
    },
    {
      label: "Beat Police Information / ಬೀಟ್ ಪೊಲೀಸ್ ಮಾಹಿತಿ",
      value: "beat",
      keywords: ["beat", "police", "officer", "patrol", "ಬೀಟ್", "ಪೊಲೀಸ್", "ಅಧಿಕಾರಿ", "ಗಸ್ತು"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "What It Offers:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Information about beat police officers"),
          React.createElement('li', null, "Contact details and patrol areas")
        ),
        React.createElement('p', { className: "font-medium" }, "How to Use:"),
        React.createElement('ol', { className: "list-decimal pl-4 space-y-2" },
          React.createElement('li', null,
            "Provide the following details:",
            React.createElement('ul', { className: "list-disc pl-4 space-y-1" },
              React.createElement('li', null, "Your location or area of interest"),
              React.createElement('li', null, "Specific beat officer's name (if known)")
            )
          ),
          React.createElement('li', null,
            React.createElement('a', {
              href: "/beat-police",
              className: "text-blue-600 hover:underline"
            }, "Find your beat police officer")
          ),
          React.createElement('li', null, "Contact the beat officer for local assistance")
        )
      ),
    },
    {
      label: "Police Jurisdiction Map / ಪೊಲೀಸ್ ಅಧಿಕಾರ ವ್ಯಾಪ್ತಿ ನಕ್ಷೆ",
      value: "jurisdiction",
      keywords: ["jurisdiction", "map", "area", "boundary", "ಅಧಿಕಾರ ವ್ಯಾಪ್ತಿ", "ನಕ್ಷೆ", "ಪ್ರದೇಶ", "ಗಡಿ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "What It Offers / ಏನು ಒದಗಿಸುತ್ತದೆ:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Map showing police station jurisdictions / ಪೊಲೀಸ್ ಠಾಣೆಗಳ ಅಧಿಕಾರ ವ್ಯಾಪ್ತಿಯನ್ನು ತೋರಿಸುವ ನಕ್ಷೆ"),
          React.createElement('li', null, "Boundary information for each station / ಪ್ರತಿ ಠಾಣೆಗೆ ಗಡಿ ಮಾಹಿತಿ")
        ),
        React.createElement('p', { className: "font-medium" }, "How to Use / ಹೇಗೆ ಬಳಸುವುದು:"),
        React.createElement('ol', { className: "list-decimal pl-4 space-y-2" },
          React.createElement('li', null,
            React.createElement('a', {
              href: "https://ksp.karnataka.gov.in/pslocator/en ",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-blue-600 hover:underline"
            }, "Access the jurisdiction map / ಅಧಿಕಾರ ವ್ಯಾಪ್ತಿ ನಕ್ಷೆಯನ್ನು ಪ್ರವೇಶಿಸಿ")
          ),
          React.createElement('li', null, "Locate your area of interest on the map / ನಕ್ಷೆಯಲ್ಲಿ ನಿಮ್ಮ ಆಸಕ್ತಿಯ ಪ್ರದೇಶವನ್ನು ಗುರುತಿಸಿ"),
          React.createElement('li', null, "Identify the responsible police station / ಜವಾಬ್ದಾರಿ ಪೊಲೀಸ್ ಠಾಣೆಯನ್ನು ಗುರುತಿಸಿ")
        )
      ),
    },
  ],
}; 