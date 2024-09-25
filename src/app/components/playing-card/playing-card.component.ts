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
  // on peut passer l'attribut required true pour le rendre obligatoire @Input({required: true})
  // {transform: (value: Monster) => {}} pour faire des transformation avant l'utilisation du variable;
  //  @Input() moster: Monster = new Monster();

  // signal input
 moster: InputSignal<Monster> = input(new Monster());
}
