import { GitHubContext } from "@/context/context";
import {ArrowUpRight } from "lucide-react";
import React, { useContext } from "react";

export const About = () => {

  const {githubData} = useContext(GitHubContext);
  
  return (
    <div className="text-white scroll-mt-24" id="home">
      <div>
        <h1 className="md:text-[6rem] md:text-start text-center  text-[3rem] text-white font-extrabold uppercase md:leading-14">
          Full STack
        </h1>
        <h2 className="md:text-[6rem] text-[3rem] md:text-start text-center text-[#353334] font-extrabold uppercase md:leading-20 md:mt-6 leading-5">
          Engineer
        </h2>
      </div>
      <div className="mt-2">
        <p className="text-[#998F8F] font-400 md:text-lg text-sm md:mt-0 mt-4 md:w-[70%] md:text-justify text-center">
          Passionate about building dynamic and scalable web applications.
          Focused on crafting seamless user experiences with clean and efficient
          code.
        </p>
      </div>
      {/* {project description}  */}
      <div className="flex md:w-[70%] items-center justify-between md:my-10 my-7">
        <div>
          <h1 className="md:text-[5rem] text-[3rem] font-semibold md:leading-22">&lt;1</h1>
          <p className="text-[#998F8F] md:text-[1rem] text-sm md:leading-5 leading-4">
            YEARS OF <br /> EXPERIENCE
          </p>
        </div>
        <div>
          <h1 className="md:text-[5rem] font-semibold md:leading-22 text-[3rem]">
            +{githubData?.public_repos}
          </h1>
          <p className="text-[#998F8F] md:leading-5 leading-4 md:text-[1rem] text-sm">
            PROJECTS <br /> COMPLETED
          </p>
        </div>
        <div>
          <a
            href="https://github.com/Vishesh-21"
            className="text-[#998F8F] flex items-center gap-2 leading-5 hover:text-gray-200 duration-200 md:text-[1rem] text-sm"
            target="_blank"
          >
            <span>Check Projects</span>
            <ArrowUpRight />
          </a>
        </div>
      </div>
      <div className="w-full gap-8 flex md:flex-row flex-col">
        <a
          href="#"
          className="block md:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Frontend Development
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 md:text-[1rem] text-sm">
          Building seamless, high-performance, and user-focused web experiences with clean and modern frontend development.
          </p>
        </a>
        <a
          href="#"
          className="block md:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Backend Development
          </h5>
          <p className="font-normal md:text-[1rem] text-sm text-gray-700 dark:text-gray-400">
          Designing scalable, efficient, and secure backend systems to power seamless web experiences.
          </p>
        </a>
      </div>
    </div>
  );
};
