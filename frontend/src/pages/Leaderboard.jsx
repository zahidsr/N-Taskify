import React from 'react';
import { Zap } from 'lucide-react';

export default function Leaderboard() {
  const leaders = [
    { rank: 1, name: "Ahmet K.", points: "14,850", tasks: 48, badge: "Altın İnovatör" },
    { rank: 2, name: "Zeynep S.", points: "12,200", tasks: 39, badge: "Gümüş Kaşif" },
    { rank: 3, name: "Mert Y.", points: "10,950", tasks: 34, badge: "Bronz Katkıcı" },
    { rank: 4, name: "Samed Ç.", points: "8,450", tasks: 26, badge: "Aktif Görevci" },
    { rank: 5, name: "Elif B.", points: "7,300", tasks: 21, badge: "Çaylak" },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-black text-white">Liderlik Sıralaması</h1>
        <p className="text-xs text-slate-400">En yüksek N-Puan toplayan ve topluluk katkısı sunan üyeler</p>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="divide-y divide-slate-800">
          {leaders.map((user) => (
            <div key={user.rank} className="p-4 flex items-center justify-between hover:bg-slate-800/40 transition">
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm ${user.rank === 1 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : user.rank === 2 ? 'bg-slate-300/20 text-slate-200 border border-slate-400/30' : user.rank === 3 ? 'bg-amber-700/20 text-amber-600 border border-amber-700/30' : 'text-slate-400'}`}>
                  {user.rank}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{user.name}</div>
                  <div className="text-[11px] text-slate-400">{user.badge} • {user.tasks} görev</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 font-extrabold text-amber-400 text-sm">
                <Zap className="w-3.5 h-3.5 fill-amber-400" />
                <span>{user.points}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}