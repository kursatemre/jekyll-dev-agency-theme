---
layout: case-study
title: "Restaurant Menu Admin Panel"
client: "Restaurant Management"
category: "Admin Panel"
tags: [Next.js 16, React 19, Supabase, Tailwind CSS v4, TypeScript, Vercel Blob]
date: 2024-11-01
featured_image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=630&fit=crop"
excerpt: "Modern restoran menü yönetim sistemi. Admin paneli, mobil menü ve TV ekranı görünümleri ile üç arayüz. Supabase database, Vercel Blob image storage ve IP-based erişim kontrolü."
results:
  - value: "3 Arayüz"
    label: "Admin/Mobile/TV"
  - value: "Supabase"
    label: "Database"
  - value: "IP Control"
    label: "TV Güvenliği"
technologies:
  - Next.js 16
  - React 19
  - TypeScript
  - Supabase
  - Tailwind CSS v4
  - Vercel Blob
  - PostgreSQL
---

# Restaurant Menu Admin Panel

## Proje Özeti

Modern restoran işletmeleri için geliştirilmiş tam özellikli menü yönetim sistemidir. Üç farklı arayüz sunar: Admin paneli (yönetim), mobil menü (müşteri görünümü) ve TV display (dijital menü tahtası). Supabase ile güçlü backend, Vercel Blob ile görsel yönetimi ve IP-based güvenlik ile TV ekranı kontrolü sağlar.

## Challenge (Zorluk)

### İş İhtiyaçları

Restoranların dijital menü yönetiminde karşılaştıkları zorluklar:

- **Multi-Platform**: Admin, mobil ve TV için farklı arayüzler
- **Kolay Yönetim**: Teknik bilgi gerektirmeyen admin paneli
- **Görsel Yönetimi**: Ürün fotoğraflarının kolay yüklenmesi
- **Kategori Sistemi**: Ürünleri organize etme
- **Tema Özelleştirme**: Her restoran kendi renklerini ayarlayabilmeli
- **TV Display**: Restoranda büyük ekranlarda otomatik dönen menü
- **Güvenlik**: TV endpoint'ine unauthorized erişim engelleme

### Teknik Gereksinimler

- **Framework**: Next.js 16 (latest)
- **UI Library**: React 19
- **Database**: PostgreSQL (Supabase)
- **Storage**: Image hosting (Vercel Blob)
- **Styling**: Tailwind CSS v4
- **TypeScript**: Type-safe development
- **Security**: IP-based access control

## Solution (Çözüm)

### Mimari Yaklaşım

**System Architecture:**
```
┌─────────────────────────────────────────────┐
│         Three User Interfaces                │
│                                              │
│  1. Admin Panel (/)                          │
│     - Product CRUD                           │
│     - Category management                    │
│     - Theme customization                    │
│     - Image upload                           │
│                                              │
│  2. Mobile Menu (/menu)                      │
│     - Customer-facing view                   │
│     - Category filtering                     │
│     - Responsive design                      │
│     - Theme colors applied                   │
│                                              │
│  3. TV Display (/tv)                         │
│     - Large screen optimized                 │
│     - Auto-rotating carousel                 │
│     - IP-based access control                │
│     - Read-only view                         │
│                                              │
├─────────────────────────────────────────────┤
│         Backend Services                     │
│  - Supabase (PostgreSQL)                     │
│  - Vercel Blob (Image Storage)               │
│  - Next.js API Routes                        │
└─────────────────────────────────────────────┘
```

### Teknoloji Stack

**Frontend Technologies:**
- **Next.js 16**: Latest React framework
- **React 19**: Newest React features
- **TypeScript**: Type safety
- **Tailwind CSS v4**: Latest utility framework

**Backend & Database:**
- **Supabase**: PostgreSQL database
- **Supabase Auth**: Optional authentication
- **Vercel Blob**: Image storage
- **Next.js API Routes**: Backend logic

**Deployment:**
- **Vercel**: Hosting platform
- **Environment Variables**: Configuration

### Temel Özellikler

#### 1. Admin Panel (/)

