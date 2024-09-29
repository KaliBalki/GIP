"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Search from "../_components/Teams/SearchTeam";
import SearchPlayer from "../_components/Teams/SearchPlayer";
import TeamCard from "../../components/Cards/Team/TeamSearchCard";
import PlayerCard from "../../components/Cards/Player/PlayerSearchCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Cards from "../../components/Cards/Team/Grid/TeamSugCards";
import PlayerCards from "../../components/Cards/Player/Grid/PlayerSugCards";

const Home: React.FC = () => {
  const [activeSearch, setActiveSearch] = useState<"team" | "player" | null>(
    null
  );
  const [activeTab, setActiveTab] = useState<"Teams" | "Players">("Teams");
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const handleSelectPlayer = (player: string) => {
    setSelectedPlayer(player);
    setActiveSearch(null); // This line will now only close the search field
  };

  const handleSelectTeam = (team: string) => {
    setSelectedTeam(team);
    setActiveSearch(null); // This line will now only close the search field
  };

  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col xl:flex-row py-10 lg:px-40 text-center xl:text-left ">
        {/* Left side - Title and Search */}
        <div className="xl:flex-1 w-full flex flex-col items-center xl:items-start justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="xl:text-[7rem] text-[5.1rem] text-white font-bold mb-4 leading-tight Grotesk"
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our League <br /> Teams
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 w-full max-w-[400px] xl:max-w-full"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            {/* Team Search */}
            <Search
              setActiveSearch={setActiveSearch}
              activeSearch={activeSearch}
              setSelectedTeam={handleSelectTeam}
            />
            {/* Player Search */}
            <SearchPlayer
              setActiveSearch={setActiveSearch}
              activeSearch={activeSearch}
              setSelectedPlayer={handleSelectPlayer}
            />
          </motion.div>
        </div>

        {/* Right side - TeamCard or PlayerCard with Animation */}
        <div
          className="hidden xl:flex flex-1 justify-center pt-10 relative"
          style={{ height: "auto", minHeight: "500px" }}
        >
          <AnimatePresence mode="wait">
            {activeSearch === "team" && selectedTeam && (
              <motion.div
                key="teamCard"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >
                <TeamCard
                  teamName={selectedTeam}
                  foundationYear="1898"
                  captain="John Doe"
                  titles="5x Champions"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {activeSearch === "player" && selectedPlayer && (
              <motion.div
                key="playerCard"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >
                <PlayerCard
                  playerName={selectedPlayer}
                  position="Forward"
                  rating={5}
                  imageUrl="/NoBG_White.png"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:px-40 pt-52"
        transition={{ duration: 0.8, ease: "easeInOut", delay: 1.3 }}
      >
        <Tabs
          defaultValue="Teams"
          onValueChange={(value) => setActiveTab(value as "Teams" | "Players")}
        >
          <div className="flex items-center justify-center sm:justify-center xl:justify-start w-full text-center sm:text-left">
            {/* Heading and Line */}
            <div className="flex items-center md:flex-row flex-col space-y-4">
              <h1 className="Grotesk text-white text-6xl font-semibold">
                Suggestions
              </h1>
              <hr className="w-24 border-t-4 border-dotted border-[#262626] mx-4 rounded-3xl" />
              <TabsList className="flex justify-center sm:justify-start">
                <TabsTrigger value="Players">Players</TabsTrigger>
                <TabsTrigger value="Teams">Teams</TabsTrigger>
              </TabsList>
            </div>
          </div>

          {/* Tabs Content stays below */}
          <div
            className="mt-8"
            style={{ minHeight: "470px", marginBottom: "2rem" }}
          >
            <div className="flex sm:justify-center justify-center xl:justify-start">
              <AnimatePresence mode="wait">
                {activeTab === "Players" && (
                  <motion.div
                    key="playerCards"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TabsContent value="Players">
                      <div className="px-4">
                        <PlayerCards />
                      </div>
                    </TabsContent>
                  </motion.div>
                )}

                {activeTab === "Teams" && (
                  <motion.div
                    key="teamCards"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TabsContent value="Teams">
                      <Cards />
                    </TabsContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Home;
