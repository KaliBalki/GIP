import React from "react";
import Image from "next/image";

const FixturesCard = () => {
  return (
    <div className=" text-white  rounded-lg shadow-md w-full ">
      <div className="flex flex-row justify-evenly items-center bg-[#161616] p-3 rounded-lg !py-9 !px-5 space-x-6">
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
        <div className="text-center text-xl font-bold">14:30</div>

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
