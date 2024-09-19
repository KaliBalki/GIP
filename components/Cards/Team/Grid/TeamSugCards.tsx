import React from "react";
import Card from "../TeamSugCard"; // Assuming Card is in the same folder
import { motion } from "framer-motion";
import Link from "next/link";
const Cards = () => {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8 ">
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
  );
};

export default Cards;
