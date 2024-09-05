import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Cards from "../_components/Teams/Cards";
import Navbar from "../_components/Navbar/Navbar";
import Titles from "../_components/Titles/Titles";
import Footer from "../_components/Footer/Footer";
import Search from "../_components/Teams/Search";

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
