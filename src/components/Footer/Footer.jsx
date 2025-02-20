import React from "react";
import { Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

const arr = [
  {
    icon: (
      <Phone
        className="text-[#998F8F] hover:text-white transition duration-300"
        size={24}
      />
    ),
    link: "tel:+917027511370",
  },
  {
    icon: (
      <Linkedin
        className="text-[#998F8F] hover:text-white transition duration-300"
        size={24}
      />
    ),
    link: "https://www.linkedin.com/in/vishesh-verma-35b31b279/",
  },
  {
    icon: (
      <Mail
        className="text-[#998F8F] hover:text-white transition duration-300"
        size={24}
      />
    ),
    link: "mailto:vishesbaund@gmail.com",
  },
];

const text = "Vishesh | Full-Stack Developer";

const headingVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }, // Each letter appears separately
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.05 } },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
};

export const Footer = () => {
  return (
    <footer className="w-full md:mb-8 text-gray-300 mb-2 py-6">
      <div className="mx-auto w-[85%] flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left - Branding */}
        <div className="text-center md:text-left">
          <motion.h1
            className="text-xl text-white font-semibold"
            variants={headingVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Fade-in Slide-up Effect for Paragraph */}
          <motion.p
            className="text-sm text-[#998F8F]"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Crafting seamless digital experiences.
          </motion.p>
        </div>

        {/* Center - Social Media Links */}
        <div className="flex md:gap-7 gap-12 mt-4 md:mt-0">
          {arr.map((item,index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Right - Copyright */}
        <motion.p className="text-sm text-[#998F8F] mt-4 md:mt-0" initial={{opacity:0, y :-50}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} viewport={{once:true}}>
          © {new Date().getFullYear()} Vishesh. All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
};
