export interface BlogPost {
  slug: string;
  title: string;
  category: "web-dunyasi" | "dijital-buyume";
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  relatedService?: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "kurumsal-web-sitesi-neden-onemli",
    title: "Kurumsal Web Sitesi Neden Önemli?",
    category: "web-dunyasi",
    excerpt:
      "Dijital çağda kurumsal bir web sitesine sahip olmak artık bir lüks değil, zorunluluk. İşletmeniz için neden önemli olduğunu keşfedin.",
    content: `# Kurumsal Web Sitesi Neden Önemli?

Günümüz dijital dünyasında müşteriler bir işletme hakkında bilgi almak istediklerinde ilk olarak internete bakıyorlar. Kurumsal web siteniz, markanızın dijital vitrini ve 7/24 açık olan işletmenizin yüzüdür.

## Güvenilirlik ve Profesyonellik

Profesyonel bir web sitesi, potansiyel müşterilere işletmenizin güvenilir ve ciddi olduğunu gösterir. Günümüzde web sitesi olmayan bir işletme, müşteriler tarafından şüpheyle karşılanabilir.

## 7/24 Erişilebilirlik

Web siteniz asla kapanmayan bir mağaza gibidir. Müşteriler istedikleri zaman ürün ve hizmetleriniz hakkında bilgi alabilirler.

## Rekabet Avantajı

Rakiplerinizin web sitesi varken sizin yoksa, potansiyel müşterileri onlara yönlendirmiş olursunuz. Kaliteli bir web sitesi sizi rakiplerinizden öne çıkarır.

## Sonuç

Kurumsal web sitesi, modern bir işletmenin olmazsa olmazıdır. Doğru yapıldığında, marka bilinirliğinizi artırır, müşteri kazanmanıza yardımcı olur ve işletmenizin büyümesine katkı sağlar.`,
    author: "Ahmet Yılmaz",
    date: "2025-01-15",
    readTime: "5 dk",
    image: "corporate website business",
    relatedService: "kurumsal-web",
    tags: ["kurumsal", "web tasarım", "dijital dönüşüm"],
  },
  {
    slug: "e-ticaret-satis-artirma",
    title: "E-Ticaret Sitenizde Satışları Artırmanın 5 Yolu",
    category: "dijital-buyume",
    excerpt:
      "E-ticaret sitenizin satışlarını artırmak için uygulayabileceğiniz kanıtlanmış 5 etkili strateji.",
    content: `# E-Ticaret Sitenizde Satışları Artırmanın 5 Yolu

E-ticaret dünyası her geçen gün daha rekabetçi hale geliyor. İşte satışlarınızı artırmak için uygulayabileceğiniz 5 etkili strateji.

## 1. Kullanıcı Deneyimini İyileştirin

Hızlı yüklenen, kolay gezinilebilen bir site şarttır. Müşteriler karmaşık süreçlerden hoşlanmaz.

## 2. Ürün Görselleri ve Açıklamaları

Yüksek kaliteli görseller ve detaylı açıklamalar, müşterilerin satın alma kararını kolaylaştırır.

## 3. Sosyal Kanıt

Müşteri yorumları ve değerlendirmeleri, potansiyel alıcıların güvenini kazanmanıza yardımcı olur.

## 4. Ödeme Seçenekleri

Farklı ödeme yöntemleri sunarak daha geniş bir kitleye hitap edin.

## 5. Mobil Optimizasyon

Kullanıcıların büyük kısmı mobil cihazlardan alışveriş yapıyor. Mobil uyumlu bir site şarttır.`,
    author: "Zeynep Demir",
    date: "2025-01-18",
    readTime: "6 dk",
    image: "online shopping ecommerce",
    relatedService: "e-ticaret",
    tags: ["e-ticaret", "satış", "optimizasyon"],
  },
  {
    slug: "sosyal-medya-stratejisi",
    title: "Etkili Bir Sosyal Medya Stratejisi Nasıl Oluşturulur?",
    category: "dijital-buyume",
    excerpt:
      "Sosyal medyada başarılı olmak için izlemeniz gereken adımlar ve stratejiler.",
    content: `# Etkili Bir Sosyal Medya Stratejisi Nasıl Oluşturulur?

Sosyal medya, markanızı büyütmek için güçlü bir araç. Ancak doğru strateji olmadan sonuç almak zordur.

## Hedef Kitlenizi Tanıyın

Hangi platformlarda aktifler? Ne tür içeriklerle etkileşime giriyorlar?

## İçerik Takvimi Oluşturun

Düzenli paylaşım yapmak için bir takvim hazırlayın. Tutarlılık önemlidir.

## Görsel İçeriklere Odaklanın

Görsel içerikler, metin tabanlı içeriklere göre çok daha fazla etkileşim alır.

## Etkileşimde Bulunun

Takipçilerinizle iletişim kurun, sorularını yanıtlayın. Sosyal medya tek yönlü değildir.

## Analiz Edin

Neyin işe yaradığını görmek için düzenli olarak metriklerinizi analiz edin.`,
    author: "Can Öztürk",
    date: "2025-01-20",
    readTime: "7 dk",
    image: "social media marketing",
    relatedService: "sosyal-medya",
    tags: ["sosyal medya", "strateji", "içerik"],
  },
  {
    slug: "google-ads-nasil-kullanilir",
    title: "Google Ads ile İşletmenizi Büyütme Rehberi",
    category: "dijital-buyume",
    excerpt:
      "Google Ads kampanyalarınızı optimize ederek ROI'nizi nasıl artırabilirsiniz?",
    content: `# Google Ads ile İşletmenizi Büyütme Rehberi

Google Ads, doğru kullanıldığında işletmenize yüksek kaliteli müşteriler getirebilir.

## Doğru Anahtar Kelimeleri Seçin

Arama hacmi yüksek ama rekabet düşük kelimeleri hedefleyin.

## Kaliteli Reklam Metinleri

Dikkat çekici başlıklar ve net CTA'lar kullanın.

## Landing Page Optimizasyonu

Reklam metniniz ile landing page'inizin uyumlu olması gerekir.

## Bütçe Yönetimi

Performansa göre bütçenizi optimize edin.

## Test ve Optimizasyon

A/B testleri yaparak sürekli iyileştirin.`,
    author: "Mehmet Kaya",
    date: "2025-01-22",
    readTime: "8 dk",
    image: "google ads advertising",
    relatedService: "reklam-yonetimi",
    tags: ["google ads", "reklam", "ppc"],
  },
  {
    slug: "web-tasarim-trendleri",
    title: "2025 Web Tasarım Trendleri",
    category: "web-dunyasi",
    excerpt:
      "Bu yıl web tasarımında öne çıkan trend ve teknolojiler neler?",
    content: `# 2025 Web Tasarım Trendleri

Web tasarım dünyası sürekli evrim geçiriyor. İşte 2025'te öne çıkan trendler.

## Minimalizm ve Beyaz Boşluk

Sade ve temiz tasarımlar popülerliğini koruyor.

## Dark Mode

Karanlık tema artık standart bir özellik haline geldi.

## Mikro Animasyonlar

Kullanıcı deneyimini zenginleştiren küçük animasyonlar.

## 3D Elementler

Web teknolojilerinin gelişmesiyle 3D grafikler daha yaygın.

## Erişilebilirlik

Herkes için erişilebilir tasarım artık bir zorunluluk.`,
    author: "Ayşe Şahin",
    date: "2025-01-10",
    readTime: "5 dk",
    image: "modern web design",
    relatedService: "kurumsal-web",
    tags: ["web tasarım", "trendler", "UI/UX"],
  },
  {
    slug: "ozel-yazilim-mi-hazir-yazilim-mi",
    title: "Özel Yazılım mı, Hazır Yazılım mı?",
    category: "web-dunyasi",
    excerpt:
      "İşletmeniz için doğru seçim hangisi? Avantajları ve dezavantajları karşılaştırıyoruz.",
    content: `# Özel Yazılım mı, Hazır Yazılım mı?

İşletmeniz için yazılım seçimi yaparken karşılaşacağınız en önemli kararlardan biri.

## Hazır Yazılım

### Avantajları:
- Hızlı kurulum
- Düşük başlangıç maliyeti
- Güncelleme desteği

### Dezavantajları:
- Sınırlı özelleştirme
- Gereksiz özellikler için ödeme
- Bağımlılık

## Özel Yazılım

### Avantajları:
- Tamamen ihtiyaçlarınıza özel
- Rekabet avantajı
- Ölçeklenebilirlik

### Dezavantajları:
- Yüksek başlangıç maliyeti
- Daha uzun geliştirme süresi

## Hangisini Seçmelisiniz?

İhtiyaçlarınızın karmaşıklığına ve bütçenize bağlı olarak karar vermelisiniz.`,
    author: "Emre Yılmaz",
    date: "2025-01-12",
    readTime: "6 dk",
    image: "software development",
    relatedService: "ozel-yazilim",
    tags: ["yazılım", "özel yazılım", "karar"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(
  category: "web-dunyasi" | "dijital-buyume"
): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getLatestBlogPosts(limit: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
