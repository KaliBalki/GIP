"use client";

import Titles from "../_components/Titles/Titles";
import Controller from "../_components/Fixtures/Controller";
import Line from "../_components/Fixtures/Line";
import FixtureCards from "../_components/Fixtures/FixtureCards";
const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Titles
          title="Our League Fixtures"
          subtitle="Stay ahead of the game with the latest match schedules. "
          description="Don't miss a moment of the action."
        />
        <div className="md:px-44 md:pt-20 pt-6 flex flex-col justify-center">
          <Controller />
          <Line />
        </div>
        <FixtureCards />
      </div>
    </div>
  );
};

export default Home;
