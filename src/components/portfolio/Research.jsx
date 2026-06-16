import { motion } from "motion/react";
import { research } from "./data";
import { CountUp } from "./Highlights";
import { Cpu } from "lucide-react";

export function Research() {
  return (
    <section id="research" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">
            Research Work
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-black text-brand-dark tracking-tight">
            Major Research Domains & Impact
          </h2>
          <div className="w-12 h-1 bg-brand mx-auto mt-4 rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Research Areas Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-card hover:shadow-glow transition-all text-left"
          >
            <h3 className="text-lg md:text-xl font-black text-brand-dark mb-6 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-light text-brand flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              Key Research Domains
            </h3>
            <ul className="space-y-4">
              {research.areas.map((area, idx) => (
                <li 
                  key={area}
                  className="text-xs md:text-sm font-semibold text-slate-600 flex items-start gap-3 leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-full bg-brand-light text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-brand/20">
                    {idx + 1}
                  </span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Research Impact Stats Card */}
          <div className="grid grid-cols-2 gap-4">
            {research.stats.map((stat, idx) => {
              // Extract number and suffix for CountUp
              const numberMatch = stat.value.match(/^(\d+)(\+)?/);
              const hasCountUp = numberMatch !== null;
              const numberVal = hasCountUp ? parseInt(numberMatch[1], 10) : 0;
              const suffixVal = hasCountUp ? (numberMatch[2] || "") : "";

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-card hover:shadow-glow hover:-translate-y-1 transition-all"
                >
                  <strong className="block text-brand text-3xl md:text-4xl font-black">
                    {hasCountUp ? (
                      <CountUp to={numberVal} suffix={suffixVal} />
                    ) : (
                      stat.value
                    )}
                  </strong>
                  <span className="block mt-2 text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider leading-snug">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
