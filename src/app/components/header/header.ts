// src/components/header/header.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="header-content">
        <div class="logo">
          <h1>🎬 AngularMovies</h1>
        </div>
        
        <nav class="navigation">
          <a routerLink="/" 
             routerLinkActive="active" 
             [routerLinkActiveOptions]="{exact: true}"
             class="nav-link">
            🏠 Inicio
          </a>
          <a routerLink="/gallery" 
             routerLinkActive="active" 
             class="nav-link">
            🎭 Galería
          </a>
          <a routerLink="/favorites" 
             routerLinkActive="active" 
             class="nav-link favorites-link">
            ❤️ Favoritos
            <span class="favorites-count" *ngIf="getFavoritesCount() > 0">
              {{ getFavoritesCount() }}
            </span>
          </a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1rem 0;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
    }

    .logo h1 {
      margin: 0;
      font-size: 1.8rem;
      font-weight: 700;
    }

    .navigation {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-link {
      color: white;
      text-decoration: none;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 25px;
      transition: all 0.3s ease;
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .nav-link:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }

    .nav-link.active {
      background: rgba(255, 255, 255, 0.2);
      font-weight: 600;
    }

    .favorites-link {
      position: relative;
    }

    .favorites-count {
      background: #ff4757;
      color: white;
      font-size: 0.8rem;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 50%;
      min-width: 18px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -5px;
      right: -5px;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }

    @media (max-width: 768px) {
      .header-content {
        padding: 0 1rem;
        flex-direction: column;
        gap: 1rem;
      }

      .logo h1 {
        font-size: 1.5rem;
      }

      .navigation {
        gap: 1rem;
      }

      .nav-link {
        font-size: 0.9rem;
        padding: 0.4rem 0.8rem;
      }
    }
  `]
})
export class HeaderComponent {
  constructor(private favoritesService: FavoritesService) {}

  getFavoritesCount(): number {
    return this.favoritesService.getFavoritesCount();
  }
}