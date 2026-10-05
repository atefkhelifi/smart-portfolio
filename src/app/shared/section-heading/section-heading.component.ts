import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mb-12 max-w-2xl" data-aos="fade-up">
      <span class="eyebrow">
        <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-current"></span>
        {{ eyebrow() }}
      </span>
      <h2
        class="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
      >
        {{ title() }}
        @if (highlight()) {
          <span class="gradient-text"> {{ highlight() }}</span>
        }
      </h2>
      @if (subtitle()) {
        <p class="mt-4 text-base leading-relaxed text-muted">{{ subtitle() }}</p>
      }
    </div>
  `,
})
export class SectionHeadingComponent {
  readonly eyebrow = input<string>('Section');
  readonly title = input.required<string>();
  readonly highlight = input<string>('');
  readonly subtitle = input<string>('');
}
