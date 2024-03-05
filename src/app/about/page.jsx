"use client";
import Brain from "@/components/brain";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";


const About = () => {
  const containerRef=useRef()
  const{scrollYProgress} = useScroll({container:containerRef})
     return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex " ref={containerRef}>
        <div className="text-black px-4 sm:px-12 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2  ">
          <div className="flex flex-col justify-center gap-6">
            <h1 className="font-bold text-xl">Biography</h1>
            <span className="text-lg">
              As an avid creator and passionate individual, I find solace and
              purpose in the world of design and development. My journey began
              with a simple curiosity about how things work and an insatiable
              appetite for creativity. From those humble beginnings, I embarked
              on a quest to explore the realms of technology and design, seeking
              to leave my mark on the digital landscape.
            </span>
            <span className="italic">
              Creativity is intelligence having fun." - Albert Einstein
            </span>
          </div>
          <div className="flex flex-col justify-center gap-8">
            <h1>Skills</h1>
            <div className=" gap-4 flex flex-wrap  ">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-slate-600 hover:text-black">
                {" "}
                Java Script
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-slate-600 hover:text-black">
                {" "}
                Java{" "}
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-slate-600 hover:text-black">
                {" "}
                React
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-slate-600 hover:text-black">
                {" "}
                Next js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-slate-600 hover:text-black">
                {" "}
                .Net
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-slate-600 hover:text-black">
                {" "}
                python
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-8 pb-48">
            <h1 className="font-bold text-2xl">Experience</h1>
            <div className="">
              <div className=" flex justify-between h-48">
                {/* Left */}
                <div className=" w-1/3">
                  <div className=" bg-slate-50 p-3 font-semibold rounded-b-lg rounded-s-lg ">
                    JavaScript Engineer
                  </div>
                  <div className=" p-3 text-sm italic">Abebe Beso bela </div>
                  <div className="p-3 text-red-400 text-sm font-semibold ">
                    {" "}
                    2024-2025
                  </div>
                  <div className=" p-1 rounded bg-white text-sm font-semibold w-fit ">
                    {" "}
                    Apple
                  </div>
                </div>
                {/* {Center} */}
                <div className="w-1/6">
                  <div className=" w-1 h-full bg-neutral-950 rounded relative ">
                    <div className=" absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>

              <div className=" flex justify-between h-48">
                {/* Left */}
                <div className=" w-1/3">dsf</div>
                {/* {Center} */}
                <div className="w-1/6">
                  <div className=" w-1 h-full bg-neutral-950 rounded relative ">
                    <div className=" absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3">
                  <div className=" bg-slate-50 p-3 font-semibold rounded-b-lg rounded-s-lg ">
                    JavaScript Engineer
                  </div>
                  <div className=" p-3 text-sm italic">Abebe Beso bela </div>
                  <div className="p-3 text-red-400 text-sm font-semibold ">
                    {" "}
                    2024-2025
                  </div>
                  <div className=" p-1 rounded bg-white text-sm font-semibold w-fit ">
                    {" "}
                    Apple
                  </div>
                </div>
              </div>

              <div className=" flex justify-between h-48">
                {/* Left */}
                <div className=" w-1/3">
                  <div className=" bg-slate-50 p-3 font-semibold rounded-b-lg rounded-s-lg ">
                    JavaScript Engineer
                  </div>
                  <div className=" p-3 text-sm italic">Abebe Beso bela </div>
                  <div className="p-3 text-red-400 text-sm font-semibold ">
                    {" "}
                    2024-2025
                  </div>
                  <div className=" p-1 rounded bg-white text-sm font-semibold w-fit ">
                    {" "}
                    Apple
                  </div>
                </div>
                {/* {Center} */}
                <div className="w-1/6">
                  <div className=" w-1 h-full bg-neutral-950 rounded relative ">
                    <div className=" absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3">
                  <Brain scrollYProgress={scrollYProgress}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-1/3 xl:w-1/2 z-30 sticky top-0"><Brain/></div>
      </div>
    </motion.div>
  );
};
export default About;
