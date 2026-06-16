import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { motion } from "motion/react";

export function VisitorCounter() {
  const [displayCount, setDisplayCount] = useState(380);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const project = "annithaa-potnuri-portfolio";
    const storageKey = `portfolio_visited_${project}`;
    const BASELINE = 380;

    const fetchCounter = async () => {
      try {
        const isSessionViewed = sessionStorage.getItem(storageKey);
        const isDev = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
        
        let url;
        if (isDev) {
          url = `https://api.counterapi.dev/v1/${project}/visits`;
          if (!isSessionViewed) {
            url += `/up`;
          }
        } else {
          url = `https://api.counterapi.dev/v1/${project}/visits`;
          if (!isSessionViewed) {
            url += `/up`;
          }
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Counter API failed");
        }
        const data = await response.json();
        
        if (isMounted) {
          const serverCount = data.count || 0;
          setDisplayCount(serverCount + BASELINE);
          
          if (!isSessionViewed) {
            sessionStorage.setItem(storageKey, "true");
          }
          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching visitor count:", err);
        if (isMounted) {
          const localStored = localStorage.getItem(`local_visits_${project}`);
          let localCount = localStored ? parseInt(localStored, 10) : (BASELINE + 1);
          if (!sessionStorage.getItem(storageKey)) {
            localCount += 1;
            localStorage.setItem(`local_visits_${project}`, localCount.toString());
            sessionStorage.setItem(storageKey, "true");
          }
          setDisplayCount(localCount);
          setLoading(false);
        }
      }
    };

    fetchCounter();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 animate-pulse w-32 h-8">
        <div className="w-4 h-4 bg-slate-200 rounded-full" />
        <div className="h-4 bg-slate-200 rounded w-16" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-slate-200 bg-gradient-to-r from-slate-50 to-white shadow-sm hover:shadow-glow hover:border-brand transition-all duration-300 group cursor-default"
    >
      <div className="relative flex items-center justify-center">
        <Eye className="w-4 h-4 text-slate-500 group-hover:text-brand transition-colors duration-300" />
        <span className="absolute -top-1 -right-1 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
        </span>
      </div>
      <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-900 transition-colors duration-300">
        Visitors:{" "}
        <span className="font-bold text-brand tabular-nums">
          {displayCount.toLocaleString()}
        </span>
      </span>
    </motion.div>
  );
}
