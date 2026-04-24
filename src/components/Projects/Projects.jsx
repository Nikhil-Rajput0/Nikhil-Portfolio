import Image from "../../assets/ibrahim-shabil-DbYga9Ot9sU-unsplash.png";
import Project1 from "../../assets/project1.png";
import Projectdesc from "./Projectdesc";
import { motion } from "framer-motion";

const projects = [
  {
    img: Project1,
    name: "HireMind AI",
    about: "AI Interview Platform",
    liveUrl: "https://hiremind-ai-org.vercel.app",
    githubLink: "https://github.com/Nikhil-Rajput0/HireMind-Ai",
    id: 1,
    desc: "Prepare for interviews using AI-powered mock sessions, resume tools, and real-time feedback.",
    skills: ["Next.js", "Tailwind", "Node.js", "MongoDB"],
  },
  {
    img: Project1,
    name: "HireMind AI",
    about: "AI Interview Platform",
    liveUrl: "https://hiremind-ai-org.vercel.app",
    githubLink: "https://github.com/Nikhil-Rajput0/HireMind-Ai",
    id: 1,
    desc: "Prepare for interviews using AI-powered mock sessions, resume tools, and real-time feedback.",
    skills: ["Next.js", "Tailwind", "Node.js", "MongoDB"],
  },
];

function Projects() {
  return (
    <section
      id="Projects"
      className="
    py-24 px-4 lg:px-45
    text-white
    relative
  "
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none" />
      <div className="text-center mb-16 overflow-hidden">
        <p className="text-sm overflow-hidden uppercase tracking-widest text-gray-400">
          Portfolio
        </p>
        <h2 className="text-3xl overflow-hidden md:text-5xl font-semibold mt-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto overflow-hidden">
        {projects.map((project) => (
          <Projectdesc key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
