import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second-card',
  standalone: true,
  imports: [],
  templateUrl: './second-card.component.html',
  styleUrl: './second-card.component.css'
})
export class SecondCardComponent {
  @Input() title: string = '';
  @Input() data: string = '';
  @Input() imgData: string = '';
}
