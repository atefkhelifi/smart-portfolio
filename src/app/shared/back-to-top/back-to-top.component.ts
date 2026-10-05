import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  template: `
    <button
      type="button"
      class="group fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full
        text-white shadow-glow transition-all duration-500 hover:scale-105"
      [class.pointer-events-none]="!visible()"
      [class.opacity-0]="!visible()"
      [class.translate-y-4]="!visible()"
      [style.background]="'linear-gradient(120deg, rgb(var(--accent)), rgb(var(--accent-cyan)))'"
      [attr.aria-label]="i18n.content().ui.common.backToTop"
      (click)="scrollTop()"
    >
      <span
        class="absolute inset-[-5px] rounded-full"
        [style.background]="ringBackground()"
        aria-hidden="true"
      ></span>
      <span class="relative grid place-items-center">
        <app-icon name="arrowUp" [size]="20" />
      </span>
    </button>
  `,
})
export class BackToTopComponent {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  readonly i18n = inject(I18nService);

  readonly visible = signal(false);
  readonly progress = signal(0);

  ringBackground(): string {
    const pct = Math.round(this.progress() * 100);
    return `conic-gradient(rgb(var(--accent)) ${pct}%, rgb(var(--border) / 0.15) ${pct}%)`;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const view = this.document.defaultView;
    if (!view) {
      return;
    }
    const el = this.document.documentElement;
    const scrollTop = view.scrollY || el.scrollTop;
    const height = el.scrollHeight - el.clientHeight;
    this.progress.set(height > 0 ? Math.min(scrollTop / height, 1) : 0);

    const shouldShow = scrollTop > 480;
    if (shouldShow !== this.visible()) {
      this.visible.set(shouldShow);
    }
  }

  scrollTop(): void {
    this.document.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
