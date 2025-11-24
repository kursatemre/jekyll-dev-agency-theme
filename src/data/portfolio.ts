export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: string;
  image: string;
  excerpt: string;
  problem: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "tekstil-firmasi-crm",
    title: "Tekstil Firması için Özel CRM Sistemi",
    client: "ABC Tekstil A.Ş.",
    category: "Özel Yazılım",
    image: "business software dashboard",
    excerpt:
      "Müşteri ilişkileri ve sipariş yönetimini tek platformda toplayan özel CRM çözümü.",
    problem:
      "ABC Tekstil, müşteri verilerini farklı Excel dosyalarında tutuyordu. Sipariş takibi zordu ve stok yönetimi problemler yaşanıyordu. Ekipler arası iletişim kopukluğu vardı.",
    solution:
      "İşletmenin tüm süreçlerini tek platformda toplayan, bulut tabanlı bir CRM ve stok yönetim sistemi geliştirdik. Mobil uygulaması sayesinde saha ekipleri anlık güncellemeler yapabiliyor.",
    results: [
      { metric: "Verimlilik Artışı", value: "%40" },
      { metric: "Sipariş Takip Süresi", value: "%60 azaldı" },
      { metric: "Stok Hataları", value: "%85 azaldı" },
      { metric: "Müşteri Memnuniyeti", value: "%35 arttı" },
    ],
    technologies: ["Laravel", "Vue.js", "PostgreSQL", "React Native", "AWS"],
    testimonial: {
      quote:
        "Özel yazılım sayesinde iş süreçlerimiz çok daha akıcı hale geldi. Artık her şey kontrol altında.",
      author: "Mehmet Yılmaz",
      position: "Genel Müdür, ABC Tekstil",
    },
  },
  {
    slug: "e-ticaret-kurulum-gida",
    title: "Organik Gıda E-Ticaret Platformu",
    client: "Doğal Lezzetler",
    category: "E-Ticaret",
    image: "organic food ecommerce",
    excerpt:
      "Organik ürünlerin online satışı için modern ve kullanıcı dostu e-ticaret sitesi.",
    problem:
      "Doğal Lezzetler sadece fiziksel mağazalardan satış yapıyordu ve online pazara giremiyordu. Pandemi döneminde satışlar düşmüştü.",
    solution:
      "Hızlı, SEO uyumlu ve mobil öncelikli bir e-ticaret platformu kurduk. Aynı gün teslimat entegrasyonu ve üyelik sistemi ekledik.",
    results: [
      { metric: "İlk 3 Ayda Sipariş", value: "2,500+" },
      { metric: "Mobil Dönüşüm Oranı", value: "%4.2" },
      { metric: "Ortalama Sipariş Değeri", value: "₺485" },
      { metric: "Müşteri Geri Dönüşü", value: "%65" },
    ],
    technologies: ["WooCommerce", "WordPress", "Cloudflare", "Stripe"],
    testimonial: {
      quote:
        "Online satış kanalımız sayesinde pandemi döneminde bile büyümeye devam ettik.",
      author: "Ayşe Kaya",
      position: "Kurucu, Doğal Lezzetler",
    },
  },
  {
    slug: "hukuk-burosu-kurumsal",
    title: "Hukuk Bürosu Kurumsal Web Sitesi",
    client: "Yılmaz & Ortakları Hukuk Bürosu",
    category: "Kurumsal Web",
    image: "law firm website",
    excerpt:
      "Prestijli bir hukuk bürosu için güven veren, profesyonel kurumsal site.",
    problem:
      "Mevcut web siteleri eski ve mobil uyumlu değildi. Müşteriler online randevu alamıyordu ve hizmetler hakkında yeterli bilgi yoktu.",
    solution:
      "Modern, temiz tasarımlı, SEO optimize edilmiş ve online randevu sistemi entegre kurumsal web sitesi tasarladık. Blog bölümü ile hukuk alanında içerik paylaşımı başlattık.",
    results: [
      { metric: "Online Randevu", value: "+180/ay" },
      { metric: "Organik Trafik", value: "%320 artış" },
      { metric: "Sayfa Hızı Skoru", value: "95/100" },
      { metric: "Form Doldurma Oranı", value: "%12.5" },
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    testimonial: {
      quote:
        "Web sitemiz artık prestijimizi yansıtıyor. Müşteri başvuruları önemli ölçüde arttı.",
      author: "Av. Ali Yılmaz",
      position: "Kurucu Ortak",
    },
  },
  {
    slug: "sosyal-medya-kozmetik",
    title: "Kozmetik Markası Sosyal Medya Yönetimi",
    client: "GlowBeauty",
    category: "Sosyal Medya",
    image: "beauty cosmetics instagram",
    excerpt:
      "Instagram ve TikTok'ta marka bilinirliği artırımı ve influencer işbirlikleri.",
    problem:
      "Yeni bir marka olan GlowBeauty'nin sosyal medyada görünürlüğü yoktu. Tutarlı bir içerik stratejisi ve marka kimliği eksikti.",
    solution:
      "6 aylık içerik stratejisi oluşturduk, profesyonel fotoğraf çekimleri yaptık ve micro-influencer işbirlikleri organize ettik. Düzenli Reels ve Story içerikleri ile takipçi etkileşimini artırdık.",
    results: [
      { metric: "Takipçi Artışı", value: "15K'dan 85K'ya" },
      { metric: "Etkileşim Oranı", value: "%8.5" },
      { metric: "Web Sitesi Trafiği", value: "%450 artış" },
      { metric: "Marka Bilinirliği", value: "%210 artış" },
    ],
    technologies: ["Instagram", "TikTok", "Canva", "Meta Business Suite"],
    testimonial: {
      quote:
        "Sosyal medya stratejileri sayesinde markamız kısa sürede tanındı.",
      author: "Zeynep Demir",
      position: "Kurucu, GlowBeauty",
    },
  },
  {
    slug: "google-ads-otomotiv",
    title: "Otomotiv Yan Sanayi Google Ads Kampanyası",
    client: "OtoParça Pro",
    category: "Dijital Reklam",
    image: "automotive parts advertising",
    excerpt:
      "ROI odaklı Google Ads kampanyası ile müşteri kazanım maliyetini %60 düşürdük.",
    problem:
      "OtoParça Pro, yüksek reklam bütçesi harcıyordu ancak dönüşüm oranları çok düşüktü. Yanlış anahtar kelime hedeflemeleri ve optimize edilmemiş landing page'ler vardı.",
    solution:
      "Tüm kampanyaları sıfırdan yapılandırdık, long-tail anahtar kelimeler belirledik ve dönüşüm odaklı landing page'ler oluşturduk. Remarketing kampanyaları ile sepet terk edenleri hedefledik.",
    results: [
      { metric: "Müşteri Kazanım Maliyeti", value: "%60 azaldı" },
      { metric: "Dönüşüm Oranı", value: "%1.2'den %4.8'e" },
      { metric: "ROI", value: "%340" },
      { metric: "Tıklama Başına Maliyet", value: "%45 düşüş" },
    ],
    technologies: [
      "Google Ads",
      "Google Analytics",
      "Google Tag Manager",
      "Unbounce",
    ],
    testimonial: {
      quote:
        "Reklam bütçemiz aynı kaldı ama satışlarımız 3 katına çıktı. Muhteşem bir performans!",
      author: "Murat Öztürk",
      position: "Pazarlama Müdürü, OtoParça Pro",
    },
  },
  {
    slug: "portfolyo-fotografci",
    title: "Fotoğrafçı Portfolyo Web Sitesi",
    client: "Can Yıldız Photography",
    category: "Kişisel Web",
    image: "photography portfolio website",
    excerpt:
      "Görsel odaklı, etkileyici portfolyo sitesi ile fotoğrafçının işlerini sergiliyoruz.",
    problem:
      "Freelance fotoğrafçı Can Yıldız, eserlerini sadece Instagram'da paylaşıyordu ve profesyonel bir portfolyosu yoktu. Potansiyel müşteriler onunla nasıl iletişime geçeceğini bulamıyordu.",
    solution:
      "Fotoğraflarını kategorize ederek sergileyebileceği, hızlı yüklenen, galeri odaklı bir portfolyo sitesi tasarladık. İletişim formu ve online rezervasyon sistemi ekledik.",
    results: [
      { metric: "Aylık İletişim", value: "+45 talep" },
      { metric: "Rezervasyon Artışı", value: "%280" },
      { metric: "Profesyonel İmaj", value: "10/10" },
      { metric: "Sayfa Görüntüleme", value: "15K/ay" },
    ],
    technologies: ["Next.js", "Lightbox.js", "Tailwind CSS", "Vercel"],
    testimonial: {
      quote:
        "Web sitem portföyümü harika bir şekilde sergiliyor. Müşteri sayım katlandı.",
      author: "Can Yıldız",
      position: "Fotoğrafçı",
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudiesByCategory(category: string): CaseStudy[] {
  return caseStudies.filter((study) => study.category === category);
}
