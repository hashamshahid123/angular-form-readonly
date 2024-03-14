import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService  implements OnDestroy {
  private dataSubject = new Subject<any>();

  sendData(data: any) {
    this.dataSubject.next(data);
  }

  getData() {
    return this.dataSubject.asObservable();
  }
  constructor() { }
  
  ngOnDestroy(): void {
  this.dataSubject.complete()
  }
}
