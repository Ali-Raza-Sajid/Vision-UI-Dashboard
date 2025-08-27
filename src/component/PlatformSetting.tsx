import React, { useState } from "react";

interface ToggleProps {
  label: string;
  defaultChecked?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ label, defaultChecked = false }) => {
  const [enabled, setEnabled] = useState(defaultChecked);

  return (
    <div className="flex items-center md:gap-[.75vw] gap-2">
      {/* Toggle button */}
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex md:h-[1.25vw] h-4 md:w-[2.25vw] w-7 items-center rounded-full transition-colors duration-300 ${
          enabled ? "bg-primary" : "bg-[#373737]"
        }`}
      >
        <span
          className={`inline-block md:h-[.9vw] h-2.5 md:w-[.9vw] w-2.5 transform rounded-full bg-white transition-transform duration-300 ${
            enabled ? "md:translate-x-[.98vw] translate-x-3" : "md:translate-x-[.3vw] translate-x-1"
          }`}
        />
      </button>
      {/* Text changes color based on enabled */}
      <span
        className={`font-medium md:text-[.98vw] text-[12px] md:my-[.3vw] my-1 ${
          enabled ? "" : "text-secondary"
        }`}
      >
        {label}
      </span>
    </div>
  );
};

// ----------------- SETTINGS DATA -----------------
const settingsData = [
  {
    section: "ACCOUNT",
    items: [
      { label: "Email when someone follows me", defaultChecked: true },
      { label: "Email when someone answers", defaultChecked: false },
      { label: "Email when someone mentions me", defaultChecked: true },
    ],
  },
  {
    section: "APPLICATION",
    items: [
      { label: "New launches and projects", defaultChecked: false },
      { label: "Monthly product updates", defaultChecked: false },
      { label: "Subscribe to newsletter", defaultChecked: true },
      { label: "Receive mails weekly", defaultChecked: true },
    ],
  },
];
// -------------------------------------------------

const PlatformSettings: React.FC = () => {
  return (
    <section className="bg-brand md:p-[1.25vw] p-4 rounded-2xl md:col-span-1 col-span-4">
      <h2 className="md:text-[1.25vw] text-sm font-semibold">
        Platform Settings
      </h2>

      {settingsData.map((section) => (
        <div key={section.section}>
          <h3 className="font-medium md:text-[.98vw] text-[12px] md:my-[.6vw] mt-2 mb-1 text-secondary">
            {section.section}
          </h3>
          {section.items.map((item, idx) => (
            <Toggle
              key={idx}
              label={item.label}
              defaultChecked={item.defaultChecked}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default PlatformSettings;
