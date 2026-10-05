import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  OnDestroy,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { ThemeService } from '../../core/services/theme.service';
import { I18nService } from '../../core/i18n/i18n.service';
import { Lang } from '../../core/i18n/portfolio-content';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  readonly theme = inject(ThemeService);
  readonly i18n = inject(I18nService);
  readonly content = this.i18n.content;

  readonly languages: Lang[] = ['fr', 'en'];

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly activeSection = signal('home');
  readonly progress = signal(0);

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          this.activeSection.set(visible.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    this.content().nav.forEach((item) => {
      const section = this.document.getElementById(item.anchor);
      if (section) {
        this.observer?.observe(section);
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const view = this.document.defaultView;
    const el = this.document.documentElement;
    const scrollTop = view?.scrollY ?? el.scrollTop;
    const height = el.scrollHeight - el.clientHeight;

    this.scrolled.set(scrollTop > 24);
    this.progress.set(height > 0 ? Math.min(scrollTop / height, 1) : 0);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  setLang(lang: Lang): void {
    this.i18n.set(lang);
    this.closeMenu();
  }

  goTo(anchor: string, event: Event): void {
    event.preventDefault();
    this.closeMenu();
    this.document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
