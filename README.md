# N-Taskify

**N-Taskify**, N'Sosyal ekosistemiyle bütünleşebilecek şekilde tasarlanan; dijital ve fiziksel kullanıcı etkileşimlerini görevler üzerinden ölçülebilir ve ödüllendirilebilir değere dönüştürmeyi amaçlayan oyunlaştırma tabanlı bir içerik ekonomisi ve dijital sadakat projesidir.

Proje, **TEKNOFEST 2026 N'Sosyal İnovasyon Yarışması** kapsamında geliştirilmekte olup birincil olarak **İçerik Ekonomisi** alanına odaklanmaktadır.

> Proje şu anda geliştirme aşamasındadır. Bu repository, N-Taskify'ın teknik geliştirme sürecini ve sürüm geçmişini takip etmek amacıyla kullanılmaktadır.

---

## Projenin Çıkış Noktası

Sosyal medya kullanıcıları her gün içerik izleyerek, paylaşım yaparak, gönderilerle etkileşime girerek ve platformların büyümesine katkı sağlayarak önemli bir değer üretiyor. Buna rağmen bu değerin son kullanıcıya doğrudan döndüğü mekanizmalar oldukça sınırlı.

Aynı ekosistemde;

- içerik üreticileri sınırlı gelir modellerine bağlı kalabiliyor,
- markalar gerçek kullanıcı etkileşimini bot veya sahte etkileşimlerden ayırmakta zorlanabiliyor,
- fiziksel etkinliklerde oluşan kullanıcı davranışları ile dijital kampanya etkileşimleri çoğunlukla ayrı sistemlerde takip ediliyor.

N-Taskify bu parçaları tek bir **görev, doğrulama ve ödül sistemi** altında bir araya getirmeyi hedefliyor.

---

## N-Taskify Nasıl Çalışır?

Sistemin temel akışı oldukça basittir:

```text
Kullanıcı
   ↓
Görevleri görüntüler
   ↓
Bir görev seçer
   ↓
Görevi tamamlar
   ↓
QR / Konum / Görsel / Sistem kontrolü
   ↓
Görev doğrulanır
   ↓
N-Puan kazanılır
   ↓
Ödül / avantaj / yeni görev
```

Görevler yalnızca dijital işlemlerle sınırlı değildir.

### Dijital görev örnekleri

- Video izleme
- İçerikle etkileşim kurma
- İçerik paylaşma
- Mini oyun tamamlama

### Fiziksel görev örnekleri

- QR kod okutma
- Belirlenen bir konumda bulunma
- Etkinlik veya stant ziyareti
- Görsel kanıt gönderme

Dijital ve fiziksel görevlerin aynı görev motoru içerisinde çalışması, projenin temel yaklaşımını oluşturmaktadır.

---

## Temel Bileşenler

### N-Puan

N-Puan, kullanıcıların doğrulanmış görevleri tamamlayarak kazanabildiği platform içi sadakat ve ödül puanıdır.

Planlanan kullanım alanları:

- Ödül kazanımı
- Platform içi avantajlar
- Premium içerik veya özelliklere erişim
- İçerik üreticilerine mikro destek

N-Puan gerçek para, kripto para veya token olarak tasarlanmamıştır.

### N-Referans

N-Referans, kullanıcıların ekosisteme sağladığı ağ katkısını ödüllendirmeyi amaçlayan referans mekanizmasıdır.

Klasik tek seferlik davet sistemlerinden farklı olarak daha sürdürülebilir bir kullanıcı kazanım modeli oluşturulması hedeflenmektedir.

### Hibrit Görev Motoru

N-Taskify'ın merkezinde dijital ve fiziksel görevleri aynı sistem içerisinde yönetebilen görev altyapısı bulunmaktadır.

Görevler;

- kullanıcı,
- kampanya,
- ödül,
- doğrulama yöntemi

gibi farklı bileşenlerle ilişkilendirilebilir.

