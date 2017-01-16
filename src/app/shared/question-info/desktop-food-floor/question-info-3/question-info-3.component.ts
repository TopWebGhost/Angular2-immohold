import { Component } from '@angular/core';

@Component({
  selector: 'question-info-3-desktop-food-floor',  // <question-info-1-desktop></question-info-1-desktop>

  templateUrl: './question-info-3.template.html',

  styleUrls: ['../../sass/question-info.scss']
})

export class questioninfo3desktopfoodfloorComponent {
  private showContainer:boolean;
  private top:string;
  constructor(){
    this.showContainer = false;
  }
  toggleContainer(){
    this.showContainer = !this.showContainer;
  }
}