import {Component, Input} from '@angular/core';

@Component({
  selector: 'author',
  standalone: true,
  imports: [],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  @Input() author?: Author;
}
export interface Author{
  id: string;
  username: string;
}
