import { Injectable } from '@angular/core';
import {
  trigger, state, style, transition, animate, keyframes, query, stagger
} from '@angular/animations';

@Injectable({ providedIn: 'root' })
export class AnimationService {

  fadeInUp = trigger('fadeInUp', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]);

  fadeIn = trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('400ms ease-out', style({ opacity: 1 }))
    ])
  ]);

  slideInLeft = trigger('slideInLeft', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(-50px)' }),
      animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
    ])
  ]);

  staggerCards = trigger('staggerCards', [
    transition('* => *', [
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        stagger(100, [
          animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ], { optional: true })
    ])
  ]);

  pulse = trigger('pulse', [
    transition(':enter', [
      animate('1.5s ease-in-out infinite', keyframes([
        style({ transform: 'scale(1)', offset: 0 }),
        style({ transform: 'scale(1.05)', offset: 0.5 }),
        style({ transform: 'scale(1)', offset: 1 })
      ]))
    ])
  ]);

  hoverScale = trigger('hoverScale', [
    state('normal', style({ transform: 'scale(1)' })),
    state('hovered', style({ transform: 'scale(1.05)' })),
    transition('normal <=> hovered', animate('300ms ease-in-out'))
  ]);

  expandCollapse = trigger('expandCollapse', [
    state('collapsed', style({ height: '0px', opacity: 0 })),
    state('expanded', style({ height: '*', opacity: 1 })),
    transition('collapsed <=> expanded', animate('400ms ease-in-out'))
  ]);
}
