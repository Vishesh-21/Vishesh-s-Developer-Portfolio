import { GitHubContext } from "@/context/context";
import { ArrowUpRight } from "lucide-react";
import React, { useContext } from "react";
import { motion } from "motion/react";

export const About = () => {
  const { githubData } = useContext(GitHubContext);

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
      }, // Delayed after first heading
    },
  };

  const text =
    "Passionate about building dynamic and scalable web applications. Focused on crafting seamless user experiences with clean and efficient code.";

  const textVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.04 }, // Letters appear one by one
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -5 }, // Letters start hidden & slightly left
    show: { opacity: 1, x: 0, transition: { duration: 0.02 } }, // Appear smoothly
  };

  const card = [
    {
      title: "Frontend Development",
      desc: "Building seamless, high-performance, and user-focused web experiences with clean and modern frontend development.",
    },
    {
      title: "Backend Development",
      desc: "Designing scalable, efficient, and secure backend systems to power seamless web experiences.",
    },
  ];

  return (
    <div className="text-white scroll-mt-24" id="home">
      <div>
        <motion.h1
          className="md:text-[6rem] md:text-start text-center  text-[3rem] text-white font-extrabold uppercase md:leading-14"
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Full STack
        </motion.h1>
        <motion.h2
          className="md:text-[6rem] text-[3rem] md:text-start text-center text-[#353334] font-extrabold uppercase md:leading-20 md:mt-6 leading-5"
          variants={subheadingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Engineer
        </motion.h2>
      </div>

      <div>
        <motion.p
          className="text-[#998F8F] font-400 md:text-lg text-sm md:mt-6 mt-4 md:w-[70%] md:text-justify text-center"
          variants={textVariants}
          initial="hidden"
          animate="show"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>

      {/* {project description}  */}
      <div className="flex md:w-[70%] items-center justify-between md:my-10 my-7">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="md:text-[5rem] text-[3rem] font-semibold md:leading-22">
            &lt;1
          </h1>
          <p className="text-[#998F8F] md:text-[1rem] text-sm md:leading-5 leading-4">
            YEARS OF <br /> EXPERIENCE
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="md:text-[5rem] font-semibold md:leading-22 text-[3rem]">
            +{githubData?.public_repos}
          </h1>
          <p className="text-[#998F8F] md:leading-5 leading-4 md:text-[1rem] text-sm">
            PROJECTS <br /> COMPLETED
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://github.com/Vishesh-21"
            className="text-[#998F8F] flex items-center gap-2 leading-5 hover:text-gray-200 duration-200 md:text-[1rem] text-sm"
            target="_blank"
          >
            <span>Check Projects</span>
            <ArrowUpRight />
          </a>
        </motion.div>
      </div>

      {/* animate cards  */}
      <div className="w-full gap-8 flex md:flex-row flex-col">
        {card.map((item) => (
          <motion.a
            href="#"
            className="block md:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            whileHover={{scale:1.04}}
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
            <p className="font-normal md:text-[1rem] text-sm text-gray-700 dark:text-gray-400">
              {item.desc}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};
