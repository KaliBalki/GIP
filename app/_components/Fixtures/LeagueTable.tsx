import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Team {
  id: number;
  name: string;
  logo: string;
  MP: number;
  W: number;
  D: number;
  L: number;
  GF: number;
  GA: number;
  GD: number;
  Pts: number;
  Last5: string[];
}

const teamsData: Team[] = [
  {
    id: 1,
    name: "Man United",
    logo: "/NoBG_White.png",
    MP: 17,
    W: 11,
    D: 3,
    L: 3,
    GF: 34,
    GA: 24,
    GD: 10,
    Pts: 34,
    Last5: ["W", "W", "W", "D", "W"],
  },
  {
    id: 2,
    name: "Liverpool",
    logo: "/NoBG_White.png",
    MP: 17,
    W: 9,
    D: 6,
    L: 2,
    GF: 37,
    GA: 21,
    GD: 16,
    Pts: 33,
    Last5: ["L", "D", "W", "W", "W"],
  },
  {
    id: 3,
    name: "Chelsea",
    logo: "/NoBG_White.png",
    MP: 17,
    W: 10,
    D: 4,
    L: 3,
    GF: 38,
    GA: 19,
    GD: 19,
    Pts: 34,
    Last5: ["W", "W", "L", "D", "W"],
  },
  {
    id: 4,
    name: "Arsenal",
    logo: "/NoBG_White.png",
    MP: 16,
    W: 8,
    D: 4,
    L: 4,
    GF: 30,
    GA: 18,
    GD: 12,
    Pts: 28,
    Last5: ["W", "D", "L", "W", "L"],
  },
  {
    id: 5,
    name: "Man City",
    logo: "/NoBG_White.png",
    MP: 16,
    W: 11,
    D: 3,
    L: 2,
    GF: 40,
    GA: 22,
    GD: 18,
    Pts: 36,
    Last5: ["W", "W", "W", "W", "L"],
  },
];

const LeagueTable = () => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Team;
    direction: string;
  }>({
    key: "Pts", // Default sort by points
    direction: "desc", // Default sort direction
  });

  const handleSort = (key: keyof Team) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedTeams = [...teamsData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  return (
    <div className="flex flex-col overflow-y-hidden md:overflow-x-hidden">
      <div className="-my-2 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full text-sm text-white">
              <thead className="bg-[#6f429b] text-xs uppercase font-medium">
                <tr>
                  <th></th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider cursor-pointer"
                    onClick={() => handleSort("name")}
                  >
                    Club
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider cursor-pointer"
                    onClick={() => handleSort("MP")}
                  >
                    MP
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider cursor-pointer"
                    onClick={() => handleSort("W")}
                  >
                    W
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider cursor-pointer"
                    onClick={() => handleSort("D")}
                  >
                    D
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider cursor-pointer"
                    onClick={() => handleSort("L")}
                  >
                    L
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider cursor-pointer"
                    onClick={() => handleSort("GF")}
                  >
                    GF
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider cursor-pointer"
                    onClick={() => handleSort("GA")}
                  >
                    GA
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider cursor-pointer"
                    onClick={() => handleSort("GD")}
                  >
                    GD
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider cursor-pointer"
                    onClick={() => handleSort("Pts")}
                  >
                    Pts
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left tracking-wider"
                  >
                    Last 5
                  </th>
                </tr>
              </thead>
              <tbody className="bg-transparent">
                <AnimatePresence>
                  {sortedTeams.map((team, index) => (
                    <motion.tr
                      key={team.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      layout
                      transition={{ duration: 0.3 }}
                      className={
                        index % 2 === 0 ? "bg-[#161616] bg-opacity-100" : ""
                      }
                    >
                      {/* Render the correct rank */}
                      <td className="pl-4">{index + 1}</td>
                      <td className="flex px-6 py-4 whitespace-nowrap">
                        <Image
                          className="w-5"
                          src={team.logo}
                          alt={team.name}
                          width={24}
                          height={24}
                        />
                        <span className="ml-2 font-medium">{team.name}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left">
                        {team.MP}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left">
                        {team.W}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left">
                        {team.D}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left">
                        {team.L}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left">
                        {team.GF}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left">
                        {team.GA}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left">
                        {team.GD}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left">
                        {team.Pts}
                      </td>
                      <td className="flex px-6 py-4 whitespace-nowrap">
                        {team.Last5.map((result, i) => (
                          <svg
                            key={i}
                            className={`w-4 fill-current ${
                              result === "W"
                                ? "text-green-600"
                                : result === "D"
                                ? "text-gray-400"
                                : "text-red-500"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueTable;
