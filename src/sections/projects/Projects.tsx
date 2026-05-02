import { projects } from "@/data/projects";
import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";

export default function Projects() {
  return (
    <section id="projects" className="bg-(--bg-primary) py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <FadeUp>
          <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-(--text-primary) mb-12">
            What I have built
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeUp key={project.title} delay={i * 0.08}>
              <div className="bg-(--surface) border border-(--border) rounded-xl p-6 flex flex-col justify-between gap-4 h-full hover:-translate-y-1 hover:border-(--border-medium) transition-all duration-200">

                <div className="flex flex-col gap-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full w-fit ${
                      project.status === "completed"
                        ? "bg-green-400/10 text-green-400"
                        : project.status === "ongoing"
                        ? "bg-yellow-400/10 text-yellow-400"
                        : "bg-(--surface-strong) text-(--text-secondary)"
                    }`}
                  >
                    {project.status === "completed"
                      ? "Completed"
                      : project.status === "ongoing"
                      ? "Ongoing"
                      : "Upcoming"}
                  </span>

                  <h3 className="text-(--text-primary) font-bold text-lg">
                    {project.title}
                  </h3>

                  <p className="text-(--text-secondary) text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-(--surface-strong) text-(--text-secondary) text-xs px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-2">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-sm text-(--text-secondary) hover:text-(--text-primary) transition-colors duration-200"
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
                    <p className="text-(--text-muted) text-sm">Coming soon</p>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
