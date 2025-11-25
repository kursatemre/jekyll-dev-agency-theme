---
layout: case-study
title: "Streamly - Film & Dizi Platformu"
client: "Streamly"
category: "Streaming Platform"
tags: [Next.js, TypeScript, Streaming, Video, Entertainment]
date: 2024-11-16
featured_image: "https://images.unsplash.com/photo-1574267432644-f5bbae40612e?w=1200&h=630&fit=crop"
excerpt: "Reklamsız film ve dizi izleme platformu. Çoklu sunucu desteği, gelişmiş arama, genre filtreleme ve kesintisiz streaming deneyimi sunan modern entertainment platformu."
results:
  - value: "Reklamsız"
    label: "Streaming"
  - value: "Çoklu"
    label: "Sunucu Seçeneği"
  - value: "TypeScript"
    label: "%96.6 Kod Tabanı"
technologies:
  - Next.js
  - TypeScript
  - CSS
  - PostCSS
  - Video Streaming
  - API Integration
---

# Streamly - Ad-Free Streaming Platform

## Proje Özeti

Streamly, kullanıcılara reklamsız film ve dizi izleme deneyimi sunan modern bir streaming platformudur. Geniş içerik kütüphanesi, çoklu sunucu seçenekleri ve gelişmiş arama özellikleriyle kullanıcıların istedikleri içeriğe hızlıca ulaşmalarını ve kesintisiz izlemelerini sağlar.

## Challenge (Zorluk)

### İş İhtiyaçları

Modern streaming platformlarında karşılaşılan zorluklar:

- **Reklamsız Deneyim**: Kullanıcıları rahatsız eden reklam aralarını ortadan kaldırma
- **Geniş İçerik**: Binlerce film ve dizi kataloğu
- **Sunucu Güvenilirliği**: Tek sunucu düştüğünde alternatif sunucular
- **Arama Performansı**: Büyük katalogda hızlı arama
- **Responsive Player**: Mobil, tablet, desktop'ta sorunsuz oynatma
- **Kullanıcı Deneyimi**: Sezgisel navigasyon ve keşif

### Teknik Gereksinimler

- **Framework**: Next.js ile SEO-friendly SSR
- **Type Safety**: TypeScript ile güvenli development
- **Video Player**: Adaptive bitrate streaming
- **API Integration**: Çoklu içerik sağlayıcı entegrasyonu
- **Search**: Fuzzy search ve autocomplete
- **Responsive**: Her cihazda optimize oynatma

## Solution (Çözüm)

### Mimari Yaklaşım

**Platform Architecture:**
```
┌─────────────────────────────────────────┐
│         Client (Browser)                 │
│  - Next.js SSR Pages                     │
│  - Video Player Component                │
│  - Search & Filter UI                    │
├─────────────────────────────────────────┤
│         API Layer (Next.js API)          │
│  - Content aggregation                   │
│  - Server selection logic                │
│  - Metadata fetching                     │
├─────────────────────────────────────────┤
│      External Content Providers          │
│  - Server 1, Server 2, Server 3...       │
│  - TMDB API (metadata)                   │
│  - Streaming CDNs                        │
└─────────────────────────────────────────┘
```

### Teknoloji Stack

**Frontend Technologies:**
- **Next.js**: React framework with SSR
- **TypeScript** (96.6%): Dominant codebase language
- **CSS** (3.3%): Custom styling
- **JavaScript** (0.1%): Legacy support

**Build Tools:**
- **PostCSS**: Advanced CSS processing
- **pnpm**: Package management

**Video & Media:**
- **HTML5 Video API**: Native video playback
- **HLS.js**: HTTP Live Streaming support
- **Video.js**: Feature-rich player

### Temel Özellikler

#### 1. Reklamsız İzleme

**Ad-Free Experience:**
```typescript
// Reklamsız video oynatıcı
interface VideoPlayerProps {
  src: string;
  autoplay?: boolean;
  controls?: boolean;
}

function VideoPlayer({ src, autoplay = false, controls = true }: VideoPlayerProps) {
  return (
    <video
      src={src}
      controls={controls}
      autoPlay={autoplay}
      className="w-full h-full"
      // No ad interruptions!
    />
  );
}
```

**Özellikler:**
- 🚫 Sıfır reklam arası
- ⚡ Kesintisiz oynatma
- 🎬 Direkt içerik başlangıcı
- 📺 Premium deneyim

#### 2. Çoklu Sunucu Desteği

**Server Selection:**
```typescript
interface StreamServer {
  id: string;
  name: string;
  quality: 'HD' | 'FHD' | '4K';
  url: string;
  speed: number;
  isOnline: boolean;
}

const servers: StreamServer[] = [
  { id: '1', name: 'Server 1', quality: 'FHD', url: '...', speed: 10, isOnline: true },
  { id: '2', name: 'Server 2', quality: 'HD', url: '...', speed: 8, isOnline: true },
  { id: '3', name: 'Server 3', quality: '4K', url: '...', speed: 5, isOnline: false },
];

function ServerSelector({ servers, onSelect }: ServerSelectorProps) {
  return (
    <div className="server-list">
      {servers.filter(s => s.isOnline).map((server) => (
        <button
          key={server.id}
          onClick={() => onSelect(server)}
          className="server-btn"
        >
          <span>{server.name}</span>
          <span className="quality-badge">{server.quality}</span>
          <span className="speed">{server.speed} Mbps</span>
        </button>
      ))}
    </div>
  );
}
```

