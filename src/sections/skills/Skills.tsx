import { skills } from "@/data/skills";
import FadeUp from "@/components/motion/FadeUp";

export default function Skills() {
  return (
    <section id="skills" className="bg-(--bg-secondary) py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <FadeUp>
          <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-(--text-primary) mb-12">
            What I work with
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <FadeUp key={group.category} delay={i * 0.07}>
              <div className="bg-(--surface) border border-(--border) rounded-xl p-6 hover:-translate-y-1 hover:border-(--border-medium) transition-all duration-200">
                <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="bg-(--surface-strong) text-(--text-secondary) text-sm px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