### Çok Katmanlı Doğrulama

Görevlerin yalnızca kullanıcı beyanına dayanması yerine, görevin türüne göre birden fazla doğrulama yöntemi kullanılabilmesi planlanmaktadır.

Bunlar arasında:

- QR doğrulama
- Geofencing
- Görsel doğrulama
- Davranış analizi
- Hız ve tekrar kontrolleri

yer almaktadır.

---

## Hedeflenen Ana Modüller

N-Taskify prototipi aşağıdaki temel modüller etrafında geliştirilecektir:

- Kullanıcı yönetimi
- Kimlik doğrulama ve yetkilendirme
- Görev yönetimi
- Kampanya yönetimi
- Görev tamamlama ve doğrulama
- N-Puan hareketleri
- N-Referans sistemi
- QR doğrulama
- Konum doğrulama
- Görsel doğrulama
- Temel davranış analizi
- Ödül / mağaza akışı
- Yönetim paneli

İlk hedef, bütün özellikleri aynı anda tamamlamak yerine temel kullanıcı senaryosunu uçtan uca çalıştırabilen kararlı bir prototip oluşturmaktır.

---

## Teknik Yaklaşım

N-Taskify, çok katmanlı ve modüler bir web/mobil sistem olarak planlanmaktadır.

Çekirdek iş mantığının REST API üzerinden sunulması; kullanıcı arayüzü, backend ve doğrulama bileşenlerinin mümkün olduğunca birbirinden ayrılması hedeflenmektedir.

### Planlanan teknoloji yığını

| Alan | Teknoloji / Yaklaşım |
|---|---|
| Backend | C# / ASP.NET Core |
| API | REST |
| Frontend | React |
| Veritabanı | Microsoft SQL Server veya PostgreSQL |
| Yapay Zekâ / Veri | Python |
| Veri İşleme | NumPy, Pandas, Scikit-learn |
| Görsel Doğrulama | YOLO tabanlı hafif modeller |
| Konum Doğrulama | Geofencing |
| Sürüm Kontrolü | Git / GitHub |

> Repository geliştikçe kullanılan teknoloji ve kütüphaneler burada güncellenecektir.

---

## Backend

Backend tarafında **C# ve ASP.NET Core** kullanılacaktır.

Temel sorumluluklar:

- Kullanıcı işlemleri
- Yetkilendirme
- Görev iş kuralları
- Kampanya yönetimi
- N-Puan işlemleri
- N-Referans mantığı
- Görev doğrulama süreçleri
- REST API servisleri

İlk backend hedefi, kullanıcı → görev → doğrulama → N-Puan akışının çalışır hâle getirilmesidir.

---

## Frontend

Kullanıcı arayüzünde React tabanlı bir yapı planlanmaktadır.

Öncelikli ekranlar:

- Ana ekran
- Görev listesi
- Görev detayı
- N-Puan bakiyesi
- Ödüller
- N-Referans
- Kullanıcı profili
- Görev doğrulama ekranları

Arayüz tasarımında kısa kullanıcı akışları, mobil kullanım kolaylığı ve anlık geri bildirim ön planda tutulacaktır.

---

## Veri Katmanı

Projede ilişkisel veritabanı kullanılacaktır.

Değerlendirilen seçenekler:

- Microsoft SQL Server
- PostgreSQL

Temel veri alanları:

```text
User
Task
Campaign
PointTransaction
Referral
TaskCompletion
Verification
Reward
```

N-Puan hareketlerinin yalnızca güncel bakiye olarak değil, izlenebilir işlem geçmişi şeklinde tutulması hedeflenmektedir.

---

## Yapay Zekâ ve Veri Analizi

N-Taskify'da yapay zekâ, projenin ana fikrinden bağımsız bir özellik olarak değil; özellikle **doğrulama, güvenlik ve analiz** problemlerini destekleyen bir katman olarak ele alınmaktadır.

