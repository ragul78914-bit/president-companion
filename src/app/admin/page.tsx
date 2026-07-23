'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, User, ArrowLeft } from 'lucide-react';
import AdminDashboard from '@/components/AdminDashboard';

export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedToken = localStorage.getItem('ragul_admin_jwt');
    if (savedToken) setToken(savedToken);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const cleanUser = username.trim();
    const cleanPass = password.trim();

    // Instant local validation for Wolf / 78914
    if ((cleanUser === 'Wolf' || cleanUser.toLowerCase() === 'wolf') && cleanPass === '78914') {
      const validToken = 'wolf_admin_authenticated_session_' + Date.now();
      localStorage.setItem('ragul_admin_jwt', validToken);
      setToken(validToken);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: cleanUser, password: cleanPass })
      });

      const data = await res.json();
      if (data.success && data.token) {
        setToken(data.token);
        localStorage.setItem('ragul_admin_jwt', data.token);
      } else {
        setError('Invalid Username or Password');
      }
    } catch (err) {
      setError('Invalid Username or Password');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('ragul_admin_jwt');
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4">
        <div className="text-xs text-slate-500 font-mono">Loading portal...</div>
      </div>
    );
  }

  if (token) {
    return <AdminDashboard token={token} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md space-y-6 relative z-10">
        
        {/* Return Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Main Campaign Website
        </Link>

        {/* Login Form Container */}
        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-2xl shadow-glass space-y-6">
          
          <div className="text-center space-y-2">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-neon-blue">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-black font-display text-white">Admin Command Center</h1>
            <p className="text-xs text-slate-400">Ragul Student President Election Portal</p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs text-center font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4" suppressHydrationWarning>
            <div>
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Username
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  suppressHydrationWarning
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  required
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  suppressHydrationWarning
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              suppressHydrationWarning
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-neon-blue hover:brightness-110 transition-all"
            >
              {loading ? 'Authenticating...' : 'Sign In to Admin Panel'}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
