import { Component } from '@angular/core';

@Component({
  selector: 'question-info-3-mobile',  // <question-info-1></question-info-1>

  templateUrl: './question-info-3.template.html',

  styleUrls: ['../../sass/question-info.scss']
})

export class questioninfo3Component {
  private showContainer:boolean;
  private top:string;
  constructor(){
    this.showContainer = false;
  }
  toggleContainer(){
    this.showContainer = !this.showContainer;
  }
}