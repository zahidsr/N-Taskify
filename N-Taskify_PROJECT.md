# N-Taskify

> N'Sosyal ekosistemi için tasarlanan, dijital ve fiziksel etkileşimleri görevler üzerinden ölçülebilir değere dönüştürmeyi amaçlayan oyunlaştırma tabanlı içerik ekonomisi ve dijital sadakat projesi.

---

## İçindekiler

1. [Proje Hakkında](#1-proje-hakkında)
2. [Çıkış Noktası](#2-çıkış-noktası)
3. [Çözüm Yaklaşımı](#3-çözüm-yaklaşımı)
4. [N-Taskify Nasıl Çalışır?](#4-n-taskify-nasıl-çalışır)
5. [Temel Kavramlar](#5-temel-kavramlar)
6. [Hedef Kitle ve Paydaşlar](#6-hedef-kitle-ve-paydaşlar)
7. [Fonksiyonel Kapsam](#7-fonksiyonel-kapsam)
8. [Doğrulama ve Güven Katmanı](#8-doğrulama-ve-güven-katmanı)
9. [Teknik Yaklaşım](#9-teknik-yaklaşım)
10. [Backend](#10-backend)
11. [Frontend ve Kullanıcı Arayüzü](#11-frontend-ve-kullanıcı-arayüzü)
12. [Veri Katmanı](#12-veri-katmanı)
13. [Yapay Zekâ ve Veri Analizi](#13-yapay-zekâ-ve-veri-analizi)
14. [Model ve Veri Doğrulama Yaklaşımı](#14-model-ve-veri-doğrulama-yaklaşımı)
15. [Kullanıcı Deneyimi İlkeleri](#15-kullanıcı-deneyimi-ilkeleri)
16. [Gizlilik ve Veri Minimizasyonu](#16-gizlilik-ve-veri-minimizasyonu)
17. [Başarı Ölçütleri](#17-başarı-ölçütleri)
18. [Prototip Kapsamı](#18-prototip-kapsamı)
19. [İlk Prototipte Kapsam Dışı Bırakılanlar](#19-ilk-prototipte-kapsam-dışı-bırakılanlar)
20. [Uygulanabilirlik](#20-uygulanabilirlik)
21. [İş Modeli ve Sürdürülebilirlik](#21-iş-modeli-ve-sürdürülebilirlik)
22. [Geliştirme Yol Haritası](#22-geliştirme-yol-haritası)
23. [Geliştirme ve Sürüm Kontrolü Yaklaşımı](#23-geliştirme-ve-sürüm-kontrolü-yaklaşımı)
24. [Projenin Nihai Hedefi](#24-projenin-nihai-hedefi)
25. [Kaynaklar](#25-kaynaklar)

---

# 1. Proje Hakkında

**N-Taskify**, N'Sosyal platformu bünyesinde son kullanıcıları, içerik üreticilerini ve markaları aynı değer üretim döngüsünde buluşturmayı amaçlayan oyunlaştırma tabanlı bir **içerik ekonomisi ve dijital sadakat protokolüdür**.

Projenin temel düşüncesi basit bir sorudan çıkıyor:

**Bir sosyal medya kullanıcısının zamanı, ilgisi ve etkileşimi platform için değer üretiyorsa, bu değerin bir kısmı neden kullanıcıya da geri dönmesin?**

N-Taskify bu soruya yalnızca klasik bir puan sistemiyle cevap vermeyi hedeflemiyor. Proje; sosyal medya etkileşimlerini, içerik üreticisi ekonomisini, marka kampanyalarını ve fiziksel etkinlik katılımını aynı görev altyapısı içerisinde bir araya getirmeyi amaçlıyor.

Bu nedenle N-Taskify yalnızca “görev yap, puan kazan” mantığında çalışan bir uygulama olarak değil; kullanıcı, üretici ve marka arasında doğrulanabilir bir değer akışı kurmayı hedefleyen daha geniş bir sistem olarak ele alınıyor.

Proje, **N'Sosyal İnovasyon Yarışması 2026** kapsamında birincil olarak **İçerik Ekonomisi** teması altında geliştirilmiştir. Bunun yanında Sosyal Yapay Zekâ ve Kullanıcı Katılımı / UI-UX alanlarıyla da doğrudan ilişkili bileşenler içermektedir.

---

# 2. Çıkış Noktası

Bugünkü sosyal medya ekonomisinde kullanıcıların platform üzerindeki davranışları doğrudan ekonomik değer üretiyor.

Kullanıcılar içerik izliyor, gönderilerle etkileşime giriyor, paylaşım yapıyor, yeni kullanıcıları platforma taşıyor ve markaların kampanyalarına görünürlük sağlıyor. Buna rağmen son kullanıcı tarafında bu katkıyı doğrudan karşılayan ödül veya sadakat mekanizmaları çoğu platformda sınırlı kalıyor.

N-Taskify'ın odaklandığı problem üç ana tarafta ele alınıyor.

### Kullanıcı tarafı

Kullanıcılar sosyal platformlarda ciddi zaman geçiriyor ve sürekli etkileşim üretiyor. Ancak ortaya çıkan ekonomik değerden çoğu zaman doğrudan faydalanamıyorlar.

### İçerik üreticisi tarafı

İçerik üreticileri gelir elde etmek için çoğunlukla reklam paylaşımı, sponsorluk ve abonelik gibi belirli gelir kanallarına bağlı kalıyor. Özellikle daha küçük üreticiler için sürdürülebilir ve topluluk destekli alternatif gelir yolları sınırlı olabiliyor.

### Marka tarafı

Markalar kampanyalarında görüntülenme, tıklama veya etkileşim gibi sayısal verilere ulaşabiliyor. Fakat dijital etkileşimin gerçekten bir insan tarafından yapıldığını doğrulamak, bot veya manipüle edilmiş davranışları ayırmak ve fiziksel etkinlik katılımını aynı sistem içerisinde ölçmek daha zor bir problem oluşturuyor.

N-Taskify'ın çıkış noktası, bu üç ihtiyacın birbirinden bağımsız sistemlerle çözülmek yerine ortak bir yapı altında buluşturulabileceği düşüncesidir.

---

# 3. Çözüm Yaklaşımı

N-Taskify, dijital ve fiziksel kullanıcı davranışlarını **görev** kavramı üzerinden birleştirir.

Bir görev;

- bir videonun izlenmesi,
- bir içerikle etkileşim kurulması,
- bir paylaşım yapılması,
- bir mini oyunun tamamlanması,
- bir QR kodun okutulması,
- belirli bir alanda bulunulması,
- bir etkinlik standının ziyaret edilmesi,
- gerekli durumlarda görsel kanıt sunulması

gibi farklı biçimlerde tanımlanabilir.

Buradaki önemli nokta, dijital ve fiziksel görevlerin birbirinden kopuk sistemlerde değil, aynı görev motorunun parçası olarak çalışmasıdır.

Kullanıcının görevi tamamlaması tek başına yeterli kabul edilmez. Görevin türüne göre uygun doğrulama yöntemi devreye girer. Doğrulama başarılı olduğunda kullanıcıya **N-Puan** tanımlanır.

Bu puanların;

- ödül ekosisteminde kullanılması,
- belirli avantajlara erişim sağlaması,
- uygun senaryolarda içerik üreticilerine mikro destek olarak yönlendirilebilmesi

öngörülmektedir.

Sistemin kullanıcı kazanımı tarafında ise **N-Referans** mekanizması yer alır. Böylece platform büyümesi de oyunlaştırılmış yapının bir parçası hâline gelir.

---

# 4. N-Taskify Nasıl Çalışır?

N-Taskify'ın temel kullanıcı senaryosu aşağıdaki akış üzerinden düşünülebilir:

```text
Kullanıcı sisteme giriş yapar
        ↓
Uygun görevleri görüntüler
        ↓
Bir görev seçer
        ↓
Görevin gerektirdiği aksiyonu gerçekleştirir
        ↓
Gerekliyse QR / konum / görsel kanıt sunar
        ↓
Sistem görevi doğrular
        ↓
Başarılı görev için N-Puan tanımlanır
        ↓
Kullanıcı güncel puan bakiyesini görür
        ↓
Yeni göreve geçer veya puanlarını değerlendirir
```

Bu akışın olabildiğince kısa tutulması projenin temel kullanıcı deneyimi hedeflerinden biridir.

N-Taskify için görev tamamlama süreci yalnızca teknik olarak doğru çalışmakla kalmamalı; kullanıcı yaptığı işlemin sonucunu hızlı ve anlaşılır biçimde görebilmelidir.

---

# 5. Temel Kavramlar

## 5.1. Görev

Görev, N-Taskify sisteminin merkezindeki ana iş birimidir.

Görevler dijital veya fiziksel olabilir. Her görevin kendine ait bir tamamlanma koşulu ve gerektiğinde doğrulama yöntemi bulunur.

Görevlerin marka kampanyalarıyla ilişkilendirilebilmesi, kullanıcı tarafında ise tek bir görev deneyimi içerisinde sunulması hedeflenmektedir.

---

## 5.2. N-Puan

**N-Puan**, kullanıcıların doğrulanmış görevler sonucunda kazanabildiği platform içi sadakat ve ödül puanıdır.

N-Puan;

- gerçek para değildir,
- kripto varlık değildir,
- token altyapısı olarak tasarlanmamıştır.

İlk prototipte mevzuat ve operasyon karmaşıklığını artıracak gerçek para veya kripto varlık senaryolarının dışında tutulması özellikle tercih edilmiştir.

Planlanan kullanım senaryoları arasında:

- ödül kazanımı,
- platform içi avantajlar,
- belirli premium içerik veya ayrıcalıklara erişim,
- içerik üreticilerine mikro destek

bulunmaktadır.

---

## 5.3. N-Referans

N-Referans, N-Taskify'ın kullanıcı kazanımı ve ağ katkısı için tasarlanan referans mekanizmasıdır.

Amaç yalnızca “arkadaşını davet et, bir kez puan kazan” modelini tekrar etmek değildir. Kullanıcının ekosisteme sağladığı ağ katkısını daha uzun vadeli ve şeffaf kurallarla değerlendirebilecek bir yapı hedeflenmektedir.

N-Referans ile:

- organik kullanıcı kazanımının desteklenmesi,
- kullanıcıların platform büyümesine katkısının ödüllendirilmesi,
- topluluk bağının güçlendirilmesi,
- kullanıcı devamlılığının artırılması

amaçlanmaktadır.

---

## 5.4. Kampanya

Kampanya, özellikle marka ve organizasyon tarafındaki görevlerin bir araya getirildiği yapıdır.

Bir kampanya içerisinde bir veya birden fazla görev yer alabilir. Örneğin bir teknoloji etkinliğinde bir marka;

- standı ziyaret etme,
- QR kod okutma,
- belirli bir içerikle etkileşim kurma

gibi görevleri aynı kampanya kapsamında tanımlayabilir.

Bu yaklaşım, fiziksel etkinlik katılımı ile dijital etkileşim verisinin ortak bir yapıda değerlendirilmesini sağlar.

---

# 6. Hedef Kitle ve Paydaşlar

N-Taskify tek taraflı bir son kullanıcı uygulaması olarak düşünülmemiştir. Sistemin değer üretebilmesi için birden fazla paydaşın aynı ekosistem içerisinde fayda elde edebilmesi hedeflenmektedir.

## Son Kullanıcılar

Özellikle;

- öğrenciler,
- genç profesyoneller,
- teknoloji meraklıları,
- sosyal medya kullanıcıları,
- teknoloji etkinliklerine katılan kullanıcılar

projenin temel kullanıcı kitlesini oluşturmaktadır.

Bu kullanıcıların motivasyonu, zaten gerçekleştirdikleri dijital ve fiziksel etkileşimleri anlamlı ödüllere dönüştürebilmektir.

## İçerik Üreticileri

İçerik üreticileri N-Taskify içerisinde yalnızca içerik yayınlayan taraf olarak değil, ekosistemin değer akışından faydalanabilecek paydaşlardan biri olarak düşünülmektedir.

Kullanıcıların kazandığı N-Puanların belirli kullanım senaryolarında üreticilere mikro destek olarak yönlendirilebilmesi bu yaklaşımın temel parçalarından biridir.

## Markalar

Markalar için ana değer önerisi, yalnızca yüksek etkileşim değil, **doğrulanabilir etkileşim** üretmektir.

Markaların;

- dijital görev,
- QR görevi,
- konum görevi,
- etkinlik görevi

oluşturabilmesi ve bu görevlerden gelen sonuçları ölçebilmesi planlanmaktadır.

## Etkinlik Organizatörleri

N-Taskify fiziksel etkinlikleri de görev ekonomisinin parçası hâline getirdiği için festival, fuar, kampüs etkinliği ve benzeri organizasyonlarda kullanılabilecek bir yapı sunmayı hedeflemektedir.

---

# 7. Fonksiyonel Kapsam

Projenin teknik raporda tanımlanan ana fonksiyonel kapsamı aşağıdaki bileşenlerden oluşmaktadır.

## 7.1. Kullanıcı kayıt ve kimlik doğrulama

Kullanıcıların sisteme kayıt olabilmesi, oturum açabilmesi ve kendilerine ait veriler üzerinde güvenli biçimde işlem yapabilmesi gerekmektedir.

Bu katman ilerleyen aşamalarda yetkilendirme ihtiyaçlarının da temelini oluşturacaktır.

## 7.2. Görev oluşturma

Sistem içerisinde farklı türlerde görevler oluşturulabilmelidir.

Görev yapısının dijital ve fiziksel senaryoları desteklemesi hedeflenmektedir.

## 7.3. Görev tamamlama

Kullanıcılar kendilerine sunulan görevleri gerçekleştirebilmeli ve görevin türüne göre tamamlanma sürecini başlatabilmelidir.

## 7.4. Görev doğrulama

Görevler türlerine göre;

- temel sistem kontrolleri,
- QR doğrulama,
- konum doğrulama,
- görsel doğrulama,
- davranış analizi

ile kontrol edilebilir.

## 7.5. N-Puan hareketleri

Kullanıcının kazandığı ve kullandığı puanların yalnızca toplam bakiye olarak değil, işlem geçmişi üzerinden de takip edilebilmesi hedeflenmektedir.

## 7.6. N-Referans ağı

Kullanıcılar arasındaki referans ilişkileri tutulmalı ve tanımlanan bonus mantığı bu ilişkiler üzerinden çalışabilmelidir.

## 7.7. Ödül / mağaza akışı

Kullanıcıların elde ettikleri N-Puanları değerlendirebilecekleri bir ödül yapısının prototip içerisinde gösterilmesi planlanmaktadır.

## 7.8. Yönetim paneli

Görev, kampanya, kullanıcı ve sistem hareketlerinin yönetilebilmesi için yönetim tarafında ayrı bir arayüz bulunması hedeflenmektedir.

---

# 8. Doğrulama ve Güven Katmanı

N-Taskify'ın temel farklarından biri, ödül mekanizmasının yalnızca kullanıcı tarafından yapılan beyana dayanmamasıdır.

Ödül verilen bir sistemde kötüye kullanım ihtimali doğrudan ürünün sürdürülebilirliğini etkilediği için görev doğrulama projenin önemli teknik alanlarından biridir.

## QR Kod Doğrulama

Belirli fiziksel görevlerde QR kod kullanılabilir.

Örneğin bir etkinlik standını ziyaret eden kullanıcının yalnızca “standı ziyaret ettim” demesi yerine, o standa ait QR kodu okutması istenebilir.

## Geofencing

Konuma bağlı görevlerde cihazdan alınan coğrafi koordinatın önceden tanımlanan alan içerisinde olup olmadığı kontrol edilebilir.

Ancak raporda da belirtildiği üzere GPS verisinin tek başına sahteciliğe karşı yeterli olduğu varsayılmamaktadır.

Kritik görevlerde geofencing;

- QR,
- görsel kanıt

gibi ikinci bir doğrulama sinyaliyle birlikte kullanılabilir.

## Görsel Kanıt

Bazı görevlerde kullanıcının gerçekleştirdiği aksiyona ilişkin görsel göndermesi gerekebilir.

Bu görsellerin doğrulanmasında bilgisayarlı görü yöntemlerinden yararlanılması planlanmaktadır.

## Davranış Analizi

Her kötüye kullanım girişiminin görsel veya konum verisi üzerinden yakalanması mümkün değildir.

Bu nedenle sistemde davranışsal kontrollerin de bulunması planlanmaktadır.

Örneğin:

- gerçekçi olmayan tamamlama süreleri,
- kısa süre içerisinde aşırı sayıda görev tamamlama,
- sürekli tekrar eden şüpheli hareketler,
- görev ile konum arasında tutarsızlık

gibi göstergeler ayrıca değerlendirilebilir.

Amaç tek bir kontrol mekanizmasına güvenmek yerine birden fazla sinyal kullanmaktır.

---

# 9. Teknik Yaklaşım

N-Taskify çok katmanlı ve modüler bir web/mobil sistem olarak planlanmıştır.

Ana iş mantığının **REST API** üzerinden sunulması, kullanıcı arayüzü ile sunucu tarafındaki iş kurallarının birbirinden ayrılması hedeflenmektedir.

Doğrulama servislerinin de çekirdek iş mantığından ayrılabilen modüller olarak ele alınması planlanmıştır.

Raporda tanımlanan temel teknoloji tercihleri şöyledir:

| Alan | Teknoloji / Yaklaşım |
|---|---|
| Backend | C# / ASP.NET Core |
| API | REST |
| Frontend | React tabanlı bileşenler |
| Veritabanı | Microsoft SQL Server veya PostgreSQL |
| Yapay zekâ / veri | Python |
| Veri işleme | NumPy, Pandas, Scikit-learn |
| Görsel doğrulama | YOLO tabanlı hafif modeller |
| Konum doğrulama | Geofencing |
| Sürüm kontrolü | Git / GitHub |

Bu dokümanda belirtilmeyen belirli kütüphane, servis, bulut sağlayıcısı veya mimari desen henüz proje kararı olarak kabul edilmemelidir. Bu tür ayrıntılar geliştirme sırasında ihtiyaçlara göre netleştirilecektir.

---

# 10. Backend

Sunucu tarafında **C# ve ASP.NET Core** kullanılacaktır.

Backend tarafının temel sorumlulukları şunlardır:

- kullanıcı işlemleri,
- yetkilendirme,
- görev iş kuralları,
- görev tamamlama süreçleri,
- kampanya yönetimi,
- N-Puan hareketleri,
- N-Referans mantığı,
- doğrulama servisleri ile entegrasyon,
- istemcilere REST API sunulması.

Backend yalnızca veri taşıyan bir API olarak değil, sistemin temel iş kurallarının bulunduğu ana uygulama katmanı olarak ele alınmaktadır.

İlk geliştirme aşamasında öncelik, uçtan uca çalışan temel görev ve puan akışının kurulmasıdır.

---

# 11. Frontend ve Kullanıcı Arayüzü

Kullanıcı tarafında React tabanlı web ve mobil uyumlu arayüzler planlanmaktadır.

Temel kullanıcı ekranları arasında:

- ana ekran,
- görev listesi,
- görev detayı,
- N-Puan bakiyesi,
- ödül / mağaza,
- N-Referans alanı,
- kullanıcı profili,
- fiziksel görev doğrulama ekranları

bulunacaktır.

N-Taskify'ın kullanıcı deneyiminde karmaşık menüler yerine kısa ve anlaşılır akışlara öncelik verilecektir.

Raporda belirtilen hedeflerden biri, kullanıcının ana ekrandan;

- görevlerine,
- puan bakiyesine,
- mağazaya

en fazla birkaç etkileşimle ulaşabilmesidir.

---

# 12. Veri Katmanı

N-Taskify içerisinde ilişkisel veritabanı kullanılması planlanmaktadır.

Raporda iki alternatif belirtilmiştir:

- **Microsoft SQL Server**
- **PostgreSQL**

Nihai veritabanı seçimi geliştirme aşamasında netleştirilebilir.

Sistemde ilişkisel olarak saklanması öngörülen temel veri alanları şunlardır:

- kullanıcılar,
- görevler,
- kampanyalar,
- N-Puan hareketleri,
- referans ilişkileri,
- görev geçmişleri.

Veri modelinin tasarımında özellikle puan hareketlerinin ve referans ilişkilerinin tutarlı biçimde saklanması önemlidir.

N-Puan yalnızca kullanıcı üzerinde tutulan tek bir sayı olarak düşünülmemektedir. Puan kazanımı ve kullanımının izlenebilir bir hareket geçmişine sahip olması sistemin güvenilirliği açısından önem taşımaktadır.

---

# 13. Yapay Zekâ ve Veri Analizi

N-Taskify'da yapay zekâ ayrı bir vitrin özelliği olarak değil, özellikle **doğrulama, güvenlik ve analiz** problemlerinde kullanılabilecek yardımcı bir katman olarak düşünülmektedir.

Planlanan başlıca kullanım alanları şunlardır.

## Görsel görev doğrulama

Kullanıcı tarafından sunulan görsel kanıtların değerlendirilmesi için YOLO ailesinden hafif nesne tespit modellerinin kullanılması planlanmaktadır.

Gerektiğinde nesne tespitinin yanında sınıflandırma yaklaşımları da değerlendirilebilir.

## Davranış analizi

Kullanıcı hareketlerinden elde edilen veriler üzerinde kural tabanlı ve istatistiksel kontroller uygulanarak şüpheli davranışların belirlenmesi hedeflenmektedir.

## Veri işleme

Kullanıcı etkileşim verilerinin işlenmesi, analiz edilmesi ve sistem içerisindeki bazı hesaplamaların desteklenmesi amacıyla Python ekosistemindeki;

- NumPy,
- Pandas,
- Scikit-learn

gibi araçların kullanılması planlanmaktadır.

---

# 14. Model ve Veri Doğrulama Yaklaşımı

N-Taskify'ın yapay zekâ bölümündeki temel ilke, henüz ölçülmemiş bir sonucu başarı olarak göstermemektir.

Model performansı geliştirmenin ilerleyen aşamalarında gerçek deney sonuçlarıyla değerlendirilmelidir.

## Veri hazırlama

Görsel veriler gerektiğinde;

- yeniden boyutlandırma,
- kalite kontrolü,
- anonimleştirme,
- veri artırma

adımlarından geçirilebilir.

Davranışsal verilerde ise;

- eksik kayıtlar,
- olağan dışı görev süreleri,
- aşırı tekrar,
- konum tutarsızlıkları

kontrol edilecektir.

## Veri ayrımı

Görsel doğrulama çalışmalarında veri kümelerinin;

- eğitim,
- doğrulama,
- test

olarak ayrılması planlanmaktadır.

## Aşırı öğrenmeye karşı önlemler

İhtiyaca bağlı olarak;

- veri artırma,
- early stopping,
- regularization,
- transfer learning

yaklaşımlarından yararlanılabilir.

## Değerlendirme metrikleri

Görsel doğrulamada:

- Precision
- Recall
- F1-score
- mAP

gibi metrikler değerlendirilebilir.

Bot veya manipülasyon tespitinde:

- Precision
- Recall
- yanlış pozitif oranı,
- ROC-AUC

gibi ölçütler kullanılabilir.

Sayısal sonuçlar yalnızca gerçekten gerçekleştirilen testlerden elde edildikten sonra paylaşılacaktır.

---

# 15. Kullanıcı Deneyimi İlkeleri

N-Taskify'ın yalnızca teknik olarak çalışan bir sistem olması yeterli değildir. Kullanıcıların görevleri anlaması, tamamlaması ve sonucunu hızlı biçimde görmesi projenin temel başarı koşullarından biridir.

## Kısa kullanıcı akışları

Kullanıcının temel bölümlere mümkün olduğunca az adımla erişmesi hedeflenmektedir.

## Anlık geri bildirim

Tamamlanan görevlerden sonra kullanıcının işlemin başarılı olup olmadığını ve kazandığı puanı açık biçimde görmesi gerekir.

## Oyunlaştırma

N-Taskify'ın kullanıcı katılımını destekleyen mekanikleri arasında;

- günlük görev serileri,
- görev ödülleri,
- N-Puan,
- N-Referans bonusları,
- dönemsel görevler

bulunmaktadır.

## Fiziksel görev deneyimi

QR veya görsel kanıt gereken görevlerde kamera ve doğrulama adımlarının kullanıcıyı gereksiz ekranlar arasında dolaştırmaması hedeflenmektedir.

## Erişilebilirlik

Arayüz geliştirilirken;

- yeterli renk kontrastı,
- okunabilir tipografi,
- uygun dokunma hedefleri,
- mobil kullanım kolaylığı

göz önünde bulundurulacaktır.

Özellikle açık alan ve etkinlik kullanımı düşünüldüğü için ekranların farklı ışık koşullarında okunabilir olması önemlidir.

WCAG ilkeleri erişilebilirlik açısından referans alınacaktır.

---

# 16. Gizlilik ve Veri Minimizasyonu

N-Taskify'ın bazı görevleri konum veya görsel veri kullanabileceği için veri minimizasyonu önemli bir tasarım ilkesi olarak ele alınmaktadır.

Özellikle konum verisinin;

- yalnızca görev doğrulama amacıyla işlenmesi,
- gereksiz yere saklanmaması,
- ihtiyaç duyulan en kısa süre boyunca tutulması

hedeflenmektedir.

Görsel verilerde de ihtiyaç olması hâlinde anonimleştirme adımları uygulanabilir.

Sistemin amacı kullanıcıdan mümkün olan en fazla veriyi toplamak değil, görevin güvenilir biçimde doğrulanabilmesi için gerçekten gerekli olan veriyi işlemektir.

---

# 17. Başarı Ölçütleri

N-Taskify'ın başarısı yalnızca “uygulama çalışıyor” şeklinde değerlendirilmemelidir.

Raporda proje için ölçülebilir değerlendirme yaklaşımı benimsenmiştir.

İzlenmesi planlanan temel göstergeler arasında:

- görev tamamlama oranı,
- görev tamamlama süresi,
- doğrulama hatası,
- yanlış pozitif oranı,
- yanlış negatif oranı,
- kullanıcı akışındaki adım sayısı,
- kullanıcı geri bildirimleri

bulunmaktadır.

Yapay zekâ ve davranış analizi bileşenlerinde ayrıca ilgili model performans metrikleri kullanılacaktır.

Bu yaklaşım, projenin yalnızca teknik olarak geliştirilmesini değil, gerçekten kullanılabilir olup olmadığının da ölçülmesini amaçlamaktadır.

---

# 18. Prototip Kapsamı

Yarışma kapsamında hedeflenen prototipin aşağıdaki ana parçaları kapsaması planlanmaktadır:

- kullanıcı kayıt ve kimlik doğrulama,
- görev oluşturma,
- görev listeleme,
- görev tamamlama,
- N-Puan kazanımı ve hareketleri,
- N-Referans ilişkileri,
- QR tabanlı doğrulama,
- geofencing tabanlı doğrulama,
- görsel kanıt doğrulama,
- temel davranış analizi,
- ödül / mağaza akışı,
- yönetim paneli.

Buradaki amaç her özelliğin ticari ürün seviyesinde eksiksiz geliştirilmesi değil; N-Taskify'ın temel değer önerisini uçtan uca gösterebilen çalışan bir prototip oluşturmaktır.

---

# 19. İlk Prototipte Kapsam Dışı Bırakılanlar

İlk prototipin gereksiz şekilde büyümemesi için bazı alanlar bilinçli olarak kapsam dışında tutulmuştur.

Bunlar:

- gerçek para transferleri,
- ödeme kuruluşu entegrasyonları,
- kripto varlık altyapısı,
- token sistemi,
- geniş ölçekli reklam ihale sistemi

olarak belirlenmiştir.

Bu karar, projenin ilk aşamada teknik olarak doğrulanması gereken esas probleme odaklanmasını sağlar.

---

# 20. Uygulanabilirlik

N-Taskify'ın temel bileşenleri mevcut web, mobil, veritabanı, konum ve bilgisayarlı görü teknolojileri kullanılarak geliştirilebilir.

Prototip açısından özel ve yüksek maliyetli donanımlara ihtiyaç duyulması öngörülmemektedir.

Kullanıcı tarafında temel hedef, modern bir akıllı telefon üzerinden sisteme erişilebilmesidir.

Fiziksel görevlerde;

- telefon kamerası,
- QR kod,
- cihaz konumu

gibi hâlihazırda mobil cihazlarda bulunan imkânlardan yararlanılması planlanmaktadır.

Bu da projenin küçük bir kullanıcı grubuyla pilot olarak test edilebilmesini ve daha sonra ihtiyaç hâlinde kademeli biçimde ölçeklenebilmesini mümkün kılar.

---

# 21. İş Modeli ve Sürdürülebilirlik

N-Taskify'ın gelir modeli yalnızca son kullanıcıdan ücret almaya dayanmamaktadır.

İlk aşamada kullanıcıların ücretsiz biçimde sisteme katılması ve kullanıcı tabanının büyütülmesi hedeflenmektedir.

Ticari tarafta değerlendirilen başlıca gelir alanları şunlardır:

## Marka kampanyaları ve sponsorlu görevler

Markalar;

- dijital etkileşim,
- QR,
- konum,
- etkinlik katılımı

gibi doğrulanabilir görevler oluşturabilir.

Bu görevlerin ve kampanyaların yönetimi B2B hizmet modeline dönüştürülebilir.

## Etkinlik ve fiziksel alan paketleri

Festival, fuar ve üniversite etkinlikleri için;

- görev altyapısı,
- stant ziyareti,
- QR görevleri,
- kampanya analitiği

sunulabilir.

## Ödül / mağaza entegrasyonları

N-Puan kullanımına bağlı mağaza ve ödül entegrasyonlarında hizmet bedeli veya komisyon modeli değerlendirilebilir.

## Premium analitik ve görünürlük

Marka ve içerik üreticilerine;

- gelişmiş kampanya raporları,
- hedefleme,
- öne çıkarma,
- analiz araçları

sunulabilecek ek hizmetler arasında yer almaktadır.

Projenin uzun vadeli sürdürülebilirliği; teknik ölçeklenebilirlik, farklı gelir kaynakları ve kullanıcıların platforma düzenli olarak geri gelmesini sağlayan oyunlaştırma döngüsü üzerine kurulmaktadır.

---

# 22. Geliştirme Yol Haritası

Teknik raporda proje gelişimi iş paketleri üzerinden planlanmıştır.

## İP-1 — Problem ve değer önerisi

Problem/pazar analizi, kullanım senaryoları, N-Puan ve N-Referans fikrinin netleştirilmesi.

## İP-2 — Sistem tasarımı

Sistem mimarisi, veri modeli, güvenlik ve doğrulama ihtiyaçlarının belirlenmesi.

## İP-3 — Çekirdek backend

Backend/API geliştirme, kullanıcı-görev-puan servisleri ve referans mantığının oluşturulması.

## İP-4 — Kullanıcı arayüzü

Web/mobil arayüz ile görev, cüzdan, ödül ve referans akışlarının hazırlanması.

## İP-5 — Doğrulama

QR, geofencing, görsel kanıt ve davranış kontrollerinin prototiplenmesi.

## İP-6 — Entegrasyon ve test

Bileşenlerin birleştirilmesi, fonksiyonel test, hata giderme, temel güvenlik ve kullanılabilirlik testleri.

## İP-7 — Teknik dokümantasyon

Teknik rapor, mimari ve iş modeli dokümantasyonu ile repository düzeninin hazırlanması.

## İP-8 — Mentör geri bildirimleri

Mentörlük sürecinde alınan geri bildirimlerin uygulanması; performans ve kullanıcı deneyimi iyileştirmeleri.

## İP-9 — Final hazırlığı

Sunum, demo senaryosu ve jüri soru-cevap hazırlığı.

Proje ilerledikçe öncelik yalnızca yeni özellik eklemek olmayacaktır. Temel kullanıcı senaryosunun güvenilir biçimde çalışması, doğrulama hatalarının azaltılması ve demo akışının kararlı hâle getirilmesi yeni özelliklerden daha önemlidir.

---

# 23. Geliştirme ve Sürüm Kontrolü Yaklaşımı

N-Taskify kaynak kodu Git üzerinden sürüm kontrolü altında tutulacaktır.

Repository:

**GitHub:** https://github.com/zahidsr/N-Taskify

Geliştirme sürecinde yapılan değişikliklerin küçük ve anlamlı parçalar hâlinde takip edilmesi hedeflenmektedir.

Commit geçmişi yalnızca kodun son hâlini saklamak için değil, projenin nasıl geliştiğini gösterecek bir kayıt olarak kullanılacaktır.

Örnek commit yaklaşımı:

```text
docs: add project specification
docs: add project overview to README
chore: initialize backend project
chore: initialize frontend project
feat: add core domain models
feat: implement task management
feat: implement N-Puan transactions
feat: add referral relationships
feat: add QR task verification
test: add task flow tests
fix: handle invalid task completion
```

Commit mesajlarında yapılan değişikliğin ne olduğu açık biçimde ifade edilmelidir.

Proje ilerledikçe branch kullanımı, otomatik testler ve CI/CD süreçleri ihtiyaç doğrultusunda devreye alınacaktır.

---

# 24. Projenin Nihai Hedefi

N-Taskify'ın ulaşmak istediği nokta yalnızca görev tamamlandığında puan veren bir prototip oluşturmak değildir.

Temel hedef;

**kullanıcının dijital ve fiziksel etkileşimini doğrulanabilir değere dönüştüren, içerik üreticileri için alternatif destek kanalları oluşturan, markalara ölçülebilir kampanya etkileşimi sağlayan ve N'Sosyal ekosistemiyle bütünleşebilecek bir yapı ortaya koymaktır.**

Yarışma sürecindeki ilk teknik hedef ise bu yaklaşımın tamamını teorik olarak göstermek yerine, en önemli kullanıcı senaryosunu gerçek ve çalışan bir prototip üzerinden uçtan uca gösterebilmektir.

---

# 25. Kaynaklar

Bu proje dokümanı, N-Taskify için hazırlanan **N'Sosyal İnovasyon Yarışması 2026 Proje Teknik Raporu** temel alınarak hazırlanmıştır.

Teknik raporda yararlanılan başlıca kaynaklar:

1. TEKNOFEST — N'Sosyal İnovasyon Yarışması Genel Şartnamesi, 2026.
2. TEKNOFEST — N'Sosyal İnovasyon Yarışması Proje Teknik Rapor Şablonu ve Puanlama / Değerlendirme Esasları, 2026.
3. Kemp, S. — *Digital 2025: The State of Social Media in 2025*, DataReportal.
4. Interactive Advertising Bureau (IAB) / PwC — *Internet Advertising Revenue Report: Full Year 2024*.
5. Redmon, J., Divvala, S., Girshick, R., Farhadi, A. — *You Only Look Once: Unified, Real-Time Object Detection*, CVPR, 2016.
6. Looyestyn, J. ve diğerleri — *Does gamification increase engagement with online programs? A systematic review*, PLoS ONE, 2017.
7. W3C — *Web Content Accessibility Guidelines (WCAG) 2.2*.

---

## Not

Bu dosya N-Taskify'ın geliştirme sürecinde proje kapsamını, teknik yönünü ve temel kararlarını tek yerde tutmak amacıyla hazırlanmıştır.

Kod geliştikçe bu doküman da güncel tutulmalıdır. Raporda yer alan ancak henüz uygulamada karşılığı bulunmayan özellikler, tamamlanmış gibi gösterilmemeli; geliştirme durumu repository geçmişi ve çalışan prototiple birlikte ilerlemelidir.
