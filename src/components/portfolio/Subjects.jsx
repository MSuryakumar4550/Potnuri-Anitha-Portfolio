import { motion } from "motion/react";
import { subjects } from "./data";
import { Check } from "lucide-react";

export function Subjects() {
  return (
    <section id="subjects" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-sm font-extrabold uppercase tracking-widest text-brand-dark">
            Subjects Taught
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-black text-brand-dark tracking-tight">
            Teaching & Expertise Areas
          </h2>
          <div className="w-16 h-1 bg-brand mx-auto mt-4 rounded-full" />
        </div>

        {/* List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Core Subjects Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-card hover:shadow-glow transition-all text-left"
          >
            <h3 className="text-lg md:text-xl font-black text-brand-dark mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-brand rounded-full" />
              Core Curriculum Subjects
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {subjects.core.map((subject) => (
                <li 
                  key={subject} 
                  className="text-xs font-semibold text-slate-650 flex items-start gap-2.5 leading-tight"
                >
                  <div className="w-4.5 h-4.5 rounded-full bg-brand-light text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-brand/20">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{subject}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Advanced Training Areas Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-card hover:shadow-glow transition-all text-left"
          >
            <h3 className="text-lg md:text-xl font-black text-brand-dark mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-brand rounded-full" />
              Advanced Training Areas
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {subjects.advanced.map((subject) => (
                <li 
                  key={subject} 
                  className="text-xs font-semibold text-slate-655 flex items-start gap-2.5 leading-tight"
                >
                  <div className="w-4.5 h-4.5 rounded-full bg-brand-light text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 border border-brand/20">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{subject}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
