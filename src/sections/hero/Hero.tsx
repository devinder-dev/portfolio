"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-(--bg-primary) flex items-center px-6">
      <div className="max-w-5xl mx-auto w-full pt-24">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-(--surface) border border-(--border) rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-(--text-secondary) text-sm">Open to LIA 2026</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold text-(--text-primary) leading-tight mb-6">
          Hi, I&apos;m Devinder Singh <br />
          <span className="text-green-400">Fullstack Developer</span>
        </h1>

        {/* Subheading */}
        <p className="text-(--text-secondary) text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
          I build modern web applications from frontend to backend —
          React, Node.js, TypeScript and AI integration.
          Based in Stockholm, seeking LIA November 2026.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="bg-green-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-green-300 transition-colors duration-200"
          >
            See My Projects
          </Link>
          <Link
            href="#contact"
            className="border border-(--border-medium) text-(--text-primary) font-semibold px-6 py-3 rounded-lg hover:border-(--border-strong) transition-colors duration-200"
          >
            Contact Me
          </Link>
        </div>

      </div>
    </section>
  );
}
