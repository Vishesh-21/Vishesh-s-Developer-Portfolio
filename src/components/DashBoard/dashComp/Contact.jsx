import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import { toast, Toaster } from "sonner";

export const Contact = () => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error("Email service is not configured properly.");
      setIsLoading(false);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setIsSent(true);
        setIsLoading(false);
        formRef.current.reset();
        toast.success("Email sent successfully! ✅");
        setTimeout(() => {
          setIsSent(false);
        },3000)
      },
      (error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send email. ❌");
        setIsLoading(false);
      }
    );
  };

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

  const inputVariants = {
    hidden: { opacity: 0, y: 30 },
    show: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2 }, // Stagger effect
    }),
  };

  return (
    <div className="md:mt-24 md:mb-8 mt-12 scroll-mt-16" id="contact">
    <Toaster position="top-right" richColors />
      <div>
        <motion.h1
          className="md:text-[6rem] text-[3rem] text-white font-extrabold md:leading-14 uppercase leading-8 md:text-start text-center"
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Let's Work
        </motion.h1>
        <motion.h2
          className="md:text-[6rem] text-[3rem] text-[#353334] uppercase font-extrabold md:leading-20 md:mt-6 md:text-start text-center"
          variants={subheadingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Together
        </motion.h2>
      </div>

      <motion.div
        className="text-white text-sm md:mt-8 mt-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="flex gap-4">
            {[
              {
                id: "name",
                label: "Name",
                type: "text",
                name: "user_name",
                placeholder: "Your Name",
              },
              {
                id: "email",
                label: "Email",
                type: "email",
                name: "user_email",
                placeholder: "your@email.com",
              },
            ].map((field, index) => (
              <motion.div
                key={field.id}
                className="w-1/2"
                variants={inputVariants}
                custom={index}
              >
                <label htmlFor={field.id} className="text-sm text-[#998F8F]">
                  {field.label}
                </label>
                <motion.input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  className="bg-[#353334] text-sm w-full mt-2 placeholder:text-[#998F8F] py-2 px-4 rounded-md"
                  placeholder={field.placeholder}
                  required
                  whileFocus={{ scale: 1.03, transition: { duration: 0.3 } }} // Subtle pop effect on focus
                />
              </motion.div>
            ))}
          </div>

          {/* Message Field Animation */}
          <motion.div
            className="w-full mt-3"
            variants={inputVariants}
            custom={2}
          >
            <label htmlFor="message" className="text-sm text-[#998F8F]">
              Message
            </label>
            <motion.textarea
              name="message"
              id="message"
              className="bg-[#353334] h-36 w-full resize-none mt-2 placeholder:text-[#998F8F] py-2 px-4 rounded-md"
              placeholder="Message"
              required
              whileFocus={{ scale: 1.02, transition: { duration: 0.3 } }}
            ></motion.textarea>
          </motion.div>

          {/* Submit Button Animation */}
          <motion.div variants={inputVariants} custom={3}>
            <Button
              type="submit"
              variant="outline"
              className="text-black md:text-md text-sm font-semibold w-full mt-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              disabled={isLoading}
            >
              { isLoading ? <span><Loader2 className="animate-spin inline"/> Sending...</span> : isSent ? "Sent !" : "Submit"}
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};
