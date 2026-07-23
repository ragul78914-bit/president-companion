'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Code, UserCheck, Calculator, FileText, Trophy, Award, BookOpen, 
  Building2, Cpu, GitBranch, Monitor, Zap, Sparkles, Globe, Bell, Network, 
  Compass, GraduationCap, Flag, Music, Camera, Activity, Truck, Terminal, 
  CheckSquare, Radio, Database, HeartHandshake, Layers 
} from 'lucide-react';
import { VISION_ITEMS, VisionItem } from '@/lib/seedData';

const iconMap: Record<string, any> = {
  Briefcase, Code, UserCheck, Calculator, FileText, Trophy, Award, BookOpen, 
  Building2, Cpu, GitBranch, Monitor, Zap, Sparkles, Globe, Bell, Network, 
  Compass, GraduationCap, Sparkle: Sparkles, Flag, Music, Camera, Activity, Truck, Terminal, 
  CheckSquare, Radio, Database, HeartHandshake
};

export default function VisionSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Career & Placements', 'Innovation & Tech', 'Academics', 'Culture & Events'];

  const filteredItems = selectedCategory === 'All'
    ? VISION_ITEMS
    : VISION_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="vision" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" /> 30-Point Action Plan
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
            MY <span className="text-gradient">VISION</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A comprehensive, execution-oriented roadmap designed to elevate our AI & DS department in placements, hackathons, technical events, and student life.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-neon-cyan scale-105'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Sparkles;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 backdrop-blur-xl hover:border-cyan-500/40 hover:shadow-neon-cyan transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all shadow-neon-blue">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
                      {item.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Priority Initiative</span>
                  <span>Ragul 2026</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
