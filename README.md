# webext-popup-router

A routing library for Chrome extension popup and options pages using hash-based navigation, inspired by Vue Router.

## Features

- Hash-based routing (no server required)
- Nested routes
- Route guards (beforeEach, beforeEnter)
- Query parameters
- History navigation
- Lightweight (~2KB)

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

## License

MIT
