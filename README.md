[![CI](https://github.com/theluckystrike/webext-popup-router/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/webext-popup-router/actions)
[![npm](https://img.shields.io/npm/v/@theluckystrike/webext-popup-router)](https://www.npmjs.com/package/@theluckystrike/webext-popup-router)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)

# webext-popup-router

A lightweight routing library for Chrome extension popup and options pages using hash-based navigation.

## Overview

webext-popup-router provides hash-based routing for Chrome extension popups with support for dynamic route parameters, navigation history, and page transitions. The library is written in TypeScript and has zero dependencies.

## Features

- Hash-based routing that works without a server
- Dynamic route parameters like /user/:id
- Navigation history with back button support
- Built-in page transition animations
- Lightweight and minimal

## Installation

```bash
npm install webext-popup-router
```

## Quick Start

```typescript
import { PopupRouter, PageTransition } from 'webext-popup-router';

const router = new PopupRouter();

// Define your routes
router.add('/', (container) => {
  container.innerHTML = '<h1>Home</h1><button id="settings-btn">Settings</button>';
  document.getElementById('settings-btn')?.addEventListener('click', () => {
    router.navigate('/settings');
  });
});

router.add('/settings', (container) => {
  container.innerHTML = '<h1>Settings</h1><button id="back-btn">Back</button>';
  PageTransition.fadeIn(container);
  document.getElementById('back-btn')?.addEventListener('click', () => {
    router.back();
  });
});

// Handle 404
router.notFound((container) => {
  container.innerHTML = '<h1>Page Not Found</h1>';
});

// Start the router
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app');
  if (container) {
    router.start(container);
  }
});
```

## API Reference

### PopupRouter

The main router class.

#### Methods

**add(path, render, title?)**

Register a new route.

```typescript
router.add('/users', (container) => {
  container.innerHTML = '<h1>Users</h1>';
}, 'Users Page');
```

Parameters:
- path: string - The route path pattern
- render: function - Callback that receives the container element and optional params
- title?: string - Optional document title for this route

**notFound(handler)**

Set the handler for unmatched routes.

```typescript
router.notFound((container) => {
  container.innerHTML = '<h1>404 Not Found</h1>';
});
```

**start(container)**

Initialize the router and start listening for hash changes.

```typescript
const container = document.getElementById('app');
router.start(container);
```

**navigate(path)**

Programmatically navigate to a path.

```typescript
router.navigate('/settings');
```

**back()**

Navigate back in history.

```typescript
router.back();
```

**current()**

Get the current path.

```typescript
const path = router.current();
```

### PageTransition

Static class providing animation utilities.

#### Methods

**fadeIn(element, durationMs?)**

Apply a fade-in animation to an element.

```typescript
PageTransition.fadeIn(container, 300);
```

**slideIn(element, direction?, durationMs?)**

Apply a slide-in animation. Direction can be 'left' or 'right'.

```typescript
PageTransition.slideIn(container, 'right', 200);
```

**scaleIn(element, durationMs?)**

Apply a scale-in animation.

```typescript
PageTransition.scaleIn(container, 200);
```

### Route Interface

```typescript
interface Route {
  path: string;
  render: (container: HTMLElement, params?: Record<string, string>) => void;
  title?: string;
}
```

## Route Parameters

Routes can include dynamic parameters using the colon syntax.

```typescript
router.add('/user/:id', (container, params) => {
  container.innerHTML = `<h1>User: ${params?.id}</h1>`;
});

// Navigate to /user/123
router.navigate('/user/123');
```

## Building

```bash
npm install
npm run build
```

This compiles the TypeScript source to JavaScript in the dist directory.

## License

MIT License - Copyright (c) 2025 theluckystrike

## About

webext-popup-router is maintained by theluckystrike. It is part of the zovo.one developer tools ecosystem, focused on building privacy-first Chrome extensions.

---
Built by [theluckystrike](https://github.com/theluckystrike) — [zovo.one](https://zovo.one)
