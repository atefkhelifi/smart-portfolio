import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  OnDestroy,
  signal,
  viewChild,
} from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { CountUpDirective } from '../../shared/directives/count-up.directive';
import { MagneticDirective } from '../../shared/directives/magnetic.directive';
import { AnimationService } from '../../core/services/animation.service';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, CountUpDirective, MagneticDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnDestroy {
  private readonly animations = inject(AnimationService);
  private readonly document = inject(DOCUMENT);
  private readonly i18n = inject(I18nService);
  private readonly root = viewChild.required<ElementRef<HTMLElement>>('heroRoot');

  readonly content = this.i18n.content;

  readonly typed = signal('');
  private timer?: ReturnType<typeof setTimeout>;
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;

  constructor() {
    afterNextRender(() => {
      const el = this.root().nativeElement;
      this.animations.heroIntro(el);
      this.animations.parallax(el, '[data-parallax]', 90);
    });

    // Restart the typewriter whenever the language (and therefore the roles) change.
    effect(() => {
      this.content();
      clearTimeout(this.timer);
      this.roleIndex = 0;
      this.charIndex = 0;
      this.deleting = false;
      this.timer = setTimeout(() => this.type(), 0);
    });
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private get roles(): string[] {
    return this.content().profile.roles;
  }

  private type(): void {
    const roles = this.roles;
    if (!roles.length) {
      return;
    }

    if (this.prefersReducedMotion()) {
      this.typed.set(roles[0]);
      return;
    }

    const current = roles[this.roleIndex % roles.length];

    // Guard against a language switch shortening the current role mid-animation.
    if (this.charIndex > current.length) {
      this.charIndex = current.length;
      this.deleting = true;
    }

    const atEnd = this.charIndex === current.length;
    const atStart = this.charIndex === 0;

    let delay = this.deleting ? 45 : 85;

    if (!this.deleting && atEnd) {
      this.deleting = true;
      delay = 1600;
    } else if (this.deleting && atStart) {
      this.deleting = false;
      this.roleIndex += 1;
      delay = 320;
    } else {
      this.charIndex += this.deleting ? -1 : 1;
    }

    this.typed.set(current.slice(0, this.charIndex));
    this.timer = setTimeout(() => this.type(), delay);
  }

  private prefersReducedMotion(): boolean {
    return (
      this.document.defaultView?.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    );
  }

  scrollTo(anchor: string, event: Event): void {
    event.preventDefault();
    this.document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
  }
}
