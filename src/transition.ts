/**
 * Page Transition — Animated transitions between popup pages
 */
export class PageTransition {
    static fadeIn(element: HTMLElement, durationMs: number = 200): void {
        element.style.opacity = '0'; element.style.transition = `opacity ${durationMs}ms ease`;
        requestAnimationFrame(() => { element.style.opacity = '1'; });
    }

    static slideIn(element: HTMLElement, direction: 'left' | 'right' = 'right', durationMs: number = 200): void {
        const offset = direction === 'right' ? '20px' : '-20px';
        element.style.transform = `translateX(${offset})`; element.style.opacity = '0';
        element.style.transition = `transform ${durationMs}ms ease, opacity ${durationMs}ms ease`;
        requestAnimationFrame(() => { element.style.transform = 'translateX(0)'; element.style.opacity = '1'; });
    }

    static scaleIn(element: HTMLElement, durationMs: number = 200): void {
        element.style.transform = 'scale(0.95)'; element.style.opacity = '0';
        element.style.transition = `transform ${durationMs}ms ease, opacity ${durationMs}ms ease`;
        requestAnimationFrame(() => { element.style.transform = 'scale(1)'; element.style.opacity = '1'; });
    }
}
