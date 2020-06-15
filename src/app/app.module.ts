import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StartupComponent } from './startup/startup.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProductsComponent } from './products/products.component';
import { ReferencesComponent } from './references/references.component';
import { ProjectsComponent } from './projects/projects.component';
import { DevelopmentComponent } from './development/development.component';
import { LegalComponent } from './legal/legal.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    HomeComponent,
    AboutComponent,
    StartupComponent,
    ContractorsComponent,
    DocumentsComponent,
    ProductsComponent,
    ReferencesComponent,
    ProjectsComponent,
    DevelopmentComponent,
    LegalComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
