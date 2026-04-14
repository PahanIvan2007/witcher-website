import { Component, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="bg-effects">
        <div class="bg-gradient"></div>
        <div class="bg-particles">
          @for (i of [1,2,3,4,5,6]; track i) {
            <div class="bg-particle" [class]="'particle-' + i"></div>
          }
        </div>
      </div>
      <div class="container">
        <h1 class="page-title">{{ tr.t('gallery.title') }}
          <span class="title-accent"></span>
        </h1>
        <div class="gallery-grid">
          @for (img of getImages(); track img.id; let i = $index) {
            <div class="gallery-item" (click)="openLightbox(img)" [style.animation-delay]="i * 100 + 'ms'">
              <div class="item-wrapper">
                <img [src]="img.url" [alt]="img.name" loading="lazy">
                <div class="item-overlay">
                  <div class="overlay-content">
                    <svg class="zoom-icon" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/></svg>
                    <span>Увеличить</span>
                  </div>
                </div>
              </div>
              <div class="gallery-caption">
                <div class="caption-line"></div>
                <span>{{ img.name }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </div>

    @if (lightboxOpen) {
      <div class="lightbox" (click)="closeLightbox()" [@fadeIn]>
        <button class="lightbox-close" (click)="closeLightbox()">
          <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/></svg>
        </button>
        <div class="lightbox-nav lightbox-prev" (click)="prevImage(); $event.stopPropagation()">
          <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/></svg>
        </div>
        <div class="lightbox-content" (click)="$event.stopPropagation()" [@slideIn]>
          <div class="lightbox-image-wrapper">
            <img [src]="selectedImage?.url" [alt]="selectedImage?.name">
            <div class="image-glow"></div>
          </div>
          <div class="lightbox-info">
            <h2>{{ selectedImage?.name }}</h2>
            <div class="info-line"></div>
            <p>{{ selectedImage?.desc }}</p>
          </div>
        </div>
        <div class="lightbox-nav lightbox-next" (click)="nextImage(); $event.stopPropagation()">
          <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/></svg>
        </div>
        <div class="lightbox-counter">{{ currentIndex + 1 }} / {{ getImages().length }}</div>
      </div>
    }
  `,
  styles: [`
    .page-container { min-height: 100vh; background: #0a0a0a; padding: 120px 0 80px; position: relative; overflow: hidden; }
    .bg-effects { position: absolute; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; }
    .bg-gradient { position: absolute; top: 0; left: 0; right: 0; height: 400px; background: linear-gradient(180deg, rgba(222,20,0,0.1) 0%, transparent 100%); }
    .bg-particles { position: absolute; top: 0; left: 0; right: 0; bottom: 0; }
    .bg-particle { position: absolute; width: 3px; height: 3px; background: #de1400; border-radius: 50%; opacity: 0.4; animation: bgFloat 15s infinite ease-in-out; }
    .bg-particle.particle-1 { left: 10%; top: 20%; animation-delay: 0s; } .bg-particle.particle-2 { left: 25%; top: 60%; animation-delay: 2s; } .bg-particle.particle-3 { left: 45%; top: 30%; animation-delay: 4s; } .bg-particle.particle-4 { left: 65%; top: 70%; animation-delay: 1s; } .bg-particle.particle-5 { left: 80%; top: 40%; animation-delay: 3s; } .bg-particle.particle-6 { left: 90%; top: 80%; animation-delay: 5s; }
    @keyframes bgFloat { 0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; } 50% { transform: translateY(-100px) scale(1.5); opacity: 0.1; } }
    .container { max-width: 1400px; margin: 0 auto; padding: 0 30px; position: relative; z-index: 1; }
    .page-title { font-family: 'Oswald', sans-serif; font-size: 56px; font-weight: 700; text-transform: uppercase; letter-spacing: 8px; margin-bottom: 60px; text-align: center; position: relative; display: inline-block; left: 50%; transform: translateX(-50%); }
    .title-accent { position: absolute; bottom: -10px; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, transparent, #de1400, transparent); }
    .gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 25px; }
    .gallery-item { position: relative; cursor: pointer; animation: fadeInUp 0.6s ease-out both; }
    .item-wrapper { position: relative; overflow: hidden; border-radius: 8px; border: 1px solid rgba(222,20,0,0.2); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
    .gallery-item:hover .item-wrapper { border-color: #de1400; box-shadow: 0 0 30px rgba(222,20,0,0.3), 0 20px 40px rgba(0,0,0,0.5); transform: translateY(-5px); }
    .item-wrapper img { width: 100%; height: 220px; object-fit: cover; display: block; transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); filter: saturate(0.9); }
    .gallery-item:hover .item-wrapper img { transform: scale(1.1); filter: saturate(1.2); }
    .item-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(222,20,0,0.3) 0%, transparent 50%); opacity: 0; transition: opacity 0.4s; display: flex; align-items: center; justify-content: center; }
    .gallery-item:hover .item-overlay { opacity: 1; }
    .overlay-content { display: flex; align-items: center; gap: 10px; color: #fff; font-family: 'Oswald', sans-serif; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; background: rgba(0,0,0,0.7); padding: 10px 20px; border-radius: 4px; transform: translateY(20px); transition: transform 0.4s; }
    .gallery-item:hover .overlay-content { transform: translateY(0); }
    .zoom-icon { width: 20px; height: 20px; }
    .gallery-caption { padding: 15px 0; text-align: center; position: relative; }
    .caption-line { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 0; height: 2px; background: #de1400; transition: width 0.4s; }
    .gallery-item:hover .caption-line { width: 60%; }
    .gallery-caption span { font-family: 'Oswald', sans-serif; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 2px; color: #aaa; transition: color 0.3s; }
    .gallery-item:hover .gallery-caption span { color: #de1400; }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

    .lightbox { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.98); z-index: 2000; display: flex; align-items: center; justify-content: center; animation: fadeIn 0.3s ease-out; backdrop-filter: blur(10px); }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    .lightbox-close { position: absolute; top: 30px; right: 30px; width: 50px; height: 50px; color: #fff; cursor: pointer; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; transition: all 0.3s; display: flex; align-items: center; justify-content: center; }
    .lightbox-close:hover { background: #de1400; border-color: #de1400; transform: rotate(90deg); }
    .lightbox-close svg { width: 24px; height: 24px; }
    .lightbox-nav { position: absolute; top: 50%; transform: translateY(-50%); width: 60px; height: 60px; color: #fff; cursor: pointer; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 50%; transition: all 0.3s; display: flex; align-items: center; justify-content: center; }
    .lightbox-nav:hover { background: rgba(222,20,0,0.3); border-color: #de1400; }
    .lightbox-prev { left: 30px; } .lightbox-next { right: 30px; }
    .lightbox-nav svg { width: 30px; height: 30px; }
    .lightbox-content { max-width: 900px; width: 90vw; animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
    @keyframes slideIn { from { opacity: 0; transform: scale(0.9) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
    .lightbox-image-wrapper { position: relative; border-radius: 8px; overflow: hidden; border: 2px solid #de1400; box-shadow: 0 0 60px rgba(222,20,0,0.4); }
    .lightbox-image-wrapper img { width: 100%; max-height: 70vh; object-fit: contain; display: block; background: #111; }
    .image-glow { position: absolute; top: -50%; left: -50%; right: -50%; bottom: -50%; background: radial-gradient(circle, rgba(222,20,0,0.2) 0%, transparent 70%); pointer-events: none; animation: glowPulse 3s infinite; }
    @keyframes glowPulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
    .lightbox-info { padding: 30px 20px 20px; text-align: center; }
    .lightbox-info h2 { font-family: 'Oswald', sans-serif; font-size: 36px; font-weight: 600; text-transform: uppercase; letter-spacing: 4px; margin-bottom: 15px; color: #fff; }
    .info-line { width: 80px; height: 3px; background: #de1400; margin: 0 auto 20px; }
    .lightbox-info p { color: #888; font-size: 16px; line-height: 1.6; max-width: 600px; margin: 0 auto; }
    .lightbox-counter { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); font-family: 'Oswald', sans-serif; font-size: 14px; letter-spacing: 3px; color: rgba(255,255,255,0.5); }

    @media (max-width: 768px) {
      .page-title { font-size: 36px; letter-spacing: 4px; }
      .gallery-grid { grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
      .lightbox-nav { width: 45px; height: 45px; } .lightbox-prev { left: 10px; } .lightbox-next { right: 10px; }
      .lightbox-close { top: 15px; right: 15px; width: 40px; height: 40px; }
    }
  `]
})
export class GalleryComponent {
  tr = inject(TranslationService);
  lightboxOpen = false;
  selectedImage: any = null;
  currentIndex = 0;

  v = '?v=2';
  getImages() {
    return [
      { id: 1, name: this.tr.t('gallery.witcher'), desc: this.tr.t('gallery.witcherDesc'), url: 'assets/images/SUx182_2x.webp' + this.v },
      { id: 2, name: this.tr.t('gallery.ciri'), desc: this.tr.t('gallery.ciriDesc'), url: 'assets/images/i (10).webp' + this.v },
      { id: 3, name: this.tr.t('gallery.yennefer'), desc: this.tr.t('gallery.yenneferDesc'), url: 'assets/images/S600xU_2x (1).webp' + this.v },
      { id: 4, name: this.tr.t('gallery.wolfSchool'), desc: this.tr.t('gallery.wolfSchoolDesc'), url: 'assets/images/i (2).webp' + this.v },
      { id: 5, name: this.tr.t('gallery.kaerMorhen'), desc: this.tr.t('gallery.kaerMorhenDesc'), url: 'assets/images/i (3).webp' + this.v },
      { id: 6, name: this.tr.t('gallery.novigrad'), desc: this.tr.t('gallery.novigradDesc'), url: 'assets/images/S600xU_2x (2).webp' + this.v },
      { id: 7, name: this.tr.t('gallery.wildHunt'), desc: this.tr.t('gallery.wildHuntDesc'), url: 'assets/images/tw3wh-steelbook-skellige-back.webp' + this.v },
      { id: 8, name: this.tr.t('gallery.sword'), desc: this.tr.t('gallery.swordDesc'), url: 'assets/images/i (4).webp' + this.v }
    ];
  }

  openLightbox(img: any) {
    this.selectedImage = img;
    this.currentIndex = this.getImages().findIndex((i: any) => i.id === img.id);
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
    this.selectedImage = null;
  }

  prevImage() {
    const images = this.getImages();
    this.currentIndex = (this.currentIndex - 1 + images.length) % images.length;
    this.selectedImage = images[this.currentIndex];
  }

  nextImage() {
    const images = this.getImages();
    this.currentIndex = (this.currentIndex + 1) % images.length;
    this.selectedImage = images[this.currentIndex];
  }
}
