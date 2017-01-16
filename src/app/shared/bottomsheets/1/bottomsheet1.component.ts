import { Component } from '@angular/core';

@Component({
  selector: 'bottomsheet1',  // <question1-desktop></question1-desktop>

  templateUrl: './bottomsheet1.template.html',

  styleUrls: ['../../../questions/scss/desktop.style.question.scss']
})
export class bottomSheet1 {
  private showContainer:boolean;
  private top:string;
  constructor(){
    this.showContainer = false;
  }
  toggleContainer(){
    this.showContainer = !this.showContainer;
  }
}
