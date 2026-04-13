import { Injectable, signal } from '@angular/core';
import ru from '../../assets/i18n/ru.json';
import en from '../../assets/i18n/en.json';

type Translations = typeof ru;

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private translations: Record<string, Translations> = { ru, en };
  currentLang = signal<string>('ru');

  t(key: string): string {
    const keys = key.split('.');
    let result: any = this.translations[this.currentLang()];
    for (const k of keys) {
      result = result?.[k];
    }
    return result || key;
  }

  setLang(lang: string) {
    this.currentLang.set(lang);
    localStorage.setItem('lang', lang);
  }

  toggleLang() {
    const newLang = this.currentLang() === 'ru' ? 'en' : 'ru';
    this.setLang(newLang);
  }

  init() {
    const saved = localStorage.getItem('lang');
    if (saved && this.translations[saved]) {
      this.currentLang.set(saved);
    } else {
      const browserLang = navigator.language.slice(0, 2);
      if (this.translations[browserLang]) {
        this.currentLang.set(browserLang);
      }
    }
  }
}
