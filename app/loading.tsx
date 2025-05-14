"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import Logo_Animation from "@/public/Logo_Animation.gif"; // Ensure the path is correct

export default function Loading() {
  const [progress, setProgress] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    // Disable scroll on load
    document.body.style.overflowY = "hidden"; // Disable vertical scroll
    document.body.style.overflowX = "hidden"; // Ensure horizontal scroll is always disabled

    const fakeApiCall = async () => {
      await new Promise((resolve) => setTimeout(resolve, 4000));
    };

    const loadData = async () => {
      const progressTimers = [
        setTimeout(() => setProgress(10), 250),
        setTimeout(() => setProgress(20), 500),
        setTimeout(() => setProgress(40), 1500),
        setTimeout(() => setProgress(50), 2000),
        setTimeout(() => setProgress(70), 3000),
        setTimeout(() => setProgress(80), 3500),
        setTimeout(() => setProgress(90), 4000),
        setTimeout(() => setProgress(100), 5000),
      ];

      await fakeApiCall();

      setLoading(false);

      // Re-enable vertical scroll after loading
      document.body.style.overflowY = "auto";

      return () => progressTimers.forEach((timer) => clearTimeout(timer));
    };

    loadData();

    // Cleanup to restore overflow settings if the component unmounts
    return () => {
      document.body.style.overflowY = "auto"; // Re-enable y-axis scroll
      document.body.style.overflowX = "hidden"; // Keep x-axis scroll disabled
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-[#101010] fixed top-0 left-0 z-40 h-screen w-screen flex justify-center items-center"
        >
          <div className="flex justify-center items-center flex-col h-full w-full">
            <div className="relative w-[50%] md:w-[30%] h-[150px] xl:w-[400px] xl:h-[200px] flex-shrink-0">
              <Image
                priority
                src={Logo_Animation}
                fill
                alt="Cora Central"
                className="object-contain w-full h-full"
              />
            </div>
            <Progress
              value={progress}
              className="w-[80%] md:w-[50%] xl:w-full md:max-w-[500px] max-w-[300px] h-[2px]" // Responsive width
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type ProgressProps = {
  value: number;
  className?: string;
};

const Progress: React.FC<ProgressProps> = ({ value, className }) => {
  return (
    <div
      className={`relative h-2 w-full bg-gray-200 rounded-full overflow-hidden ${className}`}
    >
      <div
        className="h-full bg-gradient-to-r from-[#6bff6b] via-[#324332] to-[#009200] transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
