import React from "react";
import Image from "next/image";

interface PlayerCardProps {
  playerName: string;
  position: string;
  rating: number;
  imageUrl: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  playerName,
  position,
  rating,
  imageUrl,
}) => {
  return (
    <div className="p-[2px] rounded-3xl  overflow-hidden">
      {/* Actual card content with padding for border effect */}
      <div className="bg-[#161616] w-[350px] h-full shadow-lg rounded-3xl flex flex-col p-4 relative">
        {/* Top Section - Logo and Team Name */}
        <div className="flex justify-center items-center flex-col mb-4 z-10 relative">
          <div className="flex flex-row items-center space-x-3 tracking-widest justify-center">
            <Image
              src={imageUrl}
              width="26"
              height="26"
              alt="Team Logo"
              className="rounded-md"
            />
            <h1 className="text-white opacity-75 font-medium">
              Tieldos United
            </h1>
          </div>

          {/* Image Wrapper with overflow-hidden */}
          <div
            className="relative w-full flex justify-center overflow-hidden"
            style={{ height: "220px" }}
          >
            <Image
              src="/Player.png"
              width="200"
              height="300"
              alt="Player Image"
              className="object-contain"
              style={{ maxHeight: "220px" }} // Limit the height of the player image
            />
          </div>

          {/* Left-Side Rotated Player Name Banner */}
          <div className="absolute transform rotate-[-10deg] bg-gradient-to-r from-[#7c51ae] to-[#c75b4d] text-white py-3 px-10 left-[-30px] top-[210px] shadow-lg z-20">
            <h2 className="text-xl font-bold">{playerName}</h2>
          </div>

          {/* Right-Side Rotated Banner with Custom Shape */}
          <div
            className="absolute transform rotate-[-10deg] bg-gradient-to-r from-[#c75b4d] to-[#fb620a] text-white py-3 px-16 right-[-30px] top-[200px] shadow-lg z-20"
            style={{
              clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <h2 className="text-xl font-bold">Kapitein</h2>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-row justify-between items-center px-5 mt-10 z-10 relative">
          <div className="flex justify-between text-white text-sm tracking-widest">
            {/* Left Column */}
            <div className="flex flex-col space-y-2 font-bold">
              <p>PAC : 95</p>
              <p>SHO : 65</p>
              <p>PAS : 75</p>
            </div>
            {/* Divider */}
            <div className="border border-white mx-4 rounded-lg"></div>
            {/* Right Column */}
            <div className="flex flex-col space-y-2 font-bold">
              <p>DRI : 92</p>
              <p>DEF : 38</p>
              <p>PHY : 99</p>
            </div>
          </div>

          {/* Gradient 10 */}
          <div className="items-center flex text-7xl font-extrabold z-10">
            <p className="bg-gradient-to-l from-[#f66111] to-[#8051a7] bg-clip-text text-transparent">
              10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
