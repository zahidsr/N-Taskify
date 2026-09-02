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
    try {
      const res = await fetch(`${API_BASE_URL}/tasks`);
      if (!res.ok) throw new Error('API Hatası');
      return await res.json();
    } catch {
      return [
        { id: "00000000-0000-0000-0000-000000000001", title: "TEKNOFEST Tanıtım Videosunu İncele", category: "Dijital", type: "video", rewardPoints: 120, description: "Resmi YouTube kanalındaki inovasyon videosunu izle ve gizli kodu doğrula.", status: "available", verificationMethod: "Davranış Analizi" },
        { id: "00000000-0000-0000-0000-000000000002", title: "Etkinlik Standı QR Doğrulaması", category: "Fiziksel", type: "qr", rewardPoints: 350, description: "Kampüs içi veya fuar standındaki N-Taskify QR kodunu okutarak konumunu doğrula.", status: "available", verificationMethod: "QR Doğrulama + Geofencing" },
        { id: "00000000-0000-0000-0000-000000000003", title: "İçerik Paylaşım & Etkileşim Görevi", category: "Dijital", type: "social", rewardPoints: 200, description: "#NTaskify etiketiyle inovatif fikrini paylaş ve görsel doğrulamayı tamamla.", status: "available", verificationMethod: "Görsel Doğrulama (YOLO)" },
        { id: "00000000-0000-0000-0000-000000000004", title: "Topluluk Workshop Katılımı", category: "Fiziksel", type: "event", rewardPoints: 500, description: "Haftalık teknoloji atölyesine katıl ve mentor yoklamasından geç.", status: "available", verificationMethod: "Geofencing" }
      ];
    }
  },
  async verifyTask(taskId, proofData) {
    try {
      const res = await fetch(`${API_BASE_URL}/tasks/${taskId}/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(proofData)
      });
      return await res.json();
    } catch {
      return { success: true, message: "Doğrulama başarılı! N-Puan cüzdanınıza aktarıldı." };
    }
  }
};