import Image from "next/image";
import Navbar from "./_components/Navbar/Navbar";
import Hero from "./_components/Hero/Hero";
import Intro2 from "./_components/Intro/Intro2";
import Intro1 from "./_components/Intro/Intro1";
import Faq from "./_components/Faq/Faq";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <div className="md:h-[800px] h-[100px] md:pt-80 pt-0 flex flex-col relative">
          <Intro1></Intro1>
          <Intro2></Intro2>
        </div>
        <div className="md:h-[800px] h-[100px] md:pt-80 pt-0 flex flex-col relative">
          <Faq></Faq>
        </div>
      </div>
    </div>
  );
}
