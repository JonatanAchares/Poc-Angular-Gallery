import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, HomeComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {}