**Product Management:**
```typescript
// Admin panel CRUD operations
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  imageUrl: string;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Create product with image upload
async function createProduct(formData: FormData) {
  // Upload image to Vercel Blob
  const imageFile = formData.get('image') as File;
  const { url } = await put(imageFile.name, imageFile, {
    access: 'public',
  });

  // Save product to Supabase
  const { data, error } = await supabase
    .from('products')
    .insert({
      name: formData.get('name'),
      description: formData.get('description'),
      price: parseFloat(formData.get('price') as string),
      categoryId: formData.get('categoryId'),
      imageUrl: url,
      isAvailable: true,
    })
    .select()
    .single();

  return data;
}
```

**Admin Özellikleri:**
- ➕ Ürün ekleme
- ✏️ Ürün düzenleme
- 🗑️ Ürün silme
- 📂 Kategori yönetimi
- 🖼️ Görsel yükleme (Vercel Blob)
- 🎨 Tema renk özelleştirmesi
- 👁️ Ürün aktif/pasif durumu

#### 2. Mobile Menu (/menu)

**Customer View:**
```typescript
// Menu page with category filtering
'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function MenuPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const supabase = createClient();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.categoryId === selectedCategory);

  return (
    <div className="menu-page">
      {/* Category Filter */}
      <div className="category-filter">
        <button
          onClick={() => setSelectedCategory('all')}
          className={selectedCategory === 'all' ? 'active' : ''}
        >
          Tümü
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={selectedCategory === cat.id ? 'active' : ''}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
```

**Mobile Menu Özellikleri:**
- 📱 Mobile-first responsive design
- 🔍 Kategori filtreleme
- 🖼️ Yüksek kaliteli ürün görselleri
- 💰 Net fiyat gösterimi
- 🎨 Özelleştirilebilir renk teması
- ⚡ Hızlı yüklenme

#### 3. TV Display (/tv)

**Large Screen Auto-Carousel:**
```typescript
// TV display with IP-based access control
import { headers } from 'next/headers';

export default async function TVDisplay() {
  const headersList = headers();
  const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip');

  // IP-based access control
  const allowedIPs = process.env.ALLOWED_TV_IPS?.split(',') || [];

  if (!allowedIPs.includes(ip)) {
    return (
      <div className="access-denied">
        <h1>403 - Access Denied</h1>
        <p>This screen is only accessible from authorized locations.</p>
      </div>
    );
  }

  // Fetch products for TV display
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .eq('isAvailable', true);

  return <TVCarousel products={products} />;
}

// Auto-rotating carousel component
function TVCarousel({ products }: { products: Product[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000); // 5 saniyede bir değişim

    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[currentIndex];

  return (
    <div className="tv-display">
      <div className="product-showcase">
        <img
          src={currentProduct.imageUrl}
          alt={currentProduct.name}
          className="product-image-large"
        />
        <div className="product-info">
          <h1 className="text-6xl font-bold">{currentProduct.name}</h1>
          <p className="text-3xl text-gray-600">{currentProduct.description}</p>
          <div className="text-5xl font-bold text-green-600 mt-4">
            ₺{currentProduct.price}
          </div>
        </div>
      </div>
    </div>
  );
}
```

**TV Display Özellikleri:**
- 📺 Large screen optimized (1920x1080+)
- 🔄 Otomatik dönen carousel
- 🔒 IP-based erişim kontrolü
- 📖 Read-only (sadece görüntüleme)
- 🎨 Büyük tipografi
- ⏱️ 5 saniyelik geçişler

#### 4. Database Schema (Supabase)

**PostgreSQL Tables:**
```sql
-- Categories table
CREATE TABLE categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  display_order INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Products table
CREATE TABLE products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  image_url TEXT,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Theme settings table
CREATE TABLE theme_settings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  primary_color VARCHAR(7) DEFAULT '#3b82f6',
  secondary_color VARCHAR(7) DEFAULT '#10b981',
  accent_color VARCHAR(7) DEFAULT '#f59e0b',
  background_color VARCHAR(7) DEFAULT '#ffffff',
  text_color VARCHAR(7) DEFAULT '#1f2937',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Public products are viewable by everyone"
  ON products FOR SELECT
  USING (is_available = true);
```

#### 5. Image Upload (Vercel Blob)

**File Upload Implementation:**
```typescript
import { put } from '@vercel/blob';

export async function uploadProductImage(file: File): Promise<string> {
  const timestamp = Date.now();
  const fileName = `products/${timestamp}-${file.name}`;

  const blob = await put(fileName, file, {
    access: 'public',
    addRandomSuffix: true,
  });

  return blob.url;
}

// Usage in form
async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
  const file = e.target.files?.[0];
  if (!file) return;

  setUploading(true);
  try {
    const imageUrl = await uploadProductImage(file);
    setFormData({ ...formData, imageUrl });
  } catch (error) {
    console.error('Upload failed:', error);
  } finally {
    setUploading(false);
  }
}
```

