import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ImageService {
  getImages() {
    return [
      { src: 'https://picsum.photos/200/300?random=10', title: 'Montaña' },
      { src: 'https://picsum.photos/200/300?random=11', title: 'Playa' },
      { src: 'https://picsum.photos/200/300?random=12', title: 'Ciudad' },
      { src: 'https://picsum.photos/200/300?random=13', title: 'Bosque' },
    ];
  }
}
