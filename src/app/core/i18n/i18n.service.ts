import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { CONTENT_EN } from './content.en';
import { CONTENT_FR } from './content.fr';
import { Lang, PortfolioContent } from './portfolio-content';

const STORAGE_KEY = 'smart-portfolio-lang';

/** Default language: French, matching the CV and the target market. */
const DEFAULT_LANG: Lang = 'fr';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>(this.resolveInitialLang());
  readonly content = computed<PortfolioContent>(() =>
    this.lang() === 'fr' ? CONTENT_FR : CONTENT_EN
  );

  constructor() {
    effect(() => {
      const content = this.content();
      const root = this.document.documentElement;

      root.lang = content.htmlLang;
      this.document.title = content.pageTitle;
      this.setMeta('name', 'description', content.metaDescription);
      this.setMeta('property', 'og:title', content.pageTitle);
      this.setMeta('property', 'og:description', content.metaDescription);
      this.document.defaultView?.localStorage.setItem(STORAGE_KEY, content.lang);
    });
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }

  toggle(): void {
    this.lang.update((current) => (current === 'fr' ? 'en' : 'fr'));
  }

  private setMeta(attribute: 'name' | 'property', key: string, value: string): void {
    const tag = this.document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
    tag?.setAttribute('content', value);
  }

  private resolveInitialLang(): Lang {
    const stored = this.document.defaultView?.localStorage.getItem(STORAGE_KEY);
    if (stored === 'fr' || stored === 'en') {
      return stored;
    }
    const preferred = this.document.defaultView?.navigator?.language?.toLowerCase() ?? '';
    return preferred.startsWith('en') ? 'en' : DEFAULT_LANG;
  }
}
