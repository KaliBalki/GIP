"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Cards from "../_components/Teams/Cards";
import Navbar from "../_components/Overall/Navbar/Navbar";
import Titles from "../_components/Overall/Titles/Titles";
import Footer from "../_components/Overall/Footer/Footer";
import Search from "../_components/Teams/Search";

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Titles
          title="Our League Teams"
          subtitle="Meet the teams that define the Efield League."
          description="From fierce rivalries to unforgettable moments, these squads bring the game to life."
        />
        <Search />
        <Cards />
      </div>
    </div>
  );
};

export default Home;
