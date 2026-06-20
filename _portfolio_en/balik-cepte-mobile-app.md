---
layout: case-study
title: "Balık Cepte - AI-Powered Fishing Platform"
client: "Balık Cepte"
category: "Mobile App"
tags: [Next.js, Expo, React Native, Claude AI, Supabase, Turborepo, iOS, Android]
date: 2026-01-01
featured_image: "https://i.hizliresim.com/iax850q.png"
project_url: "https://balikcepte.app/"
excerpt: "AI-powered catch journal and prediction platform for Turkish anglers. Next.js web app and Expo React Native mobile app in a single Turborepo monorepo. Hourly success predictions combining solunar data with weather via Claude Sonnet 4.6."
results:
  - value: "1,000+"
    label: "Registered Users"
  - value: "3"
    label: "Platforms (iOS/Android/Web)"
  - value: "4"
    label: "Sea Coverage"
technologies:
  - Next.js 14
  - Expo React Native
  - Claude Sonnet 4.6
  - Supabase (PostgreSQL + RLS)
  - Turborepo
  - Open-Meteo API
  - Leaflet / OpenStreetMap
  - EAS Build & Vercel
---

# Balık Cepte - AI-Powered Fishing Platform

## Project Summary

Balık Cepte is an AI-powered catch journal and prediction platform built for Turkish anglers. The web application (Next.js 14) and native mobile app (Expo React Native) live together in a single Turborepo monorepo. Claude Sonnet 4.6 combines solunar periods, real-time weather data, and community catch history to generate hourly success predictions for LRF, SPIN, and SURFCASTING disciplines.

## Challenge

### Business Requirements

- **Data Complexity**: Combining pressure trends, solunar periods, water temperature, wave height, tide, and moon phase into a single reliable score
- **Multi-Platform**: Delivering a consistent, native experience across iOS, Android, and Web
- **AI Accuracy**: Not generic fishing advice — personalized predictions based on the user's own spots and catch history
- **Community Trust**: Filtering out fake reports before feeding real data to the AI
- **Offline Support**: Allowing catch logging without an internet connection

### Technical Requirements

- Real-time weather, sea, and solunar data integration
- Supabase RLS for secure multi-user data isolation
- Upstash Redis rate limiting for daily AI prediction quotas
- EAS Build for store builds + OTA update infrastructure
- pg_cron for daily morning push notifications

## Solution

### Monorepo Architecture

```
lurelogic/
├── apps/
│   ├── web/        — Next.js 14 (Vercel)
│   └── mobile/     — Expo React Native (iOS + Android)
├── supabase/
│   ├── functions/  — Deno edge functions
│   └── migrations/ — PostgreSQL migration files
└── turbo.json
```

Turborepo keeps shared types and business logic in one place, enabling web and mobile development on the same repo without separate teams.

### AI Prediction Engine

**Claude Sonnet 4.6** with prompt caching for cost-optimized inference:

**Chain-of-Thought Reasoning:**
1. Pressure trend evaluation — falling +25p, stable 0, rising -15p
2. Wave + wind score — discipline-specific ideal condition analysis
3. Solunar evaluation — major +30p / minor +15p
4. Golden Hour evaluation — +20p but weaker than major solunar
5. Hourly raw scoring → normalize to 0–100
6. Top 2–3 hour selection (golden hour gets no automatic priority)

**User Data Override:**
- 1+ successful catch (≥3 stars) at a spot → minimum 60% probability for that hour
- 2+ successful catches → minimum 70%
- Override shown as a blue info banner in the UI

**Calibration System:**
- Last 90 days of real catches vs. predictions tracked
- Accuracy ≥70% → calibration unchanged | 50–70% → probabilities drop 5–10% | <50% → confidence_level='low'

### Data Layer

