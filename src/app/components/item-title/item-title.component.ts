import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-title',
  standalone: true,
  imports: [],
  templateUrl: './item-title.component.html',
  styleUrl: './item-title.component.css'
})
export class ItemTitleComponent {
  @Input() public titleName: string = '';
}
