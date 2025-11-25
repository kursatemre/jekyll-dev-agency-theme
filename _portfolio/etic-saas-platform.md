---
layout: case-study
title: "ETIC - E-Ticaret SaaS Platformu"
client: "ETIC"
category: "SaaS Platform"
tags: [Node.js, Next.js, PostgreSQL, Prisma, Multi-Tenant, TypeScript, Turborepo]
date: 2024-11-20
featured_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"
excerpt: "Multi-tenant mimarisine sahip, tam özellikli E-Ticaret SaaS platformu. Sınırsız mağaza, ürün ve trafik kapasitesi, çoklu ödeme sağlayıcı desteği ve özelleştirilebilir tema sistemi."
results:
  - value: "Multi-Tenant"
    label: "SaaS Mimarisi"
  - value: "Unlimited"
    label: "Ürün Kapasitesi"
  - value: "Monorepo"
    label: "Turborepo Yapısı"
technologies:
  - Node.js
  - Next.js 14
  - TypeScript
  - PostgreSQL
  - Prisma ORM
  - React Query
  - Zustand
  - Turborepo
  - Tailwind CSS
  - Framer Motion
---

# ETIC - E-Ticaret SaaS Platformu

## Proje Özeti

ETIC, modern işletmelerin kendi e-ticaret mağazalarını hızlıca oluşturmalarını ve yönetmelerini sağlayan tam özellikli bir SaaS (Software as a Service) platformudur. Multi-tenant mimarisi sayesinde tek bir kod tabanından binlerce bağımsız mağaza çalıştırabilir, her mağaza kendi verilerini izole bir şekilde yönetir.

## Challenge (Zorluk)

### İş İhtiyaçları

SaaS tabanlı e-ticaret platformlarında karşılaşılan zorluklar:

- **Multi-Tenancy**: Her mağazanın verilerini güvenli şekilde izole etme
- **Ölçeklenebilirlik**: Binlerce mağazayı tek bir platformda barındırma
- **Performans**: Yüksek trafik altında hızlı response süreleri
- **Customization**: Her mağazanın kendine özel görünüm ve ayarları
- **Entegrasyon**: Farklı ödeme sağlayıcıları ve dış servisler
- **Kod Kalitesi**: Monorepo yapısında bakımı kolay, modüler kod

### Teknik Gereksinimler

- **Mimari**: Multi-tenant SaaS architecture
- **Monorepo**: Turborepo ile workspace yönetimi
- **Database**: PostgreSQL ile Prisma ORM
- **Authentication**: JWT tabanlı güvenli kimlik doğrulama
- **Cache**: Redis ile performans optimizasyonu
- **Frontend**: Modern, responsive ve hızlı Next.js uygulaması
- **Deployment**: Scalable ve kolay deploy edilebilir

## Solution (Çözüm)

### Mimari Yaklaşım

**Multi-Tenant Architecture:**
```
┌────────────────────────────────────────────┐
│         Tenant 1        Tenant 2   Tenant N │
├────────────────────────────────────────────┤
│          Application Layer (Next.js)        │
├────────────────────────────────────────────┤
│         API Routes (Tenant Context)         │
├────────────────────────────────────────────┤
│      Prisma ORM (Row-Level Security)        │
├────────────────────────────────────────────┤
│         PostgreSQL (Single DB)              │
└────────────────────────────────────────────┘
```

**Monorepo Structure:**
```
etic/
├── apps/
│   ├── web/              # Main SaaS platform
│   ├── storefront/       # Customer-facing stores
│   └── admin/            # Admin dashboard
├── packages/
│   ├── database/         # Prisma schema & migrations
│   ├── ui/              # Shared components
│   ├── auth/            # Authentication logic
│   └── config/          # Shared configs
└── package.json         # Turborepo configuration
```

### Teknoloji Stack

**Backend Technologies:**
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **TypeScript**: Type-safe development
- **Prisma ORM**: Modern database toolkit
- **PostgreSQL**: Relational database
- **JWT**: Authentication tokens
- **Redis**: Caching layer

**Frontend Technologies:**
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **Zustand**: State management
- **React Query**: Server state management
- **React Hook Form**: Form handling

**Monorepo & DevOps:**
- **Turborepo**: Monorepo build system
- **pnpm**: Fast, disk space efficient package manager
- **Docker**: Containerization
- **GitHub Actions**: CI/CD pipeline

### Temel Özellikler

#### 1. Multi-Tenant İzolasyonu

**Tenant Bazlı Veri Ayrımı:**
```typescript
// Prisma Schema
model Store {
  id        String   @id @default(cuid())
  tenantId  String   @unique
  name      String
  domain    String   @unique
  settings  Json
  products  Product[]
  orders    Order[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([tenantId])
}

// Middleware ile tenant context
export async function getTenantContext(req: Request) {
  const domain = req.headers.host;
  const store = await prisma.store.findUnique({
    where: { domain }
  });
  return store?.tenantId;
}
```

