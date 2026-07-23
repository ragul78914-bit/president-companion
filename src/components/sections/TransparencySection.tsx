'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, DollarSign, PieChart, TrendingUp, Sparkles, CheckCircle, Info 
} from 'lucide-react';

interface ExpenseItem {
  _id: string;
  title: string;
  category: string;
  allocatedAmount: number;
  spentAmount: number;
  description: string;
  date: string;
}

export default function TransparencySection() {
  const [expenses, setExpenses] = useState<ExpenseItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/expenses')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setExpenses(data.data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // Budget calculations
  const totalAssociationFund = expenses.find(e => e.category === 'Association Fund')?.allocatedAmount || 150000;
  
  const spentBreakdown = expenses
    .filter(e => e.category !== 'Association Fund')
    .reduce((acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + curr.spentAmount;
      return acc;
    }, {} as Record<string, number>);

  const totalSpent = Object.values(spentBreakdown).reduce((a, b) => a + b, 0);
  const remainingBalance = Math.max(0, totalAssociationFund - totalSpent);
  const spentPercentage = Math.min(100, Math.round((totalSpent / totalAssociationFund) * 100));

  const categoryColors: Record<string, string> = {
    Symposium: 'bg-cyan-500',
    'Industrial Visit': 'bg-blue-500',
    Workshops: 'bg-purple-500',
    Cultural: 'bg-pink-500',
    'Guest Lecture': 'bg-amber-500',
    'Department Function': 'bg-emerald-500',
    Miscellaneous: 'bg-indigo-500'
  };

  return (
    <section id="transparency" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% Financial Accountability
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
            TRANSPARENCY <span className="text-gradient">PORTAL</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Real-time department fund allocation and expense audit dashboard. Every single rupee accounted for.
          </p>
        </div>

        {/* President's Transparency Commitment Banner */}
        <div className="mb-12 p-6 rounded-3xl bg-gradient-to-r from-cyan-950/80 via-slate-900 to-purple-950/80 border border-cyan-500/40 backdrop-blur-xl shadow-neon-blue flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-400/40 shrink-0">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">Presidential Trust Pledge</h3>
              <blockquote className="text-sm text-cyan-200 italic mt-1">
                "If elected, every student will know exactly how department funds are utilized. Transparency builds trust."
              </blockquote>
            </div>
          </div>

          <div className="px-5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-emerald-400 flex items-center gap-2 shrink-0">
            <CheckCircle className="w-4 h-4" /> Audit Status: Verified Public Log
          </div>
        </div>

        {/* Financial Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Total Fund */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-glass space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
              <span>ASSOCIATION FUND</span>
              <DollarSign className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-3xl font-black text-white font-mono">
              ₹{totalAssociationFund.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-400">Total Department Annual Pool</div>
          </div>

          {/* Card 2: Spent Total */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-glass space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
              <span>TOTAL EXPENSES</span>
              <PieChart className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-3xl font-black text-purple-400 font-mono">
              ₹{totalSpent.toLocaleString()}
            </div>
            <div className="text-[11px] text-purple-300/80 font-mono">{spentPercentage}% Budget Utilized</div>
          </div>

          {/* Card 3: Remaining Balance */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-glass space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
              <span>REMAINING BALANCE</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-black text-emerald-400 font-mono">
              ₹{remainingBalance.toLocaleString()}
            </div>
            <div className="text-[11px] text-emerald-300/80 font-mono">Available Surplus</div>
          </div>

          {/* Card 4: Audit Health */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-glass space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
              <span>DEPARTMENT AUDIT</span>
              <Info className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-black text-cyan-300 font-display">
              Public Ledger
            </div>
            <div className="text-[11px] text-slate-400">Monthly Statements Published</div>
          </div>

        </div>

        {/* Budget Progress Bar & Breakdown */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl space-y-8">
          
          <div>
            <div className="flex justify-between items-center text-sm font-semibold text-white mb-3">
              <span>Overall Fund Expenditure Overview</span>
              <span className="text-cyan-400 font-mono">{spentPercentage}% Spent</span>
            </div>

            <div className="h-4 w-full bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800 flex">
              {Object.entries(spentBreakdown).map(([cat, amount]) => {
                const pct = (amount / totalAssociationFund) * 100;
                const color = categoryColors[cat] || 'bg-cyan-500';
                return (
                  <div
                    key={cat}
                    style={{ width: `${pct}%` }}
                    className={`h-full ${color} transition-all duration-500`}
                    title={`${cat}: ₹${amount.toLocaleString()}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Detailed Expense Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(spentBreakdown).map(([category, amount]) => {
              const color = categoryColors[category] || 'bg-cyan-500';
              const catItems = expenses.filter(e => e.category === category);
              const totalAllocated = catItems.reduce((acc, c) => acc + c.allocatedAmount, 0);

              return (
                <div key={category} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${color}`} />
                      <span className="text-xs font-bold text-white">{category}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      ₹{amount.toLocaleString()}
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-400 flex justify-between">
                    <span>Allocated: ₹{totalAllocated.toLocaleString()}</span>
                    <span>{Math.round((amount / (totalAllocated || 1)) * 100)}% Used</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
