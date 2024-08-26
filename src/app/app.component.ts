import { Component } from '@angular/core';
import {Author, AuthorComponent} from "./author/author.component";
import {DirectionButton, DirectionButtonsComponent} from "./direction-buttons/direction-buttons.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AuthorComponent, DirectionButtonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wawa';

  author: Author = {
    id: 'e292jej828',
    username: 'Gato',
  }

  buttons: DirectionButton[] = [
    {
      name: "Actividades",
      icon: "fa-solid fa-plus fa-2xl",
      link: ""
    },
    {
      name: "Temas",
      icon: "fa-solid fa-plus fa-2xl",
      link: ""
    },
    {
      name: "Configuración",
      icon: "fa-solid fa-gear fa-2xl",
      link: ""
    }
  ]
}
