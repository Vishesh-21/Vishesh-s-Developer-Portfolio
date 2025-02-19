import React from "react";
import Backend from "@/assets/giphy.webp";
import { Badge } from "@/components/ui/badge";

const arr = [
  "React",
  "NextJS",
  "TailwindCSS",
  "Shadcn-UI",
  "TypeScript",
  "JavaScript",
  "NodeJS",
  "Express",
  "MongoDB",
  "MySQL",
  "REST API",
  "JAVA",
  "C++",
  "C",
];
const tech = [
  "Git",
  "GitHub",
  "GitLab",
  "VS Code",
  "Cursor AI",
  "Postman",
  "Vercel",
  "Linux",
  "Chat gpt",
];

export const Skills = () => {
  return (
    <div className="text-white md:mt-24 mt-10 scroll-mt-24" id="tools">
      <div>
        <h1 className="md:text-[6rem] text-[3rem] text-white uppercase font-extrabold md:leading-14 leading-8 md:text-start text-center">
          Languages &
        </h1>
        <h2 className="md:text-[6rem] text-[3rem] text-[#353334] uppercase font-extrabold md:leading-20 md:mt-6 md:text-start text-center">
          Frameworks
        </h2>
        <div className="flex items-center flex-wrap gap-x-5 gap-y-2 py-8 mt-4 pl-4 border-l-[1px] rounded-2xl justify-center border-r-[1px]">
          {arr.map((item,index) => (
            <Badge key={index} className="bg-white text-black py-2 px-6 rounded-full hover:bg-white">
              {item}
            </Badge>
          ))}
        </div>
      </div>

      <div className="md:mt-18 mt-9">
        <h1 className="md:text-[6rem] uppercase text-[3rem] text-white font-extrabold md:leading-14 leading-8 md:text-start text-center">
          What I'm
        </h1>
        <h2 className="md:text-[6rem] text-[3rem] text-[#353334] uppercase font-extrabold md:leading-20 md:mt-6 md:text-start text-center">
          Doing
        </h2>
        <div className="md:mt-10 mt-5 flex flex-col gap-4">
          <div className="w-full bg-[#3533344a] py-4 rounded border-l-[1px] px-6 duration-400 flex items-center gap-5">
            <div className="md:w-[350px] md:h-[150px] overflow-hidden rounded object-cover">
              <img src={Backend} alt="Image" className="w-full h-full" />
            </div>
            <div>
              <h1 className="md:text-2xl  text-xl font-bold">Full Stack Development</h1>
              <p className="text-[#998F8F] md:text-[1rem] text-[0.78rem] md:text-start">
                Full-stack developer crafting seamless, high-performance web
                applications with intuitive frontends and robust, scalable
                backends.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mt-18 mt-9">
        <h1 className="md:text-[6rem] uppercase text-[3rem] text-white font-extrabold md:leading-14 leading-8 md:text-start text-center">
          Tools &
        </h1>
        <h2 className="md:text-[6rem] uppercase text-[3rem] text-[#353334] font-extrabold md:leading-20 md:mt-6 md:text-start text-center">
          Technologies
        </h2>
        <div className="flex items-center flex-wrap gap-x-5 gap-y-2 py-8 mt-4 pl-4 border-l-[1px] rounded-2xl justify-center border-r-[1px]">
          {tech.map((item,index) => (
            <Badge key={index} className="bg-white text-black py-2 px-6 rounded-full hover:bg-white">
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
