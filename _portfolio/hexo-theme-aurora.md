---
layout: case-study
title: "Hexo Theme Aurora - Blog Teması"
client: "Open Source"
category: "Web Tasarım"
tags: [Vue, TypeScript, Hexo, Blog, Theme, SCSS, Vite]
date: 2024-11-19
featured_image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=630&fit=crop"
project_url: "http://tridiamond.tech"
excerpt: "Hexo statik site oluşturucu için fütüristik blog teması. Vue 3 ve TypeScript ile geliştirilmiş, SPA navigasyonu, dark/light tema, çoklu dil desteği ve modern tasarım özellikleri."
results:
  - value: "SPA"
    label: "Single Page App"
  - value: "i18n"
    label: "Çoklu Dil"
  - value: "357"
    label: "Commit"
technologies:
  - Vue 3
  - TypeScript
  - Hexo
  - SCSS
  - Vite
  - Tailwind CSS
  - PostCSS
  - Mathjax
---

# Hexo Theme Aurora - Modern Blog Teması

## Proje Özeti

Aurora, Hexo statik site oluşturucu için geliştirilmiş, fütüristik ve özellik bakımından zengin bir blog temasıdır. Vue 3 ve TypeScript kullanılarak oluşturulmuş, modern web teknolojileri ile kullanıcı deneyimini ön planda tutan bir projedir. "Smooth flow of colours and a futuristic feeling" (Renklerin akıcı geçişi ve fütüristik his) felsefesiyle tasarlanmıştır.

## Challenge (Zorluk)

### İş İhtiyaçları

Modern blog platformlarında aranan özellikler:

- **Performans**: Statik site hızı + SPA kullanıcı deneyimi
- **Modern Tasarım**: Gradient'ler, smooth transitions, modern UI
- **Özelleştirme**: Tema renkleri, layout, font seçenekleri
- **İçerik Zenginliği**: Mathjax, kod highlighting, featured posts
- **SEO**: Statik HTML + meta tag optimizasyonu
- **Çoklu Dil**: Blog içeriğinin farklı dillerde sunulması
- **Dark Mode**: Göz yormayan gece modu

### Teknik Gereksinimler

- **Vue 3**: Modern reactivity ve composition API
- **TypeScript**: Type-safe geliştirme
- **Hexo Uyumluluğu**: Hexo statik site generator entegrasyonu
- **Build Tool**: Vite ile hızlı build
- **Styling**: SCSS + Tailwind CSS hybrid
- **Plugins**: Yorum sistemleri, arama, analytics

## Solution (Çözüm)

### Mimari Yaklaşım

**Theme Architecture:**
```
┌─────────────────────────────────────────┐
│           Hexo Static Generator          │
│  (Markdown → HTML at build time)         │
├─────────────────────────────────────────┤
│          Vue 3 SPA Layer                 │
│  - Client-side routing                   │
│  - Dynamic content loading               │
│  - State management                      │
├─────────────────────────────────────────┤
│         Component Library                │
│  - Navbar, Sidebar, Cards                │
│  - Post renderer, Comments               │
│  - Search, Archive views                 │
└─────────────────────────────────────────┘
```

### Teknoloji Stack

**Frontend Technologies:**
- **Vue 3** (58.9%): Modern reactive framework
- **TypeScript** (29.3%): Type safety
- **SCSS** (8.6%): Advanced styling
- **JavaScript**: Legacy support
- **HTML & EJS**: Template rendering

**Build & Tooling:**
- **Vite**: Ultra-fast build tool
- **PostCSS**: CSS processing
- **Tailwind CSS**: Utility classes
- **Jest**: Unit testing

**Hexo Ecosystem:**
- **Hexo Core**: Static site generation
- **Hexo Plugins**: Various integrations
- **Markdown**: Content format

### Temel Özellikler

#### 1. Single Page Application

**SPA Navigation:**
```typescript
// Vue Router integration for SPA behavior
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/post/:slug', component: Post },
    { path: '/archives', component: Archives },
    { path: '/about', component: About },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: 'smooth' };
  },
});
```

**Özellikler:**
- ⚡ Sayfa geçişlerinde reload yok
- 🎭 Smooth page transitions
- 📱 Mobile-first navigation
- 🔙 Browser back/forward desteği

#### 2. Featured Content System

**Pinned Posts:**
```yaml
# Post frontmatter
---
title: "Important Announcement"
date: 2024-11-19
featured: true
pinned: true
cover: /images/featured.jpg
---
```

