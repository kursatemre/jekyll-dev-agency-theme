---
layout: case-study
title: "Digital Menu UI - Multi-Tenant Restoran Menü Sistemi"
client: "Restaurant Management"
category: "Full-Stack Application"
tags: [Next.js 16, React 19, Supabase, Tailwind CSS, Multi-Tenant]
date: 2024-11-01
featured_image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=630&fit=crop"
preview_url: "https://www.menumgo.digital"
excerpt: "Restoranlar için modern çok kiracılı dijital menü sistemi. QR kod menüleri, gerçek zamanlı sipariş yönetimi, garson çağrı sistemi ve üç premium tema ile."
results:
  - value: "Multi-Tenant"
    label: "Architecture"
  - value: "3 Themes"
    label: "Premium Design"
  - value: "QR Menu"
    label: "Contactless"
technologies:
  - Next.js 16
  - React 19
  - TypeScript
  - Supabase
  - Tailwind CSS
  - Radix UI
  - Vercel
---

# Digital Menu UI - Multi-Tenant Restoran Menü Sistemi

## Proje Özeti

Digital Menu UI, restoranlar, kafeler ve fast-food işletmeleri için geliştirilmiş modern çok kiracılı (multi-tenant) dijital menü sistemidir. Next.js 16, React 19 ve Supabase kullanılarak geliştirilmiş olup, birden fazla işletmeyi tek bir platformda destekler. QR kod ile temassız menü erişimi, gerçek zamanlı sipariş yönetimi ve üç farklı premium tema sunar.

