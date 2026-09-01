import React from 'react';
import { QrCode, PlayCircle, Share2, MapPin, ShieldCheck } from 'lucide-react';

export default function TaskCard({ task, onStartTask }) {
  const getIcon = (type) => {
    switch(type) {
      case 'qr': return <QrCode className="w-5 h-5 text-emerald-400" />;
      case 'video': return <PlayCircle className="w-5 h-5 text-indigo-400" />;
      case 'social': return <Share2 className="w-5 h-5 text-violet-400" />;
      default: return <MapPin className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 transition-all rounded-2xl p-5 flex flex-col justify-between group shadow-sm hover:shadow-indigo-500/10">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`text-xs px-2.5 py-1 rounded-lg font-medium border ${task.category === 'Fiziksel' ? 'bg-emerald-950/50 text-emerald-300 border-emerald-800/40' : 'bg-indigo-950/50 text-indigo-300 border-indigo-800/40'}`}>
            {task.category} Görev
          </span>
          <span className="text-xs font-bold text-amber-400 bg-amber-950/40 border border-amber-800/40 px-2.5 py-1 rounded-lg">
            +{task.rewardPoints} N-Puan
          </span>
        </div>
        <div className="flex items-start gap-3 mt-2">
          <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50 mt-1">
            {getIcon(task.type)}
          </div>
          <div>
            <h4 className="font-semibold text-white group-hover:text-indigo-300 transition text-base">{task.title}</h4>
            <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">{task.description}</p>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-1 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
          <span>{task.verificationMethod}</span>
        </div>
        <button onClick={() => onStartTask(task)} className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition shadow-md shadow-indigo-600/20">
          Görevi Başlat
        </button>
      </div>
    </div>
  );
}