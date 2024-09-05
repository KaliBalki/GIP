import React from "react";
import { motion } from "framer-motion";

const Search = () => {
  return (
    <motion.div
      className="text-white opacity-65 font-light text-sm px-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      <div className="flex justify-center bg-transparent md:pt-4 pt-5 px-14">
        <div className="flex items-center border border-white rounded-full px-4 py-2 w-full max-w-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.41-1.41l4.38 4.38a1 1 0 01-1.42 1.42l-4.37-4.38zM8 14A6 6 0 108 2a6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Search Clubs"
            className="bg-transparent text-white placeholder-gray-500 outline-none ml-3 w-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Search;
