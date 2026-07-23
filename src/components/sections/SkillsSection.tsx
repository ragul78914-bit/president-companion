'use client';

import { motion } from 'framer-motion';
import { 
  Globe, Code2, Server, Cpu, Database, Flame, FileCode, FileJson, 
  Palette, Terminal, Brain, Sparkles, Layers, UserCheck, Lightbulb, MessageSquare, Wrench 
} from 'lucide-react';
import { SKILLS_LIST } from '@/lib/seedData';

const iconMap: Record<string, any> = {
  Globe, Code2, Server, Cpu, Database, Flame, FileCode, FileJson,
  Palette, Terminal, Brain, Sparkles, Layers, UserCheck, Lightbulb, MessageSquare
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" /> Technical & Leadership Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
            MY <span className="text-gradient-purple">SKILLS</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A versatile toolkit blending production full-stack web engineering, AI core algorithms, and proven student leadership.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {SKILLS_LIST.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            const isAI = skill.category === 'Core AI';
            const isLeadership = skill.category === 'Leadership';

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group relative"
              >
                <div className={`p-5 rounded-2xl border backdrop-blur-xl transition-all duration-300 flex items-center gap-3.5 hover:-translate-y-1 ${
                  isAI
                    ? 'bg-purple-950/30 border-purple-500/30 hover:border-purple-400 hover:shadow-neon-purple'
                    : isLeadership
                    ? 'bg-pink-950/30 border-pink-500/30 hover:border-pink-400 hover:shadow-lg'
                    : 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40 hover:shadow-neon-cyan'
                }`}>
                  <div className={`p-3 rounded-xl ${
                    isAI
                      ? 'bg-purple-900/40 text-purple-300'
                      : isLeadership
                      ? 'bg-pink-900/40 text-pink-300'
                      : 'bg-cyan-950/60 text-cyan-400'
                  } group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-bold text-sm text-white font-sans group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
