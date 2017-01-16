import { Component } from '@angular/core';

@Component({
  selector: 'question-info-1-mobile',  // <question-info-1></question-info-1>

  templateUrl: './question-info-1.template.html',

  styleUrls: ['../../sass/question-info.scss']
})

export class questioninfo1Component {
  private showContainer:boolean;
  private top:string;
  constructor(){
    this.showContainer = false;
  }
  toggleContainer(){
    this.showContainer = !this.showContainer;
  }
}