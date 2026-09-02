import React, { useState } from 'react';
import { Loader2, ShieldCheck } from 'lucide-react';
import { apiService, authStorage } from '../services/api';

export default function AuthPage({ onAuthenticated }) {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ userName: '', email: '', password: '', referredByCode: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = mode === 'login'
        ? await apiService.login({ email: form.email, password: form.password })
        : await apiService.register(form);

      authStorage.setToken(response.token);
      onAuthenticated(response.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-black text-white">N-Taskify</h1>
          <p className="text-xs text-slate-400 mt-1">{mode === 'login' ? 'Hesabına giriş yap' : 'Yeni hesap oluştur'}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <input
              name="userName"
              value={form.userName}
              onChange={handleChange}
              placeholder="Kullanıcı adı"
              required
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
            />
          )}
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="E-posta"
            required
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Şifre"
            required
            minLength={6}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
          />
          {mode === 'register' && (
            <input
              name="referredByCode"
              value={form.referredByCode}
              onChange={handleChange}
              placeholder="Referans kodu (opsiyonel)"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
            />
          )}

          {error && (
            <div className="text-xs text-rose-300 bg-rose-950/40 border border-rose-800/40 rounded-xl px-3 py-2">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white font-semibold text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
          >
            {loading ? (
              <><Loader2 className="w-4 h-4 animate-spin" /><span>İşleniyor...</span></>
            ) : (
              <span>{mode === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}</span>
            )}
          </button>
        </form>

        <p className="text-xs text-slate-400 text-center mt-5">
          {mode === 'login' ? 'Hesabın yok mu?' : 'Zaten hesabın var mı?'}{' '}
          <button
            onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError(''); }}
            className="text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            {mode === 'login' ? 'Kayıt ol' : 'Giriş yap'}
          </button>
        </p>
      </div>
    </div>
  );
}
