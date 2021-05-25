import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.css'],
})
export class InfoItemComponent implements OnInit {
  @Input() title: string = 'Title';
  @Input() subtitle: string = 'Subtitle';
  constructor() { }

  ngOnInit(): void { }
}