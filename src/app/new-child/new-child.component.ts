import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.scss']
})
export class NewChildComponent {
  @Input() changeData?: any;

  @Output() eventMassege = new EventEmitter<any>();

  changeMassege() {
    this.eventMassege.emit('Hello this massege from child')
  }
}
