import { Component } from '@angular/core';

@Component({
  selector: 'app-schools',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="container">
        <h1 class="page-title">Школы <span>Ведьмаков</span></h1>
        <div class="schools-grid">
          @for (school of schools; track school.id) {
            <div class="school-card">
              <div class="school-emblem-wrapper">
                <svg viewBox="0 0 80 80" class="school-emblem-svg">
                  <circle cx="40" cy="40" r="35" fill="none" stroke="#de1400" stroke-width="2"/>
                  <circle cx="40" cy="40" r="28" fill="none" stroke="#de1400" stroke-width="1" opacity="0.5"/>
                  <text x="40" y="48" text-anchor="middle" fill="#de1400" font-family="Oswald" font-size="28" font-weight="700">{{ school.letter }}</text>
                </svg>
              </div>
              <h3>{{ school.name }}</h3>
              <p>{{ school.description }}</p>
              <div class="school-specialty">{{ school.specialty }}</div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container { min-height: 100vh; background: linear-gradient(180deg, #0a0a0a 0%, #000 100%); padding: 120px 0 60px; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .page-title { font-family: 'Oswald', sans-serif; font-size: 48px; font-weight: 600; text-transform: uppercase; letter-spacing: 5px; margin-bottom: 50px; text-align: center; }
    .page-title span { color: #de1400; }
    .schools-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
    .school-card { background: rgba(26, 26, 26, 0.8); border: 1px solid rgba(222, 20, 0, 0.3); padding: 40px 30px; text-align: center; transition: all 0.4s; }
    .school-card:hover { background: rgba(222, 20, 0, 0.1); border-color: #de1400; transform: scale(1.02); }
    .school-emblem-wrapper { margin-bottom: 20px; }
    .school-emblem-svg { width: 80px; height: 80px; transition: transform 0.4s; }
    .school-card:hover .school-emblem-svg { transform: rotate(10deg) scale(1.1); }
    .school-card h3 { font-family: 'Oswald', sans-serif; font-size: 22px; font-weight: 600; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 15px; }
    .school-card p { font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.6; }
    .school-specialty { margin-top: 20px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); font-family: 'Oswald', sans-serif; font-size: 12px; letter-spacing: 2px; color: #de1400; }
  `]
})
export class SchoolsComponent {
  schools = [
    { id: 1, letter: 'W', name: 'Школа Волка', description: 'Самая известная школа. Геральт — её представитель.', specialty: 'БАЛАНС МЕЧА И ЗЕЛЬЕВ' },
    { id: 2, letter: 'C', name: 'Школа Кота', description: 'Ассасины и следопыты. Быстрые и ловкие бойцы.', specialty: 'СКОРОСТЬ И ЛОВКОСТЬ' },
    { id: 3, letter: 'M', name: 'Школа Медведя', description: 'Тяжёлая пехота. Броня и щиты.', specialty: 'СИЛА И ЗАЩИТА' },
    { id: 4, letter: 'V', name: 'Школа Виверны', description: 'Альтернативная ветвь. Химики и алхимики.', specialty: 'ЯДЫ И ЗЕЛЬЯ' },
    { id: 5, letter: 'G', name: 'Школа Грифона', description: 'Баланс между мечом и магией.', specialty: 'МАГИЯ И БОЙ' },
    { id: 6, letter: 'B', name: 'Школа Барса', description: 'Элитные наёмники. Благородное происхождение.', specialty: 'ЭЛИТНЫЕ НАЁМНИКИ' }
  ];
}
