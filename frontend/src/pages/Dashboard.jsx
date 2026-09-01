import React from 'react';
import { Zap, Users, CheckCircle, TrendingUp, ArrowRight } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import TaskCard from '../components/TaskCard';

export default function Dashboard({ userPoints, tasks, onStartTask, setActiveTab }) {
  return (
    <div className="space-y-8">
      <div className="relative rounded-3xl bg-gradient-to-r from-indigo-900/40 via-violet-900/20 to-slate-900 border border-indigo-500/20 p-6 sm:p-8 overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-400">N'Sosyal İnovasyon & İçerik Ekonomisi</span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-2 leading-tight">Etkileşimini Değere Dönüştür.</h1>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">Dijital ve fiziksel görevleri tamamlayarak N-Puan kazan, referans ağını genişlet ve ekosistem ödüllerinin kilidini aç.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Toplam N-Puan" value={userPoints.toLocaleString()} subtitle="Tüm görev kazançları" icon={Zap} color="amber" />
        <StatsCard title="Tamamlanan Görev" value="12" subtitle="Bu hafta +4 görev" icon={CheckCircle} color="emerald" />
        <StatsCard title="N-Referans Ağı" value="8 Üye" subtitle="Aktif kazanç çarpanı: 1.2x" icon={Users} color="indigo" />
        <StatsCard title="Doğrulama Skoru" value="%99.4" subtitle="Anti-bot güven derecesi" icon={TrendingUp} color="violet" />
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-white">Öne Çıkan Görevler</h2>
            <p className="text-xs text-slate-400">Hemen başlayabileceğin hibrit görevler</p>
          </div>
          <button onClick={() => setActiveTab('tasks')} className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">Tümünü Gör <ArrowRight className="w-3.5 h-3.5" /></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tasks.slice(0, 2).map((task) => (<TaskCard key={task.id} task={task} onStartTask={onStartTask} />))}
        </div>
      </div>
    </div>
  );
}