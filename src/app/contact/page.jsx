"use client";

import { motion } from "framer-motion";
const text = "Hello There";

const Contact = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center">
          <div className="">
            {text.split("").map((letter, index) => (
              <motion.span
                className="text-black font-bold text-6xl"
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        <form className="h-1/2 lg:h-full lg:w-1/2 bg-blue-100 rounded-xl flex justify-center flex-col gap-7 p-4 ">
          <span className=" text-black">Dear Minilik</span>
          <textarea
            cols="3"
            rows="5"
            className="text-black bg-transparent border resize-none border-black"
          >
            
            write ...
          </textarea>
          <input
            type="email"
            placeholder="write your email"
            className="bg-transparent border border-black"
          />
          <button className="bg-blue-200 text-black font-semibold rounded-2xl hover:bg-blue-700 hover:duration-300">
            {" "}
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
};
export default Contact;
