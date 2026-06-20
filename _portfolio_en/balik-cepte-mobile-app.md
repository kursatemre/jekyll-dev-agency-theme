---
layout: case-study
title: "Balık Cepte - AI-Powered Fishing Platform"
client: "Balık Cepte"
category: "Mobile App"
tags: [Next.js, Expo, React Native, Claude AI, Supabase, iOS, Android]
date: 2026-01-01
featured_image: "https://i.hizliresim.com/iax850q.png"
project_url: "https://balikcepte.app/"
excerpt: "AI-powered catch journal and prediction platform for Turkish anglers. Available on iOS, Android and Web — delivering hourly success predictions with solunar calendar, real-time weather data, and Claude AI."
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
  - Supabase
  - Open-Meteo API
  - Leaflet / OpenStreetMap
  - EAS Build & Vercel
---

# Balık Cepte - AI-Powered Fishing Platform

## Project Summary

Balık Cepte is an AI-powered catch journal and prediction platform built for Turkish anglers. Available on iOS, Android, and Web, it combines Claude AI, solunar calendar data, and real-time weather to generate hourly success predictions for LRF, SPIN, and SURFCASTING disciplines.

## Challenge

### Business Requirements

- **Multi-Platform**: Consistent experience across iOS, Android, and Web from a single codebase
- **Personalization**: Predictions based on the user's own spot history, not generic advice
- **Community Trust**: Collecting real catch data while filtering out fake reports
- **Offline Support**: Logging catches without an internet connection

### Technical Requirements

- Real-time weather, sea, and solunar data integration
- Secure multi-user data isolation
- Daily morning push notifications
- App Store and Google Play store builds with OTA update capability

## Solution

### AI Prediction Engine

Powered by **Claude Sonnet 4.6**, the prediction system combines solunar periods, atmospheric pressure trends, wind, water temperature, and wave data to calculate a 0–100 success score for every hour of the day. The user's own catch history is factored in — repeated success at the same spot personalizes the AI's output over time.

### Data Sources

- **Open-Meteo**: Weather, wave height, sea surface temperature
- **suncalc**: Solunar periods and moon phase
- **Community data**: Verified catch reports continuously improve prediction quality

## Features

### Dashboard
- 7-day date picker — weather, moon, and solunar data update per selected date
- Hourly score chips — best hours of the day at a glance
- Solunar calendar widget — active periods shown in real time
- Next-day scores (+1 to +4 days ahead)

### AI Catch Prediction
- LRF / SPIN / SURFCASTING discipline modes
- Best time window, hourly probability breakdown, species predictions
- Lure/bait suggestions — inventory match automatically highlighted

### Spot Management
- Select on map, GPS, or manual coordinates
- Bottom type, depth range, and facing direction tracking

### Map Score Card
- Tap any point on the map for an instant catch potential score
- Land detection with clear user feedback

### Catch Reports & Gallery
- Multi-step form: spot/GPS → lures → result → date
- Photo catch logging and full gallery view

### Offline Mode
- Log catches without internet
- Automatic sync when connection is restored

### Community Feed
- Region filter (Aegean, Mediterranean, Marmara, Black Sea)
- Reactions, comments, and follow system

### Push Notifications
- Daily morning notification with the day's score and best fishing window
- Native iOS and Android delivery

## Results

- Live on App Store and Google Play
- Data model covering all 4 seas of Turkey
- First Turkish fishing app powered by AI predictions
- Growing steadily toward the goal of becoming Turkey's best fishing platform

## Store Links

- **App Store**: https://apps.apple.com/tr/app/balik-cepte/id6765955082
- **Google Play**: https://play.google.com/store/apps/details?id=com.balikcepte.app
- **Web**: https://balikcepte.app/
