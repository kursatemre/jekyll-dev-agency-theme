export interface Service {
  slug: string;
  title: string;
  category: "web" | "marketing";
  icon: string;
  description: string;
  shortDescription: string;
  features: string[];
  process: {
    title: string;
    description: string;
  }[];
  technologies?: string[];
  benefits: string[];
  relatedBlogs?: string[];
}

export const services: Service[] = [
  {
    slug: "kurumsal-web",
    title: "Kurumsal Web Sitesi",
    category: "web",
    icon: "Building2",
    shortDescription:
      "Markanızı en iyi şekilde temsil eden, profesyonel kurumsal web siteleri.",
    description:
      "Kurumsal kimliğinizi dijital dünyada güçlü bir şekilde temsil eden, SEO uyumlu ve kullanıcı deneyimine odaklanan web siteleri tasarlıyoruz.",
    features: [
      "Responsive tasarım (Mobil, tablet, desktop uyumlu)",
      "SEO optimizasyonu",
      "Hızlı yüklenme süreleri",
      "Modern ve profesyonel tasarım",
      "İçerik yönetim sistemi (CMS)",
      "Sosyal medya entegrasyonu",
      "İletişim formları",
      "Google Analytics entegrasyonu",
    ],
    process: [
      {
        title: "Analiz ve Planlama",
        description:
          "İhtiyaçlarınızı analiz ediyor, hedef kitlenizi belirliyoruz.",
      },
      {
        title: "Tasarım",
        description:
          "Marka kimliğinize uygun, modern ve etkileyici tasarımlar oluşturuyoruz.",
      },
      {
        title: "Geliştirme",
        description: "En güncel teknolojilerle kodlama ve entegrasyonlar.",
      },
      {
        title: "Test ve Yayın",
        description:
          "Detaylı testlerden sonra sitenizi yayına alıyoruz.",
      },
    ],
    technologies: ["React", "Next.js", "Laravel", "WordPress", "Node.js"],
    benefits: [
      "7/24 erişilebilir dijital mağaza",
      "Kurumsal güvenilirlik",
      "Müşteri erişiminizi artırın",
      "Marka bilinirliğinizi güçlendirin",
    ],
    relatedBlogs: ["kurumsal-web-sitesi-neden-onemli", "web-tasarim-trendleri"],
  },
  {
    slug: "e-ticaret",
    title: "E-Ticaret Sitesi",
    category: "web",
    icon: "ShoppingCart",
    shortDescription:
      "Satışlarınızı artıran, kullanıcı dostu e-ticaret çözümleri.",
    description:
      "Online satışlarınızı maksimize eden, güvenli ödeme sistemleri ve gelişmiş yönetim panelleri ile donatılmış e-ticaret platformları geliştiriyoruz.",
    features: [
      "Ürün yönetim sistemi",
      "Sepet ve ödeme entegrasyonu",
      "Stok takibi",
      "Kargo entegrasyonu",
      "Çoklu ödeme seçenekleri",
      "Kampanya ve kupon sistemi",
      "Müşteri paneli",
      "Sipariş takip sistemi",
    ],
    process: [
      {
        title: "İhtiyaç Analizi",
        description:
          "Satış süreçlerinizi ve ürün yapınızı detaylı analiz ediyoruz.",
      },
      {
        title: "Platform Seçimi",
        description:
          "İşletmenize en uygun e-ticaret altyapısını belirliyoruz.",
      },
      {
        title: "Tasarım ve Geliştirme",
        description:
          "Kullanıcı dostu arayüz ve güvenli altyapı oluşturuyoruz.",
      },
      {
        title: "Entegrasyonlar",
        description: "Ödeme, kargo ve muhasebe sistemlerini entegre ediyoruz.",
      },
    ],
    technologies: [
      "WooCommerce",
      "Shopify",
      "Laravel E-Commerce",
      "Next.js Commerce",
    ],
    benefits: [
      "24/7 online satış",
      "Geniş müşteri kitlesine erişim",
      "Otomatik sipariş yönetimi",
      "Satış raporları ve analitik",
    ],
    relatedBlogs: ["e-ticaret-satis-artirma", "online-magaza-acmak"],
  },
  {
    slug: "ozel-yazilim",
    title: "Özel Yazılım Geliştirme",
    category: "web",
    icon: "Code2",
    shortDescription:
      "İşletmenize özel, ihtiyaçlarınıza göre tasarlanmış yazılım çözümleri.",
    description:
      "İş süreçlerinizi optimize eden, verimliliğinizi artıran ve rekabet avantajı sağlayan özel yazılım çözümleri geliştiriyoruz.",
    features: [
      "İhtiyaca özel çözümler",
      "CRM ve ERP sistemleri",
      "Stok yönetim sistemleri",
      "Muhasebe yazılımları",
      "Mobil uygulama entegrasyonu",
      "API geliştirme",
      "Veri analizi ve raporlama",
      "Bulut tabanlı çözümler",
    ],
    process: [
      {
        title: "Keşif ve Analiz",
        description:
          "İş süreçlerinizi detaylı analiz ediyor, gereksinimleri belirliyoruz.",
      },
      {
        title: "Mimari Tasarım",
        description:
          "Ölçeklenebilir ve güvenli yazılım mimarisi tasarlıyoruz.",
      },
      {
        title: "Geliştirme",
        description: "Agile metodoloji ile iteratif geliştirme yapıyoruz.",
      },
      {
        title: "Test ve Devreye Alma",
        description:
          "Kapsamlı testler ve eğitim sonrası sistemi devreye alıyoruz.",
      },
    ],
    technologies: ["React", "Node.js", "Laravel", "Python", "PostgreSQL"],
    benefits: [
      "İş süreçlerinde %40'a varan verimlilik artışı",
      "Özelleştirilebilir çözümler",
      "Entegre sistemler",
      "Uzun vadeli maliyet tasarrufu",
    ],
    relatedBlogs: ["ozel-yazilim-mi-hazir-yazilim-mi", "crm-nedir"],
  },
  {
    slug: "kisisel-site",
    title: "Kişisel Web Sitesi & Portfolyo",
    category: "web",
    icon: "User",
    shortDescription:
      "Kendinizi profesyonel bir şekilde tanıtın. CV ve portfolyo siteleri.",
    description:
      "Freelancerlar, sanatçılar ve profesyoneller için etkileyici portfolyo ve kişisel web siteleri tasarlıyoruz.",
    features: [
      "Modern ve şık tasarım",
      "Portfolyo galerisi",
      "CV ve özgeçmiş bölümü",
      "İletişim formu",
      "Blog entegrasyonu",
      "Sosyal medya linkleri",
      "Hızlı yükleme",
      "Uygun fiyat",
    ],
    process: [
      {
        title: "Görüşme",
        description: "Kendinizi nasıl tanıtmak istediğinizi öğreniyoruz.",
      },
      {
        title: "Tasarım",
        description: "Kişiliğinizi yansıtan özgün tasarım oluşturuyoruz.",
      },
      {
        title: "İçerik Düzenleme",
        description: "İçeriklerinizi düzenliyor ve optimize ediyoruz.",
      },
      {
        title: "Yayın",
        description: "Sitenizi hızlı bir şekilde yayına alıyoruz.",
      },
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Jekyll"],
    benefits: [
      "Profesyonel imaj",
      "İş fırsatlarını artırın",
      "Kendinizi tanıtın",
      "Hızlı kurulum",
    ],
    relatedBlogs: ["kisisel-web-sitesi-onemlimi", "portfolyo-nasil-hazirlanir"],
  },
  {
    slug: "sosyal-medya",
    title: "Sosyal Medya Yönetimi",
    category: "marketing",
    icon: "Share2",
    shortDescription:
      "Sosyal medya hesaplarınızı profesyonelce yönetiyor, takipçinizi artırıyoruz.",
    description:
      "Instagram, Facebook, LinkedIn ve diğer platformlarda marka bilinirliğinizi artıran, etkileşim odaklı sosyal medya yönetimi hizmeti sunuyoruz.",
    features: [
      "İçerik planlaması ve oluşturma",
      "Düzenli paylaşım",
      "Takipçi etkileşimi",
      "Hashtag stratejisi",
      "Görsel ve video içerik üretimi",
      "Reels ve Story yönetimi",
      "Aylık raporlama",
      "Topluluk yönetimi",
    ],
    process: [
      {
        title: "Strateji Belirleme",
        description: "Hedef kitlenizi ve içerik stratejinizi planlıyoruz.",
      },
      {
        title: "İçerik Üretimi",
        description: "Markanıza uygun, özgün içerikler oluşturuyoruz.",
      },
      {
        title: "Yayınlama",
        description: "En uygun zamanlarda düzenli paylaşımlar yapıyoruz.",
      },
      {
        title: "Analiz ve Raporlama",
        description:
          "Performansı izliyor, aylık raporlar sunuyoruz.",
      },
    ],
    benefits: [
      "Marka bilinirliği artışı",
      "Organik takipçi kazanımı",
      "Müşteri etkileşimi",
      "Profesyonel içerik üretimi",
    ],
    relatedBlogs: [
      "sosyal-medya-stratejisi",
      "instagram-takipci-artirma",
    ],
  },
  {
    slug: "reklam-yonetimi",
    title: "Google & Meta Reklam Yönetimi",
    category: "marketing",
    icon: "Target",
    shortDescription:
      "Google Ads ve Meta (Facebook/Instagram) reklamlarınızı profesyonelce yönetiyoruz.",
    description:
      "ROI odaklı reklam kampanyaları ile hedef kitlenize doğrudan ulaşıyor, satışlarınızı ve dönüşüm oranlarınızı artırıyoruz.",
    features: [
      "Google Ads yönetimi",
      "Facebook & Instagram Ads",
      "Hedef kitle analizi",
      "A/B test çalışmaları",
      "Reklam metni ve görsel optimizasyonu",
      "Bütçe optimizasyonu",
      "Dönüşüm takibi",
      "Detaylı performans raporları",
    ],
    process: [
      {
        title: "Hedef Belirleme",
        description:
          "Kampanya hedeflerinizi ve KPI'larınızı belirliyoruz.",
      },
      {
        title: "Hedefleme ve Strateji",
        description: "Doğru kitleyi en uygun strateji ile hedefliyoruz.",
      },
      {
        title: "Kampanya Kurulumu",
        description:
          "Reklam kampanyalarını profesyonelce oluşturup başlatıyoruz.",
      },
      {
        title: "Optimizasyon ve Raporlama",
        description: "Sürekli optimizasyon ve düzenli raporlama.",
      },
    ],
    benefits: [
      "Hedefli müşteri erişimi",
      "Ölçülebilir sonuçlar",
      "Düşük maliyetli müşteri kazanımı",
      "Hızlı sonuçlar",
    ],
    relatedBlogs: ["google-ads-nasil-kullanilir", "facebook-reklam-modelleri"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: "web" | "marketing"): Service[] {
  return services.filter((service) => service.category === category);
}
