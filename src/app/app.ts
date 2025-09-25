import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { RouterOutlet } from '@angular/router';

@Component({ // <-- (Component le dice a Angular que la clase app es un componente)
  selector: 'app-root',// <-- (Nombre de componente en html)
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],// <-- (Lo que va a usar el componente)
  templateUrl: './app.html',// <-- (Ubicación .html)
  styleUrls: ['./app.css'],// <-- (Ubicación .css)
})
export class App {}
