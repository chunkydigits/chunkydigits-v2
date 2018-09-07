import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, appRoutingComponents } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';

@NgModule({
  declarations: [
    AppComponent, 
    appRoutingComponents, CaseStudiesComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
