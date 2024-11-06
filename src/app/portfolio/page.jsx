"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Simple Recipes Site",
    desc: "streamlined recipe site designed to make cooking easy. It provides clear, step-by-step instructions and concise ingredient lists, helping users create delicious meals with minimal effort",
    img: "/recipes.png",
    link: "https://simple-recipesite.netlify.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Homeland Logistics",
    desc: "Homeland Logistics is a comprehensive cargo transportation solution featuring mobile apps for users, drivers, and car owners. The project streamlines logistics by connecting shippers with drivers and vehicle owners, enabling efficient and transparent cargo management. ",
    img: "/user1.jpg",
    link: "https://github.com/MinilikBelachew/Homeland_driver",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Homeland Logistics Admin",
    desc: "The Homeland Logistics Admin Dashboard is a centralized platform for overseeing cargo operations. It provides admins with tools to manage users, drivers, vehicle owners, and shipments, ensuring smooth and efficient logistics management across the system.",
    img: "/admin.png",
    link: "https://homelandad.netlify.app/auth/signin",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Task Management Site",
    desc: "A Task Management site designed for efficient organization, allowing users to add, update, and delete tasks easily. The platform simplifies task tracking and enhances productivity with a clean, user-friendly interface.",
    img: "/task.png",
    link: "https://github.com/MinilikBelachew/ethio-task",
  },
];

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className="h-[600vh] relative bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-400"
        ref={ref}
      >
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center font-bold text-black">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <motion.div
                key={item.id}
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} transition-transform duration-500`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col gap-6 text-white p-6 rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300 max-w-lg text-center">
                  <motion.h1
                    className="text-4xl font-bold md:text-3xl lg:text-4xl text-black"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.title}
                  </motion.h1>
                  <motion.div
                    className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg"
                    whileHover={{ scale: 1.03 }}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <p className="text-lg lg:text-xl text-black">{item.desc}</p>
                  <Link href={item.link}>
                    <motion.button
                      className="p-4 bg-white text-gray-600 font-semibold rounded transition-transform duration-300 transform hover:scale-105"
                      whileHover={{ scale: 1.1 }}
                    >
                      See Demo
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen bg-white flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-6xl font-bold">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] text-white"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl text-white">
                Software Engineer 
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-110"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
