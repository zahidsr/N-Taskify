import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import TasksPage from './pages/TasksPage';
import Leaderboard from './pages/Leaderboard';
import AuthPage from './pages/AuthPage';
import VerificationModal from './components/VerificationModal';
import { apiService, authStorage } from './services/api';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userPoints, setUserPoints] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    async function restoreSession() {
      const me = await apiService.getMe();
      if (me) {
        setCurrentUser(me);
        setUserPoints(me.balance ?? 0);
      }
      setAuthChecked(true);
    }
    restoreSession();
  }, []);

  const loadTasks = async () => {
    const data = await apiService.getTasks();
    setTasks(data);
  };

  useEffect(() => {
    if (!currentUser) return;
    loadTasks();
  }, [currentUser]);

  const handleStartTask = (task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  const handleCompleteTask = (newBalance) => {
    setUserPoints(newBalance);
    loadTasks();
  };

  const handleAuthenticated = (user) => {
    setCurrentUser(user);
    setUserPoints(user.balance ?? 0);
  };

  const handleLogout = () => {
    authStorage.clearToken();
    setCurrentUser(null);
    setUserPoints(0);
    setTasks([]);
  };

  if (!authChecked) return null;

  if (!currentUser) {
    return <AuthPage onAuthenticated={handleAuthenticated} />;
  }

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} userPoints={userPoints} currentUser={currentUser} onLogout={handleLogout} />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (<Dashboard userPoints={userPoints} tasks={tasks} onStartTask={handleStartTask} setActiveTab={setActiveTab} />)}
        {activeTab === 'tasks' && (<TasksPage tasks={tasks} onStartTask={handleStartTask} />)}
        {activeTab === 'leaderboard' && (<Leaderboard />)}
      </main>
      <VerificationModal task={selectedTask} isOpen={modalOpen} onClose={() => setModalOpen(false)} onComplete={handleCompleteTask} />
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-400">
        N-Taskify © 2026 — TEKNOFEST N'Sosyal İnovasyon & Oyunlaştırılmış İçerik Ekonomisi
      </footer>
    </div>
  );
}