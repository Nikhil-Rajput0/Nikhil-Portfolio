import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { GrDocker } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { RiVercelFill } from "react-icons/ri";
import { motion } from "framer-motion";

const mobileSkills = [
  {
    id: 1,
    heading: "Frontend Technologies",
    skill: [
      {
        name: "React",
        icon: (
          <FaReact className="text-[#28f9f9] text-6xl bg-[#4e4e4e7e] p-2 rounded-lg" />
        ),
      },
      {
        name: "HTML5",
        icon: (
          <AiFillHtml5 className="text-[#cdaf2a] text-6xl bg-[#4e4e4e7e] p-2 rounded-lg" />
        ),
      },
      {
        name: "CSS3",
        icon: (
          <FaCss3Alt className="text-[#2bc5c5] text-6xl bg-[#4e4e4e7e] p-2 rounded-lg" />
        ),
      },
      {
        name: "Js",
        icon: (
          <FaJs className="text-[#dfeb3c] text-6xl bg-[#4e4e4e7e] p-2 rounded-lg" />
        ),
      },
      {
        name: "Tailwind",
        icon: (
          <SiTailwindcss className="text-[#068686] text-6xl bg-[#4e4e4e7e] p-2 rounded-lg" />
        ),
      },
    ],
  },
  {
    id: 2,
    heading: "Developer Tools",
    skill: [
      {
        name: "Git",
        icon: (
          <FaGitSquare className="text-[#ea5b5b] text-6xl bg-[#4e4e4e7e] p-2 rounded-lg" />
        ),
      },
      {
        name: "GitHub",
        icon: (
          <FaGithub className="text-[#f9faf9] text-6xl bg-[#4e4e4e7e] p-2 rounded-lg" />
        ),
      },
      {
        name: "VS Code",
        icon: (
          <VscVscode className="text-[#2bc5c5] text-6xl bg-[#4e4e4e7e] p-2 rounded-lg" />
        ),
      },
      {
        name: "Docker",
        icon: (
          <GrDocker className="text-[#5cb1b1] text-6xl bg-[#4e4e4e7e] p-2 rounded-lg" />
        ),
      },
      {
        name: "Vercel",
        icon: (
          <RiVercelFill className="text-[#b7b5b5] text-6xl bg-[#4e4e4e7e] p-2 rounded-lg" />
        ),
      },
    ],
  },
];

function MobileSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.9 }}
      exit={{ opacity: 0, y: -70 }}
      transition={{ duration: 1, ease: "linear" }}
      className="sm:hidden flex flex-col gap-6 overflow-hidden"
    >
      {mobileSkills.map((category) => (
        <div
          key={category.id}
          className=" border border-[#0ff] rounded-2xl bg-[#31313150]"
        >
          <div className="px-4 py-3">
            <h3 className="text-[#fff] pb-2 text- text-xl font-medium">
              {category.heading}
            </h3>
            <p className="h-[2px] bg-gradient-to-r from-[#0ff] via-[#0fb] to-[#0bf]"></p>
            <div className="grid grid-cols-3 py-3 gap-6">
              {category.skill.map((item, i) => (
                <button
                  key={i}
                  className="text-[#f5f5f5] flex flex-col items-center gap-2"
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
      ;
    </motion.div>
  );
}

export default MobileSkills;
