# Witcher Website 🌟

Сайт о вселенной Ведьмака с CD PROJEKT RED стилизацией.

## 🚀 Деплой на GitHub Pages

1. Создайте репозиторий на GitHub: `witcher-website`

2. Подключите локальную папку к GitHub:
```bash
cd D:\Witcher\witcher-frontend
git remote add origin https://github.com/YOUR_USERNAME/witcher-website.git
git push -u origin main
```

3. Включите GitHub Pages:
   - Settings → Pages → Source: Deploy from branch → main
   - Папка: `/ (root)`

4. Сайт будет доступен по адресу:
   **https://YOUR_USERNAME.github.io/witcher-website/**

## 📁 Структура

```
witcher-frontend/
├── docs/              # Собранные файлы для GitHub Pages
├── src/app/pages/     # Страницы
│   ├── home.component.ts
│   ├── characters.component.ts
│   ├── schools.component.ts
│   ├── gallery.component.ts
│   ├── timeline.component.ts
│   ├── games.component.ts
│   └── gwent.component.ts
└── angular.json
```

## 🎮 Страницы

- `/` — Главная
- `/characters` — Персонажи
- `/schools` — Школы Ведьмаков
- `/gallery` — Галерея
- `/timeline` — История
- `/games` — Игры
- `/gwent` — Игра Гвинт

## 🛠️ Локальный запуск

```bash
cd D:\Witcher\witcher-frontend
npx ng serve
# Откройте http://localhost:4200
```

## 📝 Для обновления сайта

```bash
# Пересобрать проект
npx ng build --base-href=/witcher-website/

# Скопировать в docs (уже настроено)

# Закоммитить и запушить
git add .
git commit -m "Update"
git push
```

---

**CD PROJEKT RED** | **GOGOL' STUDIO 2026**