### Görsel doğrulama

Fiziksel görevlerde gönderilen görsel kanıtların değerlendirilmesi için YOLO tabanlı hafif bilgisayarlı görü modellerinden yararlanılması planlanmaktadır.

### Davranış analizi

Aşağıdaki gibi şüpheli davranışların tespit edilmesi hedeflenmektedir:

- Gerçekçi olmayan görev tamamlama süreleri
- Çok kısa sürede aşırı görev tamamlama
- Sürekli tekrar eden hareketler
- Konum ve görev arasında tutarsızlık
- Bot veya otomasyon ihtimali

### Veri işleme

Veri analizi ve deneysel çalışmalar için Python ekosistemindeki NumPy, Pandas ve Scikit-learn gibi araçların kullanılması planlanmaktadır.

---

## Model Doğrulama Yaklaşımı

Yapay zekâ bileşenlerinde henüz ölçülmemiş sonuçlar başarı olarak kabul edilmeyecektir.

Gerekli deneyler gerçekleştirildikten sonra aşağıdaki metrikler kullanılabilir:

- Precision
- Recall
- F1-score
- mAP
- False Positive Rate
- ROC-AUC

Görsel veri tarafında gerektiğinde eğitim, doğrulama ve test veri kümeleri ayrılacak; veri artırma, early stopping, regularization ve transfer learning gibi yöntemler değerlendirilecektir.

---

## Kullanıcı Deneyimi

N-Taskify için kullanıcı deneyiminin temel amacı, görev tamamlama sürecini mümkün olduğunca anlaşılır ve hızlı hâle getirmektir.

Öncelikli tasarım ilkeleri:

- Kısa kullanıcı akışları
- Mobil öncelikli kullanım
- Anlık görev tamamlama geri bildirimi
- N-Puan kazanımının açık biçimde gösterilmesi
- Yeterli renk kontrastı
- Okunabilir tipografi
- Uygun dokunma hedefleri
- Fiziksel görevlerde gereksiz adımlardan kaçınma

Erişilebilirlik tarafında WCAG ilkeleri referans alınmaktadır.

---

## Güvenlik ve Veri Minimizasyonu

Konum ve görsel veri kullanan görevlerde mümkün olduğunca az veri işlenmesi temel prensiplerden biridir.

Özellikle konum verisinin:

- yalnızca görev doğrulama amacıyla kullanılması,
- gereksiz yere saklanmaması,
- ihtiyaç duyulan minimum süre boyunca tutulması

hedeflenmektedir.

Amaç kullanıcıdan mümkün olan en fazla veriyi toplamak değil, görevin güvenilir biçimde doğrulanması için gerekli veriyi işlemektir.

---

## Prototip Kapsamı

İlk çalışan prototipte aşağıdaki akışın uçtan uca gösterilebilmesi hedeflenmektedir:

```text
Kayıt / Giriş
      ↓
Görevleri Görüntüleme
      ↓
Görev Seçme
      ↓
Görevi Tamamlama
      ↓
Doğrulama
      ↓
N-Puan Kazanma
      ↓
Bakiyeyi Görüntüleme
      ↓
Ödül veya Yeni Görev
```

Bunun yanında N-Referans, QR, geofencing, görsel doğrulama ve temel davranış analizi gibi bileşenler geliştirme planının devamında yer almaktadır.

---

## İlk Aşamada Kapsam Dışı

Prototip aşamasında aşağıdaki alanlar bilinçli olarak kapsam dışında tutulmuştur:

- Gerçek para transferleri
- Ödeme kuruluşu entegrasyonları
- Kripto para altyapısı
- Token sistemi
- Geniş ölçekli reklam ihale sistemleri

Bu karar, geliştirme sürecinde temel ürün fikrinin doğrulanmasına odaklanabilmek için alınmıştır.

---

## Başarı Nasıl Ölçülecek?

