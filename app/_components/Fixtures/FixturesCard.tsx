import React from "react";
import Image from "next/image";
import Link from "next/link";

const FixturesCard = () => {
  return (
    <div className=" text-white  rounded-lg shadow-md w-full ">
      <div className="flex flex-row justify-evenly items-center bg-[#161616] p-3 rounded-lg !py-9 !px-5 space-x-6">
        <div className="flex flex-col items-center">
          <Link href="/Team">
            <Image
              src="/NoBG_White.png"
              width={50}
              height={50}
              alt="Team 1 Logo"
            />
          </Link>
          <div className="mt-2 text-lg">Team 1</div>
        </div>

        <div className="text-center text-xl font-bold">14:30</div>

        <div className="flex flex-col items-center">
          <Link href="/Team">
            <Image
              src="/NoBG_White.png"
              width={50}
              height={90}
              alt="Team 2 Logo"
            />
          </Link>
          <div className="mt-2 text-lg">Team 2</div>
        </div>
      </div>
    </div>
  );
};

export default FixturesCard;
