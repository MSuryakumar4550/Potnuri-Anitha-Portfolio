import { Code, Cloud, Cpu, BookOpen } from "lucide-react";
import { skillsByCategory } from "./data";

export function Skills() {
  const categoryHeaders = {
    programming: {
      title: "Programming Languages",
      icon: <Code size={20} style={{ color: "var(--brand-dark)" }} />
    },
    cloudData: {
      title: "Cloud & Data Engineering",
      icon: <Cloud size={20} style={{ color: "var(--brand-dark)" }} />
    },
    frameworks: {
      title: "Frameworks & Backend",
      icon: <Cpu size={20} style={{ color: "var(--brand-dark)" }} />
    },
    teachingAcademia: {
      title: "Teaching & Academia",
      icon: <BookOpen size={20} style={{ color: "var(--brand-dark)" }} />
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Expertise</span>
          <h2 className="section-title">Core Competencies</h2>
        </div>

        <div className="skills-container">
          <div className="grid-2" style={{ gap: "32px" }}>
            {Object.keys(skillsByCategory).map((categoryKey) => {
              const category = skillsByCategory[categoryKey];
              const header = categoryHeaders[categoryKey];

              return (
                <div key={categoryKey} className="card skills-category-card">
                  <h3 className="skills-category-title">
                    {header.icon}
                    {header.title}
                  </h3>
                  <div className="skills-grid-layout">
                    {category.map((skill, index) => (
                      <div key={index} className="skill-progress-container">
                        <div className="skill-meta">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="skill-bar-bg">
                          <div 
                            className="skill-bar-fill" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
