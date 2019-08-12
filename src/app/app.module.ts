import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EnvironmentComponent } from './environment/environment.component';
import { DatafeedsComponent } from './datafeeds/datafeeds.component';
import { EnvironmentService } from './shared/Services/environment.service';

@NgModule({
  declarations: [
    AppComponent, FooterComponent, HeaderComponent, HomeComponent, EnvironmentComponent, DatafeedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EnvironmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
