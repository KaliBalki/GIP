"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Team from "../_components/Team/Team";
import Squad from "../_components/Team/Squad"; // Assuming Squad is defined
import Fixtures from "../_components/Team/Fixture"; // Assuming Fixtures is defined

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState("squad"); // Set default tab to Squad

  return (
    <>
      <Team onTabChange={setActiveTab} activeTab={activeTab} />

      <AnimatePresence mode="wait">
        {activeTab === "squad" && (
          <motion.div
            key="squad-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-white text-7xl flex justify-center pt-32 font-bold"
          >
            Squad
          </motion.div>
        )}
        {activeTab === "fixtures" && (
          <motion.div
            key="fixtures-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-white text-7xl flex justify-center pt-32 font-bold"
          >
            Fixtures
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {activeTab === "squad" && <Squad />}
        {activeTab === "fixtures" && <Fixtures />}
      </AnimatePresence>
    </>
  );
};

export default Home;
