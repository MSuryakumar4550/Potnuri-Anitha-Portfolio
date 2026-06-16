import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { highlights } from "./data";

export function CountUp({ to, duration = 1.5, suffix = "" }) {
  const [count, setCount] = useState(1);
  const elementRef = useRef(null);

  useEffect(() => {
    let start = 1;
    const end = to;
    if (start === end) return;

    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = progress * (2 - progress); // easeOutQuad
      const currentCount = Math.floor(easeProgress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrameId = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [to, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export function Highlights() {
  return (
    <section className="py-16 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-10 items-center">
        
        {/* Left Side Content - Intro */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left space-y-4 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-light text-emerald-800 border border-brand/20 rounded-full font-bold text-xs uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            Key Milestones
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight leading-tight">
            Professional Pillars & Expertise
          </h2>
          <p className="text-sm font-semibold text-slate-500 leading-relaxed max-w-lg">
            A unique fusion of academic leadership, rigorous doctoral research, and cloud data platforms. Bridging complex programming curriculum with modern enterprise big data architectures.
          </p>
        </motion.div>

        {/* Right Side - 2x2 Grid of Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
          {highlights.map((h, i) => {
            // Extract numbers for CountUp if applicable
            const numberMatch = h.title.match(/^(\d+)(\+)?/);
            const hasCountUp = numberMatch !== null;
            const numberVal = hasCountUp ? parseInt(numberMatch[1], 10) : 0;
            const suffixVal = hasCountUp ? (numberMatch[2] || "") : "";
            const textLabel = hasCountUp ? h.title.replace(/^\d+\+?\s*/, "") : h.title;

            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-2xl select-none mb-4 shadow-sm border border-brand/10">
                    {h.icon}
                  </div>
                  <h3 className="font-black text-brand-dark text-lg mb-1 leading-snug">
                    {hasCountUp ? (
                      <>
                        <CountUp to={numberVal} suffix={suffixVal} /> {textLabel}
                      </>
                    ) : (
                      h.title
                    )}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">
                    Key Specialty
                  </p>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
