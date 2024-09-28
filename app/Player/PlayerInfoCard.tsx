import React from "react";

const PlayerInfoCard = () => {
  return (
    <div className="flex flex-col w-full  bg-[#121212] p-5 rounded-2xl border-white border border-opacity-5 ">
      <div className="flex justify-between">
        <div className="text-base font-extralight">Club</div>
        <div className="font-medium">Manchester City</div>
      </div>
      <hr className="my-2 -mx-5  border-t border-white border-opacity-5" />
      <div className="flex justify-between">
        <div className="text-base font-extralight">Position</div>
        <div className="font-medium">Attacker</div>
      </div>
      <hr className="my-2 -mx-5  border-t border-white border-opacity-5" />
      <div className="flex justify-between">
        <div className="text-base font-extralight">Nationality</div>
        <div className="font-medium">Iraq</div>
      </div>
      <hr className="my-2 -mx-5  border-t border-white border-opacity-5" />

      <div className="flex flex-col">
        <div className="text-base font-extralight">Social Links</div>
        <div className="flex space-x-5">
          <div className="font-normal">Steam</div>
          <div className="font-normal">Discord</div>
        </div>
      </div>
      <div className="mt-9 flex flex-col">
        <h1 className="text-xl font-bold bg-gradient-to-r from-[#8b53cc] to-[#da7f59] bg-clip-text text-transparent">
          Honours & Awards
        </h1>
        <div className="flex justify-between flex-col">
          <div className="flex justify-between">
            <h1
              className="text-base
         font-extralight bg-gradient-to-r"
            >
              Premier League Champion
            </h1>
            <h1
              className="text-lg
         font-medium bg-gradient-to-r"
            >
              2
            </h1>
          </div>
          <div className="flex justify-between">
            <h1
              className="text-base
         font-extralight bg-gradient-to-r"
            >
              Premier League Champion
            </h1>
            <h1
              className="text-lg
         font-medium bg-gradient-to-r"
            >
              2
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfoCard;
