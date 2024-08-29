import React from "react";
import Image from "next/image";
const HeroImage = () => {
  return (
    <div className="absolute inset-0 flex justify-end items-center -z-30">
      <div className="relative w-3/4 h-[110%] transform translate-x-20 translate-y-20">
        {" "}
        {/* Set height to 120% */}
        <Image
          src="/HomeBg.png"
          alt="Background image for the home page"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default HeroImage;
