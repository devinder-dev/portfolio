export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section Label */}
        <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">
          About Me
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Who I am
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left — Text */}
          <div className="flex flex-col gap-6 text-gray-400 text-base leading-relaxed">
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

            {/* CV Download */}
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 bg-green-400 text-black font-semibold px-5 py-2.5 rounded-lg hover:bg-green-300 transition-colors duration-200 w-fit mt-2"
            >
              Download CV
            </a>
          </div>

          {/* Right — Info Cards */}
          <div className="grid grid-cols-1 gap-4">

            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-green-400 text-sm font-semibold mb-1">Education</p>
              <p className="text-white font-medium">Chas Academy — Fullstack Developer</p>
              <p className="text-gray-500 text-sm">Sep 2025 – Jun 2027 · Stockholm</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-green-400 text-sm font-semibold mb-1">Cybersecurity</p>
              <p className="text-white font-medium">Cybersäkerhet för yrkesverksamma</p>
              <p className="text-gray-500 text-sm">Dec 2025 – Jan 2026 · 25 YH Points</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-green-400 text-sm font-semibold mb-1">Location</p>
              <p className="text-white font-medium">Stockholm, Sweden</p>
              <p className="text-gray-500 text-sm">Open to hybrid & remote LIA</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-green-400 text-sm font-semibold mb-1">Languages</p>
              <p className="text-white font-medium">Swedish · English · Punjabi · Hindi</p>
              <p className="text-gray-500 text-sm">Fluent in Swedish and English</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}