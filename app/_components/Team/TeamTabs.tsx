import React from "react";

interface TeamTabsProps {
  activeTab: string;
  onTabChange: (tab: "squad" | "fixtures") => void;
}

const TeamTabs: React.FC<TeamTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="relative inline-flex flex-row space-x-10 text-xl">
      {/* Gradient background that moves based on active tab */}
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg transition-all duration-500 ${
          activeTab === "squad" ? "left-5" : "left-[128px]"
        } w-[100px] h-full z-0`}
      ></div>

      {/* Squad Button */}
      <button
        className={`focus:outline-none relative z-10 ${
          activeTab === "squad" ? "text-white" : "text-gray-400"
        }`}
        onClick={() => onTabChange("squad")}
      >
        Squad
      </button>

      {/* Fixtures Button */}
      <button
        className={`focus:outline-none relative z-10 ${
          activeTab === "fixtures" ? "text-white" : "text-gray-400"
        }`}
        onClick={() => onTabChange("fixtures")}
      >
        Fixtures
      </button>

      {/* Discord (Static) */}
      <div className="relative z-10">Discord</div>
    </div>
  );
};

export default TeamTabs;
