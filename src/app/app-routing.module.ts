import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StartupComponent } from './startup/startup.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProductsComponent } from './products/products.component';
import { ReferencesComponent } from './references/references.component';
import { DevelopmentComponent } from './development/development.component';
import { LegalComponent } from './legal/legal.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "startups",
    component: StartupComponent
  },
  {
    path: "contractors",
    component: ContractorsComponent
  },
  {
    path: "documents",
    component: DocumentsComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "references",
    component: ReferencesComponent
  },
  {
    path: "legal",
    component: LegalComponent
  },
  {
    path: "development",
    component: DevelopmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
