import { Component } from '@angular/core';
import { AppState } from '../../../../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'portal-article-1-floor-mobile',  // <home></home>

  templateUrl: './template.html',

  styleUrls: ['../../../../sass/article.style.scss']
})
export class portalArticle1FloorMobileComponent {

  constructor(public appState: AppState,public router: Router) {

  }

  //goArticle(){
  //  this.appState.set('direction','next');
  //  this.router.navigateByUrl('contentArticleFloor1',{ skipLocationChange: true });
  //}
}

