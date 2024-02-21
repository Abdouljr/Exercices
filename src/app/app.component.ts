import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, NavbarComponent]
})
export class AppComponent implements OnInit {
  title = 'netflex-clone';
  faIconLibrary = inject(FaIconLibrary)
  ngOnInit() {
    this.initFontAwesome();
  }

  initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
