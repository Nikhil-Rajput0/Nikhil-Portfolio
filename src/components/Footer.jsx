import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div id="footer" className="sm:px-[36px] md:px-0 py-[24px] ">
        <div className="py-[48px] lg:pt-[36px] lg:pb-[12px] border-t-1 border-cyan-200 px-2 md:px-[10px]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            <div className="row-2 col-span-2 pl-2 pt-5 md:pt-0 md:pl-0 md:row-1 md:col-1 about-me">
              <h4 className="footer-head  text-2xl text-[#0bf]">About Me</h4>
              <p className="footer-text text-md text-[#f5f5f5]">
                A passionate developer focused on creating innovative solutions
                and meaningful user experiences.
              </p>
            </div>
            <div className="row-1 col-1 md:col-3 quick-links flex flex-col lg:items-center">
              <h4 className="footer-head text-2xl text-[#0bf]">Quick-Links</h4>
              <ul className="text-md text-[#f5f5f5]">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#Projects">Projects</a>
                </li>
                <li>
                  <a href="#">Experience</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="row-1 col-2 pl-2 skills2 flex flex-col lg:items-center">
              <h4 className="footer-head mr-23 md:mr-29 text-2xl text-[#0bf]">
                Skills
              </h4>
              <ul className="text-md text-[#f5f5f5]">
                <li>Full-stack</li>
                <li>Mern stack</li>
                <li>UI/UX Design</li>
                <li>Project Management</li>
              </ul>
            </div>
            <div className="hidden sm:flex row-1 col-3 md:col-4 connect  flex-col items-center">
              <h4 className="footer-head  text-2xl text-[#0bf]">Connect</h4>
              <div className="flex gap-2 overflow-hidden">
                <a
                  target="_blank"
                  rel="noopener"
                  aria-label="github logo"
                  className="hover:scale-120 hover:shadow-lg transition"
                  href="https://github.com/Nikhil-Rajput0"
                >
                  <AiOutlineGithub className="text-3xl text-[#0ff] " />
                </a>
                <a
                  target="_blank"
                  rel="noopener"
                  aria-label="linkedin logo"
                  href="https://www.linkedin.com/in/nikhil-rajput-a14716275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="hover:scale-120 hover:shadow-lg transition"
                >
                  <AiOutlineLinkedin className="text-3xl text-[#0ff]" />
                </a>
                <a
                  target="_blank"
                  rel="noopener"
                  aria-label="twitter logo"
                  href="https://www.twitter.com/@Nikhilrajput236"
                  className="hover:scale-120 hover:shadow-lg transition"
                >
                  <AiFillTwitterCircle className="text-3xl text-[#0ff]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-[#f5f5f5] border-t-1 border-cyan-200">
        <h4 className="text-md p-4">
          &copy; {new Date().getFullYear()} Nikhil Singh . All rights reserved.
        </h4>
      </div>
    </>
  );
}

export default Footer;
