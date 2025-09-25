// src/components/gallery/gallery.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from '../../services/image.service';
import { FavoritesService, Movie } from '../../services/favorites.service';

@Component({
  selector: 'app-gallery',

  standalone: true,//          " gallery.ts es la lógica del componente galería "

  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css'],
})
export class GalleryComponent {
  images: Movie[] = [];
  selectedImage?: Movie;

  constructor(
    private imageService: ImageService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    const tmdbConfig = this.imageService.getTmdbConfig();
    this.imageService.getImagesFromTMDB().subscribe((data) => {
      this.images = data.results.map((movie: any) => ({
        src: `${tmdbConfig.imageBaseUrl}/${tmdbConfig.defaultImageSize}${movie.poster_path}`,
        title: movie.title || movie.name,
      }));// <-- tema observables
    });
  }

  showImage(img: Movie) {
    this.selectedImage = img;
  }

  toggleFavorite(movie: Movie, event: Event) {
    // Prevenir que se abra la vista previa al hacer clic en el botón de favoritos
    event.stopPropagation();
    this.favoritesService.toggleFavorite(movie);
  }

  isFavorite(movie: Movie): boolean {
    return this.favoritesService.isFavorite(movie);
  }
}