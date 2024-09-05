"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import Logo_Animation from "@/public/Logo_Animation.gif"; // Ensure the path is correct

export default function Loading() {
  const [progress, setProgress] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
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

      return () => progressTimers.forEach((timer) => clearTimeout(timer));
    };

    loadData();
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
                alt="eField"
                className="object-contain w-full h-full"
              />
            </div>
            <Progress
              value={progress}
              className="w-[80%] md:w-[50%] xl:w-full max-w-[500px] h-[2px]" // Responsive width
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
        className="h-full bg-gradient-to-r from-[#4a2684] via-[#c261d1] to-[#f6934c] transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
