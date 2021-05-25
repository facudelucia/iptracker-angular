import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() textWord: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {

  }

  handlerInputChange(inputText: string) {
    this.textWord.emit(inputText);
  }
}