import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="max-w-md rounded-3xl p-[5px] ">
      <div className="rounded-[calc(1.5rem-6px)] p-8 !pr-32 bg-[#161616] ">
        <div className="flex items-center">
          <Image
            src="/NoBG_White.png"
            alt="Logo"
            width={40}
            height={40}
            className="mr-4"
          />
          <p className="text-white font-semibold text-lg">TeamName</p>
        </div>

        <div className="mt-8 flex gap-4 items-center">
          <div>
            <h3 className="font-medium text-white">Captain</h3>
            <span className="text-sm tracking-wide text-white opacity-80">
              Amount of players
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
