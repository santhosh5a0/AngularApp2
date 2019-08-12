import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnvironmentComponent } from './environment/environment.component';
import { DatafeedsComponent } from './datafeeds/datafeeds.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'env',component:EnvironmentComponent
  },
  {
    path:'feeds',component:DatafeedsComponent
  },
{path:'**',redirectTo:'env'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