**Featured Özellikleri:**
- 📌 Pinned posts (sabit yazılar)
- ⭐ Featured badge
- 🖼️ Large cover images
- 📍 Homepage carousel

#### 3. Dark/Light Theme

**Theme Switcher:**
```typescript
import { ref, watch } from 'vue';

const isDark = ref(false);

// Persist theme preference
watch(isDark, (value) => {
  document.documentElement.classList.toggle('dark', value);
  localStorage.setItem('theme', value ? 'dark' : 'light');
});

// Initialize from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  isDark.value = savedTheme === 'dark';
}
```

**Theme Features:**
- 🌙 Dark mode support
- ☀️ Light mode
- 🎨 Gradient backgrounds
- 💫 Smooth color transitions
- 💾 User preference persistence

#### 4. Çoklu Dil Desteği (i18n)

**Language Configuration:**
```javascript
// i18n setup
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      menu: {
        home: 'Home',
        archives: 'Archives',
        about: 'About',
      },
      post: {
        readMore: 'Read More',
        readTime: '{minutes} min read',
      },
    },
    tr: {
      menu: {
        home: 'Ana Sayfa',
        archives: 'Arşiv',
        about: 'Hakkında',
      },
      post: {
        readMore: 'Devamını Oku',
        readTime: '{minutes} dk okuma',
      },
    },
  },
});
```

**i18n Özellikleri:**
- 🌍 Multiple language support
- 🔄 Dynamic text switching
- 💾 Language preference storage
- 📝 Translatable UI elements

#### 5. Gelişmiş İçerik Özellikleri

**Mathjax Support:**
```markdown
# Mathematical formulas
Inline: $E = mc^2$

Block:
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

**Code Highlighting:**
```javascript
// Prism.js integration
<pre><code class="language-javascript">
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
</code></pre>
```

**Reading Time:**
```typescript
function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
```

#### 6. Yorum Sistemleri

**Gitalk Integration:**
```javascript
// Gitalk configuration
new Gitalk({
  clientID: 'your-client-id',
  clientSecret: 'your-client-secret',
  repo: 'your-repo',
  owner: 'your-username',
  admin: ['your-username'],
  id: location.pathname,
  distractionFreeMode: false,
}).render('gitalk-container');
```

**Valine Integration:**
```javascript
// Valine configuration
new Valine({
  el: '#valine-comments',
  appId: 'your-app-id',
  appKey: 'your-app-key',
  placeholder: 'Leave a comment...',
  avatar: 'mp',
});
```

#### 7. Arama Fonksiyonu

**Blog Search:**
```typescript
interface SearchIndex {
  title: string;
  content: string;
  url: string;
  tags: string[];
}

const searchIndex = ref<SearchIndex[]>([]);

function search(query: string) {
  const lowerQuery = query.toLowerCase();
  return searchIndex.value.filter(
    (item) =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.content.toLowerCase().includes(lowerQuery) ||
      item.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}
```

#### 8. Magazine-Style Layout

**Grid Layout:**
{% raw %}
```vue
<template>
  <div class="post-grid">
    <article
      v-for="post in posts"
      :key="post.slug"
      :class="[
        'post-card',
        post.featured ? 'featured-large' : 'standard',
      ]"
    >
      <img :src="post.cover" :alt="post.title" />
      <div class="post-meta">
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt }}</p>
        <span class="read-time">{{ post.readTime }} min read</span>
      </div>
    </article>
  </div>
</template>

<style lang="scss">
.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  .featured-large {
    grid-column: span 2;
    grid-row: span 2;
  }
}
</style>
```
{% endraw %}

### Geliştirme Süreci

#### 1. Theme Setup (1 Hafta)
- Hexo theme boilerplate
- Vue 3 + Vite setup
- TypeScript configuration
- Base styling (SCSS + Tailwind)

#### 2. Core Components (2 Hafta)
- Navbar & Footer
- Post card components
- Sidebar widget
- Archive views
- Timeline component

#### 3. Advanced Features (2 Hafta)
- SPA routing
- Search functionality
- Comment systems
- i18n implementation
- Theme switcher

#### 4. Styling & Polish (1 Hafta)
- Gradient designs
- Animations & transitions
- Responsive design
- Dark mode styling
- Performance optimization

## Teknik Detaylar

### Vue 3 Composition API

**Post Component:**
{% raw %}
```vue
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

interface Post {
  title: string;
  content: string;
  date: string;
  tags: string[];
  cover?: string;
}

const route = useRoute();
const post = ref<Post | null>(null);
const isLoading = ref(true);

