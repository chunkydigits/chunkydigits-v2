import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = "CHUNKYDIGITS Ltd's new website";
  public selectedPage: string = "";

  constructor(private _router: Router){}

  goToRoute(route: string){
    this.selectedPage = route.replace('/', '');
    this._router.navigate([route]);
  
    document.querySelector('.mdl-layout__drawer').classList.remove("is-visible");
    document.querySelector('.mdl-layout__obfuscator').classList.remove("is-visible");
  }
}
