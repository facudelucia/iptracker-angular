import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  @Output() textWord: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  handlerInputChange(inputText: string) {
    this.textWord.emit(inputText);
  }
}