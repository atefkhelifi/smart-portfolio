import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

const ICONS: Record<string, string> = {
  menu: 'M3 6h18M3 12h18M3 18h18',
  close: 'M6 6l12 12M18 6L6 18',
  sun: 'M12 4V2m0 20v-2m8-8h2M2 12h2m13.66-5.66l1.41-1.41M4.93 19.07l1.41-1.41m0-11.32L4.93 4.93m14.14 14.14l-1.41-1.41M16 12a4 4 0 11-8 0 4 4 0 018 0z',
  moon: 'M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z',
  arrowUp: 'M12 19V5m0 0l-7 7m7-7l7 7',
  arrowRight: 'M5 12h14m0 0l-7-7m7 7l-7 7',
  arrowDown: 'M12 5v14m0 0l7-7m-7 7l-7-7',
  external: 'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-6 0L21 3',
  mail: 'M3 6.5h18v11H3zM3 7l9 6 9-6',
  phone:
    'M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.2 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z',
  pin: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 13a3 3 0 100-6 3 3 0 000 6z',
  download: 'M12 3v12m0 0l-4-4m4 4l4-4M4 19h16',
  github:
    'M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21',
  linkedin:
    'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM6 9H2v12h4zM4 6a2 2 0 100-4 2 2 0 000 4z',
  x: 'M4 4l7.5 9.5L4 20h2.2l6.3-7.9L18 20h2l-7.7-9.8L19.5 4h-2.2l-5.7 7.2L8 4H4z',
  layout: 'M3 5h18v14H3zM3 10h18M10 10v9',
  server:
    'M4 4h16v6H4zM4 14h16v6H4zM7.5 7h.01M7.5 17h.01',
  cloud: 'M17.5 19a4.5 4.5 0 000-9 6 6 0 00-11.6 1.5A4 4 0 006.5 19z',
  sparkles:
    'M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z',
  rocket:
    'M12 3c3.5 0 6 2.5 6 6 0 4-3 7-6 9-3-2-6-5-6-9 0-3.5 2.5-6 6-6zM12 11a2 2 0 100-4 2 2 0 000 4zM9 18l-2 3M15 18l2 3',
  shield: 'M12 3l8 3v6c0 5-3.4 8.4-8 9.9C7.4 20.4 4 17 4 12V6zM9.5 12.5l1.8 1.8 3.4-3.6',
  plug: 'M9 3v6M15 3v6M7 9h10v3a5 5 0 01-10 0zM12 17v4',
  palette:
    'M12 3a9 9 0 000 18c1 0 1.8-.8 1.8-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H16a5 5 0 005-5c0-4-4-7-9-7zM7.5 12a1 1 0 100-2 1 1 0 000 2zM11 8.5a1 1 0 100-2 1 1 0 000 2zM15.5 9.5a1 1 0 100-2 1 1 0 000 2z',
  quote: 'M9 6H5a2 2 0 00-2 2v4h4l-2 6h4l2-6V8a2 2 0 00-2-2zM21 6h-4a2 2 0 00-2 2v4h4l-2 6h4l2-6V8a2 2 0 00-2-2z',
  check: 'M20 6L9 17l-5-5',
  code: 'M8 6l-6 6 6 6M16 6l6 6-6 6',
  briefcase: 'M4 8h16v11H4zM9 8V6a2 2 0 012-2h2a2 2 0 012 2v2M4 13h16',
  send: 'M22 2L11 13M22 2l-7 20-4-9-9-4z',
  database:
    'M12 3c4.4 0 8 1.1 8 2.5S16.4 8 12 8 4 6.9 4 5.5 7.6 3 12 3zM4 5.5v13C4 19.9 7.6 21 12 21s8-1.1 8-2.5v-13M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5',
  layers: 'M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5',
  users:
    'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75',
  loader: 'M12 2v4m0 12v4M4.9 4.9l2.8 2.8m8.6 8.6l2.8 2.8M2 12h4m12 0h4M4.9 19.1l2.8-2.8m8.6-8.6l2.8-2.8',
};

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="strokeWidth()"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
      [innerHTML]="paths()"
    ></svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
      }
      svg {
        display: block;
      }
    `,
  ],
})
export class IconComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly name = input.required<string>();
  readonly size = input<number>(20);
  readonly strokeWidth = input<number>(1.75);

  protected readonly paths = computed<SafeHtml>(() =>
    this.sanitizer.bypassSecurityTrustHtml(
      ICONS[this.name()] ? `<path d="${ICONS[this.name()]}"/>` : ''
    )
  );
}
