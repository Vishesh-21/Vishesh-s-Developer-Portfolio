import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../../public/android-chrome-512x512.png";

export const PortLoader = ({ onLoadingComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onLoadingComplete, 600);
    }, 1500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-[#151312] text-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Simple Logo */}
      <motion.div
        className="mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-10 h-10" />
        </div>
      </motion.div>

      {/* Clean Typography */}
      <motion.h1
        className="text-3xl md:text-4xl font-light tracking-wide mb-12 text-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Portfolio
      </motion.h1>

      {/* Minimal Loading Animation */}
      <motion.div className="flex space-x-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-white rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};
