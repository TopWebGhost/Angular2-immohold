import { Component } from '@angular/core';

@Component({
  selector: 'question-info-1-mobile-food-floor',  // <question-info-1></question-info-1>

  templateUrl: './question-info-1.template.html',

  styleUrls: ['../../sass/question-info.scss']
})

export class questioninfo1foodfloorComponent {
  private showContainer:boolean;
  private top:string;
  constructor(){
    this.showContainer = false;
  }
  toggleContainer(){
    this.showContainer = !this.showContainer;
  }
}