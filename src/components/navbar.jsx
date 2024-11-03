"use client";
import { Itim } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navlink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const topvarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const middlevarients = {
    closed: {},
    opened: {
      opacity: 0,
    },
  };
  const bottomvarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const listvarient = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: "0",
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const listItem = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="shadow-xl items-center flex justify-between h-full text-black shadow-black-200 px-4 sm:px-12 md:px-12 lg:px-20 xl:px-48">
      <div className=" hidden md:flex gap-4 w-1/3">
        {"  "}
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      <div className=" md:hidden lg:flex w-1/3 justify-center">
        <Link
          href="/"
          className="text-sm   hover:animate-bounce transition-transform bg-[#0268c7] rounded p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">M</span>
          <span className="w-12 rounded bg-white flex items-center justify-center">
            B
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-2 w-1/3">
        <Link href="https://github.com/MinilikBelachew">
          <Image src="/github.png" alt="not avaliable" width={25} height={25} />
        </Link>
        {/* <Link href="/">
          <Image
            src="/instagram.png"
            alt="not avaliable"
            width={25}
            height={25}
          />
        </Link> */}
        {/* <Link href="/https://tailwindcss.com/docs/animation">
          <Image
            src="/facebook.png"
            alt="not avaliable"
            width={25}
            height={25}
          />
        </Link> */}
        <Link href="https://www.linkedin.com/in/minilik-belachew-37a211263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <Image
            src="/linkedin.png"
            alt="not avaliable"
            width={25}
            height={25}
          />
        </Link>
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex justify-between flex-col z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topvarients}
            animate={open ? "opened" : "closed"}
            className="bg-black w-10 h-1 origin-left"
          ></motion.div>
          <motion.div
            variants={middlevarients}
            animate={open ? "opened" : "closed"}
            className="bg-black w-10 h-1"
          ></motion.div>
          <motion.div
            variants={bottomvarients}
            animate={open ? "opened" : "closed"}
            className="bg-black w-10 h-1 origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listvarient}
            initial="closed"
            animate="opened"
            className="absolute top-0 right-0 w-96 h-screen bg-black text-white flex flex-col gap-4 text-3xl items-center justify-center z-40"
          >
            {links.map((link) => (
              <motion.div variants={listItem} className="" key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
