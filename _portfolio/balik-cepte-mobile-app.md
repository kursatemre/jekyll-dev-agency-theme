---
layout: case-study
title: "Balık Cepte - AI Destekli Balıkçılık Platformu"
client: "Balık Cepte"
category: "Mobil Uygulama"
tags: [Next.js, Expo, React Native, Claude AI, Supabase, Turborepo, iOS, Android]
date: 2026-01-01
featured_image: "https://i.hizliresim.com/iax850q.png"
project_url: "https://balikcepte.app/"
excerpt: "Türk balıkçılar için AI destekli av günlüğü ve tahmin platformu. Next.js web uygulaması ve Expo React Native mobil uygulama tek Turborepo monorepo içinde. Claude Sonnet 4.6 ile solunar + hava verisini birleştiren saatlik başarı tahmini."
results:
  - value: "1.000+"
    label: "Kayıtlı Kullanıcı"
  - value: "3"
    label: "Platform (iOS/Android/Web)"
  - value: "4"
    label: "Deniz Kapsamı"
technologies:
  - Next.js 14
  - Expo React Native
  - Claude Sonnet 4.6
  - Supabase (PostgreSQL + RLS)
  - Turborepo
  - Open-Meteo API
  - Leaflet / OpenStreetMap
  - EAS Build & Vercel
---

# Balık Cepte - AI Destekli Balıkçılık Platformu

## Proje Özeti

Balık Cepte, Türk balıkçılar için geliştirilmiş AI destekli av günlüğü ve tahmin platformudur. Web uygulaması (Next.js 14) ve native mobil uygulama (Expo React Native) tek bir Turborepo monorepo içinde birleştirilmiştir. Claude Sonnet 4.6 ile solunar periyotları, hava verileri ve topluluk av geçmişini birleştirerek LRF, SPİN ve SURFCASTING disiplinleri için saatlik başarı tahmini üretir.

## Challenge (Zorluk)

### İş İhtiyaçları

- **Veri Karmaşıklığı**: Basınç trendi, solunar periyotlar, su sıcaklığı, dalga, gelgit ve ay fazını tek skor modeline dönüştürmek
- **Çok Platform**: iOS, Android ve Web'de tutarlı, native deneyim sunmak
- **AI Doğruluk**: Genel balıkçılık tavsiyesi değil, kullanıcının kendi merasına ve geçmiş av verilerine göre kişiselleştirilmiş tahmin
- **Topluluk Güveni**: Sahte raporları önleyip gerçek verileri AI'a beslemek
- **Offline Destek**: İnternetsiz ortamda av raporu alabilmek

### Teknik Gereksinimler

- Gerçek zamanlı hava, deniz ve solunar veri entegrasyonu
- Supabase RLS ile güvenli çok kullanıcılı veri izolasyonu
- Upstash Redis ile rate limiting (günlük AI tahmin kotası)
- EAS Build ile store build + OTA güncelleme altyapısı
- pg_cron ile günlük sabah push bildirimi

## Solution (Çözüm)

### Monorepo Mimarisi

```
lurelogic/
├── apps/
│   ├── web/        — Next.js 14 (Vercel)
│   └── mobile/     — Expo React Native (iOS + Android)
├── supabase/
│   ├── functions/  — Deno edge functions
│   └── migrations/ — PostgreSQL migration dosyaları
└── turbo.json
```

Turborepo ile paylaşılan tipler ve iş mantığı tek yerden yönetilir; web ve mobil takımlara ayrılmadan aynı repo üzerinde geliştirme yapılır.

### AI Tahmin Motoru

**Claude Sonnet 4.6** + prompt caching ile maliyet optimize edilmiş tahmin akışı:

