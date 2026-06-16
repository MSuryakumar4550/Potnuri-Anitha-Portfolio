import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Rss } from "lucide-react";
import { blogPosts } from "./data";

export function Blog() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="blog" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-left">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-sm font-extrabold uppercase tracking-widest text-brand-dark">
            Medium Articles
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-black text-brand-dark tracking-tight">
            Latest Blog Posts
          </h2>
          <div className="w-16 h-1 bg-brand mx-auto mt-4 rounded-full" />
        </div>

        {/* Posts List */}
        <div className="space-y-12">
          {blogPosts.map((post, idx) => {
            return (
              <motion.a
                key={post.id}
                href={post.url}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative flex flex-col md:flex-row gap-6 md:gap-8 pb-10 border-b border-slate-200 items-center justify-between hover:border-brand/35 transition-all"
              >
                <div className="flex-1 min-w-0">
                  {/* Author Meta */}
                  <div className="flex items-center gap-2 mb-3.5">
                    <span className="w-7 h-7 bg-brand text-white rounded-full flex items-center justify-center font-extrabold text-[10px] select-none shrink-0">
                      PA
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      Potnuri Annithaa
                    </span>
                    <span className="text-slate-400 font-semibold text-xs">
                      · {post.date} · {post.readTime}
                    </span>
                  </div>

                  {/* Post Title */}
                  <h3 className="text-lg md:text-2xl font-black text-slate-900 group-hover:text-brand transition-colors leading-tight">
                    {post.title}
                  </h3>

                  {/* Post Excerpt */}
                  <p className="mt-2.5 text-slate-500 font-semibold text-xs md:text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Actions Row */}
                  <div className="mt-4 flex items-center justify-between text-slate-400 font-extrabold text-xs">
                    <div className="flex items-center gap-4">
                      <span className="hover:text-slate-650 cursor-default">👏</span>
                      <span className="group-hover:text-brand transition-colors inline-flex items-center gap-1">
                        Read on Medium <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <span className="hover:text-slate-650 cursor-default">♡</span>
                  </div>
                </div>

                {/* Hover Information Tooltip Card - White Theme Centered Above Card */}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="hidden md:block absolute z-35 bottom-[102%] left-1/2 -translate-x-1/2 w-80 sm:w-[380px] p-5 bg-white border border-slate-200 shadow-soft rounded-2xl text-xs text-slate-500 font-semibold leading-relaxed pointer-events-none"
                    >
                      <div className="font-extrabold text-brand text-[13px] mb-1.5">
                        About this article
                      </div>
                      <p>{post.excerpt}</p>
                      {/* Downward pointing arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-slate-200 rotate-45 -translate-y-1.5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.a>
            );
          })}

          {/* View All Button */}
          <div className="text-center pt-4">
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:bg-brand/90 hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              <Rss className="w-4 h-4" /> View All Posts on Medium
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
