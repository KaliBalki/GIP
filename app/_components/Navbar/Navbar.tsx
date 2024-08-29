import React from "react";
import Image from "next/image";
import { HamburgerMenuPage } from "./Hamburger";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="bg-NavColor w-screen h-20 flex items-center justify-between px-4">
      {/* Logo Section */}
      <div className="flex-shrink-0 flex items-center">
        <Image src="/NoBG_White.png" alt="Logo" width={40} height={40} />
      </div>

      {/* Navigation Links - Hidden on small screens */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
        <div className="flex flex-row text-white space-x-20 items-center h-full font-light text-lg">
          <Link href="/blog/hello-world" className="group relative">
            <span className="text-white group-hover:text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text transition duration-300">
              Home
            </span>
          </Link>
          <Link href="/blog/hello-world" className="group relative">
            <span className="text-white group-hover:text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text transition duration-300">
              Teams
            </span>
          </Link>
          <Link href="/blog/hello-world" className="group relative">
            <span className="text-white group-hover:text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text transition duration-300">
              Fixtures
            </span>
          </Link>
          <Link href="/blog/hello-world" className="group relative">
            <span className="text-white group-hover:text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text transition duration-300">
              Players
            </span>
          </Link>
        </div>
      </div>

      {/* Hamburger Menu - Visible only on small screens */}
      <div className="md:hidden">
        <HamburgerMenuPage />
      </div>
    </div>
  );
};

export default Navbar;
