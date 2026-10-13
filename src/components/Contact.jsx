import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", interest: "Book a tour", message: "" });
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setSent(true);
  }

  return (
    <>
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 pt-14">
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-line bg-card p-8"
          >
            <p className="text-xs font-bold tracking-widest text-accent uppercase">Contact</p>
            <h2
              className="mt-2 text-3xl font-semibold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Talk to a local expert
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Ask about a home, book a tour or get a value estimate for your
              current place. We reply within one business day.
            </p>
            <ul className="mt-6 grid gap-3 text-sm">
              <li className="rounded-2xl bg-paper px-4 py-3">
                <strong>Visit us</strong><br />
                <span className="text-muted">400 Market Row, Suite 12, Austin</span>
              </li>
              <li className="rounded-2xl bg-paper px-4 py-3">
                <strong>Call us</strong><br />
                <span className="text-muted">(512) 555 0100, Mon to Sat, 9am to 6pm</span>
              </li>
              <li className="rounded-2xl bg-paper px-4 py-3">
                <strong>Email us</strong><br />
                <span className="text-muted">hello@realtyluxe.example</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-3xl border border-line bg-card p-8"
          >
            {sent ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center text-center" role="status">
                <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full bg-accentsoft text-sm font-bold text-accentdeep">Done</span>
                <p className="mt-4 text-xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                  Thanks {form.name.split(" ")[0]}, message received
                </p>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  An agent will reach out about “{form.interest}” shortly. Want to send another note?
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", interest: "Book a tour", message: "" });
                  }}
                  className="mt-5 rounded-full border border-line px-6 py-2.5 text-sm font-semibold hover:bg-sand"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} aria-label="Contact form" className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-xs font-semibold text-muted">
                    Full name
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jordan Lee"
                      autoComplete="name"
                      className="rounded-xl border border-line bg-paper px-4 py-3 text-sm font-medium text-ink placeholder:text-muted/60"
                    />
                  </label>
                  <label className="grid gap-1.5 text-xs font-semibold text-muted">
                    Email
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@mail.com"
                      autoComplete="email"
                      className="rounded-xl border border-line bg-paper px-4 py-3 text-sm font-medium text-ink placeholder:text-muted/60"
                    />
                  </label>
                </div>
                <label className="grid gap-1.5 text-xs font-semibold text-muted">
                  I want to
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="rounded-xl border border-line bg-paper px-4 py-3 text-sm font-medium text-ink"
                  >
                    <option>Book a tour</option>
                    <option>Ask about a home</option>
                    <option>Sell my home</option>
                    <option>Get a value estimate</option>
                  </select>
                </label>
                <label className="grid gap-1.5 text-xs font-semibold text-muted">
                  Message
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us which home you like and a good time to call"
                    rows={4}
                    className="resize-none rounded-xl border border-line bg-paper px-4 py-3 text-sm font-medium text-ink placeholder:text-muted/60"
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-accentdeep"
                >
                  Send Message
                </button>
                <p className="text-center text-xs text-muted">
                  Demo template. Messages stay in your browser and are not sent anywhere.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <footer className="mt-14 border-t border-line bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              Realty Luxe
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted">
              A calm listings template for agents and small teams. Copy it, add
              your homes and go live.
            </p>
          </div>
          <nav aria-label="Explore">
            <p className="text-xs font-bold tracking-widest uppercase">Explore</p>
            <ul className="mt-3 grid gap-2 text-sm font-medium">
              <li><a href="#listings" className="hover:text-accent">Listings</a></li>
              <li><a href="#agents" className="hover:text-accent">Agents</a></li>
              <li><a href="#stories" className="hover:text-accent">Stories</a></li>
            </ul>
          </nav>
          <nav aria-label="Company">
            <p className="text-xs font-bold tracking-widest uppercase">Company</p>
            <ul className="mt-3 grid gap-2 text-sm font-medium">
              <li><a href="#agents" className="hover:text-accent">About the team</a></li>
              <li><a href="#contact" className="hover:text-accent">Sell with us</a></li>
              <li><a href="#contact" className="hover:text-accent">Contact</a></li>
            </ul>
          </nav>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase">Visit</p>
            <p className="mt-3 text-sm text-muted">
              400 Market Row, Suite 12<br />Austin, Texas<br />(512) 555 0100
            </p>
          </div>
        </div>
        <div className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-4 text-xs text-muted">
            <p>© 2026 Realty Luxe template. All demo data is fictional.</p>
            <p>Photos via Picsum. Built with React and Tailwind.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
