import React from "react";
import logo from "@/assets/download.jpg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {Braces, Code2, Github, Linkedin } from "lucide-react";
import AIimage from '@/assets/Ai_sidebar_image.jpg'
import { Button } from "../ui/button";
import { motion } from "motion/react"

const arr = [
  {
    icon: <Github className="text-black" size={20}/>,
    title: "GitHub",
    link : 'https://github.com/Vishesh-21'
  },
  {
    icon: <Code2 className="text-green-600" size={20}/>,
    title: "HackerRank",
    link : 'https://www.hackerrank.com/profile/vishu_Verma'
  },
  {
    icon: <Linkedin className="text-blue-600" size={20} />,
    title: "LinkedIn",
    link : "https://www.linkedin.com/in/vishesh-verma-35b31b279/"
  },
  {
    icon: <Braces  className="text-orange-600" size={20}/>,
    title: "Leet Code",
    link : "https://leetcode.com/u/vishu_verma_21/"
  },
];

const headingVariant = {
  hidden : {opacity :0,y:-50},
  show : {opacity : 1,y : 0, transition : {duration:0.7,ease : "easeOut"}}
}

export const Sidebar = () => {
  return (
    <motion.div variants={headingVariant} initial="hidden" animate="show" className="md:h-screen bg-[#FFFFFF] rounded-2xl mb-4 md:py-10 md:px-4 md:gap-0 gap-5 flex flex-col items-center justify-between md:sticky md:top-4 p-5">
      {/* {logo image} */}
      <div className="md:w-[230px] md:h-[230px] w-[150px] h-[150px] overflow-hidden">
        <img
          src={logo}
          alt="Logo_Image"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* {bio}  */}
      <div className="md:px-0 px-2 md:py-0 py-2 md:rounded-none rounded-2xl md:border-none md:w-full  border-l-[1.5px] border-black border-r-[1.5px]">
        <h1 className="md:text-4xl text-3xl font-[700] uppercase text-center">Vishesh</h1>
        <img src={AIimage} alt="image" className="w-24 md:block hidden h-24 mx-auto"/>
        <p className="text-center md:text-[1rem] md:mt-2 text-sm leading-[20px] md:w-full md:px-0 px-10 text-gray-500 md:font-[500] font-[600]">
          "A passionate full-stack developer, building high-performance,
          scalable, and user-centric web applications."
        </p>
      </div>

      {/* {social links}  */}
      <TooltipProvider>
        <div className="flex w-full md:justify-between justify-center md:gap-0 md:mt-4 gap-10">
          {arr.map((item, index) => {
            return (
              <Tooltip key={index}>
                <TooltipTrigger className="text-white cursor-pointer">
                  <Button variant="outline" className="cursor-pointer"><a href={item.link} target="_blank">{item.icon}</a></Button>
                </TooltipTrigger>
                <TooltipContent
                  className={`mt-4 ${item.title === 'GitHub' ? "bg-black" : item.title === 'HackerRank' ? "bg-green-600" : item.title === 'LinkedIn'? "bg-blue-600" : "bg-orange-600"}`}
                >
                  <p>{item.title}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>
    </motion.div>
  );
};
