import { Component } from '@angular/core';
import { AppState } from '../../../../../app.service';
import { Router } from '@angular/router';
@Component({

  selector: 'tag-line-portal-mobile-shimmel-2',  // <home></home>

  templateUrl: './template.html',

  styleUrls: ['../../../sass/tag-line.style.scss']
})
export class taglinePortalMobileShimmel2 {
  constructor(public appState: AppState,public router: Router) {

  }

  goArticle(){
    this.appState.set('direction','next');
    this.router.navigateByUrl('contentArticleShimmel2',{ skipLocationChange: true });
  }
}