#### 6. Theme Customization

**Dynamic Color Theming:**
```typescript
// Theme context
interface ThemeSettings {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeSettings | null>(null);

  useEffect(() => {
    fetchTheme();
  }, []);

  const fetchTheme = async () => {
    const { data } = await supabase.from('theme_settings').select('*').single();
    setTheme(data);

    // Apply CSS variables
    if (data) {
      document.documentElement.style.setProperty('--color-primary', data.primaryColor);
      document.documentElement.style.setProperty('--color-secondary', data.secondaryColor);
      document.documentElement.style.setProperty('--color-accent', data.accentColor);
    }
  };

  return <ThemeContext.Provider value={% raw %}{{ theme, setTheme }}{% endraw %}>{children}</ThemeContext.Provider>;
}
```

### Geliştirme Süreci

#### 1. Setup & Design (3 Gün)
- Next.js 16 + React 19 setup
- Supabase project creation
- Database schema design
- UI wireframing

#### 2. Admin Panel (1 Hafta)
- CRUD operations
- Image upload
- Category management
- Theme customization

#### 3. Mobile Menu (3 Gün)
- Responsive design
- Category filtering
- Theme application
- Product display

#### 4. TV Display (3 Gün)
- Large screen layout
- Auto-carousel
- IP-based security
- Typography optimization

#### 5. Testing & Deploy (2 Gün)
- Cross-device testing
- Performance optimization
- Vercel deployment
- Environment setup

## Teknik Detaylar

### Next.js 16 App Router

**Route Structure:**
```
app/
├── (admin)/
│   ├── layout.tsx
│   ├── page.tsx              # Admin panel
│   ├── products/
│   │   ├── page.tsx
│   │   ├── new/page.tsx
│   │   └── [id]/edit/page.tsx
│   └── categories/page.tsx
├── menu/
│   └── page.tsx               # Mobile menu
├── tv/
│   └── page.tsx               # TV display
└── api/
    ├── products/route.ts
    ├── categories/route.ts
    └── upload/route.ts
```

### Tailwind CSS v4 Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      },
    },
  },
};

export default config;
```

### IP-Based Access Control

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/tv')) {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');
    const allowedIPs = process.env.ALLOWED_TV_IPS?.split(',') || [];

    if (!ip || !allowedIPs.includes(ip)) {
      return new NextResponse('Access Denied', { status: 403 });
    }
  }

  return NextResponse.next();
}
```

## Results (Sonuçlar)

### Performans Metrikleri

- ⚡ **Admin Load**: <1.5s
- 📱 **Mobile Menu**: <1s
- 📺 **TV Display**: <2s
- 🚀 **Image Load**: Optimized via Vercel Blob CDN
- 🎯 **Type Safety**: %100 TypeScript

### Özellikler

- ✅ Üç farklı arayüz (Admin/Mobile/TV)
- ✅ Supabase PostgreSQL database
- ✅ Vercel Blob image storage
- ✅ IP-based security
- ✅ Theme customization
- ✅ Responsive design
- ✅ Auto-carousel for TV

## Öğrenilen Dersler

### Başarılar

1. **Next.js 16 + React 19**: Cutting-edge features
2. **Supabase**: Kolay backend setup
3. **Vercel Blob**: Simple image hosting
4. **Tailwind v4**: Improved performance
5. **IP Control**: Effective security measure

### Geliştirilecek Alanlar

1. **Real-time Updates**: Supabase Realtime
2. **Analytics**: Order tracking
3. **Multi-language**: i18n support
4. **QR Code**: QR menu generation

## Kullanılan Teknolojiler

- Next.js 16
- React 19
- TypeScript
- Supabase (PostgreSQL)
- Tailwind CSS v4
- Vercel Blob

---

## Benzer Bir Proje İçin

Restoran menü sistemi, admin paneli veya multi-platform çözüm mü istiyorsunuz? Modern teknolojilerle özel çözümler geliştiriyoruz.

[İletişime Geç](/iletisim) | [Portfolyoya Dön](/portfolyo)
