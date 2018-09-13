import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() image: string; 
  @Input() title: string; 
  @Input() description: string; 
  @Input() moreLink: string; 
  @Input() moreLinkCaption: string; 

  constructor(private _router: Router) { 
    console.log("image", this.image);
  }

  goToRoute(){ 
      this._router.navigateByUrl(this.moreLink);
  }
}
