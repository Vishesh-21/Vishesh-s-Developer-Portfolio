import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const PortLoader = ({ onLoadingComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onLoadingComplete, 600); // Fade-out before unmounting
    }, 2200);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-[#1C1A19] text-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Name Scaling Animation */}
      <motion.h1
        className="text-4xl md:text-6xl uppercase font-extrabold tracking-wide"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        portfolio
      </motion.h1>

      {/* Dot Wave Effect */}
      <motion.div className="flex mt-3 space-x-2">
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            className="w-2 h-2 bg-white rounded-full"
            animate={{
              y: [-5, 5, -5],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1,
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

