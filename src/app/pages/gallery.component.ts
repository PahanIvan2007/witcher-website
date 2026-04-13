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
  images = [
    { id: 1, name: 'Геральт из Ривии', desc: 'Ведьмак - мутант, охотник на чудовищ', url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=300&fit=crop' },
    { id: 2, name: 'Цирилла', desc: 'Дочь Цинтры, Корачная поля и Львица из Цидариса', url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=300&fit=crop' },
    { id: 3, name: 'Йеннифэр', desc: 'Чародейка из Аретузы, любовь всей жизни Геральта', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop' },
    { id: 4, name: 'Ведьмачья школа Волка', desc: 'Старейшая школа ведьмаков', url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=300&fit=crop' },
    { id: 5, name: 'Каэр Морхен', desc: 'База ведьмаков - древняя крепость', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop' },
    { id: 6, name: 'Новиград', desc: 'Крупнейший город Северных королевств', url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=300&fit=crop' },
    { id: 7, name: 'Дикая Охота', desc: 'Всадники на Дикой Охоте - призраки иного мира', url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop' },
    { id: 8, name: 'Меч ведьмака', desc: 'Стальной и серебряный клинки', url: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=400&h=300&fit=crop' }
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
