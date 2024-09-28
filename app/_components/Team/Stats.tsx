import React from "react";
import TeamController from "../Fixtures/TeamController";
import { TeamChart } from "./TeamChart";

const Stats = () => {
  return (
    <div className="w-full">
      {/* First container: Section Stats and Overall Stats */}
      <div className="flex justify-center mt-10 w-full">
        <div className="flex md:flex-row flex-col justify-between max-w-5xl ">
          {/* Section Stats */}
          <div className="bg-[#161616] w-full md:w-64 p-4 rounded-lg mb-2">
            <h2 className="text-2xl font-bold text-center mb-4 text-white">
              Section Stats
            </h2>
            {/* Responsive grid: 2x2 on small screens, 4x1 on md+ */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 text-white">
              <div className="p-3 bg-[#292929] rounded-lg text-center">
                Gk Stats
              </div>
              <div className="p-3 bg-[#292929] rounded-lg text-center">
                Defense Stats
              </div>
              <div className="p-3 bg-[#292929] rounded-lg text-center">
                Midfield Stats
              </div>
              <div className="p-3 bg-[#292929] rounded-lg text-center">
                Attackers Stats
              </div>
            </div>
          </div>

          {/* Overall Stats */}
          <div className="md:ml-6 flex flex-col justify-center bg-[#0f0f0f]  p-4 md:p-8 rounded-lg border w-full md:w-auto">
            <h2 className="text-3xl font-bold text-center mb-6 text-white">
              Overall Stats
            </h2>
            {/* Updated grid for 2x2 on small screens and 4x1 on medium+ */}
            <div className="grid text-center grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 bg-opacity-80 rounded-lg self-center ">
              <div className="flex flex-col">
                <p className="text-4xl md:text-5xl font-medium">186</p>
                <p className="text-sm">Goals</p>
              </div>
              <div className="flex flex-col">
                <p className="text-4xl md:text-5xl font-medium">0</p>
                <p className="text-sm">Shots</p>
              </div>
              <div className="flex flex-col">
                <p className="text-4xl md:text-5xl font-medium">0</p>
                <p className="text-sm">Passes</p>
              </div>
              <div className="flex flex-col">
                <p className="text-4xl md:text-5xl font-medium">0</p>
                <p className="text-sm">Tackles</p>
              </div>
              <div className="flex flex-col">
                <p className="text-4xl md:text-5xl font-medium">0</p>
                <p className="text-sm">Interceptions</p>
              </div>
              <div className="flex flex-col">
                <p className="text-4xl md:text-5xl font-medium">0</p>
                <p className="text-sm">Saves</p>
              </div>
              <div className="flex flex-col">
                <p className="text-4xl md:text-5xl font-medium">0</p>
                <p className="text-sm">Catches</p>
              </div>
              <div className="flex flex-col">
                <p className="text-4xl md:text-5xl font-medium">0</p>
                <p className="text-sm">Matches played</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second container: TeamController and TeamChart */}
      <div className="flex flex-col items-center mt-10 w-full">
        <div className="max-w-4xl w-full p-4">
          <TeamController />
        </div>
        <div className="max-w-5xl w-full p-4">
          <TeamChart />
        </div>
      </div>
    </div>
  );
};

export default Stats;
