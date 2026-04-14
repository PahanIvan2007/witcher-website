import { Component } from '@angular/core';

@Component({
  selector: 'app-schools',
  standalone: true,
  template: `
    <div class="page-wrapper">
      <div class="cinematic-header">
        <div class="header-bg"></div>
        <div class="header-pattern"></div>
        <div class="header-content">
          <span class="title-subtitle">Традиции и Наследие</span>
          <h1 class="title-main">Школы <span>Ведьмаков</span></h1>
          <div class="title-line"></div>
          <p class="title-description">Секреты древних мастеров, передаваемые через поколения</p>
        </div>
      </div>

      <div class="schools-section">
        <div class="container">
          <div class="schools-grid">
            @for (school of schools; track school.id; let i = $index) {
              <div class="school-card" [style.--accent]="school.color" [style.--delay]="i * 0.1 + 's'">
                <div class="card-bg"></div>
                <div class="card-content">
                  <div class="school-emblem">
                    <div class="emblem-ring outer"></div>
                    <div class="emblem-ring inner"></div>
                    <div class="emblem-letter">{{ school.letter }}</div>
                    <div class="emblem-glow"></div>
                  </div>
                  <div class="school-info">
                    <h2 class="school-name">{{ school.name }}</h2>
                    <p class="school-description">{{ school.description }}</p>
                    <div class="school-divider"></div>
                    <div class="school-specialty">
                      <span class="specialty-label">Особенность</span>
                      <span class="specialty-value">{{ school.specialty }}</span>
                    </div>
                  </div>
                </div>
                <div class="card-border-anim"></div>
              </div>
            }
          </div>
        </div>
      </div>

      <div class="lore-section">
        <div class="container">
          <div class="lore-content">
            <h2>История Школ</h2>
            <p>Ведьмаки — мутировавшие охотники на чудовищ, прошедшие суровые испытания в специальных школах-крепостях. 
            Каждая школа имела свои традиции, философию боя и методы обучения. После резни ведьмаков большинство школ прекратило существование.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .page-wrapper { background: #0a0a0a; }
    
    .cinematic-header { position: relative; height: 50vh; min-height: 350px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .header-bg { position: absolute; inset: 0; background: linear-gradient(180deg, #0f0808 0%, #0a0a0a 100%); }
    .header-pattern { position: absolute; inset: 0; opacity: 0.03; background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
    
    .header-content { position: relative; z-index: 10; text-align: center; max-width: 800px; padding: 0 20px; }
    .title-subtitle { display: block; font-family: 'Rajdhani', sans-serif; font-size: 13px; font-weight: 400; letter-spacing: 6px; text-transform: uppercase; color: rgba(222,20,0,0.7); margin-bottom: 20px; animation: fadeInDown 0.6s ease-out; }
    .title-main { font-family: 'Oswald', sans-serif; font-size: clamp(36px, 8vw, 72px); font-weight: 700; text-transform: uppercase; letter-spacing: 8px; margin-bottom: 25px; animation: fadeInUp 0.6s ease-out 0.1s both; }
    .title-main span { color: #de1400; }
    .title-line { width: 80px; height: 2px; background: linear-gradient(90deg, transparent, #de1400, transparent); margin: 0 auto 25px; animation: expandLine 0.8s ease-out 0.3s both; }
    .title-description { font-family: 'Rajdhani', sans-serif; font-size: 16px; font-weight: 300; color: rgba(255,255,255,0.5); letter-spacing: 1px; animation: fadeIn 0.6s ease-out 0.4s both; }
    @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes expandLine { from { width: 0; opacity: 0; } to { width: 80px; opacity: 1; } }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    
    .schools-section { padding: 80px 0; }
    .container { max-width: 1300px; margin: 0 auto; padding: 0 40px; }
    
    .schools-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 30px; }
    
    .school-card { position: relative; overflow: hidden; animation: cardReveal 0.7s ease-out var(--delay) both; }
    @keyframes cardReveal { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
    
    .card-bg { position: absolute; inset: 0; background: linear-gradient(145deg, #141414 0%, #0c0c0c 100%); border: 1px solid rgba(255,255,255,0.04); transition: all 0.4s; }
    .school-card:hover .card-bg { background: linear-gradient(145deg, #1a1515 0%, #0f0a0a 100%); border-color: rgba(222,20,0,0.3); }
    
    .card-border-anim { position: absolute; inset: 0; border: 2px solid transparent; transition: all 0.4s; pointer-events: none; }
    .school-card:hover .card-border-anim { border-color: rgba(222,20,0,0.5); inset: -1px; }
    
    .card-content { position: relative; z-index: 1; padding: 45px 35px; display: flex; gap: 30px; align-items: flex-start; }
    
    .school-emblem { position: relative; flex-shrink: 0; width: 90px; height: 90px; }
    .emblem-ring { position: absolute; inset: 0; border: 2px solid rgba(222,20,0,0.4); border-radius: 50%; transition: all 0.5s; }
    .emblem-ring.outer { animation: ringPulse 3s infinite ease-in-out; }
    @keyframes ringPulse { 0%, 100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.05); opacity: 0.7; } }
    .school-card:hover .emblem-ring.outer { border-color: #de1400; animation-duration: 2s; }
    .emblem-ring.inner { inset: 10px; border-width: 1px; }
    .school-card:hover .emblem-ring.inner { border-color: rgba(222,20,0,0.8); }
    .emblem-letter { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-family: 'Oswald', sans-serif; font-size: 36px; font-weight: 700; color: #de1400; transition: all 0.4s; text-shadow: 0 0 20px rgba(222,20,0,0.5); }
    .school-card:hover .emblem-letter { font-size: 40px; text-shadow: 0 0 30px rgba(222,20,0,0.8); }
    .emblem-glow { position: absolute; inset: -20px; background: radial-gradient(circle, rgba(222,20,0,0.2) 0%, transparent 70%); opacity: 0; transition: all 0.5s; }
    .school-card:hover .emblem-glow { opacity: 1; }
    
    .school-info { flex: 1; }
    .school-name { font-family: 'Oswald', sans-serif; font-size: 22px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; transition: color 0.3s; }
    .school-card:hover .school-name { color: #de1400; }
    .school-description { font-size: 14px; line-height: 1.7; color: rgba(255,255,255,0.55); margin-bottom: 20px; }
    .school-divider { width: 50px; height: 1px; background: linear-gradient(90deg, #de1400, transparent); margin-bottom: 15px; transition: width 0.4s; }
    .school-card:hover .school-divider { width: 80px; }
    .school-specialty { display: flex; flex-direction: column; gap: 5px; }
    .specialty-label { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.3); }
    .specialty-value { font-family: 'Oswald', sans-serif; font-size: 13px; font-weight: 500; letter-spacing: 1px; color: #de1400; }
    
    .lore-section { padding: 80px 0 100px; background: linear-gradient(180deg, #0a0a0a 0%, #0f0808 100%); }
    .lore-content { max-width: 800px; margin: 0 auto; text-align: center; }
    .lore-content h2 { font-family: 'Oswald', sans-serif; font-size: 32px; font-weight: 600; text-transform: uppercase; letter-spacing: 4px; margin-bottom: 25px; color: #de1400; }
    .lore-content p { font-size: 16px; line-height: 1.9; color: rgba(255,255,255,0.6); }
    
    @media (max-width: 768px) {
      .container { padding: 0 20px; }
      .schools-grid { grid-template-columns: 1fr; gap: 20px; }
      .card-content { padding: 30px 25px; flex-direction: column; align-items: center; text-align: center; }
      .school-emblem { width: 80px; height: 80px; }
      .emblem-letter { font-size: 32px; }
      .school-name { font-size: 20px; }
    }
  `]
})
export class SchoolsComponent {
  schools = [
    { id: 1, letter: 'W', name: 'Школа Волка', description: 'Самая известная и уважаемая школа. Баланс между силой и интеллектом. Геральт — её величайший выпускник.', specialty: 'БАЛАНС МЕЧА И ЗЕЛЬЕВ', color: '#de1400' },
    { id: 2, letter: 'C', name: 'Школа Кота', description: 'Ассасины и следопыты. Быстрые и ловкие бойцы, предпочитающие скорость силе.', specialty: 'СКОРОСТЬ И ЛОВКОСТЬ', color: '#ff6b35' },
    { id: 3, letter: 'M', name: 'Школа Медведя', description: 'Тяжёлая пехота и берсерки. Броня и щиты — их главное оружие.', specialty: 'СИЛА И ЗАЩИТА', color: '#8b7355' },
    { id: 4, letter: 'V', name: 'Школа Виверны', description: 'Химики и алхимики. Отравленные клинки и смертельные зелья — их конёк.', specialty: 'ЯДЫ И ЗЕЛЬЯ', color: '#4a9c6d' },
    { id: 5, letter: 'G', name: 'Школа Грифона', description: 'Гармония между физической и магической подготовкой. Редкие и одарённые бойцы.', specialty: 'МАГИЯ И БОЙ', color: '#6b5b95' },
    { id: 6, letter: 'B', name: 'Школа Барса', description: 'Элитные наёмники из благородных семей. Блестящее образование и безупречные манеры.', specialty: 'ЭЛИТНЫЕ НАЁМНИКИ', color: '#d4af37' }
  ];
}
