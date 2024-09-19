import React from "react";

interface SearchPlayerProps {
  setActiveSearch: (search: "team" | "player") => void;
}

const SearchPlayer: React.FC<SearchPlayerProps> = ({ setActiveSearch }) => {
  return (
    <div className="bg-[transparent] md:pt-4 pt-5">
      <div className="flex items-center bg-[#161616] rounded-2xl px-6 py-4 w-full max-w-lg border border-transparent focus-within:border-[#ffffff81] transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search Player"
          className="bg-transparent text-white placeholder-[#6c6c6c] outline-none ml-4 w-full text-xl focus:outline-none"
          onFocus={() => setActiveSearch("player")}
        />
      </div>
    </div>
  );
};

export default SearchPlayer;
