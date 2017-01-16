import { Component } from '@angular/core';
import { AppState } from '../../../../../app.service';
import { Router } from '@angular/router';
@Component({

  selector: 'tag-line-portal-mobile-floor-1',  // <home></home>

  templateUrl: './template.html',

  styleUrls: ['../../../sass/tag-line.style.scss']
})
export class taglinePortalMobileFloor1 {
  constructor(public appState: AppState,public router: Router) {

  }

  goArticle(){
    this.appState.set('direction','next');
    this.router.navigateByUrl('contentArticleFloor1',{ skipLocationChange: true });
  }
}

