import React from "react";
import BNG from "@/assets/Screenshot 2025-02-16 223721.png";
import imageEditor from "@/assets/Screenshot 2025-02-16 233052.png";
import JobPortal from "@/assets/Screenshot 2025-02-16 233421.png";
import TaskManager from "@/assets/Screenshot 2025-02-16 234000.png";
import { ArrowRight, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
      technologies: ["React", "NextJS", "TailwindCSS", "OpenAI"],
      github: "https://github.com/yourusername/business-name-generator"
    },
    {
      projectName: "Job Portal Application",
      img: JobPortal,
      desc: "Effortlessly manage and track job applications. Our system helps recruiters view, sort, and filter applicants based on experience, skills, and application date—making hiring faster and smarter.",
      link: "#",
      technologies: ["React", "MongoDB", "Express", "Node.js"],
      github: "https://github.com/yourusername/job-portal"
    },
    {
      projectName: "Task Manager",
      img: TaskManager,
      desc: "Stay organized and boost productivity with our Task Manager. Easily create, prioritize, and track tasks in real time—ensuring nothing falls through the cracks.",
      link: "#",
      technologies: ["React", "Firebase", "TailwindCSS"],
      github: "https://github.com/yourusername/task-manager"
    },
    {
      projectName: "Image Editor",
      img: imageEditor,
      desc: "A simple yet powerful image editor built with HTML, CSS, and JavaScript. Edit, crop, apply filters, and enhance images right from your browser—no downloads needed!",
      link: "https://vishesh-21.github.io/ImageEditor/",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/vishesh-21/ImageEditor"
    },
  ];

  const headingVariants = {
    hidden: { opacity: 0, x: -100 },
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
    hidden: { opacity: 0, x: 100 },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="md:mt-28 mt-18 scroll-mt-28" id="projects">
      {/* Animate heading */}
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
          className="md:text-[6rem] text-[#353334] text-[3rem] md:text-start text-center font-extrabold uppercase md:leading-20 mt-6 leading-12"
          variants={subheadingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
      </div>

      {/* Projects grid */}
      <motion.div 
        className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="relative group h-[300px] overflow-hidden rounded-2xl"
          >
            {/* Blue overlay and border on hover */}
            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
              {/* Blue overlay */}
              <div className="absolute inset-0 bg-blue-500/40"></div>
              <div className="absolute inset-[2px] bg-[#131313] rounded-2xl"></div>
              
              {/* Single slate-400 animated border */}
              <div className="absolute inset-0 group-hover:animate-border-run">
                <div className="absolute inset-0 bg-black opacity-35"></div>
              </div>
            </div>
            
            {/* Background image that's always visible */}
            <div className="absolute inset-0 z-0">
              <img
                src={project.img}
                alt={project.projectName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm group-hover:brightness-50"
              />
              
              {/* Project name overlay at bottom that's visible initially */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white">{project.projectName}</h3>
              </div>
            </div>
            
            {/* Content container - revealed on hover */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Project title */}
              <h3 className="text-2xl font-bold text-white mb-3">{project.projectName}</h3>
              
              {/* Project description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-4">{project.desc}</p>
              
              {/* Project technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs px-2 py-1 bg-[#2a2a2a] text-gray-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Project links */}
              <div className="flex justify-between items-center">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={18} />
                  <span className="text-sm">Code</span>
                </a>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span className="text-sm">Live Demo</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated "See More Projects" Button */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <button
          type="button"
          className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-200/80 md:font-semibold md:rounded-lg cursor-pointer rounded-md text-sm md:px-5 md:py-2.5 px-2 py-1 text-center me-2 mb-2 flex items-center gap-2 mx-auto"
          onClick={handleClick}
        >
          <span>See More Projects</span> 
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
};

// Add the fixed border animation CSS
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  @keyframes border-run {
    0% {
      clip-path: inset(0 0 98% 0);
    }
    25% {
      clip-path: inset(0 0 0 98%);
    }
    50% {
      clip-path: inset(98% 0 0 0);
    }
    75% {
      clip-path: inset(0 98% 0 0);
    }
    100% {
      clip-path: inset(0 0 98% 0);
    }
  }

  .animate-border-run {
    animation: border-run 4s linear infinite;
  }
`;
document.head.appendChild(styleTag);