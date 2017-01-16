import { Component } from '@angular/core';
import { AppState } from '../../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'other-articles-to-pest-article-1',  // <home></home>

  templateUrl: './template.html',

  styleUrls: ['../sass/other-articles.style.scss']
})
export class otherArticlesComponentToPestArticle1 {
  constructor(public appState: AppState,public router: Router) {

  }

  goNext(){
    this.appState.set('direction','next');
    this.router.navigateByUrl('contentArticlePest1',{ skipLocationChange: true });
  }
}