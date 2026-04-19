import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section Label */}
        <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Projects
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          What I have built
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col justify-between gap-4"
            >
              {/* Top */}
              <div className="flex flex-col gap-3">

                {/* Status Badge */}
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full w-fit ${
                    project.status === "completed"
                      ? "bg-green-400/10 text-green-400"
                      : project.status === "ongoing"
                      ? "bg-yellow-400/10 text-yellow-400"
                      : "bg-white/10 text-gray-400"
                  }`}
                >
                  {project.status === "completed"
                    ? "Completed"
                    : project.status === "ongoing"
                    ? "Ongoing"
                    : "Upcoming"}
                </span>

                {/* Title */}
                <h3 className="text-white font-bold text-lg">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 text-gray-300 text-xs px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom — Links */}
              <div className="flex gap-4 mt-2">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    GitHub →
                  </Link>
                )}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="text-sm text-green-400 hover:text-green-300 transition-colors duration-200"
                  >
                    Live Demo →
                  </Link>
                )}
                {!project.github && !project.live && (
                  <p className="text-gray-600 text-sm">Coming soon</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}