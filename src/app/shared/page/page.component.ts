import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"]
})
export class PageComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  alt: string;
  @Input()
  image: string;
  public imageLocation: string;

  constructor() {}

  ngOnInit() {
    this.imageLocation = "url('./assets/images/" + this.image + "')";
  }
}
