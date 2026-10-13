import { motion } from "framer-motion";

const locations = ["All Locations", "Austin", "Denver", "Miami", "Seattle", "Chicago"];
const prices = [
  { label: "Any Price", value: 99999999 },
  { label: "Up to $500K", value: 500000 },
  { label: "Up to $750K", value: 750000 },
  { label: "Up to $1M", value: 1000000 },
  { label: "Up to $1.2M", value: 1200000 },
];
const bedOpts = [
  { label: "Any Beds", value: 0 },
  { label: "2 or more", value: 2 },
  { label: "3 or more", value: 3 },
  { label: "4 or more", value: 4 },
];

export default function Hero({ filters, setFilters, count, onClear }) {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-10 md:pt-16">
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 text-xs font-semibold text-accent">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
            9 curated homes ready to tour
          </p>
          <h1
            className="mt-5 text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Find a home that feels made for you
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            Search real addresses, see honest prices and meet local agents who
            answer fast. No noise, just homes worth visiting.
          </p>
          <div className="mt-6 flex flex-wrap gap-6">
            <div>
              <p className="text-2xl font-bold">$4.2M</p>
              <p className="text-xs font-medium text-muted">Total value listed</p>
            </div>
            <div>
              <p className="text-2xl font-bold">3 agents</p>
              <p className="text-xs font-medium text-muted">Local experts online</p>
            </div>
            <div>
              <p className="text-2xl font-bold">48 hrs</p>
              <p className="text-xs font-medium text-muted">Average reply time</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="overflow-hidden rounded-3xl border border-line bg-card shadow-[0_20px_50px_rgba(23,33,28,0.10)]"
        >
          <img
            src="https://picsum.photos/seed/realtyhero9/900/560"
            alt="Bright living room of a featured home"
            className="h-52 w-full object-cover md:h-60"
            loading="eager"
          />
          <form
            aria-label="Search homes"
            className="grid gap-3 p-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="text-sm font-semibold">Search homes</p>
            <label className="grid gap-1 text-xs font-semibold text-muted">
              Location
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="rounded-xl border border-line bg-paper px-3 py-3 text-sm font-medium text-ink"
              >
                {locations.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="grid gap-1 text-xs font-semibold text-muted">
                Price
                <select
                  value={filters.maxPrice}
                  onChange={(e) =>
                    setFilters({ ...filters, maxPrice: Number(e.target.value) })
                  }
                  className="rounded-xl border border-line bg-paper px-3 py-3 text-sm font-medium text-ink"
                >
                  {prices.map((p) => (
                    <option key={p.label} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1 text-xs font-semibold text-muted">
                Beds
                <select
                  value={filters.minBeds}
                  onChange={(e) =>
                    setFilters({ ...filters, minBeds: Number(e.target.value) })
                  }
                  className="rounded-xl border border-line bg-paper px-3 py-3 text-sm font-medium text-ink"
                >
                  {bedOpts.map((b) => (
                    <option key={b.label} value={b.value}>
                      {b.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="flex items-center justify-between gap-3 pt-1">
              <p aria-live="polite" className="text-xs font-medium text-muted">
                {count} {count === 1 ? "home" : "homes"} match your search
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onClear}
                  className="rounded-full border border-line px-4 py-2.5 text-sm font-semibold hover:bg-sand"
                >
                  Reset
                </button>
                <a
                  href="#listings"
                  className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accentdeep"
                >
                  View Results
                </a>
              </div>
            </div>
          </form>
        </motion.div>
      </div>

      <div aria-hidden="true" className="mt-10 overflow-hidden rounded-2xl bg-ink py-3">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap px-4 text-sm font-medium text-white">
          {[0, 1].map((k) => (
            <span key={k} className="flex gap-8">
              <span>Austin Villas</span>
              <span>Denver Lofts</span>
              <span>Miami Cottages</span>
              <span>Seattle Retreats</span>
              <span>Chicago Brick Homes</span>
              <span>Open Houses Every Weekend</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
