import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="container">
        <h1 class="page-title">Галерея</h1>
        <div class="gallery-grid">
          @for (img of images; track img.id) {
            <div class="gallery-item" (click)="openLightbox(img)">
              <div class="gallery-placeholder">{{ img.name }}</div>
            </div>
          }
        </div>
      </div>
    </div>

    @if (lightboxOpen) {
      <div class="lightbox" (click)="closeLightbox()">
        <button class="lightbox-close" (click)="closeLightbox()">&times;</button>
        <div class="lightbox-content">
          <h2>{{ selectedImage?.name }}</h2>
        </div>
      </div>
    }
  `,
  styles: [`
    .page-container { min-height: 100vh; background: #000; padding: 120px 0 60px; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .page-title { font-family: 'Oswald', sans-serif; font-size: 48px; font-weight: 600; text-transform: uppercase; letter-spacing: 5px; margin-bottom: 50px; text-align: center; }
    .gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; }
    .gallery-item { aspect-ratio: 1; background: #1a1a1a; border: 1px solid rgba(222,20,0,0.3); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s; }
    .gallery-item:hover { border-color: #de1400; transform: scale(1.02); }
    .gallery-placeholder { font-size: 48px; opacity: 0.3; }
    .lightbox { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.95); z-index: 2000; display: flex; align-items: center; justify-content: center; }
    .lightbox-close { position: absolute; top: 20px; right: 30px; font-size: 40px; color: white; cursor: pointer; background: none; border: none; }
    .lightbox-content { color: white; text-align: center; }
    .lightbox-content h2 { font-family: 'Oswald', sans-serif; font-size: 32px; }
  `]
})
export class GalleryComponent {
  images = [
    { id: 1, name: 'witcher_cover' },
    { id: 2, name: 'witcher_art1' },
    { id: 3, name: 'witcher_art2' },
    { id: 4, name: 'witcher_art3' },
    { id: 5, name: 'witcher_art4' },
    { id: 6, name: 'witcher_art5' },
    { id: 7, name: 'witcher_art6' }
  ];

  lightboxOpen = false;
  selectedImage: any = null;

  openLightbox(img: any) {
    this.selectedImage = img;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
    this.selectedImage = null;
  }
}
