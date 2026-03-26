import React from "react";
import profilePicture from "../assets/profilePic.png";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaHireAHelper } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GrDownload } from "react-icons/gr";
import pictureDesign from "../assets/design.png";

function Hero() {
  return (
    <section className="px-[48px] pt-[110px] pb-[32~px] md:px-[96px] md:py-[100px]  md:pb-0 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center">
        <div className="mt-10 sm:mt-0 flex items-center justify-center">
          <picture>
            <img
              src={profilePicture}
              alt="Personal Picture"
              className="sm:h-[350px] sm:w-[400px] lg:ml-25 xl:ml-40 h-[250px] w-[300px]"
            />
          </picture>
        </div>
        <div className="row-1 lg:col-2">
          <div className="relative">
            <p className="text-xl sm:text-2xl xl:text-3xl text-[#f5f5f5] font-normal ">
              Hello, I'm
            </p>
          </div>
          <div className="relative">
            <h1 className="overflow-hidden text-[32px] sm:text-3xl lg:text-5xl xl:text-6xl text-[#f5f5f5] leading-10 lg:leading-14 xl:leading-17 tracking-tight font-bold">
              Nikhil Kumar Singh
            </h1>
          </div>
          <div className="relative">
            <p className="overflow-hidden text-xl  sm:text-2xl xl:text-3xl text-[#f5f5f5] mb-2">
              And I'm a{" "}
              <TypeAnimation
                className="text-[#0ff] text-xl sm:text-2xl lg:text-4xl"
                sequence={[
                  "Frontend Dev",
                  1000,
                  "React Developer",
                  1000,
                  "Quick Learner",
                  1000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
            </p>
          </div>

          <div className="relative">
            <p className="text-[10px] sm:text-[13px] text-[#a4a4a4] sm:leading-4 xl:leading-5 font-light mb-4">
              I create web applications Frontend based on React, builiding rich
              interactive experiences by making more projects.
            </p>
          </div>
          <div className="flex flex-row gap-6 mb-5 overflow-hidden">
            <a
              target="_blank"
              rel="noopener"
              aria-label="github logo"
              className="hover:scale-120 hover:shadow-lg transition duration-400"
              href="https://github.com/Nikhil-Rajput0"
            >
              <AiOutlineGithub className="text-4xl text-[#0ff] " />
            </a>
            <a
              target="_blank"
              rel="noopener"
              aria-label="linkedin logo"
              href="https://www.linkedin.com/in/nikhil-rajput-a14716275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="hover:scale-120 hover:shadow-lg transition duration-400"
            >
              <AiOutlineLinkedin className="text-4xl text-[#0ff]" />
            </a>
            <a
              target="_blank"
              rel="noopener"
              aria-label="twitter logo"
              href="https://www.twitter.com/@Nikhilrajput236"
              className="hover:scale-120 hover:shadow-lg transition duration-400"
            >
              <AiFillTwitterCircle className="text-4xl text-[#0ff]" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener"
              aria-label="Instagram logo"
              className="hover:scale-120 hover:shadow-lg transition duration-400"
            >
              <AiOutlineInstagram className="text-4xl text-[#0ff]" />
            </a>
          </div>

          <div className="flex gap-6 md:px-0">
            <a
              target="_blank"
              rel="noopener"
              aria-label="linkedin logo"
              href="https://www.linkedin.com/in/nikhil-rajput-a14716275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              <button className="hidden lg:inline-flex blink z-1 relative font-[600]  bg-[#0ff] w-[150px] items-center text-bold justify-center border-2 border-[#0ff] text-lg rounded-full py-[8px] cursor-pointer overflow-hidden">
                <FaHireAHelper className="mr-1" /> Hire me
              </button>
            </a>
            <button className="lg:hidden blink z-1 relative inline-flex bg-[#0ff] w-[150px] items-center text-bold justify-center border-2 border-[#0ff] text-lg rounded-full py-[8px] cursor-pointer overflow-hidden">
              <GrDownload className="mr-1" /> Resume
            </button>
            <a
              href="#Contact"
              className=" blink blink-2 z-1 relative font-[600] inline-flex bg-transparent text-[#0ff] w-[150px] md:w-[120px] items-center justify-center border-2 border-[#0ff] text-lg rounded-full py-[4px] cursor-pointer  overflow-hidden"
            >
              <FaPhoneAlt className="mr-1" /> Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
