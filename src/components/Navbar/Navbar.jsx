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
  },
  {
    icon: <Folder size={22} />,
    title: "Projects",
  },
  {
    icon: <Briefcase size={22} />,
    title: "Experience",
  },
  {
    icon: <Wrench size={22} />,
    title: "Tools",
  },
  {
    icon: <User size={22} />,
    title: "Contact  Us",
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
                <Tooltip key={index}>
                  <TooltipTrigger className="text-white cursor-pointer">
                    {item.icon}
                  </TooltipTrigger>
                  <TooltipContent className="mt-4">
                    <p>{item.title}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </TooltipProvider>
      </nav>
    </div>
  );
};

export default Navbar;
