import { Component } from '@angular/core';

@Component({
  selector: 'question-info-2-mobile',  // <question-info-1></question-info-1>

  templateUrl: './question-info-2.template.html',

  styleUrls: ['../../sass/question-info.scss']
})

export class questioninfo2Component {
  private showContainer:boolean;
  private top:string;
  constructor(){
    this.showContainer = false;
  }
  toggleContainer(){
    this.showContainer = !this.showContainer;
  }
}