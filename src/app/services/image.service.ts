import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ImageService {
  constructor(private http: HttpClient, @Inject('TMDB_CONFIG') private tmdbConfig: any) {}

  getImagesFromTMDB() {
    const url = `${this.tmdbConfig.baseUrl}${this.tmdbConfig.endpoints.popular}?api_key=${this.tmdbConfig.apiKey}&language=${this.tmdbConfig.defaultLanguage}`;
    return this.http.get<any>(url);
  }

  getImages() {
    return [
      { src: 'https://picsum.photos/200/300?random=10', title: 'Montaña' },
      { src: 'https://picsum.photos/200/300?random=11', title: 'Playa' },
      { src: 'https://picsum.photos/200/300?random=12', title: 'Ciudad' },
      { src: 'https://picsum.photos/200/300?random=13', title: 'Bosque' },
    ];
  }

  getTmdbConfig() {
    return this.tmdbConfig;
  }
}
