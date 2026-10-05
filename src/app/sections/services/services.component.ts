import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon.component';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { TiltDirective } from '../../shared/directives/tilt.directive';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  selector: 'app-services',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, SectionHeadingComponent, TiltDirective],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  private readonly i18n = inject(I18nService);
  readonly content = this.i18n.content;
}
