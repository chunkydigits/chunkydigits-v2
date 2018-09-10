import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() image: string; 
  @Input() title: string; 
  @Input() description: string; 
  @Input() moreLink: string; 
  @Input() moreLinkCaption: string; 

  constructor() { 
    console.log("image", this.image);
  }

  ngOnInit() {
  }

}
