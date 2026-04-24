import { FiExternalLink, FiGithub } from "react-icons/fi";

function Projectdesc({ project }) {
  return (
    <div
      className="
        group relative
        rounded-2xl
        overflow-hidden
        border border-white/10
        bg-gradient-to-br from-white/5 to-white/0
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(0,255,255,0.08)]
        hover:shadow-[0_0_60px_rgba(0,255,255,0.25)]
        transition-all duration-500 
      "
    >
      {/* 🔥 Glow Border Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 blur-xl" />

      {/* Image */}
      <div className="relative overflow-hidden px-5 py-5">
        <img
          src={project.img}
          alt="project"
          width={600}
          height={400}
          className="
            w-full h-52 object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500" />
      </div>

      {/* Content */}
      <div className="relative p-6 flex flex-col gap-4 z-10">
        {/* Title */}
        <div>
          <h3 className="text-xl font-semibold text-white tracking-wide">
            {project.name}
          </h3>
          <p className="text-sm text-gray-400">{project.about}</p>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed">{project.desc}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 ">
          {project.skills.map((skill, i) => (
            <span
              key={i}
              className="
                text-xs px-3 py-1 rounded-full
                bg-white/10
                border border-white/10
                text-gray-300
                backdrop-blur-md 
              "
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-2 overflow-hidden">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1 flex items-center justify-center gap-2
              px-4 py-2
              rounded-full
              bg-gradient-to-r from-cyan-500 to-blue-500
              text-white text-sm font-medium
              shadow-lg
              hover:scale-105
              transition overflow-hidden
            "
          >
            Live <FiExternalLink />
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1 flex items-center justify-center gap-2
              px-4 py-2
              rounded-full
              border border-white/20
              text-gray-300
              text-sm font-medium
              hover:bg-white/10
              transition
            "
          >
            Code <FiGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projectdesc;
