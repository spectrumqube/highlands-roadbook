# Highlands Roadbook

A mobile-first Progressive Web App for planning and tracking your Scottish Highlands and Isle of Skye road trip (12–16 July 2026).

## Features

- **5-Day Itinerary**: Pre-planned route with flexible flow
- **Offline Support**: Works offline after first load
- **Installable**: Add to home screen on any device
- **Checkpoint Tracking**: Mark visited stops with local storage
- **Navigation Integration**: Google Maps and Apple Maps links for each leg
- **Premium Design**: Dark navy, gold and emerald accents inspired by National Geographic

## Day Overview

- **Day 1**: Belfast → Cairnryan → Ayrshire coast → Kelpies → Falkirk Wheel → Clydebank
- **Day 2**: Loch Lomond → Glencoe → Fort William → Isle of Skye
- **Day 3**: Trotternish Loop (Skye)
- **Day 4**: West Skye (Dunvegan, Neist Point)
- **Day 5**: Fairy Pools → Return journey

## Getting Started

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```

Deploy the `build` folder to Netlify.

## Tech Stack

- React 18
- Tailwind CSS
- Lucide Icons
- Service Worker (PWA)
- localStorage for checkpoint tracking

## Offline & PWA

The app includes a service worker for offline support and a web manifest for installability.
