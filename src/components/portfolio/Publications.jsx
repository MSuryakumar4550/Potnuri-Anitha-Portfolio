import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { publications } from "./data";
import { Search, BookOpen, Shield, Mic, FileText, Calendar, Hash } from "lucide-react";

const TYPE_CONFIG = {
  Journal: {
    icon: BookOpen,
    label: "International Journal",
    accent: "text-emerald-700",
    accentBg: "bg-emerald-50",
    accentBorder: "border-emerald-200/60",
    dot: "bg-emerald-500",
  },
  Patent: {
    icon: Shield,
    label: "Indian Patent",
    accent: "text-amber-700",
    accentBg: "bg-amber-50",
    accentBorder: "border-amber-200/60",
    dot: "bg-amber-500",
  },
  Conference: {
    icon: Mic,
    label: "Conference Paper",
    accent: "text-sky-700",
    accentBg: "bg-sky-50",
    accentBorder: "border-sky-200/60",
    dot: "bg-sky-500",
  },
};

export function Publications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterTabs = [
    { value: "All", label: "All", count: publications.length },
    { value: "Journal", label: "Journals", count: publications.filter(p => p.quartile === "Journal").length },
    { value: "Patent", label: "Patents", count: publications.filter(p => p.quartile === "Patent").length },
    { value: "Conference", label: "Conferences", count: publications.filter(p => p.quartile === "Conference").length },
  ];

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.year.includes(searchTerm);
    if (selectedCategory === "All") return matchesSearch;
    return matchesSearch && pub.quartile === selectedCategory;
  });

  return (
    <section id="journals" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 dot-grid opacity-[0.03] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-light border border-brand/15 mb-5">
            <FileText className="w-3.5 h-3.5 text-brand" />
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark">
              Publications & Patents
            </span>
          </div>
          <h2 className="text-3xl md:text-[42px] font-black text-brand-dark tracking-tight leading-tight">
            Selected Research
            <br />
            <span className="text-brand">Contributions</span>
          </h2>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10"
        >
          {/* Search */}
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 text-sm font-semibold text-slate-700 transition-all"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100/80 rounded-xl border border-slate-200/60">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedCategory(tab.value)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === tab.value
                    ? "bg-white text-brand-dark shadow-sm border border-slate-200/60"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab.label}
                <span className={`text-[9px] font-black min-w-[18px] h-[18px] rounded-full flex items-center justify-center ${
                  selectedCategory === tab.value
                    ? "bg-brand text-white"
                    : "bg-slate-200/80 text-slate-500"
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredPublications.map((pub, idx) => {
              const config = TYPE_CONFIG[pub.quartile] || TYPE_CONFIG.Journal;
              const TypeIcon = config.icon;

              return (
                <motion.article
                  key={pub.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="group relative bg-white rounded-2xl border border-slate-200/80 overflow-hidden timeline-card-hover"
                >
                  {/* Top accent line */}
                  <div className={`h-[3px] w-full ${config.accentBg}`} />

                  <div className="p-6 md:p-7">
                    {/* Header row: type badge + year */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-lg ${config.accentBg} ${config.accentBorder} border`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
                        <TypeIcon className={`w-3.5 h-3.5 ${config.accent}`} />
                        <span className={`text-[10px] font-black uppercase tracking-wider ${config.accent}`}>
                          {config.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Calendar className="w-3 h-3" />
                        <span className="text-[11px] font-bold">{pub.year}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-[15px] md:text-base font-extrabold text-brand-dark leading-snug mb-3 group-hover:text-brand transition-colors duration-300">
                      {pub.title}
                    </h4>

                    {/* Publisher */}
                    <p className="text-xs font-semibold text-slate-500 leading-relaxed mb-4">
                      <span className="text-slate-700 font-bold">{pub.journal}</span>
                    </p>

                    {/* Citation / Reference */}
                    {pub.doi && (
                      <div className="flex items-start gap-2 px-3.5 py-3 rounded-xl bg-slate-50/80 border border-slate-100">
                        <Hash className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span className="text-[11px] font-semibold text-slate-500 leading-relaxed font-mono">
                          {pub.doi}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredPublications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 border-dashed mt-4"
          >
            <Search className="w-8 h-8 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-400 font-bold text-sm">
              No publications match your search.
            </p>
            <button
              onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
              className="mt-3 text-xs font-bold text-brand hover:underline cursor-pointer"
            >
              Clear filters
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
