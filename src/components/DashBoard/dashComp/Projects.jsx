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
    <div className="mt-30">
      <div>
        <h1 className="text-[6rem] text-white font-extrabold uppercase leading-14">
          Recent
        </h1>
        <h2 className="text-[6rem] text-[#353334] font-extrabold uppercase leading-20 mt-6">
          Projects
        </h2>
      </div>

      {/* projects showing */}
      <div className="text-white mt-6 flex flex-col gap-4">
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
              className="w-42 h-42 object-cover rounded-2xl"
            />
            <div>
              <h1 className="text-2xl font-bold">Business Name Generator</h1>
              <h2 className="text-[#998F8F]">
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
              className="w-42 h-42 object-cover rounded-2xl"
            />
            <div>
              <h1 className="text-2xl font-bold">Job Portal Application</h1>
              <h2 className="text-[#998F8F]">
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
              className="w-42 h-42 object-cover rounded-2xl"
            />
            <div>
              <h1 className="text-2xl font-bold">Task Manager</h1>
              <h2 className="text-[#998F8F]">
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
              className="w-42 h-42 object-cover rounded-2xl"
            />
            <div>
              <h1 className="text-2xl font-bold">Image Editor</h1>
              <h2 className="text-[#998F8F]">
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
          class="text-black bg-white font-semibold focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-200/80 font-medium rounded-lg cursor-pointer text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleClick}
        >
          See More Projects <ArrowRight className="inline" />
        </button>
      </div>
    </div>
  );
};
