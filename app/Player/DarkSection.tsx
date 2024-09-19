import React from "react";

const DarkSection: React.FC = () => {
  return (
    <div className="w-screen min-h-screen bg-transparent text-white flex items-center justify-center shadow-[-10px_-40px_80px_rgba(0,0,0,0.9)]">
      <div className="text-center">
        <h2 className="text-4xl font-bold">New Section</h2>
        <p className="text-lg mt-4">
          This is the new section below the gradient box.
        </p>

        {/* Stats Grid - Only visible on mobile */}
        <div className="grid grid-cols-4 gap-x-4 gap-y-4 mt-3 bg-opacity-80 p-7 rounded-lg  md:hidden">
          <div className="flex flex-col">
            <p className="text-4xl font-medium">0</p>
            <p className="text-xs">Matches played</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl font-medium">0</p>
            <p className="text-xs">Goals Scored</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl font-medium">0</p>
            <p className="text-xs">Assists</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl font-medium">0</p>
            <p className="text-xs">Clean Sheets</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl font-medium">0</p>
            <p className="text-xs">Matches played</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl font-medium">0</p>
            <p className="text-xs">Goals Scored</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl font-medium">0</p>
            <p className="text-xs">Assists</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl font-medium">0</p>
            <p className="text-xs">Clean Sheets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkSection;
