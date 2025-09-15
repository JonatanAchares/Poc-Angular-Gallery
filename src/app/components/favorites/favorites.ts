// src/components/favorites/favorites.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FavoritesService, Movie } from '../../services/favorites.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="favorites-container">
      <h2>Mis Películas Favoritas</h2>
      
      <div class="favorites-stats">
        <p>{{ favorites.length }} película{{ favorites.length !== 1 ? 's' : '' }} en favoritos</p>
      </div>

      <div *ngIf="favorites.length === 0" class="empty-state">
        <div class="empty-icon">🎬</div>
        <h3>No tienes películas favoritas aún</h3>
        <p>Explora la galería y agrega películas a tus favoritos haciendo clic en el corazón</p>
        <a routerLink="/gallery" class="btn-primary">Ir a la Galería</a>
      </div>

      <div class="favorites-grid" *ngIf="favorites.length > 0">
        <div class="favorite-card" *ngFor="let movie of favorites">
          <div class="movie-poster">
            <img [src]="movie.src" [alt]="movie.title" />
            <button 
              class="remove-btn"
              (click)="removeFavorite(movie)"
              title="Quitar de favoritos"
            >
              ❌
            </button>
          </div>
          <div class="movie-info">
            <h4>{{ movie.title }}</h4>
            <button 
              class="toggle-favorite-btn"
              (click)="removeFavorite(movie)"
            >
              ❤️ Quitar de favoritos
            </button>
          </div>
        </div>
      </div>

      <div class="actions" *ngIf="favorites.length > 0">
        <button 
          class="btn-secondary" 
          (click)="clearAllFavorites()"
          [disabled]="favorites.length === 0"
        >
          Limpiar todos los favoritos
        </button>
        <a routerLink="/gallery" class="btn-primary">Volver a la Galería</a>
      </div>
    </div>
  `,
  styles: [`
    .favorites-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    h2 {
      text-align: center;
      color: #333;
      margin-bottom: 1rem;
    }

    .favorites-stats {
      text-align: center;
      margin-bottom: 2rem;
      color: #666;
    }

    .empty-state {
      text-align: center;
      padding: 3rem 1rem;
    }

    .empty-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .empty-state h3 {
      color: #555;
      margin-bottom: 0.5rem;
    }

    .empty-state p {
      color: #777;
      margin-bottom: 2rem;
    }

    .favorites-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .favorite-card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: transform 0.3s ease;
    }

    .favorite-card:hover {
      transform: translateY(-5px);
    }

    .movie-poster {
      position: relative;
      text-align: center;
      padding: 1rem;
    }

    .favorite-card img {
      width: 100%;
      max-width: 180px;
      height: 270px;
      object-fit: cover;
      border-radius: 8px;
    }

    .remove-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      background: rgba(255, 255, 255, 0.9);
      border: none;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      cursor: pointer;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }

    .remove-btn:hover {
      background: rgba(255, 0, 0, 0.1);
      transform: scale(1.1);
    }

    .movie-info {
      padding: 1rem;
      text-align: center;
    }

    .movie-info h4 {
      margin: 0 0 1rem 0;
      color: #333;
      font-size: 1.1rem;
    }

    .toggle-favorite-btn {
      background: #ffebee;
      border: 2px solid #f48fb1;
      color: #c2185b;
      border-radius: 20px;
      padding: 8px 16px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.3s ease;
      width: 100%;
    }

    .toggle-favorite-btn:hover {
      background: #fce4ec;
      transform: translateY(-2px);
    }

    .actions {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn-primary, .btn-secondary {
      padding: 12px 24px;
      border-radius: 25px;
      text-decoration: none;
      font-weight: 500;
      cursor: pointer;
      border: none;
      transition: all 0.3s ease;
      font-size: 1rem;
    }

    .btn-primary {
      background: #1976d2;
      color: white;
    }

    .btn-primary:hover {
      background: #1565c0;
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: #f5f5f5;
      color: #666;
      border: 2px solid #ddd;
    }

    .btn-secondary:hover:not(:disabled) {
      background: #e0e0e0;
      transform: translateY(-2px);
    }

    .btn-secondary:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      .favorites-container {
        padding: 1rem;
      }
      
      .favorites-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
      }
    }
  `]
})
export class FavoritesComponent implements OnInit, OnDestroy {
  favorites: Movie[] = [];
  private favoritesSubscription?: Subscription;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    // Suscribirse a los cambios en favoritos
    this.favoritesSubscription = this.favoritesService.favorites$.subscribe(
      favorites => {
        this.favorites = favorites;
      }
    );
  }

  ngOnDestroy(): void {
    // Limpiar suscripción para evitar memory leaks
    if (this.favoritesSubscription) {
      this.favoritesSubscription.unsubscribe();
    }
  }

  removeFavorite(movie: Movie): void {
    this.favoritesService.removeFromFavorites(movie);
  }

  clearAllFavorites(): void {
    if (confirm('¿Estás seguro de que quieres eliminar todas las películas favoritas?')) {
      // Limpiar todos los favoritos
      this.favorites.forEach(movie => {
        this.favoritesService.removeFromFavorites(movie);
      });
    }
  }
}