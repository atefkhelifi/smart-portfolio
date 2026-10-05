import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import AOS from 'aos';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({ providedIn: 'root' })
export class AnimationService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private aosReady = false;
  private pluginsRegistered = false;

  private get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  /** Initialise AOS once; safe to call from any component. */
  initScrollReveal(): void {
    if (!this.isBrowser || this.aosReady) {
      return;
    }
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 0,
      disable: () => this.prefersReducedMotion(),
    });
    this.aosReady = true;
  }

  refreshScrollReveal(): void {
    if (this.isBrowser && this.aosReady) {
      AOS.refreshHard();
    }
  }

  /** Register GSAP plugins exactly once. */
  private registerPlugins(): void {
    if (!this.pluginsRegistered) {
      gsap.registerPlugin(ScrollTrigger);
      this.pluginsRegistered = true;
    }
  }

  /** Animated entrance for the hero, runs on first paint. */
  heroIntro(root: HTMLElement): void {
    if (!this.isBrowser) {
      return;
    }
    if (this.prefersReducedMotion()) {
      return;
    }
    this.registerPlugins();

    const targets = root.querySelectorAll<HTMLElement>('[data-hero]');
    if (!targets.length) {
      return;
    }

    gsap.fromTo(
      targets,
      { y: 34, opacity: 0, filter: 'blur(8px)' },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.15,
        clearProps: 'filter',
      }
    );
  }

  /** Subtle parallax tied to page scroll. */
  parallax(root: HTMLElement, selector: string, distance = 120): void {
    if (!this.isBrowser || this.prefersReducedMotion()) {
      return;
    }
    this.registerPlugins();

    root.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      gsap.to(el, {
        yPercent: distance / 10,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });
  }

  killScrollTriggers(): void {
    if (this.isBrowser && this.pluginsRegistered) {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  }

  private prefersReducedMotion(): boolean {
    return (
      this.document.defaultView?.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    );
  }
}
