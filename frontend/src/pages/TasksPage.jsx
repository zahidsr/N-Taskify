import React, { useState } from 'react';
import TaskCard from '../components/TaskCard';

export default function TasksPage({ tasks, onStartTask }) {
  const [filter, setFilter] = useState('all');
  const filteredTasks = tasks.filter(t => {
    if (filter === 'digital') return t.category === 'Dijital';
    if (filter === 'physical') return t.category === 'Fiziksel';
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-white">Görev Havuzu</h1>
          <p className="text-xs text-slate-400">Çok katmanlı doğrulamaya sahip hibrit görevler</p>
        </div>
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-1 rounded-xl self-start">
          <button onClick={() => setFilter('all')} className={`px-3 py-1 rounded-lg text-xs font-medium transition ${filter === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}>Tümü</button>
          <button onClick={() => setFilter('digital')} className={`px-3 py-1 rounded-lg text-xs font-medium transition ${filter === 'digital' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}>Dijital</button>
          <button onClick={() => setFilter('physical')} className={`px-3 py-1 rounded-lg text-xs font-medium transition ${filter === 'physical' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}>Fiziksel</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTasks.map((task) => (<TaskCard key={task.id} task={task} onStartTask={onStartTask} />))}
      </div>
    </div>
  );
}