import { Component } from '@angular/core';
@Component({
  selector: 'questions-mobile',  // <home></home>

  templateUrl: './mobile.template.questions.html',

  styleUrls: ['../scss/mobile.style.question.scss']
})
export class questionsMobile {

  constructor(){
  }
  ngOnInit() {

  }

  goBack(): void {
    window.history.back();
  }
}
