import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { profile } from "./data";

export function Privacy({ onBackClick }) {
  return (
    <section className="pt-28 pb-20 px-6 min-h-[calc(100vh-80px)] bg-slate-50 flex items-center justify-center text-left">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-soft"
      >
        {/* Back Link */}
        <button
          onClick={onBackClick}
          className="mb-8 font-bold text-xs text-brand-dark hover:text-brand flex items-center gap-1.5 transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Home
        </button>

        <h1 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight mb-4">
          Privacy Policy
        </h1>
        <div className="w-12 h-1 bg-brand rounded-full mb-8" />

        <div className="space-y-6 text-sm font-semibold text-slate-600 leading-relaxed">
          <p>
            This website is maintained by {profile.name} for academic, educational, research, and professional purposes.
          </p>

          <div>
            <h2 className="text-base font-extrabold text-brand-dark mb-2">
              Information Collection
            </h2>
            <p>
              This website may collect basic visitor information such as browser type, pages visited, and device information for analytics and performance improvement.
            </p>
          </div>

          <div>
            <h2 className="text-base font-extrabold text-brand-dark mb-2">
              Analytics
            </h2>
            <p>
              This website uses standard web APIs to understand traffic, visitor behavior, and improve user experience.
            </p>
          </div>

          <div>
            <h2 className="text-base font-extrabold text-brand-dark mb-2">
              Cookies
            </h2>
            <p>
              Cookies may be used to improve website functionality, analytics, and personalization.
            </p>
          </div>

          <div>
            <h2 className="text-base font-extrabold text-brand-dark mb-2">
              External Links
            </h2>
            <p>
              This website contains links to external websites such as LinkedIn, GitHub, and research publication platforms.
            </p>
          </div>

          <div>
            <h2 className="text-base font-extrabold text-brand-dark mb-2">
              Consent
            </h2>
            <p>
              By using this website, you consent to this privacy policy.
            </p>
          </div>

          <div>
            <h2 className="text-base font-extrabold text-brand-dark mb-2">
              Contact
            </h2>
            <p className="flex items-center gap-1">
              <span>📧</span>
              <a 
                href={`mailto:${profile.contact.email}`} 
                className="text-brand hover:underline"
              >
                {profile.contact.email}
              </a>
            </p>
          </div>
        </div>

        <hr className="border-slate-100 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-bold">
          <p>© {new Date().getFullYear()} {profile.name}. All Rights Reserved.</p>
          <button 
            onClick={onBackClick}
            className="text-brand hover:underline cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </motion.div>
    </section>
  );
}
