import React from "react";
import Card from "./Card"; // Assuming Card is in the same folder
import { motion } from "framer-motion";
import Link from "next/link";
const Cards = () => {
  return (
    <motion.div
      className="text-white opacity-65 font-light text-sm px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.8 }}
    >
      <div className="flex justify-center pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <Link href="/Team">
            <Card />
          </Link>
          <Link href="/Team">
            <Card />
          </Link>
          <Link href="/Team">
            <Card />
          </Link>
          <Link href="/Team">
            <Card />
          </Link>
          <Link href="/Team">
            <Card />
          </Link>
          <Link href="/Team">
            <Card />
          </Link>
          <Link href="/Team">
            <Card />
          </Link>
          <Link href="/Team">
            <Card />
          </Link>
          <Link href="/Team">
            <Card />
          </Link>
          <Link href="/Team">
            <Card />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
