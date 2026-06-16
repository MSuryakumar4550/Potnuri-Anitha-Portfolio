import { motion } from "motion/react";
import profileImg from "../../assets/profile.png";
import { profile } from "./data";

export function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative overflow-hidden bg-brand min-h-[500px] flex items-center"
      >
        {/* Ambient background grid and glow blobs */}
        <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
        
        <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-white/20 rounded-full blur-3xl animate-blob pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[350px] h-[350px] bg-white/20 rounded-full blur-3xl animate-blob [animation-delay:4s] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 md:py-28 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-[230px_1fr] gap-10 md:gap-12 items-center text-center md:text-left">
            
            {/* Profile Photo Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mx-auto md:mx-0 shrink-0"
            >
              <div className="w-[230px] h-[230px] bg-white/25 p-2 rounded-full backdrop-blur-md border border-white/45 shadow-soft relative group">
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <img
                  src={profileImg}
                  alt={profile.name}
                  className="w-full h-full rounded-full object-cover border-4 border-slate-900 shadow-inner"
                />
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-brand-dark"
            >
              <span className="text-xs font-bold bg-white/50 text-slate-800 px-3 py-1.5 rounded-full border border-white/70 uppercase tracking-widest inline-block mb-4">
                {profile.tagline}
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-3 text-brand-dark">
                {profile.name}
              </h1>
              
              <h2 className="text-lg md:text-xl font-bold text-slate-700 mb-4 tracking-wide">
                {profile.role}
              </h2>
              
              <p className="text-sm md:text-[15px] font-semibold text-slate-600 leading-relaxed max-w-3xl">
                {profile.keywords.join("  •  ")}
              </p>

              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#connect"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider bg-brand-dark text-white hover:bg-brand-dark/90 hover:-translate-y-0.5 hover:shadow-md transition-all cursor-pointer"
                >
                  Contact for Collaboration
                </a>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider bg-white text-slate-900 hover:bg-slate-50 border border-slate-200/80 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  View Profile details
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
