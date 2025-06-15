import React from 'react';

/**
 * Legal options
 * @type {import('../../components/chatbot/types').Option}
 */
export const legalOptions = {
  label: "Legal Information & Citizens' Rights / ಕಾನೂನು ಮಾಹಿತಿ ಮತ್ತು ನಾಗರಿಕ ಹಕ್ಕುಗಳು",
  value: "legal",
  keywords: ["legal", "rights", "citizen", "police", "ಕಾನೂನು", "ಹಕ್ಕುಗಳು", "ನಾಗರಿಕ"],
  subOptions: [
    {
      label: "Know Your Rights When Stopped by Police / ಪೋಲಿಸರಿಂದ ನಿಲ್ಲಿಸಿದಾಗ ನಿಮ್ಮ ಹಕ್ಕುಗಳನ್ನು ತಿಳಿದುಕೊಳ್ಳಿ",
      value: "police-rights",
      keywords: ["rights", "police", "stop", "ಹಕ್ಕುಗಳು", "ಪೋಲೀಸ್", "ನಿಲ್ಲಿಸುವುದು"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('p', { className: "font-medium" }, "Your Rights / ನಿಮ್ಮ ಹಕ್ಕುಗಳು:"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, "Right to Know the Reason for the Stop: Police must inform you of the reason for the stop, whether it's a routine check or suspicion of a crime. / ನಿಲ್ಲಿಸುವ ಕಾರಣವನ್ನು ತಿಳಿಯುವ ಹಕ್ಕು: ಪೋಲೀಸರು ನಿಮ್ಮನ್ನು ನಿಲ್ಲಿಸಿದ ಕಾರಣವನ್ನು ತಿಳಿಸಬೇಕಾಗಿದೆ, ಅದು ನಿಯಮಿತ ಪರಿಶೀಲನೆ ಅಥವಾ ಅಪರಾಧ ಶಂಕೆ."),
            React.createElement('li', null, "Right to Identification: You can ask the police officer for their ID and badge number. / ಪೊಲೀಸರ ಗುರುತನ್ನು ಕೇಳುವ ಹಕ್ಕು: ನೀವು ಪೋಲೀಸರ ಗುರುತು ಮತ್ತು ಬ್ಯಾಡ್ಜ್ ಸಂಖ್ಯೆಯನ್ನು ಕೇಳಬಹುದು."),
            React.createElement('li', null, "Right to Inform Family or Friends: If arrested, you can inform a family member or friend. / ಕುಟುಂಬಿಕರಿಗೆ ಅಥವಾ ಸ್ನೇಹಿತರಿಗೆ ಮಾಹಿತಿ ನೀಡುವ ಹಕ್ಕು: ನೀವು ಬಂಧಿತವಾಗಿದ್ರೆ, ನಿಮ್ಮ ಬಂಧನದ ಬಗ್ಗೆ ಕುಟುಂಬ ಸದಸ್ಯ ಅಥವಾ ಸ್ನೇಹಿತರಿಗೆ ತಿಳಿಸಬಹುದು."),
            React.createElement('li', null, "Right to Privacy: Police cannot search your belongings without a valid warrant. / ಗೌಪ್ಯತೆ ಹಕ್ಕು: ಯಾವುದೇ ಮಾನ್ಯ ಕಾರಣ ಅಥವಾ ಹಕ್ಕು ಪತ್ರವಿಲ್ಲದೆ ನಿಮ್ಮ ವಸ್ತುಗಳನ್ನು ಪರಿಶೀಲಿಸಲಾಗದು."),
            React.createElement('li', null, "Right to Record the Interaction: You can record the interaction, as long as it does not interfere with their duties. / ಸಂಪರ್ಕವನ್ನು ದಾಖಲಿಸುವ ಹಕ್ಕು: ಪೋಲೀಸ್ ಕಾರ್ಯದಲ್ಲಿ ವ್ಯತ್ಯಯ ಉಂಟುಮಾಡದೆ, ನೀವು ನಿಮ್ಮ ಸಂಪರ್ಕವನ್ನು ದಾಖಲಿಸಬಹುದು."),
            React.createElement('li', null, "Right to Legal Representation: You are entitled to consult a lawyer before answering any questions or signing documents. / ಕಾನೂನು ಪ್ರತಿನಿಧಿ ಹಕ್ಕು: ನೀವು ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುವ ಮೊದಲು ಅಥವಾ ಯಾವುದೇ ದಾಖಲೆಗಳನ್ನು ಸಹಿ ಮಾಡುವ ಮೊದಲು ಕಾನೂನು ಪ್ರತಿನಿಧಿಯನ್ನು ಸಲಹೆ ಮಾಡಬಹುದು.")
          )
        )
      ),
    },
    {
      label: "Steps After Filing an FIR / FIR ದಾಖಲಿಸಿದ ನಂತರದ ಹಂತಗಳು",
      value: "fir-steps",
      keywords: ["fir", "steps", "procedure", "ಫಿರ್", "ಹಂತಗಳು", "ಕಾರ್ಯವಿಧಾನ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('p', { className: "font-medium" }, "Process / ಪ್ರಕ್ರಿಯೆ:"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, "Investigation Begins: The police start by collecting evidence, recording witness statements, and identifying suspects. / ತಪಾಸಣೆಯ ಪ್ರಾರಂಭ: ಪೋಲಿಸು ಸಾಕ್ಷಿಗಳ ಸಂಗ್ರಹಣೆ, ಸಾಕ್ಷಿದಾರರ ಹೇಳಿಕೆಗಳನ್ನು ದಾಖಲಿಸುವುದು, ಆರೋಪಿ ಗುರುತಿಸುವುದು ಇತ್ಯಾದಿ ಕಾರ್ಯಗಳನ್ನು ಆರಂಭಿಸುತ್ತಾರೆ."),
            React.createElement('li', null, "Arrest: If necessary, the police may arrest the accused. / ಬಂಧನ: ಅವಶ್ಯಕತೆ ಇದ್ದರೆ, ಪೋಲಿಸು ಆರೋಪಿಯನ್ನು ಬಂಧಿಸಬಹುದು."),
            React.createElement('li', null, "Filing Chargesheet: If sufficient evidence is found, a chargesheet is filed in court. / ಆರೋಪಪತ್ರ ಹಾಜರು ಮಾಡುವುದು: ಸಾಕ್ಷಿಗಳು ದೊರಕಿದರೆ, ಆರೋಪಪತ್ರವು ನ್ಯಾಯಾಲಯಕ್ಕೆ ಸಲ್ಲಿಸಲಾಗುತ್ತದೆ."),
            React.createElement('li', null, "Court Proceedings: The trial process begins with both parties presenting their case. / ನ್ಯಾಯಾಲಯ ಪ್ರಕ್ರಿಯೆ: ನ್ಯಾಯಾಲಯವು ವಿಚಾರಣೆಯ ಪ್ರಾರಂಭವನ್ನು ಮಾಡುತ್ತದೆ, ಭಾಗವಹಿಸುವ ಪಕ್ಷಗಳು ತಮ್ಮ ಕಾರಣವನ್ನು ಮಂಡಿಸುತ್ತವೆ."),
            React.createElement('li', null, "Appeal: Both parties can appeal the judgment if dissatisfied. / ಅಪೀಲ್ಗೆ ಹಕ್ಕು: ತಪ್ಪಿತಸ್ಥವಾದಲ್ಲಿ ಅಥವಾ ನ್ಯಾಯಾಲಯದ ತೀರ್ಪಿಗೆ ಅಸಮಾಧಾನವಾದರೆ, ಮೇಲ್ದರ್ಜೆ ನ್ಯಾಯಾಲಯದಲ್ಲಿ ಅಪೀಲ್ ಸಲ್ಲಿಸಬಹುದು.")
          ),
        )
      ),
    },
    {
      label: "Legal Rights for Women & Children / ಹೆಣ್ಣು ಮತ್ತು ಮಕ್ಕಳ ಕಾನೂನು ಹಕ್ಕುಗಳು",
      value: "women-children-rights",
      keywords: ["women", "children", "rights", "ಹೆಣ್ಣು", "ಮಕ್ಕಳು", "ಹಕ್ಕುಗಳು"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('p', { className: "font-medium" }, "Women's Rights / ಹೆಣ್ಣಿನ ಹಕ್ಕುಗಳು:"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, "Protection against domestic violence, workplace harassment, and more (e.g., PWDVA, Dowry Prohibition Act). / ಗೃಹ ಹಿಂಸೆ, ಕೆಲಸದ ಸ್ಥಳದಲ್ಲಿ ಧೃಷ್ಟಿಕೋಣವಿಲ್ಲದೆ ಕಾರ್ಯನಿರ್ವಹಣೆ, ಮತ್ತಷ್ಟು.")
          ),
          React.createElement('p', { className: "font-medium mt-4" }, "Children's Rights / ಮಕ್ಕಳ ಹಕ್ಕುಗಳು:"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, "Protection under the Juvenile Justice Act and the POCSO Act, the right to education, and protection against child labor. / ಮಕ್ಕಳ ಹಕ್ಕು ರಕ್ಷಣೆಯ ಕಾನೂನುಗಳು, ಶಿಕ್ಷಣ ಹಕ್ಕು, ಮಕ್ಕಳ ಶೋಷಣೆ ವಿರುದ್ಧದ ಕಾನೂನುಗಳು.")
          ),
          React.createElement('p', { className: "font-medium mt-4" }, "Report Issues / ಸಮಸ್ಯೆಗಳನ್ನು ವರದಿ ಮಾಡಿ:"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, 
              React.createElement('a', {
                href: "https://www.ncw.gov.in/ncw-cells/ncw-women-helpline/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "Women's Helpline (1091) / ಮಹಿಳಾ ಸಹಾಯ ಹಾರ್ಟ್‌ಲೈನ್ (1091)")
            ),
            React.createElement('li', null, 
              React.createElement('a', {
                href: "https://childlineindia.org/a/about/childline-india",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "Childline (1098) / ಚೈಲ್ಡ್‌ಲೈನ್ (1098)")
            )
          )
        )
      ),
    },
    {
      label: "Free Legal Aid & Support Services / ಉಚಿತ ಕಾನೂನು ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ ಸೇವೆಗಳು",
      value: "legal-aid",
      keywords: ["legal", "aid", "support", "ಕಾನೂನು", "ಸಹಾಯ", "ಬೆಂಬಲ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('p', { className: "font-medium" }, "Helplines / ಹೆಲ್ಪ್ಲೈನ್ಗಳು:"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, "Police Emergency: 100 / ಪೋಲೀಸ್ ಆವಶ್ಯಕತೆ: 100"),
            React.createElement('li', null, "Women's Helpline: 1091 / ಮಹಿಳಾ ಸಹಾಯ ಹಾರ್ಟ್‌ಲೈನ್: 1091"),
            React.createElement('li', null, "Legal Aid Helpline: 15100 / ಕಾನೂನು ಸಹಾಯ: 15100")
          ),
          React.createElement('p', { className: "font-medium mt-4" }, "How to Access Free Legal Aid / ಉಚಿತ ಕಾನೂನು ಸಹಾಯ ಪಡೆಯುವ ವಿಧಾನಗಳು:"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, "Visit a local police station for assistance. / ನಿಮ್ಮ ಹತ್ತಿರದ ಪೊಲೀಸ್ ಠಾಣೆಗೆ ಭೇಟಿ ನೀಡಿ."),
            React.createElement('li', null, "Approach the District Legal Services Authority for free legal help. / ಜಿಲ್ಲಾ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕರಣವನ್ನು ಸಂಪರ್ಕಿಸಿ."),
            React.createElement('li', null, "Use online portals for FIR filing and legal aid services. / ಆನ್ಲೈನ್‌ನ ಮೂಲಕ FIR ದಾಖಲಿಸಿ ಮತ್ತು ಕಾನೂನು ಸೇವೆಗಳನ್ನು ಪಡೆಯಿರಿ.")
          ),
          React.createElement('p', { className: "font-medium mt-4" }, "Online Resources / ಆನ್‌ಲೈನ್ ಸಂಪನ್ಮೂಲಗಳು:"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, 
              React.createElement('a', {
                href: "https://nalsa.gov.in/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "National Legal Services Authority / ರಾಷ್ಟ್ರೀಯ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕರಣ")
            ),
            React.createElement('li', null, 
              React.createElement('a', {
                href: "https://ksp.karnataka.gov.in/legal-aid",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-blue-600 hover:underline"
              }, "Karnataka Legal Services Authority / ಕರ್ನಾಟಕ ಕಾನೂನು ಸೇವಾ ಪ್ರಾಧಿಕರಣ")
            )
          )
        )
      ),
    },
  ],
}; 