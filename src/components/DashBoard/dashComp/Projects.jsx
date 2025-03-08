import React from "react";
import BNG from "@/assets/Screenshot 2025-02-16 223721.png";
import imageEditor from "@/assets/Screenshot 2025-02-16 233052.png";
import JobPortal from "@/assets/Screenshot 2025-02-16 233421.png";
import TaskManager from "@/assets/Screenshot 2025-02-16 234000.png";
import { ArrowRight, ArrowUpRight, Scale } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

export const Projects = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };

  const projects = [
    {
      projectName: "Business Name Generator",
      img: BNG,
      desc: "Generate unique and catchy business names instantly! Our AI-powered tool helps you find the perfect name for your startup, brand, or project—complete with domain availability checks.",
      link: "https://business-name-generator-bay.vercel.app/",
    },
    {
      projectName: "Job Portal Application",
      img: JobPortal,
      desc: "Effortlessly manage and track job applications. Our system helps recruiters view, sort, and filter applicants based on experience, skills, and application date—making hiring faster and smarter.",
      link: "#",
    },
    {
      projectName: "Task Manager",
      img: TaskManager,
      desc: "Stay organized and boost productivity with our Task Manager. Easily create, prioritize, and track tasks in real time—ensuring nothing falls through the cracks.",
      link: "#",
    },
    {
      projectName: "Image Editor",
      img: imageEditor,
      desc: "A simple yet powerful image editor built with HTML, CSS, and JavaScript. Edit, crop, apply filters, and enhance images right from your browser—no downloads needed!",
      link: "https://vishesh-21.github.io/ImageEditor/",
    },
  ];

  const headingVariants = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen (left)
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen (right)
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="md:mt-28 mt-18 scroll-mt-28" id="projects">
      {/* animate heading  */}
      <div>
        <motion.h1
          className="md:text-[6rem] text-[3rem] text-white md:text-start text-center font-extrabold uppercase md:leading-14 leading-0"
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Recent
        </motion.h1>
        <motion.h2
          className="md:text-[6rem] text-[#353334] text-[3rem] md:text-start text-center  font-extrabold uppercase md:leading-20 mt-6 leading-12"
          variants={subheadingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
      </div>

      {/*animate cards projects showing */}
      <div className="text-white md:mt-6 mt-2 flex flex-col gap-4">
        {projects.map((project, index) => {
          return (
            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              href={project.link}
              target="_blank"
              className="w-full bg-transparent rounded-2xl p-3 duration-400 hover:bg-[#353334] block relative"
              id="card"
            >
              <div className="flex items-center gap-4">
                <img
                  src={project?.img}
                  target="_blank"
                  alt="Image"
                  className="md:w-32 md:h-32 w-26 h-26 hidden md:block object-cover rounded-2xl"
                />
                <div>
                  <h1 className="md:text-xl text-lg md:tracking-[0.1rem] font-semibold md:font-bold">
                    {project?.projectName}
                  </h1>
                  <h2 className="text-[#998F8F] md:text-[0.9rem] text-[0.8rem]">
                    {project?.desc}
                  </h2>
                </div>
              </div>
              <ArrowUpRight className="icon md:mt-4 mr-2 text-orange-600 absolute top-3 text-2xl right-3 duration-300" />
            </motion.a>
          );
        })}
      </div>

      {/* Animated "See More Projects" Button */}
      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <button
          type="button"
          className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-200/80 md:font-semibold md:rounded-lg cursor-pointer rounded-md text-sm md:px-5 md:py-2.5 px-2 py-1 text-center me-2 mb-2"
          onClick={handleClick}
        >
          See More Projects <ArrowRight className="inline" />
        </button>
      </motion.div>
    </div>
  );
};
