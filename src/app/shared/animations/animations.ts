import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

/**
 * Staggered entrance for a changing collection. Bind it to whatever value
 * changes when the list does, e.g. `[@listStagger]="activeFilter()"`.
 */
export const listStagger = trigger('listStagger', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(18px)' }),
        stagger(70, animate(`420ms ${EASE}`, style({ opacity: 1, transform: 'none' }))),
      ],
      { optional: true }
    ),
  ]),
]);
