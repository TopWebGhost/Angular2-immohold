import { Component } from '@angular/core';
@Component({
  selector: 'analysis-mobile',  // <home></home>

  templateUrl: './mobile.template.analysis.html',

  styleUrls: ['../analysis.style.scss']
})
export class analysisMobile {

  goBack(): void {
    window.history.back();
  }
}
