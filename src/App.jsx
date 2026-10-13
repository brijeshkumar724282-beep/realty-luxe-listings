import { useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ListingsGrid from "./components/ListingsGrid.jsx";
import PropertyModal from "./components/PropertyModal.jsx";
import Agents from "./components/Agents.jsx";
import Contact from "./components/Contact.jsx";
import { listings } from "./data/listings.js";

const DEFAULT_FILTERS = { location: "All Locations", maxPrice: 99999999, minBeds: 0 };

export default function App() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [selected, setSelected] = useState(null);

  const items = useMemo(() => {
    return listings.filter((p) => {
      const locOk = filters.location === "All Locations" || p.location === filters.location;
      const priceOk = p.price <= filters.maxPrice;
      const bedsOk = p.beds >= filters.minBeds;
      return locOk && priceOk && bedsOk;
    });
  }, [filters]);

  function clear() {
    setFilters(DEFAULT_FILTERS);
  }

  return (
    <div className="min-h-screen">
      <a
        href="#listings"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to listings
      </a>
      <Navbar />
      <main>
        <Hero filters={filters} setFilters={setFilters} count={items.length} onClear={clear} />
        <ListingsGrid items={items} onSelect={setSelected} onClear={clear} />
        <Agents />
        <Contact />
      </main>
      <PropertyModal property={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
