"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#0f0f0f] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section Label */}
        <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Contact
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Get in touch
        </h2>

        <p className="text-gray-400 mb-12 max-w-xl">
          Looking for a motivated fullstack developer for LIA or a project?
          Send me a message and I will get back to you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left — Form */}
          <div className="flex flex-col gap-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-400 transition-colors duration-200"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-400 transition-colors duration-200"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-400 transition-colors duration-200 resize-none"
            />

            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="bg-green-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-green-300 transition-colors duration-200 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-green-400 text-sm">
                Message sent! I will get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </div>

          {/* Right — Info */}
          <div className="flex flex-col gap-6 justify-start">

            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-green-400 text-sm font-semibold mb-1">Email</p>
              <p className="text-white">dsj.singh1998@gmail.com</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-green-400 text-sm font-semibold mb-1">LinkedIn</p>
              <p className="text-white">linkedin.com/in/devinder-dev</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-green-400 text-sm font-semibold mb-1">GitHub</p>
              <p className="text-white">github.com/devinder-dev</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-green-400 text-sm font-semibold mb-1">Location</p>
              <p className="text-white">Stockholm, Sweden</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}