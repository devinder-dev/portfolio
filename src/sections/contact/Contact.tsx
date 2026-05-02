"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import FadeUp from "@/components/motion/FadeUp";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { from_name: form.name, from_email: form.email, message: form.message },
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
    <section id="contact" className="bg-(--bg-secondary) py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <FadeUp>
          <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-(--text-primary) mb-4">
            Get in touch
          </h2>
          <p className="text-(--text-secondary) mb-12 max-w-xl">
            Looking for a motivated fullstack developer for LIA or a project?
            Send me a message and I will get back to you.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left — Form */}
          <FadeUp delay={0.1} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="bg-(--surface) border border-(--border) text-(--text-primary) placeholder:text-(--text-muted) rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-400 transition-colors duration-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="bg-(--surface) border border-(--border) text-(--text-primary) placeholder:text-(--text-muted) rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-400 transition-colors duration-200"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="bg-(--surface) border border-(--border) text-(--text-primary) placeholder:text-(--text-muted) rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-400 transition-colors duration-200 resize-none"
            />
            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="bg-green-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-green-300 transition-colors duration-200 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && <p className="text-green-400 text-sm">Message sent! I will get back to you soon.</p>}
            {status === "error" && <p className="text-red-400 text-sm">Something went wrong. Please try again or email me directly.</p>}
          </FadeUp>

          {/* Right — Info */}
          <div className="flex flex-col gap-4 justify-start">
            {[
              { label: "Email", value: "dsj.singh1998@gmail.com" },
              { label: "LinkedIn", value: "linkedin.com/in/devinder-dev" },
              { label: "GitHub", value: "github.com/devinder-dev" },
              { label: "Location", value: "Stockholm, Sweden" },
            ].map((item, i) => (
              <FadeUp key={item.label} delay={0.1 + i * 0.08}>
                <div className="bg-(--surface) border border-(--border) rounded-xl p-5 hover:-translate-y-1 hover:border-(--border-medium) transition-all duration-200">
                  <p className="text-green-400 text-sm font-semibold mb-1">{item.label}</p>
                  <p className="text-(--text-primary)">{item.value}</p>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
