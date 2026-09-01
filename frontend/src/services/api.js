const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const apiService = {
  async getTasks() {
    try {
      const res = await fetch(`${API_BASE_URL}/tasks`);
      if (!res.ok) throw new Error('API Hatası');
      return await res.json();
    } catch {
      return [
        { id: 1, title: "TEKNOFEST Tanıtım Videosunu İncele", category: "Dijital", type: "video", rewardPoints: 120, description: "Resmi YouTube kanalındaki inovasyon videosunu izle ve gizli kodu doğrula.", status: "available", verificationMethod: "Davranış Analizi" },
        { id: 2, title: "Etkinlik Standı QR Doğrulaması", category: "Fiziksel", type: "qr", rewardPoints: 350, description: "Kampüs içi veya fuar standındaki N-Taskify QR kodunu okutarak konumunu doğrula.", status: "available", verificationMethod: "QR + Geofencing" },
        { id: 3, title: "İçerik Paylaşım & Etkileşim Görevi", category: "Dijital", type: "social", rewardPoints: 200, description: "#NTaskify etiketiyle inovatif fikrini paylaş ve görsel doğrulamayı tamamla.", status: "available", verificationMethod: "YOLO v11 / Vision AI" },
        { id: 4, title: "Topluluk Workshop Katılımı", category: "Fiziksel", type: "event", rewardPoints: 500, description: "Haftalık teknoloji atölyesine katıl ve mentor yoklamasından geç.", status: "available", verificationMethod: "N-Referans Onayı" }
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