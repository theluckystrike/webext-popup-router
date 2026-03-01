/**
 * Popup Router — Hash-based SPA router for Chrome extension popups
 */
export interface Route { path: string; render: (container: HTMLElement, params?: Record<string, string>) => void; title?: string; }

export class PopupRouter {
    private routes: Route[] = [];
    private container: HTMLElement | null = null;
    private notFoundHandler?: (container: HTMLElement) => void;
    private history: string[] = [];

    /** Register a route */
    add(path: string, render: (container: HTMLElement, params?: Record<string, string>) => void, title?: string): this {
        this.routes.push({ path, render, title });
        return this;
    }

    /** Set 404 handler */
    notFound(handler: (container: HTMLElement) => void): this { this.notFoundHandler = handler; return this; }

    /** Start routing */
    start(container: HTMLElement): void {
        this.container = container;
        window.addEventListener('hashchange', () => this.resolve());
        this.resolve();
    }

    /** Navigate to a path */
    navigate(path: string): void {
        window.location.hash = path;
    }

    /** Go back */
    back(): void {
        if (this.history.length > 1) { this.history.pop(); const prev = this.history[this.history.length - 1]; window.location.hash = prev; }
    }

    /** Get current path */
    current(): string { return window.location.hash.slice(1) || '/'; }

    private resolve(): void {
        if (!this.container) return;
        const hash = window.location.hash.slice(1) || '/';
        this.history.push(hash);

        for (const route of this.routes) {
            const params = this.match(route.path, hash);
            if (params !== null) {
                this.container.innerHTML = '';
                route.render(this.container, params);
                if (route.title) document.title = route.title;
                return;
            }
        }

        this.container.innerHTML = '';
        this.notFoundHandler?.(this.container);
    }

    private match(pattern: string, path: string): Record<string, string> | null {
        if (pattern === path) return {};
        const patternParts = pattern.split('/');
        const pathParts = path.split('/');
        if (patternParts.length !== pathParts.length) return null;
        const params: Record<string, string> = {};
        for (let i = 0; i < patternParts.length; i++) {
            if (patternParts[i].startsWith(':')) { params[patternParts[i].slice(1)] = pathParts[i]; }
            else if (patternParts[i] !== pathParts[i]) return null;
        }
        return params;
    }
}
