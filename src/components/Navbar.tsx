'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BrainCircuit, Menu, X, ShieldCheck, Vote, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Why Vote', href: '#why-vote' },
    { name: 'Vision', href: '#vision' },
    { name: 'Transparency', href: '#transparency' },
    { name: 'Survey', href: '#survey' },
    { name: 'Suggestion Box', href: '#suggestion' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#hero" className="flex items-center gap-2.5 group">
          <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 group-hover:border-cyan-400 transition-all shadow-neon-blue">
            <BrainCircuit className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <div className="font-display font-black text-lg text-white leading-none tracking-tight flex items-center gap-1.5">
              RAGUL <span className="text-gradient text-xs px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40">AI & DS</span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono">Student President 2026</div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/admin"
            className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:text-white hover:border-purple-500/50 transition-all"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> Admin
          </Link>
          <a
            href="#survey"
            className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-neon-cyan hover:brightness-110 transition-all hover:scale-105"
          >
            <Vote className="w-4 h-4" /> Vote & Take Survey
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-6 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="#survey"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-sm font-bold py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center shadow-neon-cyan"
            >
              <Sparkles className="w-4 h-4" /> Participate in Student Survey
            </a>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-center"
            >
              <ShieldCheck className="w-4 h-4 text-purple-400" /> Admin Portal Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
