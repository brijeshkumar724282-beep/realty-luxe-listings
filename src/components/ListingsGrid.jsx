import { motion, AnimatePresence } from "framer-motion";
import { formatPrice } from "../data/listings";

function Spec({ value, label }) {
  return (
    <span className="rounded-lg bg-paper px-2.5 py-1.5 text-center">
      <span className="block text-sm font-bold">{value}</span>
      <span className="block text-[11px] font-medium text-muted">{label}</span>
    </span>
  );
}

export default function ListingsGrid({ items, onSelect, onClear }) {
  return (
    <section id="listings" className="mx-auto max-w-6xl scroll-mt-24 px-5 pt-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-widest text-accent uppercase">
            Current Listings
          </p>
          <h2
            className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Homes you can tour this week
          </h2>
        </div>
        <p aria-live="polite" className="text-sm font-medium text-muted">
          Showing {items.length} of 9 homes
        </p>
      </div>

      {items.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-line bg-card p-10 text-center">
          <p className="text-xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
            No homes match those filters
          </p>
          <p className="mt-2 text-sm text-muted">
            Try a wider price range or another location to see more homes.
          </p>
          <button
            type="button"
            onClick={onClear}
            className="mt-5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accentdeep"
          >
            Show All Homes
          </button>
        </div>
      ) : (
        <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((p) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="card-lift overflow-hidden rounded-3xl border border-line bg-card"
              >
                <div className="zoom-wrap relative">
                  <img
                    src={p.images[0]}
                    alt={`${p.title} exterior and living space`}
                    loading="lazy"
                    className="h-52 w-full object-cover"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
                    {p.tag}
                  </span>
                  <span className="absolute right-3 bottom-3 rounded-full bg-card px-3 py-1 text-xs font-bold">
                    {formatPrice(p.price)}
                  </span>
                </div>
                <div className="p-5">
                  <h3
                    className="text-lg font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{p.address}</p>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <Spec value={p.beds} label="Beds" />
                    <Spec value={p.baths} label="Baths" />
                    <Spec value={`${p.area.toLocaleString()} sqft`} label="Area" />
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                    <div className="flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-accentsoft text-xs font-bold text-accentdeep"
                      >
                        {p.agent.name.charAt(0)}
                      </span>
                      <span className="text-xs font-semibold">{p.agent.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onSelect(p)}
                      aria-label={`View details for ${p.title}`}
                      className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white hover:bg-accent"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}
