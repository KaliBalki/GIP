import React from "react";
import CardPlayer from "../CardPlayer";
const CardGridPlayer = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-8">
        <CardPlayer />
        <CardPlayer />
        <CardPlayer />
        <CardPlayer />
        <CardPlayer />
        <CardPlayer />
      </div>
    </div>
  );
};

export default CardGridPlayer;
