import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
} from '@angular/core';

/**
 * Animates a numeric value into view, preserving any prefix/suffix,
 * e.g. `24+`, `$12k`, `98%`.
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly document = inject(DOCUMENT);

  readonly appCountUp = input<string>('0');
  readonly duration = input<number>(1600);

  private observer?: IntersectionObserver;
  private frame = 0;

  ngAfterViewInit(): void {
    const win = this.document.defaultView;
    const el = this.host.nativeElement;

    if (!win || typeof IntersectionObserver === 'undefined') {
      el.textContent = this.appCountUp();
      return;
    }

    if (win.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = this.appCountUp();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.run();
            this.observer?.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.document.defaultView?.cancelAnimationFrame(this.frame);
  }

  private run(): void {
    const el = this.host.nativeElement;
    const raw = this.appCountUp();
    const match = raw.match(/^(\D*)([\d.,]+)(.*)$/);

    if (!match) {
      el.textContent = raw;
      return;
    }

    const [, prefix, digits, suffix] = match;
    const target = Number.parseFloat(digits.replace(/,/g, ''));
    if (Number.isNaN(target)) {
      el.textContent = raw;
      return;
    }

    const decimals = digits.includes('.') ? digits.split('.')[1].length : 0;
    const win = this.document.defaultView;
    const start = win?.performance.now() ?? Date.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / this.duration(), 1);
      // easeOutExpo for a snappy finish
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const value = target * eased;
      el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
      if (progress < 1) {
        this.frame = win?.requestAnimationFrame(tick) ?? 0;
      }
    };

    this.frame = win?.requestAnimationFrame(tick) ?? 0;
  }
}
