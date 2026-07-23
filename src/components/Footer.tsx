'use client';

import Link from 'next/link';
import { BrainCircuit, Heart, Instagram, Linkedin, Github, Mail, Phone, ArrowUp } from 'lucide-react';
import { CANDIDATE_INFO } from '@/lib/seedData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-gradient-to-t from-cyan-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Candidate Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-white tracking-tight">
                  RAGUL <span className="text-gradient">2026</span>
                </h3>
                <p className="text-xs text-slate-400">Student President Candidate • Artificial Intelligence & Data Science</p>
              </div>
            </div>

            <blockquote className="text-sm italic text-slate-300 border-l-2 border-cyan-500/60 pl-3 py-1">
              "Together, We Build the Future of Artificial Intelligence and Data Science."
            </blockquote>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              A candidate driven by innovation, transparency, equal opportunity, and technical excellence. Built for students, powered by solution-oriented leadership.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Navigation</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Ragul</a></li>
              <li><a href="#why-vote" className="hover:text-cyan-400 transition-colors">Why Vote For Me</a></li>
              <li><a href="#vision" className="hover:text-cyan-400 transition-colors">30-Point Vision</a></li>
              <li><a href="#transparency" className="hover:text-cyan-400 transition-colors">Financial Transparency</a></li>
              <li><a href="#survey" className="hover:text-cyan-400 transition-colors">Student Survey</a></li>
              <li><a href="#suggestion" className="hover:text-cyan-400 transition-colors">Anonymous Suggestion Box</a></li>
            </ul>
          </div>

          {/* Col 3: Connect & Admin */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Connect</h4>
            <div className="flex gap-2.5">
              <a href={CANDIDATE_INFO.socials.instagram} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/40 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={CANDIDATE_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={CANDIDATE_INFO.socials.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href={`mailto:${CANDIDATE_INFO.socials.email}`} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-purple-400 hover:border-purple-500/40 transition-all">
                <Mail className="w-4 h-4" />
              </a>
              <a href={CANDIDATE_INFO.socials.whatsapp} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all">
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-3">
              <Link href="/admin" className="text-xs text-purple-400 hover:underline flex items-center gap-1 font-mono">
                → Access Department Admin Portal
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-1">
            © 2026 Ragul Student President Campaign • Built with <Heart className="w-3 h-3 text-pink-500 fill-pink-500 inline mx-0.5" /> for AI & DS
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
