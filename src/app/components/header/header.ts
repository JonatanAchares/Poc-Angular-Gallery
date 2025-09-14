import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
/**
 * Uso de Signals para gestión de estado reactivo
 * Signals es una nueva forma de manejar el estado en Angular,
 * ofreciendo reactividad y mejor rendimiento.
 * Ver tema Data-Binding
 */
export class HeaderComponent {
  title = signal('Galería Angular');
}
