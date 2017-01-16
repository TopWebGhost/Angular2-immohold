import { Component } from '@angular/core';
import { AppState } from '../../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'other-articles-to-shimmel-article-2',  // <home></home>

  templateUrl: './template.html',

  styleUrls: ['../sass/other-articles.style.scss']
})
export class otherArticlesComponentToShimmelArticle2 {
  constructor(public appState: AppState,public router: Router) {

  }

  goNext(){
    this.appState.set('direction','next');
    //this.router.navigateByUrl('content-checklist',{ skipLocationChange: true });
    this.router.navigateByUrl('contentArticleShimmel2',{ skipLocationChange: true });
    
  }
}