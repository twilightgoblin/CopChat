import React from 'react';

/**
 * FAQ options
 * @type {import('../../components/chatbot/types').Option}
 */
export const faqOptions = {
  label: "Frequently Asked Questions (FAQ) / ಪ್ರಶ್ನೋತ್ತರಗಳು (FAQ)",
  value: "faq",
  keywords: ["faq", "questions", "help", "guide", "ಪ್ರಶ್ನೋತ್ತರಗಳು", "ಸಹಾಯ", "ಮಾರ್ಗದರ್ಶಿ"],
  subOptions: [
    {
      label: "Crime/Complaint Related / ಅಪರಾಧ/ನಿವೇದನೆ ಸಂಬಂಧಿತ",
      value: "crime-complaint",
      keywords: ["crime", "complaint", "fir", "report", "ಅಪರಾಧ", "ನಿವೇದನೆ", "ವರದಿ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('div', null,
            React.createElement('p', { className: "font-medium" }, "1. How can I file an FIR in Karnataka? / 1. ನಾನು ಕರ್ನಾಟಕದಲ್ಲಿ FIR ಹೇಗೆ ದಾಖಲಿಸಬಹುದು?"),
            React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
              React.createElement('li', null, "Visit any police station or use Citizen Portal. / ಯಾವುದೇ ಪೊಲೀಸ್ ಠಾಣೆಗೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ನಾಗರಿಕ ಪೋರ್ಟಲ್ ಬಳಸಿ.")
            )
          ),
          React.createElement('div', null,
            React.createElement('p', { className: "font-medium" }, "2. What is a Zero FIR? / 2. ಝೀರೋ FIR ಎಂದರೇನು?"),
            React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
              React.createElement('li', null, "FIR registered at any police station, regardless of jurisdiction, and later transferred. / ಯಾವುದೇ ಪೊಲೀಸ್ ಠಾಣೆಯಲ್ಲಿ ದಾಖಲು ಮಾಡಲಾಗುವ FIR, ನಂತರ ಹಕ್ಕುಕ್ಷೇತ್ರಕ್ಕೆ ವರ್ಗಾಯಿಸಲಾಗುತ್ತದೆ.")
            )
          ),
          React.createElement('div', null,
            React.createElement('p', { className: "font-medium" }, "3. What documents are needed to file an FIR? / 3. FIR ದಾಖಲು ಮಾಡಲು ಯಾವ ದಾಖಲೆಗಳು ಬೇಕು?"),
            React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
              React.createElement('li', null, "No documents are mandatory, but ID and evidence help. / ಯಾವುದೇ ದಾಖಲೆಗಳ ಅಗತ್ಯವಿಲ್ಲ, ಆದರೆ ಗುರುತಿನ ಚೀಟಿ ಮತ್ತು ಸಾಕ್ಷಿಗಳು ಸಹಾಯಕವಾಗಬಹುದು.")
            )
          )
        )
      ),
    },
    {
      label: "Cybercrime Related / ಸೈಬರ್ ಅಪರಾಧ ಸಂಬಂಧಿತ",
      value: "cybercrime",
      keywords: ["cybercrime", "online", "fraud", "hacking", "ಸೈಬರ್ ಅಪರಾಧ", "ಆನ್‌ಲೈನ್", "ಮೋಸ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('div', null,
            React.createElement('p', { className: "font-medium" }, "8. What is considered cybercrime? / 8. ಸೈಬರ್ ಅಪರಾಧಗಳು ಯಾವುವು?"),
            React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
              React.createElement('li', null, "Online fraud, identity theft, hacking, cyberbullying, sextortion, fake profiles. / ಆನ್‌ಲೈನ್ ಮೋಸ, ಗುರುತು ಕ盗ತ, ಹ್ಯಾಕಿಂಗ್, ಸೈಬರ್ ಬಲಾತ್ಕಾರ, ಹೂಸು ಹಗಲು ಪ್ರೊಫೈಲ್‌ಗಳು.")
            )
          ),
          React.createElement('div', null,
            React.createElement('p', { className: "font-medium" }, "9. How can I report cybercrime? / 9. ಸೈಬರ್ ಅಪರಾಧವನ್ನು ಹೇಗೆ ವರದಿ ಮಾಡಬಹುದು?"),
            React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
              React.createElement('li', null, "Through ", 
                React.createElement('a', {
                  href: "https://cybercrime.gov.in",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-blue-600 hover:underline"
                }, "cybercrime.gov.in"),
                " or at a Cyber Crime Police Station. / ",
                React.createElement('a', {
                  href: "https://cybercrime.gov.in",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-blue-600 hover:underline"
                }, "cybercrime.gov.in"),
                " ಅಥವಾ ಸೈಬರ್ ಅಪರಾಧ ಪೊಲೀಸ್ ಸ್ಟೇಷನ್‌ನಲ್ಲಿ."
              )
            )
          ),
          React.createElement('div', null,
            React.createElement('p', { className: "font-medium" }, "10. What is the National Cyber Crime Reporting Portal (NCRP)? / 10. ಸೈಬರ್ ಅಪರಾಧ ವರದಿ ಪೋರ್ಟಲ್ (NCRP) ಎಂದರೇನು?"),
            React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
              React.createElement('li', null, "NCRP is an online portal ", 
                React.createElement('a', {
                  href: "https://cybercrime.gov.in",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-blue-600 hover:underline"
                }, "cybercrime.gov.in"),
                " where citizens can report cybercrimes directly. / NCRP ಅನ್ಲೈನ್ ಪೋರ್ಟಲ್ ",
                React.createElement('a', {
                  href: "https://cybercrime.gov.in",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-blue-600 hover:underline"
                }, "cybercrime.gov.in"),
                " ಮೂಲಕ ನೇರವಾಗಿ ಸೈಬರ್ ಅಪರಾಧಗಳನ್ನು ವರದಿ ಮಾಡಬಹುದು."
              )
            )
          ),
          React.createElement('div', null,
            React.createElement('p', { className: "font-medium" }, "11. What is the Cybercrime Helpline 1930? / 11. ಸೈಬರ್ ಅಪರಾಧ ಹಾಟ್‌ಲೈನ್ 1930 ಎಂದರೇನು?"),
            React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
              React.createElement('li', null, "Dial 1930 immediately after an online financial fraud to block the transaction quickly. / ಆನ್‌ಲೈನ್ ಹಣಕಾಸು ಮೋಸವಾದಲ್ಲಿ ಶೀಘ್ರವಾಗಿ ಲೆನದೇಶವನ್ನು ಸ್ಥಗಿತಗೊಳಿಸಲು 1930 ಕರೆ ಮಾಡಿ.")
            )
          )
        )
      ),
    },
    {
      label: "Contact Information",
      value: "contact",
      keywords: ["contact", "reach", "phone", "email"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Emergency Contacts:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null,
            React.createElement('a', {
              href: "tel:112",
              className: "text-blue-600 hover:underline"
            }, "Police Emergency: 112")
          ),
          React.createElement('li', null,
            React.createElement('a', {
              href: "tel:108",
              className: "text-blue-600 hover:underline"
            }, "Medical Emergency: 108")
          ),
          React.createElement('li', null,
            React.createElement('a', {
              href: "tel:101",
              className: "text-blue-600 hover:underline"
            }, "Fire Emergency: 101")
          ),
          React.createElement('li', null,
            React.createElement('a', {
              href: "tel:1091",
              className: "text-blue-600 hover:underline"
            }, "Women & Child Helpline: 1091")
          ),
          React.createElement('li', null,
            React.createElement('a', {
              href: "tel:1930",
              className: "text-blue-600 hover:underline"
            }, "Cybercrime Emergency: 1930")
          )
        ),
        React.createElement('p', { className: "font-medium mt-4" }, "Additional Contacts:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null,
            React.createElement('a', {
              href: "mailto:ksp@ksp.gov.in",
              className: "text-blue-600 hover:underline"
            }, "Email: ksp@ksp.gov.in")
          ),
          React.createElement('li', null,
            React.createElement('a', {
              href: "https://ksp.karnataka.gov.in",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-blue-600 hover:underline"
            }, "Website: ksp.karnataka.gov.in")
          ),
          React.createElement('li', null,
            React.createElement('a', {
              href: "https://www.whatsapp.com/channel/0029VaxPouIBqbr67u0tzT3P",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-violet-600 hover:text-violet-800"
            }, "WhatsApp Channel: Chikkaballapura District Police")
          ),
          React.createElement('li', null,
            React.createElement('a', {
              href: "https://www.facebook.com/sp.chikkaballapura",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-violet-600 hover:text-violet-800"
            }, "Facebook: @sp.chikkaballapura")
          ),
          React.createElement('li', null,
            React.createElement('a', {
              href: "https://x.com/spcbpura?t=gWGEB7YcdNFR7ggrx0lxcw&s=08",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-blue-600 hover:underline"
            }, "Twitter/X: @spcbpura")
          ),
          React.createElement('li', null,
            React.createElement('a', {
              href: "https://www.instagram.com/spcbpura/?igsh=bjV1a28wbWQ2YzVj#",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-violet-600 hover:text-violet-800"
            }, "Instagram: @spcbpura")
          )
        )
      ),
    },
  ],
}; 