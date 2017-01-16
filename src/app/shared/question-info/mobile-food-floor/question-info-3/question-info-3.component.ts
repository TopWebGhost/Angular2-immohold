import { Component } from '@angular/core';

@Component({
  selector: 'question-info-3-mobile-food-floor',  // <question-info-1></question-info-1>

  templateUrl: './question-info-3.template.html',

  styleUrls: ['../../sass/question-info.scss']
})

export class questioninfo3foodfloorComponent {
  private showContainer:boolean;
  private top:string;
  constructor(){
    this.showContainer = false;
  }
  toggleContainer(){
    this.showContainer = !this.showContainer;
  }
}