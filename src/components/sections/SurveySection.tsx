'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Vote, CheckCircle2, MessageSquare, Send, Sparkles } from 'lucide-react';
import { SURVEY_QUESTIONS } from '@/lib/seedData';

export default function SurveySection() {
  const [answers, setAnswers] = useState<Record<string, string>>({
    q1: 'Yes', q2: 'Yes', q3: 'Yes', q4: 'Yes', q5: 'Yes',
    q6: '', q7: 'Yes', q8: 'Yes', q9: 'Yes', q10: 'Yes', q11: 'Yes', q12: 'Yes'
  });

  const [additionalComments, setAdditionalComments] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOptionSelect = (qId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/surveys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...answers, additionalComments })
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="survey" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 bg-slate-950/40">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Vote className="w-3.5 h-3.5" /> Direct Student Voice
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white">
            STUDENT <span className="text-gradient">SURVEY</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Shape our election agenda! Your opinions directly guide Ragul's presidential action plan for AI & DS.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 rounded-3xl bg-slate-900/90 border border-cyan-500/50 backdrop-blur-2xl text-center space-y-4 shadow-neon-blue"
          >
            <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-400/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black font-display text-white">Survey Response Recorded!</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Thank you for participating! Your feedback has been saved securely to MongoDB and will be reviewed by Ragul & the core team.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-xl bg-slate-800 text-cyan-300 font-semibold text-xs border border-slate-700 hover:bg-slate-700"
            >
              Submit Another Response
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {SURVEY_QUESTIONS.map((q, idx) => {
              const isTextInput = q.id === 'q6';

              return (
                <div
                  key={q.id}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl hover:border-cyan-500/30 transition-all space-y-4 shadow-glass"
                >
                  <div className="flex items-start gap-3">
                    <span className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-mono font-bold text-xs shrink-0">
                      #{idx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white font-sans pt-1">
                      {q.label}
                    </h3>
                  </div>

                  {isTextInput ? (
                    <input
                      type="text"
                      placeholder="Share your ideas or specific initiatives..."
                      value={answers.q6}
                      onChange={(e) => setAnswers({ ...answers, q6: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500"
                    />
                  ) : (
                    <div className="flex flex-wrap gap-3">
                      {['Yes', 'No', 'Maybe'].map((opt) => {
                        const isSelected = answers[q.id] === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleOptionSelect(q.id, opt)}
                            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                              isSelected
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-neon-cyan scale-105'
                                : 'bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Additional Comment Box */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl space-y-3">
              <label className="text-sm font-bold text-white flex items-center gap-2 font-display">
                <MessageSquare className="w-4 h-4 text-cyan-400" /> Additional Comments or Specific Feedback
              </label>
              <textarea
                rows={3}
                placeholder="Anything else you would like Ragul to know?"
                value={additionalComments}
                onChange={(e) => setAdditionalComments(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-base shadow-neon-blue hover:shadow-neon-cyan hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>Recording Response...</span>
              ) : (
                <>
                  <Send className="w-5 h-5" /> Submit Official Survey Response
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </section>
  );
}
