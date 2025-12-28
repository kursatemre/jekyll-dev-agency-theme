---
layout: post
title: "Vercel Web Analytics Başlangıç Rehberi"
date: 2025-01-28
author: "Dijital Ajans Ekibi"
categories: [Analytics, Vercel, Deployment]
tags: [vercel web analytics, web analytics, performance monitoring, deployment, vercel]
excerpt: "Vercel Web Analytics ile başlamak için adım adım rehber. Nasıl etkinleştireceğinizi, paketleri kuracağınızı ve verilerinizi görüntüleyeceğinizi öğrenin."
featured_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"
---

# Vercel Web Analytics Başlangıç Rehberi

Bu rehber, Vercel Web Analytics'i kullanmaya başlamanız için size adım adım talimatlar sunacaktır. Nasıl etkinleştireceğinizi, paketi projenize ekleyeceğinizi, uygulamanızı Vercel'e yayınlayacağınız ve verilerinizi panoda görüntüleyeceğinizi öğreneceksiniz.

**Kendi framework'ünüzü seçerek talimatları görüntüleyin.**

## Ön Koşullar

- Bir Vercel hesabı. Eğer hesabınız yoksa [buradan ücretsiz kaydolabilirsiniz](https://vercel.com/signup).
- Bir Vercel projesi. Eğer projeniz yoksa [yeni bir proje oluşturabilirsiniz](https://vercel.com/new).
- Vercel CLI kurulu. Eğer kurulu değilse, aşağıdaki komutu kullanarak kurabilirsiniz:

### Vercel CLI Kurulumu

**pnpm ile:**
```bash
pnpm i vercel
```

**yarn ile:**
```bash
yarn i vercel
```

**npm ile:**
```bash
npm i vercel
```

**bun ile:**
```bash
bun i vercel
```

## Adım 1: Vercel'de Web Analytics'i Etkinleştirin

[Vercel panosunda](/dashboard), projenizi seçin ve **Analytics** sekmesine tıklayın. Iletişim kutusundan **Enable** (Etkinleştir) butonuna tıklayın.

> **💡 Not:** Web Analytics'i etkinleştirmek, bir sonraki deployment'ından sonra yeni rotalar ekleyecektir (kapsamı `/_vercel/insights/*`).

## Adım 2: @vercel/analytics Paketini Projenize Ekleyin

Seçtiğiniz paket yöneticisini kullanarak `@vercel/analytics` paketini projenize ekleyin:

**pnpm ile:**
```bash
pnpm i @vercel/analytics
```

**yarn ile:**
```bash
yarn i @vercel/analytics
```

**npm ile:**
```bash
npm i @vercel/analytics
```

**bun ile:**
```bash
bun i @vercel/analytics
```

## Adım 3: Analytics Bileşenini Uygulamanıza Ekleyin

Framework'ünüze göre uygun talimatları izleyin:

### Next.js (Pages Router)

Next.js Pages Router kullanıyorsanız, main app dosyanıza aşağıdaki kodu ekleyin:

**TypeScript (`pages/_app.tsx`):**
```tsx
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
```

**JavaScript (`pages/_app.js`):**
```jsx
import { Analytics } from "@vercel/analytics/next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
```

> **Not:** `Analytics` bileşeni Next.js'e seamless entegrasyon sunarak route desteği sağlar.

### Next.js (App Router)

Next.js App Router kullanıyorsanız, root layout'a aşağıdaki kodu ekleyin:

**TypeScript (`app/layout.tsx`):**
```tsx
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <title>Uygulamam</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

**JavaScript (`app/layout.jsx`):**
```jsx
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <title>Uygulamam</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

> **Not:** `Analytics` bileşeni Remix ile seamless entegrasyon sunarak route desteği sağlar.

### Remix

Remix kullanıyorsanız, root dosyanıza aşağıdaki kodu ekleyin:

**TypeScript (`app/root.tsx`):**
```tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/remix";

export default function App() {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Analytics />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
```

**JavaScript (`app/root.jsx`):**
```jsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/remix";

export default function App() {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Analytics />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
```

> **Not:** `Analytics` bileşeni Remix ile seamless entegrasyon sunarak route dedektesi sağlar.

### Nuxt

Nuxt kullanıyorsanız, main component'inize aşağıdaki kodu ekleyin:

**TypeScript (`app.vue`):**
```vue
<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';
</script>

<template>
  <Analytics />
  <NuxtPage />
</template>
```

**JavaScript (`app.vue`):**
```vue
<script setup>
import { Analytics } from '@vercel/analytics/nuxt';
</script>

<template>
  <Analytics />
  <NuxtPage />
</template>
```

> **Not:** `Analytics` bileşeni Nuxt ile seamless entegrasyon sunarak route desteği sağlar.

### SvelteKit

SvelteKit kullanıyorsanız, main layout'a aşağıdaki kodu ekleyin:

**TypeScript (`src/routes/+layout.ts`):**
```ts
import { dev } from "$app/environment";
import { injectAnalytics } from "@vercel/analytics/sveltekit";

injectAnalytics({ mode: dev ? "development" : "production" });
```

**JavaScript (`src/routes/+layout.js`):**
```js
import { dev } from "$app/environment";
import { injectAnalytics } from "@vercel/analytics/sveltekit";

injectAnalytics({ mode: dev ? "development" : "production" });
```

> **Not:** `injectAnalytics` fonksiyonu SvelteKit ile seamless entegrasyon sunarak route desteği sağlar.

### Astro

Astro kullanıyorsanız, base layout'unuza aşağıdaki kodu ekleyin:

**Astro (`src/layouts/Base.astro`):**
```astro
---
import Analytics from '@vercel/analytics/astro';
---

<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <!-- ... -->
    <Analytics />
  </head>
  <body>
    <slot />
  </body>
</html>
```

> **Not:** `Analytics` bileşeni Astro@1.4.0 ve sonrası versiyonlarda mevcuttur.
> Daha eski bir versiyonu kullanıyorsanız, aşağıda gösterildiği gibi `astro.config.mjs` dosyanızda Vercel adapter'ının `webAnalytics` özelliğini yapılandırmanız gerekir.
> Daha fazla bilgi için [Astro adapter dokümantasyonuna](https://docs.astro.build/en/guides/integrations-guide/vercel/#webanalytics) bakın.

**Astro Config (`astro.config.mjs`):**
```js
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true, // @vercel/analytics@1.4.0+ kullanıyorsanız false olarak ayarlayın
    },
  }),
});
```

### Plain HTML

Plain HTML siteleriniz için aşağıdaki script'i `.html` dosyalarınıza ekleyebilirsiniz:

**HTML (`index.html`):**
```html
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
```

> **💡 Not:** HTML implementasyonu kullanırken, `@vercel/analytics` paketini kurmanız gerekmez. Ancak route desteği yoktur.

### Diğer Frameworkler

Diğer frameworkler için, paketinden `inject` fonksiyonunu import ederek uygulamanıza tracking script'i ekleyebilirsiniz. **Bu, uygulamanızda yalnızca bir kez çağrılmalı ve client'te çalışmalıdır.**

> **💡 Not:** `inject` fonksiyonunda route desteği yoktur.

**TypeScript (`main.ts`):**
```ts
import { inject } from "@vercel/analytics";

inject();
```

**JavaScript (`main.js`):**
```js
import { inject } from "@vercel/analytics";

inject();
```

## Adım 4: Uygulamanızı Vercel'e Deploy Edin

Uygulamanızı aşağıdaki komutu kullanarak deploy edin:

```bash
vercel deploy
```

Daha kolay yönetim için, projenizin Git repository'sini bağlamanızı da öneriyoruz. Bu, Vercel'in herhangi bir terminal komutu olmadan main branch'e push edilen commitları otomatik olarak deploy etmesini sağlayacaktır.

Uygulamanız deploy edildikten sonra, ziyaretçileri ve sayfa görüntülemelerini izlemeye başlayacaktır.

> **💡 Not:** Eğer her şey doğru şekilde kurulduysa, tarayıcınızın Network sekmesinde `/_vercel/insights/view` rotasından bir Fetch/XHR request'i görebilirsiniz.

## Adım 5: Verileri Panoda Görüntüleyin

Uygulamanız deploy edildikten ve kullanıcılar sitenizi ziyaret ettikten sonra, verilerinizi panoda görüntüleyebilirsiniz.

Bunu yapmak için [panonuza](/dashboard) gidin, projenizi seçin ve **Analytics** sekmesine tıklayın.

Birkaç gün boyunca ziyaretçi geldikten sonra, panelleri görüntüleyerek ve [filtreleyerek](/docs/analytics/filtering) verilerinizi araştırmaya başlayabilirsiniz.

Pro ve Enterprise planlarındaki kullanıcılar, düğme tıklamaları, form gönderimleri veya satın almalar gibi kullanıcı etkileşimlerini izlemek için verilerine [özel etkinlikler](/docs/analytics/custom-events) ekleyebilirler.

Vercel Web Analytics ile Vercel'in [gizlilik ve veri uyum standartlarını](/docs/analytics/privacy-policy) nasıl desteklediği hakkında daha fazla bilgi edinin.

## Sonraki Adımlar

Artık Vercel Web Analytics'i kurduğunuza göre, aşağıdaki konuları keşfedebilirsiniz:

- [`@vercel/analytics` paketini kullanmayı öğrenin](/docs/analytics/package)
- [Özel etkinlikler ayarlamayı öğrenin](/docs/analytics/custom-events)
- [Veri filtrelemeyi öğrenin](/docs/analytics/filtering)
- [Gizlilik ve uyum hakkında bilgi edinin](/docs/analytics/privacy-policy)
- [Fiyatlandırmayı keşfedin](/docs/analytics/limits-and-pricing)
- [Sorun giderme rehberine bakın](/docs/analytics/troubleshooting)

---

**Vercel Web Analytics ile başladınız mı? Artık ziyaretçilerinizin davranışlarını izleyebilir ve veriye dayalı kararlar alabilirsiniz. İhtiyacınız olursa bize ulaşın!**
