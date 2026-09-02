import React, { useState } from 'react';
import { X, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';
import { apiService } from '../services/api';

export default function VerificationModal({ task, isOpen, onClose, onComplete }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  if (!isOpen || !task) return null;

  const handleVerify = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await apiService.completeTask(task.id);
      setResult(response);
      setSuccess(true);
      setTimeout(() => {
        onComplete(response.newBalance);
        setSuccess(false);
        setResult(null);
        onClose();
      }, 1200);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 relative shadow-2xl">
        <button onClick={onClose} className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"><X className="w-5 h-5" /></button>
        <div className="text-center mt-2">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-4"><ShieldCheck className="w-7 h-7" /></div>
          <h3 className="text-xl font-bold text-white">{task.title}</h3>
          <p className="text-xs text-slate-400 mt-1.5">{task.description}</p>
        </div>
        <div className="my-6 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
          <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Doğrulama Yöntemi</div>
          <div className="text-sm font-bold text-indigo-400 mt-1">{task.verificationMethod}</div>
          <p className="text-[11px] text-slate-400 mt-2">Katmanlı anti-bot ve doğrulama motoru simüle ediliyor...</p>
        </div>
        {success ? (
          <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-semibold text-sm">+{result?.pointsAwarded ?? task.rewardPoints} N-Puan Kazanıldı!</span>
          </div>
        ) : (
          <>
            {error && (
              <div className="mb-3 text-xs text-rose-300 bg-rose-950/40 border border-rose-800/40 rounded-xl px-3 py-2 text-center">
                {error}
              </div>
            )}
            <button onClick={handleVerify} disabled={loading} className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white font-semibold text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30">
              {loading ? (<><Loader2 className="w-4 h-4 animate-spin" /><span>Doğrulanıyor...</span></>) : (<span>Doğrula ve N-Puanı Al</span>)}
            </button>
          </>
        )}
      </div>
    </div>
  );
}