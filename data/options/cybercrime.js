import React from 'react';

/**
 * Cybercrime options
 * @type {import('../../components/chatbot/types').Option}
 */
export const cybercrimeOptions = {
  label: "Cybercrime Awareness / ಸೈಬರ್ ಅಪರಾಧ ಜಾಗೃತಿ",
  value: "cybercrime",
  keywords: ["cybercrime", "online", "fraud", "hacking", "ಸೈಬರ್ ಅಪರಾಧ", "ಆನ್‌ಲೈನ್", "ಮೋಸ"],
  subOptions: [
    {
      label: "What is cybercrime? / ಸೈಬರ್ ಕ್ರೈಂ ಎಂದರೆ ಏನು?",
      value: "what-is-cybercrime",
      keywords: ["cybercrime", "definition", "ಸೈಬರ್ ಕ್ರೈಂ", "ವ್ಯಾಖ್ಯಾನ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('p', null, "Cybercrime is any illegal activity done using the internet or computers, such as stealing personal information, fraud, or hacking. / ಸೈಬರ್ ಕ್ರೈಂ ಎಂದರೆ ಇಂಟರ್ನೆಟ್ ಅಥವಾ ಕಂಪ್ಯೂಟರ್‌ಗಳನ್ನು ಬಳಸಿಕೊಂಡು ಮಾಡಲಾಗುವ ಕಾನೂನು ವಿರೋಧಿ ಚಟುವಟಿಕೆ, ಉದಾಹರಣೆಗೆ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ ಕಳ್ಳತನ, ಮೋಸ, ಅಥವಾ ಹ್ಯಾಕಿಂಗ್.")
        )
      ),
    },
    {
      label: "Investment Scams / ಹೂಡಿಕೆ ಮೋಸಗಳು",
      value: "investment-scams",
      keywords: ["investment", "scam", "fraud", "ಹೂಡಿಕೆ", "ಮೋಸ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('p', null, "Investment scams trick people into putting money into fake investments that promise big returns. / ಹೂಡಿಕೆ ಮೋಸವು ಜನರನ್ನು ಫೇಕ್ ಹೂಡಿಕೆಯಲ್ಲಿ ಹಣ ಹೂಡಿಸಲು ಪ್ರೇರೇಪಿಸುತ್ತದೆ, ಇದು ದೊಡ್ಡ ಲಾಭವನ್ನು ಹಪುತ್ತು ಹೊತ್ತಿದೆ ಎಂದು ಹೇಳುತ್ತವೆ."),
          React.createElement('p', { className: "font-medium" }, "Tip / ಉಪಾಯ:"),
          React.createElement('p', null, "Be cautious of offers that sound too good to be true. Always research before investing. / ಹೂಡಿಕೆ ಮಾಡುವ ಮೊದಲು ಅದರ ಬಗ್ಗೆ ಸಾಕ್ಷಾತ್ಕಾರ ಮಾಡಿ. ಹೆಚ್ಚು ಲಾಭದ ಚಟುವಟಿಕೆಗಳು ಆತಂಕವನ್ನು ಉಂಟುಮಾಡುತ್ತವೆ.")
        )
      ),
    },
    {
      label: "Digital Arrest Scams / ಡಿಜಿಟಲ್ ಬಂಧನ ಮೋಸಗಳು",
      value: "digital-arrest-scams",
      keywords: ["digital", "arrest", "scam", "ಡಿಜಿಟಲ್", "ಬಂಧನ", "ಮೋಸ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('p', null, "Scammers pretend to be authorities and say you owe fines or have broken a law online, threatening arrest if you don't pay. / ಮೋಸಗಾರು ಗೂಡುಗಳು ಅಧಿಕಾರಿ ಆಗಿ ಕಾಣಿಸಿಕೊಂಡು ನೀವು ಕಾನೂನು ಉಲ್ಲಂಘಿಸಿದ ಅಥವಾ ನಗದು ದಂಡವೇನೆಂದರೆ ಹೇಳಿ, ನಿಮ್ಮನ್ನು ಬಂಧಿಸೋಣ ಎಂದರು."),
          React.createElement('p', { className: "font-medium" }, "Tip / ಉಪಾಯ:"),
          React.createElement('p', null, "Never send money to someone claiming to be the police unless you verify through official channels. / ಯಾವುದೇ ಹಣವನ್ನು ಕಳುಹಿಸುವ ಮೊದಲು ಅಧಿಕಾರಿಗಳೊಂದಿಗೆ ಸರಿಯಾದ ಮಾರ್ಗಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.")
        )
      ),
    },
    {
      label: "Matrimonial Scams / ಮ್ಯಾಟ್ರಿಮೋನಿಯಲ್ ಮೋಸಗಳು",
      value: "matrimonial-scams",
      keywords: ["matrimonial", "scam", "fraud", "ಮ್ಯಾಟ್ರಿಮೋನಿಯಲ್", "ಮೋಸ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('p', null, "Scammers pretend to be interested in a romantic relationship and ask for money, often after creating emotional connections. / ಈ ಮೋಸದವರು ನಿಮ್ಮೊಂದಿಗೆ ಪ್ರೀತಿಯ ಸಂಬಂಧವನ್ನು ನೆಡೆಸುತ್ತಿದ್ದರು, ನಂತರ ಹಣವನ್ನು ಕೇಳುತ್ತಾರೆ."),
          React.createElement('p', { className: "font-medium" }, "Tip / ಉಪಾಯ:"),
          React.createElement('p', null, "Be careful when meeting people online, and never send money to someone you haven't met in person. / ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಯಾರಾದರೂ ನಿಮ್ಮೊಂದಿಗೆ ಸ್ನೇಹ ಮಾಡಿದ್ದರೂ, ತಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿದೆಯೇ ಎಂಬುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ, ಮತ್ತು ನೀವು ಎದುರಿಸದವನಿಗೆ ಹಣ ಕಳುಹಿಸಬೇಡಿ.")
        )
      ),
    },
    {
      label: "Part-time Job Scams / ಪಾರ್ಟ್-ಟೈಮ್ ಕೆಲಸದ ಮೋಸಗಳು",
      value: "part-time-job-scams",
      keywords: ["job", "scam", "fraud", "ಕೆಲಸ", "ಮೋಸ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('p', null, "Scammers offer fake jobs that promise easy money and ask for payment for training or supplies. / ಈ ಮೋಸದವರು ಸುಲಭವಾದ ಕೆಲಸಗಳು ಹಾಗೂ ಚೆನ್ನಾದ ನಗದು ಕೊಡುತ್ತವೆ ಎಂದು ಹೇಳಿ, ಆದರೆ ಕೆಲಸದ ಬಳಿ ಯಾವುದೇ ಪ್ರಾಮಾಣಿಕತೆ ಇಲ್ಲ."),
          React.createElement('p', { className: "font-medium" }, "Tip / ಉಪಾಯ:"),
          React.createElement('p', null, "Legitimate jobs never ask you to pay upfront. Research the company before applying. / ಇತರ ಅಕೌಂಟ್‌ಗಳಿಗೆ ಹಣ ಕಳುಹಿಸುವುದಕ್ಕೆ ಮೊದಲು ಕಂಪನಿಯನ್ನು ಪರಿಶೀಲಿಸಿ.")
        )
      ),
    },
    {
      label: "Phishing / ಫಿಷಿಂಗ್",
      value: "phishing",
      keywords: ["phishing", "scam", "fraud", "ಫಿಷಿಂಗ್", "ಮೋಸ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('p', null, "Phishing is when scammers send fake emails or messages to steal your personal information like passwords. / ಫಿಷಿಂಗ್ ಎಂದರೆ, ಮೋಸಗಾರುಗಳನ್ನು ತಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಲು ದಯನೀಯ ಇಮೇಲ್‌ಗಳನ್ನು ಅಥವಾ ಸಂದೇಶಗಳನ್ನು ಕಳುಹಿಸುತ್ತಾರೆ."),
          React.createElement('p', { className: "font-medium" }, "Tip / ಉಪಾಯ:"),
          React.createElement('p', null, "Never click on links in unsolicited emails. Always check the source first. / ಅನಾನುಕೂಲ ಸಂದೇಶಗಳಿಗೆ ಲಿಂಕ್‌ಗಳನ್ನು ಒತ್ತಿಸುವುದರಿಂದ ತಪ್ಪಿರಿ. ಮೂಲವನ್ನು ಪರಿಶೀಲಿಸಿ.")
        )
      ),
    },
    {
      label: "Account Protection / ಖಾತೆ ರಕ್ಷಣೆ",
      value: "account-protection",
      keywords: ["account", "protection", "security", "ಖಾತೆ", "ರಕ್ಷಣೆ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('p', { className: "font-medium" }, "How can I protect my online accounts? / ನನ್ನ ಆನ್‌ಲೈನ್ ಅಕೌಂಟುಗಳನ್ನು ಹೇಗೆ ರಕ್ಷಿಸಬಹುದು?"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, "Use strong, unique passwords. / ಪ್ರಬಲ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಬಳಸಿರಿ."),
            React.createElement('li', null, "Enable two-factor authentication (2FA) wherever possible. / ಎಲ್ಲಿದ್ದಕ್ಕೂ ಎರಡು-ಹಂತದ ಪ್ರಮಾಣೀಕರಣ (2FA) ವ್ಯವಸ್ಥೆಯನ್ನು ಆರಿಸಿ."),
            React.createElement('li', null, "Be cautious about sharing personal info. / ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ಹಂಚಲು ಎಚ್ಚರಿಕೆಯಿಂದ ಇರಿರಿ.")
          )
        )
      ),
    },
    {
      label: "Victim Support / ಬಲಿಪೀಡಿತರಿಗೆ ಸಹಾಯ",
      value: "victim-support",
      keywords: ["victim", "support", "help", "ಬಲಿಪೀಡಿತ", "ಸಹಾಯ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('p', { className: "font-medium" }, "What should I do if I become a victim of cybercrime? / ನಾನು ಸೈಬರ್ ಕ್ರೈಮ್‌ಗೆ ಸಿಲುಕಿದರೆ ಏನು ಮಾಡಬೇಕು?"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, "Report it to the police. / ಇದನ್ನು ಪೊಲೀಸ್ ಠಾಣೆಗೆ ವರದಿ ಮಾಡಿ."),
            React.createElement('li', null, "Contact your bank or service provider immediately if financial details are involved. / ಹಣ ಸಂಬಂಧಿತ ಸಮಸ್ಯೆಗಳು ಇದ್ದರೆ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಅಥವಾ ಸೇವಾ ಪ್ರಮಾಣಿ ಕಾರ್ಯಕರ್ತರಿಗೆ ದಯವಿಟ್ಟು ಸಂಪರ್ಕಿಸಿ."),
            React.createElement('li', null, "Change your passwords and keep monitoring your accounts. / ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಬದಲಾಯಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಖಾತೆಗಳನ್ನು ನೋಡಿಕೊಳ್ಳಿ.")
          ),
          React.createElement('p', { className: "font-medium mt-4" }, "Report Cybercrime / ಸೈಬರ್ ಅಪರಾಧ ವರದಿ:"),
          React.createElement('p', null, 
            "Report cybercrime at ", 
            React.createElement('a', {
              href: "https://cybercrime.gov.in",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-blue-600 hover:underline"
            }, "cybercrime.gov.in"),
            " or call the helpline at 1930. / ",
            React.createElement('a', {
              href: "https://cybercrime.gov.in",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-blue-600 hover:underline"
            }, "cybercrime.gov.in"),
            " ನಲ್ಲಿ ವರದಿ ಮಾಡಿ ಅಥವಾ 1930 ಗೆ ಕರೆ ಮಾಡಿ."
          )
        )
      ),
    },
    {
      label: "Identity Theft / ಗುರುತಿನ ಕಳ್ಳತನ",
      value: "identity-theft",
      keywords: ["identity", "theft", "fraud", "ಗುರುತಿನ", "ಕಳ್ಳತನ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('p', null, "Identity theft happens when someone steals your personal information to commit fraud or impersonate you. / ಆಯ್ಡೆಂಟಿಟಿ ಥೆಫ್ಟ್ ಎಂದರೆ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ಕಳ್ಳತನ ಮಾಡಿ, ನಿಮ್ಮ ಪರವಾಗಿ ಮೋಸದ ಕೆಲಸಗಳನ್ನು ಮಾಡುವುದು."),
          React.createElement('p', { className: "font-medium" }, "Tip / ಉಪಾಯ:"),
          React.createElement('p', null, "Regularly check your bank and credit reports for any suspicious activity. / ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಮತ್ತು ಕ್ರೆಡಿಟ್ ವರದಿಗಳನ್ನು ನಿಯಮಿತವಾಗಿ ಪರಿಶೀಲಿಸಿ.")
        )
      ),
    },
    {
      label: "Online Safety / ಆನ್‌ಲೈನ್ ಸುರಕ್ಷತೆ",
      value: "online-safety",
      keywords: ["online", "safety", "security", "ಆನ್‌ಲೈನ್", "ಸುರಕ್ಷತೆ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('p', { className: "font-medium" }, "How can I stay safe online? / ನಾನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಹೇಗೆ ಸುರಕ್ಷಿತವಾಗಿ ಇರುತ್ತೇನೆ?"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, "Use strong, unique passwords for each account. / ಪ್ರತಿಯೊಂದು ಅಕೌಂಟ್‌ಗಾಗಿ ಪ್ರಬಲ ಮತ್ತು ವಿಭಿನ್ನ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಬಳಸಿರಿ."),
            React.createElement('li', null, "Don't share too much personal info on social media. / ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮಗಳಲ್ಲಿ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ಹೆಚ್ಚು ಹಂಚಬೇಡಿ."),
            React.createElement('li', null, "Be cautious when clicking on links or downloading files, especially from unknown sources. / ಎಚ್ಚರಿಕೆಯಿಂದ ಮತ್ತು ನಂಬಿದ ಮೂಲಗಳಿಂದ ಮಾತ್ರ ಲಿಂಕ್‌ಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ಫೈಲ್‌ಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.")
          ),
          React.createElement('p', { className: "font-medium mt-4" }, "Additional Resources / ಹೆಚ್ಚುವರಿ ಸಂಪನ್ಮೂಲಗಳು:"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
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
                href: "https://ksp.karnataka.gov.in/cybercrime",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "Karnataka Cyber Crime Portal / ಕರ್ನಾಟಕ ಸೈಬರ್ ಅಪರಾಧ ಪೋರ್ಟಲ್")
            )
          )
        )
      ),
    },
  ],
}; 