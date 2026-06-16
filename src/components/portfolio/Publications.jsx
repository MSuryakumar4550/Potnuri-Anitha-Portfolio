import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { publications } from "./data";
import { Search, ExternalLink, Bookmark } from "lucide-react";

export function Publications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterTabs = [
    { value: "All", label: "All Works" },
    { value: "Journal", label: "Journal Papers" },
    { value: "Patent", label: "Patents" },
    { value: "Conference", label: "Conferences" }
  ];

  const filteredPublications = publications.filter((pub) => {
    // Search filter
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.year.includes(searchTerm);

    // Category filter
    if (selectedCategory === "All") return matchesSearch;
    return matchesSearch && pub.quartile === selectedCategory;
  });

  return (
    <section id="journals" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-sm font-extrabold uppercase tracking-widest text-brand-dark">
            Publications & Patents
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-black text-brand-dark tracking-tight">
            Selected Research Contributions
          </h2>
          <div className="w-16 h-1 bg-brand mx-auto mt-4 rounded-full" />
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by title, publisher, or year..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand text-xs font-semibold text-slate-700 bg-slate-50"
            />
          </div>

          {/* Filtering tabs */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedCategory(tab.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === tab.value
                    ? "bg-brand-dark text-white shadow-sm"
                    : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredPublications.map((pub, idx) => (
              <motion.div
                key={pub.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200 border-l-[6px] border-l-brand shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all flex gap-4 md:gap-6 items-start text-left"
              >
                {/* Index Bubble */}
                <span className="w-9 h-9 rounded-lg font-black text-sm flex items-center justify-center shrink-0 bg-brand-light text-emerald-800">
                  {idx + 1}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm md:text-base font-extrabold text-brand-dark leading-snug">
                    {pub.title}
                  </h4>
                  
                  <p className="text-xs text-slate-500 font-semibold mt-2 leading-relaxed">
                    <span className="text-slate-800 font-bold italic">{pub.journal}</span>, {pub.year}
                  </p>

                  {/* Badges / Metrics Row */}
                  <div className="flex flex-wrap items-center gap-2 mt-3 text-[10px] font-extrabold">
                    <span className="px-2.5 py-1 rounded-md bg-brand-light/50 text-emerald-800 border border-brand/20">
                      Type: {pub.quartile === "Journal" ? "International Journal" : pub.quartile}
                    </span>
                    {pub.sjr && (
                      <span className="px-2.5 py-1 rounded-md bg-brand-light/50 text-emerald-800 border border-brand/20">
                        SJR Impact: {pub.sjr}
                      </span>
                    )}
                  </div>

                  {/* DOI/Ref link */}
                  {pub.doi && (
                    <div className="mt-3 flex items-center gap-1.5 text-xs">
                      <Bookmark className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-slate-400 font-bold">Citation / Link:</span>
                      <span className="text-brand font-bold inline-flex items-center gap-1">
                        {pub.doi}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty state */}
          {filteredPublications.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-400 font-bold text-sm">
                No contributions found matching your search.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
