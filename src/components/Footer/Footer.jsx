import React from "react";
import { Contact, Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full mb-8 text-gray-300 py-6">
      <div className="mx-auto w-[85%] flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left - Branding */}
        <div className="text-center md:text-left">
          <h1 className="text-xl text-white font-semibold">Vishesh | Full-Stack Developer</h1>
          <p className="text-sm text-[#998F8F]">Crafting seamless digital experiences.</p>
        </div>

        {/* Center - Social Media Links */}
        <div className="flex gap-5 mt-4 md:mt-0">
          <a href="tel:+917027511370" target="_blank" rel="noopener noreferrer">
            <Phone className="text-[#998F8F] hover:text-white transition duration-300" size={24} />
          </a>
          <a href="https://www.linkedin.com/in/vishesh-verma-35b31b279/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-[#998F8F] hover:text-white transition duration-300" size={24} />
          </a>
          <a href="mailto:vishesbaund@gmail.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <Mail  className="text-[#998F8F] hover:text-white transition duration-300" size={24} />
          </a>
        </div>

        {/* Right - Copyright */}
        <p className="text-sm text-[#998F8F] mt-4 md:mt-0">© {new Date().getFullYear()} Vishesh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

