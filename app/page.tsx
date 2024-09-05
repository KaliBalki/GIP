"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "./_components/Navbar/Navbar";
import Hero from "./_components/Hero/Hero";
import Intro2 from "./_components/Intro/Intro2";
import Intro1 from "./_components/Intro/Intro1";
import Faq from "./_components/Faq/Faq";
import Footer from "./_components/Footer/Footer";

export default function Home() {
  const intro1Ref = useRef(null);
  const intro2Ref = useRef(null);
  const faqRef = useRef(null);

  const intro1InView = useInView(intro1Ref, { once: true });
  const intro2InView = useInView(intro2Ref, { once: true });
  const faqInView = useInView(faqRef, { once: true });

  return (
    <div>
      <Hero />
      <div className="md:pt-80 pt-0 flex flex-col relative">
        <Intro1 />

        <Intro2 />
      </div>
      <div className="md:pt-80 pt-0 flex flex-col relative">
        <Faq />
      </div>
    </div>
  );
}
