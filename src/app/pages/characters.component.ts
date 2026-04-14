import { Component, inject, OnInit } from '@angular/core';
import { AnimationService } from '../services/animation.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="container">
        <h1 class="page-title" @fadeInUp>Главные <span>Персонажи</span></h1>
        <div class="characters-grid">
          @for (char of characters; track char.id; let i = $index) {
            <div class="character-card" 
                 (mouseenter)="hoveredId = char.id"
                 (mouseleave)="hoveredId = null"
                 @fadeInUp
                 [style.animation-delay]="i * 100 + 'ms'">
              <div class="character-image-wrapper">
                <img [src]="char.image" [alt]="char.name" loading="lazy">
                <div class="image-overlay"></div>
                <div class="image-glow"></div>
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
    :host { display: block; }
    .page-container { min-height: 100vh; background: #0a0a0a; padding: 120px 0 60px; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .page-title { font-family: 'Oswald', sans-serif; font-size: 48px; font-weight: 600; text-transform: uppercase; letter-spacing: 5px; margin-bottom: 50px; text-align: center; }
    .page-title span { color: #de1400; }
    .characters-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
    .character-card { background: #1a1a1a; border: 1px solid rgba(255,255,255,0.05); overflow: hidden; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); position: relative; border-radius: 4px; }
    .character-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(222, 20, 0, 0.3), 0 0 30px rgba(222, 20, 0, 0.1); border-color: rgba(222, 20, 0, 0.5); }
    .character-image-wrapper { height: 300px; background: linear-gradient(135deg, #2a0a0a, #1a0505); overflow: hidden; position: relative; }
    .character-image-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
    .character-card:hover .character-image-wrapper img { transform: scale(1.15); }
    .image-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%); opacity: 0; transition: opacity 0.4s; }
    .character-card:hover .image-overlay { opacity: 1; }
    .image-glow { position: absolute; top: 50%; left: 50%; width: 0; height: 0; background: radial-gradient(circle, rgba(222, 20, 0, 0.4) 0%, transparent 70%); transform: translate(-50%, -50%); transition: all 0.4s; opacity: 0; }
    .character-card:hover .image-glow { width: 200%; height: 200%; opacity: 1; }
    .character-info { padding: 25px; transition: all 0.3s; }
    .character-badge { display: inline-block; padding: 4px 12px; background: #de1400; font-family: 'Oswald', sans-serif; font-size: 10px; letter-spacing: 2px; margin-bottom: 10px; transition: all 0.3s; }
    .character-card:hover .character-badge { background: #fff; color: #de1400; }
    .character-info h3 { font-family: 'Oswald', sans-serif; font-size: 24px; font-weight: 600; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 10px; transition: color 0.3s; }
    .character-card:hover .character-info h3 { color: #de1400; }
    .character-info p { font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.6; margin-bottom: 15px; }
    .character-stats { display: flex; flex-direction: column; gap: 5px; font-size: 12px; color: rgba(255,255,255,0.4); transform: translateY(10px); opacity: 0; transition: all 0.4s; }
    .character-card:hover .character-stats { transform: translateY(0); opacity: 1; }
    .character-stats strong { color: #de1400; }
  `]
})
export class CharactersComponent implements OnInit {
  anim = inject(AnimationService);
  hoveredId: number | null = null;

  characters = [
    { id: 1, name: 'Геральт из Ривии', aka: 'БЕЛОВОЛОСЫЙ', description: 'Беловолосый ведьмак из Школы Волка. Наёмный убийца чудовищ.', weapon: 'Стальной и Серебряный мечи', origin: 'Каэр Морхен', image: 'assets/images/a5fb7a948cb613a6db107e4e998684cc.jpg' },
    { id: 2, name: 'Цири', aka: 'ЛАСТОЧКА', description: 'Принцесса Цинтры, носительница Elder Blood. Дочь Паветты.', weapon: 'Меч из Ласточки', origin: 'Цинтра', image: 'assets/images/i (10).webp' },
    { id: 3, name: 'Йеннифер', aka: 'ЛЬВИЦА', description: 'Чёрная чародейка. Одна из самых могущественных магов Севера.', weapon: 'Магия хаоса', origin: 'Аретуза', image: 'assets/images/i.webp' },
    { id: 4, name: 'Лютик', aka: 'БАРД', description: 'Поэт и друг Геральта. Лучший бард Севера.', weapon: 'Лютня', origin: 'Новиград', image: 'assets/images/S600xU_2x.webp' },
    { id: 5, name: 'Эредін', aka: 'КРАСНЫЙ', description: 'Король Дикой Охоты. Повелитель Мира Эльфов.', weapon: 'Звёздная Пыль', origin: 'Аэртудрассил', image: 'assets/images/w1500_49118093.jpg' },
    { id: 6, name: 'Трисс', aka: 'РЫЖАЯ', description: 'Чародейка из Каэр Морхен. Советница короля Радовида.', weapon: 'Огненная магия', origin: 'Махакам', image: 'assets/images/i (1).webp' }
  ];

  ngOnInit() {}
}
