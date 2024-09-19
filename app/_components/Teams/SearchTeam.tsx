import React from "react";

interface SearchProps {
  setActiveSearch: (search: "team" | "player") => void;
}

const Search: React.FC<SearchProps> = ({ setActiveSearch }) => {
  return (
    <div className="bg-[transparent] md:pt-4 pt-5">
      <div className="flex items-center bg-[#161616] rounded-2xl px-6 py-4 w-full max-w-lg border border-transparent focus-within:border-[#ffffff81] transition-all">
        {/* Search Icon */}
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
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 15h18" />
        </svg>

        <input
          type="text"
          placeholder="Search Clubs"
          className="bg-transparent text-white placeholder-[#6c6c6c] outline-none ml-4 w-full text-xl focus:outline-none"
          onFocus={() => setActiveSearch("team")}
        />
      </div>
    </div>
  );
};

export default Search;
