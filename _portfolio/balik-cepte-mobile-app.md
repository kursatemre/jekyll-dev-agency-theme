---
layout: case-study
title: "Balık Cepte - AI Destekli Balıkçılık Platformu"
client: "Balık Cepte"
category: "Mobil Uygulama"
tags: [Next.js, Expo, React Native, Claude AI, Supabase, iOS, Android]
date: 2026-01-01
featured_image: "https://i.hizliresim.com/iax850q.png"
project_url: "https://balikcepte.app/"
excerpt: "Türk balıkçılar için AI destekli av günlüğü ve tahmin platformu. iOS, Android ve Web'de çalışan uygulama; solunar takvim, gerçek zamanlı hava verileri ve Claude AI ile saatlik başarı tahmini sunar."
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
  - Supabase
  - Open-Meteo API
  - Leaflet / OpenStreetMap
  - EAS Build & Vercel
---

# Balık Cepte - AI Destekli Balıkçılık Platformu

## Proje Özeti

Balık Cepte, Türk balıkçılar için geliştirilmiş AI destekli av günlüğü ve tahmin platformudur. iOS, Android ve Web olmak üzere üç platformda erişilebilen uygulama; Claude AI, solunar takvim ve gerçek zamanlı hava verilerini birleştirerek LRF, SPİN ve SURFCASTING disiplinleri için saatlik başarı tahmini üretir.

## Challenge (Zorluk)

### İş İhtiyaçları

- **Çok Platform**: iOS, Android ve Web'de tek kod tabanından tutarlı deneyim sunmak
- **Kişiselleştirme**: Genel balıkçılık tavsiyesi değil, kullanıcının kendi mera geçmişine göre tahmin
- **Topluluk Güveni**: Gerçek av verilerini toplarken sahte raporları önlemek
- **Offline Destek**: İnternetsiz ortamda av raporu kaydedebilmek

### Teknik Gereksinimler

- Gerçek zamanlı hava, deniz ve solunar veri entegrasyonu
- Çok kullanıcılı güvenli veri izolasyonu
- Günlük sabah push bildirimleri
- App Store ve Google Play store build + OTA güncelleme altyapısı

## Solution (Çözüm)

### AI Tahmin Motoru

**Claude Sonnet 4.6** ile güçlendirilen tahmin sistemi; solunar periyotları, hava basıncı trendi, rüzgar, su sıcaklığı ve dalga verilerini birleştirerek günün her saati için 0–100 arası başarı skoru hesaplar. Kullanıcının geçmiş av verileri de tahmine dahil edilir; aynı merada tekrar eden başarılı avlar AI'ın tahminini kişiselleştirir.

### Veri Kaynakları

- **Open-Meteo**: Hava durumu, dalga yüksekliği, su sıcaklığı
- **suncalc**: Solunar periyotlar ve ay fazı
- **Topluluk verisi**: Onaylı av raporları tahmin kalitesini artırır

## Özellikler

### Dashboard
- 7 günlük tarih seçici — hava, ay ve solunar veriler seçilen güne göre güncellenir
- Saatlik skor chip'leri — günün en verimli saatlerini tek bakışta görme
- Solunar takvim widget — aktif periyotlar anlık gösterilir
- İleri gün skoru (+1 ila +4 gün görünümü)

### AI Av Tahmini
- LRF / SPİN / SURFCASTING disiplin modları
- En iyi saat dilimi, saatlik olasılık dağılımı, tür tahminleri
- Sahte/yem önerileri — envanterdeki sahte eşleşmesi otomatik işaretlenir

### Mera Yönetimi
- Haritadan seç, GPS veya manuel koordinat girişi
- Zemin yapısı, derinlik aralığı, cephe yönü kaydı

### Harita Skor Kartı
- Haritada herhangi bir noktaya dokunarak anlık av potansiyeli görme
- Kara noktası tespiti ile anlamlı uyarılar

### Av Raporları & Galeri
- Çok adımlı form: mera/GPS → sahte → sonuç → tarih
- Fotoğraflı av kaydı ve tüm avların galeri görünümü

### Offline Mod
- İnternet olmadan av raporu kaydetme
- Online'a dönünce otomatik senkronizasyon

### Topluluk Feed
- Bölge bazlı filtreleme (Ege, Akdeniz, Marmara, Karadeniz)
- Reaksiyon, yorum ve takipçi sistemi

### Push Bildirimleri
- Her sabah günün av skoru ve en iyi saat penceresiyle bildirim
- iOS ve Android native bildirim desteği

## Sonuçlar

- App Store ve Google Play'de aktif yayın
- Türkiye'nin 4 denizini kapsayan veri modeli
- Yapay zeka destekli ilk Türkçe balıkçılık uygulaması
- Türkiye'nin en iyi balıkçılık platformu olma hedefiyle büyümeye devam

## Mağaza Linkleri

- **App Store**: https://apps.apple.com/tr/app/balik-cepte/id6765955082
- **Google Play**: https://play.google.com/store/apps/details?id=com.balikcepte.app
- **Web**: https://balikcepte.app/
