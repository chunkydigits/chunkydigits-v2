import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() siteContent: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.siteContent)
  }

  public select() {
    this.siteContent.selected = true;
  }
}
