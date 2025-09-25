// src/services/favorites.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Movie {
  src: string;
  title: string;          // <-- " Aquí una interface de TypeScript "
  id?: string; // Para identificar películas únicas
}

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritesSubject = new BehaviorSubject<Movie[]>([]);
  public favorites$ = this.favoritesSubject.asObservable();

  constructor() {
    // Cargar favoritos del localStorage al inicializar
    this.loadFavoritesFromStorage();
  }

  private loadFavoritesFromStorage(): void {
    const stored = localStorage.getItem('movieFavorites');
    if (stored) {
      try {
        const favorites = JSON.parse(stored);
        this.favoritesSubject.next(favorites);
      } catch (error) {
        console.error('Error loading favorites from storage:', error);
      }
    }
  }

  private saveFavoritesToStorage(favorites: Movie[]): void {
    try {
      localStorage.setItem('movieFavorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites to storage:', error);
    }
  }

  getFavorites(): Movie[] {
    return this.favoritesSubject.value;
  }

  addToFavorites(movie: Movie): void {
    const currentFavorites = this.getFavorites();
    const movieId = this.generateMovieId(movie);
    
    // Verificar si la película ya está en favoritos
    if (!this.isFavorite(movie)) {
      const movieWithId = { ...movie, id: movieId };
      const updatedFavorites = [...currentFavorites, movieWithId];
      this.favoritesSubject.next(updatedFavorites);
      this.saveFavoritesToStorage(updatedFavorites);
    }
  }

  removeFromFavorites(movie: Movie): void {
    const currentFavorites = this.getFavorites();
    const movieId = this.generateMovieId(movie);
    const updatedFavorites = currentFavorites.filter(fav => fav.id !== movieId);
    this.favoritesSubject.next(updatedFavorites);
    this.saveFavoritesToStorage(updatedFavorites);
  }

  isFavorite(movie: Movie): boolean {
    const movieId = this.generateMovieId(movie);
    return this.getFavorites().some(fav => fav.id === movieId);
  }

  toggleFavorite(movie: Movie): void {
    if (this.isFavorite(movie)) {
      this.removeFromFavorites(movie);
    } else {
      this.addToFavorites(movie);
    }
  }

  private generateMovieId(movie: Movie): string {
    // Generar un ID único basado en el título y la URL de la imagen
    return btoa(movie.title + movie.src).replace(/[^a-zA-Z0-9]/g, '');
  }

  getFavoritesCount(): number {
    return this.getFavorites().length;
  }
}