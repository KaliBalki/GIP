import React from "react";
import Image from "next/image";
const Line = () => {
  return (
    <div className="w-full h-10 bg-gradient-to-r from-[#6b419e] to-[#fd6208] justify-start items-center gap-2.5 inline-flex mt-10">
      <div className=" flex flex-row space-x-4 pl-6">
        <Image
          src="/NoBG_White.png"
          width={20}
          height={20}
          alt="Picture of the author"
        />
        <div className="font-bold text-white">eField - Div 1</div>
      </div>
    </div>
  );
};

export default Line;
