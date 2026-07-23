'use client';

import { motion } from 'framer-motion';
import { Award, Star, CheckCircle, Flame, Rocket, Code, Zap } from 'lucide-react';
import { ACHIEVEMENTS_LIST } from '@/lib/seedData';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" /> Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
            ACHIEVEMENTS & <span className="text-gradient-purple">MILESTONES</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Ragul's journey through engineering, leadership, hackathons, and department contributions.
          </p>
        </div>

        {/* Animated Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
          {ACHIEVEMENTS_LIST.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-neon-cyan">
                <Star className="w-3.5 h-3.5 fill-cyan-400" />
              </div>

              {/* Date Badge on Left (for desktop) */}
              <div className="hidden sm:block absolute -left-36 top-2 text-xs font-mono font-bold text-cyan-400 w-28 text-right">
                {item.year}
              </div>

              {/* Timeline Glass Card */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl hover:border-purple-500/40 transition-all space-y-2 shadow-glass">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="sm:hidden text-xs font-mono font-bold text-cyan-400">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-mono uppercase font-bold px-2.5 py-0.5 rounded bg-purple-950/80 border border-purple-500/40 text-purple-300">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-display">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-cyan-300 font-semibold">
                  {item.role}
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans pt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
