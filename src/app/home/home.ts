import { Component } from '@angular/core';
import { GalleryComponent } from '../components/gallery/gallery';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
