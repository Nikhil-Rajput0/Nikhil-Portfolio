import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoReorderThree } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { GrDownload } from "react-icons/gr";

function Header() {
  const [activeLink, SetActiveLink] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="Home" className="overflow-x-hidden">
      <div className=" px-[14px] py-2 sm:px-[36px] md:px-[48px] lg:px-[64px] xl:px-[84px] 2xl:px:[128px] sm:py-5 fixed top-0 left-0 w-full z-50 bg-opacity-90 backdrop-blur-md">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="relative">
            <div className="logo text-[#f5f5f5] text-xl sm:text-2xl font-semibold z-1">
              Nikhil
              <span className="text-[#00f5d4]"> Rajput</span>
            </div>
          </div>

          {/* Animated Border Nav */}
          <div className="hidden lg:block relative rounded-full p-[2px] overflow-hidden">
            {/* Border Layer */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gray-700"
              style={{
                background:
                  "conic-gradient(rgba(255,0,128,0.9), rgba(41,128,185,0.9), rgba(0,245,212,0.9), rgba(255,0,128,0.9))",
              }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                ease: "anticipate",
                duration: 8,
              }}
            />

            {/* Content Layer */}
            <div className="navbar">
              <div className="relative rounded-full border-1 border-[rgba(127,195,82,0.25)] bg-[#1a1a1a] px-6 py-2">
                <ul className="hidden lg:flex ">
                  <li className="flex gap-12 items-center border-rgb text-lg text-[#f5f5f5]">
                    {["Home", "About", "Skills", "Projects", "Contact"].map(
                      (item, index) => (
                        <a
                          href={`#${item}`}
                          key={index}
                          onClick={(e) => {
                            SetActiveLink(item);
                          }}
                          className={activeLink === item ? "active" : ""}
                        >
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                      ),
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Resume Button */}

          <div className="hidden lg:block content content-4">
            <button className="blink z-1 relative inline-flex bg-[#0ff] w-[110px] items-center text-bold justify-center border-2 border-[#0ff] text-lg rounded-full py-[8px] cursor-pointer overflow-hidden">
              <GrDownload className="mr-1" /> Resume
            </button>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" lg:hidden text-white text-3xl outline-none"
          >
            {isOpen ? (
              <AiOutlineClose />
            ) : (
              <IoReorderThree className="text-4xl" />
            )}
          </button>
        </div>
        {isOpen && (
          <motion.ul
            initial={{ x: 300 }}
            animate={{ x: 60 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className=" flex justify-center h-[80vh] -left-[12px] bg-[#f5f5f560] mt-3 bg-opacity-90 backdrop-blur-md"
          >
            <li className="lg:hidden  flex flex-col gap-4 sm:py-7 py-10 text-2xl text-[#1a1a1a]">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item, index) => (
                  <a
                    href={`#${item}`}
                    key={index}
                    onClick={() => {
                      setIsOpen(false);
                      SetActiveLink(item);
                    }}
                    className={activeLink === item ? "active" : ""}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                ),
              )}
            </li>
          </motion.ul>
        )}
      </div>
    </nav>
  );
}

export default Header;
