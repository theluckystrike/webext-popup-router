# webext-popup-router — Popup Page Router for Chrome Extensions

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **Built by [Zovo](https://zovo.one)**

**Hash-based SPA router for popups** — param matching, page transitions (fade/slide/scale), navigation history, and back button.

## 🚀 Quick Start
```typescript
import { PopupRouter, PageTransition } from 'webext-popup-router';
const router = new PopupRouter();
router
  .add('/', (el) => { el.innerHTML = '<h1>Home</h1>'; PageTransition.fadeIn(el); })
  .add('/settings', (el) => { el.innerHTML = '<h1>Settings</h1>'; })
  .add('/item/:id', (el, params) => { el.innerHTML = `Item ${params?.id}`; })
  .start(document.getElementById('app')!);
```

## 📄 License
MIT — [Zovo](https://zovo.one)
