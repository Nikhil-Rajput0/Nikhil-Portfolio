import React from "react";
import Profile from "../assets/profile.png";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="About"
      className="px-[24px] lg:px-[64px] py-[64px] lg:py-[96px] bg-transparent relative overflow-hidden"
    >
      {/* Title */}
      <div className="text-center mb-[20px] md:mb-[48px] text-[27px] lg:text-[4vw] uppercase">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0958a8] via-[#0ff] to-[#0bf] inline-block">
          About me
        </h2>
      </div>

      {/* About Section */}
      <motion.div
        className="md:grid grid-cols-2 items-center gap-10"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Profile Image */}
        <div className="hidden md:flex flex-col items-center">
          <div className="flex justify-center mb-10 lg:mb-0">
            <div className="relative">
              {/* Animated Gradient Border */}

              <div className="relative rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-[#00f5d4] via-[#38bdf8] to-[#00f5d4] p-[3px]">
                <img
                  src={Profile}
                  alt="Personal Picture"
                  className="rounded-full w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-gray-800 rounded-full text-cyan-400 font-medium text-sm">
              React.js
            </span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-cyan-400 font-medium text-sm">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-cyan-400 font-medium text-sm">
              JavaScript
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-[#cfcfcf] leading-relaxed">
          {/* Desktop text */}
          <p className="hidden lg:block text-[#aaa] text-[16px] xl:text-[18px] leading-7 tracking-wide">
            Hi, I’m a{" "}
            <span className="text-cyan-400 font-semibold">React developer</span>{" "}
            dedicated to creating modern, responsive, and accessible web
            applications. My expertise lies in building seamless user interfaces
            and interactive experiences using React, JavaScript, and other
            cutting-edge front-end technologies.
            <br />
            <br />
            I have a strong background in working with REST APIs, managing state
            with Redux or Context API, and optimizing performance for fast,
            reliable applications. I focus on writing clean, maintainable code
            and enjoy collaborating with cross-functional teams to create
            impactful digital products.
            <br />
            <br />
            Passionate about continuous learning, I constantly explore new
            libraries, frameworks, and design patterns to enhance my skill set.
            Let’s connect to bring your ideas to life through innovative,
            high-quality web development.
          </p>

          {/* Mobile text */}
          <p className="lg:hidden text-[#aaa] text-center text-[15px] leading-6">
            I’m a React developer passionate about building responsive,
            scalable, and high-performing web apps. Skilled in React,
            JavaScript, and modern tools, I focus on crafting engaging user
            experiences and writing clean, maintainable code. Let’s collaborate
            to create impactful digital solutions.
            <br />
            <br />
            Passionate about continuous learning, I constantly explore new
            libraries, frameworks, and design patterns to enhance my skill set.
            Let’s connect to bring your ideas to life through innovative,
            high-quality web development.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col lg:flex-row gap-3 md:gap-6 items-center mt-8">
            <div className="flex items-center gap-2 text-[#38bdf8]">
              <IoMailOutline size={22} />
              <span className="text-[#ccc] text-[15px]">
                nikhilrajpu236@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#38bdf8]">
              <IoLocationOutline size={22} />
              <span className="text-[#ccc] text-[15px]">
                Sri Muktsar Sahib, Punjab, India
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
