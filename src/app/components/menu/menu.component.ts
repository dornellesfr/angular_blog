import { Component } from '@angular/core';
import { ItemTitleComponent } from '../item-title/item-title.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ItemTitleComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
}