| Source | Coverage |
|--------|----------|
| Open-Meteo | Weather, waves, SST, tide |
| suncalc | Solunar periods, moon phase, sunrise/sunset |
| Supabase seed_catches | Admin-verified community catch history (feeds AI) |
| User history | Spot-level override calculation |

### Trust & Verification System

No catch report reaches the AI without admin approval. The `trigger_seed_on_verify` DB trigger automatically creates a `seed_catches` record when `is_verified` flips false→true (requires had_catch=true, success_rating≥3, non-null species and spot_id).

### Push Notification Infrastructure

`pg_cron` triggers `daily-fishing-notification` Deno Edge Function at 06:00 Istanbul time every morning:
- Calculates the peak-solunar-window score for the day (not the 06:00 snapshot)
- 4 templates: SIMDI_GIT (≥75 + major) / FENA_DEGIL (≥50) / ZAYIF_AMA_DENE (≥35 + solunar) / GUNLUK_OZET
- FCM V1 + Expo Push Notifications for native iOS & Android delivery

## Features

### Dashboard
- 7-day date picker — weather, moon, and solunar data refresh per selected date
- GPS-priority location (falls back to region center if denied)
- Hourly score chips — horizontally scrollable
- Solunar calendar widget — "NOW" badge on active period
- Next-day scores (+1 to +4 days)

### Spot Management
- Select on map (Leaflet + OpenStreetMap), GPS, or manual coordinates
- Bottom type, depth range, facing direction (8 directions)
- Deleting a spot soft-unlinks predictions and catch reports (no CASCADE)

### Map Score Card
- Tap any point on the map for an instant catch potential score
- Land detection via Marine API wave_height — shows "This point is on land" toast (5s cache)
- "Save as Spot" button pre-fills the spot form with the tapped coordinates

### AI Catch Prediction
- LRF / SPIN / SURFCASTING discipline modes
- Best time window, hourly breakdown, species predictions
- Lure/bait suggestions — badge if lure is in the user's inventory
- Analysis card: pressure trend, wind effect, moon effect, 1–10 overall score

### Catch Reports
- Multi-step form: spot/GPS → lures → result → date
- Photo upload: browser-image-compression → WebP → Supabase Storage
- Native App Store / Google Play review prompt after the 3rd catch

### Offline Mode (Web)
- IndexedDB / Dexie for offline catch logging
- `useOfflineSync` hook auto-syncs when back online
- Photos queued offline and uploaded to Storage when connection restores

### Community Feed
- Region filter (Aegean, Mediterranean, Marmara, Black Sea)
- Reactions, comments/replies, follow system
- 5-category reporting — cannot report own posts or the same post twice

### Mandatory Update System
- Fetches `minimum_app_version` from Supabase `app_config` table on launch
- Semver comparison; if below minimum, replaces all screens with `OutdatedScreen`
- Activated instantly via OTA — no new native build required

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Web Framework | Next.js 14 (App Router) |
| Web UI | shadcn/ui + Radix UI + Tailwind CSS |
| Mobile | Expo SDK 52 + React Native 0.76 |
| Mobile UI | NativeWind + Expo Router |
| Auth & DB | Supabase (PostgreSQL + RLS) |
| Storage | Supabase Storage |
| Edge Functions | Supabase Deno Functions |
| AI | Claude Sonnet 4.6 (prompt caching) |
| Maps | Leaflet 1.9 + OpenStreetMap |
| Weather | Open-Meteo |
| Astronomy | suncalc |
| Offline | Dexie v4 + useOfflineSync hook |
| Rate Limiting | Upstash Redis + in-memory fallback |
| Push Notifications | Expo Push + FCM V1 |
| Monorepo | Turborepo |
| Build & Deploy | EAS Build (mobile) + Vercel (web) |

## Store Links

- **App Store**: https://apps.apple.com/tr/app/balik-cepte/id6765955082
- **Google Play**: https://play.google.com/store/apps/details?id=com.balikcepte.app
- **Web**: https://balikcepte.app/
