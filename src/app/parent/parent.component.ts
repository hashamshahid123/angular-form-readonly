import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
sendData="parent say child ko gaya"
  comefrom: any;
  searchTerm:any;
  people: any=[];

comefrmChild(event:any){
  this.comefrom=event;
}
names = ['Maverick', 'Stanislav', 'Arxero', 'Feruchio', 'Mavericus', 'Arxiour'];

  constructor(private dataService:MyserviceService) {
    this.names.forEach((e, i) => this.people.push({
      name: e,
      age: i + 20,
      country: 'Bulgaria'
    }));
}


sendDataToConsumers() {
  this.dataService.sendData(this.searchTerm);
}

changeData(){
          
}
}