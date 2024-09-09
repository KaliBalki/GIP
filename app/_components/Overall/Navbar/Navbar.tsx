"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);

  const pathname = usePathname();
  const customease = [0.05, 0.58, 0.57, 0.96];
  const isMobile = useMediaQuery({ query: "(max-width: 1280px)" });

  useEffect(() => {
    if (!isMobile) {
      setOpenMobileNav(false);
    }
  }, [isMobile]);

  useEffect(() => {
    if (openMobileNav) {
      // Disable scrolling when mobile nav is open
      document.body.style.overflowY = "hidden";
    } else {
      // Enable scrolling when mobile nav is closed
      document.body.style.overflowY = "auto";
    }

    // Clean up when the component is unmounted or effect is updated
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [openMobileNav]);

  const hrVariant = {
    initial: {
      width: 0,
      origin: "left",
      opacity: 1,
      transition: { duration: 0.5, delay: 0.1, ease: customease },
    },
    animate: {
      width: "100%",
      origin: "left",
      opacity: 1,
      transition: { duration: 0.5, delay: 0.1, ease: customease },
    },
    exit: {
      width: 0,
      origin: "left",
      opacity: 1,
      transition: { duration: 0.5, delay: 0.1, ease: customease },
    },
  };

  const liVariant = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
  };

  const navVariant = {
    initial: { opacity: 0, scale: 1.1 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: customease },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: { duration: 0.2, delay: 0.3, ease: customease },
    },
  };

  const handleClose = () => {
    setOpenMobileNav(false);
  };

  return (
    <>
      <nav className="bg-NavColor w-screen h-20 flex items-center justify-between px-4 relative z-[1000]">
        <div className="flex-shrink-0 flex items-center  p-2 z-[1000]">
          <Image src="/NoBG_White.png" alt="Logo" width={40} height={40} />
        </div>
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <div className="flex flex-row text-white space-x-20 items-center h-full font-semibold text-lg">
            <Link href="/" className="group relative">
              <span className="text-white group-hover:text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text transition duration-300">
                Home
              </span>
            </Link>
            <Link href="/Teams" className="group relative">
              <span className="text-white group-hover:text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text transition duration-300">
                Teams
              </span>
            </Link>
            <Link href="/Fixtures" className="group relative">
              <span className="text-white group-hover:text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text transition duration-300">
                Fixtures
              </span>
            </Link>
            <Link href="/Players" className="group relative">
              <span className="text-white group-hover:text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text transition duration-300">
                Players
              </span>
            </Link>
          </div>
        </div>
        <div className="md:hidden z-[1001]">
          <Hamburger
            color="white"
            rounded
            size={30}
            toggled={openMobileNav}
            toggle={setOpenMobileNav}
          />
        </div>
      </nav>

      <AnimatePresence>
        {openMobileNav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-BgColor z-[997]"
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {openMobileNav && (
          <motion.nav
            variants={navVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="!text-white fixed inset-0 w-screen h-screen overflow-y-auto no-scrollbar pb-[100px] bg-background z-[998] flex flex-col justify-between items-center"
          >
            <ul className="flex flex-col w-full gap-10 px-5 mt-[130px] relative z-30">
              <motion.li
                onClick={handleClose}
                variants={liVariant}
                transition={{
                  duration: 0.3,
                  delay: openMobileNav ? 0.3 : 0.3,
                  ease: customease,
                }}
                className="flex items-center w-full flex-col gap-10"
              >
                <Link
                  className="nav-item-mobile hover:text-foreground/80 duration-100 text-[42px] xs:text-[50px] sm:text-[60px] w-full text-left"
                  href="/"
                >
                  <motion.span className="pl-5">1. Home</motion.span>
                </Link>
                <motion.hr
                  variants={hrVariant}
                  transition={{ duration: 0.3, ease: customease }}
                  className="bg-muted h-[2px] w-full origin-bottom-left"
                />
              </motion.li>

              <motion.li
                onClick={handleClose}
                variants={liVariant}
                transition={{
                  duration: 0.3,
                  delay: openMobileNav ? 0.2 : 0.4,
                  ease: customease,
                }}
                className="flex items-center w-full flex-col gap-10"
              >
                <Link
                  className="nav-item-mobile hover:text-foreground/80 duration-100 text-[42px] xs:text-[50px] sm:text-[60px] w-full text-left"
                  href="/Teams"
                >
                  <motion.span className="pl-5">2. Teams</motion.span>
                </Link>
                <motion.hr
                  variants={hrVariant}
                  transition={{ duration: 0.3, ease: customease }}
                  className="bg-muted h-[2px] w-full origin-bottom-left"
                />
              </motion.li>

              <motion.li
                onClick={handleClose}
                variants={liVariant}
                transition={{
                  duration: 0.3,
                  delay: openMobileNav ? 0.1 : 0.5,
                  ease: customease,
                }}
                className="flex items-center w-full flex-col gap-10"
              >
                <Link
                  className="nav-item-mobile hover:text-foreground/80 duration-100 text-[42px] xs:text-[50px] sm:text-[60px] w-full text-left"
                  href="/Fixtures"
                >
                  <motion.span className="pl-5">3. Fixtures</motion.span>
                </Link>
                <motion.hr
                  variants={hrVariant}
                  transition={{ duration: 0.3, ease: customease }}
                  className="bg-muted h-[2px] w-full origin-bottom-left"
                />
              </motion.li>

              <motion.li
                onClick={handleClose}
                variants={liVariant}
                transition={{
                  duration: 0.3,
                  delay: openMobileNav ? 0 : 0.6,
                  ease: customease,
                }}
                className="flex items-center w-full flex-col gap-10"
              >
                <Link
                  className="nav-item-mobile hover:text-foreground/80 duration-100 text-[42px] xs:text-[50px] sm:text-[60px] w-full text-left"
                  href="/Players"
                >
                  <motion.span className="pl-5">4. Players</motion.span>
                </Link>
                <motion.hr
                  variants={hrVariant}
                  transition={{ duration: 0.3, ease: customease }}
                  className="bg-muted h-[2px] w-full origin-bottom-left"
                />
              </motion.li>
              <motion.li
                onClick={handleClose}
                variants={liVariant}
                transition={{
                  duration: 0.3,
                  delay: openMobileNav ? 0 : 0.6,
                  ease: customease,
                }}
                className="flex items-center w-full flex-col gap-10"
              >
                <Link
                  className="nav-item-mobile  hover:text-foreground/80 duration-100 text-[42px] xs:text-[50px] sm:text-[60px] w-full text-left font-bold"
                  href="/Players"
                >
                  <motion.span className="pl-5 text-transparent bg-clip-text bg-gradient-to-r from-[#ff6205] to-[#6f44ab]">
                    5. Join Us!
                  </motion.span>
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
