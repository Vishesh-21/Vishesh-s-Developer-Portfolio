import { GitHubContext } from "@/context/context";
import {ArrowUpRight } from "lucide-react";
import React, { useContext } from "react";

export const About = () => {

  const {githubData} = useContext(GitHubContext);
  
  return (
    <div className="text-white">
      <div>
        <h1 className="text-[6rem] text-white font-extrabold uppercase leading-14">
          Full STack
        </h1>
        <h2 className="text-[6rem] text-[#353334] font-extrabold uppercase leading-20 mt-6">
          Engineer
        </h2>
      </div>
      <div className="mt-2">
        <p className="text-[#998F8F] font-400 text-lg w-[70%] text-justify">
          Passionate about building dynamic and scalable web applications.
          Focused on crafting seamless user experiences with clean and efficient
          code.
        </p>
      </div>
      {/* {project description}  */}
      <div className="flex w-[70%] items-center justify-between my-10">
        <div>
          <h1 className="text-[5rem] font-semibold leading-22">0</h1>
          <p className="text-[#998F8F] leading-5">
            YEARS OF <br /> EXPERIENCE
          </p>
        </div>
        <div>
          <h1 className="text-[5rem] font-semibold leading-22">
            +{githubData?.public_repos}
          </h1>
          <p className="text-[#998F8F] leading-5">
            PROJECTS <br /> COMPLETED
          </p>
        </div>
        <div>
          <a
            href="https://github.com/Vishesh-21"
            className="text-[#998F8F] flex items-center gap-2 leading-5 hover:text-gray-200 duration-200"
            target="_blank"
          >
            <span>Check Projects</span>
            <ArrowUpRight />
          </a>
        </div>
      </div>
      <div className="w-full gap-8 flex">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Business Name Generator (NextJs)
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Generates unique business names and checks domain availability
          </p>
        </a>
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Job Portal Application (MERN)
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            A full-stack job portal with authentication, job listings, and user
            role-based access.
          </p>
        </a>
      </div>
    </div>
  );
};
