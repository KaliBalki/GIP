"use client";

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

// Example players list with images
const players = [
  { value: "lionel-messi", label: "Lionel Messi", image: "/Player.png" },
  {
    value: "cristiano-ronaldo",
    label: "Cristiano Ronaldo",
    image: "/Player.png",
  },
  {
    value: "kylian-mbappe",
    label: "Kylian Mbappé",
    image: "/Player.png",
  },
  { value: "neymar", label: "Neymar", image: "/Player.png" },
  {
    value: "kevin-de-bruyne",
    label: "Kevin De Bruyne",
    image: "/Player.png",
  },
];

interface SearchPlayerProps {
  setSelectedPlayer: (player: string) => void;
}

const SearchPlayers: React.FC<SearchPlayerProps> = ({ setSelectedPlayer }) => {
  const [value, setValue] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState(players);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setFilteredPlayers(
      players.filter((player) =>
        player.label.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  };

  return (
    <div className="bg-[transparent] ">
      <div className="flex items-center bg-[#161616] rounded-2xl px-6 py-3 w-full max-w-2xl border border-transparent focus-within:border-[#ffffff81] transition-all">
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

        <input
          type="text"
          placeholder="Zoek Spelers"
          className="bg-transparent text-white placeholder-[#6c6c6c] outline-none ml-4 w-full text-xl"
          value={value}
          onChange={handleInputChange}
        />
      </div>

      <AnimatePresence>
        {value && (
          <motion.div
            className="bg-[#101010] absolute rounded-xl w-full max-w-[22.5rem] mt-2 border"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Command>
              <CommandList>
                {filteredPlayers.length > 0 ? (
                  <CommandGroup>
                    {filteredPlayers.map((player) => (
                      <CommandItem
                        key={player.value}
                        onSelect={() => {
                          setValue(player.label); // Set the selected player's name in the input
                          setSelectedPlayer(player.label); // Call the setSelectedPlayer function
                        }}
                        className="flex items-center"
                      >
                        <Image
                          src={player.image}
                          alt={`${player.label} image`}
                          width={28}
                          height={28}
                          className="mr-3 rounded-full"
                        />
                        {player.label}
                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            value === player.label ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ) : (
                  <CommandEmpty>No players found...</CommandEmpty>
                )}
              </CommandList>
            </Command>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchPlayers;
