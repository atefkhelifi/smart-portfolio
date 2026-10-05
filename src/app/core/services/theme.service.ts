import { DOCUMENT } from '@angular/common';
import { Injectable, signal, effect, inject } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

const STORAGE_KEY = 'smart-portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  readonly mode = signal<ThemeMode>(this.resolveInitialMode());

  constructor() {
    effect(() => {
      const mode = this.mode();
      const root = this.document.documentElement;
      root.classList.toggle('light', mode === 'light');
      root.classList.toggle('dark', mode === 'dark');
      this.document.defaultView?.localStorage.setItem(STORAGE_KEY, mode);
    });
  }

  toggle(): void {
    this.mode.update((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  private resolveInitialMode(): ThemeMode {
    const stored = this.document.defaultView?.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    const prefersLight = this.document.defaultView?.matchMedia?.(
      '(prefers-color-scheme: light)'
    ).matches;
    return prefersLight ? 'light' : 'dark';
  }
}
