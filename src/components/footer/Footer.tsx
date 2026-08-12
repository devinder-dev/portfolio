export default function Footer() {
  return (
    <footer className="bg-(--bg-primary) border-t border-(--border) py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-(--text-muted) text-sm">
          Built by <span className="text-green-400 font-medium">Devinder Singh</span> · Stockholm 2026
        </p>
        <p className="text-(--text-muted) text-sm">
          React · Next.js · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
