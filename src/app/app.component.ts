import { Component } from '@angular/core';
import { content } from "../app/content"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CHUNKYDIGITS Ltd.';
  public siteContent: any = content;
  public showMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.siteContent)
  }

  public showMenuRows() {
    this.showMenu = !this.showMenu;
  }

}
