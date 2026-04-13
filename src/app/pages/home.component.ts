import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-image"></div>
      <div class="hero-overlay"></div>
      <div class="hero-particles">
        @for (i of [1,2,3,4,5,6,7,8]; track i) {
          <div class="particle" [class]="'particle-' + i"></div>
        }
      </div>
      <svg class="hero-emblem" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="95" fill="none" stroke="#de1400" stroke-width="2"/>
        <circle cx="100" cy="100" r="80" fill="none" stroke="#de1400" stroke-width="1"/>
        <path d="M100 20 L110 70 L160 80 L110 90 L100 140 L90 90 L40 80 L90 70 Z" fill="none" stroke="#de1400" stroke-width="2"/>
        <circle cx="100" cy="80" r="15" fill="#de1400"/>
        <circle cx="100" cy="80" r="8" fill="#0a0a0a"/>
      </svg>
      <div class="hero-content">
        <h1 class="hero-title">{{ tr.t('home.title') }}</h1>
        <p class="subtitle">The Witcher</p>
        <p class="tagline">CD PROJEKT RED presents</p>
        <a routerLink="/characters" class="btn-cdpr">{{ tr.t('home.explore') }}</a>
      </div>
      <div class="scroll-indicator">
        <svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="white"/></svg>
      </div>
    </section>

    <section class="quote-section">
      <p class="quote-text">{{ tr.t('home.quote') }}</p>
      <p class="quote-author">— {{ tr.t('home.quoteAuthor') }}</p>
    </section>

    <section class="characters-section">
      <div class="container">
        <h2 class="section-title">Главные <span>Персонажи</span></h2>
        <div class="characters-grid">
          @for (char of characters; track char.id) {
            <div class="character-card">
              <div class="character-image-wrapper">
                <img [src]="char.image" [alt]="char.name">
              </div>
              <div class="character-info">
                <div class="character-badge">{{ char.aka }}</div>
                <h3>{{ char.name }}</h3>
              </div>
            </div>
          }
        </div>
        <a routerLink="/characters" class="btn-cdpr">Все персонажи</a>
      </div>
    </section>

    <section class="quick-nav">
      <div class="container">
        <div class="quick-nav-grid">
          <a routerLink="/schools" class="quick-nav-card">
            <h3>{{ tr.t('nav.schools') }}</h3>
            <p>Школы ведьмаков</p>
          </a>
          <a routerLink="/gallery" class="quick-nav-card">
            <h3>{{ tr.t('nav.gallery') }}</h3>
            <p>Изображения и арты</p>
          </a>
          <a routerLink="/gwent" class="quick-nav-card gwent-card">
            <h3>{{ tr.t('nav.gwent') }}</h3>
            <p>Карточная игра</p>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero { height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
    .hero-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(222, 20, 0, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(222, 20, 0, 0.05) 0%, transparent 70%); }
    .hero-image { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url('/witcher-website/assets/images/a5fb7a948cb613a6db107e4e998684cc.jpg') center/cover no-repeat; filter: grayscale(50%); opacity: 0.3; }
    .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.9) 100%); }
    .hero-particles { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }
    .particle { position: absolute; width: 4px; height: 4px; background: #de1400; border-radius: 50%; opacity: 0.3; animation: particleFloat 8s infinite ease-in-out; }
    .particle-1 { left: 10%; top: 20%; } .particle-2 { left: 20%; top: 60%; animation-delay: 1s; } .particle-3 { left: 35%; top: 30%; animation-delay: 2s; } .particle-4 { left: 50%; top: 70%; animation-delay: 0.5s; } .particle-5 { left: 65%; top: 40%; animation-delay: 1.5s; } .particle-6 { left: 80%; top: 25%; animation-delay: 2.5s; } .particle-7 { left: 90%; top: 55%; animation-delay: 3s; } .particle-8 { left: 45%; top: 85%; animation-delay: 0.8s; }
    @keyframes particleFloat { 0%, 100% { transform: translateY(0); opacity: 0.3; } 50% { transform: translateY(-50px); opacity: 0.6; } }
    .hero-emblem { position: absolute; width: 600px; height: 600px; opacity: 0.1; animation: float 6s ease-in-out infinite; }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-30px); } }
    .hero-content { position: relative; z-index: 10; text-align: center; }
    .hero-title { font-family: 'Oswald', sans-serif; font-size: 120px; font-weight: 700; letter-spacing: 20px; text-transform: uppercase; text-shadow: 0 0 60px rgba(222, 20, 0, 0.5); animation: titleReveal 1s ease-out; }
    @keyframes titleReveal { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
    .subtitle { font-size: 24px; letter-spacing: 15px; text-transform: uppercase; color: #de1400; margin-top: 10px; }
    .tagline { font-size: 18px; margin-top: 30px; opacity: 0.6; }
    .btn-cdpr { display: inline-block; padding: 15px 40px; background: #de1400; color: #fff; font-family: 'Oswald', sans-serif; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 3px; text-decoration: none; margin-top: 50px; transition: all 0.3s; }
    .btn-cdpr:hover { background: #fff; color: #0a0a0a; transform: scale(1.05); }
    .scroll-indicator { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); animation: bounce 2s infinite; }
    .scroll-indicator svg { width: 30px; height: 30px; opacity: 0.5; }
    @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); } 40% { transform: translateX(-50%) translateY(-10px); } }

    .quote-section { background: linear-gradient(135deg, #de1400 0%, #8B0000 100%); padding: 120px 20px; text-align: center; }
    .quote-text { font-family: 'Oswald', sans-serif; font-size: 36px; font-style: italic; max-width: 900px; margin: 0 auto 30px; line-height: 1.4; }
    .quote-author { font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 5px; }

    .characters-section { background: #0a0a0a; padding: 100px 0; }
    .section-title { font-family: 'Oswald', sans-serif; font-size: 48px; font-weight: 600; text-transform: uppercase; letter-spacing: 5px; margin-bottom: 50px; text-align: center; }
    .section-title span { color: #de1400; }
    .characters-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; margin-bottom: 40px; }
    .character-card { background: #1a1a1a; border: 1px solid rgba(255,255,255,0.05); overflow: hidden; transition: all 0.4s; }
    .character-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(222, 20, 0, 0.3); border-color: #de1400; }
    .character-image-wrapper { height: 200px; overflow: hidden; }
    .character-image-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
    .character-card:hover .character-image-wrapper img { transform: scale(1.1); }
    .character-info { padding: 15px; text-align: center; }
    .character-badge { display: inline-block; padding: 3px 8px; background: #de1400; font-family: 'Oswald', sans-serif; font-size: 8px; letter-spacing: 1px; margin-bottom: 5px; }
    .character-info h3 { font-family: 'Oswald', sans-serif; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #fff; }
    .characters-section .btn-cdpr { display: block; width: 200px; margin: 0 auto; text-align: center; }

    .quick-nav { background: #0a0a0a; padding: 100px 0; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .quick-nav-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
    .quick-nav-card { background: rgba(26, 26, 26, 0.8); border: 1px solid rgba(222, 20, 0, 0.3); padding: 40px 30px; text-align: center; text-decoration: none; transition: all 0.4s; }
    .quick-nav-card:hover { background: rgba(222, 20, 0, 0.1); border-color: #de1400; transform: scale(1.02); }
    .quick-nav-card.gwent-card { border-color: rgba(222, 20, 0, 0.5); }
    .quick-nav-card h3 { font-family: 'Oswald', sans-serif; font-size: 24px; font-weight: 600; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 10px; color: #fff; }
    .quick-nav-card p { font-size: 14px; color: rgba(255,255,255,0.6); }

    @media (max-width: 992px) { .hero-title { font-size: 60px; letter-spacing: 10px; } }
  `]
})
export class HomeComponent {
  tr = inject(TranslationService);
  characters = [
    { id: 1, name: 'Геральт из Ривии', aka: 'БЕЛОВОЛОСЫЙ', image: 'assets/images/a5fb7a948cb613a6db1074e998684cc.jpg' },
    { id: 2, name: 'Цири', aka: 'ЛАСТОЧКА', image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=500&fit=crop' },
    { id: 3, name: 'Йеннифер', aka: 'ЛЬВИЦА', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop' },
    { id: 4, name: 'Лютик', aka: 'БАРД', image: 'assets/images/i (8).webp' },
    { id: 5, name: 'Эредін', aka: 'КРАСНЫЙ', image: 'assets/images/w1500_49118093.jpg' },
    { id: 6, name: 'Трисс', aka: 'РЫЖАЯ', image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&h=500&fit=crop' }
  ];
}
