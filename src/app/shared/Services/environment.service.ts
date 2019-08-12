import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  Environment:string;
  SelectedEnvironment=new Subject();
  constructor() {
    this.SelectedEnvironment.next("DEV");
    this.Environment="DEV"
    //MyEnvironment=new Subject();
   }
   SetEnvironment(env:string){
    this.SelectedEnvironment.next(env);
    this.Environment=env
   }
}
