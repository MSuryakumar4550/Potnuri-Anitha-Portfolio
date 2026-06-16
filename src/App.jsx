import { useState, useEffect } from "react";
import { Navbar } from "./components/portfolio/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { AboutMe, EducationTimeline, ExperienceTimeline, TechnicalSkills } from "./components/portfolio/About";
import { Training } from "./components/portfolio/Training";
import { Projects } from "./components/portfolio/Projects";
import { Research } from "./components/portfolio/Research";
import { Publications } from "./components/portfolio/Publications";
import { Connect } from "./components/portfolio/Connect";
import { Privacy } from "./components/portfolio/Privacy";
import { VisitorCounter } from "./components/portfolio/VisitorCounter";
import { profile } from "./components/portfolio/data";

export default function App() {
  const [view, setView] = useState("home");

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans flex flex-col justify-between">
      <div>
        <Navbar onNavClick={setView} currentView={view} />

        {view === "home" ? (
          <>
            <Hero />
            <AboutMe />
            <Training />
            <EducationTimeline />
            <ExperienceTimeline />
            <Projects />
            <TechnicalSkills />
            <Research />
            <Publications />
            <Connect />
          </>
        ) : (
          <Privacy onBackClick={() => setView("home")} />
        )}
      </div>

      {/* Global Footer */}
      <footer className="py-8 px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center text-xs font-bold text-slate-500">
          <div>
            © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setView(view === "home" ? "privacy" : "home")}
              className="hover:text-brand hover:underline transition-all cursor-pointer"
            >
              {view === "home" ? "Privacy Policy" : "Back to Home"}
            </button>
            <VisitorCounter />
          </div>
        </div>
      </footer>
    </main>
  );
}
