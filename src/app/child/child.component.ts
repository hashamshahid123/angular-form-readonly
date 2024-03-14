import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnDestroy ,OnChanges{
@Output() sendTo = new EventEmitter<any>()
// private _data !: string;
// @Input()  get data() : string {
//   return this._data;
// }
// public set data(v : string) {
//   this._data = v;
// }
@Input()  data:any;
comeFromObservable:any;
sendToParent(){
this.sendTo.emit('yeh child say aya ha')
}
private subscription: Subscription;

constructor(private dataService: MyserviceService) {
  this.subscription = this.dataService.getData().subscribe(data => {
    if(data){
      console.log("cganeg",data)
    }
    this.comeFromObservable = data;
  });
}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("change")
  }

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
}
