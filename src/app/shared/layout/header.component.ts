import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../Services/environment.service';

//import { User, UserService } from '../../core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  env:string;
environmentService:EnvironmentService;
  constructor(env:EnvironmentService) { 
    this.environmentService=env;
  }


  ngOnInit() {
    this.env=this.environmentService.Environment;
    this.environmentService.SelectedEnvironment.subscribe((e:string)=>{
    this.env=e;
    })
    // this.userService.currentUser.subscribe(
    //   (userData) => {
    //     this.currentUser = userData;
    //   }
    // );
  }
}
