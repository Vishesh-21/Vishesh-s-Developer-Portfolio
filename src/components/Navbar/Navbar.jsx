import {Folder, Home, User, Wrench } from "lucide-react";
import FavImag from '/android-chrome-512x512.png'
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const arr = [
  {
    icon: <Home size={22} />,
    title: "Home",
    path: "/#home",
  },
  {
    icon: <Folder size={22} />,
    title: "Projects",
    path: "/#projects",
  },
  {
    icon: <img src={FavImag} className="w-6"/>,
    title: "Experience",
    path: "/",
  },
  {
    icon: <Wrench size={22} />,
    title: "Tools",
    path: "/#tools",
  },
  {
    icon: <User size={22} />,
    title: "Let's work together",
    path: "/#contact",
  },
];

// Parent variants for stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Individual icon animation
const itemVariants = {
  hidden: { scale: 0, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.2 } },
};

const Navbar = () => {
  return (
    <div className="flex items-center justify-center">
      <nav className="bg-[#1C1A19] py-3 px-6 fixed top-4 rounded-b-4xl z-100">
        <TooltipProvider className="flex">
          <motion.div
            className="flex gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {arr.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Tooltip>
                  <TooltipTrigger className="text-white cursor-pointer">
                    <a href={item.path || "#"} >{item.icon}</a>
                  </TooltipTrigger>
                  <TooltipContent className="mt-5 border-[1px]">
                    <p>{item.title}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </motion.div>
        </TooltipProvider>
      </nav>
    </div>
  );
};

export default Navbar;
