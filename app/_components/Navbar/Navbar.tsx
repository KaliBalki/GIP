import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-NavColor w-screen h-20 flex items-center justify-between px-4">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <Image src="/NoBG_White.png" alt="Logo" width={40} height={40} />
      </div>
      {/* Navigation Links - Hidden on small screens */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
        <div className="flex flex-row text-white space-x-20 items-center h-full font-light text-lg">
          <div>Home</div>
          <div>Teams</div>
          <div>Fixtures</div>
          <div>Players</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
