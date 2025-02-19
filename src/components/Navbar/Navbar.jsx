import { Briefcase, Folder, Home, User, Wrench } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
    icon: <Briefcase size={22} />,
    title: "Experience",
  },
  {
    icon: <Wrench size={22} />,
    title: "Tools",
    path : "/#tools"
  },
  {
    icon: <User size={22} />,
    title: "Let's work together",
    path : "/#contact"
  },
];

const Navbar = () => {

  return (
    <div className="flex items-center justify-center">
      <nav className="bg-[#1C1A19] py-3 px-6 fixed top-4 rounded-b-4xl z-10">
        <TooltipProvider className="flex">
          <div className="flex gap-10">
            {arr.map((item, index) => {
              return (
                <div key={index}>
                  <Tooltip>
                    <TooltipTrigger className="text-white cursor-pointer">
                      <a href={item.path}>{item.icon}</a>
                    </TooltipTrigger>
                    <TooltipContent className="mt-4">
                      <p>{item.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              );
            })}
          </div>
        </TooltipProvider>
      </nav>
    </div>
  );
};

export default Navbar;
