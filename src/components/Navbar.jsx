import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Listings", href: "#listings" },
    { label: "Agents", href: "#agents" },
    { label: "Stories", href: "#stories" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"
      >
        <a href="#top" className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-lg font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            R
          </span>
          <span className="leading-tight">
            <span
              className="block text-lg font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Realty Luxe
            </span>
            <span className="block text-xs font-medium text-muted">
              Calm homes, clear prices
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-ink hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent"
          >
            List With Us
          </a>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-lg border border-line bg-card px-4 py-2 text-sm font-semibold md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-card md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-sand"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-white"
              >
                List With Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
