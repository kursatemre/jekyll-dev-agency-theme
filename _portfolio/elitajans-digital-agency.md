---
layout: case-study
title: "Elitajans - Dijital Ajans Web Sitesi"
client: "Elitajans"
category: "Kurumsal Web"
tags: [React, TypeScript, Vite, Tailwind CSS, Framer Motion, Admin Panel]
date: 2024-11-22
featured_image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=630&fit=crop"
project_url: "https://elitajanstemas.vercel.app"
excerpt: "Modern dijital ajans web sitesi ve admin paneli. 7 farklı hizmet kategorisi, portfolyo yönetimi, blog sistemi ve müşteri referansları ile tam özellikli kurumsal çözüm."
results:
  - value: "Admin Panel"
    label: "Yönetim Sistemi"
  - value: "7 Hizmet"
    label: "Kategori"
  - value: "Modern UI"
    label: "Tasarım"
technologies:
  - React 18
  - TypeScript
  - Vite 6
  - Tailwind CSS
  - Framer Motion
  - React Router
  - Zustand
  - shadcn/ui
---

# Elitajans - Modern Dijital Ajans Platformu

## Proje Özeti

Elitajans, dijital ajans hizmetlerini sergilemek ve yönetmek için geliştirilmiş modern bir web platformudur. Müşterilere hizmetleri, portfolyo projelerini ve blog içeriklerini sunarken, admin paneli ile tüm içeriklerin kolayca yönetilmesini sağlar. Glassmorphism efektleri, gradient tasarımlar ve smooth animasyonlarla görsel olarak etkileyici bir deneyim sunar.

## Challenge (Zorluk)

### İş İhtiyaçları

Dijital ajansların web sitelerinde karşılaştıkları zorluklar:

- **İçerik Yönetimi**: Proje, blog, referans güncellemelerinin kolay olması
- **Profesyonel Görünüm**: Modern, trend tasarımlarla güven veren imaj
- **Hizmet Çeşitliliği**: Farklı hizmet kategorilerini etkili sunma
- **İletişim**: Potansiyel müşterilerden gelen mesajları organize etme
- **Portföy Gösterimi**: Başarılı projeleri etkili bir şekilde sergileme
- **Performans**: Hızlı yüklenme ve smooth animasyonlar

### Teknik Gereksinimler

- **Frontend**: Modern React framework (Vite)
- **Type Safety**: TypeScript ile güvenli geliştirme
- **UI/UX**: Glassmorphism, gradient ve animasyonlar
- **State Management**: Verimli durum yönetimi
- **Admin Panel**: İçerik yönetimi için tam özellikli panel
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **SEO**: Arama motoru optimizasyonu

## Solution (Çözüm)

### Mimari Yaklaşım

**Application Architecture:**
```
┌─────────────────────────────────────────┐
│        Public Website (Frontend)        │
│  - Homepage                              │
│  - Services Page                         │
│  - Portfolio Page                        │
│  - Blog Page                             │
│  - Contact Page                          │
├─────────────────────────────────────────┤
│        Admin Dashboard                   │
│  - Project Management                    │
│  - Blog Management                       │
│  - Client References                     │
│  - Contact Messages                      │
├─────────────────────────────────────────┤
│      React Router (Client-side)         │
├─────────────────────────────────────────┤
│      Zustand (State Management)         │
└─────────────────────────────────────────┘
```

### Teknoloji Stack

**Frontend Technologies:**
- **React 18.3**: Modern UI library
- **TypeScript**: Type-safe development
- **Vite 6.3**: Ultra-fast build tool
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations
- **React Router**: Client-side routing

**UI Components:**
- **shadcn/ui**: High-quality component library
- **Radix UI**: Accessible primitives
- **Lucide React**: Beautiful icon library
- **date-fns**: Date formatting utility

**State Management:**
- **Zustand**: Lightweight state management
- **React Context**: Global state sharing

### Temel Özellikler

#### 1. Modern Ana Sayfa

**Hero Section:**
```tsx
// Modern gradient hero with glassmorphism
<section className="relative min-h-screen flex items-center">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500" />
  <div className="absolute inset-0 backdrop-blur-3xl bg-white/10" />

  <div className="relative z-10 container mx-auto px-4">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-6xl font-bold text-white mb-6"
    >
      Dijital Dönüşümde Yanınızdayız
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl text-white/90"
    >
      Modern web çözümleri ile işinizi büyütün
    </motion.p>
  </div>
</section>
```

