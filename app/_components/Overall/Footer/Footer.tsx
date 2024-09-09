"use client";

import React from "react";
import Button from "../Buttons/Buttons";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-[#ff6205] to-[#6f44ab] text-white py-24 mt-52">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="text-center md:text-8xl text-6xl font-bold">
          <p>Get Started Now</p>
        </div>
        <Button
          className="mt-9"
          variant="learnMore"
          onClick={() => alert("ali homo")}
        >
          Learn more &rarr;
        </Button>

        <hr className="w-full border-t-2 border-white mt-12 mb-12" />
        <div className="text-center">
          <Image
            src="/NoBG_White.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
