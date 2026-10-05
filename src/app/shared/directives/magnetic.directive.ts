import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  OnDestroy,
} from '@angular/core';

/** Gently pulls an element toward the pointer while hovering. */
@Directive({
  selector: '[appMagnetic]',
  standalone: true,
})
export class MagneticDirective implements OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly document = inject(DOCUMENT);

  /** How far the element may travel, in px. */
  readonly strength = input<number>(12);

  private raf = 0;

  @HostListener('pointermove', ['$event'])
  onMove(event: PointerEvent): void {
    if (this.prefersReducedMotion()) {
      return;
    }
    const el = this.host.nativeElement;
    const rect = el.getBoundingClientRect();
    const dx = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

    cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(() => {
      el.style.transform = `translate3d(${dx * this.strength()}px, ${
        dy * this.strength()
      }px, 0)`;
    });
  }

  @HostListener('pointerleave')
  onLeave(): void {
    const el = this.host.nativeElement;
    cancelAnimationFrame(this.raf);
    el.style.transform = 'translate3d(0, 0, 0)';
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf);
  }

  private prefersReducedMotion(): boolean {
    return (
      this.document.defaultView?.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    );
  }
}