**Özellikler:**
- 🏢 Tenant bazlı veri izolasyonu
- 🔒 Row-Level Security (RLS)
- 🌐 Custom domain desteği
- ⚙️ Tenant-specific ayarlar
- 📊 Ayrı analytics ve raporlar

#### 2. Esnek Ürün Yönetimi

**Sınırsız Ürün Kapasitesi:**
```typescript
interface Product {
  id: string;
  tenantId: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  variants: ProductVariant[];
  inventory: InventoryItem[];
  seo: SEOMetadata;
  status: 'draft' | 'active' | 'archived';
}

interface ProductVariant {
  id: string;
  sku: string;
  options: { [key: string]: string }; // Size: "L", Color: "Red"
  price: number;
  inventory: number;
}
```

**Özellikler:**
- ∞ Sınırsız ürün ve varyant
- 📸 Multi-image support
- 💰 Flexible pricing (compare at price, discounts)
- 📦 Inventory tracking per variant
- 🔍 SEO-friendly URLs and metadata

#### 3. Çoklu Ödeme Sağlayıcısı

**Payment Provider Integration:**
```typescript
// Payment adapter pattern
interface PaymentProvider {
  name: string;
  initialize(config: any): void;
  createPayment(amount: number, currency: string): Promise<PaymentIntent>;
  verifyPayment(paymentId: string): Promise<PaymentStatus>;
}

class StripeProvider implements PaymentProvider {
  private stripe: Stripe;

  initialize(config: { apiKey: string }) {
    this.stripe = new Stripe(config.apiKey);
  }

  async createPayment(amount: number, currency: string) {
    return await this.stripe.paymentIntents.create({
      amount: amount * 100,
      currency
    });
  }
}

class IyzicoProvider implements PaymentProvider {
  // Iyzico implementation
}
```

**Desteklenen Sağlayıcılar:**
- 💳 **Stripe**: Global ödeme platformu
- 🇹🇷 **Iyzico**: Türkiye'nin ödeme altyapısı
- 🔌 Plugin mimarisi ile kolay ekleme

#### 4. Gelişmiş Satış Analitiği

**Analytics Dashboard:**
```typescript
interface AnalyticsData {
  revenue: {
    total: number;
    trend: number;
    byPeriod: { date: string; amount: number }[];
  };
  orders: {
    total: number;
    trend: number;
    avgOrderValue: number;
  };
  customers: {
    total: number;
    new: number;
    returning: number;
  };
  topProducts: {
    id: string;
    name: string;
    revenue: number;
    quantity: number;
  }[];
}
```

**Analytics Özellikleri:**
- 📊 Gelir ve satış trendleri
- 👥 Müşteri analitiği
- 🏆 En çok satan ürünler
- 📈 Conversion rate tracking
- 🗓️ Özelleştirilebilir tarih aralıkları

#### 5. Özelleştirilebilir Tema Sistemi

**Theme Customization:**
```typescript
interface StoreTheme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
  };
  layout: {
    headerStyle: 'minimal' | 'classic' | 'modern';
    productCardStyle: 'grid' | 'list' | 'masonry';
  };
  customCSS?: string;
}
```

**Theme Özellikleri:**
- 🎨 Renk paleti özelleştirmesi
- 🔤 Font seçimi
- 📐 Layout options
- 💅 Custom CSS injection
- 📱 Responsive preview

### Geliştirme Süreci

#### 1. Planlama & Mimari (2 Hafta)
- Multi-tenant architecture tasarımı
- Database schema design
- Monorepo structure planning
- API endpoint tasarımı

#### 2. Backend Development (5 Hafta)
- Prisma schema ve migrations
- API routes (Next.js API)
- Authentication & authorization
- Multi-tenant middleware
- Payment integrations
- File upload handling

#### 3. Frontend Development (4 Hafta)
- Admin dashboard UI
- Storefront templates
- Product management
- Order management
- Analytics dashboard
- Theme customization panel

#### 4. Testing & Deployment (2 Hafta)
- Unit tests
- Integration tests
- E2E tests
- Performance optimization
- Docker deployment

## Teknik Detaylar

### Prisma Schema Highlights

**Multi-Tenant Models:**
```prisma
model Store {
  id          String    @id @default(cuid())
  tenantId    String    @unique
  name        String
  domain      String    @unique
  subdomain   String    @unique

  // Relations
  products    Product[]
  orders      Order[]
  customers   Customer[]
  settings    StoreSettings?

  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  @@index([tenantId])
  @@index([domain])
}

model Product {
  id          String   @id @default(cuid())
  storeId     String
  store       Store    @relation(fields: [storeId], references: [id])

  name        String
  slug        String
  description String?  @db.Text
  price       Decimal  @db.Decimal(10, 2)

  // Variants
  variants    ProductVariant[]

  // Media
  images      ProductImage[]

  // SEO
  seoTitle    String?
  seoDescription String?

  status      ProductStatus @default(DRAFT)

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@unique([storeId, slug])
  @@index([storeId, status])
}

enum ProductStatus {
  DRAFT
  ACTIVE
  ARCHIVED
}
```

