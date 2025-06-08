import React from 'react';

/**
 * Traffic options
 * @type {import('../../components/chatbot/types').Option}
 */
export const trafficOptions = {
  label: "Traffic Rules and Safety / ಟ್ರಾಫಿಕ್ ನಿಯಮಗಳು ಮತ್ತು ಸುರಕ್ಷತೆ",
  value: "traffic",
  keywords: ["traffic", "rules", "safety", "fines", "signs", "ಟ್ರಾಫಿಕ್", "ನಿಯಮಗಳು", "ಸುರಕ್ಷತೆ", "ದಂಡಗಳು", "ಸೂಚನೆಗಳು"],
  subOptions: [
    {
      label: "Traffic Rules / ಟ್ರಾಫಿಕ್ ನಿಯಮಗಳು",
      value: "traffic-rules",
      keywords: ["rules", "regulations", "guidelines", "ನಿಯಮಗಳು", "ವಿಧಿಗಳು"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Follow traffic rules to stay safe and avoid penalties. / ರಸ್ತೆ ಸುರಕ್ಷತೆಗಾಗಿ ಹಾಗೂ ದಂಡ ತಪ್ಪಿಸಲು ನಿಯಮಗಳನ್ನು ತಪ್ಪದೇ ಪಾಲಿಸಬೇಕು."),
        React.createElement('div', { className: "mt-4" },
          React.createElement('p', { className: "font-medium" }, "General Rules / ಸಾಮಾನ್ಯ ನಿಯಮಗಳು:"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, "Obey traffic signals and signboards. / ಸಿಗ್ನಲ್‌ಗಳು ಮತ್ತು ಸೂಚನಾ ಫಲಕಗಳನ್ನು ಪಾಲಿಸಿ."),
            React.createElement('li', null, "Use zebra crossings and footpaths. / ಜೇಬ್ರಾ ಕ್ರಾಸಿಂಗ್ ಮತ್ತು ಪಾದಚಾರಿ ಪಥ ಬಳಸಿರಿ."),
            React.createElement('li', null, "Do not use mobile phones while driving. / ಚಾಲನೆ ಮಾಡುವಾಗ ಮೊಬೈಲ್ ಬಳಸಿ ಬೇಡಿ.")
          )
        ),
        React.createElement('div', { className: "mt-4" },
          React.createElement('p', { className: "font-medium" }, "Two-Wheelers / ದ್ವಿಚಕ್ರ ವಾಹನಗಳು:"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, "Wear a helmet—both rider and pillion. / ಚಾಲಕ ಮತ್ತು ಹಿಂಬದಿಯವರು ಹೆಲ್ಮೆಟ್ ಧರಿಸುವುದು ಕಡ್ಡಾಯ."),
            React.createElement('li', null, "Triple riding is illegal. / ಮೂರು ಜನರು ಬೈಕ್‌ನಲ್ಲಿ ಪ್ರಯಾಣಿಸುವುದು ಕಾನೂನುಬಾಹಿರ.")
          )
        ),
        React.createElement('div', { className: "mt-4" },
          React.createElement('p', { className: "font-medium" }, "Four-Wheelers / ನಾಲ್ಕು ಚಕ್ರ ವಾಹನಗಳು:"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, "Wear seatbelts at all times. / ಯಾವಾಗಲೂ ಸೀಟ್‌ಬೆಲ್ಟ್ ಹಾಕಿಕೊಳ್ಳಿ."),
            React.createElement('li', null, "Do not overtake from the left or lane cut. / ಎಡಬದಿಯಿಂದ ಓವರ್ಟೇಕ್ ಮಾಡಬೇಡಿ, ಲೈನ್ ಕಟ್ ಮಾಡಬೇಡಿ.")
          )
        ),
        React.createElement('div', { className: "mt-4" },
          React.createElement('a', {
            href: "https://ksp.karnataka.gov.in/traffic",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-blue-600 hover:underline"
          }, "View Complete Traffic Rules / ಸಂಪೂರ್ಣ ಟ್ರಾಫಿಕ್ ನಿಯಮಗಳನ್ನು ವೀಕ್ಷಿಸಿ")
        )
      ),
    },
    {
      label: "Spot Fines / ಸ್ಥಳದಲ್ಲಿಯೇ ವಿಧಿಸುವ ದಂಡಗಳು",
      value: "spot-fines",
      keywords: ["fines", "penalties", "violations", "ದಂಡಗಳು", "ಉಲ್ಲಂಘನೆಗಳು"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Common Traffic Violations and Fines / ಸಾಮಾನ್ಯ ಟ್ರಾಫಿಕ್ ಉಲ್ಲಂಘನೆಗಳು ಮತ್ತು ದಂಡಗಳು"),
        React.createElement('div', { className: "mt-4 overflow-x-auto" },
          React.createElement('table', { className: "min-w-full border-collapse" },
            React.createElement('thead', null,
              React.createElement('tr', { className: "bg-gray-100" },
                React.createElement('th', { className: "border p-2 text-left" }, "Violation / ಉಲ್ಲಂಘನೆ"),
                React.createElement('th', { className: "border p-2 text-left" }, "Fine / ದಂಡ")
              )
            ),
            React.createElement('tbody', null,
              React.createElement('tr', null,
                React.createElement('td', { className: "border p-2" }, "Riding without helmet / ಹೆಲ್ಮೆಟ್ ಇಲ್ಲದೇ ಸವಾರಿಕೆ"),
                React.createElement('td', { className: "border p-2" }, "₹500")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: "border p-2" }, "Driving without seatbelt / ಸೀಟ್‌ಬೆಲ್ಟ್ ಇಲ್ಲದೆ ಚಾಲನೆ"),
                React.createElement('td', { className: "border p-2" }, "₹1,000")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: "border p-2" }, "Mobile phone while driving / ಮೊಬೈಲ್ ಬಳಸಿ ಚಾಲನೆ"),
                React.createElement('td', { className: "border p-2" }, "₹1,000 (1st), ₹2,000 (repeat)")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: "border p-2" }, "Drunk driving / ಮದ್ಯ ಸೇವಿಸಿ ಚಾಲನೆ"),
                React.createElement('td', { className: "border p-2" }, "₹10,000 + Jail")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: "border p-2" }, "Over speeding / ಗರಿಷ್ಠ ವೇಗ ಮೀರಿ ಚಾಲನೆ"),
                React.createElement('td', { className: "border p-2" }, "₹1,000 – ₹2,000")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: "border p-2" }, "Triple riding / ಮೂರು ಜನ ಬೈಕ್‌ನಲ್ಲಿ"),
                React.createElement('td', { className: "border p-2" }, "₹500")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: "border p-2" }, "Driving without license / ಲೈಸೆನ್ಸ್ ಇಲ್ಲದೆ ಚಾಲನೆ"),
                React.createElement('td', { className: "border p-2" }, "₹5,000")
              ),
              React.createElement('tr', null,
                React.createElement('td', { className: "border p-2" }, "Jumping signal / ಟ್ರಾಫಿಕ್ ಸಿಗ್ನಲ್ ಮೀರುವುದು"),
                React.createElement('td', { className: "border p-2" }, "₹1,000")
              )
            )
          )
        ),
        React.createElement('div', { className: "mt-4 space-y-2" },
          React.createElement('a', {
            href: "https://echallan.parivahan.gov.in/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-blue-600 hover:underline block"
          }, "Pay Traffic Fines Online / ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಟ್ರಾಫಿಕ್ ದಂಡ ಪಾವತಿಸಿ"),
          React.createElement('a', {
            href: "https://btp.karnataka.gov.in/117/spot-fines/en",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-blue-600 hover:underline block"
          }, "View Complete Fine List / ಸಂಪೂರ್ಣ ದಂಡ ಪಟ್ಟಿ ವೀಕ್ಷಿಸಿ")
        )
      ),
    },
    {
      label: "Road Safety Signs / ರಸ್ತೆ ಸುರಕ್ಷತೆ ಸೂಚನೆಗಳು",
      value: "road-signs",
      keywords: ["signs", "symbols", "indicators", "ಸೂಚನೆಗಳು", "ಚಿಹ್ನೆಗಳು"],
      info: React.createElement('div', { className: "space-y-4 text-sm" },
        React.createElement('p', { className: "font-medium" }, "Understanding road signs helps in safe and disciplined driving. / ರಸ್ತೆ ಸೂಚನೆಗಳನ್ನು ತಿಳಿದುಕೊಂಡರೆ ಸುರಕ್ಷಿತ ಮತ್ತು ಶಿಸ್ತಿನ ಚಾಲನೆ ಸಾಧ್ಯ."),
        React.createElement('div', { className: "mt-4" },
          React.createElement('p', { className: "font-medium" }, "Mandatory Signs / ಕಡ್ಡಾಯ ಸೂಚನೆಗಳು:"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, "Stop / ನಿಲ್ಲಿಸಿ"),
            React.createElement('li', null, "No Entry / ಪ್ರವೇಶವಿಲ್ಲ"),
            React.createElement('li', null, "Speed Limit / ವೇಗ ಮಿತಿ"),
            React.createElement('li', null, "No U-turn / ಯು-ಟರ್ನ್ ನಿರ್ಬಂಧಿತ")
          )
        ),
        React.createElement('div', { className: "mt-4" },
          React.createElement('p', { className: "font-medium" }, "Cautionary Signs / ಎಚ್ಚರಿಕೆ ಸೂಚನೆಗಳು:"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, "Sharp Curve / ತಿವಿದ ವಕ್ರತೆ"),
            React.createElement('li', null, "Steep Ascent/Descent / ಏರಿಜಾರ / ಇಳಿಜಾರ"),
            React.createElement('li', null, "Pedestrian Crossing / ಪಾದಚಾರಿ ಮಾರ್ಗ"),
            React.createElement('li', null, "School Zone / ಶಾಲಾ ವಲಯ")
          )
        ),
        React.createElement('div', { className: "mt-4" },
          React.createElement('p', { className: "font-medium" }, "Informatory Signs / ಮಾಹಿತಿ ಸೂಚನೆಗಳು:"),
          React.createElement('ul', { className: "list-disc pl-4 space-y-2" },
            React.createElement('li', null, "Hospital Ahead / ಆಸ್ಪತ್ರೆ ಮುಂದೆ"),
            React.createElement('li', null, "Parking Zone / ಪಾರ್ಕಿಂಗ್ ಪ್ರದೇಶ"),
            React.createElement('li', null, "Petrol Pump / ಪೆಟ್ರೋಲ್ ಪಂಪ್"),
            React.createElement('li', null, "Bus Stop / ಬಸ್ ನಿಲ್ದಾಣ")
          )
        ),
        React.createElement('div', { className: "mt-4 space-y-2" },
          React.createElement('a', {
            href: "https://btp.karnataka.gov.in/168/traffic-signs/en",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-blue-600 hover:underline block"
          }, "View Traffic Signs / ಟ್ರಾಫಿಕ್ ಸೂಚನೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ"),
          React.createElement('a', {
            href: "https://btp.karnataka.gov.in/116/advice-to-drivers/en",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-blue-600 hover:underline block"
          }, "Road Safety Guidelines / ರಸ್ತೆ ಸುರಕ್ಷತೆ ಮಾರ್ಗದರ್ಶಿಗಳು")
        )
      ),
    },
  ],
}; 