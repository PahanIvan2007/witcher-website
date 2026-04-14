import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="page-wrapper">
      <section class="hero-section">
        <div class="hero-bg">
          <div class="bg-layer layer-1"></div>
          <div class="bg-layer layer-2"></div>
          <div class="bg-particles">
            @for (i of [1,2,3,4,5,6,7,8,9,10]; track i) {
              <div class="particle" [class]="'p-' + i"></div>
            }
          </div>
        </div>
        
        <div class="hero-emblem-container">
          <svg class="hero-emblem" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="emblemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#de1400;stop-opacity:0.3"/>
                <stop offset="100%" style="stop-color:#de1400;stop-opacity:0"/>
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="95" fill="url(#emblemGrad)" stroke="#de1400" stroke-width="0.5"/>
            <circle cx="100" cy="100" r="80" fill="none" stroke="#de1400" stroke-width="0.3" opacity="0.5"/>
            <circle cx="100" cy="100" r="60" fill="none" stroke="#de1400" stroke-width="0.2" opacity="0.3"/>
            <path d="M100 20 L110 70 L160 80 L110 90 L100 140 L90 90 L40 80 L90 70 Z" fill="none" stroke="#de1400" stroke-width="1.5" opacity="0.6"/>
            <circle cx="100" cy="80" r="12" fill="#de1400" opacity="0.8"/>
            <circle cx="100" cy="80" r="6" fill="#0a0a0a"/>
          </svg>
        </div>
        
        <div class="hero-content">
          <div class="content-inner">
            <span class="hero-subtitle">CD PROJEKT RED представляет</span>
            <h1 class="hero-title">
              <span class="title-line">ВЕДЬМАК</span>
            </h1>
            <div class="hero-tagline">Легенда о Геральте из Ривии</div>
            <div class="hero-actions">
              <a routerLink="/characters" class="btn-primary">
                <span>Исследовать</span>
                <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/></svg>
              </a>
              <a routerLink="/gallery" class="btn-secondary">Галерея</a>
            </div>
          </div>
        </div>
        
        <div class="scroll-indicator">
          <div class="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      <section class="quote-section">
        <div class="quote-bg"></div>
        <div class="quote-container">
          <div class="quote-icon">"</div>
          <blockquote class="quote-text">{{ tr.t('home.quote') }}</blockquote>
          <cite class="quote-author">{{ tr.t('home.quoteAuthor') }}</cite>
        </div>
      </section>

      <section class="characters-section">
        <div class="section-header">
          <span class="section-label">Главные герои</span>
          <h2 class="section-title">Персонажи <span>саги</span></h2>
        </div>
        <div class="container">
          <div class="characters-carousel">
            @for (char of characters; track char.id; let i = $index) {
              <div class="character-card" [style.--delay]="i * 0.1 + 's'">
                <div class="card-image">
                  <img [src]="char.image" [alt]="char.name">
                  <div class="image-mask"></div>
                </div>
                <div class="card-body">
                  <div class="card-badge">{{ char.aka }}</div>
                  <h3>{{ char.name }}</h3>
                </div>
                <div class="card-glow"></div>
              </div>
            }
          </div>
          <a routerLink="/characters" class="section-cta">
            <span>Все персонажи</span>
            <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/></svg>
          </a>
        </div>
      </section>

      <section class="quick-nav-section">
        <div class="container">
          <div class="quick-nav-grid">
            <a routerLink="/schools" class="nav-card">
              <div class="nav-card-bg"></div>
              <div class="nav-card-content">
                <div class="nav-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="currentColor"/></svg>
                </div>
                <h3>{{ tr.t('nav.schools') }}</h3>
                <p>Традиции ведьмаков</p>
                <div class="nav-arrow">
                  <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/></svg>
                </div>
              </div>
            </a>
            <a routerLink="/gallery" class="nav-card">
              <div class="nav-card-bg"></div>
              <div class="nav-card-content">
                <div class="nav-icon">
                  <svg viewBox="0 0 24 24"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" fill="currentColor"/></svg>
                </div>
                <h3>{{ tr.t('nav.gallery') }}</h3>
                <p>Мир Ведьмака</p>
                <div class="nav-arrow">
                  <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/></svg>
                </div>
              </div>
            </a>
            <a routerLink="/gwent" class="nav-card nav-card-featured">
              <div class="nav-card-bg"></div>
              <div class="nav-card-content">
                <div class="nav-icon">
                  <svg viewBox="0 0 24 24"><path d="M21.47 4.35l-1.34-.56v9.03l2.43-5.86c.41-.99-.15-2.09-1.09-2.61zm-19.5 3.7L6.93 20a2.01 2.01 0 0 0 1.81 1.26c.26 0 .53-.05.79-.16l7.37-3.05c.75-.31 1.21-1.05 1.23-1.79.01-.53-.26-1.03-.7-1.29L12.1 13c-.34-.21-.78-.12-1 .21-.13.19-.26.38-.38.57l-.1.15c-.16.25-.45.35-.71.24l-.15-.06-6.15-2.76c-.49-.22-1.09-.02-1.35.53z" fill="currentColor"/></svg>
                </div>
                <h3>{{ tr.t('nav.gwent') }}</h3>
                <p>Карточная игра</p>
                <div class="nav-arrow">
                  <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/></svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .page-wrapper { background: #0a0a0a; }
    
    .hero-section { position: relative; height: 100vh; min-height: 700px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .hero-bg { position: absolute; inset: 0; }
    .bg-layer { position: absolute; inset: 0; }
    .layer-1 { background: radial-gradient(ellipse at 30% 20%, rgba(222,20,0,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(222,20,0,0.08) 0%, transparent 50%); }
    .layer-2 { background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 70%, #0a0a0a 100%); }
    .bg-particles { position: absolute; inset: 0; pointer-events: none; }
    .particle { position: absolute; background: #de1400; border-radius: 50%; }
    .p-1 { width: 3px; height: 3px; left: 8%; top: 15%; animation: float1 12s infinite; } .p-2 { width: 2px; height: 2px; left: 15%; top: 45%; animation: float2 10s infinite 1s; } .p-3 { width: 4px; height: 4px; left: 25%; top: 25%; animation: float1 14s infinite 2s; } .p-4 { width: 2px; height: 2px; left: 40%; top: 60%; animation: float2 11s infinite 0.5s; } .p-5 { width: 3px; height: 3px; left: 55%; top: 30%; animation: float1 13s infinite 1.5s; } .p-6 { width: 2px; height: 2px; left: 70%; top: 50%; animation: float2 9s infinite 2s; } .p-7 { width: 4px; height: 4px; left: 80%; top: 20%; animation: float1 15s infinite 0.8s; } .p-8 { width: 3px; height: 3px; left: 90%; top: 70%; animation: float2 12s infinite 1.2s; } .p-9 { width: 2px; height: 2px; left: 35%; top: 80%; animation: float1 10s infinite 2.5s; } .p-10 { width: 3px; height: 3px; left: 65%; top: 85%; animation: float2 14s infinite 0.3s; }
    @keyframes float1 { 0%, 100% { opacity: 0.2; transform: translateY(0) scale(1); } 50% { opacity: 0.6; transform: translateY(-80px) scale(1.5); } }
    @keyframes float2 { 0%, 100% { opacity: 0.3; transform: translateY(0) scale(1); } 50% { opacity: 0.1; transform: translateY(-60px) scale(0.8); } }
    
    .hero-emblem-container { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none; }
    .hero-emblem { width: min(600px, 80vw); height: min(600px, 80vw); opacity: 0.08; animation: emblemRotate 60s linear infinite, emblemPulse 4s ease-in-out infinite; }
    @keyframes emblemRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @keyframes emblemPulse { 0%, 100% { opacity: 0.08; } 50% { opacity: 0.12; } }
    
    .hero-content { position: relative; z-index: 10; text-align: center; }
    .content-inner { max-width: 800px; padding: 0 20px; }
    .hero-subtitle { display: block; font-family: 'Rajdhani', sans-serif; font-size: 14px; font-weight: 400; letter-spacing: 6px; text-transform: uppercase; color: rgba(222,20,0,0.7); margin-bottom: 25px; animation: fadeInDown 0.8s ease-out; }
    .hero-title { font-family: 'Oswald', sans-serif; font-size: clamp(64px, 15vw, 140px); font-weight: 700; text-transform: uppercase; letter-spacing: 15px; line-height: 0.9; margin-bottom: 25px; animation: fadeInUp 0.8s ease-out 0.1s both; }
    .title-line { display: block; background: linear-gradient(180deg, #fff 0%, #ccc 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .hero-tagline { font-family: 'Rajdhani', sans-serif; font-size: 18px; font-weight: 300; letter-spacing: 4px; color: rgba(255,255,255,0.5); margin-bottom: 50px; animation: fadeIn 0.8s ease-out 0.3s both; }
    .hero-actions { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; animation: fadeInUp 0.8s ease-out 0.4s both; }
    .btn-primary { display: inline-flex; align-items: center; gap: 10px; padding: 18px 40px; background: linear-gradient(135deg, #de1400 0%, #b01000 100%); color: #fff; font-family: 'Oswald', sans-serif; font-size: 14px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; text-decoration: none; transition: all 0.4s; position: relative; overflow: hidden; }
    .btn-primary::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transition: left 0.5s; }
    .btn-primary:hover::before { left: 100%; }
    .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 15px 40px rgba(222,20,0,0.4); }
    .btn-primary svg { width: 20px; height: 20px; transition: transform 0.3s; }
    .btn-primary:hover svg { transform: translateX(5px); }
    .btn-secondary { display: inline-flex; align-items: center; padding: 18px 40px; background: transparent; color: #fff; font-family: 'Oswald', sans-serif; font-size: 14px; font-weight: 500; letter-spacing: 3px; text-transform: uppercase; text-decoration: none; border: 1px solid rgba(255,255,255,0.3); transition: all 0.4s; }
    .btn-secondary:hover { border-color: #de1400; color: #de1400; transform: translateY(-3px); }
    @keyframes fadeInDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    
    .scroll-indicator { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 10px; animation: fadeIn 1s ease-out 1s both; }
    .scroll-line { width: 1px; height: 50px; background: linear-gradient(180deg, #de1400, transparent); animation: scrollPulse 2s infinite; }
    @keyframes scrollPulse { 0%, 100% { opacity: 0.5; height: 50px; } 50% { opacity: 1; height: 70px; } }
    .scroll-indicator span { font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: rgba(255,255,255,0.4); }
    
    .quote-section { position: relative; padding: 120px 20px; overflow: hidden; }
    .quote-bg { position: absolute; inset: 0; background: linear-gradient(135deg, #de1400 0%, #8B0000 100%); }
    .quote-bg::before { content: ''; position: absolute; inset: 0; background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='rgba(0,0,0,0.1)' fill-rule='evenodd'/%3E%3C/svg%3E"); }
    .quote-container { position: relative; z-index: 1; max-width: 900px; margin: 0 auto; text-align: center; }
    .quote-icon { font-family: 'Georgia', serif; font-size: 120px; line-height: 1; color: rgba(0,0,0,0.2); margin-bottom: -40px; }
    .quote-text { font-family: 'Oswald', sans-serif; font-size: clamp(24px, 4vw, 36px); font-weight: 400; font-style: italic; line-height: 1.5; color: #fff; margin-bottom: 30px; }
    .quote-author { font-family: 'Rajdhani', sans-serif; font-size: 16px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase; color: rgba(0,0,0,0.6); }
    
    .characters-section { padding: 120px 0; background: #0a0a0a; position: relative; }
    .section-header { text-align: center; margin-bottom: 60px; }
    .section-label { display: block; font-family: 'Rajdhani', sans-serif; font-size: 12px; letter-spacing: 5px; text-transform: uppercase; color: rgba(222,20,0,0.7); margin-bottom: 15px; }
    .section-title { font-family: 'Oswald', sans-serif; font-size: clamp(36px, 6vw, 56px); font-weight: 600; text-transform: uppercase; letter-spacing: 5px; }
    .section-title span { color: #de1400; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .characters-carousel { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 20px; margin-bottom: 50px; }
    .character-card { position: relative; overflow: hidden; cursor: pointer; animation: cardReveal 0.6s ease-out var(--delay) both; }
    @keyframes cardReveal { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    .card-image { position: relative; aspect-ratio: 3/4; overflow: hidden; }
    .card-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s, filter 0.5s; filter: saturate(0.7); }
    .character-card:hover .card-image img { transform: scale(1.1); filter: saturate(1); }
    .image-mask { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,10,10,1) 0%, transparent 60%); }
    .card-body { position: absolute; bottom: 0; left: 0; right: 0; padding: 20px 15px; }
    .card-badge { display: inline-block; padding: 4px 10px; background: rgba(222,20,0,0.8); font-family: 'Oswald', sans-serif; font-size: 9px; letter-spacing: 2px; margin-bottom: 8px; }
    .card-body h3 { font-family: 'Oswald', sans-serif; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
    .card-glow { position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(222,20,0,0.3) 0%, transparent 70%); opacity: 0; transition: opacity 0.4s; pointer-events: none; }
    .character-card:hover .card-glow { opacity: 1; }
    .section-cta { display: inline-flex; align-items: center; gap: 10px; color: #de1400; font-family: 'Oswald', sans-serif; font-size: 14px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; transition: all 0.3s; }
    .section-cta:hover { gap: 15px; }
    .section-cta svg { width: 20px; height: 20px; }
    
    .quick-nav-section { padding: 100px 0 120px; background: linear-gradient(180deg, #0a0a0a 0%, #080808 100%); }
    .quick-nav-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; }
    .nav-card { position: relative; height: 280px; overflow: hidden; text-decoration: none; display: block; }
    .nav-card-bg { position: absolute; inset: 0; background: linear-gradient(135deg, #151515 0%, #0d0d0d 100%); border: 1px solid rgba(255,255,255,0.05); transition: all 0.4s; }
    .nav-card:hover .nav-card-bg { border-color: rgba(222,20,0,0.4); background: linear-gradient(135deg, #1a1010 0%, #0f0808 100%); }
    .nav-card.nav-card-featured .nav-card-bg { border-color: rgba(222,20,0,0.3); }
    .nav-card-content { position: relative; z-index: 1; height: 100%; padding: 30px; display: flex; flex-direction: column; justify-content: flex-end; }
    .nav-icon { width: 50px; height: 50px; margin-bottom: 20px; color: #de1400; opacity: 0.7; transition: all 0.4s; }
    .nav-card:hover .nav-icon { opacity: 1; transform: scale(1.1); }
    .nav-icon svg { width: 100%; height: 100%; }
    .nav-card-content h3 { font-family: 'Oswald', sans-serif; font-size: 24px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px; transition: color 0.3s; }
    .nav-card:hover .nav-card-content h3 { color: #de1400; }
    .nav-card-content p { font-size: 14px; color: rgba(255,255,255,0.5); margin-bottom: 20px; }
    .nav-arrow { color: #de1400; transition: transform 0.3s; }
    .nav-arrow svg { width: 24px; height: 24px; }
    .nav-card:hover .nav-arrow { transform: translateX(10px); }
    
    @media (max-width: 768px) {
      .hero-title { letter-spacing: 8px; }
      .hero-actions { flex-direction: column; align-items: center; }
      .characters-carousel { grid-template-columns: repeat(2, 1fr); gap: 15px; }
    }
  `]
})
export class HomeComponent {
  tr = inject(TranslationService);
  characters = [
    { id: 1, name: 'Геральт из Ривии', aka: 'БЕЛОВОЛОСЫЙ', image: 'assets/images/SUx182_2x.webp?v=2' },
    { id: 2, name: 'Цири', aka: 'ЛАСТОЧКА', image: 'assets/images/i (10).webp?v=2' },
    { id: 3, name: 'Йеннифер', aka: 'ЛЬВИЦА', image: 'assets/images/i.webp?v=2' },
    { id: 4, name: 'Лютик', aka: 'БАРД', image: 'assets/images/S600xU_2x.webp?v=2' },
    { id: 5, name: 'Эредін', aka: 'КРАСНЫЙ', image: 'assets/images/a652dcfff029f1f9f5e5e9bf06ee1622.jpg?v=2' },
    { id: 6, name: 'Трисс', aka: 'РЫЖАЯ', image: 'assets/images/i (1).webp.webp?v=2' }
  ];
}
