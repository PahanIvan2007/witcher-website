import { Component } from '@angular/core';

@Component({
  selector: 'app-gwent',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="container">
        <h1 class="page-title">Гвинт <span>Ведьмак</span></h1>
        
        @if (!gameStarted) {
          <div class="start-screen">
            <div class="gwent-logo">
              <svg viewBox="0 0 200 100" class="gwent-emblem">
                <polygon points="100,10 120,40 120,80 100,90 80,80 80,40" fill="#de1400"/>
                <polygon points="100,20 110,40 110,70 100,78 90,70 90,40" fill="#0a0a0a"/>
              </svg>
              <h2>GWENT</h2>
            </div>
            <p class="start-text">Классическая карточная игра Севера</p>
            <button class="btn-gwent" (click)="startGame()">Начать игру</button>
          </div>
        } @else {
          <div class="game-area">
            <div class="score-bar">
              <div class="score opponent">
                <span class="score-label">Противник</span>
                <span class="score-value">{{ opponentScore }}</span>
              </div>
              <div class="round-info">
                <span>Раунд {{ currentRound }}</span>
                <span class="vs">VS</span>
              </div>
              <div class="score player">
                <span class="score-label">Вы</span>
                <span class="score-value">{{ playerScore }}</span>
              </div>
            </div>

            <div class="battlefield">
              <div class="side opponent-side">
                <div class="battlefield-row">
                  @for (card of opponentField; track card.id) {
                    <div class="battle-card">
                      <div class="card-power">{{ card.power }}</div>
                      <div class="card-name">{{ card.name }}</div>
                    </div>
                  }
                </div>
                <div class="side-label">Поле противника ({{ getRowTotal(opponentField) }})</div>
              </div>

              <div class="divider"></div>

              <div class="side player-side">
                <div class="battlefield-row">
                  @for (card of playerField; track card.id) {
                    <div class="battle-card player-card" (click)="passCardToOpponent(card)">
                      <div class="card-power">{{ card.power }}</div>
                      <div class="card-name">{{ card.name }}</div>
                    </div>
                  }
                </div>
                <div class="side-label">Ваше поле ({{ getRowTotal(playerField) }})</div>
              </div>
            </div>

            <div class="hand-section">
              <h3>Ваша рука</h3>
              <div class="hand-cards">
                @for (card of playerHand; track card.id) {
                  <div class="hand-card" (click)="playCard(card)">
                    <div class="card-faction">{{ card.faction }}</div>
                    <div class="card-emoji">{{ card.emoji }}</div>
                    <div class="card-power-large">{{ card.power }}</div>
                    <div class="card-name-full">{{ card.name }}</div>
                  </div>
                }
              </div>
            </div>

            <div class="actions">
              <button class="btn-pass" (click)="passRound()">Пас</button>
              <button class="btn-new-game" (click)="startGame()">Новая игра</button>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .page-container { min-height: 100vh; background: linear-gradient(180deg, #1a0a0a 0%, #0a0a0a 50%, #000 100%); padding: 120px 0 40px; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .page-title { font-family: 'Oswald', sans-serif; font-size: 48px; font-weight: 600; text-transform: uppercase; letter-spacing: 5px; margin-bottom: 40px; text-align: center; }
    .page-title span { color: #de1400; }

    .start-screen { text-align: center; padding: 80px 0; }
    .gwent-logo { margin-bottom: 30px; }
    .gwent-emblem { width: 150px; height: 75px; }
    .gwent-logo h2 { font-family: 'Oswald', sans-serif; font-size: 64px; font-weight: 700; letter-spacing: 20px; color: #de1400; margin-top: 10px; }
    .start-text { font-size: 20px; color: rgba(255,255,255,0.6); margin-bottom: 50px; letter-spacing: 3px; }
    .btn-gwent { display: inline-block; padding: 20px 50px; background: #de1400; color: #fff; font-family: 'Oswald', sans-serif; font-size: 18px; font-weight: 600; letter-spacing: 3px; border: none; cursor: pointer; transition: all 0.3s; }
    .btn-gwent:hover { background: #ff2020; transform: scale(1.05); }

    .score-bar { display: flex; justify-content: space-between; align-items: center; background: rgba(26,26,26,0.9); padding: 20px 30px; margin-bottom: 20px; border: 1px solid rgba(222,20,0,0.3); }
    .score { display: flex; flex-direction: column; align-items: center; }
    .score-label { font-size: 12px; color: rgba(255,255,255,0.5); letter-spacing: 2px; }
    .score-value { font-family: 'Oswald', sans-serif; font-size: 36px; font-weight: 700; color: #de1400; }
    .score.opponent .score-value { color: #ff6b6b; }
    .round-info { text-align: center; }
    .round-info span { display: block; font-size: 14px; color: rgba(255,255,255,0.7); }
    .round-info .vs { font-size: 20px; color: #de1400; font-weight: 700; margin: 5px 0; }

    .battlefield { background: linear-gradient(180deg, #1a0505 0%, #2a0a0a 50%, #1a0505 100%); border: 2px solid rgba(222,20,0,0.3); padding: 30px; margin-bottom: 30px; min-height: 200px; }
    .side { margin-bottom: 20px; }
    .battlefield-row { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 10px; }
    .side-label { text-align: center; font-size: 12px; color: rgba(255,255,255,0.4); letter-spacing: 2px; }
    .divider { height: 2px; background: rgba(222,20,0,0.3); margin: 20px 0; }

    .battle-card { width: 70px; height: 90px; background: linear-gradient(145deg, #2a0a0a, #1a0505); border: 2px solid rgba(222,20,0,0.5); display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; }
    .battle-card.strong { border-color: #ffd700; }
    .card-power { font-family: 'Oswald', sans-serif; font-size: 24px; font-weight: 700; color: #de1400; }
    .card-name { font-size: 9px; text-align: center; color: rgba(255,255,255,0.7); padding: 5px; }
    .player-card { cursor: pointer; }
    .player-card:hover { transform: scale(1.1); border-color: #de1400; }

    .hand-section { background: rgba(26,26,26,0.8); padding: 20px; margin-bottom: 20px; border: 1px solid rgba(222,20,0,0.2); }
    .hand-section h3 { font-family: 'Oswald', sans-serif; font-size: 16px; letter-spacing: 3px; margin-bottom: 15px; color: rgba(255,255,255,0.7); }
    .hand-cards { display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; }
    .hand-card { width: 120px; background: linear-gradient(145deg, #1a0a0a, #0d0505); border: 2px solid rgba(222,20,0,0.4); padding: 15px; cursor: pointer; transition: all 0.3s; text-align: center; }
    .hand-card:hover { transform: translateY(-10px) scale(1.05); border-color: #de1400; box-shadow: 0 10px 30px rgba(222,20,0,0.4); }
    .card-faction { font-size: 10px; color: rgba(255,255,255,0.4); letter-spacing: 1px; margin-bottom: 5px; }
    .card-emoji { font-size: 36px; margin-bottom: 10px; }
    .card-power-large { font-family: 'Oswald', sans-serif; font-size: 32px; font-weight: 700; color: #de1400; }
    .card-name-full { font-size: 11px; color: #fff; margin-top: 10px; }

    .actions { display: flex; justify-content: center; gap: 20px; }
    .btn-pass { padding: 15px 40px; background: transparent; border: 2px solid rgba(222,20,0,0.5); color: rgba(255,255,255,0.7); font-family: 'Oswald', sans-serif; font-size: 14px; letter-spacing: 2px; cursor: pointer; transition: all 0.3s; }
    .btn-pass:hover { border-color: #de1400; color: #de1400; }
    .btn-new-game { padding: 15px 40px; background: #de1400; border: none; color: #fff; font-family: 'Oswald', sans-serif; font-size: 14px; letter-spacing: 2px; cursor: pointer; transition: all 0.3s; }
    .btn-new-game:hover { background: #ff2020; }

    @media (max-width: 768px) { .hand-card { width: 100px; } .battle-card { width: 60px; height: 80px; } .page-title { font-size: 32px; } }
  `]
})
export class GwentComponent {
  gameStarted = false;
  currentRound = 1;
  playerScore = 0;
  opponentScore = 0;

  playerHand: any[] = [];
  playerField: any[] = [];
  opponentField: any[] = [];

  allCards = [
    { id: 1, name: 'Геральт', power: 15, faction: 'Ведьмаки', emoji: '⚔️' },
    { id: 2, name: 'Цири', power: 15, faction: 'Ведьмаки', emoji: '🗡️' },
    { id: 3, name: 'Йеннифер', power: 12, faction: 'Маги', emoji: '🔮' },
    { id: 4, name: 'Трисс', power: 10, faction: 'Маги', emoji: '✨' },
    { id: 5, name: 'Лютик', power: 5, faction: 'Нейтральные', emoji: '🎵' },
    { id: 6, name: 'Эредін', power: 10, faction: 'Дикая Охота', emoji: '👑' }
  ];

  startGame() {
    this.gameStarted = true;
    this.currentRound = 1;
    this.playerScore = 0;
    this.opponentScore = 0;
    this.playerField = [];
    this.opponentField = [];
    
    const shuffled = [...this.allCards].sort(() => Math.random() - 0.5);
    this.playerHand = shuffled.slice(0, 5);
  }

  playCard(card: any) {
    this.playerHand = this.playerHand.filter(c => c.id !== card.id);
    this.playerField = [...this.playerField, card];
    this.opponentTurn();
  }

  opponentTurn() {
    if (this.opponentField.length < 3) {
      const randomCard = this.allCards[Math.floor(Math.random() * this.allCards.length)];
      this.opponentField = [...this.opponentField, randomCard];
    }
  }

  passCardToOpponent(card: any) {
    this.playerField = this.playerField.filter(c => c.id !== card.id);
    this.opponentField = [...this.opponentField, card];
  }

  passRound() {
    this.playerScore += this.getRowTotal(this.playerField);
    this.opponentScore += this.getRowTotal(this.opponentField);
    this.playerField = [];
    this.opponentField = [];
    
    if (this.currentRound < 3) {
      this.currentRound++;
      const shuffled = [...this.allCards].sort(() => Math.random() - 0.5);
      this.playerHand = shuffled.slice(0, 5);
    } else {
      this.gameStarted = false;
      alert(this.playerScore > this.opponentScore ? '🎉 ПОБЕДА!' : this.playerScore < this.opponentScore ? '😔 ПОРАЖЕНИЕ' : '🤝 НИЧЬЯ');
    }
  }

  getRowTotal(field: any[]): number {
    return field.reduce((sum, card) => sum + card.power, 0);
  }
}