**Chain-of-Thought Akıl Yürütme:**
1. Basınç trendi değerlendirmesi — düşen +25p, stabil 0, yükselen -15p
2. Dalga + rüzgar skoru — disipline özel ideal koşul analizi
3. Solunar değerlendirme — major +30p / minor +15p
4. Golden Hour değerlendirmesi — +20p ama major periyodun altında
5. Saat bazlı ham skorlama → 0–100 normalize
6. En iyi 2–3 saat seçimi (golden hour'a otomatik öncelik verilmez)

**Kullanıcı Verisi Override:**
- 1+ başarılı av (≥3 yıldız) → o saate minimum %60 olasılık
- 2+ başarılı av → minimum %70
- Override'da UI'da mavi bilgi banner'ı gösterilir

**Kalibrasyon Sistemi:**
- Son 90 günde gerçek av ile tahmin eşleşmesi izlenir
- Doğruluk %70+ → kalibrasyon korunur | %50–70 → olasılıklar %5–10 düşer | <%50 → confidence_level='low'

### Veri Katmanı

| Kaynak | Kapsam |
|--------|--------|
| Open-Meteo | Hava, dalga, su sıcaklığı (SST), gelgit |
| suncalc | Solunar periyotlar, ay fazı, gün doğuşu/batışı |
| Supabase seed_catches | Admin onaylı topluluk av geçmişi (AI'a gider) |
| Kullanıcı geçmişi | Mera bazlı override hesabı |

### Güven & Doğrulama Sistemi

Admin onayı olmadan hiçbir av raporu AI verisine girmez. `trigger_seed_on_verify` DB trigger'ı `is_verified` false→true geçişinde otomatik `seed_catches` kaydı oluşturur (had_catch=true, success_rating≥3, species ve spot_id zorunlu).

### Push Bildirim Altyapısı

`pg_cron` ile her sabah 06:00 İstanbul saatinde tetiklenen `daily-fishing-notification` Deno Edge Function:
- Günün peak solunar periyodunda ulaşılabilecek skor hesaplanır
- 4 şablon: SIMDI_GIT (≥75 + major) / FENA_DEGIL (≥50) / ZAYIF_AMA_DENE (≥35 + solunar) / GUNLUK_OZET
- FCM V1 + Expo Push Notifications ile iOS & Android native bildirim

## Özellikler

### Dashboard
- 7 günlük tarih seçici — hava, ay ve solunar verileri seçilen güne yenilenir
- GPS öncelikli konum (izin verilmezse bölge merkezi)
- Saatlik skor chip'leri — yatay kaydırmalı
- Solunar takvim widget — aktif periyotta "ŞİMDİ" badge
- İleri gün skoru (+1..+4 gün)

### Mera Yönetimi
- Haritadan seç (Leaflet + OpenStreetMap), GPS veya manuel koordinat
- Zemin yapısı, derinlik aralığı, cephe yönü (8 yön)
- Mera silinince ilişkili tahminler ve av raporları soft unlink (CASCADE yok)

### Harita Skor Kartı
- Haritada herhangi bir noktaya dokunulabilir
- Kara noktası kontrolü — Marine API wave_height ile su üstü mü; kara ise "Bu nokta karada" toast (5s cache)
- "Mera Olarak Kaydet" butonuyla pre-fill form

### AI Av Tahmini
- LRF / SPİN / SURFCASTING disiplin modları
- En iyi saat dilimi, saatlik breakdown, tür tahminleri
- Sahte/yem önerileri — envanterde var mı badge
- Analiz kartı: basınç trendi, rüzgar etkisi, ay etkisi, 1–10 skor

### Av Raporları
- Çok adımlı form: mera/GPS → sahte → sonuç → tarih
- Fotoğraf yükleme: browser-image-compression → WebP → Supabase Storage
- 3. avdan sonra App Store / Google Play native değerlendirme isteği

### Offline Mod (Web)
- IndexedDB / Dexie ile av raporu kayıt
- Online'a dönünce `useOfflineSync` hook ile otomatik senkronizasyon
- Fotoğraflar da offline kaydedilip sonra Storage'a yüklenir

### Topluluk Feed
- Bölge filtresi (Ege, Akdeniz, Marmara, Karadeniz)
- Reaksiyon, yorum/yanıt, takipçi/takip
- 5 kategorili raporlama — kendi gönderisini veya aynı gönderiyi tekrar raporlayamaz

### Zorunlu Güncelleme Sistemi
- Supabase `app_config` tablosundan `minimum_app_version` çekilir
- Semver karşılaştırması; altındaysa `OutdatedScreen` (mağazaya yönlendirir)
- Native build gerekmez — OTA ile anında aktif edilir

## Teknik Yığın

| Katman | Teknoloji |
|--------|-----------|
| Web Framework | Next.js 14 (App Router) |
| UI (Web) | shadcn/ui + Radix UI + Tailwind CSS |
| Mobile | Expo SDK 52 + React Native 0.76 |
| UI (Mobile) | NativeWind + Expo Router |
| Auth & DB | Supabase (PostgreSQL + RLS) |
| Storage | Supabase Storage |
| Edge Functions | Supabase Deno Functions |
| AI | Claude Sonnet 4.6 (prompt caching) |
| Harita | Leaflet 1.9 + OpenStreetMap |
| Hava Verisi | Open-Meteo |
| Astronomi | suncalc |
| Offline | Dexie v4 + useOfflineSync hook |
| Rate Limiting | Upstash Redis + in-memory fallback |
| Push Bildirim | Expo Push + FCM V1 |
| Monorepo | Turborepo |
| Build & Deploy | EAS Build (mobile) + Vercel (web) |

## Mağaza Linkleri

- **App Store**: https://apps.apple.com/tr/app/balik-cepte/id6765955082
- **Google Play**: https://play.google.com/store/apps/details?id=com.balikcepte.app
- **Web**: https://balikcepte.app/
