const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5196/api';

const TOKEN_KEY = 'ntaskify_token';

export const authStorage = {
  getToken: () => localStorage.getItem(TOKEN_KEY),
  setToken: (token) => localStorage.setItem(TOKEN_KEY, token),
  clearToken: () => localStorage.removeItem(TOKEN_KEY)
};

async function parseJsonOrThrow(res) {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || 'İstek başarısız oldu.');
  }
  return data;
}

export const apiService = {
  async register({ userName, email, password, referredByCode }) {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, email, password, referredByCode: referredByCode || null })
    });
    return parseJsonOrThrow(res);
  },
  async login({ email, password }) {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    return parseJsonOrThrow(res);
  },
  async getMe() {
    const token = authStorage.getToken();
    if (!token) return null;
    const res = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (!res.ok) return null;
    return res.json();
  },
  async getTasks() {
    const token = authStorage.getToken();
    const res = await fetch(`${API_BASE_URL}/tasks`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });
    if (!res.ok) throw new Error('Görevler yüklenemedi.');
    return res.json();
  },
  async completeTask(taskId) {
    const token = authStorage.getToken();
    const res = await fetch(`${API_BASE_URL}/tasks/${taskId}/complete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      }
    });
    return parseJsonOrThrow(res);
  }
};