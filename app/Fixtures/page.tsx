"use client";

import Titles from "../_components/Titles/Titles";

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Titles
          title="Our League Fixtures"
          subtitle="Stay ahead of the game with the latest match schedules. "
          description="Don't miss a moment of the action."
        />
      </div>
    </div>
  );
};

export default Home;
