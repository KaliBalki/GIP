import React from "react";
import TeamController from "../../Fixtures/TeamController";
import { TeamChart } from "./TeamChart";

const Stats = () => {
  return (
    <div className="w-full mb-32">
      {/* First container: Section Stats and Overall Stats */}
      <div className="flex justify-center mt-10 w-full">
        <div className="flex md:flex-row flex-col justify-between max-w-5xl ">
          {/* Section Stats */}
<div className="bg-[#161616] w-full md:w-64 p-4 rounded-lg mb-2">
  <h2 className="text-2xl font-bold text-center mb-4 text-white">
    Sectie Statistieken
  </h2>
  {/* Responsief raster: 2x2 op kleine schermen, 4x1 op md+ */}
  <div className="grid grid-cols-2 md:grid-cols-1 gap-4 text-white">
    <div className="p-3 bg-[#292929] rounded-lg text-center">
      Keeperstats
    </div>
    <div className="p-3 bg-[#292929] rounded-lg text-center">
      Verdedigingsstats
    </div>
    <div className="p-3 bg-[#292929] rounded-lg text-center">
      Middenveldstats
    </div>
    <div className="p-3 bg-[#292929] rounded-lg text-center">
      Aanvalstats
    </div>
  </div>
</div>


          {/* Overall Stats */}
         <div className="md:ml-6 flex flex-col justify-center bg-[#0f0f0f] p-4 md:p-8 rounded-lg border w-full md:w-auto">
  <h2 className="text-3xl font-bold text-center mb-6 text-white">
    Totale Statistieken
  </h2>
  {/* Raster aangepast voor 2x2 op kleine schermen en 4x1 op middelgrote+ schermen */}
  <div className="grid text-center grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 bg-opacity-80 rounded-lg self-center ">
    <div className="flex flex-col">
      <p className="text-4xl md:text-5xl font-medium">186</p>
      <p className="text-sm">Doelpunten</p>
    </div>
    <div className="flex flex-col">
      <p className="text-4xl md:text-5xl font-medium">0</p>
      <p className="text-sm">Schoten</p>
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
      <p className="text-sm">Intercepties</p>
    </div>
    <div className="flex flex-col">
      <p className="text-4xl md:text-5xl font-medium">0</p>
      <p className="text-sm">Reddingen</p>
    </div>
    <div className="flex flex-col">
      <p className="text-4xl md:text-5xl font-medium">0</p>
      <p className="text-sm">Vangballen</p>
    </div>
    <div className="flex flex-col">
      <p className="text-4xl md:text-5xl font-medium">0</p>
      <p className="text-sm">Gespeelde wedstrijden</p>
    </div>
  </div>
</div>

        </div>
      </div>

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
