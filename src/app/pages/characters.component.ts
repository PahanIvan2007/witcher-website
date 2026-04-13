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
                <img [src]="char.image" [alt]="char.name" loading="lazy">
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
    .character-image-wrapper { height: 300px; background: linear-gradient(135deg, #2a0a0a, #1a0505); overflow: hidden; }
    .character-image-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
    .character-card:hover .character-image-wrapper img { transform: scale(1.1); }
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
    { id: 1, name: 'Геральт из Ривии', aka: 'БЕЛОВОЛОСЫЙ', description: 'Беловолосый ведьмак из Школы Волка. Наёмный убийца чудовищ.', weapon: 'Стальной и Серебряный мечи', origin: 'Каэр Морхен', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop' },
    { id: 2, name: 'Цири', aka: 'ЛАСТОЧКА', description: 'Принцесса Цинтры, носительница Elder Blood. Дочь Паветты.', weapon: 'Меч из Ласточки', origin: 'Цинтра', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop' },
    { id: 3, name: 'Йеннифер', aka: 'ЛЬВИЦА', description: 'Чёрная чародейка. Одна из самых могущественных магов Севера.', weapon: 'Магия хаоса', origin: 'Аретуза', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop' },
    { id: 4, name: 'Лютик', aka: 'БАРД', description: 'Поэт и друг Геральта. Лучший бард Севера.', weapon: 'Лютня', origin: 'Новиград', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop' },
    { id: 5, name: 'Эредін', aka: 'КРАСНЫЙ', description: 'Король Дикой Охоты. Повелитель Мира Эльфов.', weapon: 'Звёздная Пыль', origin: 'Аэртудрассил', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop' },
    { id: 6, name: 'Трисс', aka: 'РЫЖАЯ', description: 'Чародейка из Каэр Морхен. Советница короля Радовида.', weapon: 'Огненная магия', origin: 'Махакам', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop' }
  ];
}