**Sunucu Özellikleri:**
- 🔄 Multiple server options
- ⚡ Speed indicators
- 📊 Quality badges (HD, FHD, 4K)
- 🔍 Auto-fallback mechanism
- 💚 Server health monitoring

#### 3. Gelişmiş Arama

**Search Functionality:**
```typescript
interface Content {
  id: string;
  title: string;
  type: 'movie' | 'series';
  genre: string[];
  year: number;
  rating: number;
  poster: string;
}

function useContentSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Content[]>([]);

  const search = useCallback(
    debounce((searchTerm: string) => {
      const filtered = allContent.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.genre.some((g) => g.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setResults(filtered);
    }, 300),
    []
  );

  useEffect(() => {
    if (query.length >= 2) {
      search(query);
    } else {
      setResults([]);
    }
  }, [query, search]);

  return { query, setQuery, results };
}
```

**Arama Özellikleri:**
- 🔍 Real-time search
- 🎯 Fuzzy matching
- 📝 Autocomplete suggestions
- 🏷️ Genre filtering
- ⭐ Rating filter
- 📅 Year filter

#### 4. İçerik Kategorileri

**Genre & Category System:**
```typescript
const genres = [
  'Action',
  'Comedy',
  'Drama',
  'Horror',
  'Sci-Fi',
  'Romance',
  'Thriller',
  'Documentary',
];

interface CategoryPageProps {
  genre: string;
}

export const getStaticPaths = async () => {
  const paths = genres.map((genre) => ({
    params: { genre: genre.toLowerCase() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: { genre: string } }) => {
  const content = await fetchContentByGenre(params.genre);
  return { props: { content, genre: params.genre } };
};
```

**Kategori Özellikleri:**
- 🎭 Genre-based browsing
- 🆕 "New Releases" section
- 🔥 "Trending Now"
- ⭐ "Top Rated"
- 📺 "Popular TV Shows"
- 🎬 "Featured Movies"

#### 5. Responsive Video Player

**Adaptive Player:**
```typescript
import Hls from 'hls.js';
import { useEffect, useRef } from 'react';

function AdaptiveVideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log('HLS stream loaded');
      });

      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari)
      video.src = src;
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      controls
      className="streamly-player"
      playsInline
    />
  );
}
```

**Player Özellikleri:**
- 🎥 Adaptive bitrate streaming
- 📱 Mobile-optimized controls
- ⚙️ Quality selector
- 🔊 Volume control
- 📺 Fullscreen support
- ⏯️ Play/Pause/Seek
- 📶 Network adaptive playback

#### 6. İçerik Detay Sayfası

**Detail Page:**
```typescript
interface ContentDetailProps {
  content: Content;
  similar: Content[];
}

export default function ContentDetail({ content, similar }: ContentDetailProps) {
  return (
    <div className="detail-page">
      {/* Hero Section */}
      <div
        className="hero"
        style={% raw %}{{ backgroundImage: `url(${content.backdrop})` }}{% endraw %}
      >
        <div className="overlay">
          <h1>{content.title}</h1>
          <div className="meta">
            <span>{content.year}</span>
            <span>⭐ {content.rating}/10</span>
            <span>{content.runtime} min</span>
          </div>
          <p className="overview">{content.overview}</p>
          <div className="actions">
            <button className="btn-play">
              ▶️ Play Now
            </button>
            <button className="btn-watchlist">
              + My List
            </button>
          </div>
        </div>
      </div>

      {/* Cast & Crew */}
      <section className="cast">
        <h2>Cast</h2>
        <div className="cast-grid">
          {content.cast.map((actor) => (
            <div key={actor.id} className="cast-card">
              <img src={actor.photo} alt={actor.name} />
              <p>{actor.name}</p>
              <span>{actor.character}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Similar Content */}
      <section className="similar">
        <h2>You May Also Like</h2>
        <div className="content-grid">
          {similar.map((item) => (
            <ContentCard key={item.id} content={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
```

### Geliştirme Süreci

#### 1. Planlama & Tasarım (1 Hafta)
- Wireframing
- UI/UX design
- Content API research
- Server architecture planning

#### 2. Frontend Geliştirme (3 Hafta)
- Next.js setup
- TypeScript configuration
- Video player integration
- Search implementation
- Category pages
- Detail pages

#### 3. API Integration (1 Hafta)
- Content provider APIs
- TMDB metadata
- Server health checks
- Caching strategy

#### 4. Testing & Optimization (1 Hafta)
- Cross-browser testing
- Mobile responsiveness
- Performance optimization
- SEO implementation

