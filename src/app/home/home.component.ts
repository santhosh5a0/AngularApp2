import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../shared/Services/environment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
    //this.environmentService.SelectedEnvironment="DEV";
    //this.env=this.environmentService.SelectedEnvironment;
  }
  Test(env:string)
  {
    this.environmentService.SetEnvironment("Test");
  }
}
