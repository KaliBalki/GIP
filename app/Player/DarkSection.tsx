import React from "react";
import PlayerInfoCard from "./PlayerInfoCard";
const DarkSection: React.FC = () => {
  return (
    <>
      {" "}
      <div className="w-screen h-screen  bg-transparent text-white  flex shadow-[-10px_-40px_80px_rgba(0,0,0,0.9)]">
        {" "}
        <PlayerInfoCard />
      </div>
    </>
  );
};

export default DarkSection;
