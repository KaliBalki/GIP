import React from "react";
import PlayerInfoCard from "./PlayerInfoCard";
import TabsSection from "./TabsSection";

const DarkSection: React.FC = () => {
  return (
    <>
      <div className="!w-screen !h-screen bg-transparent text-white flex justify-center shadow-[-10px_-40px_80px_rgba(0,0,0,0.9)]">
        <div className="w-full max-w-6xl mt-16">
          <div className="flex sm:flex-row flex-col sm:space-x-10 space-x-0 space-y-10 sm:space-y-0 sm:px-0 px-16">
            <PlayerInfoCard />
            <TabsSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default DarkSection;
