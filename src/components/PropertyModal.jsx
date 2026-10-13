import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formatPrice } from "../data/listings";

export function monthlyPayment(price, downPct, ratePct, years) {
  const principal = price * (1 - downPct / 100);
  const r = ratePct / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  const f = Math.pow(1 + r, n);
  return (principal * r * f) / (f - 1);
}

export default function PropertyModal({ property, onClose }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  useEffect(() => {
    setImgIdx(0);
    setDown(20);
    setRate(6.5);
    setYears(30);
  }, [property]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (property) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [property, onClose]);

  const monthly = useMemo(() => {
    if (!property) return 0;
    return monthlyPayment(property.price, down, rate, years);
  }, [property, down, rate, years]);

  return (
    <AnimatePresence>
      {property && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${property.title} details`}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="modal-scroll max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-paper sm:rounded-3xl"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-5">
                <img
                  src={property.images[imgIdx]}
                  alt={`${property.title} photo ${imgIdx + 1}`}
                  className="h-64 w-full rounded-2xl object-cover md:h-80"
                />
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {property.images.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setImgIdx(i)}
                      aria-label={`Show photo ${i + 1}`}
                      aria-pressed={imgIdx === i}
                      className={`overflow-hidden rounded-xl border-2 ${
                        imgIdx === i ? "border-accent" : "border-transparent"
                      }`}
                    >
                      <img src={src} alt="" className="h-20 w-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl border border-line bg-card p-4">
                  <p className="text-sm font-bold">Why you will love it</p>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {property.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 rounded-xl bg-paper px-3 py-2 text-xs font-medium"
                      >
                        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-5 md:py-6 md:pr-6 md:pl-2">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold tracking-widest text-accent uppercase">
                      {property.tag} in {property.location}
                    </p>
                    <h3
                      className="mt-1 text-2xl font-semibold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {property.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{property.address}</p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close details"
                    className="rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold hover:bg-sand"
                  >
                    Close
                  </button>
                </div>

                <p className="text-sm leading-relaxed text-muted">{property.description}</p>

                <div className="grid grid-cols-4 gap-2 text-center">
                  {[
                    [formatPrice(property.price), "Price"],
                    [property.beds, "Beds"],
                    [property.baths, "Baths"],
                    [`${property.area.toLocaleString()} sqft`, "Area"],
                  ].map(([v, l]) => (
                    <div key={l} className="rounded-xl bg-card px-2 py-3 ring-1 ring-line">
                      <p className="text-sm font-bold">{v}</p>
                      <p className="text-[11px] font-medium text-muted">{l}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-ink p-5 text-white">
                  <p className="text-sm font-bold">Monthly estimate</p>
                  <p className="mt-1 text-xs text-white/70">
                    Simple mock math to plan your budget. Taxes and fees not included.
                  </p>
                  <p className="mt-3 text-3xl font-bold" aria-live="polite">
                    ${Math.round(monthly).toLocaleString()}
                    <span className="text-sm font-medium text-white/70"> per month</span>
                  </p>
                  <div className="mt-4 grid gap-3 text-xs">
                    <label className="grid gap-1 font-semibold">
                      Down payment: {down}%
                      <input
                        type="range"
                        min="0"
                        max="60"
                        value={down}
                        onChange={(e) => setDown(Number(e.target.value))}
                        aria-label="Down payment percent"
                      />
                    </label>
                    <label className="grid gap-1 font-semibold">
                      Rate: {rate.toFixed(1)}%
                      <input
                        type="range"
                        min="3"
                        max="10"
                        step="0.1"
                        value={rate}
                        onChange={(e) => setRate(Number(e.target.value))}
                        aria-label="Interest rate percent"
                      />
                    </label>
                    <label className="grid gap-1 font-semibold">
                      Term
                      <select
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink"
                      >
                        <option value={15}>15 years</option>
                        <option value={20}>20 years</option>
                        <option value={30}>30 years</option>
                      </select>
                    </label>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-card p-4">
                  <div>
                    <p className="text-sm font-bold">{property.agent.name}</p>
                    <p className="text-xs text-muted">{property.agent.phone}</p>
                  </div>
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accentdeep"
                  >
                    Book A Tour
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
