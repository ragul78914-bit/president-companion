'use client';

import { motion } from 'framer-motion';
import { 
  XCircle, CheckCircle2, Code, Eye, Rocket, Users, ShieldCheck, HelpCircle 
} from 'lucide-react';
import { COMPARISON_LIST } from '@/lib/seedData';

const iconMap: Record<string, any> = {
  Code, Eye, Rocket, Users, ShieldCheck
};

export default function ComparisonSection() {
  return (
    <section id="why-vote" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Action Over Words
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
            WHY VOTE <span className="text-gradient">FOR ME</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            A clear comparison between traditional candidate promises and Ragul's concrete, action-driven solutions.
          </p>
        </div>

        {/* Comparison Cards Stack */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {COMPARISON_LIST.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Code;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 p-6 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 shadow-glass"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Left: Traditional Approach */}
                  <div className="md:col-span-5 flex items-center gap-3 text-slate-400 text-sm font-medium">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                    <span className="line-through decoration-rose-500/60">{item.insteadOf}</span>
                  </div>

                  {/* Divider Icon */}
                  <div className="hidden md:flex md:col-span-2 justify-center">
                    <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all shadow-neon-blue">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Right: Ragul's Commitment */}
                  <div className="md:col-span-5 flex items-center gap-3 text-white text-base font-bold">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 animate-pulse" />
                    <span className="text-cyan-300 font-display">{item.ragulWill}</span>
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
