import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { TiltDirective } from '../../shared/directives/tilt.directive';
import { listStagger } from '../../shared/animations/animations';
import { I18nService } from '../../core/i18n/i18n.service';
import { Project } from '../../core/i18n/portfolio-content';

interface FilterOption {
  id: number | null;
  label: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, SectionHeadingComponent, TiltDirective],
  animations: [listStagger],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly i18n = inject(I18nService);
  readonly content = this.i18n.content;

  /**
   * Categories are kept in a stable order across languages, so filtering by
   * index survives a language switch (a category *string* would not).
   */
  readonly activeFilter = signal<number | null>(null);

  readonly categories = computed<string[]>(() => {
    const seen: string[] = [];
    this.content().projects.forEach((project) => {
      if (!seen.includes(project.category)) {
        seen.push(project.category);
      }
    });
    return seen;
  });

  readonly filters = computed<FilterOption[]>(() => [
    { id: null, label: this.content().ui.projects.all },
    ...this.categories().map((label, index) => ({ id: index as number | null, label })),
  ]);

  readonly visibleProjects = computed<Project[]>(() => {
    const index = this.activeFilter();
    if (index === null) {
      return this.content().projects;
    }
    const category = this.categories()[index];
    return this.content().projects.filter((project) => project.category === category);
  });

  setFilter(id: number | null): void {
    this.activeFilter.set(id);
  }

  hasLinks(project: Project): boolean {
    return Boolean(project.demo || project.repo);
  }

  gradientFor(index: number): string {
    const palettes = [
      'linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-cyan)))',
      'linear-gradient(135deg, rgb(var(--accent-cyan)), rgb(var(--accent)))',
      'linear-gradient(135deg, #f472b6, rgb(var(--accent)))',
      'linear-gradient(135deg, #a3e635, rgb(var(--accent-cyan)))',
    ];
    return palettes[index % palettes.length];
  }
}
