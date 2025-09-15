// src/home/home.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-container">
      <div class="hero-section">
        <h1>¡Bienvenido a AngularMovies!</h1>
        <p>Descubre películas increíbles y crea tu lista de favoritas</p>
        
        <div class="stats">
          <div class="stat-card">
            <div class="stat-icon">🎬</div>
            <div class="stat-info">
              <h3>Películas</h3>
              <p>Varios de títulos disponibles</p>
            </div>
          </div>
          
          <div class="stat-card" *ngIf="getFavoritesCount() > 0">
            <div class="stat-icon">❤️</div>
            <div class="stat-info">
              <h3>{{ getFavoritesCount() }}</h3>
              <p>Película{{ getFavoritesCount() !== 1 ? 's' : '' }} en favoritos</p>
            </div>
          </div>
        </div>
        
        <div class="action-buttons">
          <a routerLink="/gallery" class="btn-primary">
            🎭 Explorar Galería
          </a>
          <a routerLink="/favorites" 
             class="btn-secondary"
             [class.disabled]="getFavoritesCount() === 0">
            ❤️ Ver Favoritos
            <span *ngIf="getFavoritesCount() > 0" class="count-badge">
              {{ getFavoritesCount() }}
            </span>
          </a>
        </div>
      </div>
      
      <div class="features-section">
        <h2>¿Qué puedes hacer?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3>Explora</h3>
            <p>Navega por miles de películas populares y descubre nuevos títulos</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">❤️</div>
            <h3>Favoritos</h3>
            <p>Guarda tus películas favoritas para verlas más tarde</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">👀</div>
            <h3>Vista Previa</h3>
            <p>Ve detalles de cada película antes de agregarla a favoritos</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .hero-section {
      text-align: center;
      margin-bottom: 4rem;
      padding: 3rem 0;
    }

    .hero-section h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-section > p {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 3rem;
    }

    .stats {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }

    .stat-card {
      background: white;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      gap: 1rem;
      min-width: 200px;
    }

    .stat-icon {
      font-size: 2.5rem;
    }

    .stat-info h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.5rem;
      color: #333;
    }

    .stat-info p {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
    }

    .action-buttons {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      flex-wrap: wrap;
    }

    .btn-primary, .btn-secondary {
      padding: 15px 30px;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      position: relative;
    }

    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
    }

    .btn-secondary {
      background: white;
      color: #667eea;
      border: 2px solid #667eea;
    }

    .btn-secondary:hover:not(.disabled) {
      background: #667eea;
      color: white;
      transform: translateY(-3px);
    }

    .btn-secondary.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .count-badge {
      background: #ff4757;
      color: white;
      font-size: 0.8rem;
      padding: 2px 8px;
      border-radius: 10px;
      margin-left: 0.5rem;
    }

    .features-section {
      margin-top: 4rem;
    }

    .features-section h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #333;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      background: white;
      padding: 2.5rem;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: transform 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-5px);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .feature-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #333;
    }

    .feature-card p {
      color: #666;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .home-container {
        padding: 1rem;
      }

      .hero-section h1 {
        font-size: 2rem;
      }

      .hero-section > p {
        font-size: 1rem;
      }

      .stats {
        flex-direction: column;
        align-items: center;
      }

      .action-buttons {
        flex-direction: column;
        align-items: center;
      }

      .btn-primary, .btn-secondary {
        width: 100%;
        max-width: 300px;
        justify-content: center;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {
  constructor(private favoritesService: FavoritesService) {}

  getFavoritesCount(): number {
    return this.favoritesService.getFavoritesCount();
  }
}