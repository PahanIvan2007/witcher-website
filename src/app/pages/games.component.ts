import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="container">
        <h1 class="page-title">Игры <span>Ведьмак</span></h1>
        <div class="games-grid">
          @for (game of games; track game.id) {
            <div class="game-card">
              <div class="game-image">
                <div class="game-placeholder">{{ game.year }}</div>
              </div>
              <div class="game-info">
                <h3>{{ game.title }}</h3>
                <p>{{ game.year }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-container { min-height: 100vh; background: #0a0a0a; padding: 120px 0 60px; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .page-title { font-family: 'Oswald', sans-serif; font-size: 48px; font-weight: 600; text-transform: uppercase; letter-spacing: 5px; margin-bottom: 50px; text-align: center; }
    .page-title span { color: #de1400; }
    .games-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
    .game-card { background: #1a1a1a; border: 1px solid rgba(222,20,0,0.3); overflow: hidden; transition: all 0.4s; }
    .game-card:hover { transform: translateY(-10px); border-color: #de1400; box-shadow: 0 20px 40px rgba(222, 20, 0, 0.2); }
    .game-image { height: 200px; background: linear-gradient(135deg, #2a0a0a, #1a0505); display: flex; align-items: center; justify-content: center; }
    .game-placeholder { font-family: 'Oswald', sans-serif; font-size: 48px; color: #de1400; opacity: 0.5; }
    .game-info { padding: 25px; }
    .game-info h3 { font-family: 'Oswald', sans-serif; font-size: 22px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px; }
    .game-info p { font-size: 14px; color: rgba(255,255,255,0.6); }
  `]
})
export class GamesComponent {
  games = [
    { id: 1, title: 'The Witcher', year: '2007' },
    { id: 2, title: 'The Witcher 2: Assassins of Kings', year: '2011' },
    { id: 3, title: 'The Witcher 3: Wild Hunt', year: '2015' },
    { id: 4, title: 'Gwent: The Witcher Card Game', year: '2017' },
    { id: 5, title: 'Thronebreaker', year: '2018' }
  ];
}