**Özellikler:**
- 🎨 Gradient backgrounds
- ✨ Glassmorphism effects
- 🎭 Framer Motion animations
- 📱 Fully responsive
- ⚡ Smooth scroll effects

#### 2. 7 Hizmet Kategorisi

**Service Showcase:**
```tsx
const services = [
  {
    id: 1,
    title: "Web Geliştirme",
    description: "Modern, responsive ve SEO uyumlu web siteleri",
    icon: <Code2 />,
    features: ["React/Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "React & Next.js Geliştirme",
    description: "Performanslı ve ölçeklenebilir React uygulamaları",
    icon: <Blocks />,
    features: ["SSR/SSG", "API Routes", "Optimizasyon"]
  },
  // ... 5 more services
];
```

**Hizmet Kategorileri:**
1. 💻 **Web Geliştirme**: Modern, responsive web siteleri
2. ⚛️ **React & Next.js**: Performanslı SPA'lar
3. 🛒 **E-Ticaret**: Online satış platformları
4. 📱 **Sosyal Medya Yönetimi**: Content & strategi
5. 📊 **Google & Meta Ads**: Dijital reklam kampanyaları
6. 🎨 **UI/UX Tasarım**: Kullanıcı deneyimi odaklı
7. 💼 **Kurumsal Çözümler**: Enterprise uygulamalar

#### 3. Admin Panel

**Dashboard Features:**
```tsx
// Admin route protection
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

// Admin dashboard structure
function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
```

**Admin Panel Özellikleri:**
- 📝 **Proje Yönetimi**: Portfolyo projelerini ekle/düzenle/sil
- 📰 **Blog Yönetimi**: Blog yazılarını yönet
- 👥 **Referans Yönetimi**: Müşteri testimonial'ları
- 💬 **İletişim Mesajları**: Contact form mesajlarını görüntüle
- 📊 **Dashboard**: Genel istatistikler
- 🔐 **Authentication**: Güvenli giriş sistemi

**Demo Admin Credentials:**
- Email: `admin@nexus.com`
- Password: `admin123`

#### 4. Portfolyo Showcase

**Project Cards:**
```tsx
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50 shadow-xl"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <span className="text-sm text-blue-600 font-medium">
          {project.category}
        </span>
        <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
```

#### 5. Blog Sistemi

**Blog Management:**
```tsx
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
}

// Blog list with filtering
function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const posts = useBlogStore((state) => state.posts);

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter((post) => post.category === selectedCategory);

  return (
    <div>
      <CategoryFilter
        categories={['all', 'Web Tasarım', 'SEO', 'Dijital Pazarlama']}
        selected={selectedCategory}
        onChange={setSelectedCategory}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
```

#### 6. İletişim Formu

**Contact Form with Validation:**
```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalı'),
  email: z.string().email('Geçerli bir email adresi girin'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Konu en az 5 karakter olmalı'),
  message: z.string().min(10, 'Mesaj en az 10 karakter olmalı'),
});

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    await submitContactForm(data);
    toast.success('Mesajınız başarıyla gönderildi!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input label="İsim" {...register('name')} error={errors.name?.message} />
      <Input label="Email" {...register('email')} error={errors.email?.message} />
      <Textarea label="Mesaj" {...register('message')} error={errors.message?.message} />
      <Button type="submit">Gönder</Button>
    </form>
  );
}
```

### Geliştirme Süreci

#### 1. Planlama & Tasarım (1 Hafta)
- Wireframe oluşturma
- UI/UX design (Figma)
- Renk paleti ve tipografi seçimi
- Component library belirleme

#### 2. Frontend Geliştirme (3 Hafta)
- React component architecture
- Tailwind CSS styling
- Framer Motion animations
- Responsive design
- React Router setup

#### 3. Admin Panel (2 Hafta)
- Admin UI components
- CRUD operations
- Authentication
- State management
- Form validations

#### 4. Testing & Deployment (1 Hafta)
- Component testing
- E2E testing
- Performance optimization
- Vercel deployment
- SEO optimization

## Teknik Detaylar

### Framer Motion Animations

