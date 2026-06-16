import { motion } from "motion/react";
import { profile, profileLinks } from "./data";
import { Phone, Mail, MapPin } from "lucide-react";

export function Connect() {
  return (
    <section id="connect" className="py-16 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Invitation Message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark tracking-tight">
              Let's Connect
            </h2>
            <p className="mt-4 text-slate-500 font-semibold leading-relaxed text-sm md:text-base">
              I am open to research collaborations, academic initiatives, cloud data pipeline consults, guest lectures, and programming workshops. Feel free to reach out.
            </p>
          </motion.div>

          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-soft text-left"
          >
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-brand-light text-emerald-800 border border-brand/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Call / WhatsApp
                  </span>
                  <a
                    href={`tel:${profile.contact.phone}`}
                    className="text-sm font-extrabold text-slate-800 hover:text-brand transition-colors"
                  >
                    {profile.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-brand-light text-emerald-800 border border-brand/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Write Email
                  </span>
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="text-sm font-extrabold text-slate-800 hover:text-brand transition-colors break-all"
                  >
                    {profile.contact.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-brand-light text-emerald-800 border border-brand/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Location
                  </span>
                  <span className="text-sm font-extrabold text-slate-800">
                    {profile.contact.address}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Profile Links Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-10 border-t border-slate-200/80"
        >
          <div className="text-center mb-8">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">
              Academic & Professional Profiles
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 p-4 bg-white border border-slate-200/60 rounded-2xl shadow-soft">
            {profileLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2.5 rounded-xl hover:bg-brand-light/40 hover:scale-[1.03] transition-all duration-300 group w-full text-center"
              >
                <span 
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-xs select-none shadow-sm group-hover:shadow-glow transition-all"
                  style={{ backgroundColor: link.color }}
                >
                  {link.icon}
                </span>
                <strong className="mt-2 text-[11px] font-extrabold text-slate-800 group-hover:text-brand transition-colors leading-tight">{link.name}</strong>
                <small className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{link.action}</small>
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
