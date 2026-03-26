import React from "react";
import Projectdesc from "./Projectdesc";
import { motion } from "framer-motion";

const projects = [
  {
    img: "src/assets/ibrahim-shabil-DbYga9Ot9sU-unsplash.png",
    name: "Igonito-",
    about: "A movie downloader",
    id: 1,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima animi praesentium quisquam qui consectetur iure ut accusamus, deleniti quos fuga.",
    skills: ["React", "Tailwind", "Html", "Css"],
    btn: ["View Live", "GitHub"],
  },
  {
    img: "src/assets/ibrahim-shabil-DbYga9Ot9sU-unsplash.png",
    name: "Ginn-",
    about: "A movie downloader",
    id: 2,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima animi praesentium quisquam qui consectetur iure ut accusamus, deleniti quos fuga.",
    skills: ["React", "Tailwind", "Html", "Css"],
    btn: ["View Live", "GitHub"],
  },
  {
    img: "src/assets/ibrahim-shabil-DbYga9Ot9sU-unsplash.png",
    name: "Splash-",
    about: "A movie downloader",
    id: 3,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima animi praesentium quisquam qui consectetur iure ut accusamus, deleniti quos fuga.",
    skills: ["React", "Tailwind", "Html", "Css"],
    btn: ["View Live", "GitHub"],
  },
  {
    img: "src/assets/ibrahim-shabil-DbYga9Ot9sU-unsplash.png",
    name: "Parano-",
    about: "A movie downloader",
    id: 4,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima animi praesentium quisquam qui consectetur iure ut accusamus, deleniti quos fuga.",
    skills: ["React", "Tailwind", "Html", "Css"],
    btn: ["View Live", "GitHub"],
  },
];

function Projects() {
  return (
    <section
      id="Projects"
      className="sm:px-[36px] md:px-0 py-[24px] overflow-hidden"
    >
      <div className="text-center py-[16px] md:py-[48px] lg:pt-[56px] lg:pb-[12px] text-[#f5f5f5] text-[27px] lg:text-[4vw] uppercase">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0958a8] via-[#0ff] to-[#0bf] inline-block">
          Projects
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "linear" }}
        viewport={{ once: true }}
        className="lg:px-[128px] lg:py-[16px]"
      >
        <div className="px-10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-y-10 lg:gap-x-9">
            {projects.map((project) => (
              <Projectdesc header={project} key={project.id} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
