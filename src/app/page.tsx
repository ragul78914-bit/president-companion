'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Vote, Sparkles, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function MinimalCampaignApp() {
  // Student identification state
  const [studentName, setStudentName] = useState('');
  const [studentYear, setStudentYear] = useState('Final Year');

  // Voting & Hesitation Reasons state
  const [selectedVote, setSelectedVote] = useState<'Yes' | 'No' | null>(null);
  const [noReason, setNoReason] = useState('');
  const [showNoReasonBox, setShowNoReasonBox] = useState(false);

  // Survey Q/A state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({
    q1: '', q2: '', q3: '', q4: '', q5: '',
    q6: '', q7: '', q8: '', q9: '', q10: ''
  });

  // Submission states
  const [hasVoted, setHasVoted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions = [
    { id: 'q1', text: 'Do you want more coding, aptitude, and placement training sessions?', type: 'boolean' },
    { id: 'q2', text: 'Do you feel the syllabus is updated and industry relevant?', type: 'boolean' },
    { id: 'q3', text: 'Do you think there should be more cultural events and festivals?', type: 'boolean' },
    { id: 'q4', text: 'Do you feel students have enough opportunities to showcase their talents?', type: 'boolean' },
    { id: 'q5', text: 'Would you like an anonymous platform to report problems and suggestions?', type: 'boolean' },
    { id: 'q6', text: 'Do you want our department to be more advanced than other departments?', type: 'boolean' },
    { id: 'q7', text: 'Do you want student clubs to run more effectively?', type: 'boolean' },
    { id: 'q8', text: 'Do you need more Industrial Visits?', type: 'boolean' },
    { id: 'q9', text: 'What initiatives would you like the student president to implement?', type: 'text' },
    { id: 'q10', text: 'What is one thing you would like to improve in our department?', type: 'text' },
  ];

  const safeQuestionIndex = Math.max(0, Math.min(currentQuestion, questions.length - 1));
  const activeQuestion = questions[safeQuestionIndex] || questions[0];

  const visionPoints = [
    'Better placement and coding opportunities.',
    'More technical and cultural events.',
    'More Industrial Visits.',
    'Active student clubs.',
    'Better student representation.',
    'A stronger AI & DS community.'
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectOption = (qId: string, val: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: val }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      scrollToSection('about');
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      scrollToSection('about');
    }
  };

  const handleVoteClick = (choice: 'Yes' | 'No') => {
    setSelectedVote(choice);
    if (choice === 'No') {
      setShowNoReasonBox(true);
    } else {
      setShowNoReasonBox(false);
      executeSubmission('Yes', '');
    }
  };

  const executeSubmission = async (voteChoice: string, reasonText: string) => {
    setIsSubmitting(true);
    try {
      await fetch('/api/surveys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName: studentName.trim() || 'Student Voter',
          studentYear,
          voted: voteChoice,
          noReason: reasonText.trim(),
          ...answers
        })
      });
      setHasVoted(true);
    } catch (err) {
      console.error(err);
      setHasVoted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      
      {/* Minimal Dark Neon Ambient Glow Background */}
      <div className="minimal-neon-bg-primary" />
      <div className="minimal-neon-bg-secondary" />
      <div className="cyber-grid-overlay" />

      {/* Floating Sleek Mobile Header */}
      <header className="fixed top-0 inset-x-0 z-40 px-4 py-3 bg-black/60 backdrop-blur-md border-b border-neutral-900/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-neutral-300 uppercase">Ragul S • AI & DS</span>
        </div>
        <button
          onClick={() => scrollToSection('thank-you')}
          className="px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-mono border border-white/20 hover:bg-white hover:text-black transition-all flex items-center gap-1"
        >
          <Vote className="w-3 h-3 text-cyan-400" /> Vote Now
        </button>
      </header>

      <div className="relative z-10 pt-12">
        
        {/* ========================================================= */}
        {/* SECTION 1: WELCOME SCREEN */}
        {/* ========================================================= */}
        <section
          id="welcome"
          className="min-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 text-center relative py-12"
        >
          <div className="max-w-2xl w-full mx-auto space-y-6 sm:space-y-8">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.2 }}
            >
              <span className="px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest inline-flex items-center gap-1.5 mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Student President Candidate 2026
              </span>
              <h1 className="text-5xl sm:text-7xl font-extralight tracking-tight font-sans text-white">
                Hi.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.2 }}
            >
              <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-neutral-200">
                I'm Ragul.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 2.2 }}
              className="pt-2 sm:pt-4"
            >
              <p className="text-base sm:text-2xl text-neutral-400 font-light max-w-xl mx-auto leading-relaxed px-2">
                Before asking for your support, I'd like to know what you think.
              </p>
            </motion.div>

            {/* Let's Begin -> Clicking immediately shows Student Survey Q/A */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 3.2 }}
              className="pt-6 sm:pt-8"
            >
              <button
                onClick={() => scrollToSection('survey')}
                className="w-full sm:w-auto px-10 py-4 bg-white text-black font-medium text-base sm:text-sm rounded-full tracking-wide hover:bg-cyan-300 transition-all duration-300 transform active:scale-95 shadow-lg shadow-cyan-500/10 inline-flex items-center justify-center gap-2"
              >
                Let's Begin <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: STUDENT SURVEY Q/A */}
        {/* ========================================================= */}
        <section
          id="survey"
          className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20 border-t border-neutral-900/80"
        >
          <div className="max-w-xl w-full mx-auto space-y-8 sm:space-y-12">
            
            {/* Progress Indicator */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs text-neutral-500 font-mono tracking-widest uppercase">
                <span>Question {safeQuestionIndex + 1} of {questions.length}</span>
                <span className="text-cyan-400 font-bold">{Math.round(((safeQuestionIndex + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((safeQuestionIndex + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

            {/* Minimalist Question Card Container */}
            <div className="min-h-[260px] sm:min-h-[280px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={safeQuestionIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 sm:space-y-8"
                >
                  <h3 className="text-xl sm:text-3xl font-light text-white leading-snug">
                    {activeQuestion.text}
                  </h3>

                  {activeQuestion.type === 'boolean' ? (
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                      <button
                        onClick={() => handleSelectOption(activeQuestion.id, 'Yes')}
                        className={`py-4 rounded-2xl border text-base sm:text-sm font-medium transition-all duration-300 ${
                          answers[activeQuestion.id] === 'Yes'
                            ? 'bg-white text-black border-white shadow-md'
                            : 'border-neutral-800 text-neutral-300 hover:border-cyan-500/50 hover:bg-neutral-950/80 active:scale-95'
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => handleSelectOption(activeQuestion.id, 'No')}
                        className={`py-4 rounded-2xl border text-base sm:text-sm font-medium transition-all duration-300 ${
                          answers[activeQuestion.id] === 'No'
                            ? 'bg-white text-black border-white shadow-md'
                            : 'border-neutral-800 text-neutral-300 hover:border-cyan-500/50 hover:bg-neutral-950/80 active:scale-95'
                        }`}
                      >
                        No
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4 pt-2">
                      <textarea
                        rows={3}
                        placeholder="Type your response here..."
                        value={answers[activeQuestion.id] || ''}
                        onChange={(e) =>
                          setAnswers({
                            ...answers,
                            [activeQuestion.id]: e.target.value
                          })
                        }
                        className="w-full px-4 py-3.5 rounded-2xl bg-neutral-950/90 border border-neutral-800 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-cyan-500/70 resize-none font-light"
                      />
                      
                      <button
                        onClick={handleNextQuestion}
                        className="w-full py-4 bg-white text-black text-sm font-medium rounded-2xl hover:bg-cyan-300 transition-all duration-300 active:scale-95"
                      >
                        {safeQuestionIndex === questions.length - 1 ? 'Save & Continue to About Ragul' : 'Continue'}
                      </button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quick Step Navigation */}
            <div className="flex justify-between items-center pt-4 sm:pt-6 text-xs text-neutral-500 font-mono">
              <button
                onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                disabled={safeQuestionIndex === 0}
                className="disabled:opacity-20 hover:text-white transition-colors py-2 px-3 rounded-lg bg-neutral-950"
              >
                ← Previous
              </button>

              {safeQuestionIndex < questions.length - 1 ? (
                <button
                  onClick={handleNextQuestion}
                  className="hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg bg-neutral-950"
                >
                  Skip / Next →
                </button>
              ) : (
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-cyan-400 hover:underline transition-all font-sans font-medium py-2 px-3"
                >
                  Go to About Ragul ↓
                </button>
              )}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: ABOUT RAGUL */}
        {/* ========================================================= */}
        <section
          id="about"
          className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 border-t border-neutral-900/80"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl w-full mx-auto space-y-10 sm:space-y-12"
          >
            {/* Clean Key Info List */}
            <div className="space-y-5 border-b border-neutral-900/80 pb-10">
              
              <div className="flex justify-between items-baseline border-b border-neutral-900/80 pb-3">
                <span className="text-xs text-neutral-500 font-mono uppercase tracking-widest">NAME</span>
                <span className="text-xl sm:text-2xl font-light text-white font-sans">Ragul S</span>
              </div>

              <div className="flex justify-between items-baseline border-b border-neutral-900/80 pb-3">
                <span className="text-xs text-neutral-500 font-mono uppercase tracking-widest">DEPARTMENT</span>
                <span className="text-xs sm:text-base font-light text-neutral-200 text-right">Artificial Intelligence and Data Science</span>
              </div>

              <div className="flex justify-between items-baseline border-b border-neutral-900/80 pb-3">
                <span className="text-xs text-neutral-500 font-mono uppercase tracking-widest">YEAR</span>
                <span className="text-sm sm:text-base font-light text-neutral-200">Final Year</span>
              </div>

              <div className="flex justify-between items-baseline pb-1">
                <span className="text-xs text-neutral-500 font-mono uppercase tracking-widest">ROLE</span>
                <span className="text-sm sm:text-base font-light text-cyan-300 font-medium">President</span>
              </div>

            </div>

            {/* Statement */}
            <div className="pt-1 text-center">
              <blockquote className="text-lg sm:text-2xl font-light text-neutral-300 italic leading-relaxed max-w-lg mx-auto">
                "I believe leadership begins with listening. Every student's opinion matters, and every idea deserves an opportunity."
              </blockquote>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => scrollToSection('vision')}
                className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
              >
                Continue to My Vision ↓
              </button>
            </div>
          </motion.div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: MY VISION */}
        {/* ========================================================= */}
        <section
          id="vision"
          className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 border-t border-neutral-900/80"
        >
          <div className="max-w-2xl w-full mx-auto space-y-10 sm:space-y-16">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-2"
            >
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
                My Vision
              </h2>
            </motion.div>

            <div className="space-y-4 sm:space-y-6">
              {visionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 sm:p-6 rounded-2xl border border-neutral-900 bg-neutral-950/60 flex items-center gap-4 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <span className="text-xs font-mono text-cyan-400 font-bold shrink-0">0{index + 1}</span>
                  <p className="text-base sm:text-xl font-light text-neutral-200">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center pt-4">
              <button
                onClick={() => scrollToSection('thank-you')}
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-medium text-sm rounded-full tracking-wide hover:bg-cyan-300 transition-all"
              >
                Continue to Thank You ↓
              </button>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: THANK YOU & BOTTOM CAST YOUR VOTE */}
        {/* ========================================================= */}
        <section
          id="thank-you"
          className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 border-t border-neutral-900/80 text-center relative"
        >
          <div className="max-w-xl mx-auto space-y-8 sm:space-y-10">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <h2 className="text-4xl sm:text-6xl font-light text-white tracking-tight">
                Thank you.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg sm:text-2xl text-neutral-300 font-light">
                Your opinion matters.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-sm sm:text-lg text-neutral-400 font-light max-w-md mx-auto leading-relaxed px-2">
                This campaign is about building something better together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-neutral-400 font-mono text-sm tracking-widest uppercase"
            >
              - Ragul S
            </motion.div>

            {/* Bottom Cast Your Vote Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-6 space-y-6 border-t border-neutral-900/80"
            >
              {hasVoted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 sm:p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-3 shadow-2xl"
                >
                  <div className="w-12 h-12 rounded-full border border-cyan-500/50 mx-auto flex items-center justify-center text-cyan-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-white">
                    {selectedVote === 'Yes' ? 'Vote & Response Recorded!' : 'Feedback & Response Saved!'}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md mx-auto">
                    Thank you {studentName ? studentName : 'Student'} ({studentYear})! Your response and feedback have been recorded.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-6 max-w-md mx-auto p-5 sm:p-6 rounded-3xl bg-neutral-950/60 border border-neutral-900">
                  
                  <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                    Cast Your Vote
                  </h3>

                  {/* Student Name & Year Inputs */}
                  <div className="space-y-4 text-left">
                    <div>
                      <label className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                        Student Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name..."
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-cyan-500/60 font-light"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                        Year of Study
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['1st Year', '2nd Year', '3rd Year', 'Final Year'].map((yr) => (
                          <button
                            key={yr}
                            type="button"
                            onClick={() => setStudentYear(yr)}
                            className={`py-2.5 rounded-xl text-xs font-medium transition-all ${
                              studentYear === yr
                                ? 'bg-white text-black font-semibold'
                                : 'bg-black border border-neutral-800 text-neutral-400 hover:text-white'
                            }`}
                          >
                            {yr}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Will you vote for me? */}
                  <div className="pt-2 space-y-4">
                    <h3 className="text-lg sm:text-xl font-light text-neutral-200">
                      Will you vote for me?
                    </h3>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-xs mx-auto">
                      <button
                        onClick={() => handleVoteClick('Yes')}
                        disabled={isSubmitting}
                        className={`py-4 font-medium text-sm rounded-full tracking-wide transition-all duration-300 transform active:scale-95 shadow-lg ${
                          selectedVote === 'Yes' && !showNoReasonBox
                            ? 'bg-emerald-400 text-black shadow-emerald-500/20'
                            : 'bg-white text-black hover:bg-cyan-300'
                        }`}
                      >
                        Yes
                      </button>

                      <button
                        onClick={() => handleVoteClick('No')}
                        disabled={isSubmitting}
                        className={`py-4 font-medium text-sm rounded-full tracking-wide transition-all duration-300 transform active:scale-95 shadow-lg ${
                          showNoReasonBox
                            ? 'bg-rose-500 text-white shadow-rose-500/30'
                            : 'bg-neutral-900 border border-neutral-700 text-neutral-300 hover:bg-rose-950 hover:text-rose-300'
                        }`}
                      >
                        No
                      </button>
                    </div>

                    {/* Reasons Box if Student Selects 'No' */}
                    <AnimatePresence>
                      {showNoReasonBox && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-4 space-y-3 text-left border-t border-neutral-800"
                        >
                          <div className="flex items-start gap-2 text-rose-300 text-xs font-light">
                            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                            <span>Could you share why you're hesitant, and what I can do to make improvements?</span>
                          </div>

                          <textarea
                            rows={3}
                            placeholder="Please tell me why you wouldn't vote for me and what changes/improvements I should make..."
                            value={noReason}
                            onChange={(e) => setNoReason(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-black border border-rose-900/60 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-rose-500 font-light resize-none"
                          />

                          <button
                            onClick={() => executeSubmission('No', noReason)}
                            disabled={isSubmitting}
                            className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white font-medium text-xs rounded-xl transition-all disabled:opacity-50"
                          >
                            {isSubmitting ? 'Saving Feedback...' : 'Submit Reason & Record Vote'}
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>

                </div>
              )}
            </motion.div>

            {/* Admin Portal Link */}
            <div className="pt-8 text-xs font-mono text-neutral-600">
              <Link href="/admin" className="hover:text-cyan-400 transition-colors">
                [ Admin Portal Login ]
              </Link>
            </div>

          </div>
        </section>

      </div>

    </div>
  );
}
