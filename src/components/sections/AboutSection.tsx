'use client';

import { motion } from 'framer-motion';
import { UserCheck, Code, Sparkles, HeartHandshake, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';
import { CANDIDATE_INFO } from '@/lib/seedData';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" /> Candidate Profile
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
            ABOUT <span className="text-gradient">ME</span>
          </h2>
          <p className="text-sm text-slate-400">
            Who is Ragul & why is he running for Student President?
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Glass Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-30 blur-lg animate-pulse-glow" />

              <div className="relative rounded-3xl bg-slate-900/90 border border-cyan-500/30 p-6 backdrop-blur-2xl shadow-glass text-center space-y-5">
                
                {/* Profile Image */}
                <div className="relative mx-auto w-40 h-40 rounded-2xl p-1 bg-gradient-to-tr from-cyan-400 to-purple-600 shadow-neon-blue">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-slate-950 relative">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                      alt="Ragul Candidate Profile"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-black font-display text-white">{CANDIDATE_INFO.name}</h3>
                  <div className="text-xs font-mono text-cyan-400 font-bold">{CANDIDATE_INFO.role}</div>
                  <div className="text-xs text-slate-400">{CANDIDATE_INFO.department} • {CANDIDATE_INFO.year}</div>
                </div>

                {/* Quick Badges */}
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center gap-1.5 text-cyan-300">
                    <Code className="w-3.5 h-3.5" /> Full Stack
                  </div>
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center gap-1.5 text-purple-300">
                    <Sparkles className="w-3.5 h-3.5" /> AI & DS
                  </div>
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center gap-1.5 text-emerald-300">
                    <ShieldCheck className="w-3.5 h-3.5" /> 100% Honest
                  </div>
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center gap-1.5 text-pink-300">
                    <HeartHandshake className="w-3.5 h-3.5" /> Student First
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Simplified Bullet Highlights for Voters */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl space-y-5">
              
              <div className="space-y-2">
                <h3 className="text-2xl font-black font-display text-white">
                  Action-Driven Leadership for AI & DS
                </h3>
                <p className="text-sm text-slate-300">
                  "I strongly believe that leadership is not about making speeches; it is about creating real opportunities and solving real student problems."
                </p>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3 pt-2">
                {CANDIDATE_INFO.aboutBulletPoints.map((point, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3 text-sm font-medium text-slate-200 hover:border-cyan-500/40 transition-colors">
                    <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 font-bold text-sm text-center">
                "Together, we can make AI & DS the best department in our college!"
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
