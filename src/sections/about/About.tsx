import FadeUp from "@/components/motion/FadeUp";

export default function About() {
  return (
    <section id="about" className="bg-(--bg-primary) py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <FadeUp>
          <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-(--text-primary) mb-12">
            Who I am
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left — Text */}
          <FadeUp delay={0.1} className="flex flex-col gap-6 text-(--text-secondary) text-base leading-relaxed">
            <p>
              I&apos;m a fullstack developer student at Chas Academy in Stockholm,
              building modern web applications from frontend to backend.
              I care about clean code, good structure and building things
              that actually work.
            </p>
            <p>
              Alongside my fullstack studies I completed a course in
              cybersecurity — which shapes how I think about API design,
              authentication and how user data should be handled.
            </p>
            <p>
              I work well in teams, I&apos;m used to agile workflows with Scrum
              and Kanban, and I&apos;m always looking to improve how I build and
              think about software.
            </p>

            <div className="flex gap-3 mt-2">
              <a
                href="/cv-en.pdf"
                download="Devinder_Singh_CV.pdf"
                className="inline-flex items-center gap-2 bg-green-400 text-black font-semibold px-5 py-2.5 rounded-lg hover:bg-green-300 transition-colors duration-200"
              >
                CV English
              </a>
              <a
                href="/cv-sv.pdf"
                download="Devinder_Singh_CV_Svenska.pdf"
                className="inline-flex items-center gap-2 border border-green-400 text-green-400 font-semibold px-5 py-2.5 rounded-lg hover:bg-green-400 hover:text-black transition-colors duration-200"
              >
                CV Svenska
              </a>
            </div>
          </FadeUp>

          {/* Right — Info Cards */}
          <div className="grid grid-cols-1 gap-4">

            {[
              { label: "Education", title: "Chas Academy — Fullstack Developer", sub: "Sep 2025 – Jun 2027 · Stockholm" },
              { label: "Cybersecurity", title: "Cybersäkerhet för yrkesverksamma", sub: "Dec 2025 – Jan 2026 · 25 YH Points" },
              { label: "Location", title: "Stockholm, Sweden", sub: "Open to hybrid & remote LIA" },
              { label: "Languages", title: "Swedish · English · Punjabi · Hindi", sub: "Fluent in Swedish and English" },
            ].map((card, i) => (
              <FadeUp key={card.label} delay={0.1 + i * 0.08}>
                <div className="bg-(--surface) border border-(--border) rounded-xl p-5 hover:-translate-y-1 hover:border-(--border-medium) transition-all duration-200">
                  <p className="text-green-400 text-sm font-semibold mb-1">{card.label}</p>
                  <p className="text-(--text-primary) font-medium">{card.title}</p>
                  <p className="text-(--text-muted) text-sm">{card.sub}</p>
                </div>
              </FadeUp>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
