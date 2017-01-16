import { Component } from '@angular/core';
@Component({
  selector: 'video-other-mobile',  // <home></home>

  templateUrl: './videoothermobile.template.html',

  styleUrls: ['../sass/video.style.scss']
})
export class videoothermobileComponent {
  constructor() {
    this.isMold = true;
    //this.isMold = false;
    //this.isFoodFloor = true;
    this.isFoodFloor = false;
  }
  private isMold:boolean;
  private isFoodFloor:boolean;
}

