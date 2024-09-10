"use client";

import React from "react";
import Image from "next/image"; // Import Image for Next.js

const Home: React.FC = () => {
  return (
    <>
      <div className="w-screen min-h-[30rem] bg-gradient-to-r from-[#6e41a8] via-[#842d79]  to-[#dd8258] flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center max-w-7xl space-x-44">
          <div className="flex flex-col items-center">
            <Image
              src="/Player.png"
              alt="Player Image"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>

          <div className="flex flex-col  text-white ml-12">
            <div className="flex flex-row items-center space-x-2 ml-7">
              {/* Updated this line */}
              <h1 className="text-9xl font-bold">16</h1>
              <div className="flex flex-col justify-center">
                <p className="text-6xl font-medium">Faded</p>
                <p className="text-3xl font-extralight">Attacker</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-x-14 gap-y-7 mt-3 bg-[#522544] bg-opacity-80 p-7 rounded-lg ">
              <div className="flex flex-col">
                <p className="text-5xl font-medium">0</p>
                <p className="text-sm">Matches played</p>
              </div>
              <div className="flex flex-col">
                <p className="text-5xl font-medium">0</p>
                <p className="text-sm">Matches played</p>
              </div>
              <div className="flex flex-col">
                <p className="text-5xl font-medium">0</p>
                <p className="text-sm">Matches played</p>
              </div>
              <div className="flex flex-col">
                <p className="text-5xl font-medium">0</p>
                <p className="text-sm">Matches played</p>
              </div>
              <div className="flex flex-col">
                <p className="text-5xl font-medium">0</p>
                <p className="text-sm">Matches played</p>
              </div>
              <div className="flex flex-col">
                <p className="text-5xl font-medium">0</p>
                <p className="text-sm">Matches played</p>
              </div>
              <div className="flex flex-col">
                <p className="text-5xl font-medium">0</p>
                <p className="text-sm">Matches played</p>
              </div>
              <div className="flex flex-col">
                <p className="text-5xl font-medium">0</p>
                <p className="text-sm">Matches played</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
