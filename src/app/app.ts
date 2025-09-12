import { Component } from '@angular/core';
import { GalleryComponent } from './gallery/gallery';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Galería Angular';
}
