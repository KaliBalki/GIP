import Image from "next/image";
import Navbar from "./_components/Navbar/Navbar";
import Hero from "./_components/Hero/Hero";
export default function Home() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
    </div>
  );
}
