import React from 'react';

/**
 * Feedback options for Lok Spandana/Citizen Feedback
 * @type {import('../../components/chatbot/types').Option}
 */
export const feedbackOptions = {
  label: "Lok Spandana / Citizen Feedback / ಲೋಕ ಸ್ಪಂದನ / ನಾಗರಿಕ ಪ್ರತಿಕ್ರಿಯೆ",
  value: "feedback",
  keywords: ["feedback", "suggestion", "complaint", "review", "rating", "survey", "testimonial", "ಲೋಕ ಸ್ಪಂದನ", "ನಾಗರಿಕ ಪ್ರತಿಕ್ರಿಯೆ", "ಅಭಿಪ್ರಾಯ"],
  subOptions: [
    {
      label: "Provide Feedback / ಪ್ರತಿಕ್ರಿಯೆ ನೀಡಿ",
      value: "provide-feedback",
      keywords: ["feedback", "suggestion", "review", "rating", "survey", "testimonial", "ಪ್ರತಿಕ್ರಿಯೆ", "ಅಭಿಪ್ರಾಯ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Share Your Experience / ನಿಮ್ಮ ಅನುಭವವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ"),
        React.createElement('p', { className: "text-gray-600" }, "Your feedback helps us improve our services and better serve the community."),
        React.createElement('p', { className: "text-gray-600" }, "ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಯು ನಮ್ಮ ಸೇವೆಗಳನ್ನು ಸುಧಾರಿಸಲು ಮತ್ತು ಸಮುದಾಯಕ್ಕೆ ಉತ್ತಮ ಸೇವೆ ನೀಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ."),
        React.createElement('div', { className: "mt-4" },
          React.createElement('a',
            {
              href: "/testimonials",
              className: "inline-flex items-center px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition-colors duration-300",
            },
            "Share Your Feedback / ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಹಂಚಿಕೊಳ್ಳಿ"
          )
        ),
        React.createElement('p', { className: "font-medium mt-4" }, "What You Can Share / ನೀವು ಏನು ಹಂಚಿಕೊಳ್ಳಬಹುದು:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "Your experience with our services / ನಮ್ಮ ಸೇವೆಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಅನುಭವ"),
          React.createElement('li', null, "Suggestions for improvement / ಸುಧಾರಣೆಗಾಗಿ ಸಲಹೆಗಳು"),
          React.createElement('li', null, "Complaints or concerns / ದೂರುಗಳು ಅಥವಾ ಕಾಳಜಿಗಳು"),
          React.createElement('li', null, "Positive experiences / ಸಕಾರಾತ್ಮಕ ಅನುಭವಗಳು")
        ),
        React.createElement('p', { className: "font-medium mt-4" }, "Important Notes / ಪ್ರಮುಖ ಟಿಪ್ಪಣಿಗಳು:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, "All feedback is valuable to us / ಎಲ್ಲಾ ಪ್ರತಿಕ್ರಿಯೆಗಳು ನಮಗೆ ಮೌಲ್ಯಯುತವಾಗಿವೆ"),
          React.createElement('li', null, "We review all submissions / ನಾವು ಎಲ್ಲಾ ಸಲ್ಲಿಕೆಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತೇವೆ"),
          React.createElement('li', null, "Your privacy is protected / ನಿಮ್ಮ ಗೌಪ್ಯತೆ ರಕ್ಷಿಸಲಾಗಿದೆ")
        )
      )
    }
  ]
}; 