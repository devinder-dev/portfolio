import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0f0f0f] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section Label */}
        <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Skills
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          What I work with
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              {/* Category */}
              <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">
                {group.category}
              </p>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="bg-white/10 text-gray-300 text-sm px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}