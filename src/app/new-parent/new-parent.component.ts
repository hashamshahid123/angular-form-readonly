import { Component } from '@angular/core';

@Component({
  selector: 'app-new-parent',
  templateUrl: './new-parent.component.html',
  styleUrls: ['./new-parent.component.scss']
})
export class NewParentComponent {

  text = ''
  newEventMassege(massege: any) {
    console.log("massege recived from a child" + massege);
  this.text = massege    
  }
}
