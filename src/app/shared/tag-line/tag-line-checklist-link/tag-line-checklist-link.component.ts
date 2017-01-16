import { Component } from '@angular/core';
import { AppState } from '../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tag-line-checklist-link',  // <home></home>

  templateUrl: './tag-line-checklist-link.template.html',

  styleUrls: ['../sass/tag-line.style.scss']
})
export class taglinechecklistlinkComponent {

  constructor(public appState: AppState,public router: Router) {

  }




  goCheckList(){
    this.appState.set('direction','next');
    this.router.navigateByUrl('content-checklist',{ skipLocationChange: true });
  }
}