Projenin başarısı yalnızca sistemin çalışması üzerinden değerlendirilmeyecektir.

Takip edilmesi planlanan göstergeler arasında:

- Görev tamamlama oranı
- Görev tamamlama süresi
- Doğrulama hataları
- Yanlış pozitif / yanlış negatif oranları
- Kullanıcı akışındaki adım sayısı
- Kullanıcı geri bildirimleri

bulunmaktadır.

---

## Geliştirme Durumu

N-Taskify aktif geliştirme aşamasındadır.

Projenin öncelik sırası:

- [ ] Proje yapısının oluşturulması
- [ ] Temel domain modellerinin hazırlanması
- [ ] Veritabanı altyapısının kurulması
- [ ] Görev yönetiminin geliştirilmesi
- [ ] N-Puan sisteminin geliştirilmesi
- [ ] Kimlik doğrulama ve yetkilendirme
- [ ] N-Referans sisteminin geliştirilmesi
- [ ] Temel kullanıcı arayüzünün hazırlanması
- [ ] QR doğrulama
- [ ] Geofencing
- [ ] Görsel doğrulama
- [ ] Davranış analizi
- [ ] Fonksiyonel testler
- [ ] Kullanılabilirlik ve UX iyileştirmeleri
- [ ] Final demo akışının hazırlanması

Bu liste geliştirme ilerledikçe güncellenecektir.

---

## Geliştirme Yaklaşımı

Repository üzerinde yapılan değişikliklerin küçük, anlaşılır ve takip edilebilir commitler hâlinde tutulması amaçlanmaktadır.

Örnek:

```text
docs: add N-Taskify project specification
docs: add project README
chore: initialize backend project
chore: initialize frontend project
feat: add core domain models
feat: implement task management
feat: implement N-Puan transactions
feat: add referral relationships
feat: add QR task verification
test: add task flow tests
```

Kodun yalnızca son hâlinin değil, geliştirme sürecinin de repository geçmişi üzerinden izlenebilmesi hedeflenmektedir.

---

## Detaylı Proje Dokümanı

Projenin kapsamı, teknik yaklaşımı, doğrulama yöntemleri, yapay zekâ bileşenleri, iş modeli ve geliştirme planı hakkında daha ayrıntılı bilgi için:

**[N-Taskify Proje Dokümanı](./N-Taskify_PROJECT.md)**

---

## Yarışma

N-Taskify, **TEKNOFEST 2026 N'Sosyal İnovasyon Yarışması** kapsamında geliştirilmiştir.

**Tematik Alan:** İçerik Ekonomisi

Proje; İçerik Ekonomisi temasının yanında Sosyal Yapay Zekâ ve Kullanıcı Katılımı / UI-UX alanlarıyla ilişkili bileşenler de içermektedir.

---

## Kaynaklar

Proje yaklaşımının oluşturulmasında yararlanılan başlıca kaynaklar:

- TEKNOFEST — N'Sosyal İnovasyon Yarışması Genel Şartnamesi, 2026
- TEKNOFEST — N'Sosyal İnovasyon Yarışması Proje Teknik Rapor Şablonu ve Değerlendirme Esasları, 2026
- DataReportal — *Digital 2025: The State of Social Media in 2025*
- IAB / PwC — *Internet Advertising Revenue Report: Full Year 2024*
- Redmon, J. ve diğerleri — *You Only Look Once: Unified, Real-Time Object Detection*
- Looyestyn, J. ve diğerleri — *Does gamification increase engagement with online programs?*
- W3C — *Web Content Accessibility Guidelines (WCAG) 2.2*

---

## Not

Bu repository yarışma sürecindeki aktif geliştirme çalışmalarını içermektedir. Dokümantasyonda yer alan planlanan özellikler, geliştirilmiş ve tamamlanmış özelliklerle aynı anlama gelmez. Repository ve bu README, proje ilerledikçe güncel tutulacaktır.
