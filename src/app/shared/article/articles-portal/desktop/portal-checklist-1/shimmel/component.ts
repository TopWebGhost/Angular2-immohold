import { Component } from '@angular/core';
import { AppState } from '../../../../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'portal-checklist-1-shimmel',  // <home></home>

  templateUrl: './template.html',

  styleUrls: ['../../../../sass/article.style.scss']
})
export class portalChecklist1ShimmelComponent {
  constructor(public appState: AppState,public router: Router) {

  }

  goCheckList(){
    this.appState.set('direction','next');
    this.router.navigateByUrl('content-checklist',{ skipLocationChange: true });
  }
}

