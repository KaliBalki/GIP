import React from "react";
import Image from "next/image";

const FixturesCard = () => {
  return (
    <div
      className="bg-transparent text-white p-1 border-transparent rounded-lg shadow-md w-full max-w-md mx-auto 
      bg-gradient-to-r from-[#4a2684] via-[#c261d1] to-[#f6934c] 
      bg-clip-border"
    >
      <div className="flex flex-row justify-between items-center bg-BgColor p-5 rounded-lg !py-7 !px-10 space-x-7">
        {/* Team 1 Section */}
        <div className="flex flex-col items-center">
          <Image
            src="/NoBG_White.png"
            width={50}
            height={50}
            alt="Team 1 Logo"
          />
          <div className="mt-2 text-lg">Team 1</div>
        </div>

        {/* Time Section */}
        <div className="text-center text-lg font-bold">14:30</div>

        {/* Team 2 Section */}
        <div className="flex flex-col items-center">
          <Image
            src="/NoBG_White.png"
            width={50}
            height={50}
            alt="Team 2 Logo"
          />
          <div className="mt-2 text-lg">Team 2</div>
        </div>
      </div>
    </div>
  );
};

export default FixturesCard;
