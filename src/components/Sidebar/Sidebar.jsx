import React from "react";
import logo from "@/assets/download.jpg";
import logo2 from "@/assets/Hello.jpg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge, Braces, Code2, Github, Linkedin } from "lucide-react";
import AIimage from '@/assets/Ai_sidebar_image.jpg'

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

export const Sidebar = () => {
  return (
    <div className="w-[42%] h-screen bg-[#FFFFFF] rounded-2xl mb-4 py-10 px-4 flex flex-col items-center justify-between sticky top-4">
      {/* {logo image} */}
      <div className="w-[230px] h-[230px] overflow-hidden">
        <img
          src={logo}
          alt="Logo_Image"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* {bio}  */}
      <div>
        <h1 className="text-4xl font-[700] uppercase text-center">Vishesh</h1>
        <img src={AIimage} alt="image" className="w-24 h-24 mx-auto"/>
        <p className="text-center text-[1rem] leading-[20px] w-full text-gray-500 font-[500]">
          "A passionate full-stack developer, building high-performance,
          scalable, and user-centric web applications."
        </p>
      </div>

      {/* {social links}  */}
      <TooltipProvider>
        <div className="flex w-full justify-evenly">
          {arr.map((item, index) => {
            return (
              <Tooltip key={index}>
                <TooltipTrigger className="text-white cursor-pointer">
                  <Badge variant="outline" className="cursor-pointer"><a href={item.link} target="_blank">{item.icon}</a></Badge>
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
    </div>
  );
};
