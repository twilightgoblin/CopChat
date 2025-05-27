import React from 'react';

/**
 * Utilities options
 * @type {import('../../components/chatbot/types').Option}
 */
export const utilitiesOptions = {
  label: "Utilities and Additional Services / ಉಪಯೋಗಗಳು ಮತ್ತು ಹೆಚ್ಚಿನ ಸೇವೆಗಳು",
  value: "utilities",
  keywords: ["utility", "service", "tool", "help", "ಉಪಯೋಗ", "ಸೇವೆ", "ಸಹಾಯ"],
  subOptions: [
    {
      label: "Passport Verification / ಪಾಸ್‌ಪೋರ್ಟ್ ಪರಿಶೀಲನೆ",
      value: "passport-verification",
      keywords: ["passport", "verification", "check", "ಪಾಸ್‌ಪೋರ್ಟ್", "ಪರಿಶೀಲನೆ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Passport Verification / ಪಾಸ್‌ಪೋರ್ಟ್ ಪರಿಶೀಲನೆ"),
        React.createElement('p', null, "Need to verify your passport application details or check the status of your verification? Our police department helps you with passport verification for various government and personal purposes. / ನಿಮ್ಮ ಪಾಸ್‌ಪೋರ್ಟ್ ಅರ್ಜಿ ವಿವರಗಳನ್ನು ಪರಿಶೀಲಿಸಲು ಅಥವಾ ಪರಿಶೀಲನಾ ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಲು ಇದು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ನಮ್ಮ ಪೊಲೀಸ್ ಇಲಾಖೆ ಹಕಿದ ಮೂಲಕ ನಿಮ್ಮ ಪಾಸ್‌ಪೋರ್ಟ್ ಪರಿಶೀಲನೆ ಸಹಾಯವನ್ನು ಮಾಡುತ್ತದೆ."),
        React.createElement('p', { className: "font-medium mt-4" }, "How to apply / ಹೇಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು:"),
        React.createElement('ol', { className: "list-decimal pl-4 space-y-2" },
          React.createElement('li', null, 
            React.createElement('a', {
              href: "https://portal2.passportindia.gov.in/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-blue-600 hover:underline"
            }, "Visit the Passport Seva Portal / ಪಾಸ್‌ಪೋರ್ಟ್ ಸೇವಾ ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ")
          ),
          React.createElement('li', null, "Provide your passport details (application number, etc.) / ಅರ್ಜಿಯ ವಿವರಗಳನ್ನು ನೀಡಿ (ಅರ್ಜಿಫೋನ್ ನಂಬರ್ ಅಥವಾ ಇತರೆ ಮಾಹಿತಿ)"),
          React.createElement('li', null, "Our team will verify your application through the police system and provide the results / ನಾವು ಪೋಲಿಸ್ ವ್ಯವಸ್ಥೆ ಮೂಲಕ ನಿಮ್ಮ ಅರ್ಜಿಯನ್ನು ಪರಿಶೀಲಿಸಿ ಫಲಿತಾಂಶಗಳನ್ನು ನೀಡುತ್ತೇವೆ")
        )
      ),
    },
    {
      label: "Job Verification / ಉದ್ಯೋಗ ಪರಿಶೀಲನೆ",
      value: "job-verification",
      keywords: ["job", "verification", "employment", "ಉದ್ಯೋಗ", "ಪರಿಶೀಲನೆ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Job Verification / ಉದ್ಯೋಗ ಪರಿಶೀಲನೆ"),
        React.createElement('p', null, "Employers can request job verification for their prospective employees, ensuring that all candidates have no criminal history. This helps companies maintain a safe and trustworthy work environment. / ನೌಕರಿಗೆ ಅಭ್ಯರ್ಥಿಗಳ ಕ್ರಿಮಿನಲ್ ಹಿಸ್ಟರಿ ಇಲ್ಲದಿರುವುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಉದ್ಯೋಗ ಪರಿಶೀಲನೆ ಸೇವೆಯನ್ನು ಬಳಸಬಹುದು. ಇದು ಕಂಪನಿಗಳಿಗೆ ಸುರಕ್ಷಿತ ಮತ್ತು ನಂಬಲಾರ್ಹವಾದ ಕೆಲಸದ ವಾತಾವರಣವನ್ನು ನಿರ್ವಹಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ."),
        React.createElement('p', { className: "font-medium mt-4" }, "How to apply / ಹೇಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು:"),
        React.createElement('ol', { className: "list-decimal pl-4 space-y-2" },
          React.createElement('li', null, "Submit the necessary details about the candidate (name, address, etc.) / ಅಭ್ಯರ್ಥಿಯ ವಿವರಗಳನ್ನು (ಹೆಸರು, ವಿಳಾಸ, ಇತ್ಯಾದಿ) ಸಲ್ಲಿಸಿ"),
          React.createElement('li', null, "The police will verify the applicant's background and provide confirmation / ಪೋಲಿಸ್ ನಿಮ್ಮ ಹಿನ್ನಲೆಯನ್ನು ಪರಿಶೀಲಿಸಿ ದೃಢೀಕರಣ ನೀಡುತ್ತವೆ")
        )
      ),
    },
    {
      label: "Locked House Monitoring System / ಬಾಗಿಲು ಹಾಕಿದ ಮನೆ ನಿಯಂತ್ರಣ ವ್ಯವಸ್ಥೆ",
      value: "locked-house",
      keywords: ["house", "monitoring", "security", "vacation", "ಮನೆ", "ನಿಯಂತ್ರಣ", "ಸುರಕ್ಷತೆ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Locked House Monitoring / ಬಾಗಿಲು ಹಾಕಿದ ಮನೆ ನಿಯಂತ್ರಣ"),
        React.createElement('p', null, "Traveling or going on vacation? Don't worry about the security of your home! We offer a service to monitor your house while you're away. / ಪ್ರಯಾಣ ಅಥವಾ ಹಾಲಿ ರಜೆಯಲ್ಲಿದ್ದರೆ ನಿಮ್ಮ ಮನೆಯ ಸುರಕ್ಷತೆ ಬಗ್ಗೆ ಚಿಂತೆ ಮಾಡಬೇಡಿ! ನಾವು ನಿಮ್ಮ ನೆಲೆಯನ್ನು ನಿಯಂತ್ರಿಸಲು ಸೇವೆಯನ್ನು ಒದಗಿಸುತ್ತೇವೆ."),
        React.createElement('p', { className: "font-medium mt-4" }, "How it works / ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ:"),
        React.createElement('ol', { className: "list-decimal pl-4 space-y-2" },
          React.createElement('li', null, 
            React.createElement('a', {
              href: "/house-monitoring",
              className: "text-blue-600 hover:underline"
            }, "Register for House Monitoring / ಮನೆ ನಿಯಂತ್ರಣಕ್ಕೆ ನೋಂದಣಿ ಮಾಡಿ")
          ),
          React.createElement('li', null, "Register your home with the police department by providing details like address, contact, and duration of absence / ನಿಮ್ಮ ಮನೆವನ್ನು ಪೋಲಿಸ್ ಇಲಾಖೆಗೆ ನೋಂದಣಿ ಮಾಡಿಸಿ, ವಿಳಾಸ, ಸಂಪರ್ಕ ವಿವರಗಳು ಮತ್ತು ಅಪ್ರಸ್ಥಿತಿಯ ಅವಧಿ ನೀಡಿರಿ"),
          React.createElement('li', null, "Our team will monitor the area and ensure your home is safe during your absence / ನಮ್ಮ ತಂಡ ನಿಮ್ಮ ಮನೆ ಸುತ್ತಲೂ ಪರಿಶೀಲನೆ ಮಾಡುತ್ತೆ ಮತ್ತು ನಿಮ್ಮ ಅಸ್ತಿತ್ವದಲ್ಲಿ ಸುರಕ್ಷತೆಯ ಖಚಿತತೆ ನೀಡುತ್ತದೆ")
        )
      ),
    },
    {
      label: "Senior Citizen Assistance / ಹಿರಿಯ ನಾಗರಿಕ ಸಹಾಯ",
      value: "senior-citizen",
      keywords: ["senior", "citizen", "elderly", "help", "ಹಿರಿಯ", "ನಾಗರಿಕ", "ಸಹಾಯ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Senior Citizen Assistance / ಹಿರಿಯ ನಾಗರಿಕ ಸಹಾಯ"),
        React.createElement('p', null, "We care about the well-being of our senior citizens! If you're a senior citizen or you have elderly family members, we offer dedicated services for their safety and assistance. / ನಾವು ನಮ್ಮ ಹಿರಿಯ ನಾಗರಿಕರ ಕಲ್ಯಾಣವನ್ನು ಗಮನಿಸುತ್ತೇವೆ! ನೀವು ಹಿರಿಯ ನಾಗರಿಕರಾಗಿದ್ದರೆ ಅಥವಾ ನಿಮ್ಮ ಕುಟುಂಬದಲ್ಲಿ ಹಿರಿಯರು ಇದ್ದರೆ, ನಾವು ಅವರ ಸುರಕ್ಷತೆ ಮತ್ತು ಸಹಾಯಕ್ಕಾಗಿ ವಿಶೇಷ ಸೇವೆಗಳನ್ನು ನೀಡುತ್ತೇವೆ."),
        React.createElement('p', { className: "font-medium mt-4" }, "Services include / ಸೇವೆಗಳು ಒಳಗೊಂಡಿವೆ:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, 
            React.createElement('a', {
              href: "/senior-citizen-registration",
              className: "text-blue-600 hover:underline"
            }, "Register for Senior Citizen Assistance / ಹಿರಿಯ ನಾಗರಿಕ ಸಹಾಯಕ್ಕೆ ನೋಂದಣಿ ಮಾಡಿ")
          ),
          React.createElement('li', null, "Regular visits or check-ins from local police / ಸ್ಥಳೀಯ ಪೋಲಿಸ್‌ರಿಂದ ನಿಯಮಿತ ಭೇಟಿ ಅಥವಾ ಪರಿಶೀಲನೆ"),
          React.createElement('li', null, "Emergency assistance contacts and services / ತುರ್ತು ಸಹಾಯ ಸಂಪರ್ಕಗಳು ಮತ್ತು ಸೇವೆಗಳು"),
          React.createElement('li', null, "Help with any security concerns or complaints / ಯಾವುದೇ ಸುರಕ್ಷತೆ ಸಂಬಂಧಿತ ಸಮಸ್ಯೆಗಳಿಗೆ ಅಥವಾ ದೂರುಗಳಿಗೆ ಸಹಾಯ")
        )
      ),
    },
    {
      label: "Loudspeaker Permission / ಲೌಡ್‌ಸ್ಪೀಕರ್ ಅನುಮತಿ",
      value: "loudspeaker",
      keywords: ["loudspeaker", "permission", "event", "ಲೌಡ್‌ಸ್ಪೀಕರ್", "ಅನುಮತಿ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Loudspeaker Permission / ಲೌಡ್‌ಸ್ಪೀಕರ್ ಅನುಮತಿ"),
        React.createElement('p', null, "Planning an event or gathering that requires the use of loudspeakers? To maintain peace and avoid disturbance, obtaining loudspeaker permission is necessary. / ಲೌಡ್‌ಸ್ಪೀಕರ್ ಬಳಸುವ ಕಾರ್ಯಕ್ರಮ ಅಥವಾ ಸಂಗ್ರಹಣೆಯ ಯೋಜನೆ ಇದ್ದರೆ, ಸಮಾಧಾನವನ್ನು ಕಾಯ್ದುಕೊಳ್ಳಲು ಹಾಗೂ ವಿಶೇಷ ಲೌಡ್‌ಸ್ಪೀಕರ್ ಅನುಮತಿ ಪಡೆಯುವುದು ಅಗತ್ಯವಾಗಿದೆ."),
        React.createElement('p', { className: "font-medium mt-4" }, "How to apply / ಹೇಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು:"),
        React.createElement('ol', { className: "list-decimal pl-4 space-y-2" },
          React.createElement('li', null, 
            React.createElement('a', {
              href: "/loudspeaker-permission",
              className: "text-blue-600 hover:underline"
            }, "Apply for Loudspeaker Permission / ಲೌಡ್‌ಸ್ಪೀಕರ್ ಅನುಮತಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ")
          ),
          React.createElement('li', null, "Fill out an online application with event details / ಈವೆಂಟ್ ವಿವರಗಳೊಂದಿಗೆ ಆನ್ಲೈನ್ ಅರ್ಜಿಯನ್ನು ಭರ್ತಿ ಮಾಡಿ"),
          React.createElement('li', null, "Provide location, time, and purpose of the event / ಸ್ಥಳ, ಸಮಯ ಮತ್ತು ಉದ್ದೇಶ ವಿವರಗಳನ್ನು ನೀಡಿ"),
          React.createElement('li', null, "Our team will review the application and issue permission (if approved) / ನಮ್ಮ ತಂಡ ಅರ್ಜಿಯನ್ನು ಪರಿಶೀಲಿಸಿ ಅನುಮತಿ ನೀಡುತ್ತದೆ (ಒಪ್ಪಿಗೆಯಾದರೆ)")
        )
      ),
    },
    {
      label: "Women Safety Assistance / ಮಹಿಳಾ ಸುರಕ್ಷತೆ ಸಹಾಯ",
      value: "women-safety",
      keywords: ["women", "safety", "security", "help", "ಮಹಿಳಾ", "ಸುರಕ್ಷತೆ", "ಸಹಾಯ"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Women Safety Assistance / ಮಹಿಳಾ ಸುರಕ್ಷತೆ ಸಹಾಯ"),
        React.createElement('p', null, "Your safety is our priority! We offer dedicated services for women's safety and security. Whether you're facing harassment, need emergency assistance, or want to report an incident, our police team is ready to help. / ನಿಮ್ಮ ಸುರಕ್ಷತೆ ನಮ್ಮ ಮೊದಲ ಆದ್ಯತೆ! ನಾವು ಮಹಿಳೆಯರ ಸುರಕ್ಷತೆಗಾಗಿ ವಿಶೇಷ ಸೇವೆಗಳನ್ನು ನೀಡುತ್ತೇವೆ. ನೀವು ಹಾರಸು ಹೊತ್ತಿರುವುದಾದರೂ, ತುರ್ತು ಸಹಾಯ ಬೇಕಾದರೂ, ಅಥವಾ ಘಟನೆ ಒದಗಿಸಲು ನಮ್ಮ ಪೋಲಿಸ್ ತಂಡ ನಿಮ್ಮ ಸಹಾಯಕ್ಕೆ ಸಿದ್ಧವಾಗಿದೆ."),
        React.createElement('p', { className: "font-medium mt-4" }, "Services include / ಸೇವೆಗಳು ಒಳಗೊಂಡಿವೆ:"),
        React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
          React.createElement('li', null, 
            React.createElement('a', {
              href: "/women-safety-registration",
              className: "text-blue-600 hover:underline"
            }, "Register for Women Safety Services / ಮಹಿಳಾ ಸುರಕ್ಷತೆ ಸೇವೆಗಳಿಗೆ ನೋಂದಣಿ ಮಾಡಿ")
          ),
          React.createElement('li', null, 
            React.createElement('a', {
              href: "https://wcd.nic.in/schemes/one-stop-centre-scheme",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-blue-600 hover:underline"
            }, "Emergency Helplines: 24/7 assistance for women in distress / ತುರ್ತು ಸಹಾಯಹಸ್ತಗಳು: 24/7 ಸಮಯದಲ್ಲಿ ಮಹಿಳೆಯರಿಗೆ ಸಹಾಯ")
          ),
          React.createElement('li', null, 
            React.createElement('a', {
              href: "/report-harassment",
              className: "text-blue-600 hover:underline"
            }, "Report Harassment / ಹಾರಸು ವರದಿ ಮಾಡಿ")
          ),
          React.createElement('li', null, 
            React.createElement('a', {
              href: "/self-defense-registration",
              className: "text-blue-600 hover:underline"
            }, "Register for Self-Defense Training / ಆತ್ಮರಕ್ಷಣೆ ತರಬೇತಿಗೆ ನೋಂದಣಿ ಮಾಡಿ")
          )
        )
      ),
    },
  ],
}; 