"use client";

import React from "react";
import HeroTitle from "./HeroTitle";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="relative w-full  p-10 bg-transparent">
      <HeroTitle></HeroTitle>
      <HeroImage></HeroImage>
    </div>
  );
};

export default Hero;
