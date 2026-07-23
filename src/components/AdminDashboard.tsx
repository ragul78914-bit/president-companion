'use client';

import { useState, useEffect } from 'react';
import { 
  ShieldCheck, LogOut, BarChart3, MessageSquare, DollarSign, 
  Trash2, CheckCircle2, RefreshCw, FileSpreadsheet, Vote, UserCheck, Eye, X, AlertTriangle 
} from 'lucide-react';

interface AdminDashboardProps {
  token: string;
  onLogout: () => void;
}

export default function AdminDashboard({ token, onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'votes' | 'surveys' | 'suggestions' | 'expenses'>('votes');

  // Data states
  const [surveys, setSurveys] = useState<any[]>([]);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [expenses, setExpenses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Selected student details modal state
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);

  const questionLabels: Record<string, string> = {
    q1: 'Do you want more coding, aptitude, and placement training sessions?',
    q2: 'Do you feel the syllabus is updated and industry relevant?',
    q3: 'Do you think there should be more cultural events and festivals?',
    q4: 'Do you feel students have enough opportunities to showcase their talents?',
    q5: 'Would you like an anonymous platform to report problems and suggestions?',
    q6: 'Do you want our department to be more advanced than other departments?',
    q7: 'Do you want student clubs to run more effectively?',
    q8: 'Do you need more Industrial Visits?',
    q9: 'What initiatives would you like the student president to implement?',
    q10: 'What is one thing you would like to improve in our department?'
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [survRes, sugRes, expRes] = await Promise.all([
        fetch('/api/surveys', { cache: 'no-store' }).then(r => r.json()),
        fetch('/api/suggestions', { cache: 'no-store' }).then(r => r.json()),
        fetch('/api/expenses', { cache: 'no-store' }).then(r => r.json())
      ]);

      if (survRes.success) setSurveys(survRes.data || []);
      if (sugRes.success) setSuggestions(sugRes.data || []);
      if (expRes.success) setExpenses(expRes.data || []);
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Delete survey response
  const handleDeleteSurvey = async (id: string) => {
    if (!confirm('Are you sure you want to delete this voter response?')) return;
    try {
      const res = await fetch(`/api/surveys?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setSurveys(prev => prev.filter(item => item._id !== id));
        if (selectedStudent && selectedStudent._id === id) setSelectedStudent(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Update suggestion status
  const handleUpdateSuggestionStatus = async (id: string, status: string) => {
    try {
      const res = await fetch('/api/suggestions', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status })
      });
      if (res.ok) {
        setSuggestions(prev => prev.map(s => s._id === id ? { ...s, status } : s));
      }
    } catch (err) {
      console.error(err);
    }
  };

  // CSV Export utility
  const exportToCSV = (filename: string, rows: object[]) => {
    if (!rows.length) return;
    const separator = ',';
    const keys = Object.keys(rows[0]);
    const csvContent =
      keys.join(separator) +
      '\n' +
      rows
        .map(row => {
          return keys
            .map(k => {
              let cell = (row as any)[k] === null || (row as any)[k] === undefined ? '' : (row as any)[k];
              cell = cell instanceof Date ? cell.toLocaleString() : cell.toString().replace(/"/g, '""');
              if (cell.search(/("|,|\n)/g) >= 0) cell = `"${cell}"`;
              return cell;
            })
            .join(separator);
        })
        .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const totalVotesCount = surveys.length;
  const yesVotesCount = surveys.filter(s => s.voted === 'Yes' || !s.voted).length;
  const noVotesCount = surveys.filter(s => s.voted === 'No').length;

  return (
    <div className="min-h-screen bg-[#030712] text-white p-4 sm:p-8 font-sans relative">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Admin Header */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-glass">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-cyan-950 border border-cyan-500/40 text-cyan-400">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-black font-display text-white">Wolf Command Portal</h1>
              <p className="text-xs text-cyan-400 font-mono">Ragul President Election Audit & Q/A Desk</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-bold hover:bg-rose-900/80 transition-all"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>

        {/* Voting & Survey Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>TOTAL VOTES</span>
              <Vote className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-4xl font-black text-white font-mono">{totalVotesCount}</div>
            <div className="text-xs text-cyan-400">Student Voters</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>'YES' VOTES</span>
              <UserCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-4xl font-black text-emerald-400 font-mono">{yesVotesCount}</div>
            <div className="text-xs text-emerald-300">
              {totalVotesCount > 0 ? Math.round((yesVotesCount / totalVotesCount) * 100) : 0}% Support
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>'NO' VOTES</span>
              <AlertTriangle className="w-4 h-4 text-rose-400" />
            </div>
            <div className="text-4xl font-black text-rose-400 font-mono">{noVotesCount}</div>
            <div className="text-xs text-rose-300">Hesitancy / Improvement Notes</div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>SURVEY RESPONSES</span>
              <BarChart3 className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-4xl font-black text-purple-400 font-mono">{surveys.length}</div>
            <div className="text-xs text-purple-300">Detailed Q/A Logs</div>
          </div>
        </div>

        {/* Tab Navigation & CSV Export Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'votes', label: `Voter Registry (${surveys.length})`, icon: Vote },
              { id: 'surveys', label: `Survey Q/A Responses (${surveys.length})`, icon: BarChart3 },
              { id: 'suggestions', label: `Anonymous Suggestions (${suggestions.length})`, icon: MessageSquare },
              { id: 'expenses', label: `Department Expenses (${expenses.length})`, icon: DollarSign }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-neon-cyan'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" /> {tab.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            {surveys.length > 0 && (
              <button
                onClick={() => exportToCSV('student_voters_registry', surveys)}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-300 text-xs font-semibold hover:border-cyan-500/40"
              >
                <FileSpreadsheet className="w-4 h-4" /> Export Votes & Q/A CSV
              </button>
            )}
          </div>
        </div>

        {/* Tab 1: Voter Registry */}
        {activeTab === 'votes' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-white font-display">Student Voters & Response Log</h2>
            
            {surveys.length === 0 ? (
              <div className="p-12 rounded-2xl border border-slate-800 bg-slate-900/40 text-center space-y-2">
                <Vote className="w-8 h-8 text-slate-600 mx-auto" />
                <h3 className="text-base font-bold text-slate-300">No Votes Logged Yet</h3>
                <p className="text-xs text-slate-500">Real student votes will appear here live when students vote and complete the Q/A survey.</p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
                <table className="w-full text-left text-xs font-sans">
                  <thead className="bg-slate-950 text-slate-400 uppercase font-mono border-b border-slate-800">
                    <tr>
                      <th className="p-4">#</th>
                      <th className="p-4">Student Name</th>
                      <th className="p-4">Year of Study</th>
                      <th className="p-4">Vote Choice</th>
                      <th className="p-4">Reason for 'No' / Improvement Feedback</th>
                      <th className="p-4">Date</th>
                      <th className="p-4 text-center">Full Q&A Details</th>
                      <th className="p-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    {surveys.map((item, idx) => (
                      <tr key={item._id || idx} className="hover:bg-slate-800/40">
                        <td className="p-4 font-mono font-bold text-cyan-400">{idx + 1}</td>
                        <td className="p-4 font-bold text-white">{item.studentName || 'Student Voter'}</td>
                        <td className="p-4 font-mono text-cyan-300">{item.studentYear || 'Final Year'}</td>
                        <td className="p-4">
                          {item.voted === 'No' ? (
                            <span className="px-2.5 py-1 rounded bg-rose-950 text-rose-300 font-bold border border-rose-500/30">
                              No
                            </span>
                          ) : (
                            <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 font-bold border border-emerald-500/30">
                              Yes
                            </span>
                          )}
                        </td>
                        <td className="p-4 max-w-xs truncate font-mono text-slate-300">
                          {item.voted === 'No' ? (
                            <span className="text-rose-300">{item.noReason || 'No specific reason entered'}</span>
                          ) : (
                            <span className="text-slate-500">-</span>
                          )}
                        </td>
                        <td className="p-4 font-mono text-slate-400">
                          {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'Recent'}
                        </td>
                        <td className="p-4 text-center">
                          <button
                            onClick={() => setSelectedStudent(item)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 text-xs font-medium transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" /> View Q/A Details
                          </button>
                        </td>
                        <td className="p-4 text-center">
                          <button
                            onClick={() => handleDeleteSurvey(item._id)}
                            className="p-2 rounded-xl bg-rose-950/80 hover:bg-rose-900 border border-rose-500/40 text-rose-300 transition-colors"
                            title="Delete Voter Response"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Detailed Survey Q&A Breakdown */}
        {activeTab === 'surveys' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-white font-display">10-Question Survey Q/A Breakdown</h2>
            {surveys.length === 0 ? (
              <div className="p-12 rounded-2xl border border-slate-800 bg-slate-900/40 text-center text-xs text-slate-500">
                No survey Q/A responses recorded yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {surveys.map((item, idx) => (
                  <div key={item._id || idx} className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div>
                        <h3 className="text-base font-bold text-white">{item.studentName}</h3>
                        <span className="text-xs text-cyan-400 font-mono">{item.studentYear} • Vote: {item.voted || 'Yes'}</span>
                      </div>
                      <button
                        onClick={() => setSelectedStudent(item)}
                        className="flex items-center gap-1 text-xs text-purple-400 hover:underline"
                      >
                        <Eye className="w-3.5 h-3.5" /> Expand Q/A
                      </button>
                    </div>

                    {item.voted === 'No' && item.noReason && (
                      <div className="p-3 rounded-xl bg-rose-950/70 border border-rose-500/30 space-y-1">
                        <span className="text-xs text-rose-300 font-bold block">Reason for 'No' / Improvement Request:</span>
                        <p className="text-xs text-slate-200">{item.noReason}</p>
                      </div>
                    )}

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                        <span className="text-slate-400 font-semibold block mb-0.5">Q9 Initiatives Requested:</span>
                        <span className="text-white">{item.q9 || 'None specified'}</span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                        <span className="text-slate-400 font-semibold block mb-0.5">Q10 Improvement Idea:</span>
                        <span className="text-white">{item.q10 || 'None specified'}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Anonymous Suggestions */}
        {activeTab === 'suggestions' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-white font-display">Anonymous Suggestion Desk Queue</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestions.map((sug) => (
                <div key={sug._id} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-500/30">
                      {sug.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {['Pending', 'In Review', 'Resolved'].map((st) => (
                        <button
                          key={st}
                          onClick={() => handleUpdateSuggestionStatus(sug._id, st)}
                          className={`text-[10px] font-mono px-2 py-0.5 rounded transition-all ${
                            sug.status === st
                              ? 'bg-cyan-500 text-slate-950 font-bold'
                              : 'bg-slate-950 text-slate-400 hover:text-white'
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white">{sug.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{sug.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Expenses */}
        {activeTab === 'expenses' && (
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
            <h3 className="text-lg font-bold text-white">Financial Transparency Log Connected</h3>
            <p className="text-xs text-slate-400">Expenses synced with MongoDB ledger.</p>
          </div>
        )}

      </div>

      {/* Student Detailed Q&A Response Modal */}
      {selectedStudent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
          onClick={() => setSelectedStudent(null)}
        >
          <div
            className="max-w-2xl w-full rounded-3xl bg-slate-900 border border-cyan-500/40 p-6 space-y-6 shadow-2xl relative max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-black font-display text-white">{selectedStudent.studentName}</h3>
                <p className="text-xs font-mono">
                  {selectedStudent.studentYear} • Voted: 
                  <span className={selectedStudent.voted === 'No' ? 'text-rose-400 font-bold ml-1' : 'text-emerald-400 font-bold ml-1'}>
                    {selectedStudent.voted || 'Yes'}
                  </span>
                </p>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="p-2 rounded-full bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {selectedStudent.voted === 'No' && selectedStudent.noReason && (
              <div className="p-4 rounded-2xl bg-rose-950/80 border border-rose-500/40 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-rose-300 font-bold uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" /> Reason for Voting 'No' / Requested Improvements:
                </div>
                <p className="text-sm text-white leading-relaxed">{selectedStudent.noReason}</p>
              </div>
            )}

            <div className="space-y-4">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">Complete 10-Question Survey Record</h4>
              
              {Object.keys(questionLabels).map((key, qIdx) => (
                <div key={key} className="p-4 rounded-xl bg-slate-950/90 border border-slate-800/80 space-y-1.5">
                  <div className="text-xs font-semibold text-slate-300">
                    <span className="text-cyan-400 font-mono font-bold mr-1.5">Q{qIdx + 1}.</span>
                    {questionLabels[key]}
                  </div>
                  <div className="text-xs font-bold text-white pl-5 font-mono">
                    ➜ {selectedStudent[key] ? selectedStudent[key] : 'No answer provided'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
