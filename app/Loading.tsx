"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import Logo_Animation from "@public/Logo_Animation.gif"; // Make sure the path is correct

export default function Loading() {
  const [progress, setProgress] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    // Simulate a delayed API call and progress update
    const progressTimers = [
      setTimeout(() => setProgress(27), 500),
      setTimeout(() => setProgress(50), 1000),
      setTimeout(() => setProgress(65), 1500),
      setTimeout(() => setProgress(80), 2000),
      setTimeout(() => setProgress(100), 2500),
    ];

    // Set loading to false after progress reaches 100% and wait an additional second
    const hideLoading = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timing as necessary

    // Cleanup timeouts on unmount
    return () => {
      progressTimers.forEach((timer) => clearTimeout(timer));
      clearTimeout(hideLoading);
    };
  }, []);

  return (
    <>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-background fixed top-0 left-0 z-50 h-screen w-screen flex justify-center items-center"
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
              className="w-[50%] xl:w-full max-w-[500px] h-[2px]"
            />
          </div>
        </motion.div>
      )}
    </>
  );
}

// Simple Progress Bar Component
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
        className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
