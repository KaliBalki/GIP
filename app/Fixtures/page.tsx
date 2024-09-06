"use client";

import Titles from "../_components/Titles/Titles";
import Controller from "../_components/Fixtures/Controller";
import Line from "../_components/Fixtures/Line";
const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Titles
          title="Our League Fixtures"
          subtitle="Stay ahead of the game with the latest match schedules. "
          description="Don't miss a moment of the action."
        />
        <div className="px-44 pt-20">
          <Controller />
          <Line />
        </div>
      </div>
    </div>
  );
};

export default Home;
