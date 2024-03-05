
"use client"
import Particle from "@/components/particle";
import { motion } from "framer-motion";
import Image from "next/image";

const Home = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="lg:flex-row flex h-full flex-col px-4 sm:px-12 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Particle/>
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col text-black items-center justify-center gap-4">
          <h1 className="text-2xl font-extrabold md:text-4xl">
            Crafting Code, Building Dreams
          </h1>
          <p className="md:text-xl">
            Welcome to my digital playground, where lines of code come to life
            and dreams find their digital form. As a passionate software
            developer, I specialize in transforming innovative ideas into
            functional and elegant solutions. With a keen eye for detail and a
            relentless pursuit of excellence, I strive to create software that
            not only meets but exceeds expectations. In my journey as a software
            developer, I've delved deep into the realms of web development,
            mobile applications, and beyond. From front-end magic to back-end
            wizardry, I thrive on the challenges that coding presents,
            constantly pushing the boundaries of what's possible.
          </p>
          <div className="w-full flex gap-4">
            <button className="bg-blue-200 p-4 rounded-lg ring-2 ring-black">
              {" "}
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-2 ring-black">
              {" "}
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Home;
