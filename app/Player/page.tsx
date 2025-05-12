"use client";

import React from "react";
import PlayerStats from "./Darksection/PlayerStats"; // Import the PlayerStats component
import DarkSection from "./Darksection/DarkSection"; // Import the DarkSection component

const Home: React.FC = () => {
  return (
    <>
      <div className="w-screen min-h-[30rem] bg-gradient-to-r from-[#6bff6b] via-[#6bff6b] to-[#324332] flex items-center justify-center">
        <PlayerStats />
      </div>
      <DarkSection />
    </>
  );
};

export default Home;
