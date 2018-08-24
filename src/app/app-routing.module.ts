import { ModuleWithProviders, NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";

import { environment } from "./../environments/environment";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    }
    /*,
    { path: "implicit/callback", component: OktaCallbackComponent },
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

export const appRoutingComponents = [HomeComponent];
