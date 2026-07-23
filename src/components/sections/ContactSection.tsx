'use client';

import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Github, Phone, Send, MessageCircle, Sparkles } from 'lucide-react';
import { CANDIDATE_INFO } from '@/lib/seedData';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5" /> Direct Candidate Connect
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
            GET IN <span className="text-gradient">TOUCH</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Have questions about the election roadmap or want to discuss department initiatives? Connect with Ragul directly.
          </p>
        </div>

        {/* Contact Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Instagram */}
          <a
            href={CANDIDATE_INFO.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="group p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl hover:border-pink-500/40 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
          >
            <div className="p-4 rounded-2xl bg-pink-950/80 border border-pink-500/30 text-pink-400 group-hover:scale-110 transition-transform">
              <Instagram className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Instagram</span>
              <h3 className="text-base font-bold text-white font-display group-hover:text-pink-300 transition-colors">@ragul_aids</h3>
              <p className="text-xs text-slate-400">Campaign updates & stories</p>
            </div>
          </a>

          {/* Card 2: LinkedIn */}
          <a
            href={CANDIDATE_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl hover:border-blue-500/40 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
          >
            <div className="p-4 rounded-2xl bg-blue-950/80 border border-blue-500/30 text-blue-400 group-hover:scale-110 transition-transform">
              <Linkedin className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">LinkedIn</span>
              <h3 className="text-base font-bold text-white font-display group-hover:text-blue-300 transition-colors">in/ragul-aids</h3>
              <p className="text-xs text-slate-400">Professional network & projects</p>
            </div>
          </a>

          {/* Card 3: GitHub */}
          <a
            href={CANDIDATE_INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            className="group p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-neon-cyan transition-all duration-300 flex items-center gap-4"
          >
            <div className="p-4 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
              <Github className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">GitHub</span>
              <h3 className="text-base font-bold text-white font-display group-hover:text-cyan-300 transition-colors">@ragul-dev</h3>
              <p className="text-xs text-slate-400">Open source repositories</p>
            </div>
          </a>

          {/* Card 4: Email */}
          <a
            href={`mailto:${CANDIDATE_INFO.socials.email}`}
            className="group p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl hover:border-purple-500/40 hover:shadow-lg transition-all duration-300 flex items-center gap-4"
          >
            <div className="p-4 rounded-2xl bg-purple-950/80 border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Email</span>
              <h3 className="text-base font-bold text-white font-display group-hover:text-purple-300 transition-colors">ragul.aids@college.edu</h3>
              <p className="text-xs text-slate-400">Official student mail</p>
            </div>
          </a>

          {/* Card 5: WhatsApp */}
          <a
            href={CANDIDATE_INFO.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300 flex items-center gap-4 md:col-span-2 lg:col-span-2"
          >
            <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">WhatsApp Direct</span>
              <h3 className="text-base font-bold text-white font-display group-hover:text-emerald-300 transition-colors">+91 98765 43210</h3>
              <p className="text-xs text-slate-400">Direct message for quick student queries</p>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
