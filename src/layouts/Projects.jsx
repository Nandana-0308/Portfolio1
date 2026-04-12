import React, { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "AutoDevOps",
    image: "/images/devops.jpg",
    video: "/videos/devops.mp4", // optional
    description:
      "Automates CI/CD pipelines using Docker and GitHub Actions.",
    tech: ["React", "Node.js", "Docker"],
    github: "https://github.com/yourrepo",
    live: "https://yourlive.com",
  },
];



const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
  const handleKey = (e) => {
    if (e.key === "Escape") {
      setActiveProject(null);
    }
  };

  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, []);

  return (
    <section className="py-20 px-5">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-[var(--color-color6)] mb-12">
        Projects
      </h2>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="
              glass cursor-pointer 
              rounded-2xl 
              border border-white/10
              hover:scale-105
              hover:shadow-[0_0_20px_#00C2FF]
              transition-all duration-300
            "
          >
            <h3 className="text-xl font-semibold text-[var(--color-primary)]">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--color-color6)] mt-2">
              {project.desc}
            </p>
          </div>
        ))}
      </div>
{activeProject && (
  <div
    className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50 px-4"
    onClick={() => setActiveProject(null)}
  >

    <motion.div
      drag
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      dragElastic={0.2}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4 }}
      
      onClick={(e) => e.stopPropagation()}
      className="
        glass
        w-full max-w-5xl
        rounded-2xl
        border border-white/10
        overflow-hidden
        shadow-[0_0_40px_rgba(0,194,255,0.25)]
        flex flex-col lg:flex-row
        cursor-grab active:cursor-grabbing
      "
    >

      {/* 🔹 Left - Image / Video */}
      <div className="lg:w-1/2 w-full h-[250px] sm:h-[320px] lg:h-full overflow-hidden group">
        
        {activeProject.video ? (
          <video
            src={activeProject.video}
            autoPlay
            loop
            muted
            className="
              w-full h-full object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />
        ) : (
          <img
            src={activeProject.image}
            alt={activeProject.title}
            className="
              w-full h-full object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />
        )}
      </div>

      {/* 🔹 Right - Content */}
      <div className="lg:w-1/2 w-full p-6 flex flex-col justify-between">

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
            {activeProject.title}
          </h3>

          <p className="text-sm sm:text-base text-[var(--color-color6)] mt-4 leading-relaxed">
            {activeProject.description}
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mt-6">
            {activeProject.tech.map((t, i) => (
              <span
                key={i}
                className="
                  text-xs sm:text-sm px-3 py-1 rounded-full
                  bg-[var(--color-color5)]
                  text-[var(--color-primary)]
                "
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 🔗 Buttons */}
        <div className="flex gap-4 mt-6 flex-wrap">
          
          {activeProject.github && (
            <a href={activeProject.github} target="_blank">
              <div className="animated-border-btn">
                <span className="btn-inner-content">GitHub</span>
              </div>
            </a>
          )}

          {activeProject.live && (
            <a href={activeProject.live} target="_blank">
              <div className="animated-border-btn">
                <span className="btn-inner-content">Live Demo</span>
              </div>
            </a>
          )}

          <button
            onClick={() => setActiveProject(null)}
            className="animated-border-btn"
          >
            <span className="btn-inner-content">Close</span>
          </button>

        </div>
      </div>
    </motion.div>
  </div>
)}
    </section>
  );
};

export default Projects;