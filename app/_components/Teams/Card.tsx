import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="flex px-2 ">
      <div className="max-w-md rounded-3xl p-[5px] bg-gradient-to-b from-[#4a2684] via-[#c261d1] to-[#f6934c]">
        <div className="rounded-[calc(1.5rem-6px)] p-8 !pr-32 bg-BgColor dark:bg-gray-900">
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
              <h3 className=" font-medium text-white">Captain</h3>
              <span className="text-sm tracking-wide text-white opacity-80">
                Amount of players
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
