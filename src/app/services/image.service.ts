import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })// <-- " Le dice a Angular que es proveedor en
                                   //       inyección de dependencias (DI)"
export class ImageService {
  constructor(private http: HttpClient, @Inject('TMDB_CONFIG') private tmdbConfig: any) {}

//    " el constructor de servicios es parte de la inyección de dependencias "

  getImagesFromTMDB() {// <-- " Este método retorna un Observable de RxJS "
    const url = `${this.tmdbConfig.baseUrl}${this.tmdbConfig.endpoints.popular}?api_key=${this.tmdbConfig.apiKey}&language=${this.tmdbConfig.defaultLanguage}`;
    return this.http.get<any>(url);
  }

//         " image.service.ts es el intermediario entre la app y la api "

  getImages() {
    return [
      { src: 'https://picsum.photos/200/300?random=10', title: 'Montaña' },
      { src: 'https://picsum.photos/200/300?random=11', title: 'Playa' },//<--"Asi empezamos"
      { src: 'https://picsum.photos/200/300?random=12', title: 'Ciudad' },
      { src: 'https://picsum.photos/200/300?random=13', title: 'Bosque' },
    ];
  }

  getTmdbConfig() {
    return this.tmdbConfig;
  }
}
