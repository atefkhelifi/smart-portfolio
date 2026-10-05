import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { TiltDirective } from '../../shared/directives/tilt.directive';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, SectionHeadingComponent, TiltDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly i18n = inject(I18nService);
  private readonly grid = viewChild<ElementRef<HTMLElement>>('skillGrid');

  readonly content = this.i18n.content;
  readonly revealed = signal(false);

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const grid = this.grid()?.nativeElement;
    if (
      !isPlatformBrowser(this.platformId) ||
      !grid ||
      typeof IntersectionObserver === 'undefined'
    ) {
      this.revealed.set(true);
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.revealed.set(true);
            this.observer?.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    this.observer.observe(grid);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  /** Stagger index across all chips so they cascade in reading order. */
  chipDelay(groupIndex: number, skillIndex: number): string {
    return `${groupIndex * 70 + skillIndex * 45}ms`;
  }
}
