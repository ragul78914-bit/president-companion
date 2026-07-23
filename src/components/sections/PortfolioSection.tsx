'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, Github, ExternalLink, CheckCircle2, Layers, Cpu, Sparkles 
} from 'lucide-react';
import { PROJECTS_LIST, ProjectItem } from '@/lib/seedData';

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" /> Proven Engineering Excellence
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
            PROJECT <span className="text-gradient">PORTFOLIO</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            "Ragul is not only making promises—he is building real solutions." Explore production software built by candidate Ragul.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS_LIST.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-neon-blue transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Project Image Header */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono font-bold backdrop-blur-md">
                      Production System
                    </span>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-black font-display text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400 font-semibold mt-1">
                      {project.subtitle}
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Core Features
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300 text-xs font-mono font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="p-8 pt-0 flex items-center gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 hover:border-slate-700 transition-all"
                >
                  <Github className="w-4 h-4" /> GitHub Repository
                </a>
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-neon-cyan transition-all"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
