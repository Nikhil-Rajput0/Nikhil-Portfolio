import React, { useState } from "react";
import MobileSkills from "./MobileSkills";
// import { skills } from "./skiilsData";
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
import { AnimatePresence, motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    category: "Languages",
    icon: <AiFillHtml5 className="text-[#cdaf2a]" />,
  },
  {
    name: "CSS",
    category: "Languages",
    icon: <FaCss3Alt className="text-[#2bc5c5]" />,
  },
  {
    name: "JavaScript",
    category: "Languages",
    icon: <FaJs className="text-[#dfeb3c]" />,
  },
  {
    name: "React",
    category: "Languages",
    icon: <FaReact className="text-[#28f9f9]" />,
  },
  {
    name: "Tailwind",
    category: "Tools",
    icon: <SiTailwindcss className="text-[#068686]" />,
  },
  {
    name: "Git",
    category: "Tools",
    icon: <FaGitSquare className="text-[#ea5b5b]" />,
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: <FaGithub className="text-[#f9faf9]" />,
  },
  {
    name: "VsCode",
    category: "Tools",
    icon: <VscVscode className="text-[#2bc5c5]" />,
  },
  {
    name: "Vercel",
    category: "DevOps",
    icon: <RiVercelFill className="text-[#b7b5b5]" />,
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: <GrDocker className="text-[#5cb1b1]" />,
  },
];

const categories = ["All", "Languages", "Tools", "DevOps"];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="Skills"
      className="px-[48px] py-[24px] lg:py-0 overflow-hidden"
    >
      <div className="text-center py-[16px] md:py-[48px] lg:pt-[48px] lg:pb-[12px] text-[#f5f5f5] text-[27px] lg:text-[4vw] uppercase">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0958a8] via-[#0ff] to-[#0bf] inline-block">
          My Skills
        </h2>
      </div>

      <MobileSkills />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="hidden sm:block lg:px-[128px] lg:py-[16px]"
      >
        <div className="px-10 py-8">
          <div className="grid grid-cols-4 py-4 px-4 bg-[#3e3f3f11] rounded-3xl border border-amber-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={` font-semibold transition py-5 rounded-3xl
              ${
                activeCategory === cat
                  ? "bg-[#8b8b8b70] text-white"
                  : "text-white hover:bg-[#47484833]"
              }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        {/* Skills Grid */}
        <div className="px-[20px]">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="grid sm:grid-cols-3 md:grid-cols-4 gap-6 px-10 py-[16px] overflow-hidden"
          >
            <AnimatePresence>
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, duration: 1 },
                    exit: { opacity: 0, y: -40 },
                  }}
                  className="flex flex-col items-center gap-5 bg-[#4847475f] p-4 rounded-xl shadow-md hover:scale-105 transition"
                >
                  <div className="text-7xl">{skill.icon}</div>
                  <p className="text-gray-200 font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
