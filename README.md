# webext-popup-router

[![npm version](https://img.shields.io/npm/v/webext-popup-router)](https://npmjs.com/package/webext-popup-router)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![CI Status](https://img.shields.io/github/actions/workflow/status/theluckystrike/webext-popup-router/ci.yml?branch=main)](https://github.com/theluckystrike/webext-popup-router/actions)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/webext-popup-router?style=social)](https://github.com/theluckystrike/webext-popup-router)

> A routing library for Chrome extension popup and options pages using hash-based navigation, inspired by Vue Router.

## Overview

**webext-popup-router** is a lightweight routing library designed for Chrome extension popup and options pages. It uses hash-based navigation (no server required), supports nested routes, route guards, query parameters, and history navigation — all in just ~2KB.

Part of the [Zovo](https://zovo.one) developer tools family.

## Features

- ✅ **Hash-Based Routing** - No server needed
- ✅ **Nested Routes** - Hierarchical navigation
- ✅ **Route Guards** - beforeEach, beforeEnter
- ✅ **Query Parameters** - Search and filter
- ✅ **History Navigation** - Push, back, forward
- ✅ **Lightweight** - ~2KB gzipped

## Installation

```bash
npm install webext-popup-router
```

## Quick Start

### Basic Setup

```javascript
import { createRouter, route } from 'webext-popup-router';

const router = createRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/settings', component: SettingsPage },
    { path: '/profile/:id', component: ProfilePage }
  ]
});

router.mount('#app');
```

### With Route Guards

```javascript
const router = createRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/admin', component: AdminPage, meta: { requiresAuth: true } }
  ],
  beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !isLoggedIn()) {
      next('/login');
    } else {
      next();
    }
  }
});
```

### Programmatic Navigation

```javascript
import { router } from 'webext-popup-router';

// Navigate to a route
router.push('/settings');

// Navigate back
router.back();

// Get current route
console.log(router.currentRoute);
```

### Query Parameters

```javascript
// Navigate with query
router.push({ path: '/search', query: { q: 'chrome', page: 1 } });

// Access query params
const { q, page } = router.currentRoute.query;
```

### Dynamic Routes

```javascript
{ path: '/user/:id', component: UserPage }

// In component
const userId = router.currentRoute.params.id;
```

## API

### createRouter(options)

| Option | Type | Description |
|--------|------|-------------|
| routes | array | Array of route definitions |
| mode | string | 'hash' (default) |
| base | string | Base path |

### route(path, component, options)

```javascript
route('/path', Component, {
  name: 'route-name',
  meta: { key: 'value' },
  beforeEnter: (to, from, next) => { next(); }
});
```

### Router Instance

| Method | Description |
|--------|-------------|
| `push(path)` | Navigate to path |
| `replace(path)` | Navigate without history |
| `back()` | Go back in history |
| `forward()` | Go forward in history |
| `mount(selector)` | Mount router to DOM |

### Properties

| Property | Description |
|----------|-------------|
| `currentRoute` | Current route object |
| `routes` | All registered routes |

## Example: Popup Page

```javascript
// popup.js
import { createRouter, route } from 'webext-popup-router';

const Home = () => '<div class="home"><h1>Welcome</h1></div>';
const Settings = () => '<div class="settings"><h1>Settings</h1></div>';

const router = createRouter({
  routes: [
    route('/', Home),
    route('/settings', Settings)
  ]
});

router.mount('#popup-root');

// In popup.html
// <div id="popup-root></div>
```

## Browser Support

- Chrome 80+
- Edge 80+

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/routing-feature`
3. **Make** your changes
4. **Test** your changes: `npm test`
5. **Commit** your changes: `git commit -m 'Add new feature'`
6. **Push** to the branch: `git push origin feature/routing-feature`
7. **Submit** a Pull Request

## Built by Zovo

Part of the [Zovo](https://zovo.one) developer tools family — privacy-first Chrome extensions built by developers, for developers.

## See Also

### Related Zovo Repositories

- [webext-options-page](https://github.com/theluckystrike/webext-options-page) - Pre-built options page
- [chrome-extension-starter-mv3](https://github.com/theluckystrike/chrome-extension-starter-mv3) - Extension template
- [webext-reactive-store](https://github.com/theluckystrike/webext-reactive-store) - State management
- [zovo-extension-template](https://github.com/theluckystrike/zovo-extension-template) - Privacy-first template

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions
- [Zovo Permissions Scanner](https://chrome.google.com/webstore/detail/zovo-permissions-scanner) - Check extension privacy grades

Visit [zovo.one](https://zovo.one) for more information.

## License

MIT — [Zovo](https://zovo.one)

---

*Built by developers, for developers. No compromises on privacy.*
