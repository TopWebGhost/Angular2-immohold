import { Component } from '@angular/core';
import { AppState } from '../../../../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'portal-article-1-pest-mobile',  // <home></home>

  templateUrl: './template.html',

  styleUrls: ['../../../../sass/article.style.scss']
})
export class portalArticle1PestMobileComponent {

  constructor(public appState: AppState,public router: Router) {

  }

  //goArticle(){
  //  this.appState.set('direction','next');
  //  this.router.navigateByUrl('contentArticlePest1',{ skipLocationChange: true });
  //}
}

