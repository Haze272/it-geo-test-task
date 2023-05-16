import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-menu-control',
  templateUrl: './menu-control.component.html',
  styleUrls: ['./menu-control.component.scss']
})
export class MenuControlComponent {
  isClosed: boolean = false;
  @Output() close: EventEmitter<boolean> = new EventEmitter;

  toggleOpen() {
    this.isClosed = !this.isClosed;
    this.close.emit(this.isClosed);
  }
}
