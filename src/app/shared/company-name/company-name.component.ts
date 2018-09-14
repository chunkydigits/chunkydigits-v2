import { Component, OnInit } from "@angular/core";

@Component({
  selector: "company-name",
  templateUrl: "./company-name.component.html",
  styleUrls: ["./company-name.component.scss"]
})
export class CompanyNameComponent implements OnInit {
  public companyName: string = "CHUNKYDIGITS Ltd.";

  constructor() {}

  ngOnInit() {}
}
