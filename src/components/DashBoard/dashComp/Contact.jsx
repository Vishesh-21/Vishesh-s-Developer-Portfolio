import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef(null);
  const [isSent, setIsSent] = useState(false);

  // ✅ Store environment variables in constants
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert("Email service is not configured properly.");
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setIsSent(true);
        alert("Email sent successfully!");
      },
      (error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again.");
      }
    );
  };

  return (
    <div className="md:mt-24 md:mb-8 mt-12 scroll-mt-16" id="contact">
      <div>
        <h1 className="md:text-[6rem] text-[3rem] text-white font-extrabold md:leading-14 uppercase leading-8 md:text-start text-center">
          Let's Work
        </h1>
        <h2 className="md:text-[6rem] text-[3rem] text-[#353334] uppercase font-extrabold md:leading-20 md:mt-6 md:text-start text-center">
          Together
        </h2>
      </div>

      <div className="text-white text-sm md:mt-8 mt-4">
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label htmlFor="name" className="text-sm text-[#998F8F]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="bg-[#353334] text-sm w-full mt-2 placeholder:text-[#998F8F] py-2 px-4 rounded-md"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="email" className="text-sm text-[#998F8F]">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="user_email"
                className="bg-[#353334] w-full mt-2 placeholder:text-[#998F8F] py-2 px-4 rounded-md"
                placeholder="your@email.com"
                required
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
              required
            ></textarea>
          </div>

          <Button
            type="submit"
            variant="outline"
            className="text-black text-sm font-semibold w-full mt-4 cursor-pointer"
          >
            {isSent ? "Sent!" : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};
