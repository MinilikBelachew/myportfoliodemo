"use client";
import Particle from "@/components/particle";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="h-full bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-400 relative overflow-hidden">
      <Particle /> {/* Particle component with enhancements */}
      <div className="lg:flex-row flex h-full flex-col px-4 sm:px-12 md:px-12 lg:px-20 xl:px-48 gap-8 items-center">
        {/* Hero Image Section */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative group overflow-hidden">
          <Image
            src="/bf.png"
            alt="Hero Image"
            fill
            className=" bg-transparent object-contain rounded-2xl shadow-lg transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
          />
        </div>

        {/* Text Content Section */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col text-white items-center justify-center gap-6 text-center">
          <h1 className="text-4xl font-extrabold md:text-6xl tracking-wide drop-shadow-lg">
            Crafting Code, Building Dreams
          </h1>
          <p className="md:text-lg lg:text-xl leading-relaxed max-w-lg text-gray-200 font-light drop-shadow-md">
          Building seamless digital experiences with passion and precision. Let’s turn ideas into impactful solutions.

          </p>

          {/* Call to Action Buttons */}
          <div className="flex gap-4 w-full justify-center mt-6">
          <Link href="/portfolio" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-full font-semibold shadow-lg transform transition hover:shadow-2xl hover:scale-105">
              My Work
            </Link>
            <Link href="/contact" className="bg-gradient-to-r from-gray-200 to-white text-black py-3 px-8 rounded-full font-semibold shadow-lg transform transition hover:shadow-2xl hover:scale-105">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
