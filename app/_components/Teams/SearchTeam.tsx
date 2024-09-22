import React, { useState } from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Command,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

// Example teams list with logos
const teams = [
  { value: "barcelona", label: "FC Barcelona", logo: "/NoBG_White.png" },
  { value: "real-madrid", label: "Real Madrid", logo: "/NoBG_White.png" },
  { value: "psg", label: "Paris Saint-Germain", logo: "/NoBG_White.png" },
  {
    value: "manchester-city",
    label: "Manchester City",
    logo: "/NoBG_White.png",
  },
  { value: "bayern-munich", label: "Bayern Munich", logo: "/NoBG_White.png" },
];

interface SearchProps {
  setActiveSearch: (search: "team" | "player") => void;
}

const Search: React.FC<SearchProps> = ({ setActiveSearch }) => {
  const [value, setValue] = useState("");
  const [filteredTeams, setFilteredTeams] = useState(teams);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setFilteredTeams(
      teams.filter((team) =>
        team.label.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  };

  return (
    <div className="bg-[transparent] md:pt-4 pt-5">
      <div className="flex items-center bg-[#161616] rounded-2xl px-6 py-4 w-full max-w-lg border border-transparent focus-within:border-[#ffffff81] transition-all">
        {/* Team Icon */}
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

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search Clubs"
          className="bg-transparent text-white placeholder-[#6c6c6c] outline-none ml-4 w-full text-xl"
          value={value}
          onChange={handleInputChange}
          onFocus={() => setActiveSearch("team")}
        />
      </div>

      <AnimatePresence>
        {value && (
          <motion.div
            className="bg-[#101010] absolute rounded-xl  w-full max-w-lg mt-2 border"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Command>
              <CommandList>
                {filteredTeams.length > 0 ? (
                  <CommandGroup>
                    {filteredTeams.map((team) => (
                      <CommandItem
                        key={team.value}
                        onSelect={() => setValue(team.label)}
                        className="flex items-center"
                      >
                        <Image
                          src={team.logo}
                          alt={`${team.label} logo`}
                          width={24}
                          height={24}
                          className="mr-3"
                        />
                        {team.label}
                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            value === team.label ? "opacity-100" : "opacity-0"
                          )}
                        />
                        <hr className="h-10"></hr>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ) : (
                  <CommandEmpty>No teams found...</CommandEmpty>
                )}
              </CommandList>
            </Command>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search;
