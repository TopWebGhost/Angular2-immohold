import { Component } from '@angular/core';
import { AppState } from '../../../../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'portal-checklist-1-floor',  // <home></home>

  templateUrl: './template.html',

  styleUrls: ['../../../../sass/article.style.scss']
})
export class portalChecklist1FloorComponent {
  constructor(public appState: AppState,public router: Router) {

  }

  goArticle(){
    this.appState.set('direction','next');
    this.router.navigateByUrl('contentArticleFloor2',{ skipLocationChange: true });
  }
}

