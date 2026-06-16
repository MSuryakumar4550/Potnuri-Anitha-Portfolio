import { motion } from "motion/react";
import { flagshipTraining } from "./data";
import { ArrowRight, BookOpen } from "lucide-react";

export function Training() {
  const getGradient = (color) => {
    return "from-brand to-brand/80";
  };

  return (
    <section id="training" className="py-20 px-6 bg-slate-50/40 border-y border-slate-200/60 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-brand animate-pulse">
            Training & Certification Programs
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-black text-brand-dark tracking-tight">
            Flagship Courses for Students, Faculty, & Researchers
          </h2>
          <div className="w-12 h-1 bg-brand mx-auto mt-4 rounded-full" />
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flagshipTraining.map((t, idx) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className={`p-5 bg-gradient-to-br ${getGradient(t.color)} text-white flex items-center gap-4 text-left`}>
                  <span className="w-9 h-9 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center font-black text-sm shrink-0">
                    {t.id}
                  </span>
                  <h3 className="font-black leading-tight text-sm md:text-base">
                    {t.title}
                  </h3>
                </div>

                <div className="p-6 text-left">
                  <p className="text-[11px] font-bold text-slate-400 italic mb-4">
                    {t.subtitle}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-3.5 h-3.5 text-brand" />
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">
                      Curriculum includes
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {t.skills.map((skill) => (
                      <li 
                        key={skill} 
                        className="text-xs font-semibold text-slate-600 flex items-start gap-1.5 leading-normal"
                      >
                        <span className="text-brand shrink-0 mt-0.5">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#connect"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-2.5 rounded-xl text-center text-xs font-bold text-white bg-slate-900 hover:bg-brand transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  Contact for Training <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-brand-light/50 to-brand-soft border border-brand/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <p className="text-xs md:text-sm font-bold text-slate-700 text-center md:text-left leading-relaxed max-w-3xl">
            🎓 If you or your institution are looking for specialized training in <strong className="text-brand">Java, Spring Boot, Big Data, Azure Data Factory, Databricks, or PySpark</strong>, feel free to get in touch.
          </p>
          <a
            href="#connect"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-brand text-white hover:bg-brand/90 hover:-translate-y-0.5 transition-all shadow-sm shrink-0"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
