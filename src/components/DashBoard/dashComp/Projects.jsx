import React from "react";
import BNG from "@/assets/Screenshot 2025-02-16 223721.png";
import imageEditor from "@/assets/Screenshot 2025-02-16 233052.png";
import JobPortal from "@/assets/Screenshot 2025-02-16 233421.png";
import TaskManager from "@/assets/Screenshot 2025-02-16 234000.png";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Projects = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects')
  }

  return (
    <div className="md:mt-30 mt-18 scroll-mt-24" id="projects">
      <div>
        <h1 className="md:text-[6rem] text-[3rem] text-white md:text-start text-center font-extrabold uppercase md:leading-14 leading-0">
          Recent
        </h1>
        <h2 className="md:text-[6rem] text-[#353334] text-[3rem] md:text-start text-center  font-extrabold uppercase md:leading-20 mt-6 leading-12">
          Projects
        </h2>
      </div>

      {/* projects showing */}
      <div className="text-white md:mt-6 mt-2 flex flex-col gap-4">
        <a
          href="https://business-name-generator-bay.vercel.app/"
          target="_blank"
          className="w-full bg-transparent rounded-2xl p-3 duration-400 hover:bg-[#353334] block relative"
          id="card"
        >
          <div className="flex items-center gap-4">
            <img
              src={BNG}
              target="_blank"
              alt="Image"
              className="md:w-42 md:h-42 w-32 h-32 object-cover rounded-2xl"
            />
            <div>
              <h1 className="md:text-2xl text-xl font-bold">Business Name Generator</h1>
              <h2 className="text-[#998F8F] md:text-[1rem] text-sm">
                Generate unique and catchy business names instantly! Our
                AI-powered tool helps you find the perfect name for your
                startup, brand, or project—complete with domain availability
                checks.
              </h2>
            </div>
          </div>
          <ArrowUpRight className="icon mt-4 mr-2 text-orange-600 absolute top-3 text-2xl right-3 duration-300" />
        </a>
        <a
          href="#"
          target="_blank"
          className="w-full bg-transparent rounded-2xl p-3 duration-400 hover:bg-[#353334] block relative"
          id="card"
        >
          <div className="flex items-center gap-4">
            <img
              src={JobPortal}
              alt="Image"
              className="md:w-42 md:h-42 w-32 h-32 object-cover rounded-2xl"
            />
            <div>
              <h1 className="md:text-2xl text-xl font-bold">Job Portal Application</h1>
              <h2 className="text-[#998F8F] md:text-[1rem] text-sm">
                Effortlessly manage and track job applications. Our system helps
                recruiters view, sort, and filter applicants based on
                experience, skills, and application date—making hiring faster
                and smarter.
              </h2>
            </div>
          </div>
          <ArrowUpRight className="icon mt-4 mr-2 text-orange-600 absolute top-3 text-2xl right-3 duration-300" />
        </a>
        <a
          href="#"
          target="_blank"
          className="w-full bg-transparent rounded-2xl p-3 duration-400 hover:bg-[#353334] block relative"
          id="card"
        >
          <div className="flex items-center gap-4">
            <img
              src={TaskManager}
              alt="Image"
             className="md:w-42 md:h-42 w-32 h-32 object-cover rounded-2xl"
            />
            <div>
              <h1 className="md:text-2xl text-xl font-bold">Task Manager</h1>
              <h2 className="text-[#998F8F] md:text-[1rem] text-sm">
                Stay organized and boost productivity with our Task Manager.
                Easily create, prioritize, and track tasks in real time—ensuring
                nothing falls through the cracks.
              </h2>
            </div>
          </div>
          <ArrowUpRight className="icon mt-4 mr-2 text-orange-600 absolute top-3 text-2xl right-3 duration-300" />
        </a>
        <a
          href="https://vishesh-21.github.io/ImageEditor/"
          target="_blank"
          className="w-full bg-transparent rounded-2xl p-3 duration-400 hover:bg-[#353334] block relative"
          id="card"
        >
          <div className="flex items-center gap-4">
            <img
              src={imageEditor}
              alt="Image"
              className="md:w-42 md:h-42 w-32 h-32 object-cover rounded-2xl"
            />
            <div>
              <h1 className="md:text-2xl text-xl font-bold">Image Editor</h1>
              <h2 className="text-[#998F8F] md:text-[1rem] text-sm">
                A simple yet powerful image editor built with HTML, CSS, and
                JavaScript. Edit, crop, apply filters, and enhance images right
                from your browser—no downloads needed!
              </h2>
            </div>
          </div>
          <ArrowUpRight className="icon mt-4 mr-2 text-orange-600 absolute top-3 text-2xl right-3 duration-300" />
        </a>
      </div>

      <div className="text-center mt-8">
        <button
          type="button"
          className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-200/80 md:font-semibold md:rounded-lg cursor-pointer rounded-md text-sm md:px-5 md:py-2.5 px-2 py-1 text-center me-2 mb-2"
          onClick={handleClick}
        >
          See More Projects <ArrowRight className="inline" />
        </button>
      </div>
    </div>
  );
};
