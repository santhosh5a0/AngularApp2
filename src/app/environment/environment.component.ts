import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../shared/Services/environment.service';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit {

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
  }
  Test(env:string)
  { this.environmentService.SetEnvironment("Stage");
  }
}
