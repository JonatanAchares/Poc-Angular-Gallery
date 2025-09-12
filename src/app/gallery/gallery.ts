import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class GalleryComponent {
  images: { src: string, title: string }[] = [];
  selectedImage?: { src: string, title: string };

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  showImage(img: { src: string, title: string }) {
    this.selectedImage = img;
  }
}
