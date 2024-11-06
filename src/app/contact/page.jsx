"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const text = "Hello There";

const Contact = () => {
  return (
    <motion.div
      className="h-full bg-gradient-to-br from-purple-700 via-indigo-500 to-blue-500 flex items-center justify-center relative overflow-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Background Accent Circle */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[450px] h-[450px] bg-gradient-to-br from-purple-700 via-indigo-500 to-blue-500 rounded-full opacity-30 animate-pulse" />
      </div> */}

      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Animated Greeting Text */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center">
          <div className="flex">
            {text.split("").map((letter, index) => (
              <motion.span
                className="text-white font-extrabold text-7xl"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Contact Information Card */}
        <motion.div
          className="h-1/2 lg:h-full lg:w-1/2 bg-white bg-opacity-90 rounded-3xl shadow-xl flex flex-col gap-6 p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-gray-800 text-2xl font-semibold mb-2 border-b-2 border-gray-200 pb-2">
            Contact Information
          </h2>

          {/* Email Information */}
          <div className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition duration-200">
            <FaEnvelope className="text-blue-500" />
            <span className="text-lg">belachewr35@gmail.com</span>
          </div>

          {/* Phone Information */}
          <div className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition duration-200">
            <FaPhone className="text-green-500" />
            <span className="text-lg">+251 937 637 782</span>
          </div>

          {/* Additional Contact Details */}
          <p className="text-gray-600 mt-4 text-sm">
            I’m available for collaborations, project inquiries, and any other questions. Let’s create something great together!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;




// "use client";

// import { motion } from "framer-motion";
// import { FaEnvelope, FaPaperPlane } from "react-icons/fa"; // Importing icons

// const text = "Hello There";

// const Contact = () => {
//   return (
//     <motion.div
//       className="h-full bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-400 flex items-center justify-center relative overflow-hidden"
//       initial={{ y: "-200vh" }}
//       animate={{ y: "0%" }}
//       transition={{ duration: 1 }}
//     >
//       {/* Background Circle for Visual Interest */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="w-[400px] h-[400px] bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-400 rounded-full opacity-20 animate-pulse" />
//       </div>

//       <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
//         {/* Animated Text Section */}
//         <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center">
//           <div className="flex">
//             {text.split("").map((letter, index) => (
//               <motion.span
//                 className="text-black font-bold text-6xl"
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.1,
//                 }}
//               >
//                 {letter}
//               </motion.span>
//             ))}
//           </div>
//         </div>

//         {/* Contact Form Section */}
//         <form className="h-1/2 lg:h-full lg:w-1/2 bg-white rounded-xl shadow-lg flex flex-col gap-7 p-8">
//           <span className="text-black text-xl font-semibold">Dear Minilik</span>
          
//           {/* Floating Label Textarea */}
//           <div className="relative">
//             <label className="absolute top-[-10px] left-2 text-blue-500 transition-all transform origin-[0] scale-75">Message</label>
//             <textarea
//               cols="25"
//               rows="5"
//               className="text-black bg-transparent border border-gray-300 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//               placeholder=" "
//             ></textarea>
//           </div>

//           {/* Floating Label Input */}
//           <div className="relative">
//             <label className="absolute top-[-10px] left-2 text-blue-500 transition-all transform origin-[0] scale-75">Email</label>
//             <div className="flex items-center border border-gray-300 rounded-lg">
//               <FaEnvelope className="text-gray-500 p-2" />
//               <input
//                 type="email"
//                 placeholder=" "
//                 className="bg-transparent flex-1 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//               />
//             </div>
//           </div>

//           <button className="flex items-center justify-center bg-blue-300 text-black font-semibold rounded-2xl p-2 hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-105">
//             <FaPaperPlane className="mr-2" />
//             Send
//           </button>
//         </form>
//       </div>

//       {/* Footer Section */}
//       {/* <div className="w-full bg-white flex flex-col items-center justify-center py-6">
//         <p className="text-gray-700">Follow me on social media:</p>
//         <div className="flex space-x-4 mt-2">
//           <a href="#" className="text-blue-500 hover:underline">Twitter</a>
//           <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
//           <a href="#" className="text-blue-500 hover:underline">GitHub</a>
//         </div>
//       </div> */}
//     </motion.div>
//   );
// };

// export default Contact;

// "use client";

// import { motion } from "framer-motion";

// const text = "Hello There";

// const Contact = () => {
//   return (
//     <motion.div
//       className="h-full bg-gradient-to-tr from-gray-100 to-blue-200 p-10"
//       initial={{ y: "-200vh" }}
//       animate={{ y: "0%" }}
//       transition={{ duration: 1 }}
//     >
//       <div className="h-full flex flex-col lg:flex-row justify-center items-center">
//         {/* Animated Text Section */}
//         <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center">
//           <div className="text-center">
//             {text.split("").map((letter, index) => (
//               <motion.span
//                 className="text-black font-bold text-6xl"
//                 key={index}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{
//                   duration: 0.5,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                   delay: index * 0.1,
//                 }}
//               >
//                 {letter}
//               </motion.span>
//             ))}
//           </div>
//         </div>

//         {/* Contact Form Section */}
//         <form className="h-1/2 lg:h-full lg:w-1/2 bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6">
//           <h2 className="text-xl font-semibold text-gray-700">Dear Minilik</h2>
//           <textarea
//             cols="3"
//             rows="5"
//             className="text-black bg-gray-100 border border-gray-300 rounded-md resize-none p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Write your message..."
//           />
//           <input
//             type="email"
//             placeholder="Your email address"
//             className="bg-gray-100 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button className="bg-blue-500 text-white font-semibold rounded-2xl p-2 transition-transform transform hover:scale-105 hover:bg-blue-600 duration-300">
//             Send
//           </button>
//         </form>
//       </div>
//     </motion.div>
//   );
// };

// export default Contact;
