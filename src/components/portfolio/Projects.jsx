import { motion } from "motion/react";
import { projects } from "./data";
import { Database, Server, CheckCircle2 } from "lucide-react";

export function Projects() {
  const projectIcons = {
    1: <Database className="w-6 h-6 text-brand-dark" />,
    2: <Server className="w-6 h-6 text-brand-dark" />
  };

  return (
    <section id="projects" className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">
            Industrial Work
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-black text-brand-dark tracking-tight">
            Key Engineering Projects
          </h2>
          <div className="w-12 h-1 bg-brand mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all flex flex-col justify-between text-left relative overflow-hidden group"
            >
              <div>
                {/* Visual console decorations */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-brand-light text-brand flex items-center justify-center shrink-0">
                    {projectIcons[project.id]}
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-bold text-emerald-700 bg-brand-light border border-brand/20 px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.role}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-brand-dark mt-3">
                    {project.title}
                  </h3>
                </div>

                <div className="text-[11px] font-mono text-slate-500 bg-slate-50 border border-slate-150 px-4 py-3 rounded-xl mb-6 font-semibold leading-relaxed">
                  <span className="text-slate-400 font-bold">ENV &gt;_ </span> 
                  {project.environment}
                </div>

                <p className="text-sm md:text-[15px] font-semibold text-slate-600 leading-relaxed mb-6">
                  {project.desc}
                </p>

                <h4 className="text-[11px] md:text-xs font-black uppercase tracking-wider text-slate-400 mb-3.5">
                  Key Responsibilities
                </h4>

                <ul className="space-y-3">
                  {project.responsibilities.map((resp, index) => (
                    <li 
                      key={index}
                      className="text-xs md:text-sm font-semibold text-slate-600 flex items-start gap-2.5 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 md:w-4.5 md:h-4.5 text-brand shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
