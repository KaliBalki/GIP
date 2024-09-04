import React from "react";

const Titles = () => {
  return (
    <div>
      <div className="flex flex-col justify-center text-center pt-20  space-y-6">
        <div className="md:text-8xl text-6xl text-TitleColor font-bold">
          Our League Teams
        </div>
        <div className="text-white opacity-65 font-light text-sm px-8">
          <div>
            Meet the teams that define the Efield League. From fierce rivalries
            to unforgettable moments
          </div>
          <div>these squads bring the game to life.</div>
        </div>
      </div>
    </div>
  );
};

export default Titles;
