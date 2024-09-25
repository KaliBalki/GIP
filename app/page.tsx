"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "./_components/Overall/Navbar/Navbar";
import Hero from "./_components/Home/Hero/Hero";
import Intro2 from "./_components/Home/Intro/Intro2";
import Intro1 from "./_components/Home/Intro/Intro1";
import Faq from "./_components/Home/Faq/Faq";
import Footer from "./_components/Overall/Footer/Footer";

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
      <div className="lg:pt-80 md:pt-52 pt-48 flex flex-col relative">
        <Intro1 />

        <Intro2 />
      </div>
      <div className="lg:pt-80 md:pt-52 pt-0 flex flex-col relative mb-44">
        <Faq />
      </div>
    </div>
  );
}
