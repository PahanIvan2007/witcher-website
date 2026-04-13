import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="preloader" [class.hidden]="loaded">
      <svg class="preloader-logo" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#de1400" stroke-width="2"/>
        <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="#de1400"/>
      </svg>
    </div>

    <header [class.scrolled]="scrolled">
      <div class="container">
        <div class="header-content">
          <a routerLink="/" class="logo">
            <svg viewBox="0 0 200 50" class="logo-svg">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#ffffff"/>
                  <stop offset="100%" style="stop-color:#de1400"/>
                </linearGradient>
              </defs>
              <text x="0" y="40" fill="url(#logoGrad)" font-family="Oswald, sans-serif" font-size="30" font-weight="700">ВЕДЬМАК</text>
            </svg>
          </a>

          <button class="mobile-menu-btn" (click)="mobileMenuOpen = !mobileMenuOpen">
            <span></span><span></span><span></span>
          </button>
          <nav [class.active]="mobileMenuOpen">
            <ul>
              <li><a routerLink="/characters" (click)="mobileMenuOpen = false">{{ tr.t('nav.characters') }}</a></li>
              <li><a routerLink="/schools" (click)="mobileMenuOpen = false">{{ tr.t('nav.schools') }}</a></li>
              <li><a routerLink="/gallery" (click)="mobileMenuOpen = false">{{ tr.t('nav.gallery') }}</a></li>
              <li><a routerLink="/timeline" (click)="mobileMenuOpen = false">{{ tr.t('nav.timeline') }}</a></li>
              <li><a routerLink="/games" (click)="mobileMenuOpen = false">{{ tr.t('nav.games') }}</a></li>
              <li><a routerLink="/gwent" (click)="mobileMenuOpen = false">{{ tr.t('nav.gwent') }}</a></li>
            </ul>
          </nav>

          <button class="lang-switch" (click)="tr.toggleLang()">
            {{ tr.currentLang() === 'ru' ? 'EN' : 'RU' }}
          </button>
        </div>
      </div>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <svg class="footer-logo" viewBox="0 0 200 50">
              <defs>
                <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#de1400"/>
                  <stop offset="100%" style="stop-color:#ffffff"/>
                </linearGradient>
              </defs>
              <text x="0" y="40" fill="url(#footerLogoGrad)" font-family="Oswald, sans-serif" font-size="30" font-weight="700">ВЕДЬМАК</text>
            </svg>
            <p class="footer-tagline">{{ tr.t('footer.tagline') }}</p>
          </div>
          <div class="footer-copyright">{{ tr.t('footer.copyright') }}</div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host { --cdpr-red: #de1400; --cdpr-dark: #0a0a0a; --cdpr-black: #000; --cdpr-white: #fff; display: block; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Rajdhani', sans-serif; background: var(--cdpr-black); color: var(--cdpr-white); overflow-x: hidden; }

    .preloader { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: var(--cdpr-black); display: flex; align-items: center; justify-content: center; z-index: 3000; transition: opacity 0.5s; }
    .preloader.hidden { opacity: 0; pointer-events: none; }
    .preloader-logo { width: 150px; animation: pulse 1.5s ease-in-out infinite; }
    @keyframes pulse { 0%, 100% { opacity: 0.3; transform: scale(0.98); } 50% { opacity: 1; transform: scale(1); } }

    header { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%); padding: 15px 0; transition: background 0.3s; }
    header.scrolled { background: rgba(10, 10, 10, 0.98); box-shadow: 0 2px 20px rgba(0,0,0,0.5); }
    .header-content { display: flex; justify-content: space-between; align-items: center; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .logo svg { height: 40px; transition: transform 0.3s; }
    .logo:hover svg { transform: scale(1.05); }

    nav ul { display: flex; list-style: none; gap: 30px; }
    nav a { color: var(--cdpr-white); text-decoration: none; font-family: 'Oswald', sans-serif; font-size: 14px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; opacity: 0.7; transition: all 0.3s; }
    nav a:hover { opacity: 1; color: var(--cdpr-red); }

    .lang-switch { background: transparent; border: 1px solid var(--cdpr-red); color: var(--cdpr-red); padding: 5px 12px; font-family: 'Oswald', sans-serif; font-size: 12px; cursor: pointer; transition: all 0.3s; margin-left: 20px; }
    .lang-switch:hover { background: var(--cdpr-red); color: var(--cdpr-black); }

    .mobile-menu-btn { display: none; background: none; border: none; cursor: pointer; padding: 10px; }
    .mobile-menu-btn span { display: block; width: 25px; height: 2px; background: var(--cdpr-white); margin: 5px 0; }

    main { min-height: 100vh; }

    footer { background: var(--cdpr-black); border-top: 1px solid rgba(255,255,255,0.1); padding: 60px 0 30px; }
    .footer-content { display: flex; flex-direction: column; align-items: center; gap: 30px; }
    .footer-logo { height: 50px; }
    .footer-tagline { font-family: 'Oswald', sans-serif; font-size: 12px; letter-spacing: 5px; color: rgba(255,255,255,0.4); margin-top: 10px; }
    .footer-copyright { font-size: 12px; color: rgba(255,255,255,0.4); }

    @media (max-width: 992px) {
      .mobile-menu-btn { display: block; }
      nav { display: none; position: absolute; top: 100%; left: 0; right: 0; background: var(--cdpr-dark); padding: 20px; }
      nav.active { display: block; }
      nav ul { flex-direction: column; gap: 15px; }
    }
  `]
})
export class AppComponent {
  tr = inject(TranslationService);
  loaded = false;
  scrolled = false;
  mobileMenuOpen = false;

  constructor() {
    this.tr.init();
    setTimeout(() => { this.loaded = true; }, 500);
    window.addEventListener('scroll', () => { this.scrolled = window.scrollY > 100; });
  }
}
