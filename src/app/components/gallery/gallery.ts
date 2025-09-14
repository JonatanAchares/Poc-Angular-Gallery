import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css'],
})
export class GalleryComponent {
  images: { src: string; title: string }[] = [];
  selectedImage?: { src: string; title: string };

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    const tmdbConfig = this.imageService.getTmdbConfig();
    this.imageService.getImagesFromTMDB().subscribe((data) => {
      this.images = data.results.map((movie: any) => ({
        src: `${tmdbConfig.imageBaseUrl}/${tmdbConfig.defaultImageSize}${movie.poster_path}`,
        title: movie.title || movie.name,
      }));
    });
  }

  showImage(img: { src: string; title: string }) {
    this.selectedImage = img;
  }
}
