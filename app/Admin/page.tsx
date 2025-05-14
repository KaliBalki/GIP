"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faUserPen,
  faHouse,
  faFutbol,
  faUsers,
  faUser,
  faTicket,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/* ───── page & tab variants ───── */
const pageVariants = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.97 },
  transition: { duration: 0.35, ease: "easeOut" },
};

const tabVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
  transition: { duration: 0.25, ease: "easeOut" },
};

interface StatCardProps {
  title: string;
  value: string;
  icon: any;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => (
  <div className="bg-[#161616] rounded-xl p-6 flex flex-col items-center justify-center shadow-lg">
    <div className="flex items-center space-x-4 mb-2">
      <FontAwesomeIcon icon={icon} className={`text-5xl ${color}`} />
      <p className="text-3xl font-black text-white">{value}</p>
    </div>
    <h2 className="text-lg font-light text-white">{title}</h2>
  </div>
);

interface ControlPanelProps {
  selectedTab: string;
  onChange: (t: "customers" | "players" | "tickets" | "velden") => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  selectedTab,
  onChange,
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.25 }}
    className="flex space-x-6 bg-[#161616] p-4 rounded-xl shadow-md justify-center
               lg:fixed lg:ml-32 ml-44 z-10"
    style={{ x: "-50%" }}
  >
    {[
      { id: "customers", icon: faUsers },
      { id: "players", icon: faUser },
      { id: "tickets", icon: faTicket },
      { id: "velden", icon: faMap },
    ].map((btn) => (
      <button
        key={btn.id}
        onClick={() => onChange(btn.id as any)}
        className={selectedTab === btn.id ? "text-green-500" : "text-white"}
      >
        <FontAwesomeIcon icon={btn.icon} className="text-xl" />
      </button>
    ))}
  </motion.div>
);

const CustomerTable = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>John Doe</TableCell>
        <TableCell>john@example.com</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
const PlayersTable = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>Player</TableHead>
        <TableHead>Position</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>10</TableCell>
        <TableCell>Jane Smith</TableCell>
        <TableCell>Forward</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
const TicketsTable = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>Match</TableHead>
        <TableHead>Price</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>42</TableCell>
        <TableCell>PSO Final</TableCell>
        <TableCell>€50</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
const VeldenTable = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>ID</TableHead>
        <TableHead>Field</TableHead>
        <TableHead>Capacity</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>3</TableCell>
        <TableCell>Main Stadium</TableCell>
        <TableCell>12 000</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export default function AdminPage() {
  const [view, setView] = useState<"home" | "user" | "field" | "settings">(
    "home"
  );
  const [tab, setTab] = useState<
    "customers" | "players" | "tickets" | "velden"
  >("customers");

  return (
    <div className="flex flex-col lg:flex-row">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 2 }}
      >
        <div
          className="mt-12 lg:mt-5 mx-auto lg:mx-0 lg:ml-8
                   bg-[#161616] w-fit rounded-xl p-4 lg:p-6 lg:mb-20"
        >
          <div className="flex flex-row lg:flex-col items-center space-x-8 lg:space-x-0 lg:space-y-12 text-white">
            {[
              { id: "home", icon: faHouse },
              { id: "user", icon: faUserPen },
              { id: "field", icon: faFutbol },
              { id: "settings", icon: faGear },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setView(btn.id as any)}
                className={
                  "text-xl transition-colors " +
                  (view === btn.id ? "text-green-500" : "")
                }
              >
                <FontAwesomeIcon icon={btn.icon} />
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="py-10 lg:px-0 px-4 flex-1 text-white flex justify-center">
        <AnimatePresence mode="wait">
          {view === "home" && (
            <motion.div
              key="home"
              {...pageVariants}
              className="bg-[#161616] w-full lg:w-3/4 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <StatCard
                title="Total Tickets"
                value="150"
                icon={faFutbol}
                color="text-green-400"
              />
              <StatCard
                title="Total Customers"
                value="80"
                icon={faUserPen}
                color="text-blue-400"
              />
              <StatCard
                title="Total Admins"
                value="5"
                icon={faGear}
                color="text-yellow-400"
              />
            </motion.div>
          )}

          {view === "user" && (
            <motion.div
              key="user"
              {...pageVariants}
              className="flex flex-col w-full items-center"
            >
              <ControlPanel selectedTab={tab} onChange={setTab} />

              <div className="w-full max-w-5xl mt-6 lg:mt-16 bg-[#161616] rounded-xl p-6">
                <AnimatePresence mode="wait">
                  {tab === "customers" && (
                    <motion.div key="customers" {...tabVariants}>
                      <CustomerTable />
                    </motion.div>
                  )}
                  {tab === "players" && (
                    <motion.div key="players" {...tabVariants}>
                      <PlayersTable />
                    </motion.div>
                  )}
                  {tab === "tickets" && (
                    <motion.div key="tickets" {...tabVariants}>
                      <TicketsTable />
                    </motion.div>
                  )}
                  {tab === "velden" && (
                    <motion.div key="velden" {...tabVariants}>
                      <VeldenTable />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {view === "field" && (
            <motion.div
              key="field"
              {...pageVariants}
              className="bg-[#161616] w-full lg:w-3/4 rounded-2xl p-10 flex items-center justify-center"
            >
              <p className="text-xl">Fasd</p>
            </motion.div>
          )}

          {view === "settings" && (
            <motion.div
              key="settings"
              {...pageVariants}
              className="bg-[#161616] w-full lg:w-3/4 rounded-2xl p-10 flex items-center justify-center"
            >
              <p className="text-xl">Seasd</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
