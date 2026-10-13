import { motion } from "framer-motion";
import { agents, testimonials } from "../data/listings";

export default function Agents() {
  return (
    <>
      <section id="agents" className="mx-auto max-w-6xl scroll-mt-24 px-5 pt-14">
        <p className="text-xs font-bold tracking-widest text-accent uppercase">Meet The Team</p>
        <h2
          className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Agents who pick up the phone
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {agents.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-lift rounded-3xl border border-line bg-card p-6 text-center"
            >
              <img
                src={a.image}
                alt={`Portrait of ${a.name}`}
                loading="lazy"
                className="mx-auto h-24 w-24 rounded-full border-4 border-accentsoft object-cover"
              />
              <p className="mt-4 text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                {a.name}
              </p>
              <p className="text-sm text-muted">{a.role}</p>
              <p className="mt-3 inline-block rounded-full bg-accentsoft px-4 py-1 text-xs font-bold text-accentdeep">
                {a.sales} sales closed
              </p>
              <p className="mt-2 text-sm font-semibold">{a.phone}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-8 overflow-hidden rounded-3xl bg-accentdeep p-8 text-white md:p-12"
        >
          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-white/70">
                Selling With Us
              </p>
              <h3
                className="mt-2 text-3xl font-semibold md:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Sold in weeks, not months
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                Staging, photos, pricing and open houses handled in one calm
                plan. Most sellers meet a buyer in under 21 days.
              </p>
              <div className="mt-5 flex flex-wrap gap-6 text-sm">
                <span><strong className="text-xl">21 days</strong><br />median time to offer</span>
                <span><strong className="text-xl">104%</strong><br />average of asking price</span>
                <span><strong className="text-xl">Zero</strong><br />upfront photo cost</span>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 text-ink">
              <p className="text-sm font-bold">Get a free home value call</p>
              <p className="mt-1 text-xs text-muted">
                Tell us your address and we will call back within one business day.
              </p>
              <a
                href="#contact"
                className="mt-4 block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white hover:bg-accentdeep"
              >
                Start Selling
              </a>
              <p className="mt-3 text-center text-xs text-muted">No pressure, just clear numbers</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="stories" className="mx-auto max-w-6xl scroll-mt-24 px-5 pt-14">
        <p className="text-xs font-bold tracking-widest text-accent uppercase">Client Stories</p>
        <h2
          className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Loved by buyers and sellers
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col justify-between rounded-3xl border border-line bg-card p-6"
            >
              <div>
                <div aria-hidden="true" className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <span key={s} className="h-3 w-3 rounded-full bg-gold" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-5 border-t border-line pt-4">
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs text-muted">{t.detail}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </>
  );
}
