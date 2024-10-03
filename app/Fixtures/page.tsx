"use client";

import Titles from "../_components/Overall/Titles/Titles";
import Controller from "../_components/Fixtures/Controller";
import Line from "../_components/Fixtures/Line";
import FixtureCards from "../_components/Fixtures/FixtureCards";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import LeagueTable from "../_components/Fixtures/LeagueTable";
const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Fixture" | "Table">("Fixture");

  return (
    <div className="overflow-x-hidden mb-32">
      <Titles
        title="Our League Fixtures"
        subtitle="Stay ahead of the game with the latest match schedules."
        description="Don't miss a moment of the action."
      />
      <div className="2xl:px-44 xl:px-28 lg:px-20 md:px-16 px-10 md:pt-20 pt-6 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="md:w-[50rem] flex md:flex-row  flex-col w-full">
            <Controller />
            <hr className="md:mb-0 mb-5 self-center 2xl:w-72 lg:w-72 md:w-24 md:visible collapse border-t-4 border-dotted border-[#262626] mx-4 rounded-3xl" />
            <Tabs
              defaultValue="Fixture"
              className="w-[400px] self-center"
              onValueChange={(value) =>
                setActiveTab(value as "Fixture" | "Table")
              }
            >
              <TabsList>
                <TabsTrigger value="Fixture">Fixture</TabsTrigger>
                <TabsTrigger value="Table">Table</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 1.8, ease: "easeInOut" }}
        >
          <Line />
        </motion.div>

        <div className="">
          {activeTab === "Fixture" && (
            <motion.div
              className="text-white opacity-65 font-light text-sm mt-10 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }} // Quick transition when switching tabs
            >
              <FixtureCards />
            </motion.div>
          )}

          {activeTab === "Table" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }} // Quick transition when switching tabs
              className="text-white text-xl text-center mt-10"
            >
              <LeagueTable />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
