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
    <div className="text-white mt-24">
      <div>
        <h1 className="text-[6rem] text-white font-extrabold leading-14">
          What I'm
        </h1>
        <h2 className="text-[6rem] text-[#353334] font-extrabold leading-20 mt-6">
          Doing
        </h2>
        <div className="mt-10 flex flex-col gap-4">
          <div className="w-full bg-[#3533344a] py-4 rounded border-l-[1px] px-6 duration-400 flex items-center gap-5">
            <div className="w-[350px] h-[150px] overflow-hidden rounded object-cover">
              <img src={Backend} alt="Image" className="w-full h-full" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Full Stack Development</h1>
              <p className="text-[#998F8F]">
                Full-stack developer crafting seamless, high-performance web
                applications with intuitive frontends and robust, scalable
                backends.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h1 className="text-[6rem] text-white font-extrabold leading-14">
          Languages &
        </h1>
        <h2 className="text-[6rem] text-[#353334] font-extrabold leading-20 mt-6">
          Frameworks
        </h2>
        <div className="flex items-center flex-wrap gap-x-5 gap-y-2 mt-8">
          {arr.map((item) => (
            <Badge className="bg-white text-black py-2 px-6 rounded-full hover:bg-white">
              {item}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <h1 className="text-[6rem] text-white font-extrabold leading-14">
          Tools &
        </h1>
        <h2 className="text-[6rem] text-[#353334] font-extrabold leading-20 mt-6">
          Technologies
        </h2>
        <div className="flex items-center flex-wrap gap-x-5 gap-y-2 mt-8">
          {tech.map((item) => (
            <Badge className="bg-white text-black py-2 px-6 rounded-full hover:bg-white">
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
