import React from "react";
import Backend from "@/assets/giphy.webp";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { delay } from "motion";

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
  "PostgreSQL",
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
  "Prisma",
  "Vercel",
  "Linux",
  "Chat gpt",
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 }, // Stagger effect
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const getRandomDelay = () => Math.random() * 0.5 + 0.1;

const badgeVariants = {
  hidden: { scale: 0, opacity: 0 },
  show: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: custom,
    },
  }),
};

const headingVariants = {
  hidden: { opacity: 0, x: -100 }, // Start off-screen (left)
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.6 },
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

export const Skills = () => {
  return (
    <div className="text-white md:mt-16 mt-10 scroll-mt-24" id="tools">
      {/* animate heading  */}
      <div>
        <motion.h1
          className="md:text-[6rem] text-[3rem] text-white uppercase font-extrabold md:leading-14 leading-8 md:text-start text-center"
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Code 
        </motion.h1>
        <motion.h2
          className="md:text-[6rem] text-[3rem] text-[#353334] uppercase font-extrabold md:leading-20 md:mt-6 md:text-start text-center"
          variants={subheadingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          ToolBox
        </motion.h2>

        {/* animate skills section  */}
        <div className="flex items-center flex-wrap gap-x-5 gap-y-2 py-8 mt-10 border-l-[1px] rounded-2xl justify-center border-r-[1px]">
          {arr.map((item, index) => (
            <motion.div
              key={index}
              variants={badgeVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={getRandomDelay()}
            >
              <Badge className="bg-white text-black py-2 px-6 rounded-full hover:bg-white">
                {item}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="md:mt-18 mt-9">
        <motion.h1
          className="md:text-[6rem] uppercase text-[3rem] text-white font-extrabold md:leading-14 leading-8 md:text-start text-center"
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          What I'm
        </motion.h1>
        <motion.h2
          className="md:text-[6rem] text-[3rem] text-[#353334] uppercase font-extrabold md:leading-20 md:mt-6 md:text-start text-center"
          variants={subheadingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Doing
        </motion.h2>
        <motion.div
          className="md:mt-10 mt-5 flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full bg-[#3533344a] py-4 rounded border-l-[1px] px-6 duration-400 flex items-center gap-5"
            variants={textVariants} // Fade-in & slide effect
          >
            {/* Animated Image */}
            <motion.div
              className="md:w-[350px] md:h-[150px] w-[200px] h-[100px] overflow-hidden rounded object-cover"
              variants={imageVariants} // Zoom-in effect
            >
              <img src={Backend} alt="Image" className="w-full h-full" />
            </motion.div>

            {/* Animated Text */}
            <motion.div variants={textVariants}>
              <h1 className="md:text-2xl text-xl font-bold">
                Full Stack Development
              </h1>
              <p className="text-[#998F8F] md:text-[1rem] text-[0.78rem] md:text-start">
                Full-stack developer crafting seamless, high-performance web
                applications with intuitive frontends and robust, scalable
                backends.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="md:mt-20 mt-16">
        <motion.h1
          className="md:text-[6rem] uppercase text-[3rem] text-white font-extrabold md:leading-14 leading-8 md:text-start text-center"
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Crafting 
        </motion.h1>
        <motion.h2
          className="md:text-[6rem] uppercase text-[3rem] text-[#353334] font-extrabold md:leading-20 md:mt-6 md:text-start text-center"
          variants={subheadingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Tools
        </motion.h2>
        <div className="flex items-center flex-wrap gap-x-5 gap-y-2 py-8 mt-10 border-l-[1px] rounded-2xl justify-center border-r-[1px]">
          {tech.map((item, index) => (
            <motion.div
              variants={badgeVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={getRandomDelay()}
            >
              <Badge
                key={index}
                className="bg-white text-black py-2 px-6 rounded-full hover:bg-white"
              >
                {item}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
