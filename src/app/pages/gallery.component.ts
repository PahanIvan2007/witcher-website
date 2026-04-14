import { Component, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="container">
        <h1 class="page-title">{{ tr.t('gallery.title') }}</h1>
        <div class="gallery-grid">
          @for (img of getImages(); track img.id) {
            <div class="gallery-item" (click)="openLightbox(img)">
              <img [src]="img.url" [alt]="img.name" loading="lazy">
              <div class="gallery-caption">{{ img.name }}</div>
            </div>
          }
        </div>
      </div>
    </div>

    @if (lightboxOpen) {
      <div class="lightbox" (click)="closeLightbox()">
        <button class="lightbox-close" (click)="closeLightbox()">&times;</button>
        <div class="lightbox-content" (click)="$event.stopPropagation()">
          <img [src]="selectedImage?.url" [alt]="selectedImage?.name">
          <h2>{{ selectedImage?.name }}</h2>
          <p>{{ selectedImage?.desc }}</p>
        </div>
      </div>
    }
  `,
  styles: [`
    .page-container { min-height: 100vh; background: #000; padding: 120px 0 60px; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .page-title { font-family: 'Oswald', sans-serif; font-size: 48px; font-weight: 600; text-transform: uppercase; letter-spacing: 5px; margin-bottom: 50px; text-align: center; }
    .gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
    .gallery-item { position: relative; overflow: hidden; border: 1px solid rgba(222,20,0,0.3); cursor: pointer; transition: all 0.3s; }
    .gallery-item:hover { border-color: #de1400; transform: scale(1.02); }
    .gallery-item img { width: 100%; height: 200px; object-fit: cover; display: block; }
    .gallery-caption { padding: 10px; background: rgba(0,0,0,0.8); color: #ccc; font-size: 14px; text-align: center; }
    .lightbox { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.95); z-index: 2000; display: flex; align-items: center; justify-content: center; }
    .lightbox-close { position: absolute; top: 20px; right: 30px; font-size: 40px; color: white; cursor: pointer; background: none; border: none; }
    .lightbox-content { color: white; text-align: center; max-width: 90vw; }
    .lightbox-content img { max-width: 100%; max-height: 70vh; border: 2px solid #de1400; }
    .lightbox-content h2 { font-family: 'Oswald', sans-serif; font-size: 32px; margin-top: 20px; }
    .lightbox-content p { color: #aaa; margin-top: 10px; }
  `]
})
export class GalleryComponent {
  tr = inject(TranslationService);
  lightboxOpen = false;
  selectedImage: any = null;

  getImages() {
    const lang = this.tr.currentLang();
    return [
      { id: 1, name: this.tr.t('gallery.witcher'), desc: this.tr.t('gallery.witcherDesc'), url: 'assets/images/SUx182_2x.webp' },
      { id: 2, name: this.tr.t('gallery.ciri'), desc: this.tr.t('gallery.ciriDesc'), url: 'assets/images/i (10).webp' },
      { id: 3, name: this.tr.t('gallery.yennefer'), desc: this.tr.t('gallery.yenneferDesc'), url: 'assets/images/S600xU_2x (1).webp' },
      { id: 4, name: this.tr.t('gallery.wolfSchool'), desc: this.tr.t('gallery.wolfSchoolDesc'), url: 'assets/images/i (2).webp' },
      { id: 5, name: this.tr.t('gallery.kaerMorhen'), desc: this.tr.t('gallery.kaerMorhenDesc'), url: 'assets/images/i (3).webp' },
      { id: 6, name: this.tr.t('gallery.novigrad'), desc: this.tr.t('gallery.novigradDesc'), url: 'assets/images/a652dcfff029f1f9f5e5e9bf06ee1622.jpg' },
      { id: 7, name: this.tr.t('gallery.wildHunt'), desc: this.tr.t('gallery.wildHuntDesc'), url: 'assets/images/a5fb7a948cb613a6db107e4e998684cc.jpg' },
      { id: 8, name: this.tr.t('gallery.sword'), desc: this.tr.t('gallery.swordDesc'), url: 'assets/images/S600xU_2x.webp' }
    ];
  }

  openLightbox(img: any) {
    this.selectedImage = img;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
    this.selectedImage = null;
  }
}
