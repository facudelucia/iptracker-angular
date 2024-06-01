import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.css'],
})
export class InfoItemComponent {
  @Input() title: string = 'Title';
  @Input() subtitle: string = 'Subtitle';
  constructor() { }
}