import React from "react";
import Image from "next/image";

const CardPlayer = () => {
  return (
    <div className="max-w-md rounded-2xl p-[3px]">
      <div className="rounded-xl p-4 !pr-52 bg-[#161616] transition-colors duration-300 hover:bg-[#141414]">
        <div className="flex items-center">
          <Image
            src="/profile.webp"
            alt="Logo"
            width={45}
            height={45}
            className="mr-4 rounded-full"
          />
          <div className="space-y-1">
            <p className="text-white font-medium text-base w-full whitespace-nowrap overflow-hidden text-ellipsis">
              Player Name gasd
            </p>
            <p className="text-white font-extralight text-sm">Number</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPlayer;
