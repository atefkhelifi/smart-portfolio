import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  OnDestroy,
} from '@angular/core';

/**
 * Adds a smooth 3D tilt that follows the pointer, plus a CSS variable
 * (`--spot-x` / `--spot-y`) other styles can use for a spotlight glow.
 */
@Directive({
  selector: '[appTilt]',
  standalone: true,
})
export class TiltDirective implements OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly document = inject(DOCUMENT);

  /** Max rotation in degrees. */
  readonly max = input<number>(8);
  /** Scale applied while hovering. */
  readonly scale = input<number>(1.02);

  private raf = 0;

  constructor() {
    const el = this.host.nativeElement;
    el.style.transformStyle = 'preserve-3d';
    el.style.willChange = 'transform';
  }

  @HostListener('pointermove', ['$event'])
  onMove(event: PointerEvent): void {
    if (this.prefersReducedMotion() || event.pointerType === 'touch') {
      return;
    }
    const el = this.host.nativeElement;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(() => {
      const rotateY = (px - 0.5) * this.max() * 2;
      const rotateX = (0.5 - py) * this.max() * 2;
      el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${this.scale()})`;
      el.style.setProperty('--spot-x', `${px * 100}%`);
      el.style.setProperty('--spot-y', `${py * 100}%`);
    });
  }

  @HostListener('pointerleave')
  onLeave(): void {
    const el = this.host.nativeElement;
    cancelAnimationFrame(this.raf);
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
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
