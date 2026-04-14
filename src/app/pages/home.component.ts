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
      <div class="quote-container">
        <p class="quote-text">{{ tr.t('home.quote') }}</p>
        <p class="quote-author">— {{ tr.t('home.quoteAuthor') }}</p>
      </div>
    </section>

    <section class="characters-section">
      <div class="container">
        <h2 class="section-title">Главные <span>Персонажи</span></h2>
        <div class="characters-grid">
          @for (char of characters; track char.id; let i = $index) {
            <div class="character-card" [style.animation-delay]="i * 150 + 'ms'">
              <div class="character-image-wrapper">
                <img [src]="char.image" [alt]="char.name">
                <div class="image-overlay"></div>
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
            <div class="card-image">
              <img src="assets/images/w1500_49118093.jpg" alt="Schools">
              <div class="card-overlay"></div>
            </div>
            <div class="card-content">
              <h3>{{ tr.t('nav.schools') }}</h3>
              <p>Школы ведьмаков</p>
            </div>
          </a>
          <a routerLink="/gallery" class="quick-nav-card">
            <div class="card-image">
              <img src="assets/images/h280_39780019.jpg" alt="Gallery">
              <div class="card-overlay"></div>
            </div>
            <div class="card-content">
              <h3>{{ tr.t('nav.gallery') }}</h3>
              <p>Изображения и арты</p>
            </div>
          </a>
          <a routerLink="/gwent" class="quick-nav-card gwent-card">
            <div class="card-image">
              <img src="assets/images/a5fb7a948cb613a6db107e4e998684cc.jpg" alt="Gwent">
              <div class="card-overlay"></div>
            </div>
            <div class="card-content">
              <h3>{{ tr.t('nav.gwent') }}</h3>
              <p>Карточная игра</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero { height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
    .hero-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(222, 20, 0, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(222, 20, 0, 0.05) 0%, transparent 70%); }
    .hero-image { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url('/witcher-website/assets/images/a5fb7a948cb613a6db107e4e998684cc.jpg') center/cover no-repeat; filter: grayscale(50%); opacity: 0.3; transition: opacity 1s; }
    .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.9) 100%); }
    .hero-particles { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }
    .particle { position: absolute; width: 4px; height: 4px; background: #de1400; border-radius: 50%; opacity: 0.3; animation: particleFloat 8s infinite ease-in-out; }
    .particle-1 { left: 10%; top: 20%; } .particle-2 { left: 20%; top: 60%; animation-delay: 1s; } .particle-3 { left: 35%; top: 30%; animation-delay: 2s; } .particle-4 { left: 50%; top: 70%; animation-delay: 0.5s; } .particle-5 { left: 65%; top: 40%; animation-delay: 1.5s; } .particle-6 { left: 80%; top: 25%; animation-delay: 2.5s; } .particle-7 { left: 90%; top: 55%; animation-delay: 3s; } .particle-8 { left: 45%; top: 85%; animation-delay: 0.8s; }
    @keyframes particleFloat { 0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; } 50% { transform: translateY(-50px) rotate(180deg); opacity: 0.6; } }
    .hero-emblem { position: absolute; width: 600px; height: 600px; opacity: 0.1; animation: float 6s ease-in-out infinite, rotate 20s linear infinite; }
    @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-30px) rotate(5deg); } }
    @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    .hero-content { position: relative; z-index: 10; text-align: center; }
    .hero-title { font-family: 'Oswald', sans-serif; font-size: 120px; font-weight: 700; letter-spacing: 20px; text-transform: uppercase; text-shadow: 0 0 60px rgba(222, 20, 0, 0.5); animation: titleReveal 1s ease-out, glow 2s ease-in-out infinite; }
    @keyframes titleReveal { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes glow { 0%, 100% { text-shadow: 0 0 60px rgba(222, 20, 0, 0.5); } 50% { text-shadow: 0 0 80px rgba(222, 20, 0, 0.8), 0 0 100px rgba(222, 20, 0, 0.4); } }
    .subtitle { font-size: 24px; letter-spacing: 15px; text-transform: uppercase; color: #de1400; margin-top: 10px; animation: fadeIn 1s ease-out 0.5s both; }
    .tagline { font-size: 18px; margin-top: 30px; opacity: 0.6; animation: fadeIn 1s ease-out 0.7s both; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 0.6; transform: translateY(0); } }
    .btn-cdpr { display: inline-block; padding: 15px 40px; background: #de1400; color: #fff; font-family: 'Oswald', sans-serif; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 3px; text-decoration: none; margin-top: 50px; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeIn 1s ease-out 0.9s both; position: relative; overflow: hidden; }
    .btn-cdpr::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); transition: left 0.5s; }
    .btn-cdpr:hover::before { left: 100%; }
    .btn-cdpr:hover { background: #fff; color: #0a0a0a; transform: scale(1.05); box-shadow: 0 0 30px rgba(222, 20, 0, 0.5); }
    .scroll-indicator { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); animation: bounce 2s infinite; }
    .scroll-indicator svg { width: 30px; height: 30px; opacity: 0.5; }
    @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); } 40% { transform: translateX(-50%) translateY(-10px); } }

    .quote-section { background: linear-gradient(135deg, #de1400 0%, #8B0000 100%); padding: 120px 20px; position: relative; overflow: hidden; }
    .quote-section::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90" opacity="0.1">❝</text></svg>') center/200px repeat; animation: quoteFloat 20s linear infinite; }
    @keyframes quoteFloat { from { transform: translateX(0); } to { transform: translateX(-200px); } }
    .quote-container { position: relative; z-index: 1; }
    .quote-text { font-family: 'Oswald', sans-serif; font-size: 36px; font-style: italic; max-width: 900px; margin: 0 auto 30px; line-height: 1.4; animation: fadeInUp 0.8s ease-out; }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    .quote-author { font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 5px; animation: fadeInUp 0.8s ease-out 0.3s both; }

    .characters-section { background: #0a0a0a; padding: 100px 0; position: relative; }
    .characters-section::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, #de1400, transparent); }
    .section-title { font-family: 'Oswald', sans-serif; font-size: 48px; font-weight: 600; text-transform: uppercase; letter-spacing: 5px; margin-bottom: 50px; text-align: center; }
    .section-title span { color: #de1400; }
    .characters-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; margin-bottom: 40px; }
    .character-card { background: #1a1a1a; border: 1px solid rgba(255,255,255,0.05); overflow: hidden; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeInUp 0.6s ease-out both; border-radius: 4px; position: relative; }
    .character-card:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 20px 40px rgba(222, 20, 0, 0.4); border-color: rgba(222, 20, 0, 0.5); z-index: 10; }
    .character-image-wrapper { height: 200px; overflow: hidden; position: relative; }
    .character-image-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
    .character-card:hover .character-image-wrapper img { transform: scale(1.2); }
    .image-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%); opacity: 0; transition: opacity 0.3s; }
    .character-card:hover .image-overlay { opacity: 1; }
    .character-info { padding: 15px; text-align: center; transition: all 0.3s; }
    .character-badge { display: inline-block; padding: 3px 8px; background: #de1400; font-family: 'Oswald', sans-serif; font-size: 8px; letter-spacing: 1px; margin-bottom: 5px; transition: all 0.3s; }
    .character-card:hover .character-badge { background: #fff; color: #de1400; }
    .character-info h3 { font-family: 'Oswald', sans-serif; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #fff; transition: color 0.3s; }
    .character-card:hover .character-info h3 { color: #de1400; }
    .characters-section .btn-cdpr { display: block; width: 200px; margin: 0 auto; text-align: center; }

    .quick-nav { background: linear-gradient(180deg, #0a0a0a 0%, #050505 100%); padding: 100px 0; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .quick-nav-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
    .quick-nav-card { background: #1a1a1a; border: 1px solid rgba(222, 20, 0, 0.3); text-decoration: none; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden; border-radius: 8px; height: 250px; display: flex; flex-direction: column; }
    .quick-nav-card::before { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #de1400, #ff4444); transform: scaleX(0); transition: transform 0.4s; z-index: 2; }
    .quick-nav-card:hover::before { transform: scaleX(1); }
    .quick-nav-card:hover { border-color: #de1400; transform: translateY(-8px) scale(1.02); box-shadow: 0 20px 40px rgba(222, 20, 0, 0.3); }
    .quick-nav-card.gwent-card { border-color: rgba(222, 20, 0, 0.5); }
    .card-image { position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden; }
    .card-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); filter: grayscale(40%) brightness(0.6); }
    .quick-nav-card:hover .card-image img { transform: scale(1.15); filter: grayscale(0%) brightness(0.8); }
    .card-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 50%, transparent 100%); }
    .card-content { position: relative; z-index: 1; padding: 20px; margin-top: auto; text-align: center; }
    .card-content h3 { font-family: 'Oswald', sans-serif; font-size: 20px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 5px; color: #fff; transition: color 0.3s; }
    .quick-nav-card:hover .card-content h3 { color: #de1400; }
    .card-content p { font-size: 12px; color: rgba(255,255,255,0.6); transition: color 0.3s; }
    .quick-nav-card:hover .card-content p { color: rgba(255,255,255,0.9); }

    @media (max-width: 992px) { .hero-title { font-size: 60px; letter-spacing: 10px; } }
  `]
})
export class HomeComponent {
  tr = inject(TranslationService);
  characters = [
    { id: 1, name: 'Геральт из Ривии', aka: 'БЕЛОВОЛОСЫЙ', image: 'assets/images/a5fb7a948cb613a6db107e4e998684cc.jpg' },
    { id: 2, name: 'Цири', aka: 'ЛАСТОЧКА', image: 'assets/images/h280_39780019.jpg' },
    { id: 3, name: 'Йеннифер', aka: 'ЛЬВИЦА', image: 'assets/images/a652dcfff029f1f9f5e5e9bf06ee1622.jpg' },
    { id: 4, name: 'Лютик', aka: 'БАРД', image: 'assets/images/i (8).webp' },
    { id: 5, name: 'Эредін', aka: 'КРАСНЫЙ', image: 'assets/images/w1500_49118093.jpg' },
    { id: 6, name: 'Трисс', aka: 'РЫЖАЯ', image: 'assets/images/i (9).webp' }
  ];
}
