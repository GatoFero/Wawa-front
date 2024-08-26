import {Component, Input} from '@angular/core';

@Component({
  selector: 'direction-button',
  standalone: true,
  imports: [],
  templateUrl: './direction-buttons.component.html',
  styleUrl: './direction-buttons.component.css'
})
export class DirectionButtonsComponent {
  @Input() directionButton?: DirectionButton;
}
export interface DirectionButton {
  name: string;
  icon: string;
  link: string;
}
