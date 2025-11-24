# Animasyonlu Kurumsal Web Sitesi

Modern, animasyonlu ve responsive kurumsal web sitesi. Jekyll, Tailwind CSS, GSAP ve Alpine.js ile geliştirilmiştir.

## 🚀 Özellikler

- ⚡ **Jekyll** - Hızlı ve güvenli statik site üretimi
- 🎨 **Tailwind CSS** - Modern ve özelleştirilebilir tasarım
- ✨ **GSAP Animasyonlar** - Profesyonel scroll animasyonları
- 🔄 **Alpine.js** - Hafif ve güçlü interaktif öğeler
- 📱 **Responsive** - Tüm cihazlarda mükemmel görünüm
- 🎯 **SEO Optimized** - Arama motorları için optimize edilmiş
- ⚙️ **Vercel Ready** - Tek tıkla deploy

## 📦 Kurulum

### Gereksinimler

- Ruby 3.x
- Bundler
- Node.js 18+
- npm veya yarn

### Yerel Geliştirme

1. Repository'yi klonlayın
```bash
git clone <repo-url>
cd Animasyonlukurumsalwebsitesi
```

2. Ruby bağımlılıklarını yükleyin
```bash
bundle install
```

3. Node.js bağımlılıklarını yükleyin
```bash
npm install
```

4. Geliştirme sunucusunu başlatın
```bash
npm run dev
```

Site `http://localhost:4000` adresinde çalışacaktır.

## 🏗️ Build

Production build oluşturmak için:

```bash
npm run build
```

Build çıktısı `_site/` klasöründe oluşturulacaktır.

## 🌐 Vercel'de Yayınlama

### Otomatik Deployment (Önerilen)

1. GitHub'a push yapın
2. [Vercel](https://vercel.com)'de yeni proje oluşturun
3. GitHub repository'nizi bağlayın
4. Vercel otomatik olarak `vercel.json` ayarlarını kullanacaktır
5. Deploy!

### Vercel CLI ile

```bash
npm i -g vercel
vercel
```

## 📁 Proje Yapısı

```
.
├── _data/              # YAML veri dosyaları
├── _includes/          # Tekrar kullanılabilir HTML parçaları
│   ├── header.html
│   ├── footer.html
│   └── whatsapp-button.html
├── _layouts/           # Sayfa layoutları
│   ├── default.html
│   ├── page.html
│   ├── post.html
│   ├── service.html
│   └── case-study.html
├── _services/          # Hizmet sayfaları (collection)
├── _portfolio/         # Portfolyo projeleri (collection)
├── _posts/             # Blog yazıları
├── assets/
│   ├── css/
│   │   └── main.css    # Tailwind CSS
│   └── js/
│       └── animations.js  # GSAP animasyonları
├── _config.yml         # Jekyll konfigürasyonu
├── index.html          # Ana sayfa
├── hizmetler.html      # Hizmetler sayfası
├── portfolyo.html      # Portfolyo sayfası
├── blog.html           # Blog sayfası
├── iletisim.html       # İletişim sayfası
├── tailwind.config.js  # Tailwind konfigürasyonu
├── postcss.config.js   # PostCSS konfigürasyonu
└── vercel.json         # Vercel deployment ayarları
```

## 🎨 Özelleştirme

### Renkleri Değiştirme

[tailwind.config.js](tailwind.config.js) dosyasından renk paletini özelleştirebilirsiniz:

```js
colors: {
  primary: {
    500: '#3b82f6',  // Ana mavi renk
    // ...
  },
}
```

### İçerik Düzenleme

- **Hizmetler**: `_services/` klasöründeki Markdown dosyalarını düzenleyin
- **Blog**: `_posts/` klasörüne yeni Markdown dosyası ekleyin
- **Portfolyo**: `_portfolio/` klasörüne yeni proje ekleyin
- **Veri**: `_data/` klasöründeki YAML dosyalarını güncelleyin

### Yeni Sayfa Ekleme

1. Kök dizinde yeni HTML/Markdown dosyası oluşturun
2. Front matter ekleyin:
```yaml
---
layout: page
title: "Sayfa Başlığı"
---
```

## 🎭 Animasyonlar

Site GSAP ScrollTrigger kullanır. Animasyon eklemek için:

```html
<div class="animate-on-scroll">
  <!-- Bu element scroll'da animasyonlu gelecek -->
</div>
```

Kartlar için stagger animasyon:

```html
<div class="card-group">
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

## 📝 Blog Yazısı Ekleme

`_posts/` klasöründe yeni dosya oluşturun (format: `YYYY-MM-DD-baslik.md`):

```markdown
---
layout: post
title: "Blog Yazısı Başlığı"
date: 2025-01-15
category: web-dunyasi
category_label: "Web Dünyası"
read_time: 5
image: "/assets/images/blog/resim.jpg"
excerpt: "Kısa açıklama..."
tags: [web, tasarım, seo]
---

Yazı içeriği buraya...
```

## 🛠️ Teknolojiler

- **Jekyll 4.3** - Statik site üretici
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **GSAP 3.12** - Profesyonel animasyon kütüphanesi
- **Alpine.js 3.x** - Minimal JavaScript framework
- **PostCSS** - CSS işleme
- **Vercel** - Hosting ve deployment

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'feat: Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- Web: https://dijitalajans.com
- Email: info@dijitalajans.com
- WhatsApp: +90 555 555 5555

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
