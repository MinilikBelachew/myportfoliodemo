"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./navlink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Variants for hamburger animation
  const topVariant = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "#FFF" },
  };
  const middleVariant = {
    closed: {},
    opened: { opacity: 0 },
  };
  const bottomVariant = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "#FFF" },
  };
  const menuVariant = {
    closed: { x: "100vw" },
    opened: { x: 0, transition: { ease: [0.6, 0.05, -0.01, 0.9], duration: 0.8 } },
  };
  const linkVariant = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="relative flex items-center justify-between h-full text-white px-4 sm:px-12 md:px-12 lg:px-20 xl:px-48 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[animation-gradient] animate-gradient-x">
      
      {/* Links for larger screens */}
      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <NavLink link={link} key={link.title} className="relative group">
            <span className="hover:text-yellow-300">{link.title}</span>
            <motion.div
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"
            />
          </NavLink>
        ))}
      </div>

      {/* Logo */}
      <Link href="/" className="text-sm bg-[#0268c7] rounded-full p-1 font-semibold flex items-center justify-center md:hidden">
        <span className="text-white mr-1">M</span>
        <span className="w-10 rounded bg-white text-[#0268c7] flex items-center justify-center">
          B
        </span>
      </Link>

      {/* Social Media Icons */}
      <div className="hidden md:flex gap-4">
        <Link href="https://github.com/MinilikBelachew">
          <motion.div whileHover={{ scale: 1.1, rotate: -10 }} className="hover:drop-shadow-xl">
            <Image src="/github.png" alt="GitHub" width={25} height={25} className=" hover:transform hover:rotate-3d transition duration-300" />
          </motion.div>
        </Link>
        <Link href="https://www.linkedin.com/in/minilik-belachew-37a211263">
          <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="hover:drop-shadow-xl">
            <Image src="/linkedin.png" alt="LinkedIn" width={25} height={25} className="bg-gray-300 hover:transform hover:rotate-3d transition duration-300" />
          </motion.div>
        </Link>
      </div>

      {/* Hamburger Menu for mobile */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div variants={topVariant} animate={open ? "opened" : "closed"} className="bg-white w-10 h-1 origin-left rounded" />
          <motion.div variants={middleVariant} animate={open ? "opened" : "closed"} className="bg-white w-10 h-1 rounded" />
          <motion.div variants={bottomVariant} animate={open ? "opened" : "closed"} className="bg-white w-10 h-1 origin-left rounded" />
        </button>

        {/* Mobile Menu */}
        {open && (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={() => setOpen(false)} />
            <motion.div
              variants={menuVariant}
              initial="closed"
              animate="opened"
              className="absolute top-0 right-0 w-3/4 h-screen bg-gradient-to-r from-[#022140] via-[#0268c7] to-[#022140] text-white flex flex-col gap-8 text-2xl items-center justify-center z-40 shadow-2xl"
            >
              <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setOpen(false)}>
                ×
              </button>
              {links.map((link) => (
                <motion.div variants={linkVariant} key={link.title} className="relative group">
                  <Link href={link.url} onClick={() => setOpen(false)} className="text-lg hover:text-yellow-300">
                    {link.title}
                  </Link>
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"
                  />
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
