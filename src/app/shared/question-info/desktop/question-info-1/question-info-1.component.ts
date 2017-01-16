import { Component } from '@angular/core';

@Component({
  selector: 'question-info-1-desktop',  // <question-info-1-desktop></question-info-1-desktop>

  templateUrl: './question-info-1.template.html',

  styleUrls: ['../../sass/question-info.scss']
})

export class questioninfo1desktopComponent {
  private showContainer:boolean;
  private top:string;
  constructor(){
    this.showContainer = false;
  }
  toggleContainer(){
    this.showContainer = !this.showContainer;
  }
}