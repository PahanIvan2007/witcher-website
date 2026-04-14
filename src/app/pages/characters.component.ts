import { Component, inject, OnInit, HostListener } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  template: `
    <div class="page-wrapper">
      <div class="cinematic-header">
        <div class="header-bg"></div>
        <div class="header-overlay"></div>
        <div class="header-particles">
          @for (i of [1,2,3,4,5,6,7,8]; track i) {
            <div class="particle" [class]="'particle-' + i"></div>
          }
        </div>
        <div class="header-content">
          <div class="title-wrapper">
            <span class="title-subtitle">Мир Ведьмака</span>
            <h1 class="title-main">{{ tr.t('characters.title') }}</h1>
            <div class="title-line"></div>
          </div>
        </div>
        <div class="scroll-hint">
          <span>Листайте вниз</span>
          <div class="scroll-arrow"></div>
        </div>
      </div>

      <div class="characters-section">
        <div class="section-bg">
          <div class="bg-gradient"></div>
          <div class="bg-lines"></div>
        </div>
        <div class="container">
          <div class="characters-grid">
            @for (char of characters; track char.id; let i = $index) {
              <div class="character-card" 
                   [class.hovered]="hoveredId === char.id"
                   (mouseenter)="hoveredId = char.id"
                   (mouseleave)="hoveredId = null"
                   [style.--delay]="i * 0.1 + 's'">
                <div class="card-inner">
                  <div class="card-image-section">
                    <div class="image-frame">
                      <div class="frame-corner tl"></div>
                      <div class="frame-corner tr"></div>
                      <div class="frame-corner bl"></div>
                      <div class="frame-corner br"></div>
                      <img [src]="char.image" [alt]="char.name" loading="lazy">
                      <div class="image-overlay-vignette"></div>
                    </div>
                    <div class="card-glow"></div>
                  </div>
                  <div class="card-content-section">
                    <div class="card-badge">
                      <span class="badge-text">{{ char.aka }}</span>
                    </div>
                    <h2 class="card-title">{{ char.name }}</h2>
                    <p class="card-description">{{ char.description }}</p>
                    <div class="card-divider"></div>
                    <div class="card-meta">
                      <div class="meta-item">
                        <svg viewBox="0 0 24 24"><path d="M14.5 2.5c0 1.5-1.5 3-1.5 3s-1.5-1.5-1.5-3S12.5 1 13 1s1.5.5 1.5 1.5zm-5 4C7 6.5 5 9 5 12c0 4 3 8 8 8s8-4 8-8c0-3-2-5.5-4-5.5S9 9.5 9.5 6.5z" fill="currentColor"/></svg>
                        <span>{{ char.origin }}</span>
                      </div>
                      <div class="meta-item">
                        <svg viewBox="0 0 24 24"><path d="M19.78 2.2l-1.98 1.98 3.54 3.54-8.48 8.48-6.36-6.36 1.42-1.42-1.42-1.42L2.6 12.5l6.36 6.36-1.42 1.42 1.42 1.42 1.42-1.42 1.42 1.42 4.24-4.24-1.42-1.42 1.42-1.42 6.36 6.36 1.42-1.42-1.42-1.42 1.42-1.42-1.42-1.42 1.42-1.42-3.54-3.54 1.98-1.98-3.54-3.54z" fill="currentColor"/></svg>
                        <span>{{ char.weapon }}</span>
                      </div>
                    </div>
                    <div class="card-cta">
                      <span class="cta-text">Подробнее</span>
                      <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .page-wrapper { background: #0a0a0a; }
    
    .cinematic-header { position: relative; height: 60vh; min-height: 400px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .header-bg { position: absolute; inset: 0; background: linear-gradient(135deg, #1a0505 0%, #0a0a0a 50%, #050508 100%); }
    .header-overlay { position: absolute; inset: 0; background: radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.8) 100%); }
    .header-particles { position: absolute; inset: 0; pointer-events: none; }
    .particle { position: absolute; background: #de1400; border-radius: 50%; opacity: 0; animation: headerParticle 8s infinite ease-in-out; }
    .particle-1 { width: 4px; height: 4px; left: 10%; top: 20%; animation-delay: 0s; } .particle-2 { width: 3px; height: 3px; left: 20%; top: 60%; animation-delay: 1s; } .particle-3 { width: 5px; height: 5px; left: 35%; top: 30%; animation-delay: 2s; } .particle-4 { width: 3px; height: 3px; left: 50%; top: 70%; animation-delay: 0.5s; } .particle-5 { width: 4px; height: 4px; left: 65%; top: 40%; animation-delay: 1.5s; } .particle-6 { width: 3px; height: 3px; left: 80%; top: 25%; animation-delay: 2.5s; } .particle-7 { width: 5px; height: 5px; left: 90%; top: 55%; animation-delay: 3s; } .particle-8 { width: 4px; height: 4px; left: 45%; top: 85%; animation-delay: 0.8s; }
    @keyframes headerParticle { 0%, 100% { opacity: 0; transform: scale(0.5); } 50% { opacity: 0.6; transform: scale(1); } }
    
    .header-content { position: relative; z-index: 10; text-align: center; }
    .title-wrapper { position: relative; display: inline-block; }
    .title-subtitle { display: block; font-family: 'Rajdhani', sans-serif; font-size: 14px; font-weight: 300; letter-spacing: 8px; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 20px; animation: fadeInDown 0.8s ease-out; }
    .title-main { font-family: 'Oswald', sans-serif; font-size: clamp(48px, 10vw, 96px); font-weight: 700; text-transform: uppercase; letter-spacing: 10px; background: linear-gradient(135deg, #fff 0%, #de1400 50%, #fff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: fadeInUp 0.8s ease-out 0.2s both; }
    .title-line { width: 100px; height: 3px; background: linear-gradient(90deg, transparent, #de1400, transparent); margin: 30px auto 0; animation: expandLine 1s ease-out 0.5s both; }
    @keyframes fadeInDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes expandLine { from { width: 0; opacity: 0; } to { width: 100px; opacity: 1; } }
    
    .scroll-hint { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 10px; animation: fadeIn 1s ease-out 1s both; }
    .scroll-hint span { font-family: 'Rajdhani', sans-serif; font-size: 12px; letter-spacing: 3px; text-transform: uppercase; color: rgba(255,255,255,0.4); }
    .scroll-arrow { width: 20px; height: 20px; border-right: 2px solid #de1400; border-bottom: 2px solid #de1400; transform: rotate(45deg); animation: scrollBounce 2s infinite; }
    @keyframes scrollBounce { 0%, 100% { transform: rotate(45deg) translate(0, 0); } 50% { transform: rotate(45deg) translate(5px, 5px); } }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    
    .characters-section { position: relative; padding: 100px 0 120px; }
    .section-bg { position: absolute; inset: 0; pointer-events: none; }
    .bg-gradient { position: absolute; top: 0; left: 0; right: 0; height: 300px; background: linear-gradient(180deg, rgba(222,20,0,0.08) 0%, transparent 100%); }
    .bg-lines { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 50px 50px; }
    
    .container { max-width: 1400px; margin: 0 auto; padding: 0 40px; }
    
    .characters-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 40px; }
    
    .character-card { position: relative; animation: cardReveal 0.8s ease-out var(--delay) both; }
    @keyframes cardReveal { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
    
    .card-inner { position: relative; background: linear-gradient(145deg, #151515 0%, #0d0d0d 100%); border: 1px solid rgba(255,255,255,0.05); overflow: hidden; transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
    .card-inner:hover { border-color: rgba(222,20,0,0.4); transform: translateY(-8px); box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(222,20,0,0.15); }
    
    .card-image-section { position: relative; height: 320px; overflow: hidden; }
    .image-frame { position: relative; width: 100%; height: 100%; }
    .image-frame img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1); filter: saturate(0.85) contrast(1.05); }
    .card-inner:hover .image-frame img { transform: scale(1.1); filter: saturate(1.1) contrast(1.1); }
    .image-overlay-vignette { position: absolute; inset: 0; background: linear-gradient(to top, rgba(13,13,13,1) 0%, transparent 50%), radial-gradient(ellipse at center, transparent 50%, rgba(13,13,13,0.5) 100%); }
    
    .frame-corner { position: absolute; width: 20px; height: 20px; border-color: #de1400; border-style: solid; opacity: 0.5; transition: all 0.4s; }
    .frame-corner.tl { top: 10px; left: 10px; border-width: 2px 0 0 2px; } .frame-corner.tr { top: 10px; right: 10px; border-width: 2px 2px 0 0; } .frame-corner.bl { bottom: 10px; left: 10px; border-width: 0 0 2px 2px; } .frame-corner.br { bottom: 10px; right: 10px; border-width: 0 2px 2px 0; }
    .card-inner:hover .frame-corner { opacity: 1; width: 30px; height: 30px; }
    
    .card-glow { position: absolute; bottom: -50%; left: 50%; transform: translateX(-50%); width: 200%; height: 100%; background: radial-gradient(ellipse at center bottom, rgba(222,20,0,0.3) 0%, transparent 70%); opacity: 0; transition: all 0.5s; }
    .card-inner:hover .card-glow { opacity: 1; bottom: -30%; }
    
    .card-content-section { padding: 30px 35px 35px; }
    .card-badge { display: inline-flex; align-items: center; padding: 6px 16px; background: rgba(222,20,0,0.15); border: 1px solid rgba(222,20,0,0.3); margin-bottom: 15px; transition: all 0.4s; }
    .card-inner:hover .card-badge { background: #de1400; border-color: #de1400; }
    .badge-text { font-family: 'Oswald', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 3px; color: #de1400; transition: color 0.4s; }
    .card-inner:hover .badge-text { color: #fff; }
    
    .card-title { font-family: 'Oswald', sans-serif; font-size: 28px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px; transition: color 0.4s; }
    .card-inner:hover .card-title { color: #de1400; }
    
    .card-description { font-size: 14px; line-height: 1.7; color: rgba(255,255,255,0.6); margin-bottom: 20px; }
    
    .card-divider { width: 40px; height: 2px; background: linear-gradient(90deg, #de1400, transparent); margin-bottom: 20px; transition: width 0.4s; }
    .card-inner:hover .card-divider { width: 80px; }
    
    .card-meta { display: flex; flex-direction: column; gap: 12px; margin-bottom: 25px; }
    .meta-item { display: flex; align-items: center; gap: 12px; font-size: 13px; color: rgba(255,255,255,0.5); }
    .meta-item svg { width: 18px; height: 18px; color: #de1400; flex-shrink: 0; }
    .meta-item span { transition: color 0.3s; }
    .card-inner:hover .meta-item span { color: rgba(255,255,255,0.8); }
    
    .card-cta { display: flex; align-items: center; gap: 8px; font-family: 'Oswald', sans-serif; font-size: 13px; font-weight: 500; letter-spacing: 2px; color: rgba(255,255,255,0.4); text-transform: uppercase; cursor: pointer; transition: all 0.3s; }
    .card-cta svg { width: 18px; height: 18px; transition: transform 0.3s; }
    .card-inner:hover .card-cta { color: #de1400; }
    .card-inner:hover .card-cta svg { transform: translateX(5px); }
    
    @media (max-width: 768px) {
      .container { padding: 0 20px; }
      .characters-grid { grid-template-columns: 1fr; gap: 30px; }
      .card-image-section { height: 280px; }
      .card-content-section { padding: 25px; }
      .title-main { letter-spacing: 5px; }
    }
  `]
})
export class CharactersComponent {
  tr = inject(TranslationService);
  hoveredId: number | null = null;

