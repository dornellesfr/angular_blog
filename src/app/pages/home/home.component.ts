import { Component } from '@angular/core';
import { MainCardComponent } from '../../components/main-card/main-card.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { SecondCardComponent } from '../../components/second-card/second-card.component';
import { TitleComponent } from '../../components/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MainCardComponent,
    MenuComponent,
    SecondCardComponent,
    TitleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  textDescription: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium obcaecati, quas labore sit blanditiis delectus optio ipsam magni illum nesciunt';
  text1: string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum similique eius neque iusto nam ullam rem incidunt possimus corrupti, labore, explicabo consequuntur voluptatibus minus voluptates velit, id tempore aspernatur nisi!';
  text2: string = 'Lorem ipsum, dolor sit amet conse eveniet neque error quibusdam necessitatibus nam facere laudantium voluptatem ipsam.';
}