**Canlı Önizleme:** [www.menumgo.digital](https://www.menumgo.digital)

## Challenge (Zorluk)

### İş İhtiyaçları

Restoranların dijital dönüşümünde karşılaştıkları zorluklar:

- **Multi-Tenant Architecture**: Birden fazla işletmeyi tek platformda yönetme
- **Temassız Hizmet**: QR kod ile hijyenik menü erişimi
- **Gerçek Zamanlı İletişim**: Müşteri-garson iletişimi ve sipariş yönetimi
- **Tema Çeşitliliği**: Farklı restoran tiplerinin ihtiyaçlarına uygun tasarımlar
- **Çok Dilli Destek**: Türkçe ve İngilizce dil seçenekleri
- **Kolay Yönetim**: Teknik bilgi gerektirmeyen admin paneli
- **Müşteri Deneyimi**: Sezgisel sipariş süreci ve geri bildirim sistemi

### Teknik Gereksinimler

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Components**: Radix UI
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Security**: Row Level Security (RLS)

## Solution (Çözüm)

### Mimari Yaklaşım

**Multi-Tenant Architecture:**
```
┌─────────────────────────────────────────────────┐
│         Multi-Tenant System                      │
│                                                  │
│  Customer Side (/{slug})                         │
│     - QR kod menü erişimi                        │
│     - Alışveriş sepeti                           │
│     - Sipariş yönetimi                           │
│     - Garson çağrı sistemi                       │
│     - Müşteri geri bildirim                      │
│     - 3 Premium tema seçeneği                    │
│                                                  │
│  Admin Panel (/{slug}/admin)                     │
│     - Sipariş yönetimi (5 sn otomatik yenileme)  │
│     - Garson çağrıları                           │
│     - Müşteri geri bildirimleri                  │
│     - İstatistik panosu                          │
│     - Menü yönetimi                              │
│                                                  │
├─────────────────────────────────────────────────┤
│         Backend Services                         │
│  - Supabase (PostgreSQL + Auth)                  │
│  - Row Level Security (RLS)                      │
│  - Real-time subscriptions                       │
│  - Next.js API Routes                            │
│  - Vercel Edge Functions                         │
│                                                  │
│         Deployment                               │
│  - Vercel Hosting                                │
│  - Automatic CI/CD                               │
│  - Edge Network CDN                              │
└─────────────────────────────────────────────────┘
```

### Teknoloji Stack

**Frontend Technologies:**
- **Next.js 16.0.0**: Latest React framework with App Router
- **React 19.2.0**: Newest React features
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI components
- **Lucide React**: Modern icon library

**Backend & Database:**
- **Supabase**: PostgreSQL database with real-time capabilities
- **Supabase Auth**: Authentication system
- **Row Level Security (RLS)**: Tenant isolation
- **Next.js API Routes**: Backend logic

**Deployment & Infrastructure:**
- **Vercel**: Hosting platform
- **Automatic Deployment**: CI/CD pipeline
- **Edge Network**: Global CDN distribution

### Temel Özellikler

#### 1. Müşteri Tarafı Özellikleri

**QR Kod Menü Sistemi:**
- Temassız menü erişimi
- QR kod tarama ile otomatik yönlendirme
- Masaya özel menü deneyimi
- 3 farklı premium tema

**Sipariş Yönetimi:**
- Alışveriş sepeti sistemi
- Ürün kustomizasyon seçenekleri
- Gerçek zamanlı sipariş takibi
- Sipariş durumu bildirimleri

**Garson Çağrı Sistemi:**
- Tek tuşla garson çağırma
- Anlık bildirim gönderimi
- Çağrı durumu takibi

**Müşteri Geri Bildirimi:**
- 5 yıldızlı değerlendirme sistemi
- Yorum yazma özelliği
- Anonim geri bildirim seçeneği

**Çok Dilli Destek:**
- Türkçe dil desteği
- İngilizce dil desteği
- Başlıktan kolay dil değiştirme

#### 2. Yönetici Paneli

**Sipariş Yönetimi:**
- Gerçek zamanlı sipariş listesi
- 5 saniyede bir otomatik yenileme
- Sipariş durumu güncelleme (Bekliyor/Hazırlanıyor/Hazır/Tamamlandı)
- Sipariş detayları ve zaman damgaları

**Garson Çağrı Yönetimi:**
- Aktif çağrıların listesi
- Masa ve zaman bilgisi
- Çağrı tamamlama özelliği
- Çağrı geçmişi

**Geri Bildirim Yönetimi:**
- Müşteri değerlendirmelerini görüntüleme
- Yıldız puanları ve yorumlar
- Tarih ve müşteri bilgileri
- Geri bildirim istatistikleri

**İstatistik Panosu:**
- Toplam sipariş sayısı
- Aktif siparişler
- Müşteri memnuniyeti oranı
- Performans metrikleri

#### 3. Üç Premium Tema

**Modern Tema (Varsayılan):**
- Temiz ve çağdaş tasarım
- Kart tabanlı düzen
- Dine-in restoranlar için optimize
- Minimal ve şık arayüz

**Klasik Şıklık:**
- Lüks restoran estetiği
- Altın aksent renkler (#D4AF37)
- Playfair Display tipografisi
- Premium görünüm

**Modern Takeaway:**
- Premium minimalist tasarım
- Arka plan kahraman görüntüsü
- Zümrüt yeşil aksent rengi (#10B981)
- Tek satırlı ürün düzeni
- Yapışkan kart alt bilgisi
- Fast-food ve takeaway için optimize

#### 4. Multi-Tenant Mimarisi

**Kiracı İzolasyonu:**
- Her işletme için ayrı slug (/[slug])
- Row Level Security (RLS) ile veri güvenliği
- Kiracılar arası veri izolasyonu
- Güvenli API endpoint'leri

**Dinamik Rotalar:**
- `/{slug}` - Müşteri menü görünümü
- `/{slug}/admin` - Yönetici panosu
- `/api/feedback` - Geri bildirim API

**Güvenlik:**
- Supabase Auth entegrasyonu
- RLS politikaları
- Güvenli kiracı erişimi
- API güvenlik katmanları

### Geliştirme Süreci

#### 1. Project Setup
- Next.js project initialization
- TypeScript configuration
- UI/UX requirements analysis
- Component library setup

#### 2. Frontend Development
- Component development
- State management
- Responsive design implementation
- Feature additions

#### 3. Backend Integration
- Supabase configuration
- Database schema design
- API endpoint development
- Authentication setup

#### 4. Deployment
- Vercel deployment setup
- Environment variables configuration
- CI/CD pipeline setup
- Production optimization

## Teknik Detaylar

### Development Workflow

**Development → Deployment Pipeline:**
1. **Development**: Local development with Next.js
2. **Version Control**: Code management with Git
3. **Deployment**: Automatic build and deployment via Vercel
4. **Live Site**: Production URL access

### Project Structure

**Repository Contents:**
- Next.js app structure
- TypeScript configurations
- Supabase migrations
- Component library
- CSS modules
- Environment configs

### Continuous Integration

**Automated Workflow:**
- Code changes → Git commit
- Git push → Vercel build trigger
- Successful build → Production deployment
- Failed build → Error notifications

## Results (Sonuçlar)

### Proje İstatistikleri

- **Version**: v2.0
- **Framework**: Next.js 16.0.0 + React 19.2.0
- **Total Commits**: 258+
- **Contributors**: 2
- **Themes**: 3 Premium Tema
- **Languages**: 2 (Türkçe, İngilizce)
- **License**: MIT
- **Live URL**: [www.menumgo.digital](https://www.menumgo.digital)

### v2.0 Yeni Özellikler

- Kapsamlı müşteri geri bildirim sistemi
- Modern Takeaway temasının yeniden tasarımı
- Yapışkan kart alt bilgisi
- Arka plan kahraman görüntüleri
- Geliştirilmiş tipografi
- Yönetici geri bildirim yönetimi
- 5 saniyede bir otomatik yenileme

### Başarılan Özellikler

**Multi-Tenant Sistem:**
- Birden fazla işletmeyi tek platformda yönetme
- Kiracı izolasyonu ve güvenlik
- Dinamik rota yapısı

**Müşteri Deneyimi:**
- QR kod ile temassız menü erişimi
- 3 farklı premium tema seçeneği
- Gerçek zamanlı sipariş takibi
- Garson çağrı sistemi
- Müşteri geri bildirim sistemi

**Yönetim Paneli:**
- Gerçek zamanlı sipariş yönetimi
- Otomatik yenileme (5 sn)
- Garson çağrı takibi
- İstatistik panosu

## Öğrenilen Dersler

### Başarılar

1. **Multi-Tenant Architecture**: Tek platformda birden fazla işletmeyi yönetme deneyimi
2. **Next.js 16 + React 19**: En yeni teknolojilerle geliştirme
3. **Real-time Features**: Supabase ile gerçek zamanlı veri akışı
4. **Theme System**: Farklı restoran tiplerinde için esnek tema sistemi
5. **TypeScript**: Güçlü type safety ve developer experience
6. **Row Level Security**: Güvenli multi-tenant veri izolasyonu
7. **QR Code Integration**: Temassız menü erişimi implementasyonu

### Geliştirilecek Alanlar

1. **Mobile App**: iOS ve Android native uygulamalar
2. **Payment Integration**: Online ödeme sistemleri
3. **Analytics Dashboard**: Detaylı iş analitiği
4. **Inventory Management**: Stok takip sistemi
5. **Marketing Tools**: Kampanya ve promosyon yönetimi
6. **Multi-language Expansion**: Daha fazla dil desteği

## Kullanılan Teknolojiler

**Frontend:**
- Next.js 16.0.0 (React Framework)
- React 19.2.0
- TypeScript
- Tailwind CSS
- Radix UI (Headless Components)
- Lucide React (Icons)

**Backend & Database:**
- Supabase (PostgreSQL)
- Supabase Auth
- Row Level Security (RLS)

**Deployment:**
- Vercel
- Edge Functions
- CDN

## Proje Linki

**Canlı Site**: [www.menumgo.digital](https://www.menumgo.digital)

---

## Proje Özellikleri Özeti

**Müşteri Özellikleri:**
- QR kod ile temassız menü
- 3 premium tema seçeneği
- Sipariş ve sepet yönetimi
- Garson çağrı butonu
- Geri bildirim sistemi
- Çift dil desteği

**Yönetici Özellikleri:**
- Gerçek zamanlı sipariş takibi
- Garson çağrı yönetimi
- Müşteri geri bildirimleri
- İstatistik panosu
- 5 sn otomatik yenileme

**Teknik Özellikler:**
- Multi-tenant mimari
- Next.js 16 + React 19
- Supabase PostgreSQL
- Row Level Security
- Vercel deployment
- TypeScript

---

## Benzer Bir Proje İçin

Restoranınız için dijital menü sistemi, multi-tenant SaaS çözümü veya özel yazılım geliştirme mi istiyorsunuz? Modern teknolojilerle ölçeklenebilir çözümler geliştiriyoruz.

[İletişime Geç](/iletisim) | [Portfolyoya Dön](/portfolyo)