  characters = [
    { id: 1, name: 'Геральт из Ривии', aka: 'БЕЛОВОЛОСЫЙ', description: 'Ведьмак из Школы Волка. Охотник на чудовищ, путешествующий по землям Севера. Несёт на себе бремя мутаций и судьбы.', weapon: 'Стальной и Серебряный мечи', origin: 'Каэр Морхен', image: 'assets/images/SUx182_2x.webp?v=2' },
    { id: 2, name: 'Цири', aka: 'ЛАСТОЧКА', description: 'Носительница Elder Blood, принцесса Цинтры. Избранная, способная путешествовать между мирами.', weapon: 'Меч из Ласточки', origin: 'Цинтра', image: 'assets/images/i (10).webp?v=2' },
    { id: 3, name: 'Йеннифер', aka: 'ЛЬВИЦА', description: 'Могущественная чёрная чародейка. Хранительница тайн и мастер огненной магии.', weapon: 'Магия хаоса', origin: 'Аретуза', image: 'assets/images/i.webp?v=2' },
    { id: 4, name: 'Лютик', aka: 'БАРД', description: 'Поэт, музыкант и лучший друг Геральта. Его песни воспевают легенды Севера.', weapon: 'Лютня', origin: 'Новиград', image: 'assets/images/S600xU_2x.webp?v=2' },
    { id: 5, name: 'Эредін', aka: 'КРАСНЫЙ', description: 'Король Дикой Охоты. Повелитель Мира Эльфов, жаждущий власти над мирами.', weapon: 'Звёздная Пыль', origin: 'Аэртудрассил', image: 'assets/images/a652dcfff029f1f9f5e5e9bf06ee1622.jpg?v=2' },
    { id: 6, name: 'Трисс', aka: 'РЫЖАЯ', description: 'Чародейка из Каэр Морхен. Советница королей и мастер огненных заклинаний.', weapon: 'Огненная магия', origin: 'Махакам', image: 'assets/images/i (1).webp?v=2' }
  ];
}
