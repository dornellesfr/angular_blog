import { Component } from '@angular/core';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.css'
})
export class MainCardComponent {
  titleCard: string = 'Novo Kung Fu Panda com muitas novidades por aí!';
  descriptionCard: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet maiores ullam sequi voluptatum unde accusantium consequuntur voluptatem beatae ducimus quam neque enim aut sapiente, iure at ut. Distinctio, doloribus eos?';
}