### Next.js App Router Structure

**API Route with Tenant Context:**
```typescript
// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getTenantId } from '@/lib/tenant';
import { prisma } from '@etic/database';

export async function GET(req: NextRequest) {
  try {
    const tenantId = await getTenantId(req);

    if (!tenantId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const products = await prisma.product.findMany({
      where: {
        store: { tenantId }
      },
      include: {
        variants: true,
        images: true
      }
    });

    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const tenantId = await getTenantId(req);
  const body = await req.json();

  const product = await prisma.product.create({
    data: {
      ...body,
      store: {
        connect: { tenantId }
      }
    }
  });

  return NextResponse.json({ product }, { status: 201 });
}
```

### State Management with Zustand

```typescript
// stores/useProductStore.ts
import { create } from 'zustand';

interface ProductStore {
  products: Product[];
  isLoading: boolean;
  error: string | null;

  fetchProducts: () => Promise<void>;
  addProduct: (product: CreateProductDto) => Promise<void>;
  updateProduct: (id: string, data: Partial<Product>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      const res = await fetch('/api/products');
      const { products } = await res.json();
      set({ products, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  addProduct: async (productData) => {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData)
    });
    const { product } = await res.json();
    set({ products: [...get().products, product] });
  },

  // ... other actions
}));
```

### Turborepo Configuration

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    },
    "dev": {
      "cache": false
    },
    "lint": {
      "outputs": []
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": ["coverage/**"]
    }
  }
}
```

## Results (Sonuçlar)

### Performans Metrikleri

- ⚡ **API Response**: <200ms ortalama
- 🏪 **Tenant İzolasyonu**: %100 veri güvenliği
- 📈 **Ölçeklenebilirlik**: Binlerce store tek platformda
- 🚀 **Build Time**: Turborepo ile %40 daha hızlı
- 💾 **Disk Usage**: pnpm ile %30 daha az

### Teknik Başarılar

- ✅ Multi-tenant architecture başarıyla implemente edildi
- ✅ Monorepo yapısı kod paylaşımını kolaylaştırdı
- ✅ Prisma ORM ile type-safe database access
- ✅ Next.js App Router ile modern frontend
- ✅ Modüler payment provider sistemi
- ✅ Tema özelleştirme sistemi

### İş Etkileri

- 🏢 Sınırsız mağaza barındırma kapasitesi
- ∞ Sınırsız ürün ve trafik
- 💳 Çoklu ödeme sağlayıcı desteği
- 🎨 Her mağaza kendi görünümünü özelleştirebilir
- 📊 Detaylı satış analitiği

## Öğrenilen Dersler

### Başarılar

1. **Multi-Tenant Architecture**: Güvenli veri izolasyonu başarıyla sağlandı
2. **Turborepo**: Monorepo yapısı development workflow'unu hızlandırdı
3. **Prisma ORM**: Type-safe queries development hızını artırdı
4. **Next.js 14**: App Router ile modern, performanslı frontend

### Geliştirilecek Alanlar

1. **Mikroservis Geçişi**: Monolitten mikroservislere geçiş
2. **Real-time Features**: WebSocket ile real-time updates
3. **Advanced Analytics**: Machine learning ile tahminleme
4. **Mobile App**: React Native ile mobile uygulama

## Gelecek Planları

### v2.0 Özellikleri

- 🤖 AI-powered product recommendations
- 📱 React Native mobile app (iOS & Android)
- 🌍 Multi-language storefront support
- 💱 Multi-currency pricing
- 🔔 Real-time notifications (WebSocket)
- 📧 Advanced email marketing automation
- 🎯 A/B testing for storefronts
- 🔌 Marketplace for third-party apps

### Mikroservis Roadmap

- **Product Service**: Ürün yönetimi microservice
- **Order Service**: Sipariş işleme microservice
- **Payment Service**: Ödeme işlemleri microservice
- **Analytics Service**: Analitik ve raporlama microservice
- **Notification Service**: Bildirim yönetimi microservice

## Kullanılan Teknolojiler

### Backend
- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT
- Redis

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Zustand
- React Query

### DevOps & Tools
- Turborepo
- pnpm
- Docker
- GitHub Actions

---

## Benzer Bir Proje İçin

Kendi SaaS platformunuzu mu kurmak istiyorsunuz? Multi-tenant mimarisi, ölçeklenebilir yapı ve modern teknolojilerle enterprise-grade çözümler geliştiriyoruz.

[İletişime Geç](/iletisim) | [Portfolyoya Dön](/portfolyo)
