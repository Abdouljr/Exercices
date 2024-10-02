import { Component, Input, input, InputSignal } from '@angular/core';
import { Monster } from '../../models/moster.model';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {
 // signal input
 moster: InputSignal<Monster> = input(new Monster(), {alias: "pokemon", transform: (value: Monster) => {
  value.hp = 1000;
  return value;
 }}); 
}
