import React from "react";
import FixturesCard from "./FixturesCard"; // Assuming FixturesCard is in the same folder
import { motion } from "framer-motion";
interface FixtureCardsProps {
  duration?: number;
}

const FixtureCards: React.FC<FixtureCardsProps> = ({ duration }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 ">
        <FixturesCard />
        <FixturesCard />
        <FixturesCard />
        <FixturesCard />
        <FixturesCard />
        <FixturesCard />
        <FixturesCard />
        <FixturesCard />
      </div>
    </div>
  );
};

export default FixtureCards;
