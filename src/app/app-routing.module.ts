import { ModuleWithProviders, NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";

import { environment } from "./../environments/environment";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./site/home/home.component";
import { CaseStudiesComponent } from "./site/case-studies/case-studies.component";
import { ApplicationsComponent } from "./site/applications/applications.component";
import { AboutComponent } from "./site/about/about.component";
import { BlogComponent } from "./site/blog/blog.component";
import { ContactComponent } from "./site/contact/contact.component";
import { DocumentsComponent } from "./site/documents/documents.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "case-studies",
        component: CaseStudiesComponent
    },
    {
        path: "applications",
        component: ApplicationsComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "blog",
        component: BlogComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "documents",
        component: DocumentsComponent
    }
    /*{ path: "implicit/callback", component: OktaCallbackComponent },
    { path: "logged-out", component: LoggedOutComponent },
    { path: "unauthorised", component: UnauthorisedComponent },
    { path: "**", component: ErrorComponent }*/
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            enableTracing: environment.enableRouterTracking
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}

export const appRoutingComponents = [HomeComponent, CaseStudiesComponent, AboutComponent, ApplicationsComponent, DocumentsComponent, BlogComponent, ContactComponent];
