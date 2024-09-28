import React from "react";
import Image from "next/image";
import TeamTabs from "./TeamTabs"; // Import the new TeamTabs component

interface TeamProps {
  onTabChange: (tab: "squad" | "fixtures") => void;
  activeTab: string; // Add activeTab as a prop to highlight the current tab
}

const Team: React.FC<TeamProps> = ({ onTabChange, activeTab }) => {
  return (
    <div className="pt-32 md:pl-96">
      <div className="flex md:flex-row flex-col text-white justify-center items-center md:space-x-32 space-y-8">
        <Image
          src="/NoBG_White.png"
          width={300}
          height={300}
          alt="Team Logo"
          className="w-48 h-48 md:w-72 md:h-72"
        />
        <div className="md:w-full text-center md:px-0 px-20 flex flex-col justify-center">
          <div className="md:text-8xl text-4xl font-bold">TeamName</div>
          <hr className="md:border-2 md:my-4 border my-2 border-white w-full" />

        
          <TeamTabs activeTab={activeTab} onTabChange={onTabChange} />
        </div>
      </div>
    </div>
  );
};

export default Team;
