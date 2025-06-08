import React from 'react';

/**
 * Complaint options
 * @type {import('../../components/chatbot/types').Option}
 */
export const complaintOptions = {
  label: "Report a Violation/Incident / ಮೇಲ್ವಿಚಾರಣೆಯುಳ್ಳ ಅಪರಾಧಗಳು/ಘಟನೆಗಳು",
  value: "complaint",
  keywords: ["complaint", "report", "incident", "file", "ವರದಿ", "ಘಟನೆ"],
  subOptions: [
    {
      label: "General Incident Report / ಸಾಮಾನ್ಯ ಘಟನೆ ವರದಿ",
      value: "general",
      keywords: ["general", "incident", "report", "ಸಾಮಾನ್ಯ", "ಘಟನೆ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Incident Type / ಘಟನೆ ಪ್ರಕಾರ:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Traffic Violation / ರಸ್ತೆ ನಿಯಮ ಉಲ್ಲಂಘನೆ"),
          React.createElement('li', null, "Public Nuisance / ಸಾರ್ವಜನಿಕ ತೊಂದರೆಯು"),
          React.createElement('li', null, "Other Violations/Incidents / ಇತರ ಉಲ್ಲಂಘನೆಗಳು/ಘಟನೆಗಳು")
        ),
        React.createElement('p', { className: "font-medium" }, "Required Information / ಅಗತ್ಯ ಮಾಹಿತಿ:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Location Details / ಸ್ಥಳ ವಿವರಗಳು"),
          React.createElement('li', null, "Date and Time / ದಿನಾಂಕ ಮತ್ತು ಸಮಯ"),
          React.createElement('li', null, "Detailed Description / ವಿವರವಾದ ವಿವರಣೆ"),
          React.createElement('li', null, "Contact Information / ಸಂಪರ್ಕ ಮಾಹಿತಿ")
        ),
        React.createElement('p', { className: "font-medium" }, "How to Submit / ಸಲ್ಲಿಸುವ ವಿಧಾನ:"),
        React.createElement('ol', { className: "list-decimal pl-4 space-y-2" },
          React.createElement('li', null, "Fill out the incident report form / ಘಟನೆ ವರದಿ ಫಾರ್ಮ್‌ನಲ್ಲಿ ತುಂಬಿ"),
          React.createElement('li', null, "Attach any relevant documents/photos / ಸಂಬಂಧಿತ ದಾಖಲೆಗಳು/ಫೋಟೋಗಳನ್ನು ಲಗತ್ತಿಸಿ"),
          React.createElement('li', null, "Submit and receive acknowledgment / ಸಲ್ಲಿಸಿ ಮತ್ತು ಅಂಗೀಕಾರ ಪಡೆಯಿರಿ")
        )
      ),
    },
    {
      label: "E-Lost Report / ಇ-ನಷ್ಟ ವರದಿ",
      value: "elost",
      keywords: ["lost", "document", "items", "ನಷ್ಟ", "ದಾಖಲೆ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "What It Offers / ಒದಗಿಸುವ ಸೇವೆ:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Report lost documents and items / ನಷ್ಟವಾದ ದಾಖಲೆಗಳು ಮತ್ತು ವಸ್ತುಗಳ ವರದಿ"),
          React.createElement('li', null, "Get Form 76A acknowledgment / ಫಾರ್ಮ್ 76A ಅಂಗೀಕಾರ ಪಡೆಯಿರಿ"),
          React.createElement('li', null, "Track lost item status / ನಷ್ಟವಾದ ವಸ್ತುವಿನ ಸ್ಥಿತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ")
        ),
        React.createElement('p', { className: "font-medium" }, "How to Use / ಬಳಸುವ ವಿಧಾನ:"),
        React.createElement('ol', { className: "list-decimal pl-4 space-y-2" },
          React.createElement('li', null, 
            React.createElement('div', null,
              "Visit KSP e-Lost & Found App / ಕೆಎಸ್ಪಿ ಇ-ನಷ್ಟ ಮತ್ತು ಕಂಡುಹಿಡಿಯುವ ಅಪ್ಲಿಕೇಶನ್‌ಗೆ ಭೇಟಿ ನೀಡಿ: ",
              React.createElement('a', {
                href: "https://ksp.karnataka.gov.in/elost/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "KSP e-Lost & Found Portal / ಕೆಎಸ್ಪಿ ಇ-ನಷ್ಟ ಮತ್ತು ಕಂಡುಹಿಡಿಯುವ ಪೋರ್ಟಲ್")
            )
          ),
          React.createElement('li', null, "Enter lost item details / ನಷ್ಟವಾದ ವಸ್ತುವಿನ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ"),
          React.createElement('li', null, "Collect Form 76A / ಫಾರ್ಮ್ 76A ಸಂಗ್ರಹಿಸಿ")
        ),
        React.createElement('p', { className: "text-gray-600 italic" }, "Note: This is not an FIR / ಸೂಚನೆ: ಇದು FIR ಅಲ್ಲ")
      ),
    },
    {
      label: "CEIR Report / ನಾಗರಿಕ ಘಟನೆ ವರದಿ",
      value: "ceir",
      keywords: ["ceir", "citizen", "incident", "ನಾಗರಿಕ", "ಘಟನೆ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "What It Offers / ಒದಗಿಸುವ ಸೇವೆ:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Report non-criminal incidents / ಅಪರಾಧಿಕ ಘಟನೆಗಳ ವರದಿ"),
          React.createElement('li', null, "Track report status / ವರದಿ ಸ್ಥಿತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ"),
          React.createElement('li', null, "Get updates on your case / ನಿಮ್ಮ ಪ್ರಕರಣದಲ್ಲಿ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ")
        ),
        React.createElement('p', { className: "font-medium" }, "How to Use / ಬಳಸುವ ವಿಧಾನ:"),
        React.createElement('ol', { className: "list-decimal pl-4 space-y-2" },
          React.createElement('li', null, 
            React.createElement('div', null,
              "Register on CEIR Portal / CEIR ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನೋಂದಣಿ ಮಾಡಿ: ",
              React.createElement('a', {
                href: "https://www.ceir.gov.in/Home/index.jsp",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "CEIR Portal / CEIR ಪೋರ್ಟಲ್")
            )
          ),
          React.createElement('li', null, "Fill incident details / ಘಟನೆ ವಿವರಗಳನ್ನು ತುಂಬಿ"),
          React.createElement('li', null, "Submit and track / ಸಲ್ಲಿಸಿ ಮತ್ತು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ")
        ),
        React.createElement('p', { className: "font-medium" }, "Important Notes / ಮುಖ್ಯ ಸೂಚನೆಗಳು:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Keep your acknowledgment number / ನಿಮ್ಮ ಅಂಗೀಕಾರ ಸಂಖ್ಯೆಯನ್ನು ಇರಿಸಿಕೊಳ್ಳಿ"),
          React.createElement('li', null, "Check status updates regularly / ಸ್ಥಿತಿ ನವೀಕರಣಗಳನ್ನು ನಿಯಮಿತವಾಗಿ ಪರಿಶೀಲಿಸಿ"),
          React.createElement('li', null, "Follow up if needed / ಅಗತ್ಯವಿದ್ದರೆ ಅನುಸರಿಸಿ")
        )
      ),
    },
    {
      label: "Anonymous Complaints / ಅನಾಮಧೇಯ ದೂರುಗಳು",
      value: "anonymous",
      keywords: ["anonymous", "complaint", "report", "secret", "ಅನಾಮಧೇಯ", "ದೂರು", "ರಹಸ್ಯ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "What It Offers / ಒದಗಿಸುವ ಸೇವೆ:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "File complaints without revealing your identity / ನಿಮ್ಮ ಗುರುತು ಬಹಿರಂಗಪಡಿಸದೆ ದೂರುಗಳನ್ನು ದಾಖಲಿಸಿ"),
          React.createElement('li', null, "Secure and confidential reporting system / ಸುರಕ್ಷಿತ ಮತ್ತು ಗೌಪ್ಯ ವರದಿ ವ್ಯವಸ್ಥೆ"),
          React.createElement('li', null, "Track complaint status with unique reference number / ವಿಶಿಷ್ಟ ಉಲ್ಲೇಖ ಸಂಖ್ಯೆಯೊಂದಿಗೆ ದೂರಿನ ಸ್ಥಿತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ")
        ),
        React.createElement('p', { className: "font-medium mt-4" }, "How to Submit / ಸಲ್ಲಿಸುವ ವಿಧಾನ:"),
        React.createElement('ol', { className: "list-decimal pl-4 space-y-2" },
          React.createElement('li', null, 
            React.createElement('div', null,
              "Visit the Anonymous Complaint Portal / ಅನಾಮಧೇಯ ದೂರು ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ: ",
              React.createElement('a', {
                href: "/anonymous-complaints",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "Anonymous Complaint Portal / ಅನಾಮಧೇಯ ದೂರು ಪೋರ್ಟಲ್")
            )
          ),
          React.createElement('li', null, "Fill in the complaint details / ದೂರಿನ ವಿವರಗಳನ್ನು ತುಂಬಿ"),
          React.createElement('li', null, "Get a unique reference number / ವಿಶಿಷ್ಟ ಉಲ್ಲೇಖ ಸಂಖ್ಯೆಯನ್ನು ಪಡೆಯಿರಿ"),
          React.createElement('li', null, "Use the reference number to track your complaint / ನಿಮ್ಮ ದೂರನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಉಲ್ಲೇಖ ಸಂಖ್ಯೆಯನ್ನು ಬಳಸಿ")
        ),
        React.createElement('p', { className: "font-medium mt-4" }, "Important Notes / ಮುಖ್ಯ ಸೂಚನೆಗಳು:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Your identity will be kept strictly confidential / ನಿಮ್ಮ ಗುರುತು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಗೌಪ್ಯವಾಗಿರುತ್ತದೆ"),
          React.createElement('li', null, "Save your reference number securely / ನಿಮ್ಮ ಉಲ್ಲೇಖ ಸಂಖ್ಯೆಯನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಇರಿಸಿಕೊಳ್ಳಿ"),
          React.createElement('li', null, "False complaints may lead to legal action / ಸುಳ್ಳು ದೂರುಗಳು ಕಾನೂನು ಕ್ರಮಕ್ಕೆ ಕಾರಣವಾಗಬಹುದು")
        )
      ),
    }
  ],
}; 