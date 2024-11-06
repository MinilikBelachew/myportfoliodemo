"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FaJs, FaJava, FaReact, FaHtml5, FaCss3Alt, FaPython, FaDotNet } from "react-icons/fa"; // Importing the necessary icons


const About = () => {
  const containerRef = useRef();

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingIcon = {
    rest: { y: 0 },
    hover: { y: -4, transition: { yoyo: Infinity, duration: 0.6 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-400 animate-gradient-x py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-12 md:px-12 lg:px-20 xl:px-48 flex flex-col lg:flex-row gap-12">
        
        {/* Biography Section */}
        <motion.div className="lg:w-2/3 flex flex-col gap-8" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-extrabold text-gray-900">Biography</h2>
            <p className="mt-4 text-lg text-gray-800 leading-relaxed">
            With a Bachelor’s degree in Software Engineering from Debre Birhan University, I am a passionate developer eager to create impactful digital solutions. My journey began with a fascination for the intersection of technology and creativity, which led me to master a wide range of programming languages and frameworks. Today, I specialize in React, JavaScript, with additional expertise in Flutter and Next.js. I thrive in collaborative environments, using my technical skills and problem-solving abilities to bring ideas to life.            </p>
            <p className="mt-2 text-lg italic text-gray-700">
              "Creativity is intelligence having fun." - Albert Einstein
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={containerVariants}>
            <h2 className="text-3xl font-extrabold text-gray-900">Skills</h2>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                { name: "JavaScript", icon: "/icons/css.svg"},
                //{ name: "Java", icon: "/icons/java.svg" },
                { name: "React", icon: "/icons/react.svg" },
                { name: "Next.js", icon: "/icons/nextjs.svg" },
                //{ name: ".NET", icon: "/icons/dotnet.svg" },
                //{ name: "Python", icon: "/icons/python.svg" },
                { name: "CSS", icon: "/icons/css.svg" },
                { name: "HTML", icon: "/icons/html.svg" },
              ].map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-blue-400"
                  variants={itemVariants}
                  whileHover="hover"
                  animate="rest"
                >
                  <motion.img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="w-12 h-12 mb-2"
                    variants={floatingIcon}
                  />
                  <span className="mt-2 text-gray-900 font-semibold">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Image or Graphic */}
        <motion.div
          className="lg:w-1/3 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src="/bbbbbb.png"
            alt="About Illustration"
            className="w-full max-w-md"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;







// <div className="flex flex-col justify-center gap-8 pb-48">
//             <h1 className="font-bold text-2xl">Experience</h1>
//             <div className="">
//               <div className=" flex justify-between h-48">
//                 {/* Left */}
//                 <div className=" w-1/3">
//                   <div className=" bg-slate-50 p-3 font-semibold rounded-b-lg rounded-s-lg ">
//                     JavaScript Engineer
//                   </div>
//                   <div className=" p-3 text-sm italic">Abebe Beso bela </div>
//                   <div className="p-3 text-red-400 text-sm font-semibold ">
//                     {" "}
//                     2024-2025
//                   </div>
//                   <div className=" p-1 rounded bg-white text-sm font-semibold w-fit ">
//                     {" "}
//                     Apple
//                   </div>
//                 </div>
//                 {/* {Center} */}
//                 <div className="w-1/6">
//                   <div className=" w-1 h-full bg-neutral-950 rounded relative ">
//                     <div className=" absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2"></div>
//                   </div>
//                 </div>
//                 {/* Right */}
//                 <div className="w-1/3"></div>
//               </div>

//               <div className=" flex justify-between h-48">
//                 {/* Left */}
//                 <div className=" w-1/3">dsf</div>
//                 {/* {Center} */}
//                 <div className="w-1/6">
//                   <div className=" w-1 h-full bg-neutral-950 rounded relative ">
//                     <div className=" absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2"></div>
//                   </div>
//                 </div>
//                 {/* Right */}
//                 <div className="w-1/3">
//                   <div className=" bg-slate-50 p-3 font-semibold rounded-b-lg rounded-s-lg ">
//                     JavaScript Engineer
//                   </div>
//                   <div className=" p-3 text-sm italic">Abebe Beso bela </div>
//                   <div className="p-3 text-red-400 text-sm font-semibold ">
//                     {" "}
//                     2024-2025
//                   </div>
//                   <div className=" p-1 rounded bg-white text-sm font-semibold w-fit ">
//                     {" "}
//                     Apple
//                   </div>
//                 </div>
//               </div>

//               <div className=" flex justify-between h-48">
//                 {/* Left */}
//                 <div className=" w-1/3">
//                   <div className=" bg-slate-50 p-3 font-semibold rounded-b-lg rounded-s-lg ">
//                     JavaScript Engineer
//                   </div>
//                   <div className=" p-3 text-sm italic">Abebe Beso bela </div>
//                   <div className="p-3 text-red-400 text-sm font-semibold ">
//                     {" "}
//                     2024-2025
//                   </div>
//                   <div className=" p-1 rounded bg-white text-sm font-semibold w-fit ">
//                     {" "}
//                     Apple
//                   </div>
//                 </div>
//                 {/* {Center} */}
//                 <div className="w-1/6">
//                   <div className=" w-1 h-full bg-neutral-950 rounded relative ">
//                     <div className=" absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-white -left-2"></div>
//                   </div>
//                 </div>
//                 {/* Right */}
//                 <div className="w-1/3">
//                   <Brain scrollYProgress={scrollYProgress} />
//                 </div>
//               </div>
//             </div>
//           </div>