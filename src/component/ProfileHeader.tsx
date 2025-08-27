import React, { useState } from "react";
import { FaWrench } from "react-icons/fa";
import { BsFileText } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";

const ProfileHeader: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab((prev) => (prev === tab ? null : tab));
  };

  return (
    <section className="md:flex hidden flex-col col-span-4 bg-brand rounded-xl p-4 md:px-[1.5vw] md:py-[1vw]">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center md:gap-[.75vw] gap-2">
          <div className="relative">
            <img
              src="Avatar1.webp"
              alt="Profile"
              className="w-14 h-14 md:w-[3.5vw] md:h-[3.5vw] rounded-xl object-cover"
            />
            {/* Pencil icon overlay */}
            <span className="absolute bottom-0 right-0 bg-primary text-white p-[2px] rounded-full text-[10px] md:text-[.6vw]">
              ✏️
            </span>
          </div>
          <div>
            <h2 className="font-semibold text-white md:text-[1vw] text-base">
              Mark Johnson
            </h2>
            <p className="text-secondary md:text-[.8vw] text-xs">
              mark@simmmpple.com
            </p>
          </div>
        </div>

        {/* Right Section - Navigation */}
        <div className="flex items-center md:gap-[.75vw] gap-2">
          <button
            onClick={() => handleTabClick("overview")}
            className={`flex items-center md:gap-[.5vw] gap-2 rounded-md md:text-[.8vw] text-xs font-medium md:px-[1vw] px-3 md:py-[.4vw] py-1 ${
              activeTab === "overview"
                ? "bg-primary text-white"
                : "text-white hover:bg-primary/50"
            }`}
          >
            <RiDashboardFill className="text-[12px] md:text-[.8vw]" />
            OVERVIEW
          </button>
          <button
            onClick={() => handleTabClick("teams")}
            className={`flex items-center md:gap-[.5vw] gap-2 rounded-md md:text-[.8vw] text-xs font-medium md:px-[1vw] px-3 md:py-[.4vw] py-1 ${
              activeTab === "teams"
                ? "bg-primary text-white"
                : "text-white hover:bg-primary/50"
            }`}
          >
            <BsFileText className="text-[12px] md:text-[.8vw]" />
            TEAMS
          </button>
          <button
            onClick={() => handleTabClick("projects")}
            className={`flex items-center md:gap-[.5vw] gap-2 rounded-md md:text-[.8vw] text-xs font-medium md:px-[1vw] px-3 md:py-[.4vw] py-1 ${
              activeTab === "projects"
                ? "bg-primary text-white"
                : "text-white hover:bg-primary/50"
            }`}
          >
            <FaWrench className="text-[12px] md:text-[.8vw]" />
            PROJECTS
          </button>
        </div>
      </div>

      {/* Content Area */}
      {activeTab && (
        <div className="mt-4 bg-[#0e1a3a] rounded-lg p-4 animate-fadeIn">
          {activeTab === "overview" && (
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-brand rounded-xl p-3">
                <h3 className="font-semibold text-white">Profile Stats</h3>
                <p className="text-secondary text-sm mt-1">
                  120+ projects completed, 10 awards.
                </p>
              </div>
              <div className="bg-brand rounded-xl p-3">
                <h3 className="font-semibold text-white">Recent Activity</h3>
                <p className="text-secondary text-sm mt-1">
                  Last login: 2 hours ago
                </p>
              </div>
              <div className="bg-brand rounded-xl p-3">
                <h3 className="font-semibold text-white">Connections</h3>
                <p className="text-secondary text-sm mt-1">25 active teams</p>
              </div>
            </div>
          )}

          {activeTab === "teams" && (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-brand rounded-xl p-3">
                <h3 className="font-semibold text-white">Design Team</h3>
                <p className="text-secondary text-sm mt-1">
                  Working on Urban Retreat
                </p>
                <img
                  src="Avatar2.webp"
                  alt="Team"
                  className="rounded-md mt-2 aspect-video object-cover w-full"
                />
              </div>
              <div className="bg-brand rounded-xl p-3">
                <h3 className="font-semibold text-white">Dev Team</h3>
                <p className="text-secondary text-sm mt-1">
                  Focused on Skyline Tower
                </p>
                <img
                  src="Avatar3.webp"
                  alt="Team"
                  className="rounded-md mt-2 aspect-video object-cover w-full"
                />
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="bg-brand rounded-xl p-3 flex flex-col items-start"
                >
                  <img
                    src={`Avatar${num}.webp`}
                    alt={`Project ${num}`}
                    className="rounded-md w-full aspect-video object-cover"
                  />
                  <h3 className="font-semibold text-white mt-2">
                    Project #{num}
                  </h3>
                  <p className="text-secondary text-sm">
                    Description for project {num}.
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ProfileHeader;
