import { motion } from "motion/react";
import { profile, skills, experience, education } from "./data";
import { User, Code2, Briefcase, GraduationCap, Terminal, Database, BookOpen } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: <Terminal className="w-4 h-4 text-brand" />,
    items: ["Core Java", "Python", "pyspark"]
  },
  {
    title: "Cloud & Database Engineering",
    icon: <Database className="w-4 h-4 text-brand" />,
    items: ["Azure DataFactory", "Azure Databricks", "Spark SQL", "SQL Server", "MYSQL"]
  },
  {
    title: "Web & Developer Tools",
    icon: <BookOpen className="w-4 h-4 text-brand" />,
    items: ["HTML", "Apache Tomcat", "Eclipse", "STS", "Spring Core", "Spring Boot", "Moodle LMS", "Course Curriculum Design"]
  }
];

// Helper to extract grade/CGPA from degree string
const formatDegree = (degreeStr) => {
  const match = degreeStr.match(/^(.*?)\s*\((.*?)\)$/);
  if (match) {
    return { title: match[1], badge: match[2] };
  }
  return { title: degreeStr, badge: null };
};

export function AboutMe() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-50/50 border-b border-slate-200/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-brand-light text-brand flex items-center justify-center border border-brand/15">
              <User className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-brand-dark">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
            <div className="space-y-5 text-slate-600 font-semibold text-base md:text-lg leading-relaxed text-left">
              {profile.bio.map((paragraph, i) => (
                <p key={i}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl p-6 md:p-7 border border-slate-200/80 shadow-card space-y-6 text-left w-full max-w-md mx-auto lg:mr-0">
              {/* Academic/Mentorship Roles */}
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] md:text-[11px] uppercase font-extrabold text-slate-400 tracking-wider">
                    Academic Focus
                  </span>
                  <p className="text-sm md:text-base font-black text-brand-dark mt-0.5">
                    Ph.D. Scholar
                  </p>
                </div>
                <div>
                  <span className="text-[10px] md:text-[11px] uppercase font-extrabold text-slate-400 tracking-wider">
                    Mentorship Role
                  </span>
                  <p className="text-sm md:text-base font-black text-brand-dark mt-0.5">
                    Assistant Professor
                  </p>
                </div>
              </div>

              {/* Experience Summary Breakdowns */}
              <div className="space-y-4">
                <span className="text-[11px] font-extrabold text-slate-400 tracking-widest uppercase block">
                  Experience Breakdown
                </span>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center text-xs md:text-sm font-extrabold text-slate-700 mb-1.5">
                      <span>Teaching & LMS</span>
                      <span className="text-brand">2.3 Years</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand rounded-full" style={{ width: "45%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs md:text-sm font-extrabold text-slate-700 mb-1.5">
                      <span>Data Engineering</span>
                      <span className="text-brand">1.5 Years</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand rounded-full" style={{ width: "30%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs md:text-sm font-extrabold text-slate-700 mb-1.5">
                      <span>Java Development</span>
                      <span className="text-brand">1.6 Years</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand rounded-full" style={{ width: "32%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TechnicalSkills() {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-50/50 border-b border-slate-200/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-brand-light text-brand flex items-center justify-center border border-brand/15">
              <Code2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-brand-dark">
              Technical Qualifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm flex flex-col justify-start">
                <div className="flex items-center gap-2 text-slate-700 font-black text-xs uppercase tracking-widest mb-4">
                  <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shadow-inner">
                    {cat.icon}
                  </div>
                  <span>{cat.title}</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-start">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-slate-50/60 text-slate-700 border border-slate-200/80 shadow-sm cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 px-6 bg-white border-b border-slate-200/40">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12 justify-center">
            <div className="w-10 h-10 rounded-xl bg-brand-light text-brand flex items-center justify-center border border-brand/15">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-brand-dark">
              Professional Timeline
            </h2>
          </div>
          
          <div className="relative space-y-8 md:space-y-12">
            {/* Central Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2" />

            {experience.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className="relative w-full group">
                  {/* Timeline Node centered on the line */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-white border-2 border-brand group-hover:bg-brand group-hover:scale-125 transition-all duration-300" />
                    <span className="absolute w-3.5 h-3.5 rounded-full bg-brand/35 animate-ping group-hover:scale-150 transition-all duration-300" />
                  </div>

                  {/* Card wrapper */}
                  <div className={`pl-10 md:pl-0 w-full md:w-[calc(50%-28px)] ${isLeft ? "md:mr-auto" : "md:ml-auto"} text-left`}>
                    <div className={`bg-white rounded-2xl p-5 border border-slate-200/85 shadow-card timeline-card-hover hover:bg-gradient-to-br hover:from-white hover:to-brand-light/20 ${
                      isLeft 
                        ? "border-l-[4px] border-l-transparent hover:border-l-brand md:border-l-0 md:border-r-[4px] md:border-r-transparent" 
                        : "border-l-[4px] border-l-transparent hover:border-l-brand"
                    }`}>
                      <div className="flex flex-wrap items-center gap-2 mb-2.5 justify-start">
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-100/80 border border-slate-200/60 px-2 py-0.5 rounded-md">
                          {exp.period}
                        </span>
                      </div>
                      
                      <h3 className="text-base font-black text-brand-dark leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-xs text-slate-500 font-semibold mt-1">
                        {exp.place}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function EducationTimeline() {
  return (
    <section id="education" className="py-16 px-6 bg-slate-50/50 border-b border-slate-200/40">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12 justify-center">
            <div className="w-10 h-10 rounded-xl bg-brand-light text-brand flex items-center justify-center border border-brand/15">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-brand-dark">
              Academic Background
            </h2>
          </div>
          
          <div className="relative space-y-8 md:space-y-12">
            {/* Central Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2" />

            {education.map((edu, idx) => {
              const isLeft = idx % 2 === 0;
              const { title, badge } = formatDegree(edu.degree);
              return (
                <div key={idx} className="relative w-full group">
                  {/* Timeline Node centered on the line */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-white border-2 border-brand group-hover:bg-brand group-hover:scale-125 transition-all duration-300" />
                    <span className="absolute w-3.5 h-3.5 rounded-full bg-brand/35 animate-ping group-hover:scale-150 transition-all duration-300" />
                  </div>

                  {/* Card wrapper */}
                  <div className={`pl-10 md:pl-0 w-full md:w-[calc(50%-28px)] ${isLeft ? "md:mr-auto" : "md:ml-auto"} text-left`}>
                    <div className={`bg-white rounded-2xl p-5 border border-slate-200/85 shadow-card timeline-card-hover hover:bg-gradient-to-br hover:from-white hover:to-brand-light/20 ${
                      isLeft 
                        ? "border-l-[4px] border-l-transparent hover:border-l-brand md:border-l-0 md:border-r-[4px] md:border-r-transparent" 
                        : "border-l-[4px] border-l-transparent hover:border-l-brand"
                    }`}>
                      <div className="flex flex-wrap items-center gap-2 mb-2.5 justify-start">
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-100/80 border border-slate-200/60 px-2 py-0.5 rounded-md">
                          {edu.period}
                        </span>
                        {badge && (
                          <span className="text-[9px] font-extrabold text-emerald-800 bg-brand-light border border-brand/20 px-2 py-0.5 rounded-md font-mono">
                            {badge}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-base font-black text-brand-dark leading-snug">
                        {title}
                      </h3>
                      <p className="text-xs text-slate-500 font-semibold mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
