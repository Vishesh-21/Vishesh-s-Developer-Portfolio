import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export const Contact = () => {
  return (
    <div className="mt-18 mb-8">
      <div>
        <h1 className="text-[6rem] text-white font-extrabold uppercase leading-14">
          Let's Work
        </h1>
        <h2 className="text-[6rem] text-[#353334] font-extrabold uppercase leading-20 mt-6">
          Together
        </h2>
      </div>

      <div className="text-white text-sm mt-8">
        <div className="flex gap-4">
          <div className="w-1/2">
            <label htmlFor="name" className="text-sm text-[#998F8F]">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-[#353334] text-sm w-full mt-2 placeholder:text-[#998F8F] py-2 px-4 rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="email" className="text-sm text-[#998F8F]">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="bg-[#353334] w-full mt-2 placeholder:text-[#998F8F] py-2 px-4 rounded-md"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="w-full mt-3">
          <label htmlFor="message" className="text-sm text-[#998F8F]">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="bg-[#353334] h-36 w-full resize-none mt-2 placeholder:text-[#998F8F] py-2 px-4 rounded-md"
            placeholder="Message"
          ></textarea>
        </div>

        <Button variant="outline" className='text-black text-sm font-semibold w-full mt-4'>Submit</Button>
      </div>
    </div>
  );
};
