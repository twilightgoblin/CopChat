import React from 'react';

/**
 * Social Media options
 * @type {import('../../components/chatbot/types').Option}
 */
export const socialMediaOptions = {
  label: "Social Media Handles & Awareness Campaigns / ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಲಿಂಕ್‌ಗಳು ಮತ್ತು ಜಾಗೃತಿ ಅಭಿಯಾನಗಳು",
  value: "social-media",
  keywords: ["social", "media", "awareness", "campaign", "ಸಾಮಾಜಿಕ", "ಮಾಧ್ಯಮ", "ಜಾಗೃತಿ", "ಅಭಿಯಾನ"],
  subOptions: [
    {
      label: "Official Websites / ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ಗಳು",
      value: "official-websites",
      keywords: ["websites", "official", "portal", "ವೆಬ್‌ಸೈಟ್‌ಗಳು", "ಅಧಿಕೃತ", "ಪೋರ್ಟಲ್"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('p', { className: "font-medium" }, "Important Official Websites / ಪ್ರಮುಖ ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ಗಳು:"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, 
              React.createElement('a', {
                href: "https://ksp.karnataka.gov.in",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "Karnataka State Police / ಕರ್ನಾಟಕ ರಾಜ್ಯ ಪೊಲೀಸ್")
            ),
            React.createElement('li', null, 
              React.createElement('a', {
                href: "https://ksp.karnataka.gov.in/chikkaballapura",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "Chikkaballapura District Police / ಚಿಕ್ಕಬಳ್ಳಾಪುರ ಜಿಲ್ಲಾ ಪೊಲೀಸ್")
            ),
            React.createElement('li', null, 
              React.createElement('a', {
                href: "https://cybercrime.gov.in",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "National Cyber Crime Reporting Portal / ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಅಪರಾಧ ವರದಿ ಪೋರ್ಟಲ್")
            ),
            React.createElement('li', null, 
              React.createElement('a', {
                href: "https://echallan.parivahan.gov.in",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "E-Challan Portal / ಇ-ಚಲ್ಲಾನ್ ಪೋರ್ಟಲ್")
            ),
            React.createElement('li', null, 
              React.createElement('a', {
                href: "https://passportindia.gov.in",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "Passport Seva Portal / ಪಾಸ್‌ಪೋರ್ಟ್ ಸೇವಾ ಪೋರ್ಟಲ್")
            )
          )
        )
      ),
    },
    {
      label: "Official Social Media Links / ಅಧಿಕೃತ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಲಿಂಕ್‌ಗಳು",
      value: "social-links",
      keywords: ["links", "social", "media", "ಲಿಂಕ್‌ಗಳು", "ಸಾಮಾಜಿಕ", "ಮಾಧ್ಯಮ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('p', { className: "font-medium" }, "Click on the link provided to access / ಲಿಂಕ್‌ನ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಪ್ರವೇಶಿಸಬಹುದು:"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, 
              React.createElement('a', {
                href: "https://www.facebook.com/sp.chikkaballapura",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "Facebook: SP Chikkaballapura / ಫೇಸ್‌ಬುಕ್: SP ಚಿಕ್ಕಬಳ್ಳಾಪುರ")
            ),
            React.createElement('li', null, 
              React.createElement('a', {
                href: "https://x.com/spcbpura?t=gWGEB7YcdNFR7ggrx0lxcw&s=08",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "Twitter/X: SP Chikkaballapura / ಟ್ವಿಟ್ಟರ್ / ಎಕ್ಸ್: SP ಚಿಕ್ಕಬಳ್ಳಾಪುರ")
            ),
            React.createElement('li', null, 
              React.createElement('a', {
                href: "https://www.instagram.com/spcbpura/?igsh=bjV1a28wbWQ2YzVj#",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "Instagram: SP Chikkaballapura / ಇನ್‌ಸ್ಟಾಗ್ರಾಂ: SP ಚಿಕ್ಕಬಳ್ಳಾಪುರ")
            ),
            React.createElement('li', null, 
              React.createElement('a', {
                href: "https://www.whatsapp.com/channel/0029VaxPouIBqbr67u0tzT3P",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "WhatsApp Channel: Chikkaballapura District Police / ವಾಟ್ಸಾಪ್ ಚಾನೆಲ್: ಚಿಕ್ಕಬಳ್ಳಾಪುರ ಜಿಲ್ಲಾ ಪೊಲೀಸ್")
            )
          )
        )
      ),
    },
    {
      label: "Why Social Media & Awareness Campaigns? / ಏಕೆ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಮತ್ತು ಜಾಗೃತಿ ಅಭಿಯಾನಗಳು ಅಗತ್ಯ?",
      value: "why-social-media",
      keywords: ["why", "importance", "benefits", "ಏಕೆ", "ಪ್ರಾಮುಖ್ಯತೆ", "ಅನುಕೂಲಗಳು"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, "Engagement: Build a stronger connection with the community through social media. / ಸಂಪರ್ಕ ಬೆಳೆಸುವುದು: ಸಾರ್ವಜನಿಕರೊಂದಿಗೆ ನಿಕಟ ಸಂಬಂಧ ನಿರ್ಮಿಸಲು."),
            React.createElement('li', null, "Awareness: Educate users about cybercrime, road safety, and crime prevention. / ಜಾಗೃತಿ ಮೂಡಿಸುವುದು: ಸೈಬರ್ ಅಪರಾಧ, ರಸ್ತೆ ಸುರಕ್ಷತೆ ಮತ್ತು ಅಪರಾಧ ತಡೆಯುವ ಕುರಿತು ಶಿಕ್ಷಣ ನೀಡಲು."),
            React.createElement('li', null, "Transparency: Share updates and alerts in real-time. / ಪಾರದರ್ಶಕತೆ: ನಿಜ ಸಮಯದಲ್ಲಿ ಮಾಹಿತಿ ಮತ್ತು ಎಚ್ಚರಿಕೆಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಲು."),
            React.createElement('li', null, "Accessibility: Provide easy access to resources and tips. / ಲಭ್ಯತೆ: ಸಾರ್ವಜನಿಕರಿಗೆ ಸುಲಭವಾಗಿ ಮಾಹಿತಿಗೆ ಪ್ರವೇಶ ಒದಗಿಸಲು.")
          )
        )
      ),
    },
  ],
}; 