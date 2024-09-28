import React from "react";
import Image from "next/image"; // Import Image for Next.js

const PlayerStats: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl md:space-x-24">
      <div className="flex flex-col items-center">
        <Image
          src="/Player.png" // Placeholder for the user-uploaded image
          alt="Player Image"
          width={500}
          height={500}
          className="rounded-lg w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] object-contain" // Different sizes for mobile, medium, and large screens
        />
      </div>

      <div className="flex flex-col text-white md:ml-12">
        <div className="flex flex-row items-center justify-center md:justify-start space-x-2 ml-7">
          <h1 className="text-9xl font-bold">16</h1>
          <div className="flex flex-col justify-center">
            <p className="text-6xl font-medium">Faded</p>
            <p className="text-3xl font-extralight">Attacker</p>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-4 gap-x-14 gap-y-7 mt-3 bg-[#522544] bg-opacity-80 p-7 rounded-lg">
          <div className="flex flex-col">
            <p className="text-5xl font-medium">186</p>
            <p className="text-sm">Goals</p>
          </div>
          <div className="flex flex-col">
            <p className="text-5xl font-medium">0</p>
            <p className="text-sm">Shots</p>
          </div>
          <div className="flex flex-col">
            <p className="text-5xl font-medium">0</p>
            <p className="text-sm">Passes</p>
          </div>
          <div className="flex flex-col">
            <p className="text-5xl font-medium">0</p>
            <p className="text-sm">Tackles</p>
          </div>
          <div className="flex flex-col">
            <p className="text-5xl font-medium">0</p>
            <p className="text-sm">Interceptions</p>
          </div>
          <div className="flex flex-col">
            <p className="text-5xl font-medium">0</p>
            <p className="text-sm">Saves</p>
          </div>
          <div className="flex flex-col">
            <p className="text-5xl font-medium">0</p>
            <p className="text-sm">Catches</p>
          </div>
          <div className="flex flex-col">
            <p className="text-5xl font-medium">0</p>
            <p className="text-sm">Matches played</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
