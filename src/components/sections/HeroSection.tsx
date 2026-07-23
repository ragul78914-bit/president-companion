'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Vote, Eye, ChevronDown, Award, Zap } from 'lucide-react';
import { CANDIDATE_INFO } from '@/lib/seedData';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Aurora Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/20 rounded-full blur-3xl pointer-events-none animate-aurora" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Heading & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-neon-cyan">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-spin" />
            <span>Final Year • AI & DS Department</span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-medium text-slate-300 font-sans tracking-wide">
              Hi, <span className="text-white font-semibold">I'm</span>
            </h2>
            <h1 className="text-5xl sm:text-7xl font-black font-display tracking-tight text-white leading-none">
              RAGUL
            </h1>
            <div className="text-2xl sm:text-4xl font-extrabold text-gradient">
              Student President Candidate
            </div>
            <p className="text-lg sm:text-xl font-medium text-slate-300 font-sans">
              Artificial Intelligence and Data Science
            </p>
          </div>

          {/* Tagline / Subtitle */}
          <blockquote className="text-base sm:text-lg text-slate-300 italic border-l-0 lg:border-l-4 border-cyan-500/80 lg:pl-4 py-1 font-sans bg-slate-900/40 rounded-r-xl p-3 border border-slate-800/80 backdrop-blur-sm">
            "{CANDIDATE_INFO.heroSubtitle}"
          </blockquote>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#vision"
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-sm shadow-neon-blue hover:shadow-neon-cyan hover:scale-105 transition-all duration-300 group"
            >
              <Zap className="w-4 h-4 text-cyan-200" /> View My Vision
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#survey"
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white font-bold text-sm backdrop-blur-xl hover:border-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              <Vote className="w-4 h-4 text-cyan-400" /> Student Survey
            </a>

            <a
              href="#why-vote"
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/40 text-purple-200 font-semibold text-sm backdrop-blur-xl hover:border-purple-400 transition-all duration-300"
            >
              <Eye className="w-4 h-4 text-purple-400" /> Why Vote For Me
            </a>
          </div>

          {/* Key Metric Quick Badges */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">100%</div>
              <div className="text-xs text-slate-400">Financial Transparency</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono">30+</div>
              <div className="text-xs text-slate-400">Actionable Initiatives</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-purple-400 font-mono">Full Stack</div>
              <div className="text-xs text-slate-400">Digital Solutions</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Holographic AI Brain & Badge Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="relative w-full max-w-md">
            {/* Outer spinning ring */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-25 blur-xl animate-pulse-slow" />
            
            {/* Glass Container */}
            <div className="relative rounded-3xl p-8 bg-slate-900/80 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl space-y-6 text-center overflow-hidden">
              <div className="absolute -right-12 -top-12 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="mx-auto w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-600/30 border border-cyan-400/50 flex items-center justify-center shadow-neon-cyan animate-float">
                <Award className="w-12 h-12 text-cyan-400" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">ELECTION MISSION</span>
                <p className="text-sm sm:text-base font-semibold text-slate-200 mt-2 leading-relaxed">
                  "{CANDIDATE_INFO.mission}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Campaign Active
                </span>
                <span>AI & DS • Final Year</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Mouse Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-75">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="p-1 rounded-full border border-slate-700 text-cyan-400"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
}