**Scroll-triggered animations:**
```tsx
import { motion, useScroll, useTransform } from 'framer-motion';

function AnimatedSection() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="section"
    >
      <h2>Animated Content</h2>
    </motion.div>
  );
}
```

**Stagger children:**
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Zustand State Management

```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProjectStore {
  projects: Project[];
  addProject: (project: Project) => void;
  updateProject: (id: string, data: Partial<Project>) => void;
  deleteProject: (id: string) => void;
}

export const useProjectStore = create<ProjectStore>()(
  persist(
    (set) => ({
      projects: [],
      addProject: (project) =>
        set((state) => ({ projects: [...state.projects, project] })),
      updateProject: (id, data) =>
        set((state) => ({
          projects: state.projects.map((p) =>
            p.id === id ? { ...p, ...data } : p
          ),
        })),
      deleteProject: (id) =>
        set((state) => ({
          projects: state.projects.filter((p) => p.id !== id),
        })),
    }),
    { name: 'project-storage' }
  )
);
```

### Tailwind Custom Configuration

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
};
```

### Glassmorphism Effect

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}
```

## Results (Sonuçlar)

### Performans Metrikleri

- ⚡ **Lighthouse Score**: 95/100
- 🚀 **First Contentful Paint**: <1.5s
- 📱 **Mobile Performance**: 90/100
- 🎯 **SEO Score**: 100/100
- ♿ **Accessibility**: 95/100

### Kullanıcı Deneyimi

- ✅ Smooth animations (60 FPS)
- ✅ Intuitive navigation
- ✅ Fast page transitions
- ✅ Responsive across all devices
- ✅ Accessible design

### Teknik Başarılar

- ✅ Modern React 18 features (Suspense, Concurrent)
- ✅ TypeScript ile type-safe development
- ✅ Vite ile ultra-fast builds
- ✅ Component-based architecture
- ✅ Efficient state management
- ✅ SEO-friendly structure

## Öğrenilen Dersler

### Başarılar

1. **Vite**: Webpack'e göre 10x daha hızlı build süreleri
2. **Framer Motion**: Smooth animations kullanıcı deneyimini artırdı
3. **Tailwind CSS**: Hızlı ve tutarlı UI development
4. **Zustand**: Redux'a göre çok daha basit state management
5. **shadcn/ui**: Hazır accessible components geliştirme süresini kısalttı

### Geliştirilecek Alanlar

1. **Backend Integration**: Gerçek API entegrasyonu
2. **SSR**: Next.js'e geçiş ile SEO iyileştirmesi
3. **i18n**: Çoklu dil desteği
4. **PWA**: Progressive Web App özellikleri

## Gelecek Planları

### v2.0 Özellikleri

- 🔗 **Backend API**: Node.js/Express backend
- 💾 **Database**: PostgreSQL ile veri saklama
- 🔐 **Advanced Auth**: JWT + refresh tokens
- 📧 **Email Service**: Email notifications
- 📊 **Analytics**: Google Analytics entegrasyonu
- 🌐 **i18n**: Multi-language support
- 📱 **PWA**: Offline support
- 🔔 **Push Notifications**: Real-time updates

### Ölçeklendirme

- **Mikroservis mimarisi**: Backend servisleri ayrıştırma
- **CDN**: Static asset'ler için CDN kullanımı
- **Caching**: Redis ile cache layer
- **Load Balancing**: Yüksek trafik yönetimi

## Kullanılan Teknolojiler

### Frontend
- React 18.3
- TypeScript
- Vite 6.3
- Tailwind CSS
- Framer Motion
- React Router

### UI Components
- shadcn/ui
- Radix UI
- Lucide React
- date-fns

### State & Forms
- Zustand
- React Hook Form
- Zod validation

### Deployment
- Vercel
- GitHub

## Proje Bağlantısı

**Live Demo**: [elitajanstemas.vercel.app](https://elitajanstemas.vercel.app)

**Admin Panel**: `admin@nexus.com` / `admin123`

---

## Benzer Bir Proje İçin

Modern, performanslı ve görsel olarak etkileyici bir kurumsal web sitesi mi istiyorsunuz? Admin panel ile kolayca yönetilebilir çözümler geliştiriyoruz.

[İletişime Geç](/iletisim) | [Portfolyoya Dön](/portfolyo)
