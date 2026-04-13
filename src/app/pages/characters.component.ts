import { Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="container">
        <h1 class="page-title">Главные <span>Персонажи</span></h1>
        <div class="characters-grid">
          @for (char of characters; track char.id) {
            <div class="character-card">
              <div class="character-image-wrapper">
                <div class="character-placeholder">{{ char.name.charAt(0) }}</div>
              </div>
              <div class="character-info">
                <div class="character-badge">{{ char.aka }}</div>
                <h3>{{ char.name }}</h3>
                <p>{{ char.description }}</p>
                <div class="character-stats">
                  <span><strong>Оружие:</strong> {{ char.weapon }}</span>
                  <span><strong>Происхождение:</strong> {{ char.origin }}</span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container { min-height: 100vh; background: #0a0a0a; padding: 120px 0 60px; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .page-title { font-family: 'Oswald', sans-serif; font-size: 48px; font-weight: 600; text-transform: uppercase; letter-spacing: 5px; margin-bottom: 50px; text-align: center; }
    .page-title span { color: #de1400; }
    .characters-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
    .character-card { background: #1a1a1a; border: 1px solid rgba(255,255,255,0.05); overflow: hidden; transition: all 0.4s; }
    .character-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(222, 20, 0, 0.3); border-color: #de1400; }
    .character-image-wrapper { height: 300px; background: linear-gradient(135deg, #2a0a0a, #1a0505); display: flex; align-items: center; justify-content: center; }
    .character-placeholder { font-family: 'Oswald', sans-serif; font-size: 80px; color: #de1400; opacity: 0.5; }
    .character-info { padding: 25px; }
    .character-badge { display: inline-block; padding: 4px 12px; background: #de1400; font-family: 'Oswald', sans-serif; font-size: 10px; letter-spacing: 2px; margin-bottom: 10px; }
    .character-info h3 { font-family: 'Oswald', sans-serif; font-size: 24px; font-weight: 600; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 10px; }
    .character-info p { font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.6; margin-bottom: 15px; }
    .character-stats { display: flex; flex-direction: column; gap: 5px; font-size: 12px; color: rgba(255,255,255,0.4); }
    .character-stats strong { color: #de1400; }
  `]
})
export class CharactersComponent {
  characters = [
    { id: 1, name: 'Геральт из Ривии', aka: 'БЕЛОВОЛОСЫЙ', description: 'Беловолосый ведьмак из Школы Волка. Наёмный убийца чудовищ.', weapon: 'Стальной и Серебряный мечи', origin: 'Каэр Морхен' },
    { id: 2, name: 'Цири', aka: 'ЛАСТОЧКА', description: 'Принцесса Цинтры, носительница Elder Blood. Дочь Паветты.', weapon: 'Меч из Ласточки', origin: 'Цинтра' },
    { id: 3, name: 'Йеннифер', aka: 'ЛЬВИЦА', description: 'Чёрная чародейка. Одна из самых могущественных магов Севера.', weapon: 'Магия хаоса', origin: 'Аретуза' },
    { id: 4, name: 'Лютик', aka: 'БАРД', description: 'Поэт и друг Геральта. Лучший бард Севера.', weapon: 'Лютня', origin: 'Новиград' },
    { id: 5, name: 'Эредін', aka: 'КРАСНЫЙ', description: 'Король Дикой Охоты. Повелитель Мира Эльфов.', weapon: 'Звёздная Пыль', origin: 'Аэртудрассил' },
    { id: 6, name: 'Трисс', aka: 'РЫЖАЯ', description: 'Чародейка из Каэр Морхен. Советница короля Радовида.', weapon: 'Огненная магия', origin: 'Махакам' }
  ];
}
