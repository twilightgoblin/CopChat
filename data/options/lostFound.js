import React from 'react';

/**
 * Lost and Found options
 * @type {import('../../components/chatbot/types').Option}
 */
export const lostFoundOptions = {
  label: "Lost & Found / ನಷ್ಟ ಮತ್ತು ಕಂಡುಹಿಡಿಯುವಿಕೆ",
  value: "lostFound",
  keywords: ["lost", "found", "missing", "recover", "item", "ನಷ್ಟ", "ಕಂಡುಹಿಡಿಯುವಿಕೆ", "ಕಾಣೆಯಾಗಿದೆ"],
  subOptions: [
    {
      label: "Report Lost Item / ನಷ್ಟವಾದ ವಸ್ತುವನ್ನು ವರದಿ ಮಾಡಿ",
      value: "reportLost",
      keywords: ["lost", "missing", "report", "file", "ನಷ್ಟ", "ವರದಿ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "How to Report Lost Items / ನಷ್ಟವಾದ ವಸ್ತುಗಳನ್ನು ವರದಿ ಮಾಡುವ ವಿಧಾನ:"),
        React.createElement('ol', { className: "list-decimal pl-4 space-y-2" },
          React.createElement('li', null, 
            React.createElement('div', null,
              "Visit KSP e-Lost & Found Portal / ಕೆಎಸ್ಪಿ ಇ-ನಷ್ಟ ಮತ್ತು ಕಂಡುಹಿಡಿಯುವ ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ: ",
              React.createElement('a', {
                href: "https://ksp.karnataka.gov.in/elost/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "KSP e-Lost & Found Portal / ಕೆಎಸ್ಪಿ ಇ-ನಷ್ಟ ಮತ್ತು ಕಂಡುಹಿಡಿಯುವ ಪೋರ್ಟಲ್")
            )
          ),
          React.createElement('li', null, 
            React.createElement('div', null,
              "For lost mobile phones, visit CEIR Portal / ಕಳೆದುಹೋದ ಮೊಬೈಲ್ ಫೋನ್‌ಗಳಿಗಾಗಿ, CEIR ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ: ",
              React.createElement('a', {
                href: "https://ceir.karnataka.gov.in/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "CEIR Portal / CEIR ಪೋರ್ಟಲ್")
            )
          ),
          React.createElement('li', null, "Login to the portal / ಪೋರ್ಟಲ್‌ಗೆ ಲಾಗಿನ್ ಮಾಡಿ"),
          React.createElement('li', null, "Fill out the lost item form / ನಷ್ಟವಾದ ವಸ್ತುವಿನ ಫಾರ್ಮ್‌ನಲ್ಲಿ ತುಂಬಿ"),
          React.createElement('li', null, "Collect Form 76A acknowledgment / ಫಾರ್ಮ್ 76A ಅಂಗೀಕಾರ ಸಂಗ್ರಹಿಸಿ")
        ),
        React.createElement('p', { className: "font-medium mt-4" }, "Required Information / ಅಗತ್ಯ ಮಾಹಿತಿ:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Item description / ವಸ್ತುವಿನ ವಿವರಣೆ"),
          React.createElement('li', null, "Date and location of loss / ನಷ್ಟದ ದಿನಾಂಕ ಮತ್ತು ಸ್ಥಳ"),
          React.createElement('li', null, "Your contact details / ನಿಮ್ಮ ಸಂಪರ್ಕ ವಿವರಗಳು"),
          React.createElement('li', null, "Any identifying marks/features / ಗುರುತಿಸುವ ಗುರುತುಗಳು/ವೈಶಿಷ್ಟ್ಯಗಳು")
        ),
        React.createElement('p', { className: "text-gray-600 italic" }, "Note: This is not an FIR / ಸೂಚನೆ: ಇದು FIR ಅಲ್ಲ")
      ),
    },
    {
      label: "Report Found Item / ಕಂಡುಹಿಡಿದ ವಸ್ತುವನ್ನು ವರದಿ ಮಾಡಿ",
      value: "reportFound",
      keywords: ["found", "discover", "submit", "turn in", "ಕಂಡುಹಿಡಿದ", "ಸಲ್ಲಿಸಿ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "How to Report Found Items / ಕಂಡುಹಿಡಿದ ವಸ್ತುಗಳನ್ನು ವರದಿ ಮಾಡುವ ವಿಧಾನ:"),
        React.createElement('ol', { className: "list-decimal pl-4 space-y-2" },
          React.createElement('li', null, 
            React.createElement('div', null,
              "Visit KSP e-Lost & Found Portal / ಕೆಎಸ್ಪಿ ಇ-ನಷ್ಟ ಮತ್ತು ಕಂಡುಹಿಡಿಯುವ ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ: ",
              React.createElement('a', {
                href: "https://ksp.karnataka.gov.in/elost/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "KSP e-Lost & Found Portal / ಕೆಎಸ್ಪಿ ಇ-ನಷ್ಟ ಮತ್ತು ಕಂಡುಹಿಡಿಯುವ ಪೋರ್ಟಲ್")
            )
          ),
          React.createElement('li', null, 
            React.createElement('div', null,
              "For found mobile phones, visit CEIR Portal / ಕಂಡುಹಿಡಿದ ಮೊಬೈಲ್ ಫೋನ್‌ಗಳಿಗಾಗಿ, CEIR ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ: ",
              React.createElement('a', {
                href: "https://ceir.karnataka.gov.in/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "CEIR Portal / CEIR ಪೋರ್ಟಲ್")
            )
          ),
          React.createElement('li', null, "Login to the portal / ಪೋರ್ಟಲ್‌ಗೆ ಲಾಗಿನ್ ಮಾಡಿ"),
          React.createElement('li', null, "Fill out the found item form / ಕಂಡುಹಿಡಿದ ವಸ್ತುವಿನ ಫಾರ್ಮ್‌ನಲ್ಲಿ ತುಂಬಿ"),
          React.createElement('li', null, "Get acknowledgment receipt / ಅಂಗೀಕಾರ ರಸೀದಿ ಪಡೆಯಿರಿ")
        ),
        React.createElement('p', { className: "font-medium mt-4" }, "Important Notes / ಮುಖ್ಯ ಸೂಚನೆಗಳು:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Don't tamper with found items / ಕಂಡುಹಿಡಿದ ವಸ್ತುಗಳನ್ನು ಹಾಳುಮಾಡಬೇಡಿ"),
          React.createElement('li', null, "Report immediately / ತಕ್ಷಣ ವರದಿ ಮಾಡಿ"),
          React.createElement('li', null, "Provide accurate location details / ನಿಖರವಾದ ಸ್ಥಳ ವಿವರಗಳನ್ನು ನೀಡಿ"),
          React.createElement('li', null, "Your contact information is optional / ನಿಮ್ಮ ಸಂಪರ್ಕ ಮಾಹಿತಿ ಐಚ್ಛಿಕವಾಗಿದೆ")
        )
      ),
    },
    {
      label: "Check Lost & Found Database / ನಷ್ಟ ಮತ್ತು ಕಂಡುಹಿಡಿಯುವಿಕೆ ಡೇಟಾಬೇಸ್ ಪರಿಶೀಲಿಸಿ",
      value: "checkDatabase",
      keywords: ["search", "database", "check", "find", "ಹುಡುಕಿ", "ಡೇಟಾಬೇಸ್"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "How to Search Lost & Found Items / ನಷ್ಟ ಮತ್ತು ಕಂಡುಹಿಡಿದ ವಸ್ತುಗಳನ್ನು ಹುಡುಕುವ ವಿಧಾನ:"),
        React.createElement('ol', { className: "list-decimal pl-4 space-y-2" },
          React.createElement('li', null, 
            React.createElement('div', null,
              "Visit KSP e-Lost & Found Portal / ಕೆಎಸ್ಪಿ ಇ-ನಷ್ಟ ಮತ್ತು ಕಂಡುಹಿಡಿಯುವ ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ: ",
              React.createElement('a', {
                href: "https://ksp.karnataka.gov.in/elost/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "KSP e-Lost & Found Portal / ಕೆಎಸ್ಪಿ ಇ-ನಷ್ಟ ಮತ್ತು ಕಂಡುಹಿಡಿಯುವ ಪೋರ್ಟಲ್")
            )
          ),
          React.createElement('li', null, 
            React.createElement('div', null,
              "For mobile phones, check CEIR Portal / ಮೊಬೈಲ್ ಫೋನ್‌ಗಳಿಗಾಗಿ, CEIR ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿ: ",
              React.createElement('a', {
                href: "https://ceir.karnataka.gov.in/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "CEIR Portal / CEIR ಪೋರ್ಟಲ್")
            )
          ),
          React.createElement('li', null, "Go to Lost & Found section / ನಷ್ಟ ಮತ್ತು ಕಂಡುಹಿಡಿಯುವಿಕೆ ವಿಭಾಗಕ್ಕೆ ಹೋಗಿ"),
          React.createElement('li', null, "Enter item details/description / ವಸ್ತುವಿನ ವಿವರಗಳು/ವಿವರಣೆಯನ್ನು ನಮೂದಿಸಿ"),
          React.createElement('li', null, "Check matching entries / ಹೊಂದಿಕೆಯಾಗುವ ನಮೂದುಗಳನ್ನು ಪರಿಶೀಲಿಸಿ")
        ),
        React.createElement('p', { className: "font-medium mt-4" }, "Search Tips / ಹುಡುಕಾಟ ಸಲಹೆಗಳು:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Use specific keywords / ನಿರ್ದಿಷ್ಟ ಕೀವರ್ಡ್‌ಗಳನ್ನು ಬಳಸಿ"),
          React.createElement('li', null, "Check regularly for updates / ನವೀಕರಣಗಳಿಗಾಗಿ ನಿಯಮಿತವಾಗಿ ಪರಿಶೀಲಿಸಿ"),
          React.createElement('li', null, "Filter by date and location / ದಿನಾಂಕ ಮತ್ತು ಸ್ಥಳದಿಂದ ಫಿಲ್ಟರ್ ಮಾಡಿ"),
          React.createElement('li', null, "Contact if match found / ಹೊಂದಿಕೆ ಕಂಡುಬಂದರೆ ಸಂಪರ್ಕಿಸಿ")
        )
      ),
    },
    {
      label: "Claim Process / ಹಕ್ಕು ಪ್ರಕ್ರಿಯೆ",
      value: "claim",
      keywords: ["claim", "recover", "retrieve", "collect", "ಹಕ್ಕು", "ಪಡೆಯಿರಿ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "How to Claim Found Items / ಕಂಡುಹಿಡಿದ ವಸ್ತುಗಳನ್ನು ಹಕ್ಕು ಪಡೆಯುವ ವಿಧಾನ:"),
        React.createElement('ol', { className: "list-decimal pl-4 space-y-2" },
          React.createElement('li', null, 
            React.createElement('div', null,
              "Visit the nearest police station / ಹತ್ತಿರದ ಪೊಲೀಸ್ ಸ್ಟೇಶನ್‌ಗೆ ಭೇಟಿ ನೀಡಿ: ",
              React.createElement('a', {
                href: "https://ksp.karnataka.gov.in/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "Find Police Station / ಪೊಲೀಸ್ ಸ್ಟೇಶನ್ ಹುಡುಕಿ")
            )
          ),
          React.createElement('li', null, "Provide proof of ownership / ಹಕ್ಕುಸ್ವಾಮ್ಯದ ಪುರಾವೆಯನ್ನು ನೀಡಿ"),
          React.createElement('li', null, "Fill claim form / ಹಕ್ಕು ಫಾರ್ಮ್‌ನಲ್ಲಿ ತುಂಬಿ"),
          React.createElement('li', null, "Verify and collect item / ಪರಿಶೀಲಿಸಿ ಮತ್ತು ವಸ್ತುವನ್ನು ಸಂಗ್ರಹಿಸಿ")
        ),
        React.createElement('p', { className: "font-medium mt-4" }, "Required Documents / ಅಗತ್ಯ ದಾಖಲೆಗಳು:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Original purchase bill/receipt / ಮೂಲ ಖರೀದಿ ಬಿಲ್/ರಸೀದಿ"),
          React.createElement('li', null, "ID proof / ಗುರುತಿನ ಪುರಾವೆ"),
          React.createElement('li', null, "Lost item report copy / ನಷ್ಟವಾದ ವಸ್ತುವಿನ ವರದಿ ಪ್ರತಿ"),
          React.createElement('li', null, "Any other ownership proof / ಇತರ ಹಕ್ಕುಸ್ವಾಮ್ಯದ ಪುರಾವೆ")
        )
      ),
    },
  ],
}; 