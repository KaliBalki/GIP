import React from "react";
import CardPlayer from "./CardPlayer"; // Assuming you have a CardPlayer component

const CardGridPlayer = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-40 gap-y-8  !pt-2 w-full">
        {/* You can map over your player data here if you have multiple players */}
        <CardPlayer />
        <CardPlayer />
        <CardPlayer />
        <CardPlayer />
        <CardPlayer />
        <CardPlayer />
        {/* Add more CardPlayer components as needed */}
      </div>
    </div>
  );
};

export default CardGridPlayer;