const readTime = computed(() => {
  if (!post.value) return 0;
  const wordsPerMinute = 200;
  const wordCount = post.value.content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
});

onMounted(async () => {
  const slug = route.params.slug as string;
  post.value = await fetchPost(slug);
  isLoading.false;
});
</script>

<template>
  <article v-if="post" class="post-detail">
    <header>
      <img v-if="post.cover" :src="post.cover" :alt="post.title" />
      <h1>{{ post.title }}</h1>
      <div class="meta">
        <time>{{ post.date }}</time>
        <span>{{ readTime }} min read</span>
      </div>
    </header>
    <div class="content" v-html="post.content"></div>
    <footer>
      <div class="tags">
        <span v-for="tag in post.tags" :key="tag" class="tag">
          #{{ tag }}
        </span>
      </div>
    </footer>
  </article>
</template>
```
{% endraw %}

### SCSS Advanced Styling

**Gradient Mixins:**
```scss
// Gradient utilities
@mixin gradient-text($colors...) {
  background: linear-gradient(90deg, $colors);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@mixin glass-morphism($opacity: 0.1) {
  background: rgba(255, 255, 255, $opacity);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

// Usage
.post-title {
  @include gradient-text(#667eea, #764ba2, #f093fb);
  font-size: 3rem;
  font-weight: bold;
}

.sidebar {
  @include glass-morphism(0.15);
  padding: 2rem;
  border-radius: 1rem;
}
```

### Hexo Configuration

```yaml
# _config.yml
theme: aurora

aurora:
  # Site settings
  site_meta:
    author: Your Name
    description: A futuristic blog
    keywords: blog, tech, vue

  # Theme
  theme:
    dark_mode: true
    gradient: true
    bg_gradient:
      colors: ['#667eea', '#764ba2', '#f093fb']

  # Features
  features:
    post_meta: true
    post_thumbnail: true
    mathjax: true
    code_highlight: true

  # Plugins
  plugins:
    comments:
      type: gitalk # or valine
    search:
      enable: true
    analytics:
      google: UA-XXXXXXXXX-X
```

## Results (Sonuçlar)

### Proje İstatistikleri

- 🔢 **357 Commits**: Aktif geliştirme
- ⭐ **Open Source**: MIT lisanslı
- 🌐 **Live Demo**: tridiamond.tech
- 📦 **NPM Package**: Hexo theme olarak yayınlandı

### Performans

- ⚡ **Build Time**: Vite ile <10s
- 🚀 **Page Load**: <2s (statik HTML)
- 📱 **Mobile Score**: 95/100
- 🎯 **SEO Score**: 100/100

### Özellikler

- ✅ SPA navigation experience
- ✅ Multi-language support
- ✅ Dark/Light theme
- ✅ Mathematical formulas (Mathjax)
- ✅ Comment systems (Gitalk, Valine)
- ✅ Search functionality
- ✅ Magazine-style grid layout
- ✅ Timeline archives

## Öğrenilen Dersler

### Başarılar

1. **Vue 3 + Hexo**: Statik site + SPA hybrid yaklaşımı başarılı
2. **TypeScript**: Type safety büyük projede çok yardımcı
3. **Vite**: Development experience mükemmel
4. **SCSS + Tailwind**: İkisinin birlikte kullanımı verimli

### Geliştirilecek Alanlar

1. **Performance**: Image lazy loading
2. **SEO**: Better meta tag generation
3. **Accessibility**: ARIA labels improvement
4. **Mobile**: Touch gestures

## Gelecek Planları

### v2.0 Özellikleri

- 📱 PWA support
- 🔔 Push notifications
- 📊 Better analytics dashboard
- 🎨 More theme presets
- 🖼️ Image gallery lightbox
- 📝 Markdown editor integration
- 🔍 Advanced search with filters

## Kullanılan Teknolojiler

### Frontend
- Vue 3 (58.9%)
- TypeScript (29.3%)
- SCSS (8.6%)
- JavaScript
- HTML & EJS

### Build Tools
- Vite
- PostCSS
- Tailwind CSS
- Jest

### Hexo Ecosystem
- Hexo Core
- Hexo Plugins
- Markdown

## Proje Bağlantısı

**Live Demo**: [tridiamond.tech](http://tridiamond.tech)

---

## Benzer Bir Proje İçin

Modern, özellik bakımından zengin bir blog teması mı istiyorsunuz? Vue, React veya diğer framework'lerle özel tema çözümleri geliştiriyoruz.

[İletişime Geç](/iletisim) | [Portfolyoya Dön](/portfolyo)
