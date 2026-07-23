'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, MessageSquare, Calendar, TrendingUp, Sparkles } from 'lucide-react';

export default function LiveDashboardSection() {
  const metrics = [
    {
      value: "100%",
      label: "Transparency Commitment",
      subtext: "Every rupee logged in public ledger",
      icon: ShieldCheck,
      color: "text-emerald-400",
      border: "border-emerald-500/30"
    },
    {
      value: "500+",
      label: "Student Suggestions",
      subtext: "Actionable ideas collected & queued",
      icon: MessageSquare,
      color: "text-purple-400",
      border: "border-purple-500/30"
    },
    {
      value: "25+",
      label: "Events Planned",
      subtext: "Hackathons, IVs, bootcamps & fests",
      icon: Calendar,
      color: "text-cyan-400",
      border: "border-cyan-500/30"
    },
    {
      value: "Unlimited",
      label: "Growth Opportunities",
      subtext: "Equal access for every AI & DS student",
      icon: TrendingUp,
      color: "text-pink-400",
      border: "border-pink-500/30"
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10 bg-slate-950/80 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-3xl bg-slate-900/60 border ${m.border} backdrop-blur-xl space-y-3 text-center hover:scale-105 transition-all shadow-glass`}
              >
                <div className={`mx-auto w-14 h-14 rounded-2xl bg-slate-950/80 flex items-center justify-center ${m.color} border border-slate-800 shadow-inner`}>
                  <Icon className="w-7 h-7" />
                </div>

                <div className={`text-4xl font-black font-display tracking-tight ${m.color}`}>
                  {m.value}
                </div>

                <div className="text-sm font-bold text-white font-sans">
                  {m.label}
                </div>

                <div className="text-xs text-slate-400 font-sans">
                  {m.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
