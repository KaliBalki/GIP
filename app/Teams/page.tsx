"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Cards from "../_components/Teams/Cards";
import Navbar from "../_components/Navbar/Navbar";
import Titles from "../_components/Titles/Titles";
import Footer from "../_components/Footer/Footer";
import Search from "../_components/Teams/Search";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar />

        <Titles />
        <Search />
        <Cards />
        <Footer />
      </div>
    </div>
  );
}
