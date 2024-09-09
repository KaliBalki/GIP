import React from "react";
import Image from "next/image";

const CardPlayer = () => {
  return (
    <div className="flex ">
      <div className="max-w-md rounded-2xl p-[3px] bg-gradient-to-r from-[#4a2684] via-[#c261d1] to-[#f15410] hover:from-[#3b206ac2] hover:via-[#a24bb5c0] hover:to-[#f15310be] transition-colors duration-500">
        <div className="rounded-xl p-3 !pr-52 bg-BgColor transition-colors duration-500 hover:bg-[#0b0b0c]">
          <div className="flex items-center">
            <Image
              src="/profile.webp"
              alt="Logo"
              width={45}
              height={45}
              className="mr-4 rounded-full"
            />
            <div className="space-y-1">
              <p className="text-white font-medium text-base">Player Name</p>
              <p className="text-white font-extralight text-sm">Number</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPlayer;
