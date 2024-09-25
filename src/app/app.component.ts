import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/moster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_2024';
  moster1!: Monster;
  moster2!: Monster;

  constructor(){
    this.moster1 = new Monster();
    this.moster2 = new Monster();
    this.moster1.name = "Pik";
    this.moster1.hp = 100;
    this.moster2.name = "My pokemon";
    this.moster2.hp = 98;
  }
}
