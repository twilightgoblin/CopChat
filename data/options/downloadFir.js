import React from 'react';

/**
 * Download FIR options
 * @type {import('../../components/chatbot/types').Option}
 */
export const downloadFirOptions = {
  label: "Download FIR Copy / ಎಫ್‌ಐಆರ್ ಪ್ರತಿಯನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
  value: "download-fir",
  keywords: ["fir", "download", "copy", "search", "report", "complaint", "case", "ಎಫ್‌ಐಆರ್", "ಡೌನ್‌ಲೋಡ್", "ಪ್ರತಿ", "ಶೋಧನೆ", "ವರದಿ", "ದೂರು", "ಪ್ರಕರಣ"],
  subOptions: [
    {
      label: "Steps to Download FIR Online / ಆನ್ಲೈನ್ ಮೂಲಕ ಎಫ್‌ಐಆರ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡುವ ಹಂತಗಳು",
      value: "download-steps",
      keywords: ["steps", "online", "download", "process", "ಹಂತಗಳು", "ಆನ್ಲೈನ್", "ಡೌನ್‌ಲೋಡ್", "ಪ್ರಕ್ರಿಯೆ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('p', { className: "font-medium" }, "Follow these steps to download your FIR copy / ನಿಮ್ಮ ಎಫ್‌ಐಆರ್ ಪ್ರತಿಯನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಈ ಹಂತಗಳನ್ನು ಅನುಸರಿಸಿ:"),
          React.createElement('ol', { className: "list-decimal pl-4 space-y-2" },
            React.createElement('li', null, 
              React.createElement('span', null, "Visit the FIR Search Portal: "),
              React.createElement('a', {
                href: "https://ksp.karnataka.gov.in/firsearch/en",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "Karnataka State Police FIR Search Portal / ಕರ್ನಾಟಕ ರಾಜ್ಯ ಪೊಲೀಸ್ ಎಫ್‌ಐಆರ್ ಶೋಧನೆ ಪೋರ್ಟಲ್")
            ),
            React.createElement('li', null, "Enter Required Details / ಅಗತ್ಯವಿರುವ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ:"),
            React.createElement('ul', { className: "list-disc pl-6 space-y-1" },
              React.createElement('li', null, "Select District / ಜಿಲ್ಲೆ ಆಯ್ಕೆಮಾಡಿ"),
              React.createElement('li', null, "Select Police Station / ಪೊಲೀಸ್ ಠಾಣೆ ಆಯ್ಕೆಮಾಡಿ"),
              React.createElement('li', null, "Enter FIR Number / ಎಫ್‌ಐಆರ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ"),
              React.createElement('li', null, "Select Year / ವರ್ಷ ಆಯ್ಕೆಮಾಡಿ")
            ),
            React.createElement('li', null, "Submit and Download / ಸಲ್ಲಿಸಿ ಮತ್ತು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ")
          ),
          React.createElement('p', { className: "text-gray-600 italic" }, 
            "Note: Not all FIRs are available online. Availability depends on the nature of the case and privacy considerations. / ಗಮನಿಸಿ: ಎಲ್ಲಾ ಎಫ್‌ಐಆರ್‌ಗಳು ಆನ್ಲೈನ್‌ನಲ್ಲಿ ಲಭ್ಯವಿರುವುದಿಲ್ಲ. ಪ್ರಕರಣದ ಸ್ವಭಾವ ಹಾಗೂ ಗೌಪ್ಯತಾ ಅಂಶಗಳ ಆಧಾರದ ಮೇಲೆ ಲಭ್ಯತೆ ನಿರ್ಧರಿಸಲಾಗುತ್ತದೆ."
          )
        )
      )
    },
    {
      label: "What If My FIR Is Not Available? / ನನ್ನ ಎಫ್‌ಐಆರ್ ಲಭ್ಯವಿಲ್ಲದಿದ್ದರೆ ಏನು ಮಾಡಬೇಕು?",
      value: "fir-not-available",
      keywords: ["not available", "alternative", "steps", "help", "ಲಭ್ಯವಿಲ್ಲ", "ಪರ್ಯಾಯ", "ಹಂತಗಳು", "ಸಹಾಯ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('p', { className: "font-medium" }, "Follow these steps if your FIR is not available online / ನಿಮ್ಮ ಎಫ್‌ಐಆರ್ ಆನ್ಲೈನ್‌ನಲ್ಲಿ ಲಭ್ಯವಿಲ್ಲದಿದ್ದರೆ ಈ ಹಂತಗಳನ್ನು ಅನುಸರಿಸಿ:"),
          React.createElement('ol', { className: "list-decimal pl-4 space-y-2" },
            React.createElement('li', null, "Visit the police station where the FIR was filed / ಎಫ್‌ಐಆರ್ ದಾಖಲಿಸಿದ ಪೊಲೀಸ್ ಠಾಣೆಗೆ ಭೇಟಿ ನೀಡಿ"),
            React.createElement('li', null, "Provide your FIR number / ನಿಮ್ಮ ಎಫ್‌ಐಆರ್ ಸಂಖ್ಯೆಯನ್ನು ನೀಡಿರಿ"),
            React.createElement('li', null, "Request a physical copy of the FIR / ಎಫ್‌ಐಆರ್ ನ ಭೌತಿಕ ಪ್ರತಿಯನ್ನು ಕೇಳಿ"),
            React.createElement('li', null, "If still unavailable, escalate to higher authorities or approach the court / ಇನ್ನೂ ಲಭ್ಯವಿಲ್ಲದಿದ್ದರೆ, ಮೇಲಧಿಕಾರಿಗಳಿಗೆ ವಿಷಯವನ್ನು ವರದಿ ಮಾಡಿ ಅಥವಾ ನ್ಯಾಯಾಲಯವನ್ನು ಸಂಪರ್ಕಿಸಿ")
          )
        )
      )
    }
  ]
}; 