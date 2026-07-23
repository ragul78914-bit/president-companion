'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Send, CheckCircle2, MessageSquare, ThumbsUp, Sparkles, Filter } from 'lucide-react';

interface Suggestion {
  _id: string;
  category: string;
  title: string;
  description: string;
  status: string;
  upvotes: number;
  createdAt: string;
}

export default function SuggestionSection() {
  const [category, setCategory] = useState('Suggestions');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [recentSuggestions, setRecentSuggestions] = useState<Suggestion[]>([]);

  const fetchSuggestions = () => {
    fetch('/api/suggestions')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setRecentSuggestions(data.data);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;
    setLoading(true);

    try {
      const res = await fetch('/api/suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, title, description })
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setTitle('');
        setDescription('');
        fetchSuggestions();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    'Suggestions', 'Complaints', 'Ideas', 'Problems', 'Feature Requests', 'Anonymous Feedback'
  ];

  return (
    <section id="suggestion" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5" /> 100% Anonymous & Secure
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
            ANONYMOUS <span className="text-gradient-purple">SUGGESTION BOX</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            No login required! Voice your complaints, ideas, suggestions, or grievances freely. We listen, act, and resolve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Form Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-glass space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="text-lg font-bold text-white font-display">Submit Secret Entry</h3>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> IP Untracked
                </span>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Entry Submitted Anonymously!</h4>
                  <p className="text-xs text-slate-400">Your note has been added to the candidate action queue.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-cyan-300 font-semibold text-xs border border-slate-700"
                  >
                    Submit Another Feedback
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Category Selector */}
                  <div>
                    <label className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      Category
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setCategory(cat)}
                          className={`px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all ${
                            category === cat
                              ? 'bg-purple-900/60 border border-purple-500 text-white shadow-neon-purple'
                              : 'bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Title / Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lab Computer System Upgrades..."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Detailed Feedback / Idea / Complaint
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe the issue or initiative in detail..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold text-sm shadow-neon-purple hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Send Anonymously
                  </button>
                </form>
              )}

            </div>
          </div>

          {/* Right Live Stream Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-400" /> Recent Student Voice Log
              </h3>
              <span className="text-xs font-mono text-slate-400">Live Updates</span>
            </div>

            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
              {recentSuggestions.map((item) => (
                <div
                  key={item._id}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl space-y-2 hover:border-purple-500/30 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300">
                      {item.category}
                    </span>
                    <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                      item.status === 'Resolved'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                        : item.status === 'In Review'
                        ? 'bg-amber-950 text-amber-400 border border-amber-500/30'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white font-display">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
