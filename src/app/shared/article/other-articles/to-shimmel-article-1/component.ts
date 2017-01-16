import { Component } from '@angular/core';
import { AppState } from '../../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'other-articles-to-shimmel-article-1',  // <home></home>

  templateUrl: './template.html',

  styleUrls: ['../sass/other-articles.style.scss']
})
export class otherArticlesComponentToShimmelArticle1 {
  constructor(public appState: AppState,public router: Router) {

  }

  goNext(){
    this.appState.set('direction','next');
    //this.router.navigateByUrl('content-article',{ skipLocationChange: true });
    this.router.navigateByUrl('contentArticleShimmel1',{ skipLocationChange: true });
  }
}