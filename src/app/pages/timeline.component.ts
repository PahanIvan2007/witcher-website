import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="container">
        <h1 class="page-title">История <span>Ведьмака</span></h1>
        <div class="timeline-container">
          <div class="timeline-line"></div>
          @for (event of timeline; track event.id; let i = $index) {
            <div class="timeline-item" [class.left]="i % 2 === 0" [class.right]="i % 2 !== 0">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-year">{{ event.year }}</div>
                <div class="timeline-event">{{ event.event }}</div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container { min-height: 100vh; background: #000; padding: 120px 0 60px; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .page-title { font-family: 'Oswald', sans-serif; font-size: 48px; font-weight: 600; text-transform: uppercase; letter-spacing: 5px; margin-bottom: 50px; text-align: center; }
    .page-title span { color: #de1400; }
    .timeline-container { position: relative; max-width: 800px; margin: 0 auto; }
    .timeline-line { position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: #de1400; transform: translateX(-50%); }
    .timeline-item { display: flex; margin-bottom: 50px; position: relative; }
    .timeline-item.left { justify-content: flex-start; padding-right: calc(50% + 30px); text-align: right; }
    .timeline-item.right { justify-content: flex-end; padding-left: calc(50% + 30px); text-align: left; }
    .timeline-dot { position: absolute; left: 50%; top: 10px; width: 16px; height: 16px; background: #de1400; border-radius: 50%; transform: translateX(-50%); box-shadow: 0 0 20px #de1400; }
    .timeline-year { font-family: 'Oswald', sans-serif; font-size: 32px; font-weight: 700; color: #de1400; margin-bottom: 10px; }
    .timeline-event { font-size: 16px; color: rgba(255,255,255,0.8); }
    @media (max-width: 768px) { .timeline-line { left: 20px; } .timeline-item, .timeline-item.left, .timeline-item.right { padding-left: 50px; padding-right: 0; text-align: left; justify-content: flex-start; } .timeline-dot { left: 20px; } }
  `]
})
export class TimelineComponent {
  timeline = [
    { id: 1, year: '1993', event: 'Анджей Сапковский публикует первый рассказ о Ведьмаке' },
    { id: 2, year: '1999', event: 'CD Projekt RED создаёт первую игру о Ведьмаке' },
    { id: 3, year: '2007', event: 'The Witcher — начало эпопеи' },
    { id: 4, year: '2011', event: 'The Witcher 2: Assassins of Kings' },
    { id: 5, year: '2015', event: 'The Witcher 3: Wild Hunt — шедевр RPG' },
    { id: 6, year: '2019', event: 'Netflix сериал «Ведьмак»' },
    { id: 7, year: '2026', event: 'The Witcher 4 — новая глава' }
  ];
}