## Teknik Detaylar

### Next.js SSR Implementation

**Dynamic Content Pages:**
```typescript
// pages/watch/[id].tsx
import { GetServerSideProps } from 'next';

interface WatchPageProps {
  content: Content;
  streamUrl: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const contentId = params?.id as string;

  // Fetch content metadata
  const content = await fetchContent(contentId);

  // Get best available stream
  const streamUrl = await getBestStream(contentId);

  return {
    props: {
      content,
      streamUrl,
    },
  };
};

export default function WatchPage({ content, streamUrl }: WatchPageProps) {
  return (
    <div className="watch-page">
      <AdaptiveVideoPlayer src={streamUrl} />
      <ContentInfo content={content} />
    </div>
  );
}
```

### TypeScript Interfaces

**Type Definitions:**
```typescript
// types/content.ts
export interface Movie {
  id: string;
  title: string;
  originalTitle: string;
  overview: string;
  poster: string;
  backdrop: string;
  releaseDate: string;
  runtime: number;
  genres: Genre[];
  rating: number;
  voteCount: number;
  cast: Cast[];
  crew: Crew[];
  videos: Video[];
  images: Image[];
}

export interface TVShow extends Omit<Movie, 'runtime' | 'releaseDate'> {
  seasons: Season[];
  episodeCount: number;
  firstAirDate: string;
  lastAirDate: string;
  status: 'Returning' | 'Ended' | 'Cancelled';
}

export interface Season {
  seasonNumber: number;
  episodeCount: number;
  episodes: Episode[];
  poster: string;
  airDate: string;
}

export interface Episode {
  episodeNumber: number;
  title: string;
  overview: string;
  runtime: number;
  airDate: string;
  stillPath: string;
  streamUrl: string;
}
```

### CSS Styling

**Modern UI:**
```css
/* Dark theme optimized for viewing */
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #141414;
  --text-primary: #ffffff;
  --text-secondary: #b3b3b3;
  --accent: #e50914;
}

.streamly-player {
  width: 100%;
  aspect-ratio: 16/9;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
}

.content-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.content-card:hover {
  transform: scale(1.05);
  z-index: 10;
}

.content-card img {
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
}
```

## Results (Sonuçlar)

### Performans Metrikleri

- ⚡ **Page Load**: <2s
- 📺 **Stream Start**: <3s
- 🔍 **Search Response**: <200ms
- 📱 **Mobile Score**: 90/100
- 🎯 **SEO Score**: 95/100

### Kullanıcı Deneyimi

- ✅ Reklamsız kesintisiz izleme
- ✅ Çoklu sunucu güvenilirliği
- ✅ Hızlı arama ve filtreleme
- ✅ Responsive her cihazda
- ✅ Sezgisel navigasyon

### Teknik Başarılar

- ✅ TypeScript dominant codebase (96.6%)
- ✅ Next.js SSR ile SEO
- ✅ Adaptive bitrate streaming
- ✅ Multi-server fallback system
- ✅ Real-time search

## Öğrenilen Dersler

### Başarılar

1. **Next.js SSR**: SEO için mükemmel çözüm
2. **TypeScript**: Tip güvenliği büyük fayda sağladı
3. **HLS.js**: Adaptive streaming implement etmek kolay
4. **Server Fallback**: Multiple server stratejisi güvenilirliği artırdı

### Geliştirilecek Alanlar

1. **User Accounts**: Watchlist ve progress tracking
2. **Recommendations**: AI-based content suggestions
3. **Subtitle Support**: Multiple language subtitles
4. **Download**: Offline viewing

## Gelecek Planları

### v2.0 Özellikleri

- 👤 **User Accounts**: Sign up/login sistemi
- 📝 **Watchlist**: Sonra izle listesi
- 📊 **Watch Progress**: Kaldığın yerden devam et
- 🎯 **Recommendations**: Kişiselleştirilmiş öneriler
- 📱 **Mobile App**: React Native ile iOS/Android
- 💬 **Reviews**: Kullanıcı yorumları ve rating
- 🌐 **Subtitles**: Çoklu dil altyazı desteği
- ⬇️ **Download**: Offline izleme

### Ölçeklendirme

- **CDN Integration**: Faster content delivery
- **Database**: PostgreSQL ile user data
- **Caching**: Redis ile metadata caching
- **Analytics**: İzlenme istatistikleri

## Kullanılan Teknolojiler

### Frontend
- Next.js
- TypeScript (96.6%)
- CSS (3.3%)
- JavaScript (0.1%)

### Build Tools
- PostCSS
- pnpm

### Video Streaming
- HTML5 Video API
- HLS.js
- Adaptive Bitrate Streaming

---

## Benzer Bir Proje İçin

Streaming platform, video hosting veya media management sistemi mi istiyorsunuz? Modern, ölçeklenebilir ve kullanıcı dostu çözümler geliştiriyoruz.

[İletişime Geç](/iletisim) | [Portfolyoya Dön](/portfolyo)
