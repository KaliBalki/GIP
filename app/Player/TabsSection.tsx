import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MyChart } from "./PlayerChart";
import PlayerTransferTable from "./PlayerTransferTable";

const TabsSection: React.FC = () => {
  return (
    <Tabs defaultValue="Players">
      <div className="flex items-center justify-center sm:justify-center xl:justify-start w-full text-center sm:text-left">
        {/* Heading and Line */}
        <div className="flex items-center md:flex-row flex-col space-y-4">
          <h1 className="Grotesk text-white text-6xl font-semibold">Faded</h1>
          <hr className="2xl:w-96 lg:w-72 md:w-24 w-16 border-t-4 border-dotted border-[#262626] mx-4 rounded-3xl" />
          <TabsList className="flex justify-center sm:justify-start">
            <TabsTrigger value="Players">Overview</TabsTrigger>
            <TabsTrigger value="Stats">Stats</TabsTrigger>
          </TabsList>
        </div>
      </div>

      {/* Tabs Content */}
      <div className="mt-4 w-full">
        <TabsContent value="Players" className="w-full">
          <h1 className="text-2xl font-bold text-center md:text-left bg-gradient-to-r from-[#8b53cc] to-[#da7f59] bg-clip-text text-transparent">
            Personal Details
          </h1>
          <PlayerTransferTable />
        </TabsContent>

        <TabsContent value="Stats" className="w-full">
          <h1 className="text-2xl font-bold mb-4 text-center md:text-left bg-gradient-to-r from-[#8b53cc] to-[#da7f59] bg-clip-text text-transparent">
            Stats Breakdown
          </h1>
          <div className=" p-4 rounded-xl">
            <MyChart />
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default TabsSection;
