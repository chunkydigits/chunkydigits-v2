import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, appRoutingComponents } from './app-routing.module';
import { CardComponent } from './shared/card/card.component';
import { PageComponent } from './shared/page/page.component';
import { CompanyNameComponent } from './shared/company-name/company-name.component';

@NgModule({
  declarations: [
    AppComponent, 
    appRoutingComponents, 
    CardComponent, 
    PageComponent, CompanyNameComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
