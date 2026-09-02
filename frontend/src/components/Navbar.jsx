import React from 'react';
import { Zap, User } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, userPoints }) {
  return (
    <nav className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-black text-xl text-white shadow-lg shadow-indigo-500/30">
              N
            </div>
            <div>
              <span className="text-lg font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                N-Taskify
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                TEKNOFEST 2026
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <button onClick={() => setActiveTab('dashboard')} className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition ${activeTab === 'dashboard' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>Panel</button>
            <button onClick={() => setActiveTab('tasks')} className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition ${activeTab === 'tasks' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>Görevler</button>
            <button onClick={() => setActiveTab('leaderboard')} className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition ${activeTab === 'leaderboard' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>Liderlik</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-indigo-950/60 border border-indigo-800/50 px-3.5 py-1.5 rounded-xl shadow-inner">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
              <div className="text-right">
                <div className="text-xs text-indigo-300 font-medium leading-none">N-Puan</div>
                <div className="text-sm font-extrabold text-white leading-tight">{userPoints.toLocaleString()}</div>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
              <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                <User className="w-4 h-4" />
              </div>
              <span className="font-medium">{currentUser?.userName}</span>
            </div>
            <button
              onClick={onLogout}
              title="Çıkış Yap"
              className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-rose-400 hover:border-rose-500/40 transition"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}