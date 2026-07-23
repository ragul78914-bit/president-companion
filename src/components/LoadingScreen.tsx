'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, BrainCircuit, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(100, prev + increment);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-white"
        >
          {/* Ambient aurora glowing behind loader */}
          <div className="absolute w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow" />

          {/* Central Animated AI Logo Container */}
          <div className="relative flex items-center justify-center mb-8">
            <div className="absolute w-32 h-32 rounded-full border border-cyan-500/40 animate-ping opacity-25" />
            <div className="absolute w-28 h-28 rounded-full border border-dashed border-purple-500/50 animate-glow-spin" />
            
            <div className="relative z-10 p-5 rounded-2xl bg-slate-900/80 border border-cyan-500/40 shadow-neon-blue backdrop-blur-xl">
              <BrainCircuit className="w-12 h-12 text-cyan-400 animate-pulse" />
            </div>
          </div>

          {/* Candidate Info Headline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-spin" /> Initializing AI & DS Neural Portal
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
              RAGUL <span className="text-gradient">2026</span>
            </h2>
            <p className="text-sm text-slate-400 mt-1">Student President Candidate • AI & DS Department</p>
          </motion.div>

          {/* Progress Percentage Display */}
          <div className="w-72 sm:w-80">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-2 font-mono">
              <span className="flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Loading Modules...
              </span>
              <span className="text-cyan-400 font-bold text-sm">{progress}%</span>
            </div>

            {/* Glowing Custom Progress Bar */}
            <div className="h-2 w-full bg-slate-900/80 rounded-full border border-slate-800 p-0.5 overflow-hidden shadow-inner">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-neon-cyan"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>
          </div>

          <div className="absolute bottom-8 text-xs text-slate-500 font-mono tracking-wider">
            "Together, Let's Build a Smarter AI & DS Department"
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
