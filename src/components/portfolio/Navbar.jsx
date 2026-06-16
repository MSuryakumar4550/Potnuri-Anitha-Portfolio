import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { profile } from "./data";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#training", label: "Training" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Qualifications" },
  { href: "#research", label: "Research" },
  { href: "#connect", label: "Connect" }
];

export function Navbar({ onNavClick, currentView }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Update header scrolled state
      setScrolled(window.scrollY > 30);

      // 2. If we are on privacy page, do not run scroll spy
      if (currentView === "privacy") return;

      // 3. Check if user is at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection("connect");
        return;
      }

      // 4. Find active section based on viewport top position
      const sectionIds = ["about", "training", "education", "experience", "projects", "skills", "research", "journals", "connect"];
      const triggerPoint = window.innerHeight * 0.35; // 35% from the top of the viewport
      
      let active = "about";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            active = id;
          }
        }
      }

      const getMappedActiveSection = (id) => {
        if (id === "journals" || id === "research") {
          return "research";
        }
        if (id === "projects") {
          return "experience";
        }
        return id;
      };

      setActiveSection(getMappedActiveSection(active));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentView]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.substring(1);
    const mappedId = targetId === "skills" ? "skills" : (targetId === "journals" ? "research" : targetId);
    setActiveSection(mappedId);
    
    if (currentView === "privacy") {
      onNavClick("home");
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-white/96 backdrop-blur-xl border-b border-brand-light shadow-soft"
          : "bg-white/96 backdrop-blur-xl border-b border-brand-light"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between relative">
        {/* Brand */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex items-center gap-3 select-none text-left"
        >
          <div className="w-[44px] h-[44px] rounded-[12px] bg-gradient-to-br from-brand-dark to-brand text-white flex items-center justify-center font-extrabold text-base shrink-0">
            PA
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-brand-dark text-[18px]">{profile.name}</div>
            <div className="text-[12px] text-slate-500 font-semibold">
              Ph.D. Scholar | Assistant Professor | Ex-Data Engineer
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1 text-sm font-bold relative">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1) && currentView !== "privacy";
            return (
              <li key={item.href} className="relative">
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`px-4.5 py-2 rounded-full relative block transition-all duration-300 text-[12.5px] font-extrabold select-none ${
                    isActive 
                      ? "text-white" 
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-highlight"
                      className="absolute inset-0 bg-[#5A8F3B] rounded-full z-0 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-brand-dark hover:text-brand transition-colors rounded-xl bg-brand-light border border-brand-light"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-[72px] left-0 right-0 bg-white/98 backdrop-blur-2xl border-b border-brand-light shadow-lg overflow-hidden z-40"
            >
              <ul className="flex flex-col p-6 gap-3 font-semibold text-sm">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.substring(1) && currentView !== "privacy";
                  return (
                    <li key={item.href} className="relative">
                      <a
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className={`block py-2.5 px-4 rounded-full relative transition-all font-bold text-left ${
                          isActive 
                            ? "text-white" 
                            : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                        }`}
                      >
                        <span className="relative z-10">{item.label}</span>
                        {isActive && (
                          <motion.div
                            layoutId="active-nav-mobile"
                            className="absolute inset-0 bg-[#5A8F3B] rounded-full z-0 shadow-sm"
                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
