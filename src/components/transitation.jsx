"use client";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const Transition = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      {" "}
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-[#bae6fd] to-blue-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black z-40 rounded-b-[50p x]"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.7, ease: easeOut }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-cyan-50 text-8xl cursor-default w-fit h-fit z-50"
          initial={{ opacity: 1 }}
          transition={{ duration:0.8,ease:"easeOut" }}
          animate={{opacity:0}}
          exit={{opacity:0}}
        >
          {pathName.substring(1)}
        </motion.div>

        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-3xl bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.7 } }}
        />

        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};
export default Transition;
